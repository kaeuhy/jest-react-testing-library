import {TodoForm} from "@components/TodoForm";
import {TodoList} from "@components/TodoList";
import {useEffect, useState} from "react";
import {Todo} from "@types/todoProps";
import React, { useCallback } from "react";

export const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const data = [
            {
                id: 1,
                text: 'TODO-TDD',
                done: true,
            },
            {
                id: 2,
                text: 'Velog 작성하기',
                done: true,
            },
        ];
        setTodos(data);
    }, []);

    const onInsert = useCallback(
        (value: string) => {
            const newId = todos[todos.length - 1] ? todos[todos.length - 1].id + 1 : 1;

            const newData = {
                id: newId,
                text: value,
                done: false,
            };
            setTodos(todos => [...todos, newData]);
        },
        [todos]
    );

    const onRemove = useCallback((id: number) => {
        console.log(id, 'onRemove');
    }, []);

    const handleCheckBox = useCallback(
        (id: number, done: boolean) => {
            const filtered = todos.map(data => {
                if (data.id === id) {
                    return { ...data, done };
                }
                return data;
            });
            setTodos(filtered);
        },
        [todos]
    );

    return (
        <div>
            <TodoForm data-testid="helloworld" onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} handleCheckBox={handleCheckBox} />
        </div>
    );
};