<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.Campaigns` · Source: `src/Givebutter/Api/Campaigns.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CampaignsDestroy

- **Auth**: `options.Http`
- **Signature**: `CampaignsDestroy(CampaignsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CampaignsDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetV1Campaigns409Error1([NotNullWhen(true)] out V1Campaigns409Error1? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsDestroyRequest` | `src/Givebutter/Requests/Campaigns/CampaignsDestroyRequest.cs` |
| `CampaignsDestroyError` | `src/Givebutter/Errors/CampaignsDestroyError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `V1Campaigns409Error1` | `src/Givebutter/Models/V1Campaigns409Error1.cs` |

### CampaignsIndex

- **Auth**: `options.Http`
- **Signature**: `CampaignsIndex(CampaignsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `scope` ← `Scope`
- **Returns**: `V1CampaignsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CampaignsIndexRequest` | `src/Givebutter/Requests/Campaigns/CampaignsIndexRequest.cs` |
| `V1CampaignsResponse` | `src/Givebutter/Models/V1CampaignsResponse.cs` |

### CampaignsShow

- **Auth**: `options.Http`
- **Signature**: `CampaignsShow(CampaignsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`
- **Returns**: `CampaignResource`
- **Error**: `ApiException<CampaignsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsShowRequest` | `src/Givebutter/Requests/Campaigns/CampaignsShowRequest.cs` |
| `CampaignResource` | `src/Givebutter/Models/CampaignResource.cs` |
| `CampaignsShowError` | `src/Givebutter/Errors/CampaignsShowError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### CampaignsStore

- **Auth**: `options.Http`
- **Signature**: `CampaignsStore(CampaignsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CampaignResource`
- **Error**: `ApiException<CampaignsStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsStoreRequest` | `src/Givebutter/Requests/Campaigns/CampaignsStoreRequest.cs` |
| `StoreCampaignRequest` | `src/Givebutter/Models/StoreCampaignRequest.cs` |
| `CampaignResource` | `src/Givebutter/Models/CampaignResource.cs` |
| `CampaignsStoreError` | `src/Givebutter/Errors/CampaignsStoreError.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### CampaignsUpdate

- **Auth**: `options.Http`
- **Signature**: `CampaignsUpdate(CampaignsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`
- **Returns**: `CampaignResource`
- **Error**: `ApiException<CampaignsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsUpdateRequest` | `src/Givebutter/Requests/Campaigns/CampaignsUpdateRequest.cs` |
| `UpdateCampaignRequest` | `src/Givebutter/Models/UpdateCampaignRequest.cs` |
| `CampaignResource` | `src/Givebutter/Models/CampaignResource.cs` |
| `CampaignsUpdateError` | `src/Givebutter/Errors/CampaignsUpdateError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

