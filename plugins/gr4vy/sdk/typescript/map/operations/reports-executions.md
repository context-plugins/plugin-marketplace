<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReportsExecutions — operations

Accessor: `client.reportsExecutions` · Source: `src/resources/reports-executions.ts` · 4 operations · Request and error types: namespace `ReportsExecutions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createReportExecutionUrl

- **Signature**: `createReportExecutionUrl(request: ReportsExecutions.CreateReportExecutionUrlRequest, options?: RequestOptions): ApiPromise<ReportExecutionUrl, ReportsExecutions.CreateReportExecutionUrlError>`
- **Wire**: `POST /reports/{report_id}/executions/{report_execution_id}/url`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReportExecutionUrl`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `ReportsExecutions.CreateReportExecutionUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReportsExecutions.CreateReportExecutionUrlRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportId` | `path` | `report_id` | `string` | yes |
| `reportExecutionId` | `path` | `report_execution_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |
| `body` | `body` | — | `ReportExecutionUrlGenerate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `ReportExecutionUrlGenerate` | `reportExecutionUrlGenerateSchema` | `src/models/report-execution-url-generate.ts` |
| `ReportExecutionUrl` | `reportExecutionUrlSchema` | `src/models/report-execution-url.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getReportExecution

- **Signature**: `getReportExecution(request: ReportsExecutions.GetReportExecutionRequest, options?: RequestOptions): ApiPromise<ReportExecution, ReportsExecutions.GetReportExecutionError>`
- **Wire**: `GET /report-executions/{report_execution_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportExecution`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `ReportsExecutions.GetReportExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReportsExecutions.GetReportExecutionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportExecutionId` | `path` | `report_execution_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `ReportExecution` | `reportExecutionSchema` | `src/models/report-execution.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listAllReportExecutions

- **Signature**: `listAllReportExecutions(request: ReportsExecutions.ListAllReportExecutionsRequest, options?: RequestOptions): ApiPromise<ReportExecutions, ReportsExecutions.ListAllReportExecutionsError>`
- **Wire**: `GET /report-executions`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportExecutions`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `ReportsExecutions.ListAllReportExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReportsExecutions.ListAllReportExecutionsRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `Cursor` | no | — |
| `limit` | `query` | — | `number` | no | `20` |
| `reportName` | `query` | `report_name` | `ReportName` | no | — |
| `createdAtLte` | `query` | `created_at_lte` | `CreatedAtLte1` | no | — |
| `createdAtGte` | `query` | `created_at_gte` | `CreatedAtGte1` | no | — |
| `status` | `query` | — | `Status4` | no | — |
| `creatorId` | `query` | `creator_id` | `CreatorId2` | no | — |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `ReportName` | `reportNameSchema` | `src/models/unions/report-name.ts` |
| `CreatedAtLte1` | `createdAtLte1Schema` | `src/models/unions/created-at-lte1.ts` |
| `CreatedAtGte1` | `createdAtGte1Schema` | `src/models/unions/created-at-gte1.ts` |
| `Status4` | `status4Schema` | `src/models/unions/status4.ts` |
| `CreatorId2` | `creatorId2Schema` | `src/models/unions/creator-id2.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `ReportExecutions` | `reportExecutionsSchema` | `src/models/report-executions.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listReportExecutions

- **Signature**: `listReportExecutions(request: ReportsExecutions.ListReportExecutionsRequest, options?: RequestOptions): ApiPromise<ReportExecutions, ReportsExecutions.ListReportExecutionsError>`
- **Wire**: `GET /reports/{report_id}/executions`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportExecutions`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `ReportsExecutions.ListReportExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReportsExecutions.ListReportExecutionsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `reportId` | `path` | `report_id` | `string` | yes | — |
| `cursor` | `query` | — | `Cursor` | no | — |
| `limit` | `query` | — | `number` | no | `20` |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `ReportExecutions` | `reportExecutionsSchema` | `src/models/report-executions.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

