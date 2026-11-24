<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactTags — operations

Accessor: `client.ContactTags` · Source: `src/Givebutter/Api/ContactTags.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ContactTagDestroy

- **Auth**: `options.Http`
- **Signature**: `ContactTagDestroy(ContactTagDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`, `Body`
- **Returns**: `ContactResource`
- **Error**: `ApiException<ContactTagDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactTagDestroyRequest` | `src/Givebutter/Requests/ContactTags/ContactTagDestroyRequest.cs` |
| `V1ContactsTagsRemoveRequest` | `src/Givebutter/Models/V1ContactsTagsRemoveRequest.cs` |
| `ContactResource` | `src/Givebutter/Models/ContactResource.cs` |
| `ContactTagDestroyError` | `src/Givebutter/Errors/ContactTagDestroyError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### ContactTagStore

- **Auth**: `options.Http`
- **Signature**: `ContactTagStore(ContactTagStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`, `Body`
- **Returns**: `ContactResource`
- **Error**: `ApiException<ContactTagStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactTagStoreRequest` | `src/Givebutter/Requests/ContactTags/ContactTagStoreRequest.cs` |
| `V1ContactsTagsAddRequest` | `src/Givebutter/Models/V1ContactsTagsAddRequest.cs` |
| `ContactResource` | `src/Givebutter/Models/ContactResource.cs` |
| `ContactTagStoreError` | `src/Givebutter/Errors/ContactTagStoreError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### ContactTagSync

- **Auth**: `options.Http`
- **Signature**: `ContactTagSync(ContactTagSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`, `Body`
- **Returns**: `ContactResource`
- **Error**: `ApiException<ContactTagSyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactTagSyncRequest` | `src/Givebutter/Requests/ContactTags/ContactTagSyncRequest.cs` |
| `V1ContactsTagsSyncRequest` | `src/Givebutter/Models/V1ContactsTagsSyncRequest.cs` |
| `ContactResource` | `src/Givebutter/Models/ContactResource.cs` |
| `ContactTagSyncError` | `src/Givebutter/Errors/ContactTagSyncError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

