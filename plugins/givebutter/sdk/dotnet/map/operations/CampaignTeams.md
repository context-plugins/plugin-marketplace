<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignTeams — operations

Accessor: `client.CampaignTeams` · Source: `src/Givebutter/Api/CampaignTeams.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CampaignsTeamsDestroy

- **Auth**: `options.Http`
- **Signature**: `CampaignsTeamsDestroy(CampaignsTeamsDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`, `Team`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CampaignsTeamsDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsTeamsDestroyRequest` | `src/Givebutter/Requests/CampaignTeams/CampaignsTeamsDestroyRequest.cs` |
| `CampaignsTeamsDestroyError` | `src/Givebutter/Errors/CampaignsTeamsDestroyError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### CampaignsTeamsIndex

- **Auth**: `options.Http`
- **Signature**: `CampaignsTeamsIndex(CampaignsTeamsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`
- **Returns**: `V1CampaignsTeamsResponse`
- **Error**: `ApiException<CampaignsTeamsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsTeamsIndexRequest` | `src/Givebutter/Requests/CampaignTeams/CampaignsTeamsIndexRequest.cs` |
| `V1CampaignsTeamsResponse` | `src/Givebutter/Models/V1CampaignsTeamsResponse.cs` |
| `CampaignsTeamsIndexError` | `src/Givebutter/Errors/CampaignsTeamsIndexError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### CampaignsTeamsShow

- **Auth**: `options.Http`
- **Signature**: `CampaignsTeamsShow(CampaignsTeamsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Campaign`, `Team`
- **Returns**: `CampaignTeamResource`
- **Error**: `ApiException<CampaignsTeamsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CampaignsTeamsShowRequest` | `src/Givebutter/Requests/CampaignTeams/CampaignsTeamsShowRequest.cs` |
| `CampaignTeamResource` | `src/Givebutter/Models/CampaignTeamResource.cs` |
| `CampaignsTeamsShowError` | `src/Givebutter/Errors/CampaignsTeamsShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

