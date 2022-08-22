import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import Container from './Container';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const filter = useSelector(state => state.phonebook.contacts.filter);

  const checkedContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <>
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={contacts} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} />
          <ContactList contacts={checkedContacts} />
        </Section>
      </Container>
    </>
  );
}
