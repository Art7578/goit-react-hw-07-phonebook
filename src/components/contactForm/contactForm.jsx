import { useState } from "react";
import { useAddContactMutation, useGetContactsQuery } from "services/contactsAPI";
import css from './contactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setNumber] = useState('');

    const [addContact] = useAddContactMutation();
    const {data: contacts} = useGetContactsQuery();

    const handleChange = event => {
        const {name, value} = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setNumber(value);
                break;
            default:
            return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if(
            contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            return alert(`Contact ${name} is already exist`);
        }
        addContact({name, phone});
        
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.label}>
                Name
                <input
                className={css.input}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+([ '][a-zA-Zа-яА-Я]+)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </label>
            <label className={css.label}>
                Number
                <input
                className={css.input}
                type="tel"
                name="phone"
                value={phone}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
                <button type="submit" className={css.button}>
                    Add contact
                </button>
            </label>
        </form>
    );
};

export default ContactForm;