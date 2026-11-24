<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.Insights` · Source: `src/CircleCi/Api/Insights.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetProjectWorkflowMetrics

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetProjectWorkflowMetrics(GetProjectWorkflowMetricsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`
- **Query params (wire ← C#)**: `branch` ← `Branch`, `reporting-window` ← `ReportingWindow`, `page-token` ← `PageToken`
- **Returns**: `InsightsWorkflowMetrics`
- **Error**: `ApiException<GetProjectWorkflowMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectWorkflowMetricsRequest` | `src/CircleCi/Requests/Insights/GetProjectWorkflowMetricsRequest.cs` |
| `ReportingWindow` | `src/CircleCi/Models/Enums/ReportingWindow.cs` |
| `InsightsWorkflowMetrics` | `src/CircleCi/Models/InsightsWorkflowMetrics.cs` |
| `GetProjectWorkflowMetricsError` | `src/CircleCi/Errors/GetProjectWorkflowMetricsError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetWorkflowJobMetrics

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetWorkflowJobMetrics(GetWorkflowJobMetricsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `WorkflowName`
- **Query params (wire ← C#)**: `branch` ← `Branch`, `reporting-window` ← `ReportingWindow`, `page-token` ← `PageToken`
- **Returns**: `InsightsJobMetrics`
- **Error**: `ApiException<GetWorkflowJobMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkflowJobMetricsRequest` | `src/CircleCi/Requests/Insights/GetWorkflowJobMetricsRequest.cs` |
| `ReportingWindow` | `src/CircleCi/Models/Enums/ReportingWindow.cs` |
| `InsightsJobMetrics` | `src/CircleCi/Models/InsightsJobMetrics.cs` |
| `GetWorkflowJobMetricsError` | `src/CircleCi/Errors/GetWorkflowJobMetricsError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetWorkflowRuns

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetWorkflowRuns(GetWorkflowRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `WorkflowName`
- **Query params (wire ← C#)**: `branch` ← `Branch`, `page-token` ← `PageToken`
- **Returns**: `InsightsWorkflowRuns`
- **Error**: `ApiException<GetWorkflowRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkflowRunsRequest` | `src/CircleCi/Requests/Insights/GetWorkflowRunsRequest.cs` |
| `InsightsWorkflowRuns` | `src/CircleCi/Models/InsightsWorkflowRuns.cs` |
| `GetWorkflowRunsError` | `src/CircleCi/Errors/GetWorkflowRunsError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetWorkflowTestMetrics

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetWorkflowTestMetrics(GetWorkflowTestMetricsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `WorkflowName`
- **Returns**: `InsightsTestMetrics`
- **Error**: `ApiException<GetWorkflowTestMetricsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkflowTestMetricsRequest` | `src/CircleCi/Requests/Insights/GetWorkflowTestMetricsRequest.cs` |
| `InsightsTestMetrics` | `src/CircleCi/Models/InsightsTestMetrics.cs` |
| `GetWorkflowTestMetricsError` | `src/CircleCi/Errors/GetWorkflowTestMetricsError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

