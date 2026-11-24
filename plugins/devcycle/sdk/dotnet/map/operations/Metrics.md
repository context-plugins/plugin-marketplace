<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.Metrics` · Source: `src/DevCycle/Api/Metrics.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### MetricsControllerCreate

- **Signature**: `MetricsControllerCreate(MetricsControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `MetricDevCycleManagementMetricsApi`
- **Error**: `ApiException<MetricsControllerCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetricsControllerCreateRequest` | `src/DevCycle/Requests/Metrics/MetricsControllerCreateRequest.cs` |
| `CreateMetricDto` | `src/DevCycle/Models/CreateMetricDto.cs` |
| `MetricDevCycleManagementMetricsApi` | `src/DevCycle/Models/MetricDevCycleManagementMetricsApi.cs` |
| `MetricsControllerCreateError` | `src/DevCycle/Errors/MetricsControllerCreateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

### MetricsControllerFetchResults

- **Signature**: `MetricsControllerFetchResults(MetricsControllerFetchResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`, `Feature`, `StartDate`, `EndDate`
- **Query params (wire ← C#)**: `feature` ← `Feature`, `startDate` ← `StartDate`, `endDate` ← `EndDate`, `environment` ← `Environment`
- **Returns**: `MetricResult`
- **Error**: `ApiException<MetricsControllerFetchResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetricsControllerFetchResultsRequest` | `src/DevCycle/Requests/Metrics/MetricsControllerFetchResultsRequest.cs` |
| `MetricResult` | `src/DevCycle/Models/MetricResult.cs` |
| `MetricsControllerFetchResultsError` | `src/DevCycle/Errors/MetricsControllerFetchResultsError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### MetricsControllerFindAll

- **Signature**: `MetricsControllerFindAll(MetricsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `dimension` ← `Dimension`
- **Returns**: `IReadOnlyList<MetricDevCycleManagementMetricsApi>`
- **Error**: `ApiException<MetricsControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetricsControllerFindAllRequest` | `src/DevCycle/Requests/Metrics/MetricsControllerFindAllRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `Dimension3` | `src/DevCycle/Models/Enums/Dimension3.cs` |
| `MetricDevCycleManagementMetricsApi` | `src/DevCycle/Models/MetricDevCycleManagementMetricsApi.cs` |
| `MetricsControllerFindAllError` | `src/DevCycle/Errors/MetricsControllerFindAllError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

### MetricsControllerFindOne

- **Signature**: `MetricsControllerFindOne(MetricsControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `MetricDevCycleManagementMetricsApi`
- **Error**: `ApiException<MetricsControllerFindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetricsControllerFindOneRequest` | `src/DevCycle/Requests/Metrics/MetricsControllerFindOneRequest.cs` |
| `MetricDevCycleManagementMetricsApi` | `src/DevCycle/Models/MetricDevCycleManagementMetricsApi.cs` |
| `MetricsControllerFindOneError` | `src/DevCycle/Errors/MetricsControllerFindOneError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### MetricsControllerRemove

- **Signature**: `MetricsControllerRemove(MetricsControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `void` (Task)
- **Error**: `ApiException<MetricsControllerRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetricsControllerRemoveRequest` | `src/DevCycle/Requests/Metrics/MetricsControllerRemoveRequest.cs` |
| `MetricsControllerRemoveError` | `src/DevCycle/Errors/MetricsControllerRemoveError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### MetricsControllerUpdate

- **Signature**: `MetricsControllerUpdate(MetricsControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`, `Body`
- **Returns**: `MetricDevCycleManagementMetricsApi`
- **Error**: `ApiException<MetricsControllerUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetricsControllerUpdateRequest` | `src/DevCycle/Requests/Metrics/MetricsControllerUpdateRequest.cs` |
| `UpdateMetricDto` | `src/DevCycle/Models/UpdateMetricDto.cs` |
| `MetricDevCycleManagementMetricsApi` | `src/DevCycle/Models/MetricDevCycleManagementMetricsApi.cs` |
| `MetricsControllerUpdateError` | `src/DevCycle/Errors/MetricsControllerUpdateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### TestMetricResultsControllerFetch

- **Signature**: `TestMetricResultsControllerFetch(TestMetricResultsControllerFetchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Feature`, `Control`, `Optimize`, `Event`, `Dimension`, `StartDate`, `EndDate`
- **Query params (wire ← C#)**: `feature` ← `Feature`, `control` ← `Control`, `optimize` ← `Optimize`, `event` ← `Event`, `dimension` ← `Dimension`, `startDate` ← `StartDate`, `endDate` ← `EndDate`, `environment` ← `Environment`
- **Returns**: `MetricResult`
- **Error**: `ApiException<TestMetricResultsControllerFetchError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TestMetricResultsControllerFetchRequest` | `src/DevCycle/Requests/Metrics/TestMetricResultsControllerFetchRequest.cs` |
| `Optimize3` | `src/DevCycle/Models/Enums/Optimize3.cs` |
| `Dimension3` | `src/DevCycle/Models/Enums/Dimension3.cs` |
| `MetricResult` | `src/DevCycle/Models/MetricResult.cs` |
| `TestMetricResultsControllerFetchError` | `src/DevCycle/Errors/TestMetricResultsControllerFetchError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

