import React from 'react';
import { render, findAllByTestId, fireEvent, waitForElement } from '@testing-library/react';
import ContactForm from './ContactForm';

test('checks for render of form', () => {
    const {getByLabelText} = render(<ContactForm />);
    getByLabelText(/first name/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);

})

test('Checking inputs of fields to see if they render when data is entered', () => {
    const { getByLabelText } = render(<ContactForm />);
    // querying for all the input nodes
    const firstNameInput = getByLabelText(/first Name/i);
    const lastNameInput = getByLabelText(/last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    // use the change event to add text to each input
    fireEvent.change(firstNameInput, {target: {value: 'Test First Name'}});
    fireEvent.change(lastNameInput, {target: {value: 'Test Last Name'}});
    fireEvent.change(emailInput, {target: {value: 'Test Email'}});
    fireEvent.change(messageInput, {target: {value: 'Test Message'}});

    expect(firstNameInput.value).toBe('Test First Name');
    expect(lastNameInput.value).toBe('Test Last Name');
    expect(emailInput.value).toBe('Test Email');
    expect(messageInput.value).toBe('Test Message');
});

// test('Figuring out if there is a max length error', () => {
//     const {getbyLabelText}
// });

test('Seeing if form submit adds a new person to the list', async () => {
    const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);
    // querying for all the input nodes
    const firstNameInput2 = getByLabelText(/first Name/i);
    const lastNameInput2 = getByLabelText(/last Name/i);
    const emailInput2 = getByLabelText(/email/i);
    const messageInput2 = getByLabelText(/message/i);

    // use the change event to add text to each input
    fireEvent.change(firstNameInput2, {target: {value: 'Thew'}});
    fireEvent.change(lastNameInput2, {target: {value: 'Test Last Name'}});
    fireEvent.change(emailInput2, {target: {value: 'Test Email'}});
    fireEvent.change(messageInput2, {target: {value: 'Test Message'}});

    // click on the Button!
    fireEvent.submit(getByTestId(/submit-btn/));

    // assert that the species is added to the list
    
    // expect(person).toBeInTheDocument();
    await waitForElement(() => getByTestId('Thew'))

});

test('Validating the blur ', () => {
    const {getById, getByLabelText} = render(<ContactForm />);

    const firstNameInput3 = getByLabelText(/first Name/i);

    fireEvent.focus(firstNameInput3);
    fireEvent.blur(firstNameInput3);
    waitForElement(() => getById(/validation/i))

});
