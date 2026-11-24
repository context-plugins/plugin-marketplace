<!-- Generated file — do not edit; regenerated with the SDK. -->

# HouseholdContacts — operations

Accessor: `client.HouseholdContacts` · Source: `src/Givebutter/Api/HouseholdContacts.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### HouseholdsContactsDestroy

- **Auth**: `options.Http`
- **Signature**: `HouseholdsContactsDestroy(HouseholdsContactsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Household`, `Contact`
- **Returns**: `AppHttpResourcesApiHouseholdResource`
- **Error**: `ApiException<HouseholdsContactsDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HouseholdsContactsDestroyRequest` | `src/Givebutter/Requests/HouseholdContacts/HouseholdsContactsDestroyRequest.cs` |
| `AppHttpResourcesApiHouseholdResource` | `src/Givebutter/Models/AppHttpResourcesApiHouseholdResource.cs` |
| `HouseholdsContactsDestroyError` | `src/Givebutter/Errors/HouseholdsContactsDestroyError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### HouseholdsContactsIndex

- **Auth**: `options.Http`
- **Signature**: `HouseholdsContactsIndex(HouseholdsContactsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Household`
- **Returns**: `V1HouseholdsContactsResponse`
- **Error**: `ApiException<HouseholdsContactsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HouseholdsContactsIndexRequest` | `src/Givebutter/Requests/HouseholdContacts/HouseholdsContactsIndexRequest.cs` |
| `V1HouseholdsContactsResponse` | `src/Givebutter/Models/V1HouseholdsContactsResponse.cs` |
| `HouseholdsContactsIndexError` | `src/Givebutter/Errors/HouseholdsContactsIndexError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### HouseholdsContactsShow

- **Auth**: `options.Http`
- **Signature**: `HouseholdsContactsShow(HouseholdsContactsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Household`, `Contact`
- **Returns**: `ContactResource`
- **Error**: `ApiException<HouseholdsContactsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HouseholdsContactsShowRequest` | `src/Givebutter/Requests/HouseholdContacts/HouseholdsContactsShowRequest.cs` |
| `ContactResource` | `src/Givebutter/Models/ContactResource.cs` |
| `HouseholdsContactsShowError` | `src/Givebutter/Errors/HouseholdsContactsShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### HouseholdsContactsStore

- **Auth**: `options.Http`
- **Signature**: `HouseholdsContactsStore(HouseholdsContactsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Household`, `Body`
- **Returns**: `AppHttpResourcesApiHouseholdResource`
- **Error**: `ApiException<HouseholdsContactsStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HouseholdsContactsStoreRequest` | `src/Givebutter/Requests/HouseholdContacts/HouseholdsContactsStoreRequest.cs` |
| `V1HouseholdsContactsRequest` | `src/Givebutter/Models/V1HouseholdsContactsRequest.cs` |
| `AppHttpResourcesApiHouseholdResource` | `src/Givebutter/Models/AppHttpResourcesApiHouseholdResource.cs` |
| `HouseholdsContactsStoreError` | `src/Givebutter/Errors/HouseholdsContactsStoreError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

