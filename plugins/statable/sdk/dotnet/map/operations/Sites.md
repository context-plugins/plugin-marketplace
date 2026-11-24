<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sites — operations

Accessor: `client.Sites` · Source: `src/Statable/Api/Sites.cs` · 21 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateFunnel

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateFunnel(CreateFunnelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `FunnelDefinition`
- **Error**: `ApiException<CreateFunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFunnelRequest` | `src/Statable/Requests/Sites/CreateFunnelRequest.cs` |
| `FunnelRequest` | `src/Statable/Models/FunnelRequest.cs` |
| `FunnelDefinition` | `src/Statable/Models/FunnelDefinition.cs` |
| `CreateFunnelError` | `src/Statable/Errors/CreateFunnelError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### CreateGoal

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateGoal(CreateGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Goal`
- **Error**: `ApiException<CreateGoalError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGoalRequest` | `src/Statable/Requests/Sites/CreateGoalRequest.cs` |
| `GoalRequest` | `src/Statable/Models/GoalRequest.cs` |
| `Goal` | `src/Statable/Models/Goal.cs` |
| `CreateGoalError` | `src/Statable/Errors/CreateGoalError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### CreateSite

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateSite(CreateSiteOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SiteDetail`
- **Error**: `ApiException<CreateSiteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSiteOperationRequest` | `src/Statable/Requests/Sites/CreateSiteOperationRequest.cs` |
| `CreateSiteRequest` | `src/Statable/Models/CreateSiteRequest.cs` |
| `SiteDetail` | `src/Statable/Models/SiteDetail.cs` |
| `CreateSiteError` | `src/Statable/Errors/CreateSiteError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### DeleteFunnel

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteFunnel(DeleteFunnelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `FunnelId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteFunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFunnelRequest` | `src/Statable/Requests/Sites/DeleteFunnelRequest.cs` |
| `DeleteFunnelError` | `src/Statable/Errors/DeleteFunnelError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### DeleteGoal

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteGoal(DeleteGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `GoalId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteGoalError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteGoalRequest` | `src/Statable/Requests/Sites/DeleteGoalRequest.cs` |
| `DeleteGoalError` | `src/Statable/Errors/DeleteGoalError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### DeleteSite

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteSite(DeleteSiteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSiteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSiteRequest` | `src/Statable/Requests/Sites/DeleteSiteRequest.cs` |
| `DeleteSiteError` | `src/Statable/Errors/DeleteSiteError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### GetBlockedIPs

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBlockedIPs(GetBlockedIPsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SitesSettingsBlockedIpsResponse`
- **Error**: `ApiException<GetBlockedIPsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBlockedIPsRequest` | `src/Statable/Requests/Sites/GetBlockedIPsRequest.cs` |
| `SitesSettingsBlockedIpsResponse` | `src/Statable/Models/SitesSettingsBlockedIpsResponse.cs` |
| `GetBlockedIPsError` | `src/Statable/Errors/GetBlockedIPsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### GetCountrySettings

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCountrySettings(GetCountrySettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `CountryList`
- **Error**: `ApiException<GetCountrySettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCountrySettingsRequest` | `src/Statable/Requests/Sites/GetCountrySettingsRequest.cs` |
| `CountryList` | `src/Statable/Models/CountryList.cs` |
| `GetCountrySettingsError` | `src/Statable/Errors/GetCountrySettingsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### GetHostnameSettings

- **Auth**: `options.BearerAuth`
- **Signature**: `GetHostnameSettings(GetHostnameSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `HostnameList`
- **Error**: `ApiException<GetHostnameSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetHostnameSettingsRequest` | `src/Statable/Requests/Sites/GetHostnameSettingsRequest.cs` |
| `HostnameList` | `src/Statable/Models/HostnameList.cs` |
| `GetHostnameSettingsError` | `src/Statable/Errors/GetHostnameSettingsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### GetPublicDashboard

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPublicDashboard(GetPublicDashboardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PublicDashboard`
- **Error**: `ApiException<GetPublicDashboardError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPublicDashboardRequest` | `src/Statable/Requests/Sites/GetPublicDashboardRequest.cs` |
| `PublicDashboard` | `src/Statable/Models/PublicDashboard.cs` |
| `GetPublicDashboardError` | `src/Statable/Errors/GetPublicDashboardError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### GetSiteSnippet

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSiteSnippet(GetSiteSnippetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `type` ← `Type`
- **Returns**: `SiteSnippet`
- **Error**: `ApiException<GetSiteSnippetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSiteSnippetRequest` | `src/Statable/Requests/Sites/GetSiteSnippetRequest.cs` |
| `TypeEnum` | `src/Statable/Models/Enums/TypeEnum.cs` |
| `SiteSnippet` | `src/Statable/Models/SiteSnippet.cs` |
| `GetSiteSnippetError` | `src/Statable/Errors/GetSiteSnippetError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### GetTrackingSettings

- **Auth**: `options.BearerAuth`
- **Signature**: `GetTrackingSettings(GetTrackingSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `TrackingSettings`
- **Error**: `ApiException<GetTrackingSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTrackingSettingsRequest` | `src/Statable/Requests/Sites/GetTrackingSettingsRequest.cs` |
| `TrackingSettings` | `src/Statable/Models/TrackingSettings.cs` |
| `GetTrackingSettingsError` | `src/Statable/Errors/GetTrackingSettingsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### ListSiteGoals

- **Auth**: `options.BearerAuth`
- **Signature**: `ListSiteGoals(ListSiteGoalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SitesGoalsResponse`
- **Error**: `ApiException<ListSiteGoalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSiteGoalsRequest` | `src/Statable/Requests/Sites/ListSiteGoalsRequest.cs` |
| `SitesGoalsResponse` | `src/Statable/Models/SitesGoalsResponse.cs` |
| `ListSiteGoalsError` | `src/Statable/Errors/ListSiteGoalsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### SetBlockedIPs

- **Auth**: `options.BearerAuth`
- **Signature**: `SetBlockedIPs(SetBlockedIPsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `SettingsCount`
- **Error**: `ApiException<SetBlockedIPsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetBlockedIPsRequest` | `src/Statable/Requests/Sites/SetBlockedIPsRequest.cs` |
| `SettingsCount` | `src/Statable/Models/SettingsCount.cs` |
| `SetBlockedIPsError` | `src/Statable/Errors/SetBlockedIPsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### SetCountrySettings

- **Auth**: `options.BearerAuth`
- **Signature**: `SetCountrySettings(SetCountrySettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `SettingsCount`
- **Error**: `ApiException<SetCountrySettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetCountrySettingsRequest` | `src/Statable/Requests/Sites/SetCountrySettingsRequest.cs` |
| `CountryListRequest` | `src/Statable/Models/CountryListRequest.cs` |
| `SettingsCount` | `src/Statable/Models/SettingsCount.cs` |
| `SetCountrySettingsError` | `src/Statable/Errors/SetCountrySettingsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### SetHostnameSettings

- **Auth**: `options.BearerAuth`
- **Signature**: `SetHostnameSettings(SetHostnameSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `SettingsCount`
- **Error**: `ApiException<SetHostnameSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetHostnameSettingsRequest` | `src/Statable/Requests/Sites/SetHostnameSettingsRequest.cs` |
| `HostnameListRequest` | `src/Statable/Models/HostnameListRequest.cs` |
| `SettingsCount` | `src/Statable/Models/SettingsCount.cs` |
| `SetHostnameSettingsError` | `src/Statable/Errors/SetHostnameSettingsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### SetPublicDashboard

- **Auth**: `options.BearerAuth`
- **Signature**: `SetPublicDashboard(SetPublicDashboardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `PublicDashboard`
- **Error**: `ApiException<SetPublicDashboardError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetPublicDashboardRequest` | `src/Statable/Requests/Sites/SetPublicDashboardRequest.cs` |
| `PublicDashboard` | `src/Statable/Models/PublicDashboard.cs` |
| `SetPublicDashboardError` | `src/Statable/Errors/SetPublicDashboardError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### SetTrackingSettings

- **Auth**: `options.BearerAuth`
- **Signature**: `SetTrackingSettings(SetTrackingSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `TrackingSettings`
- **Error**: `ApiException<SetTrackingSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetTrackingSettingsRequest` | `src/Statable/Requests/Sites/SetTrackingSettingsRequest.cs` |
| `TrackingSettingsRequest` | `src/Statable/Models/TrackingSettingsRequest.cs` |
| `TrackingSettings` | `src/Statable/Models/TrackingSettings.cs` |
| `SetTrackingSettingsError` | `src/Statable/Errors/SetTrackingSettingsError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### UpdateFunnel

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateFunnel(UpdateFunnelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `FunnelId`, `Body`
- **Returns**: `FunnelDefinition`
- **Error**: `ApiException<UpdateFunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFunnelRequest` | `src/Statable/Requests/Sites/UpdateFunnelRequest.cs` |
| `FunnelRequest` | `src/Statable/Models/FunnelRequest.cs` |
| `FunnelDefinition` | `src/Statable/Models/FunnelDefinition.cs` |
| `UpdateFunnelError` | `src/Statable/Errors/UpdateFunnelError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### UpdateGoal

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateGoal(UpdateGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `GoalId`, `Body`
- **Returns**: `Goal`
- **Error**: `ApiException<UpdateGoalError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGoalRequest` | `src/Statable/Requests/Sites/UpdateGoalRequest.cs` |
| `GoalRequest` | `src/Statable/Models/GoalRequest.cs` |
| `Goal` | `src/Statable/Models/Goal.cs` |
| `UpdateGoalError` | `src/Statable/Errors/UpdateGoalError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### UpdateSite

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateSite(UpdateSiteOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `SiteDetail`
- **Error**: `ApiException<UpdateSiteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSiteOperationRequest` | `src/Statable/Requests/Sites/UpdateSiteOperationRequest.cs` |
| `UpdateSiteRequest` | `src/Statable/Models/UpdateSiteRequest.cs` |
| `SiteDetail` | `src/Statable/Models/SiteDetail.cs` |
| `UpdateSiteError` | `src/Statable/Errors/UpdateSiteError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

