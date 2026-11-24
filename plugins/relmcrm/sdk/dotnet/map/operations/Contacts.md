<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contacts — operations

Accessor: `client.Contacts` · Source: `src/RelmCrm/Api/Contacts.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateContact

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateContact(CreateContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Contact`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateContactRequest` | `src/RelmCrm/Requests/Contacts/CreateContactRequest.cs` |
| `ContactInput` | `src/RelmCrm/Models/ContactInput.cs` |
| `Contact` | `src/RelmCrm/Models/Contact.cs` |

### DeleteContact

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeleteContact(DeleteContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deleted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteContactRequest` | `src/RelmCrm/Requests/Contacts/DeleteContactRequest.cs` |
| `Deleted` | `src/RelmCrm/Models/Deleted.cs` |

### GetContact

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetContact(GetContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Contact`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetContactRequest` | `src/RelmCrm/Requests/Contacts/GetContactRequest.cs` |
| `Contact` | `src/RelmCrm/Models/Contact.cs` |

### ListContacts

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListContacts(ListContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `include_deleted` ← `IncludeDeleted`, `q` ← `Q`, `email` ← `Email`, `company_id` ← `CompanyId`, `type` ← `Type`
- **Returns**: `ContactList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListContactsRequest` | `src/RelmCrm/Requests/Contacts/ListContactsRequest.cs` |
| `ContactList` | `src/RelmCrm/Models/ContactList.cs` |

### RestoreContact

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `RestoreContact(RestoreContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Contact`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RestoreContactRequest` | `src/RelmCrm/Requests/Contacts/RestoreContactRequest.cs` |
| `Contact` | `src/RelmCrm/Models/Contact.cs` |

### UpdateContact

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `UpdateContact(UpdateContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Contact`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateContactRequest` | `src/RelmCrm/Requests/Contacts/UpdateContactRequest.cs` |
| `ContactInput` | `src/RelmCrm/Models/ContactInput.cs` |
| `Contact` | `src/RelmCrm/Models/Contact.cs` |

