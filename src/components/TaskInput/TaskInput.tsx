import styles from './TaskInput.module.css';
import { PlusCircle } from "@phosphor-icons/react";

export const TaskInput = () => {
    return (
        <form className={styles.form}>
            <input className={styles.formInput} type="text" placeholder="Adicione uma nova tarefa" />
            <button className={styles.formBtn} type="submit">Criar <PlusCircle size={22} weight="bold" /></button>
        </form>
    )
}
