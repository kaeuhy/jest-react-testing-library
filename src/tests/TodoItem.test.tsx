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
        const initialProps = { todo: sampleTodo };
        const utils = render(<TodoItem {...initialProps} {...props} onRemove={onRemove} />);
        const todo = props.todo || initialProps.todo;
        const input = screen.getByLabelText(todo.text, { selector: 'input' });
        const label = screen.getByText(todo.text);
        const button = screen.getByText('삭제하기');
        return {
            ...utils,
            input,
            label,
            button,
            onRemove,
        };
    };

    it('calls onRemove', () => {
        const { button, onRemove } = setup();
        fireEvent.click(button);
        expect(onRemove).toBeCalledWith(sampleTodo.id);
    });
});