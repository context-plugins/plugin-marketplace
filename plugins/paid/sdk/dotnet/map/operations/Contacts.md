<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contacts — operations

Accessor: `client.Contacts` · Source: `src/Paid/Api/Contacts.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create2

- **Signature**: `Create2(Create2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Contact`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Create2Request` | `src/Paid/Requests/Contacts/Create2Request.cs` |
| `ContactCreate` | `src/Paid/Models/ContactCreate.cs` |
| `Contact` | `src/Paid/Models/Contact.cs` |

### CreateContact

- **Signature**: `CreateContact(CreateContactOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `Contact1`
- **Error**: `ApiException<CreateContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateContactOperationRequest` | `src/Paid/Requests/Contacts/CreateContactOperationRequest.cs` |
| `CreateContactRequest` | `src/Paid/Models/CreateContactRequest.cs` |
| `Contact1` | `src/Paid/Models/Contact1.cs` |
| `CreateContactError` | `src/Paid/Errors/CreateContactError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### Delete2

- **Signature**: `Delete2(Delete2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContactId`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Delete2Request` | `src/Paid/Requests/Contacts/Delete2Request.cs` |

### DeleteByExternalId2

- **Signature**: `DeleteByExternalId2(DeleteByExternalId2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteByExternalId2Request` | `src/Paid/Requests/Contacts/DeleteByExternalId2Request.cs` |

### DeleteContactById

- **Signature**: `DeleteContactById(DeleteContactByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `object`
- **Error**: `ApiException<DeleteContactByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteContactByIdRequest` | `src/Paid/Requests/Contacts/DeleteContactByIdRequest.cs` |
| `DeleteContactByIdError` | `src/Paid/Errors/DeleteContactByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### Get2

- **Signature**: `Get2(Get2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContactId`, `Authorization`
- **Returns**: `Contact`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Get2Request` | `src/Paid/Requests/Contacts/Get2Request.cs` |
| `Contact` | `src/Paid/Models/Contact.cs` |

### GetByExternalId2

- **Signature**: `GetByExternalId2(GetByExternalId2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `Contact`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetByExternalId2Request` | `src/Paid/Requests/Contacts/GetByExternalId2Request.cs` |
| `Contact` | `src/Paid/Models/Contact.cs` |

### GetContactById

- **Signature**: `GetContactById(GetContactByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Contact1`
- **Error**: `ApiException<GetContactByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactByIdRequest` | `src/Paid/Requests/Contacts/GetContactByIdRequest.cs` |
| `Contact1` | `src/Paid/Models/Contact1.cs` |
| `GetContactByIdError` | `src/Paid/Errors/GetContactByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### List2

- **Signature**: `List2(List2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `IReadOnlyList<Contact>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `List2Request` | `src/Paid/Requests/Contacts/List2Request.cs` |
| `Contact` | `src/Paid/Models/Contact.cs` |

### ListContacts

- **Signature**: `ListContacts(ListContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ContactListResponse`
- **Error**: `ApiException<ListContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListContactsRequest` | `src/Paid/Requests/Contacts/ListContactsRequest.cs` |
| `ContactListResponse` | `src/Paid/Models/ContactListResponse.cs` |
| `ListContactsError` | `src/Paid/Errors/ListContactsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateContactByExternalId

- **Signature**: `UpdateContactByExternalId(UpdateContactByExternalIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExternalId`, `Authorization`
- **Returns**: `Contact1`
- **Error**: `ApiException<UpdateContactByExternalIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateContactByExternalIdRequest` | `src/Paid/Requests/Contacts/UpdateContactByExternalIdRequest.cs` |
| `UpdateContactRequest` | `src/Paid/Models/UpdateContactRequest.cs` |
| `Contact1` | `src/Paid/Models/Contact1.cs` |
| `UpdateContactByExternalIdError` | `src/Paid/Errors/UpdateContactByExternalIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateContactById

- **Signature**: `UpdateContactById(UpdateContactByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `Contact1`
- **Error**: `ApiException<UpdateContactByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateContactByIdRequest` | `src/Paid/Requests/Contacts/UpdateContactByIdRequest.cs` |
| `UpdateContactRequest` | `src/Paid/Models/UpdateContactRequest.cs` |
| `Contact1` | `src/Paid/Models/Contact1.cs` |
| `UpdateContactByIdError` | `src/Paid/Errors/UpdateContactByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

