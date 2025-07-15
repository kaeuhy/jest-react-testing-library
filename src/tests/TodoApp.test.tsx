import {TodoApp} from "@components/TodoApp";
import {screen, render, fireEvent} from "@testing-library/react";

describe('<TodoApp />', () => {
    it('renders TodoForm and TodoList', () => {
        render(<TodoApp />);
        screen.getByText('등록하기');
        screen.getByTestId('TodoList');
    });

    it('renders two defaults todos', () => {
        render(<TodoApp />);
        screen.getByText('TODO-TDD');
        screen.getByText('Velog 작성하기');
    });

    it('creates new todo', () => {
        render(<TodoApp/>);
        const input = screen.getByPlaceholderText('할 일을 입력하세요');
        const button = screen.getByText('등록하기');
        fireEvent.change(input, {
            target: {
                value: '라면 끓이기',
            },
        });
        fireEvent.click(button);
        screen.getByText('라면 끓이기');
    });
});