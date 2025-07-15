import {TodoApp} from "@components/TodoApp";
import {screen, render} from "@testing-library/react";

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
});