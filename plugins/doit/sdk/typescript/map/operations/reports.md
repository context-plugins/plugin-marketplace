<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `src/resources/reports.ts` · 12 operations · Request and error types: namespace `Reports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### asyncRunInline

- **Signature**: `asyncRunInline(request: Reports.AsyncRunInlineRequest, options?: RequestOptions): ApiPromise<AsyncOperationResponse, Reports.AsyncRunInlineError>`
- **Wire**: `POST /analytics/v1/reports/actions/run`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `AsyncOperationResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.AsyncRunInlineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.AsyncRunInlineRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `dryRun` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes |
| `body` | `body` | — | `AnalyticsV1ReportsActionsRunRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsV1ReportsActionsRunRequest` | `analyticsV1ReportsActionsRunRequestSchema` | `src/models/analytics-v1-reports-actions-run-request.ts` |
| `AsyncOperationResponse` | `asyncOperationResponseSchema` | `src/models/async-operation-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### asyncRunReportById

- **Signature**: `asyncRunReportById(request: Reports.AsyncRunReportByIdRequest, options?: RequestOptions): ApiPromise<AsyncOperationResponse, Reports.AsyncRunReportByIdError>`
- **Wire**: `POST /analytics/v1/reports/{id}/actions/run`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AsyncOperationResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.AsyncRunReportByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.AsyncRunReportByIdRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `dryRun` | `query` | — | `boolean` | no |
| `timeRange` | `query` | — | `string` | no |
| `startDate` | `query` | — | `string` (date) | no |
| `endDate` | `query` | — | `string` (date) | no |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AsyncOperationResponse` | `asyncOperationResponseSchema` | `src/models/async-operation-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cancelAsyncOperation

- **Signature**: `cancelAsyncOperation(request: Reports.CancelAsyncOperationRequest, options?: RequestOptions): ApiPromise<AsyncOperationResponse, Reports.CancelAsyncOperationError>`
- **Wire**: `POST /analytics/v1/reports/operations/{operationId}/actions/cancel`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AsyncOperationResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.CancelAsyncOperationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.CancelAsyncOperationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `operationId` | `path` | — | `string` | yes |
| `dryRun` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AsyncOperationResponse` | `asyncOperationResponseSchema` | `src/models/async-operation-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createReport

- **Signature**: `createReport(request?: Reports.CreateReportRequest, options?: RequestOptions): ApiPromise<ExternalReport, Reports.CreateReportError>`
- **Wire**: `POST /analytics/v1/reports`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExternalReport`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.CreateReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.CreateReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AnalyticsV1ReportsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsV1ReportsRequest` | `analyticsV1ReportsRequestSchema` | `src/models/analytics-v1-reports-request.ts` |
| `ExternalReport` | `externalReportSchema` | `src/models/external-report.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteReport

- **Signature**: `deleteReport(request: Reports.DeleteReportRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Reports.DeleteReportError>`
- **Wire**: `DELETE /analytics/v1/reports/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.DeleteReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.DeleteReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAsyncOperation

- **Signature**: `getAsyncOperation(request: Reports.GetAsyncOperationRequest, options?: RequestOptions): ApiPromise<AsyncOperationPollResponse, Reports.GetAsyncOperationError>`
- **Wire**: `GET /analytics/v1/reports/operations/{operationId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AsyncOperationPollResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.GetAsyncOperationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetAsyncOperationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `operationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AsyncOperationPollResponse` | `asyncOperationPollResponseSchema` | `src/models/async-operation-poll-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAsyncOperationResults

- **Signature**: `getAsyncOperationResults(request: Reports.GetAsyncOperationResultsRequest, options?: RequestOptions): ApiPromise<AnalyticsV1ReportsOperationsResultsResponse, Reports.GetAsyncOperationResultsError>`
- **Wire**: `GET /analytics/v1/reports/operations/{operationId}/results`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsV1ReportsOperationsResultsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.GetAsyncOperationResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"error6"` [425] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetAsyncOperationResultsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `operationId` | `path` | `string` | yes |
| `fileOutput` | `query` | `FileOutput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileOutput` | `fileOutputSchema` | `src/models/file-output.ts` |
| `AnalyticsV1ReportsOperationsResultsResponse` | `analyticsV1ReportsOperationsResultsResponseSchema` | `src/models/analytics-v1-reports-operations-results-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getReport

- **Signature**: `getReport(request: Reports.GetReportRequest, options?: RequestOptions): ApiPromise<GetReportResponse, Reports.GetReportError>`
- **Wire**: `GET /analytics/v1/reports/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetReportResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.GetReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetReportRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `timeRange` | `query` | `string` | no |
| `startDate` | `query` | `string` (date) | no |
| `endDate` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetReportResponse` | `getReportResponseSchema` | `src/models/get-report-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getReportConfig

- **Signature**: `getReportConfig(request: Reports.GetReportConfigRequest, options?: RequestOptions): ApiPromise<ExternalReport, Reports.GetReportConfigError>`
- **Wire**: `GET /analytics/v1/reports/{id}/config`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExternalReport`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.GetReportConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetReportConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExternalReport` | `externalReportSchema` | `src/models/external-report.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listReports

- **Signature**: `listReports(request?: Reports.ListReportsRequest, options?: RequestOptions): ApiPromise<ReportList, Reports.ListReportsError>`
- **Wire**: `GET /analytics/v1/reports`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.ListReportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.ListReportsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |
| `nameContains` | `query` | `string` | no | — |
| `minCreationTime` | `query` | `string` | no | — |
| `maxCreationTime` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportList` | `reportListSchema` | `src/models/report-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### query

- **Signature**: `query(request?: Reports.QueryRequest, options?: RequestOptions): ApiPromise<RunReportResult, Reports.QueryError>`
- **Wire**: `POST /analytics/v1/reports/query`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RunReportResult`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.QueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.QueryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AnalyticsV1ReportsQueryRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsV1ReportsQueryRequest` | `analyticsV1ReportsQueryRequestSchema` | `src/models/analytics-v1-reports-query-request.ts` |
| `RunReportResult` | `runReportResultSchema` | `src/models/run-report-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateReport

- **Signature**: `updateReport(request: Reports.UpdateReportRequest, options?: RequestOptions): ApiPromise<ExternalReport, Reports.UpdateReportError>`
- **Wire**: `PATCH /analytics/v1/reports/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExternalReport`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Reports.UpdateReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.UpdateReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ExternalUpdateReport` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExternalUpdateReport` | `externalUpdateReportSchema` | `src/models/external-update-report.ts` |
| `ExternalReport` | `externalReportSchema` | `src/models/external-report.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

