<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignDiscountCodes — operations

Accessor: `client.CampaignDiscountCodes` · Source: `src/Givebutter/Api/CampaignDiscountCodes.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CampaignsDiscountCodesDestroy

- **Auth**: `options.Http`
- **Signature**: `CampaignsDiscountCodesDestroy(CampaignsDiscountCodesDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`, `DiscountCode`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CampaignsDiscountCodesDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetV1CampaignsDiscountCodes422Error1([NotNullWhen(true)] out V1CampaignsDiscountCodes422Error1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsDiscountCodesDestroyRequest` | `src/Givebutter/Requests/CampaignDiscountCodes/CampaignsDiscountCodesDestroyRequest.cs` |
| `CampaignsDiscountCodesDestroyError` | `src/Givebutter/Errors/CampaignsDiscountCodesDestroyError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `V1CampaignsDiscountCodes422Error1` | `src/Givebutter/Models/V1CampaignsDiscountCodes422Error1.cs` |

### CampaignsDiscountCodesIndex

- **Auth**: `options.Http`
- **Signature**: `CampaignsDiscountCodesIndex(CampaignsDiscountCodesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`
- **Returns**: `V1CampaignsDiscountCodesResponse`
- **Error**: `ApiException<CampaignsDiscountCodesIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsDiscountCodesIndexRequest` | `src/Givebutter/Requests/CampaignDiscountCodes/CampaignsDiscountCodesIndexRequest.cs` |
| `V1CampaignsDiscountCodesResponse` | `src/Givebutter/Models/V1CampaignsDiscountCodesResponse.cs` |
| `CampaignsDiscountCodesIndexError` | `src/Givebutter/Errors/CampaignsDiscountCodesIndexError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### CampaignsDiscountCodesShow

- **Auth**: `options.Http`
- **Signature**: `CampaignsDiscountCodesShow(CampaignsDiscountCodesShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`, `DiscountCode`
- **Returns**: `CampaignDiscountCodeResource`
- **Error**: `ApiException<CampaignsDiscountCodesShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsDiscountCodesShowRequest` | `src/Givebutter/Requests/CampaignDiscountCodes/CampaignsDiscountCodesShowRequest.cs` |
| `CampaignDiscountCodeResource` | `src/Givebutter/Models/CampaignDiscountCodeResource.cs` |
| `CampaignsDiscountCodesShowError` | `src/Givebutter/Errors/CampaignsDiscountCodesShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### CampaignsDiscountCodesStore

- **Auth**: `options.Http`
- **Signature**: `CampaignsDiscountCodesStore(CampaignsDiscountCodesStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`, `Body`
- **Returns**: `CampaignDiscountCodeResource`
- **Error**: `ApiException<CampaignsDiscountCodesStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsDiscountCodesStoreRequest` | `src/Givebutter/Requests/CampaignDiscountCodes/CampaignsDiscountCodesStoreRequest.cs` |
| `StoreCampaignDiscountCodeRequest` | `src/Givebutter/Models/StoreCampaignDiscountCodeRequest.cs` |
| `CampaignDiscountCodeResource` | `src/Givebutter/Models/CampaignDiscountCodeResource.cs` |
| `CampaignsDiscountCodesStoreError` | `src/Givebutter/Errors/CampaignsDiscountCodesStoreError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### CampaignsDiscountCodesUpdate

- **Auth**: `options.Http`
- **Signature**: `CampaignsDiscountCodesUpdate(CampaignsDiscountCodesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`, `DiscountCode`, `Body`
- **Returns**: `CampaignDiscountCodeResource`
- **Error**: `ApiException<CampaignsDiscountCodesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsDiscountCodesUpdateRequest` | `src/Givebutter/Requests/CampaignDiscountCodes/CampaignsDiscountCodesUpdateRequest.cs` |
| `UpdateCampaignDiscountCodeRequest` | `src/Givebutter/Models/UpdateCampaignDiscountCodeRequest.cs` |
| `CampaignDiscountCodeResource` | `src/Givebutter/Models/CampaignDiscountCodeResource.cs` |
| `CampaignsDiscountCodesUpdateError` | `src/Givebutter/Errors/CampaignsDiscountCodesUpdateError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

