import styles from './TaskList.module.css';
import List from '../../assets/notebook.svg';
import { Task, TaskType } from '../Task/Task';
import { useState } from 'react';


interface TaskListProps {
    taskList: TaskType[];
    setTasks: (taskList: TaskType[]) => void
}

export const TaskList = ({ taskList, setTasks }: TaskListProps) => {
    const [tasksDone, setTasksDone] = useState(0);

    const handleDeleteTask = (taskToBeDeleted: TaskType) => {
        const tasksWithoutDeletedOne = taskList.filter((task) => {
            if (taskToBeDeleted.isChecked === true) {
                setTasksDone(tasksDone - 1);
            }
            return task.id !== taskToBeDeleted.id;
        })
        setTasks(tasksWithoutDeletedOne);

    }

    const handleCheckedTasks = (taskCheck: number) => {
        setTasksDone(tasksDone + taskCheck);
        return tasksDone;
    }


    return (
        <main>
            <div className={styles.taskArea}>
                <div className={styles.header}>
                    <div className={styles.taskCreated}>
                        <p>Tarefas criadas</p>
                        <span>{taskList.length}</span>
                    </div>
                    <div className={styles.taskDone}>
                        <p>Concluídas</p>
                        <span>{
                            tasksDone !== 0 ?
                                `${tasksDone} de ${taskList.length}`
                                : 0
                        }
                        </span>
                    </div>
                </div>
                {
                    taskList.length === 0 ?
                        <div className={styles.taskListEmpty}>
                            <img src={List} alt="Task list icon" />
                            <p>
                                <strong>Você ainda não tem tarefas cadastradas <br /></strong>
                                Crie tarefas e organize seus itens a fazer
                            </p>
                        </div>
                        : taskList.map((task: TaskType) => {
                            return <Task
                                key={task.id}
                                taskInfo={task}
                                onDeleteTask={handleDeleteTask}
                                taskList={taskList}
                                onTaskCheck={handleCheckedTasks}
                            />

                        })
                }
            </div>
        </main>
    )
}

