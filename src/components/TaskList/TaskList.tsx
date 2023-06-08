import React, { useState } from 'react';
import styles from './TaskList.module.css';
import List from '../../assets/notebook.svg'

export const TaskList = () => {
    const [isTasks, setIsTasks] = useState(false);
    

    return (
        <main>
            <div className={styles.taskArea}>
                <div className={styles.header}>
                    <div className={styles.taskCreated}>
                        <p>Tarefas criadas</p>
                        <span>0</span>
                    </div>
                    <div className={styles.taskDone}>
                        <p>Concluídas</p>
                        <span>0</span>
                    </div>
                </div>
                {
                    !isTasks ?
                        <div className={styles.taskListEmpty}>
                            <img src={List} alt="Task list icon" />
                            <p>
                                <strong>Você ainda não tem tarefas cadastradas <br /></strong>
                                Crie tarefas e organize seus itens a fazer
                            </p>
                        </div>
                        : null
                }

            </div>
        </main>
    )
}
