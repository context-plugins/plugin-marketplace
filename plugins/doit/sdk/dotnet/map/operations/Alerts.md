<!-- Generated file — do not edit; regenerated with the SDK. -->

# Alerts — operations

Accessor: `client.Alerts` · Source: `src/DoiT/Api/Alerts.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAlert

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateAlert(CreateAlertRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Alert`
- **Error**: `ApiException<CreateAlertError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAlertRequest` | `src/DoiT/Requests/Alerts/CreateAlertRequest.cs` |
| `AlertRequest` | `src/DoiT/Models/AlertRequest.cs` |
| `Alert` | `src/DoiT/Models/Alert.cs` |
| `CreateAlertError` | `src/DoiT/Errors/CreateAlertError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteAlert

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteAlert(DeleteAlertRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAlertError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAlertRequest` | `src/DoiT/Requests/Alerts/DeleteAlertRequest.cs` |
| `DeleteAlertError` | `src/DoiT/Errors/DeleteAlertError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetAlert

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAlert(GetAlertRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Alert`
- **Error**: `ApiException<GetAlertError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAlertRequest` | `src/DoiT/Requests/Alerts/GetAlertRequest.cs` |
| `Alert` | `src/DoiT/Models/Alert.cs` |
| `GetAlertError` | `src/DoiT/Errors/GetAlertError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListAlertSlackChannels

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAlertSlackChannels(ListAlertSlackChannelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nameContains` ← `NameContains`, `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`
- **Returns**: `AlertSlackChannelList`
- **Error**: `ApiException<ListAlertSlackChannelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAlertSlackChannelsRequest` | `src/DoiT/Requests/Alerts/ListAlertSlackChannelsRequest.cs` |
| `AlertSlackChannelList` | `src/DoiT/Models/AlertSlackChannelList.cs` |
| `ListAlertSlackChannelsError` | `src/DoiT/Errors/ListAlertSlackChannelsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListAlerts

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAlerts(ListAlertsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`, `nameContains` ← `NameContains`
- **Returns**: `ExternalAlertList`
- **Error**: `ApiException<ListAlertsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAlertsRequest` | `src/DoiT/Requests/Alerts/ListAlertsRequest.cs` |
| `SortBy` | `src/DoiT/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DoiT/Models/Enums/SortOrder.cs` |
| `ExternalAlertList` | `src/DoiT/Models/ExternalAlertList.cs` |
| `ListAlertsError` | `src/DoiT/Errors/ListAlertsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateAlert

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateAlert(UpdateAlertRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Alert`
- **Error**: `ApiException<UpdateAlertError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAlertRequest` | `src/DoiT/Requests/Alerts/UpdateAlertRequest.cs` |
| `AlertUpdateRequest` | `src/DoiT/Models/AlertUpdateRequest.cs` |
| `Alert` | `src/DoiT/Models/Alert.cs` |
| `UpdateAlertError` | `src/DoiT/Errors/UpdateAlertError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

