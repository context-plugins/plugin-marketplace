<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automation — operations

Accessor: `client.automation` · Source: `src/resources/automation.ts` · 17 operations · Request and error types: namespace `Automation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### automationActivateFlow

- **Signature**: `automationActivateFlow(request: Automation.AutomationActivateFlowRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsActivateResponse, Automation.AutomationActivateFlowError>`
- **Wire**: `POST /api/v1/automations/{id}/activate`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationsActivateResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationActivateFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationsActivate400Error1"` [400] `ApiV1AutomationsActivate400Error1` · `"apiV1AutomationsActivate401Error1"` [401] `ApiV1AutomationsActivate401Error1` · `"apiV1AutomationsActivate403Error1"` [403] `ApiV1AutomationsActivate403Error1` · `"apiV1AutomationsActivate404Error1"` [404] `ApiV1AutomationsActivate404Error1` · `"apiV1AutomationsActivate429Error1"` [429] `ApiV1AutomationsActivate429Error1` · `"apiV1AutomationsActivate500Error1"` [500] `ApiV1AutomationsActivate500Error1` · `"apiV1AutomationsActivate502Error1"` [502] `ApiV1AutomationsActivate502Error1` · `"apiV1AutomationsActivate503Error1"` [503] `ApiV1AutomationsActivate503Error1` · `"apiV1AutomationsActivate504Error1"` [504] `ApiV1AutomationsActivate504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationActivateFlowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationsActivateResponse` | `apiV1AutomationsActivateResponseSchema` | `src/models/api-v1-automations-activate-response.ts` |
| `ApiV1AutomationsActivate400Error1` | `apiV1AutomationsActivate400Error1Schema` | `src/models/api-v1-automations-activate400-error1.ts` |
| `ApiV1AutomationsActivate401Error1` | `apiV1AutomationsActivate401Error1Schema` | `src/models/api-v1-automations-activate401-error1.ts` |
| `ApiV1AutomationsActivate403Error1` | `apiV1AutomationsActivate403Error1Schema` | `src/models/api-v1-automations-activate403-error1.ts` |
| `ApiV1AutomationsActivate404Error1` | `apiV1AutomationsActivate404Error1Schema` | `src/models/api-v1-automations-activate404-error1.ts` |
| `ApiV1AutomationsActivate429Error1` | `apiV1AutomationsActivate429Error1Schema` | `src/models/api-v1-automations-activate429-error1.ts` |
| `ApiV1AutomationsActivate500Error1` | `apiV1AutomationsActivate500Error1Schema` | `src/models/api-v1-automations-activate500-error1.ts` |
| `ApiV1AutomationsActivate502Error1` | `apiV1AutomationsActivate502Error1Schema` | `src/models/api-v1-automations-activate502-error1.ts` |
| `ApiV1AutomationsActivate503Error1` | `apiV1AutomationsActivate503Error1Schema` | `src/models/api-v1-automations-activate503-error1.ts` |
| `ApiV1AutomationsActivate504Error1` | `apiV1AutomationsActivate504Error1Schema` | `src/models/api-v1-automations-activate504-error1.ts` |

### automationArchiveFlow

- **Signature**: `automationArchiveFlow(request: Automation.AutomationArchiveFlowRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsArchiveResponse, Automation.AutomationArchiveFlowError>`
- **Wire**: `POST /api/v1/automations/{id}/archive`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationsArchiveResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationArchiveFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationsArchive400Error1"` [400] `ApiV1AutomationsArchive400Error1` · `"apiV1AutomationsArchive401Error1"` [401] `ApiV1AutomationsArchive401Error1` · `"apiV1AutomationsArchive403Error1"` [403] `ApiV1AutomationsArchive403Error1` · `"apiV1AutomationsArchive404Error1"` [404] `ApiV1AutomationsArchive404Error1` · `"apiV1AutomationsArchive429Error1"` [429] `ApiV1AutomationsArchive429Error1` · `"apiV1AutomationsArchive500Error1"` [500] `ApiV1AutomationsArchive500Error1` · `"apiV1AutomationsArchive502Error1"` [502] `ApiV1AutomationsArchive502Error1` · `"apiV1AutomationsArchive503Error1"` [503] `ApiV1AutomationsArchive503Error1` · `"apiV1AutomationsArchive504Error1"` [504] `ApiV1AutomationsArchive504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationArchiveFlowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationsArchiveResponse` | `apiV1AutomationsArchiveResponseSchema` | `src/models/api-v1-automations-archive-response.ts` |
| `ApiV1AutomationsArchive400Error1` | `apiV1AutomationsArchive400Error1Schema` | `src/models/api-v1-automations-archive400-error1.ts` |
| `ApiV1AutomationsArchive401Error1` | `apiV1AutomationsArchive401Error1Schema` | `src/models/api-v1-automations-archive401-error1.ts` |
| `ApiV1AutomationsArchive403Error1` | `apiV1AutomationsArchive403Error1Schema` | `src/models/api-v1-automations-archive403-error1.ts` |
| `ApiV1AutomationsArchive404Error1` | `apiV1AutomationsArchive404Error1Schema` | `src/models/api-v1-automations-archive404-error1.ts` |
| `ApiV1AutomationsArchive429Error1` | `apiV1AutomationsArchive429Error1Schema` | `src/models/api-v1-automations-archive429-error1.ts` |
| `ApiV1AutomationsArchive500Error1` | `apiV1AutomationsArchive500Error1Schema` | `src/models/api-v1-automations-archive500-error1.ts` |
| `ApiV1AutomationsArchive502Error1` | `apiV1AutomationsArchive502Error1Schema` | `src/models/api-v1-automations-archive502-error1.ts` |
| `ApiV1AutomationsArchive503Error1` | `apiV1AutomationsArchive503Error1Schema` | `src/models/api-v1-automations-archive503-error1.ts` |
| `ApiV1AutomationsArchive504Error1` | `apiV1AutomationsArchive504Error1Schema` | `src/models/api-v1-automations-archive504-error1.ts` |

### automationCopyFlows

- **Signature**: `automationCopyFlows(request?: Automation.AutomationCopyFlowsRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsCopyResponse, Automation.AutomationCopyFlowsError>`
- **Wire**: `POST /api/v1/automations/copy`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationsCopyResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationCopyFlowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationsCopy400Error1"` [400] `ApiV1AutomationsCopy400Error1` · `"apiV1AutomationsCopy401Error1"` [401] `ApiV1AutomationsCopy401Error1` · `"apiV1AutomationsCopy403Error1"` [403] `ApiV1AutomationsCopy403Error1` · `"apiV1AutomationsCopy404Error1"` [404] `ApiV1AutomationsCopy404Error1` · `"apiV1AutomationsCopy429Error1"` [429] `ApiV1AutomationsCopy429Error1` · `"apiV1AutomationsCopy500Error1"` [500] `ApiV1AutomationsCopy500Error1` · `"apiV1AutomationsCopy502Error1"` [502] `ApiV1AutomationsCopy502Error1` · `"apiV1AutomationsCopy503Error1"` [503] `ApiV1AutomationsCopy503Error1` · `"apiV1AutomationsCopy504Error1"` [504] `ApiV1AutomationsCopy504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationCopyFlowsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1AutomationsCopyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationsCopyRequest` | `apiV1AutomationsCopyRequestSchema` | `src/models/api-v1-automations-copy-request.ts` |
| `ApiV1AutomationsCopyResponse` | `apiV1AutomationsCopyResponseSchema` | `src/models/api-v1-automations-copy-response.ts` |
| `ApiV1AutomationsCopy400Error1` | `apiV1AutomationsCopy400Error1Schema` | `src/models/api-v1-automations-copy400-error1.ts` |
| `ApiV1AutomationsCopy401Error1` | `apiV1AutomationsCopy401Error1Schema` | `src/models/api-v1-automations-copy401-error1.ts` |
| `ApiV1AutomationsCopy403Error1` | `apiV1AutomationsCopy403Error1Schema` | `src/models/api-v1-automations-copy403-error1.ts` |
| `ApiV1AutomationsCopy404Error1` | `apiV1AutomationsCopy404Error1Schema` | `src/models/api-v1-automations-copy404-error1.ts` |
| `ApiV1AutomationsCopy429Error1` | `apiV1AutomationsCopy429Error1Schema` | `src/models/api-v1-automations-copy429-error1.ts` |
| `ApiV1AutomationsCopy500Error1` | `apiV1AutomationsCopy500Error1Schema` | `src/models/api-v1-automations-copy500-error1.ts` |
| `ApiV1AutomationsCopy502Error1` | `apiV1AutomationsCopy502Error1Schema` | `src/models/api-v1-automations-copy502-error1.ts` |
| `ApiV1AutomationsCopy503Error1` | `apiV1AutomationsCopy503Error1Schema` | `src/models/api-v1-automations-copy503-error1.ts` |
| `ApiV1AutomationsCopy504Error1` | `apiV1AutomationsCopy504Error1Schema` | `src/models/api-v1-automations-copy504-error1.ts` |

### automationCreateFlow

- **Signature**: `automationCreateFlow(request?: Automation.AutomationCreateFlowRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsResponse1, Automation.AutomationCreateFlowError>`
- **Wire**: `POST /api/v1/automations`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationCreateFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Automations400Error1"` [400] `ApiV1Automations400Error1` · `"apiV1Automations401Error1"` [401] `ApiV1Automations401Error1` · `"apiV1Automations403Error1"` [403] `ApiV1Automations403Error1` · `"apiV1Automations404Error1"` [404] `ApiV1Automations404Error1` · `"apiV1Automations429Error1"` [429] `ApiV1Automations429Error1` · `"apiV1Automations500Error1"` [500] `ApiV1Automations500Error1` · `"apiV1Automations502Error1"` [502] `ApiV1Automations502Error1` · `"apiV1Automations503Error1"` [503] `ApiV1Automations503Error1` · `"apiV1Automations504Error1"` [504] `ApiV1Automations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationCreateFlowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1AutomationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationsRequest` | `apiV1AutomationsRequestSchema` | `src/models/api-v1-automations-request.ts` |
| `ApiV1AutomationsResponse1` | `apiV1AutomationsResponse1Schema` | `src/models/api-v1-automations-response1.ts` |
| `ApiV1Automations400Error1` | `apiV1Automations400Error1Schema` | `src/models/api-v1-automations400-error1.ts` |
| `ApiV1Automations401Error1` | `apiV1Automations401Error1Schema` | `src/models/api-v1-automations401-error1.ts` |
| `ApiV1Automations403Error1` | `apiV1Automations403Error1Schema` | `src/models/api-v1-automations403-error1.ts` |
| `ApiV1Automations404Error1` | `apiV1Automations404Error1Schema` | `src/models/api-v1-automations404-error1.ts` |
| `ApiV1Automations429Error1` | `apiV1Automations429Error1Schema` | `src/models/api-v1-automations429-error1.ts` |
| `ApiV1Automations500Error1` | `apiV1Automations500Error1Schema` | `src/models/api-v1-automations500-error1.ts` |
| `ApiV1Automations502Error1` | `apiV1Automations502Error1Schema` | `src/models/api-v1-automations502-error1.ts` |
| `ApiV1Automations503Error1` | `apiV1Automations503Error1Schema` | `src/models/api-v1-automations503-error1.ts` |
| `ApiV1Automations504Error1` | `apiV1Automations504Error1Schema` | `src/models/api-v1-automations504-error1.ts` |

### automationDeleteFlow

- **Signature**: `automationDeleteFlow(request: Automation.AutomationDeleteFlowRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsResponse1, Automation.AutomationDeleteFlowError>`
- **Wire**: `DELETE /api/v1/automations/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationDeleteFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Automations400Error1"` [400] `ApiV1Automations400Error1` · `"apiV1Automations401Error1"` [401] `ApiV1Automations401Error1` · `"apiV1Automations403Error1"` [403] `ApiV1Automations403Error1` · `"apiV1Automations404Error1"` [404] `ApiV1Automations404Error1` · `"apiV1Automations429Error1"` [429] `ApiV1Automations429Error1` · `"apiV1Automations500Error1"` [500] `ApiV1Automations500Error1` · `"apiV1Automations502Error1"` [502] `ApiV1Automations502Error1` · `"apiV1Automations503Error1"` [503] `ApiV1Automations503Error1` · `"apiV1Automations504Error1"` [504] `ApiV1Automations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationDeleteFlowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationsResponse1` | `apiV1AutomationsResponse1Schema` | `src/models/api-v1-automations-response1.ts` |
| `ApiV1Automations400Error1` | `apiV1Automations400Error1Schema` | `src/models/api-v1-automations400-error1.ts` |
| `ApiV1Automations401Error1` | `apiV1Automations401Error1Schema` | `src/models/api-v1-automations401-error1.ts` |
| `ApiV1Automations403Error1` | `apiV1Automations403Error1Schema` | `src/models/api-v1-automations403-error1.ts` |
| `ApiV1Automations404Error1` | `apiV1Automations404Error1Schema` | `src/models/api-v1-automations404-error1.ts` |
| `ApiV1Automations429Error1` | `apiV1Automations429Error1Schema` | `src/models/api-v1-automations429-error1.ts` |
| `ApiV1Automations500Error1` | `apiV1Automations500Error1Schema` | `src/models/api-v1-automations500-error1.ts` |
| `ApiV1Automations502Error1` | `apiV1Automations502Error1Schema` | `src/models/api-v1-automations502-error1.ts` |
| `ApiV1Automations503Error1` | `apiV1Automations503Error1Schema` | `src/models/api-v1-automations503-error1.ts` |
| `ApiV1Automations504Error1` | `apiV1Automations504Error1Schema` | `src/models/api-v1-automations504-error1.ts` |

### automationGetExecution

- **Signature**: `automationGetExecution(request: Automation.AutomationGetExecutionRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationExecutionsResponse, Automation.AutomationGetExecutionError>`
- **Wire**: `GET /api/v1/automation-executions/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AutomationExecutionsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationGetExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationExecutions400Error1"` [400] `ApiV1AutomationExecutions400Error1` · `"apiV1AutomationExecutions401Error1"` [401] `ApiV1AutomationExecutions401Error1` · `"apiV1AutomationExecutions403Error1"` [403] `ApiV1AutomationExecutions403Error1` · `"apiV1AutomationExecutions404Error1"` [404] `ApiV1AutomationExecutions404Error1` · `"apiV1AutomationExecutions429Error1"` [429] `ApiV1AutomationExecutions429Error1` · `"apiV1AutomationExecutions500Error1"` [500] `ApiV1AutomationExecutions500Error1` · `"apiV1AutomationExecutions502Error1"` [502] `ApiV1AutomationExecutions502Error1` · `"apiV1AutomationExecutions503Error1"` [503] `ApiV1AutomationExecutions503Error1` · `"apiV1AutomationExecutions504Error1"` [504] `ApiV1AutomationExecutions504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationGetExecutionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationExecutionsResponse` | `apiV1AutomationExecutionsResponseSchema` | `src/models/api-v1-automation-executions-response.ts` |
| `ApiV1AutomationExecutions400Error1` | `apiV1AutomationExecutions400Error1Schema` | `src/models/api-v1-automation-executions400-error1.ts` |
| `ApiV1AutomationExecutions401Error1` | `apiV1AutomationExecutions401Error1Schema` | `src/models/api-v1-automation-executions401-error1.ts` |
| `ApiV1AutomationExecutions403Error1` | `apiV1AutomationExecutions403Error1Schema` | `src/models/api-v1-automation-executions403-error1.ts` |
| `ApiV1AutomationExecutions404Error1` | `apiV1AutomationExecutions404Error1Schema` | `src/models/api-v1-automation-executions404-error1.ts` |
| `ApiV1AutomationExecutions429Error1` | `apiV1AutomationExecutions429Error1Schema` | `src/models/api-v1-automation-executions429-error1.ts` |
| `ApiV1AutomationExecutions500Error1` | `apiV1AutomationExecutions500Error1Schema` | `src/models/api-v1-automation-executions500-error1.ts` |
| `ApiV1AutomationExecutions502Error1` | `apiV1AutomationExecutions502Error1Schema` | `src/models/api-v1-automation-executions502-error1.ts` |
| `ApiV1AutomationExecutions503Error1` | `apiV1AutomationExecutions503Error1Schema` | `src/models/api-v1-automation-executions503-error1.ts` |
| `ApiV1AutomationExecutions504Error1` | `apiV1AutomationExecutions504Error1Schema` | `src/models/api-v1-automation-executions504-error1.ts` |

### automationGetFlow

- **Signature**: `automationGetFlow(request: Automation.AutomationGetFlowRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsResponse1, Automation.AutomationGetFlowError>`
- **Wire**: `GET /api/v1/automations/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AutomationsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationGetFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Automations400Error1"` [400] `ApiV1Automations400Error1` · `"apiV1Automations401Error1"` [401] `ApiV1Automations401Error1` · `"apiV1Automations403Error1"` [403] `ApiV1Automations403Error1` · `"apiV1Automations404Error1"` [404] `ApiV1Automations404Error1` · `"apiV1Automations429Error1"` [429] `ApiV1Automations429Error1` · `"apiV1Automations500Error1"` [500] `ApiV1Automations500Error1` · `"apiV1Automations502Error1"` [502] `ApiV1Automations502Error1` · `"apiV1Automations503Error1"` [503] `ApiV1Automations503Error1` · `"apiV1Automations504Error1"` [504] `ApiV1Automations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationGetFlowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationsResponse1` | `apiV1AutomationsResponse1Schema` | `src/models/api-v1-automations-response1.ts` |
| `ApiV1Automations400Error1` | `apiV1Automations400Error1Schema` | `src/models/api-v1-automations400-error1.ts` |
| `ApiV1Automations401Error1` | `apiV1Automations401Error1Schema` | `src/models/api-v1-automations401-error1.ts` |
| `ApiV1Automations403Error1` | `apiV1Automations403Error1Schema` | `src/models/api-v1-automations403-error1.ts` |
| `ApiV1Automations404Error1` | `apiV1Automations404Error1Schema` | `src/models/api-v1-automations404-error1.ts` |
| `ApiV1Automations429Error1` | `apiV1Automations429Error1Schema` | `src/models/api-v1-automations429-error1.ts` |
| `ApiV1Automations500Error1` | `apiV1Automations500Error1Schema` | `src/models/api-v1-automations500-error1.ts` |
| `ApiV1Automations502Error1` | `apiV1Automations502Error1Schema` | `src/models/api-v1-automations502-error1.ts` |
| `ApiV1Automations503Error1` | `apiV1Automations503Error1Schema` | `src/models/api-v1-automations503-error1.ts` |
| `ApiV1Automations504Error1` | `apiV1Automations504Error1Schema` | `src/models/api-v1-automations504-error1.ts` |

### automationGetFlowExecutions

- **Signature**: `automationGetFlowExecutions(request: Automation.AutomationGetFlowExecutionsRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsExecutionsResponse, Automation.AutomationGetFlowExecutionsError>`
- **Wire**: `GET /api/v1/automations/{id}/executions`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AutomationsExecutionsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationGetFlowExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationsExecutions400Error1"` [400] `ApiV1AutomationsExecutions400Error1` · `"apiV1AutomationsExecutions401Error1"` [401] `ApiV1AutomationsExecutions401Error1` · `"apiV1AutomationsExecutions403Error1"` [403] `ApiV1AutomationsExecutions403Error1` · `"apiV1AutomationsExecutions404Error1"` [404] `ApiV1AutomationsExecutions404Error1` · `"apiV1AutomationsExecutions429Error1"` [429] `ApiV1AutomationsExecutions429Error1` · `"apiV1AutomationsExecutions500Error1"` [500] `ApiV1AutomationsExecutions500Error1` · `"apiV1AutomationsExecutions502Error1"` [502] `ApiV1AutomationsExecutions502Error1` · `"apiV1AutomationsExecutions503Error1"` [503] `ApiV1AutomationsExecutions503Error1` · `"apiV1AutomationsExecutions504Error1"` [504] `ApiV1AutomationsExecutions504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationGetFlowExecutionsRequest` (12):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `teamId` | `query` | `string` | yes | — |
| `flowVersionId` | `query` | `string` | no | — |
| `triggerId` | `query` | `string` | no | — |
| `socialAccountId` | `query` | `string` | no | — |
| `platform` | `query` | `Platform` | no | — |
| `status` | `query` | `Status31` | no | — |
| `conversationId` | `query` | `string` | no | — |
| `fetchedCommentId` | `query` | `string` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Platform` | `platformSchema` | `src/models/platform.ts` |
| `Status31` | `status31Schema` | `src/models/status31.ts` |
| `ApiV1AutomationsExecutionsResponse` | `apiV1AutomationsExecutionsResponseSchema` | `src/models/api-v1-automations-executions-response.ts` |
| `ApiV1AutomationsExecutions400Error1` | `apiV1AutomationsExecutions400Error1Schema` | `src/models/api-v1-automations-executions400-error1.ts` |
| `ApiV1AutomationsExecutions401Error1` | `apiV1AutomationsExecutions401Error1Schema` | `src/models/api-v1-automations-executions401-error1.ts` |
| `ApiV1AutomationsExecutions403Error1` | `apiV1AutomationsExecutions403Error1Schema` | `src/models/api-v1-automations-executions403-error1.ts` |
| `ApiV1AutomationsExecutions404Error1` | `apiV1AutomationsExecutions404Error1Schema` | `src/models/api-v1-automations-executions404-error1.ts` |
| `ApiV1AutomationsExecutions429Error1` | `apiV1AutomationsExecutions429Error1Schema` | `src/models/api-v1-automations-executions429-error1.ts` |
| `ApiV1AutomationsExecutions500Error1` | `apiV1AutomationsExecutions500Error1Schema` | `src/models/api-v1-automations-executions500-error1.ts` |
| `ApiV1AutomationsExecutions502Error1` | `apiV1AutomationsExecutions502Error1Schema` | `src/models/api-v1-automations-executions502-error1.ts` |
| `ApiV1AutomationsExecutions503Error1` | `apiV1AutomationsExecutions503Error1Schema` | `src/models/api-v1-automations-executions503-error1.ts` |
| `ApiV1AutomationsExecutions504Error1` | `apiV1AutomationsExecutions504Error1Schema` | `src/models/api-v1-automations-executions504-error1.ts` |

### automationGetFlows

- **Signature**: `automationGetFlows(request: Automation.AutomationGetFlowsRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsResponse, Automation.AutomationGetFlowsError>`
- **Wire**: `GET /api/v1/automations`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AutomationsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationGetFlowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Automations400Error1"` [400] `ApiV1Automations400Error1` · `"apiV1Automations401Error1"` [401] `ApiV1Automations401Error1` · `"apiV1Automations403Error1"` [403] `ApiV1Automations403Error1` · `"apiV1Automations404Error1"` [404] `ApiV1Automations404Error1` · `"apiV1Automations429Error1"` [429] `ApiV1Automations429Error1` · `"apiV1Automations500Error1"` [500] `ApiV1Automations500Error1` · `"apiV1Automations502Error1"` [502] `ApiV1Automations502Error1` · `"apiV1Automations503Error1"` [503] `ApiV1Automations503Error1` · `"apiV1Automations504Error1"` [504] `ApiV1Automations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationGetFlowsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `status` | `query` | `StatusBundleSocialAutomationApi` | no | — |
| `platformScope` | `query` | `PlatformScope` | no | — |
| `socialAccountId` | `query` | `string` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusBundleSocialAutomationApi` | `statusBundleSocialAutomationApiSchema` | `src/models/status-bundle-social-automation-api.ts` |
| `PlatformScope` | `platformScopeSchema` | `src/models/platform-scope.ts` |
| `ApiV1AutomationsResponse` | `apiV1AutomationsResponseSchema` | `src/models/api-v1-automations-response.ts` |
| `ApiV1Automations400Error1` | `apiV1Automations400Error1Schema` | `src/models/api-v1-automations400-error1.ts` |
| `ApiV1Automations401Error1` | `apiV1Automations401Error1Schema` | `src/models/api-v1-automations401-error1.ts` |
| `ApiV1Automations403Error1` | `apiV1Automations403Error1Schema` | `src/models/api-v1-automations403-error1.ts` |
| `ApiV1Automations404Error1` | `apiV1Automations404Error1Schema` | `src/models/api-v1-automations404-error1.ts` |
| `ApiV1Automations429Error1` | `apiV1Automations429Error1Schema` | `src/models/api-v1-automations429-error1.ts` |
| `ApiV1Automations500Error1` | `apiV1Automations500Error1Schema` | `src/models/api-v1-automations500-error1.ts` |
| `ApiV1Automations502Error1` | `apiV1Automations502Error1Schema` | `src/models/api-v1-automations502-error1.ts` |
| `ApiV1Automations503Error1` | `apiV1Automations503Error1Schema` | `src/models/api-v1-automations503-error1.ts` |
| `ApiV1Automations504Error1` | `apiV1Automations504Error1Schema` | `src/models/api-v1-automations504-error1.ts` |

### automationGetProviderSettings

- **Signature**: `automationGetProviderSettings(request: Automation.AutomationGetProviderSettingsRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationProviderSettingsResponse, Automation.AutomationGetProviderSettingsError>`
- **Wire**: `GET /api/v1/automation-provider-settings`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AutomationProviderSettingsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationGetProviderSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationProviderSettings400Error1"` [400] `ApiV1AutomationProviderSettings400Error1` · `"apiV1AutomationProviderSettings401Error1"` [401] `ApiV1AutomationProviderSettings401Error1` · `"apiV1AutomationProviderSettings403Error1"` [403] `ApiV1AutomationProviderSettings403Error1` · `"apiV1AutomationProviderSettings404Error1"` [404] `ApiV1AutomationProviderSettings404Error1` · `"apiV1AutomationProviderSettings429Error1"` [429] `ApiV1AutomationProviderSettings429Error1` · `"apiV1AutomationProviderSettings500Error1"` [500] `ApiV1AutomationProviderSettings500Error1` · `"apiV1AutomationProviderSettings502Error1"` [502] `ApiV1AutomationProviderSettings502Error1` · `"apiV1AutomationProviderSettings503Error1"` [503] `ApiV1AutomationProviderSettings503Error1` · `"apiV1AutomationProviderSettings504Error1"` [504] `ApiV1AutomationProviderSettings504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationGetProviderSettingsRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `platform` | `query` | `Platform` | no | — |
| `socialAccountId` | `query` | `string` | no | — |
| `type` | `query` | `Type112` | no | — |
| `status` | `query` | `Status59` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Platform` | `platformSchema` | `src/models/platform.ts` |
| `Type112` | `type112Schema` | `src/models/type112.ts` |
| `Status59` | `status59Schema` | `src/models/status59.ts` |
| `ApiV1AutomationProviderSettingsResponse` | `apiV1AutomationProviderSettingsResponseSchema` | `src/models/api-v1-automation-provider-settings-response.ts` |
| `ApiV1AutomationProviderSettings400Error1` | `apiV1AutomationProviderSettings400Error1Schema` | `src/models/api-v1-automation-provider-settings400-error1.ts` |
| `ApiV1AutomationProviderSettings401Error1` | `apiV1AutomationProviderSettings401Error1Schema` | `src/models/api-v1-automation-provider-settings401-error1.ts` |
| `ApiV1AutomationProviderSettings403Error1` | `apiV1AutomationProviderSettings403Error1Schema` | `src/models/api-v1-automation-provider-settings403-error1.ts` |
| `ApiV1AutomationProviderSettings404Error1` | `apiV1AutomationProviderSettings404Error1Schema` | `src/models/api-v1-automation-provider-settings404-error1.ts` |
| `ApiV1AutomationProviderSettings429Error1` | `apiV1AutomationProviderSettings429Error1Schema` | `src/models/api-v1-automation-provider-settings429-error1.ts` |
| `ApiV1AutomationProviderSettings500Error1` | `apiV1AutomationProviderSettings500Error1Schema` | `src/models/api-v1-automation-provider-settings500-error1.ts` |
| `ApiV1AutomationProviderSettings502Error1` | `apiV1AutomationProviderSettings502Error1Schema` | `src/models/api-v1-automation-provider-settings502-error1.ts` |
| `ApiV1AutomationProviderSettings503Error1` | `apiV1AutomationProviderSettings503Error1Schema` | `src/models/api-v1-automation-provider-settings503-error1.ts` |
| `ApiV1AutomationProviderSettings504Error1` | `apiV1AutomationProviderSettings504Error1Schema` | `src/models/api-v1-automation-provider-settings504-error1.ts` |

### automationPauseFlow

- **Signature**: `automationPauseFlow(request: Automation.AutomationPauseFlowRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsPauseResponse, Automation.AutomationPauseFlowError>`
- **Wire**: `POST /api/v1/automations/{id}/pause`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationsPauseResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationPauseFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationsPause400Error1"` [400] `ApiV1AutomationsPause400Error1` · `"apiV1AutomationsPause401Error1"` [401] `ApiV1AutomationsPause401Error1` · `"apiV1AutomationsPause403Error1"` [403] `ApiV1AutomationsPause403Error1` · `"apiV1AutomationsPause404Error1"` [404] `ApiV1AutomationsPause404Error1` · `"apiV1AutomationsPause429Error1"` [429] `ApiV1AutomationsPause429Error1` · `"apiV1AutomationsPause500Error1"` [500] `ApiV1AutomationsPause500Error1` · `"apiV1AutomationsPause502Error1"` [502] `ApiV1AutomationsPause502Error1` · `"apiV1AutomationsPause503Error1"` [503] `ApiV1AutomationsPause503Error1` · `"apiV1AutomationsPause504Error1"` [504] `ApiV1AutomationsPause504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationPauseFlowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationsPauseResponse` | `apiV1AutomationsPauseResponseSchema` | `src/models/api-v1-automations-pause-response.ts` |
| `ApiV1AutomationsPause400Error1` | `apiV1AutomationsPause400Error1Schema` | `src/models/api-v1-automations-pause400-error1.ts` |
| `ApiV1AutomationsPause401Error1` | `apiV1AutomationsPause401Error1Schema` | `src/models/api-v1-automations-pause401-error1.ts` |
| `ApiV1AutomationsPause403Error1` | `apiV1AutomationsPause403Error1Schema` | `src/models/api-v1-automations-pause403-error1.ts` |
| `ApiV1AutomationsPause404Error1` | `apiV1AutomationsPause404Error1Schema` | `src/models/api-v1-automations-pause404-error1.ts` |
| `ApiV1AutomationsPause429Error1` | `apiV1AutomationsPause429Error1Schema` | `src/models/api-v1-automations-pause429-error1.ts` |
| `ApiV1AutomationsPause500Error1` | `apiV1AutomationsPause500Error1Schema` | `src/models/api-v1-automations-pause500-error1.ts` |
| `ApiV1AutomationsPause502Error1` | `apiV1AutomationsPause502Error1Schema` | `src/models/api-v1-automations-pause502-error1.ts` |
| `ApiV1AutomationsPause503Error1` | `apiV1AutomationsPause503Error1Schema` | `src/models/api-v1-automations-pause503-error1.ts` |
| `ApiV1AutomationsPause504Error1` | `apiV1AutomationsPause504Error1Schema` | `src/models/api-v1-automations-pause504-error1.ts` |

### automationPublishFlow

- **Signature**: `automationPublishFlow(request: Automation.AutomationPublishFlowRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsPublishResponse, Automation.AutomationPublishFlowError>`
- **Wire**: `POST /api/v1/automations/{id}/publish`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationsPublishResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationPublishFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationsPublish400Error1"` [400] `ApiV1AutomationsPublish400Error1` · `"apiV1AutomationsPublish401Error1"` [401] `ApiV1AutomationsPublish401Error1` · `"apiV1AutomationsPublish403Error1"` [403] `ApiV1AutomationsPublish403Error1` · `"apiV1AutomationsPublish404Error1"` [404] `ApiV1AutomationsPublish404Error1` · `"apiV1AutomationsPublish429Error1"` [429] `ApiV1AutomationsPublish429Error1` · `"apiV1AutomationsPublish500Error1"` [500] `ApiV1AutomationsPublish500Error1` · `"apiV1AutomationsPublish502Error1"` [502] `ApiV1AutomationsPublish502Error1` · `"apiV1AutomationsPublish503Error1"` [503] `ApiV1AutomationsPublish503Error1` · `"apiV1AutomationsPublish504Error1"` [504] `ApiV1AutomationsPublish504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationPublishFlowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1AutomationsPublishRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationsPublishRequest` | `apiV1AutomationsPublishRequestSchema` | `src/models/api-v1-automations-publish-request.ts` |
| `ApiV1AutomationsPublishResponse` | `apiV1AutomationsPublishResponseSchema` | `src/models/api-v1-automations-publish-response.ts` |
| `ApiV1AutomationsPublish400Error1` | `apiV1AutomationsPublish400Error1Schema` | `src/models/api-v1-automations-publish400-error1.ts` |
| `ApiV1AutomationsPublish401Error1` | `apiV1AutomationsPublish401Error1Schema` | `src/models/api-v1-automations-publish401-error1.ts` |
| `ApiV1AutomationsPublish403Error1` | `apiV1AutomationsPublish403Error1Schema` | `src/models/api-v1-automations-publish403-error1.ts` |
| `ApiV1AutomationsPublish404Error1` | `apiV1AutomationsPublish404Error1Schema` | `src/models/api-v1-automations-publish404-error1.ts` |
| `ApiV1AutomationsPublish429Error1` | `apiV1AutomationsPublish429Error1Schema` | `src/models/api-v1-automations-publish429-error1.ts` |
| `ApiV1AutomationsPublish500Error1` | `apiV1AutomationsPublish500Error1Schema` | `src/models/api-v1-automations-publish500-error1.ts` |
| `ApiV1AutomationsPublish502Error1` | `apiV1AutomationsPublish502Error1Schema` | `src/models/api-v1-automations-publish502-error1.ts` |
| `ApiV1AutomationsPublish503Error1` | `apiV1AutomationsPublish503Error1Schema` | `src/models/api-v1-automations-publish503-error1.ts` |
| `ApiV1AutomationsPublish504Error1` | `apiV1AutomationsPublish504Error1Schema` | `src/models/api-v1-automations-publish504-error1.ts` |

### automationSendRichMessage

- **Signature**: `automationSendRichMessage(request: Automation.AutomationSendRichMessageRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationRichMessagesConversationsResponse, Automation.AutomationSendRichMessageError>`
- **Wire**: `POST /api/v1/automation-rich-messages/conversations/{conversationId}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationRichMessagesConversationsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationSendRichMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationRichMessagesConversations400Error1"` [400] `ApiV1AutomationRichMessagesConversations400Error1` · `"apiV1AutomationRichMessagesConversations401Error1"` [401] `ApiV1AutomationRichMessagesConversations401Error1` · `"apiV1AutomationRichMessagesConversations403Error1"` [403] `ApiV1AutomationRichMessagesConversations403Error1` · `"apiV1AutomationRichMessagesConversations404Error1"` [404] `ApiV1AutomationRichMessagesConversations404Error1` · `"apiV1AutomationRichMessagesConversations429Error1"` [429] `ApiV1AutomationRichMessagesConversations429Error1` · `"apiV1AutomationRichMessagesConversations500Error1"` [500] `ApiV1AutomationRichMessagesConversations500Error1` · `"apiV1AutomationRichMessagesConversations502Error1"` [502] `ApiV1AutomationRichMessagesConversations502Error1` · `"apiV1AutomationRichMessagesConversations503Error1"` [503] `ApiV1AutomationRichMessagesConversations503Error1` · `"apiV1AutomationRichMessagesConversations504Error1"` [504] `ApiV1AutomationRichMessagesConversations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationSendRichMessageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1AutomationRichMessagesConversationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationRichMessagesConversationsRequest` | `apiV1AutomationRichMessagesConversationsRequestSchema` | `src/models/api-v1-automation-rich-messages-conversations-request.ts` |
| `ApiV1AutomationRichMessagesConversationsResponse` | `apiV1AutomationRichMessagesConversationsResponseSchema` | `src/models/api-v1-automation-rich-messages-conversations-response.ts` |
| `ApiV1AutomationRichMessagesConversations400Error1` | `apiV1AutomationRichMessagesConversations400Error1Schema` | `src/models/api-v1-automation-rich-messages-conversations400-error1.ts` |
| `ApiV1AutomationRichMessagesConversations401Error1` | `apiV1AutomationRichMessagesConversations401Error1Schema` | `src/models/api-v1-automation-rich-messages-conversations401-error1.ts` |
| `ApiV1AutomationRichMessagesConversations403Error1` | `apiV1AutomationRichMessagesConversations403Error1Schema` | `src/models/api-v1-automation-rich-messages-conversations403-error1.ts` |
| `ApiV1AutomationRichMessagesConversations404Error1` | `apiV1AutomationRichMessagesConversations404Error1Schema` | `src/models/api-v1-automation-rich-messages-conversations404-error1.ts` |
| `ApiV1AutomationRichMessagesConversations429Error1` | `apiV1AutomationRichMessagesConversations429Error1Schema` | `src/models/api-v1-automation-rich-messages-conversations429-error1.ts` |
| `ApiV1AutomationRichMessagesConversations500Error1` | `apiV1AutomationRichMessagesConversations500Error1Schema` | `src/models/api-v1-automation-rich-messages-conversations500-error1.ts` |
| `ApiV1AutomationRichMessagesConversations502Error1` | `apiV1AutomationRichMessagesConversations502Error1Schema` | `src/models/api-v1-automation-rich-messages-conversations502-error1.ts` |
| `ApiV1AutomationRichMessagesConversations503Error1` | `apiV1AutomationRichMessagesConversations503Error1Schema` | `src/models/api-v1-automation-rich-messages-conversations503-error1.ts` |
| `ApiV1AutomationRichMessagesConversations504Error1` | `apiV1AutomationRichMessagesConversations504Error1Schema` | `src/models/api-v1-automation-rich-messages-conversations504-error1.ts` |

### automationSyncProviderSetting

- **Signature**: `automationSyncProviderSetting(request: Automation.AutomationSyncProviderSettingRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationProviderSettingsSyncResponse, Automation.AutomationSyncProviderSettingError>`
- **Wire**: `POST /api/v1/automation-provider-settings/{id}/sync`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationProviderSettingsSyncResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationSyncProviderSettingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationProviderSettingsSync400Error1"` [400] `ApiV1AutomationProviderSettingsSync400Error1` · `"apiV1AutomationProviderSettingsSync401Error1"` [401] `ApiV1AutomationProviderSettingsSync401Error1` · `"apiV1AutomationProviderSettingsSync403Error1"` [403] `ApiV1AutomationProviderSettingsSync403Error1` · `"apiV1AutomationProviderSettingsSync404Error1"` [404] `ApiV1AutomationProviderSettingsSync404Error1` · `"apiV1AutomationProviderSettingsSync429Error1"` [429] `ApiV1AutomationProviderSettingsSync429Error1` · `"apiV1AutomationProviderSettingsSync500Error1"` [500] `ApiV1AutomationProviderSettingsSync500Error1` · `"apiV1AutomationProviderSettingsSync502Error1"` [502] `ApiV1AutomationProviderSettingsSync502Error1` · `"apiV1AutomationProviderSettingsSync503Error1"` [503] `ApiV1AutomationProviderSettingsSync503Error1` · `"apiV1AutomationProviderSettingsSync504Error1"` [504] `ApiV1AutomationProviderSettingsSync504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationSyncProviderSettingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationProviderSettingsSyncResponse` | `apiV1AutomationProviderSettingsSyncResponseSchema` | `src/models/api-v1-automation-provider-settings-sync-response.ts` |
| `ApiV1AutomationProviderSettingsSync400Error1` | `apiV1AutomationProviderSettingsSync400Error1Schema` | `src/models/api-v1-automation-provider-settings-sync400-error1.ts` |
| `ApiV1AutomationProviderSettingsSync401Error1` | `apiV1AutomationProviderSettingsSync401Error1Schema` | `src/models/api-v1-automation-provider-settings-sync401-error1.ts` |
| `ApiV1AutomationProviderSettingsSync403Error1` | `apiV1AutomationProviderSettingsSync403Error1Schema` | `src/models/api-v1-automation-provider-settings-sync403-error1.ts` |
| `ApiV1AutomationProviderSettingsSync404Error1` | `apiV1AutomationProviderSettingsSync404Error1Schema` | `src/models/api-v1-automation-provider-settings-sync404-error1.ts` |
| `ApiV1AutomationProviderSettingsSync429Error1` | `apiV1AutomationProviderSettingsSync429Error1Schema` | `src/models/api-v1-automation-provider-settings-sync429-error1.ts` |
| `ApiV1AutomationProviderSettingsSync500Error1` | `apiV1AutomationProviderSettingsSync500Error1Schema` | `src/models/api-v1-automation-provider-settings-sync500-error1.ts` |
| `ApiV1AutomationProviderSettingsSync502Error1` | `apiV1AutomationProviderSettingsSync502Error1Schema` | `src/models/api-v1-automation-provider-settings-sync502-error1.ts` |
| `ApiV1AutomationProviderSettingsSync503Error1` | `apiV1AutomationProviderSettingsSync503Error1Schema` | `src/models/api-v1-automation-provider-settings-sync503-error1.ts` |
| `ApiV1AutomationProviderSettingsSync504Error1` | `apiV1AutomationProviderSettingsSync504Error1Schema` | `src/models/api-v1-automation-provider-settings-sync504-error1.ts` |

### automationTestFlow

- **Signature**: `automationTestFlow(request: Automation.AutomationTestFlowRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsTestResponse, Automation.AutomationTestFlowError>`
- **Wire**: `POST /api/v1/automations/{id}/test`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationsTestResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationTestFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationsTest400Error1"` [400] `ApiV1AutomationsTest400Error1` · `"apiV1AutomationsTest401Error1"` [401] `ApiV1AutomationsTest401Error1` · `"apiV1AutomationsTest403Error1"` [403] `ApiV1AutomationsTest403Error1` · `"apiV1AutomationsTest404Error1"` [404] `ApiV1AutomationsTest404Error1` · `"apiV1AutomationsTest429Error1"` [429] `ApiV1AutomationsTest429Error1` · `"apiV1AutomationsTest500Error1"` [500] `ApiV1AutomationsTest500Error1` · `"apiV1AutomationsTest502Error1"` [502] `ApiV1AutomationsTest502Error1` · `"apiV1AutomationsTest503Error1"` [503] `ApiV1AutomationsTest503Error1` · `"apiV1AutomationsTest504Error1"` [504] `ApiV1AutomationsTest504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationTestFlowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1AutomationsTestRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationsTestRequest` | `apiV1AutomationsTestRequestSchema` | `src/models/api-v1-automations-test-request.ts` |
| `ApiV1AutomationsTestResponse` | `apiV1AutomationsTestResponseSchema` | `src/models/api-v1-automations-test-response.ts` |
| `ApiV1AutomationsTest400Error1` | `apiV1AutomationsTest400Error1Schema` | `src/models/api-v1-automations-test400-error1.ts` |
| `ApiV1AutomationsTest401Error1` | `apiV1AutomationsTest401Error1Schema` | `src/models/api-v1-automations-test401-error1.ts` |
| `ApiV1AutomationsTest403Error1` | `apiV1AutomationsTest403Error1Schema` | `src/models/api-v1-automations-test403-error1.ts` |
| `ApiV1AutomationsTest404Error1` | `apiV1AutomationsTest404Error1Schema` | `src/models/api-v1-automations-test404-error1.ts` |
| `ApiV1AutomationsTest429Error1` | `apiV1AutomationsTest429Error1Schema` | `src/models/api-v1-automations-test429-error1.ts` |
| `ApiV1AutomationsTest500Error1` | `apiV1AutomationsTest500Error1Schema` | `src/models/api-v1-automations-test500-error1.ts` |
| `ApiV1AutomationsTest502Error1` | `apiV1AutomationsTest502Error1Schema` | `src/models/api-v1-automations-test502-error1.ts` |
| `ApiV1AutomationsTest503Error1` | `apiV1AutomationsTest503Error1Schema` | `src/models/api-v1-automations-test503-error1.ts` |
| `ApiV1AutomationsTest504Error1` | `apiV1AutomationsTest504Error1Schema` | `src/models/api-v1-automations-test504-error1.ts` |

### automationUpdateFlow

- **Signature**: `automationUpdateFlow(request: Automation.AutomationUpdateFlowRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationsResponse1, Automation.AutomationUpdateFlowError>`
- **Wire**: `PATCH /api/v1/automations/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationUpdateFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Automations400Error1"` [400] `ApiV1Automations400Error1` · `"apiV1Automations401Error1"` [401] `ApiV1Automations401Error1` · `"apiV1Automations403Error1"` [403] `ApiV1Automations403Error1` · `"apiV1Automations404Error1"` [404] `ApiV1Automations404Error1` · `"apiV1Automations429Error1"` [429] `ApiV1Automations429Error1` · `"apiV1Automations500Error1"` [500] `ApiV1Automations500Error1` · `"apiV1Automations502Error1"` [502] `ApiV1Automations502Error1` · `"apiV1Automations503Error1"` [503] `ApiV1Automations503Error1` · `"apiV1Automations504Error1"` [504] `ApiV1Automations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationUpdateFlowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1AutomationsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AutomationsRequest1` | `apiV1AutomationsRequest1Schema` | `src/models/api-v1-automations-request1.ts` |
| `ApiV1AutomationsResponse1` | `apiV1AutomationsResponse1Schema` | `src/models/api-v1-automations-response1.ts` |
| `ApiV1Automations400Error1` | `apiV1Automations400Error1Schema` | `src/models/api-v1-automations400-error1.ts` |
| `ApiV1Automations401Error1` | `apiV1Automations401Error1Schema` | `src/models/api-v1-automations401-error1.ts` |
| `ApiV1Automations403Error1` | `apiV1Automations403Error1Schema` | `src/models/api-v1-automations403-error1.ts` |
| `ApiV1Automations404Error1` | `apiV1Automations404Error1Schema` | `src/models/api-v1-automations404-error1.ts` |
| `ApiV1Automations429Error1` | `apiV1Automations429Error1Schema` | `src/models/api-v1-automations429-error1.ts` |
| `ApiV1Automations500Error1` | `apiV1Automations500Error1Schema` | `src/models/api-v1-automations500-error1.ts` |
| `ApiV1Automations502Error1` | `apiV1Automations502Error1Schema` | `src/models/api-v1-automations502-error1.ts` |
| `ApiV1Automations503Error1` | `apiV1Automations503Error1Schema` | `src/models/api-v1-automations503-error1.ts` |
| `ApiV1Automations504Error1` | `apiV1Automations504Error1Schema` | `src/models/api-v1-automations504-error1.ts` |

### automationUpsertProviderSetting

- **Signature**: `automationUpsertProviderSetting(request: Automation.AutomationUpsertProviderSettingRequest, options?: RequestOptions): ApiPromise<ApiV1AutomationProviderSettingsResponse1, Automation.AutomationUpsertProviderSettingError>`
- **Wire**: `PUT /api/v1/automation-provider-settings/{socialAccountId}/{type}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AutomationProviderSettingsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Automation.AutomationUpsertProviderSettingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AutomationProviderSettings400Error1"` [400] `ApiV1AutomationProviderSettings400Error1` · `"apiV1AutomationProviderSettings401Error1"` [401] `ApiV1AutomationProviderSettings401Error1` · `"apiV1AutomationProviderSettings403Error1"` [403] `ApiV1AutomationProviderSettings403Error1` · `"apiV1AutomationProviderSettings404Error1"` [404] `ApiV1AutomationProviderSettings404Error1` · `"apiV1AutomationProviderSettings429Error1"` [429] `ApiV1AutomationProviderSettings429Error1` · `"apiV1AutomationProviderSettings500Error1"` [500] `ApiV1AutomationProviderSettings500Error1` · `"apiV1AutomationProviderSettings502Error1"` [502] `ApiV1AutomationProviderSettings502Error1` · `"apiV1AutomationProviderSettings503Error1"` [503] `ApiV1AutomationProviderSettings503Error1` · `"apiV1AutomationProviderSettings504Error1"` [504] `ApiV1AutomationProviderSettings504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Automation.AutomationUpsertProviderSettingRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `socialAccountId` | `path` | `string` | yes |
| `type` | `path` | `Type112` | yes |
| `body` | `body` | `ApiV1AutomationProviderSettingsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type112` | `type112Schema` | `src/models/type112.ts` |
| `ApiV1AutomationProviderSettingsRequest` | `apiV1AutomationProviderSettingsRequestSchema` | `src/models/api-v1-automation-provider-settings-request.ts` |
| `ApiV1AutomationProviderSettingsResponse1` | `apiV1AutomationProviderSettingsResponse1Schema` | `src/models/api-v1-automation-provider-settings-response1.ts` |
| `ApiV1AutomationProviderSettings400Error1` | `apiV1AutomationProviderSettings400Error1Schema` | `src/models/api-v1-automation-provider-settings400-error1.ts` |
| `ApiV1AutomationProviderSettings401Error1` | `apiV1AutomationProviderSettings401Error1Schema` | `src/models/api-v1-automation-provider-settings401-error1.ts` |
| `ApiV1AutomationProviderSettings403Error1` | `apiV1AutomationProviderSettings403Error1Schema` | `src/models/api-v1-automation-provider-settings403-error1.ts` |
| `ApiV1AutomationProviderSettings404Error1` | `apiV1AutomationProviderSettings404Error1Schema` | `src/models/api-v1-automation-provider-settings404-error1.ts` |
| `ApiV1AutomationProviderSettings429Error1` | `apiV1AutomationProviderSettings429Error1Schema` | `src/models/api-v1-automation-provider-settings429-error1.ts` |
| `ApiV1AutomationProviderSettings500Error1` | `apiV1AutomationProviderSettings500Error1Schema` | `src/models/api-v1-automation-provider-settings500-error1.ts` |
| `ApiV1AutomationProviderSettings502Error1` | `apiV1AutomationProviderSettings502Error1Schema` | `src/models/api-v1-automation-provider-settings502-error1.ts` |
| `ApiV1AutomationProviderSettings503Error1` | `apiV1AutomationProviderSettings503Error1Schema` | `src/models/api-v1-automation-provider-settings503-error1.ts` |
| `ApiV1AutomationProviderSettings504Error1` | `apiV1AutomationProviderSettings504Error1Schema` | `src/models/api-v1-automation-provider-settings504-error1.ts` |

