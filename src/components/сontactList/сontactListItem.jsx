import { useDeleteContactMutation } from "services/contactsAPI";
import PropTypes from 'prop-types';
import css from './сontactList.module.css';

export default function ContactListItem({id, name, number}) {
    const [deleteContact, {isLoading}] = useDeleteContactMutation();

    return (
        <li className={css.item}>
            <p className={css.text}>
                <span className={css.name}>{name}:</span>
                <span>
                    <a href={`tel:${number}`} className={css.tel}>
                        {number}
                    </a>
                </span>
            </p>
            <button type="button"
            className={css.button}
            onClick={() => deleteContact(id)}
            disabled={isLoading}
            >
                Delete
            </button>
        </li>
    );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};