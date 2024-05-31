Certainly! Here's the updated documentation with the additional instructions integrated:

---

# Beauty Parlor Management System

## Overview

This is a comprehensive management system for a beauty parlor, built on the Internet Computer using the `azle` library. It facilitates the management of services, clients, professionals, and appointments in a decentralized and secure manner. The system includes features for creating and retrieving services, clients, and professionals, as well as booking and managing appointments.

## Structure

### 1. Data Structures

- **Service**: Represents a beauty parlor service with properties like `id`, `name`, `description`, and `price`.
- **ServicePayload**: Used for creating or updating a service with necessary properties.
- **Client**: Represents a client with properties like `id`, `principal`, `name`, `phoneNumber`, `email`, `address`, and `appointment`.
- **ClientPayload**: Used for creating or updating a client with necessary properties.
- **Professional**: Represents a professional with properties like `id`, `principal`, `name`, `phoneNumber`, `email`, `address`, and `appointments`.
- **ProfessionalPayload**: Used for creating or updating a professional with necessary properties.
- **Booking**: Represents a booking with properties like `id`, `serviceId`, `clientId`, and `time`.
- **BookingPayload**: Used for creating or updating a booking with necessary properties.
- **AppointmentInfo**: Detailed information about an appointment including `appointmentId`, `created_at`, `serviceId`, `clientId`, `clientName`, `clientPhoneNumber`, `serviceName`, `time` and `professionalName`.
- **Error**: Variant type representing different error scenarios (`NotFound`, `InvalidPayload`).

### 2. Storage

- **ServicesStorage**: A `StableBTreeMap` to store services by their IDs.
- **ClientsStorage**: A `StableBTreeMap` to store clients by their IDs.
- **ProfessionalsStorage**: A `StableBTreeMap` to store professionals by their IDs.
- **AppointmentsStorage**: A `StableBTreeMap` to store appointment information by their IDs.

### 3. Canister Functions

- **createService**: Creates a new service.
- **getServices**: Retrieves all services.
- **getService**: Retrieves a service by its ID.
- **deleteService**: Deletes a service by ID.
- **createClient**: Creates a new client.
- **getClients**: Retrieves all clients.
- **getClientByPrincipal**: Retrieves a client by their principal.
- **getClient**: Retrieves a client by their ID.
- **createProfessional**: Creates a new professional.
- **getProfessionals**: Retrieves all professionals.
- **getProfessional**: Retrieves a professional by their ID.
- **getProfessionalByPrincipal**: Retrieves a professional by their principal.
- **bookAppointment**: Books a new appointment.
- **getAppointments**: Retrieves all appointments.
- **getAppointment**: Retrieves an appointment by its ID.
- **updateAppointment**: Updates appointment details.

### 4. Helper Functions

- **globalThis.crypto**: Generates random values for creating unique IDs.

### 5. Error Handling

- Functions return `Result` types to handle success or different error scenarios, ensuring robust error management.

## User Instructions

### Navigating the Application

Upon loading the page, you will be presented with two options: **Clients Page** and **Professionals Page**.

### For Clients

1. **Sign Up**: Click on the **Clients Sign Up** button.
2. **Fill the Form**: You will be redirected to a registration form. Enter your name, phone number, address, and email address.
3. **Login**: After filling out the form, press the **Login** button.
4. **Access Services**: Once logged in, you will be able to view the list of available services and book appointments as needed.

### For Professionals

1. **Sign Up**: Click on the **Professionals Sign Up** button.
2. **Fill the Form**: You will be redirected to a registration form. Enter your name, email address, phone number, and address.
3. **Login**: After filling out the form, press the **Login** button.
4. **Manage Services**: Once logged in, you will be able to add new services and view booked appointments.

---

## Things to be Explained in the Course

1. **Internet Identity**: More details here: <https://internetcomputer.org/internet-identity>
2. **Principal, Identity, Address**: Detailed explanation: <https://internetcomputer.org/internet-identity>
3. **Canister-to-canister Communication**: Understanding multi-canister development: <https://medium.com/icp-league/explore-backend-multi-canister-development-on-ic-680064b06320>

## How to Deploy Canisters Implemented in the Course

### Backend Canister

To deploy the backend canister where the business logic is implemented:

```bash
dfx deploy backend
```

Ensure to run the following command anytime you add/remove functions in the canister or change the signatures:

```bash
dfx generate backend
```

This will reflect the changes in IDLs, ensuring the functions work correctly when called using the JS agent.

### Frontend Canister

To deploy the frontend application for the backend canister on the Internet Computer:

```bash
dfx deploy frontend
```

Ensure both the backend and frontend canisters are correctly deployed for full functionality.

---