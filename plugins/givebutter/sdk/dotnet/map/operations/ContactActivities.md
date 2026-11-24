<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactActivities — operations

Accessor: `client.ContactActivities` · Source: `src/Givebutter/Api/ContactActivities.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ContactsActivitiesDestroy

- **Auth**: `options.Http`
- **Signature**: `ContactsActivitiesDestroy(ContactsActivitiesDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`, `Activity`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ContactsActivitiesDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactsActivitiesDestroyRequest` | `src/Givebutter/Requests/ContactActivities/ContactsActivitiesDestroyRequest.cs` |
| `ContactsActivitiesDestroyError` | `src/Givebutter/Errors/ContactsActivitiesDestroyError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### ContactsActivitiesIndex

- **Auth**: `options.Http`
- **Signature**: `ContactsActivitiesIndex(ContactsActivitiesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`
- **Query params (wire ← C#)**: `type` ← `Type`
- **Returns**: `V1ContactsActivitiesResponse`
- **Error**: `ApiException<ContactsActivitiesIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactsActivitiesIndexRequest` | `src/Givebutter/Requests/ContactActivities/ContactsActivitiesIndexRequest.cs` |
| `ContactActivityTypeEnum` | `src/Givebutter/Models/Enums/ContactActivityTypeEnum.cs` |
| `V1ContactsActivitiesResponse` | `src/Givebutter/Models/V1ContactsActivitiesResponse.cs` |
| `ContactsActivitiesIndexError` | `src/Givebutter/Errors/ContactsActivitiesIndexError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### ContactsActivitiesShow

- **Auth**: `options.Http`
- **Signature**: `ContactsActivitiesShow(ContactsActivitiesShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`, `Activity`
- **Returns**: `ContactActivityResource`
- **Error**: `ApiException<ContactsActivitiesShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactsActivitiesShowRequest` | `src/Givebutter/Requests/ContactActivities/ContactsActivitiesShowRequest.cs` |
| `ContactActivityResource` | `src/Givebutter/Models/ContactActivityResource.cs` |
| `ContactsActivitiesShowError` | `src/Givebutter/Errors/ContactsActivitiesShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### ContactsActivitiesStore

- **Auth**: `options.Http`
- **Signature**: `ContactsActivitiesStore(ContactsActivitiesStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`, `Body`
- **Returns**: `ContactActivityResource`
- **Error**: `ApiException<ContactsActivitiesStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactsActivitiesStoreRequest` | `src/Givebutter/Requests/ContactActivities/ContactsActivitiesStoreRequest.cs` |
| `StoreContactActivityRequest` | `src/Givebutter/Models/StoreContactActivityRequest.cs` |
| `ContactActivityResource` | `src/Givebutter/Models/ContactActivityResource.cs` |
| `ContactsActivitiesStoreError` | `src/Givebutter/Errors/ContactsActivitiesStoreError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### ContactsActivitiesUpdate

- **Auth**: `options.Http`
- **Signature**: `ContactsActivitiesUpdate(ContactsActivitiesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Contact`, `Activity`
- **Returns**: `ContactActivityResource`
- **Error**: `ApiException<ContactsActivitiesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactsActivitiesUpdateRequest` | `src/Givebutter/Requests/ContactActivities/ContactsActivitiesUpdateRequest.cs` |
| `ContactActivityResource` | `src/Givebutter/Models/ContactActivityResource.cs` |
| `ContactsActivitiesUpdateError` | `src/Givebutter/Errors/ContactsActivitiesUpdateError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

