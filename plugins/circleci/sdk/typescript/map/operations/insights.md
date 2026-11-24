<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `src/resources/insights.ts` · 4 operations · Request and error types: namespace `Insights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProjectWorkflowMetrics

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getProjectWorkflowMetrics(request: Insights.GetProjectWorkflowMetricsRequest, options?: RequestOptions): ApiPromise<InsightsWorkflowMetrics, Insights.GetProjectWorkflowMetricsError>`
- **Wire**: `GET /insights/{project-slug}/workflows`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsWorkflowMetrics`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `Insights.GetProjectWorkflowMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetProjectWorkflowMetricsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `branch` | `query` | — | `string` | no |
| `reportingWindow` | `query` | `reporting-window` | `ReportingWindow` | no |
| `pageToken` | `query` | `page-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportingWindow` | `reportingWindowSchema` | `src/models/reporting-window.ts` |
| `InsightsWorkflowMetrics` | `insightsWorkflowMetricsSchema` | `src/models/insights-workflow-metrics.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWorkflowJobMetrics

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getWorkflowJobMetrics(request: Insights.GetWorkflowJobMetricsRequest, options?: RequestOptions): ApiPromise<InsightsJobMetrics, Insights.GetWorkflowJobMetricsError>`
- **Wire**: `GET /insights/{project-slug}/workflows/{workflow-name}/jobs`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsJobMetrics`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `Insights.GetWorkflowJobMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetWorkflowJobMetricsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `workflowName` | `path` | `workflow-name` | `string` | yes |
| `branch` | `query` | — | `string` | no |
| `reportingWindow` | `query` | `reporting-window` | `ReportingWindow` | no |
| `pageToken` | `query` | `page-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportingWindow` | `reportingWindowSchema` | `src/models/reporting-window.ts` |
| `InsightsJobMetrics` | `insightsJobMetricsSchema` | `src/models/insights-job-metrics.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWorkflowRuns

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getWorkflowRuns(request: Insights.GetWorkflowRunsRequest, options?: RequestOptions): ApiPromise<InsightsWorkflowRuns, Insights.GetWorkflowRunsError>`
- **Wire**: `GET /insights/{project-slug}/workflows/{workflow-name}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsWorkflowRuns`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `Insights.GetWorkflowRunsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetWorkflowRunsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `workflowName` | `path` | `workflow-name` | `string` | yes |
| `branch` | `query` | — | `string` | no |
| `pageToken` | `query` | `page-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsWorkflowRuns` | `insightsWorkflowRunsSchema` | `src/models/insights-workflow-runs.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWorkflowTestMetrics

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getWorkflowTestMetrics(request: Insights.GetWorkflowTestMetricsRequest, options?: RequestOptions): ApiPromise<InsightsTestMetrics, Insights.GetWorkflowTestMetricsError>`
- **Wire**: `GET /insights/{project-slug}/workflows/{workflow-name}/test-metrics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsTestMetrics`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `Insights.GetWorkflowTestMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetWorkflowTestMetricsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `workflowName` | `path` | `workflow-name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsTestMetrics` | `insightsTestMetricsSchema` | `src/models/insights-test-metrics.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

