<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsWorkflows — operations

Accessor: `client.insightsWorkflows` · Source: `src/resources/insights-workflows.ts` · 12 operations · Request and error types: namespace `InsightsWorkflows`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### insightsWorkflowActivate

- **Signature**: `insightsWorkflowActivate(request: InsightsWorkflows.InsightsWorkflowActivateRequest, options?: RequestOptions): ApiPromise<InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowActivateError>`
- **Wire**: `PUT /api/v1/insights/workflows/{workflow_id}/activate`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightWorkflowOutput`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowActivateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowActivateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowId` | `path` | `workflow_id` | `number` | yes |
| `body` | `body` | — | `InsightWorkflowActivate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightWorkflowActivate` | `insightWorkflowActivateSchema` | `src/models/insight-workflow-activate.ts` |
| `InsightWorkflowOutput` | `insightWorkflowOutputSchema` | `src/models/insight-workflow-output.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowCreate

- **Signature**: `insightsWorkflowCreate(request: InsightsWorkflows.InsightsWorkflowCreateRequest, options?: RequestOptions): ApiPromise<InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowCreateError>`
- **Wire**: `POST /api/v1/insights/workflows/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightWorkflowOutput`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightWorkflowInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightWorkflowInput` | `insightWorkflowInputSchema` | `src/models/insight-workflow-input.ts` |
| `InsightWorkflowOutput` | `insightWorkflowOutputSchema` | `src/models/insight-workflow-output.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowDelete

- **Signature**: `insightsWorkflowDelete(request: InsightsWorkflows.InsightsWorkflowDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, InsightsWorkflows.InsightsWorkflowDeleteError>`
- **Wire**: `DELETE /api/v1/insights/workflows/{workflow_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowId` | `path` | `workflow_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowExecutions

- **Signature**: `insightsWorkflowExecutions(request: InsightsWorkflows.InsightsWorkflowExecutionsRequest, options?: RequestOptions): ApiPromise<ListResponseInsightWorkflowExecutionOutput, InsightsWorkflows.InsightsWorkflowExecutionsError>`
- **Wire**: `GET /api/v1/insights/workflows/{workflow_id}/executions`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseInsightWorkflowExecutionOutput`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowExecutionsRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `workflowId` | `path` | `workflow_id` | `number` | yes | — |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `SearchField[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy12` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields12` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `SearchField` | `searchFieldSchema` | `src/models/search-field.ts` |
| `OrderBy12` | `orderBy12Schema` | `src/models/unions/order-by12.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields12` | `fields12Schema` | `src/models/unions/fields12.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseInsightWorkflowExecutionOutput` | `listResponseInsightWorkflowExecutionOutputSchema` | `src/models/list-response-insight-workflow-execution-output.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowExecutionsSummary

- **Signature**: `insightsWorkflowExecutionsSummary(request: InsightsWorkflows.InsightsWorkflowExecutionsSummaryRequest, options?: RequestOptions): ApiPromise<InsightWorkflowExecutionSummary, InsightsWorkflows.InsightsWorkflowExecutionsSummaryError>`
- **Wire**: `GET /api/v1/insights/workflows/{workflow_id}/executions/summary`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightWorkflowExecutionSummary`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowExecutionsSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowExecutionsSummaryRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowId` | `path` | `workflow_id` | `number` | yes |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime18` | no |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime18` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartDatetime18` | `startDatetime18Schema` | `src/models/unions/start-datetime18.ts` |
| `EndDatetime18` | `endDatetime18Schema` | `src/models/unions/end-datetime18.ts` |
| `InsightWorkflowExecutionSummary` | `insightWorkflowExecutionSummarySchema` | `src/models/insight-workflow-execution-summary.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowFiles

- **Signature**: `insightsWorkflowFiles(request: InsightsWorkflows.InsightsWorkflowFilesRequest, options?: RequestOptions): ApiPromise<ListResponseWorkflowFileRow, InsightsWorkflows.InsightsWorkflowFilesError>`
- **Wire**: `GET /api/v1/insights/workflows/{workflow_id}/files`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseWorkflowFileRow`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowFilesRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `workflowId` | `path` | `workflow_id` | `number` | yes | — |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `SearchField2[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy211` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `SearchField2` | `searchField2Schema` | `src/models/search-field2.ts` |
| `OrderBy211` | `orderBy211Schema` | `src/models/unions/order-by211.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseWorkflowFileRow` | `listResponseWorkflowFileRowSchema` | `src/models/list-response-workflow-file-row.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowGetById

- **Signature**: `insightsWorkflowGetById(request: InsightsWorkflows.InsightsWorkflowGetByIdRequest, options?: RequestOptions): ApiPromise<InsightWorkflowResponse, InsightsWorkflows.InsightsWorkflowGetByIdError>`
- **Wire**: `GET /api/v1/insights/workflows/{workflow_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightWorkflowResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowId` | `path` | `workflow_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightWorkflowResponse` | `insightWorkflowResponseSchema` | `src/models/insight-workflow-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowInactivate

- **Signature**: `insightsWorkflowInactivate(request: InsightsWorkflows.InsightsWorkflowInactivateRequest, options?: RequestOptions): ApiPromise<InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowInactivateError>`
- **Wire**: `PUT /api/v1/insights/workflows/{workflow_id}/inactivate`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightWorkflowOutput`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowInactivateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowInactivateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowId` | `path` | `workflow_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightWorkflowOutput` | `insightWorkflowOutputSchema` | `src/models/insight-workflow-output.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowList

- **Signature**: `insightsWorkflowList(request: InsightsWorkflows.InsightsWorkflowListRequest, options?: RequestOptions): ApiPromise<ListResponseInsightWorkflowResponse, InsightsWorkflows.InsightsWorkflowListError>`
- **Wire**: `GET /api/v1/insights/workflows/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseInsightWorkflowResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `InsightWorkflowProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy111` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields11` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `InsightWorkflowProperties` | `insightWorkflowPropertiesSchema` | `src/models/insight-workflow-properties.ts` |
| `OrderBy111` | `orderBy111Schema` | `src/models/unions/order-by111.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields11` | `fields11Schema` | `src/models/unions/fields11.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseInsightWorkflowResponse` | `listResponseInsightWorkflowResponseSchema` | `src/models/list-response-insight-workflow-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowQueueWork

- **Signature**: `insightsWorkflowQueueWork(request: InsightsWorkflows.InsightsWorkflowQueueWorkRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, InsightsWorkflows.InsightsWorkflowQueueWorkError>`
- **Wire**: `POST /api/v1/insights/workflows/queue-work`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowQueueWorkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowQueueWorkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightsWorkflowQueueSession` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsWorkflowQueueSession` | `insightsWorkflowQueueSessionSchema` | `src/models/insights-workflow-queue-session.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowSessions

- **Signature**: `insightsWorkflowSessions(request: InsightsWorkflows.InsightsWorkflowSessionsRequest, options?: RequestOptions): ApiPromise<ListResponseWorkflowSessionRow, InsightsWorkflows.InsightsWorkflowSessionsError>`
- **Wire**: `GET /api/v1/insights/workflows/{workflow_id}/sessions`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseWorkflowSessionRow`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowSessionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowSessionsRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `workflowId` | `path` | `workflow_id` | `number` | yes | — |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `SearchField1[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy13` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `SearchField1` | `searchField1Schema` | `src/models/search-field1.ts` |
| `OrderBy13` | `orderBy13Schema` | `src/models/unions/order-by13.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseWorkflowSessionRow` | `listResponseWorkflowSessionRowSchema` | `src/models/list-response-workflow-session-row.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsWorkflowUpdate

- **Signature**: `insightsWorkflowUpdate(request: InsightsWorkflows.InsightsWorkflowUpdateRequest, options?: RequestOptions): ApiPromise<InsightWorkflowOutput, InsightsWorkflows.InsightsWorkflowUpdateError>`
- **Wire**: `PUT /api/v1/insights/workflows/{workflow_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightWorkflowOutput`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsWorkflows.InsightsWorkflowUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error412"` [412] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsWorkflows.InsightsWorkflowUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowId` | `path` | `workflow_id` | `number` | yes |
| `body` | `body` | — | `InsightWorkflowInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightWorkflowInput` | `insightWorkflowInputSchema` | `src/models/insight-workflow-input.ts` |
| `InsightWorkflowOutput` | `insightWorkflowOutputSchema` | `src/models/insight-workflow-output.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

