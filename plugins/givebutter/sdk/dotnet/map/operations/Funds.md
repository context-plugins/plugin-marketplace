<!-- Generated file — do not edit; regenerated with the SDK. -->

# Funds — operations

Accessor: `client.Funds` · Source: `src/Givebutter/Api/Funds.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FundsDestroy

- **Auth**: `options.Http`
- **Signature**: `FundsDestroy(FundsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Fund`
- **Returns**: `void` (Task)
- **Error**: `ApiException<FundsDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FundsDestroyRequest` | `src/Givebutter/Requests/Funds/FundsDestroyRequest.cs` |
| `FundsDestroyError` | `src/Givebutter/Errors/FundsDestroyError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### FundsIndex

- **Auth**: `options.Http`
- **Signature**: `FundsIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1FundsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `V1FundsResponse` | `src/Givebutter/Models/V1FundsResponse.cs` |

### FundsShow

- **Auth**: `options.Http`
- **Signature**: `FundsShow(FundsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Fund`
- **Returns**: `FundResource`
- **Error**: `ApiException<FundsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FundsShowRequest` | `src/Givebutter/Requests/Funds/FundsShowRequest.cs` |
| `FundResource` | `src/Givebutter/Models/FundResource.cs` |
| `FundsShowError` | `src/Givebutter/Errors/FundsShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### FundsStore

- **Auth**: `options.Http`
- **Signature**: `FundsStore(FundsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `FundResource`
- **Error**: `ApiException<FundsStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FundsStoreRequest` | `src/Givebutter/Requests/Funds/FundsStoreRequest.cs` |
| `V1FundsRequest` | `src/Givebutter/Models/V1FundsRequest.cs` |
| `FundResource` | `src/Givebutter/Models/FundResource.cs` |
| `FundsStoreError` | `src/Givebutter/Errors/FundsStoreError.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### FundsUpdate

- **Auth**: `options.Http`
- **Signature**: `FundsUpdate(FundsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Fund`, `Body`
- **Returns**: `FundResource`
- **Error**: `ApiException<FundsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FundsUpdateRequest` | `src/Givebutter/Requests/Funds/FundsUpdateRequest.cs` |
| `V1FundsRequest` | `src/Givebutter/Models/V1FundsRequest.cs` |
| `FundResource` | `src/Givebutter/Models/FundResource.cs` |
| `FundsUpdateError` | `src/Givebutter/Errors/FundsUpdateError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

