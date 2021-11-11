import s from "../ContactList/ContactList.module.css"

export function ContactList({ contacts, onDeleteContacts }) {
   
        return <section>
            
        <ul className={s.list}>
            {contacts.map((el) =>
                <li key={el.id}>{el.name}: {el.number}
                    <button
                        type="button"
                        id={el.id}
                        onClick={onDeleteContacts}
                    >Delete</button>
                </li>
        )}
    </ul>
    </section>
}
