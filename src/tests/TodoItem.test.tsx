import { render, screen } from '@testing-library/react';
import { TodoItem } from '@components/TodoItem';

describe('<TodoItem />', () => {
    const sampleTodo = {
        id: 1,
        text: 'TODO-TDD',
        done: false,
    };

    const setup = (props = {} as TodoProps) => {
        const initialProps = { todo: sampleTodo };
        const utils = render(<TodoItem {...initialProps} {...props}/>);
        const todo = props.todo || initialProps.todo;
        const input = screen.getByLabelText(todo.text, { selector: 'input' });
        const label = screen.getByText(todo.text);
        const button = screen.getByText('삭제');
        return {
            ...utils,
            input,
            label,
            button,
        };
    };

    it('has input, label, button', () => {
        const { input, label, button } = setup();
        expect(input).toBeTruthy();
        expect(label).toBeTruthy();
        expect(button).toBeTruthy();
    });

    it('does not show check and line-through when done is false', () => {
        const { input, label } = setup({ todo: {...sampleTodo, done: false } });
        expect(input).not.toBeChecked();
        expect(label).not.toHaveStyle('text-decoration: line-through;');
    });

    it('shows check and line-through when done is true', () => {
        const { input, label } = setup({ todo: {...sampleTodo, done: true } });
        expect(input).toBeChecked();
        expect(label).toHaveStyle('text-decoration: line-through;');
    });
});