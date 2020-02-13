import React from 'react';
import { render, findAllByTestId, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('checks for render of form', () => {
    const {getByLabelText} = render(<ContactForm />);
    getByLabelText(/first name/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);

})

test('firstName, lastName, email, message', () => {
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

test('Figuring out if there is a max length error', () => {
    const
});