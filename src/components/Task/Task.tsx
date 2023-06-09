import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';
import { useState } from 'react';
import styles from './Task.module.css';

export interface TaskType {
    id: string;
    isChecked: boolean;
    description: string;
}

interface TaskProp {
    taskInfo: TaskType;
    onDeleteTask: (taskId: string) => void;
    taskList: TaskType[];
    onTaskCheck: (totalTasks: number) => void;
}

export const Task = ({ taskInfo, onDeleteTask, taskList, onTaskCheck }: TaskProp) => {

    const [isChecked, setIsChecked] = useState(taskInfo.isChecked);

    const handleCheckClick = () => {
        const clickedTask = taskList.find((task) => task.id === taskInfo.id);
        if (!isChecked && clickedTask) {
            setIsChecked(true);
            onTaskCheck(1);
            const checkedTask = taskList.splice(taskList.indexOf(clickedTask), 1);
            taskList.push(checkedTask[0]);
            console.log(checkedTask);
        } else {
            setIsChecked(false);
            onTaskCheck(-1);
        }
    };

    return (
        <div className={styles.task}>
            {
                isChecked ? <span className={styles.checked} onClick={handleCheckClick}><CheckCircle color="#8284FA" weight="fill" size={28} /></span>
                    : <span className={styles.unchecked} onClick={handleCheckClick}><Circle color="#4EA8DE" size={28} /></span>
            }
            <p className={isChecked ? styles.checkedDescription : styles.uncheckedDescription}>{taskInfo.description}</p>
            <span className={styles.remove} onClick={() => onDeleteTask(taskInfo.id)}><Trash color="#808080" size={22} /></span>
        </div>
    )
}
