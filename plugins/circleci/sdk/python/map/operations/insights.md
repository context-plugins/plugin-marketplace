<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `circle_ci/apis/insights.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insights.get_project_workflow_metrics

- **Route**: `GET /insights/{project-slug}/workflows`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_project_workflow_metrics(project_slug: str, *, branch: str | None = None, reporting_window: ReportingWindowOrStr | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`
- **Params**: `project_slug` — path `project-slug` · `branch` — query · `reporting_window` — query `reporting-window` · `page_token` — query `page-token`
- **Returns (parsed)**: `InsightsWorkflowMetrics`
- **Returns (raw)**: `ApiResult[InsightsWorkflowMetrics, GetProjectWorkflowMetricsErrorBody]`
- **Error**: `GetProjectWorkflowMetricsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportingWindowOrStr` | `circle_ci/models/enums/reporting_window.py` |
| `InsightsWorkflowMetrics` | `circle_ci/models/insights_workflow_metrics.py` |
| `GetProjectWorkflowMetricsErrorBody` | `circle_ci/errors/get_project_workflow_metrics_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.insights.get_workflow_job_metrics

- **Route**: `GET /insights/{project-slug}/workflows/{workflow-name}/jobs`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_workflow_job_metrics(project_slug: str, workflow_name: str, *, branch: str | None = None, reporting_window: ReportingWindowOrStr | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `workflow_name`
- **Params**: `project_slug` — path `project-slug` · `workflow_name` — path `workflow-name` · `branch` — query · `reporting_window` — query `reporting-window` · `page_token` — query `page-token`
- **Returns (parsed)**: `InsightsJobMetrics`
- **Returns (raw)**: `ApiResult[InsightsJobMetrics, GetWorkflowJobMetricsErrorBody]`
- **Error**: `GetWorkflowJobMetricsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportingWindowOrStr` | `circle_ci/models/enums/reporting_window.py` |
| `InsightsJobMetrics` | `circle_ci/models/insights_job_metrics.py` |
| `GetWorkflowJobMetricsErrorBody` | `circle_ci/errors/get_workflow_job_metrics_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.insights.get_workflow_runs

- **Route**: `GET /insights/{project-slug}/workflows/{workflow-name}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_workflow_runs(project_slug: str, workflow_name: str, *, branch: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `workflow_name`
- **Params**: `project_slug` — path `project-slug` · `workflow_name` — path `workflow-name` · `branch` — query · `page_token` — query `page-token`
- **Returns (parsed)**: `InsightsWorkflowRuns`
- **Returns (raw)**: `ApiResult[InsightsWorkflowRuns, GetWorkflowRunsErrorBody]`
- **Error**: `GetWorkflowRunsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightsWorkflowRuns` | `circle_ci/models/insights_workflow_runs.py` |
| `GetWorkflowRunsErrorBody` | `circle_ci/errors/get_workflow_runs_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.insights.get_workflow_test_metrics

- **Route**: `GET /insights/{project-slug}/workflows/{workflow-name}/test-metrics`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_workflow_test_metrics(project_slug: str, workflow_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `workflow_name`
- **Params**: `project_slug` — path `project-slug` · `workflow_name` — path `workflow-name`
- **Returns (parsed)**: `InsightsTestMetrics`
- **Returns (raw)**: `ApiResult[InsightsTestMetrics, GetWorkflowTestMetricsErrorBody]`
- **Error**: `GetWorkflowTestMetricsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightsTestMetrics` | `circle_ci/models/insights_test_metrics.py` |
| `GetWorkflowTestMetricsErrorBody` | `circle_ci/errors/get_workflow_test_metrics_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

