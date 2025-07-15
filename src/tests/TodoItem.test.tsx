import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '@components/TodoItem';

describe('<TodoItem />', () => {
    const sampleTodo = {
        id: 1,
        text: 'TODO-TDD',
        done: false,
    };

    const setup = (props = {} as TodoProps) => {
        const onRemove = jest.fn();
        const handleCheckBox = jest.fn();
        const initialProps = {todo: sampleTodo};
        const utils = render(
            <TodoItem {...initialProps} {...props} onRemove={onRemove} handleCheckBox={handleCheckBox}/>
        );
        const todo = props.todo || initialProps.todo;
        const input = screen.getByLabelText(todo.text, {selector: 'input'});
        const label = screen.getByText(todo.text);
        const button = screen.getByText('삭제하기');
        return {
            ...utils,
            input,
            label,
            button,
            onRemove,
            handleCheckBox,
        };
    };

    it('calls handleCheckBox', () => {
        const {input, handleCheckBox} = setup();
        fireEvent.click(input);
        expect(handleCheckBox).toBeCalledWith(sampleTodo.id, !sampleTodo.done);
    });
});