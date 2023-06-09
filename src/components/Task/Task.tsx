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
    onDeleteTask: (task: TaskType) => void;
    taskList: TaskType[];
    onTaskCheck: (newTaskCheck: number) => number;
}

export const Task = ({ taskInfo, onDeleteTask, taskList, onTaskCheck }: TaskProp) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckClick = () => {
        if (!taskInfo.isChecked) {
            taskInfo.isChecked = true;
            setIsChecked(true);
            onTaskCheck(1);
            
            const checkedTask = taskList.splice(taskList.indexOf(taskInfo), 1);
            taskList.push(checkedTask[0]);
        } else {
            taskInfo.isChecked = false;
            setIsChecked(false);
            onTaskCheck(-1);
        }
    };

    return (
        <div className={styles.task}>
            {
                isChecked ? <CheckCircle onClick={handleCheckClick} className={styles.iconCheck} weight="fill" />
                : <Circle onClick={handleCheckClick} className={styles.iconUncheck} weight="duotone" />
            }
            <p className={isChecked ? styles.checkedDescription : styles.uncheckedDescription} >
                {taskInfo.description}
            </p>
            <Trash onClick={() => onDeleteTask(taskInfo)} className={styles.iconRemove} />
        </div>
    )
}
