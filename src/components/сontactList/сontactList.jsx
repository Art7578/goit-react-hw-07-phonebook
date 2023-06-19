import { useSelector } from "react-redux";
import { useGetContactsQuery } from "services/contactsAPI";
import ContactListItem from "./сontactListItem";
import { getFilter } from "redux/contacts/contactsSelectors";
import css from './сontactList.module.css';

export default function ContactList() {
    const {data: contacts, isLoading, isError} = useGetContactsQuery();
    const filter = useSelector(getFilter);
    const normalizedData = filter && filter.toLowerCase();
    const normalizedContacts = 
        contacts &&
        contacts.filter(contact => 
            contact.name.toLowerCase().includes(normalizedData)
        );

    const isContacts = normalizedContacts && normalizedContacts.length > 0;

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isError && <p>An error has occured!</p>}
            {isContacts && (
                <ul className={css.list}>
                    {normalizedContacts.map(({id, name, phone: number}) => (
                        <ContactListItem name={name} number={number} key={id} id={id}/>
                    ))}
                </ul>
            )}
        </>
    );
}