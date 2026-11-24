<!-- Generated file — do not edit; regenerated with the SDK. -->

# MonitorApi — operations

Accessor: `client.MonitorApi` · Source: `src/ParallelSdk/Api/MonitorApi.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelMonitorV1MonitorsMonitorIdCancelPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CancelMonitorV1MonitorsMonitorIdCancelPost(CancelMonitorV1MonitorsMonitorIdCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MonitorId`
- **Returns**: `MonitorResponse`
- **Error**: `ApiException<CancelMonitorV1MonitorsMonitorIdCancelPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelMonitorV1MonitorsMonitorIdCancelPostRequest` | `src/ParallelSdk/Requests/MonitorApi/CancelMonitorV1MonitorsMonitorIdCancelPostRequest.cs` |
| `MonitorResponse` | `src/ParallelSdk/Models/MonitorResponse.cs` |
| `CancelMonitorV1MonitorsMonitorIdCancelPostError` | `src/ParallelSdk/Errors/CancelMonitorV1MonitorsMonitorIdCancelPostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### CreateMonitorV1MonitorsPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateMonitorV1MonitorsPost(CreateMonitorV1MonitorsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MonitorResponse`
- **Error**: `ApiException<CreateMonitorV1MonitorsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMonitorV1MonitorsPostRequest` | `src/ParallelSdk/Requests/MonitorApi/CreateMonitorV1MonitorsPostRequest.cs` |
| `CreateMonitorRequest` | `src/ParallelSdk/Models/CreateMonitorRequest.cs` |
| `MonitorResponse` | `src/ParallelSdk/Models/MonitorResponse.cs` |
| `CreateMonitorV1MonitorsPostError` | `src/ParallelSdk/Errors/CreateMonitorV1MonitorsPostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### ListMonitorEventsV1MonitorsMonitorIdEventsGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListMonitorEventsV1MonitorsMonitorIdEventsGet(ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MonitorId`
- **Query params (wire ← C#)**: `event_group_id` ← `EventGroupId`, `cursor` ← `Cursor`, `limit` ← `Limit`, `include_completions` ← `IncludeCompletions`
- **Returns**: `PaginatedMonitorEvents`
- **Error**: `ApiException<ListMonitorEventsV1MonitorsMonitorIdEventsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest` | `src/ParallelSdk/Requests/MonitorApi/ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest.cs` |
| `EventGroupId` | `src/ParallelSdk/Models/AnyOf/EventGroupId.cs` |
| `Cursor1` | `src/ParallelSdk/Models/AnyOf/Cursor1.cs` |
| `Limit1` | `src/ParallelSdk/Models/AnyOf/Limit1.cs` |
| `PaginatedMonitorEvents` | `src/ParallelSdk/Models/PaginatedMonitorEvents.cs` |
| `ListMonitorEventsV1MonitorsMonitorIdEventsGetError` | `src/ParallelSdk/Errors/ListMonitorEventsV1MonitorsMonitorIdEventsGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### ListMonitorsV1MonitorsGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListMonitorsV1MonitorsGet(ListMonitorsV1MonitorsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `limit` ← `Limit`, `type` ← `Type`, `status` ← `Status`
- **Returns**: `PaginatedMonitorResponse`
- **Error**: `ApiException<ListMonitorsV1MonitorsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMonitorsV1MonitorsGetRequest` | `src/ParallelSdk/Requests/MonitorApi/ListMonitorsV1MonitorsGetRequest.cs` |
| `Cursor` | `src/ParallelSdk/Models/AnyOf/Cursor.cs` |
| `Limit` | `src/ParallelSdk/Models/AnyOf/Limit.cs` |
| `Type5VariantCchzdo` | `src/ParallelSdk/Models/AnyOf/Type5VariantCchzdo.cs` |
| `Status11` | `src/ParallelSdk/Models/AnyOf/Status11.cs` |
| `PaginatedMonitorResponse` | `src/ParallelSdk/Models/PaginatedMonitorResponse.cs` |
| `ListMonitorsV1MonitorsGetError` | `src/ParallelSdk/Errors/ListMonitorsV1MonitorsGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### RetrieveMonitorV1MonitorsMonitorIdGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RetrieveMonitorV1MonitorsMonitorIdGet(RetrieveMonitorV1MonitorsMonitorIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MonitorId`
- **Returns**: `MonitorResponse`
- **Error**: `ApiException<RetrieveMonitorV1MonitorsMonitorIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetrieveMonitorV1MonitorsMonitorIdGetRequest` | `src/ParallelSdk/Requests/MonitorApi/RetrieveMonitorV1MonitorsMonitorIdGetRequest.cs` |
| `MonitorResponse` | `src/ParallelSdk/Models/MonitorResponse.cs` |
| `RetrieveMonitorV1MonitorsMonitorIdGetError` | `src/ParallelSdk/Errors/RetrieveMonitorV1MonitorsMonitorIdGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### TriggerMonitorRunV1MonitorsMonitorIdTriggerPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TriggerMonitorRunV1MonitorsMonitorIdTriggerPost(TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MonitorId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest` | `src/ParallelSdk/Requests/MonitorApi/TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest.cs` |
| `TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError` | `src/ParallelSdk/Errors/TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### UpdateMonitorV1MonitorsMonitorIdUpdatePost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UpdateMonitorV1MonitorsMonitorIdUpdatePost(UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MonitorId`, `Body`
- **Returns**: `MonitorResponse`
- **Error**: `ApiException<UpdateMonitorV1MonitorsMonitorIdUpdatePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest` | `src/ParallelSdk/Requests/MonitorApi/UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest.cs` |
| `UpdateMonitorRequest` | `src/ParallelSdk/Models/UpdateMonitorRequest.cs` |
| `MonitorResponse` | `src/ParallelSdk/Models/MonitorResponse.cs` |
| `UpdateMonitorV1MonitorsMonitorIdUpdatePostError` | `src/ParallelSdk/Errors/UpdateMonitorV1MonitorsMonitorIdUpdatePostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

