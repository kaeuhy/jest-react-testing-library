import { TodoListProps } from '@types/todoListProps';
import { TodoItem } from '@components/TodoItem';

export const TodoList = ({ todos, onRemove, handleCheckBox }: TodoListProps) => (
    <ul data-testid="TodoList">
        {todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onRemove={onRemove}
                handleCheckBox={handleCheckBox}
            />
        ))}
    </ul>
);
