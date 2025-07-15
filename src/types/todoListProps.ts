export interface TodoListProps {
    todos: Todo[];
    onRemove: (id: number) => void;
}