import { TodoProps } from './todoProps';

export interface TodoItemProps extends TodoProps {
    onRemove: (id: number) => void;
}