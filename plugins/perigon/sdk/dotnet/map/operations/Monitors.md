<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitors — operations

Accessor: `client.Monitors` · Source: `src/Perigon/Api/Monitors.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ActivateMonitorApi

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ActivateMonitorApi(ActivateMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`
- **Returns**: `MonitorResult`
- **Error**: `ApiException<ActivateMonitorApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActivateMonitorApiRequest` | `src/Perigon/Requests/Monitors/ActivateMonitorApiRequest.cs` |
| `MonitorResult` | `src/Perigon/Models/MonitorResult.cs` |
| `ActivateMonitorApiError` | `src/Perigon/Errors/ActivateMonitorApiError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### ArchiveMonitorApi

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ArchiveMonitorApi(ArchiveMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`
- **Returns**: `MonitorResult`
- **Error**: `ApiException<ArchiveMonitorApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveMonitorApiRequest` | `src/Perigon/Requests/Monitors/ArchiveMonitorApiRequest.cs` |
| `MonitorResult` | `src/Perigon/Models/MonitorResult.cs` |
| `ArchiveMonitorApiError` | `src/Perigon/Errors/ArchiveMonitorApiError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### CreateMonitorApi

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateMonitorApi(CreateMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MonitorResult`
- **Error**: `ApiException<CreateMonitorApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMonitorApiRequest` | `src/Perigon/Requests/Monitors/CreateMonitorApiRequest.cs` |
| `SignalApiCreateBody` | `src/Perigon/Models/SignalApiCreateBody.cs` |
| `MonitorResult` | `src/Perigon/Models/MonitorResult.cs` |
| `CreateMonitorApiError` | `src/Perigon/Errors/CreateMonitorApiError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### GetMonitorApi

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetMonitorApi(GetMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`
- **Returns**: `MonitorResult`
- **Error**: `ApiException<GetMonitorApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMonitorApiRequest` | `src/Perigon/Requests/Monitors/GetMonitorApiRequest.cs` |
| `MonitorResult` | `src/Perigon/Models/MonitorResult.cs` |
| `GetMonitorApiError` | `src/Perigon/Errors/GetMonitorApiError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### ListMonitorEventsApi

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListMonitorEventsApi(ListMonitorEventsApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`, `SortBy`, `SortOrder`
- **Query params (wire ← C#)**: `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `eventType` ← `EventType`, `from` ← `From`, `to` ← `To`, `page` ← `Page`, `size` ← `Size`, `nulls` ← `Nulls`
- **Returns**: `MonitorEventListResult`
- **Error**: `ApiException<ListMonitorEventsApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMonitorEventsApiRequest` | `src/Perigon/Requests/Monitors/ListMonitorEventsApiRequest.cs` |
| `SortOrder` | `src/Perigon/Models/Enums/SortOrder.cs` |
| `Nulls` | `src/Perigon/Models/Enums/Nulls.cs` |
| `MonitorEventListResult` | `src/Perigon/Models/MonitorEventListResult.cs` |
| `ListMonitorEventsApiError` | `src/Perigon/Errors/ListMonitorEventsApiError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### ListMonitorNewslettersApi

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListMonitorNewslettersApi(ListMonitorNewslettersApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`, `SortBy`, `SortOrder`
- **Query params (wire ← C#)**: `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `title` ← `Title`, `from` ← `From`, `to` ← `To`, `page` ← `Page`, `size` ← `Size`, `nulls` ← `Nulls`
- **Returns**: `MonitorNewsletterListResult`
- **Error**: `ApiException<ListMonitorNewslettersApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMonitorNewslettersApiRequest` | `src/Perigon/Requests/Monitors/ListMonitorNewslettersApiRequest.cs` |
| `SortOrder` | `src/Perigon/Models/Enums/SortOrder.cs` |
| `Nulls` | `src/Perigon/Models/Enums/Nulls.cs` |
| `MonitorNewsletterListResult` | `src/Perigon/Models/MonitorNewsletterListResult.cs` |
| `ListMonitorNewslettersApiError` | `src/Perigon/Errors/ListMonitorNewslettersApiError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### ListMonitorSummariesApi

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListMonitorSummariesApi(ListMonitorSummariesApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`, `SortBy`, `SortOrder`
- **Query params (wire ← C#)**: `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `from` ← `From`, `to` ← `To`, `page` ← `Page`, `size` ← `Size`, `nulls` ← `Nulls`
- **Returns**: `MonitorSummaryListResult`
- **Error**: `ApiException<ListMonitorSummariesApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMonitorSummariesApiRequest` | `src/Perigon/Requests/Monitors/ListMonitorSummariesApiRequest.cs` |
| `SortOrder` | `src/Perigon/Models/Enums/SortOrder.cs` |
| `Nulls` | `src/Perigon/Models/Enums/Nulls.cs` |
| `MonitorSummaryListResult` | `src/Perigon/Models/MonitorSummaryListResult.cs` |
| `ListMonitorSummariesApiError` | `src/Perigon/Errors/ListMonitorSummariesApiError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### ListMonitorsApi

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListMonitorsApi(ListMonitorsApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SortBy`, `SortOrder`
- **Query params (wire ← C#)**: `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `uuid` ← `Uuid`, `name` ← `Name`, `status` ← `Status`, `classificationType` ← `ClassificationType`, `page` ← `Page`, `size` ← `Size`, `nulls` ← `Nulls`
- **Returns**: `MonitorListResult`
- **Error**: `ApiException<ListMonitorsApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMonitorsApiRequest` | `src/Perigon/Requests/Monitors/ListMonitorsApiRequest.cs` |
| `SortOrder` | `src/Perigon/Models/Enums/SortOrder.cs` |
| `Status2` | `src/Perigon/Models/Enums/Status2.cs` |
| `ClassificationType3` | `src/Perigon/Models/Enums/ClassificationType3.cs` |
| `Nulls` | `src/Perigon/Models/Enums/Nulls.cs` |
| `MonitorListResult` | `src/Perigon/Models/MonitorListResult.cs` |
| `ListMonitorsApiError` | `src/Perigon/Errors/ListMonitorsApiError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### PauseMonitorApi

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PauseMonitorApi(PauseMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`
- **Returns**: `MonitorResult`
- **Error**: `ApiException<PauseMonitorApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PauseMonitorApiRequest` | `src/Perigon/Requests/Monitors/PauseMonitorApiRequest.cs` |
| `MonitorResult` | `src/Perigon/Models/MonitorResult.cs` |
| `PauseMonitorApiError` | `src/Perigon/Errors/PauseMonitorApiError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### UpdateMonitorApi

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UpdateMonitorApi(UpdateMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uuid`, `Body`
- **Returns**: `MonitorResult`
- **Error**: `ApiException<UpdateMonitorApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMonitorApiRequest` | `src/Perigon/Requests/Monitors/UpdateMonitorApiRequest.cs` |
| `SignalApiUpdateBody` | `src/Perigon/Models/SignalApiUpdateBody.cs` |
| `MonitorResult` | `src/Perigon/Models/MonitorResult.cs` |
| `UpdateMonitorApiError` | `src/Perigon/Errors/UpdateMonitorApiError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

