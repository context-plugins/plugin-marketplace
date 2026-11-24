<!-- Generated file — do not edit; regenerated with the SDK. -->

# Households — operations

Accessor: `client.Households` · Source: `src/Givebutter/Api/Households.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### HouseholdsDestroy

- **Auth**: `options.Http`
- **Signature**: `HouseholdsDestroy(HouseholdsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Household`
- **Returns**: `void` (Task)
- **Error**: `ApiException<HouseholdsDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HouseholdsDestroyRequest` | `src/Givebutter/Requests/Households/HouseholdsDestroyRequest.cs` |
| `HouseholdsDestroyError` | `src/Givebutter/Errors/HouseholdsDestroyError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### HouseholdsIndex

- **Auth**: `options.Http`
- **Signature**: `HouseholdsIndex(HouseholdsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `headContactId` ← `HeadContactId`, `contacts` ← `Contacts`, `query` ← `Query`, `sortBy` ← `SortBy`, `sortByDesc` ← `SortByDesc`, `page` ← `Page`
- **Returns**: `IReadOnlyList<HouseholdResource>`
- **Error**: `ApiException<HouseholdsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HouseholdsIndexRequest` | `src/Givebutter/Requests/Households/HouseholdsIndexRequest.cs` |
| `HouseholdResource` | `src/Givebutter/Models/HouseholdResource.cs` |
| `HouseholdsIndexError` | `src/Givebutter/Errors/HouseholdsIndexError.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### HouseholdsShow

- **Auth**: `options.Http`
- **Signature**: `HouseholdsShow(HouseholdsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Household`
- **Returns**: `AppHttpResourcesApiHouseholdResource`
- **Error**: `ApiException<HouseholdsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HouseholdsShowRequest` | `src/Givebutter/Requests/Households/HouseholdsShowRequest.cs` |
| `AppHttpResourcesApiHouseholdResource` | `src/Givebutter/Models/AppHttpResourcesApiHouseholdResource.cs` |
| `HouseholdsShowError` | `src/Givebutter/Errors/HouseholdsShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### HouseholdsStore

- **Auth**: `options.Http`
- **Signature**: `HouseholdsStore(HouseholdsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AppHttpResourcesApiHouseholdResource`
- **Error**: `ApiException<HouseholdsStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HouseholdsStoreRequest` | `src/Givebutter/Requests/Households/HouseholdsStoreRequest.cs` |
| `HouseholdStoreRequest` | `src/Givebutter/Models/HouseholdStoreRequest.cs` |
| `AppHttpResourcesApiHouseholdResource` | `src/Givebutter/Models/AppHttpResourcesApiHouseholdResource.cs` |
| `HouseholdsStoreError` | `src/Givebutter/Errors/HouseholdsStoreError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### HouseholdsUpdate

- **Auth**: `options.Http`
- **Signature**: `HouseholdsUpdate(HouseholdsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Household`
- **Returns**: `AppHttpResourcesApiHouseholdResource`
- **Error**: `ApiException<HouseholdsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HouseholdsUpdateRequest` | `src/Givebutter/Requests/Households/HouseholdsUpdateRequest.cs` |
| `HouseholdUpdateRequest` | `src/Givebutter/Models/HouseholdUpdateRequest.cs` |
| `AppHttpResourcesApiHouseholdResource` | `src/Givebutter/Models/AppHttpResourcesApiHouseholdResource.cs` |
| `HouseholdsUpdateError` | `src/Givebutter/Errors/HouseholdsUpdateError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

