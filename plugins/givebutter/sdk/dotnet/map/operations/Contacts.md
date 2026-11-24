<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contacts — operations

Accessor: `client.Contacts` · Source: `src/Givebutter/Api/Contacts.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ContactRestore

- **Auth**: `options.Http`
- **Signature**: `ContactRestore(ContactRestoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`
- **Returns**: `ContactResource`
- **Error**: `ApiException<ContactRestoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactRestoreRequest` | `src/Givebutter/Requests/Contacts/ContactRestoreRequest.cs` |
| `ContactResource` | `src/Givebutter/Models/ContactResource.cs` |
| `ContactRestoreError` | `src/Givebutter/Errors/ContactRestoreError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### ContactsDestroy

- **Auth**: `options.Http`
- **Signature**: `ContactsDestroy(ContactsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ContactsDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactsDestroyRequest` | `src/Givebutter/Requests/Contacts/ContactsDestroyRequest.cs` |
| `ContactsDestroyError` | `src/Givebutter/Errors/ContactsDestroyError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### ContactsIndex

- **Auth**: `options.Http`
- **Signature**: `ContactsIndex(ContactsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `type` ← `Type`, `createdAfter` ← `CreatedAfter`, `createdBefore` ← `CreatedBefore`, `updatedAfter` ← `UpdatedAfter`, `updatedBefore` ← `UpdatedBefore`, `totalContributionsMin` ← `TotalContributionsMin`, `totalContributionsMax` ← `TotalContributionsMax`, `recurringContributionsMin` ← `RecurringContributionsMin`, `recurringContributionsMax` ← `RecurringContributionsMax`, `tags` ← `Tags`, `sortBy` ← `SortBy`, `sortByDesc` ← `SortByDesc`, `email` ← `Email`, `primaryEmail` ← `PrimaryEmail`, `firstName` ← `FirstName`, `lastName` ← `LastName`
- **Returns**: `V1ContactsResponse`
- **Error**: `ApiException<ContactsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactsIndexRequest` | `src/Givebutter/Requests/Contacts/ContactsIndexRequest.cs` |
| `ContactType` | `src/Givebutter/Models/Enums/ContactType.cs` |
| `SortBy` | `src/Givebutter/Models/Enums/SortBy.cs` |
| `SortByDesc` | `src/Givebutter/Models/Enums/SortByDesc.cs` |
| `V1ContactsResponse` | `src/Givebutter/Models/V1ContactsResponse.cs` |
| `ContactsIndexError` | `src/Givebutter/Errors/ContactsIndexError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### ContactsShow

- **Auth**: `options.Http`
- **Signature**: `ContactsShow(ContactsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`
- **Returns**: `ContactResource`
- **Error**: `ApiException<ContactsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactsShowRequest` | `src/Givebutter/Requests/Contacts/ContactsShowRequest.cs` |
| `ContactResource` | `src/Givebutter/Models/ContactResource.cs` |
| `ContactsShowError` | `src/Givebutter/Errors/ContactsShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### ContactsStore

- **Auth**: `options.Http`
- **Signature**: `ContactsStore(ContactsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ContactResource`
- **Error**: `ApiException<ContactsStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactsStoreRequest` | `src/Givebutter/Requests/Contacts/ContactsStoreRequest.cs` |
| `V1ContactsRequest` | `src/Givebutter/Models/V1ContactsRequest.cs` |
| `ContactResource` | `src/Givebutter/Models/ContactResource.cs` |
| `ContactsStoreError` | `src/Givebutter/Errors/ContactsStoreError.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### ContactsUpdate

- **Auth**: `options.Http`
- **Signature**: `ContactsUpdate(ContactsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`
- **Returns**: `ContactResource`
- **Error**: `ApiException<ContactsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactsUpdateRequest` | `src/Givebutter/Requests/Contacts/ContactsUpdateRequest.cs` |
| `UpdateContactRequest` | `src/Givebutter/Models/UpdateContactRequest.cs` |
| `ContactResource` | `src/Givebutter/Models/ContactResource.cs` |
| `ContactsUpdateError` | `src/Givebutter/Errors/ContactsUpdateError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

