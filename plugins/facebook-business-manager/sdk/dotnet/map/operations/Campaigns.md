<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.Campaigns` · Source: `src/FacebookBusinessManager/Api/Campaigns.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateCampaign(CreateCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`, `Body`
- **Returns**: `CreateResponse`
- **Error**: `ApiException<CreateCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCampaignRequest` | `src/FacebookBusinessManager/Requests/Campaigns/CreateCampaignRequest.cs` |
| `CampaignCreate` | `src/FacebookBusinessManager/Models/CampaignCreate.cs` |
| `CreateResponse` | `src/FacebookBusinessManager/Models/CreateResponse.cs` |
| `CreateCampaignError` | `src/FacebookBusinessManager/Errors/CreateCampaignError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### DeleteCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteCampaign(DeleteCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CampaignId`
- **Returns**: `SuccessResponse`
- **Error**: `ApiException<DeleteCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCampaignRequest` | `src/FacebookBusinessManager/Requests/Campaigns/DeleteCampaignRequest.cs` |
| `SuccessResponse` | `src/FacebookBusinessManager/Models/SuccessResponse.cs` |
| `DeleteCampaignError` | `src/FacebookBusinessManager/Errors/DeleteCampaignError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### GetCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCampaign(GetCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CampaignId`
- **Query params (wire ← C#)**: `fields` ← `Fields`
- **Returns**: `Campaign`
- **Error**: `ApiException<GetCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCampaignRequest` | `src/FacebookBusinessManager/Requests/Campaigns/GetCampaignRequest.cs` |
| `Campaign` | `src/FacebookBusinessManager/Models/Campaign.cs` |
| `GetCampaignError` | `src/FacebookBusinessManager/Errors/GetCampaignError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### ListCampaigns

- **Auth**: `options.BearerAuth`
- **Signature**: `ListCampaigns(ListCampaignsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `limit` ← `Limit`, `after` ← `After`, `filtering` ← `Filtering`
- **Returns**: `CampaignList`
- **Error**: `ApiException<ListCampaignsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCampaignsRequest` | `src/FacebookBusinessManager/Requests/Campaigns/ListCampaignsRequest.cs` |
| `CampaignList` | `src/FacebookBusinessManager/Models/CampaignList.cs` |
| `ListCampaignsError` | `src/FacebookBusinessManager/Errors/ListCampaignsError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### UpdateCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateCampaign(UpdateCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CampaignId`, `Body`
- **Returns**: `SuccessResponse`
- **Error**: `ApiException<UpdateCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCampaignRequest` | `src/FacebookBusinessManager/Requests/Campaigns/UpdateCampaignRequest.cs` |
| `CampaignUpdate` | `src/FacebookBusinessManager/Models/CampaignUpdate.cs` |
| `SuccessResponse` | `src/FacebookBusinessManager/Models/SuccessResponse.cs` |
| `UpdateCampaignError` | `src/FacebookBusinessManager/Errors/UpdateCampaignError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

