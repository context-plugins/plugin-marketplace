<!-- Generated file — do not edit; regenerated with the SDK. -->

# XContacts — operations

Accessor: `client.XContacts` · Source: `src/Curlec/Api/XContacts.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateContact

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateContact(CreateContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `XContact`
- **Error**: `ApiException<CreateContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateContactRequest` | `src/Curlec/Requests/XContacts/CreateContactRequest.cs` |
| `ContactsRequest` | `src/Curlec/Models/ContactsRequest.cs` |
| `XContact` | `src/Curlec/Models/XContact.cs` |
| `CreateContactError` | `src/Curlec/Errors/CreateContactError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchContact

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchContact(FetchContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContactId`
- **Returns**: `XContact`
- **Error**: `ApiException<FetchContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchContactRequest` | `src/Curlec/Requests/XContacts/FetchContactRequest.cs` |
| `XContact` | `src/Curlec/Models/XContact.cs` |
| `FetchContactError` | `src/Curlec/Errors/FetchContactError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListContacts

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListContacts(ListContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `email` ← `Email`, `contact` ← `Contact`, `reference_id` ← `ReferenceId`, `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `ContactsResponse`
- **Error**: `ApiException<ListContactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListContactsRequest` | `src/Curlec/Requests/XContacts/ListContactsRequest.cs` |
| `ContactsResponse` | `src/Curlec/Models/ContactsResponse.cs` |
| `ListContactsError` | `src/Curlec/Errors/ListContactsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateContact

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateContact(UpdateContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContactId`, `Body`
- **Returns**: `XContact`
- **Error**: `ApiException<UpdateContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateContactRequest` | `src/Curlec/Requests/XContacts/UpdateContactRequest.cs` |
| `ContactsRequest1` | `src/Curlec/Models/ContactsRequest1.cs` |
| `XContact` | `src/Curlec/Models/XContact.cs` |
| `UpdateContactError` | `src/Curlec/Errors/UpdateContactError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

