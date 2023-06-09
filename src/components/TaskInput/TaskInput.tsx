import styles from './TaskInput.module.css';
import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from 'react';
import { TaskType } from '../Task/Task';
import { v4 as uuidv4 } from 'uuid';
import { TaskList } from '../TaskList/TaskList';

export const TaskInput = () => {
    const [taskContent, setTaskContent] = useState("");
    const [tasks, setTasks] = useState<Array<TaskType>>([]);

    const addTask = (taskDescription: string) => {
        const task: TaskType = {
            id: uuidv4(),
            isChecked: false,
            description: taskDescription,
        }

        setTasks((previousTasks) => [...previousTasks, task]);
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setTaskContent(event.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTask(taskContent);
        setTaskContent('');
    }

    const isInputEmpty = taskContent.trim().length === 0;

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    value={taskContent}
                    className={styles.formInput}
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTaskChange}
                />
                <button className={styles.formBtn} type="submit" disabled={isInputEmpty}>
                    Criar <PlusCircle size={22} weight="bold" />
                </button>
            </form>
            <TaskList taskList={tasks} setTasks={setTasks}/>
        </>
    )
}
