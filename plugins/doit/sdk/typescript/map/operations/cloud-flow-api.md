<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudFlowApi — operations

Accessor: `client.cloudFlowApi` · Source: `src/resources/cloud-flow-api.ts` · 13 operations · Request and error types: namespace `CloudFlowApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### buildCloudFlow

- **Signature**: `buildCloudFlow(request: CloudFlowApi.BuildCloudFlowRequest, options?: RequestOptions): ApiPromise<EventStream<string>, CloudFlowApi.BuildCloudFlowError>`
- **Wire**: `POST /cloudflow/v1/flows/actions/build`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<string>` — `text/event-stream`, resolved at the response headers and read one `string` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` is its plain text, whatever the event is named. The stream ends when the server closes it
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.BuildCloudFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [406] `Error` · `"error5"` [500] `Error` · `"error6"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.BuildCloudFlowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CloudFlowBuildRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudFlowBuildRequest` | `cloudFlowBuildRequestSchema` | `src/models/cloud-flow-build-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### exportCloudflowFlow

- **Signature**: `exportCloudflowFlow(request: CloudFlowApi.ExportCloudflowFlowRequest, options?: RequestOptions): ApiPromise<CloudflowFlowBundle, CloudFlowApi.ExportCloudflowFlowError>`
- **Wire**: `GET /cloudflow/v1/flows/{flowId}/export`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudflowFlowBundle`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.ExportCloudflowFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"error"` [422] `Error` · `"problemDetails5"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.ExportCloudflowFlowRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes | — |
| `includeVariableValues` | `query` | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowFlowBundle` | `cloudflowFlowBundleSchema` | `src/models/cloudflow-flow-bundle.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCloudflowFlowRun

- **Signature**: `getCloudflowFlowRun(request: CloudFlowApi.GetCloudflowFlowRunRequest, options?: RequestOptions): ApiPromise<CloudflowRun, CloudFlowApi.GetCloudflowFlowRunError>`
- **Wire**: `GET /cloudflow/v1/flows/{flowId}/runs/{runId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudflowRun`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.GetCloudflowFlowRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"error"` [429] `Error` · `"problemDetails5"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.GetCloudflowFlowRunRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |
| `runId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowRun` | `cloudflowRunSchema` | `src/models/cloudflow-run.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCloudflowTemplate

- **Signature**: `getCloudflowTemplate(request: CloudFlowApi.GetCloudflowTemplateRequest, options?: RequestOptions): ApiPromise<CloudflowTemplate, CloudFlowApi.GetCloudflowTemplateError>`
- **Wire**: `GET /cloudflow/v1/templates/{templateId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudflowTemplate`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.GetCloudflowTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.GetCloudflowTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `templateId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowTemplate` | `cloudflowTemplateSchema` | `src/models/cloudflow-template.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### importCloudflowFlow

- **Signature**: `importCloudflowFlow(request: CloudFlowApi.ImportCloudflowFlowRequest, options?: RequestOptions): ApiPromise<CloudflowImportPlan, CloudFlowApi.ImportCloudflowFlowError>`
- **Wire**: `POST /cloudflow/v1/flows/actions/import`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CloudflowImportPlan`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.ImportCloudflowFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"error"` [422] `Error` · `"problemDetails4"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.ImportCloudflowFlowRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `dryRun` | `query` | — | `boolean` | no | `false` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes | — |
| `body` | `body` | — | `CloudflowImportFlowsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowImportFlowsRequest` | `cloudflowImportFlowsRequestSchema` | `src/models/cloudflow-import-flows-request.ts` |
| `CloudflowImportPlan` | `cloudflowImportPlanSchema` | `src/models/cloudflow-import-plan.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCloudflowFlowRuns

- **Signature**: `listCloudflowFlowRuns(request: CloudFlowApi.ListCloudflowFlowRunsRequest, options?: RequestOptions): ApiPromise<CloudflowRunList, CloudFlowApi.ListCloudflowFlowRunsError>`
- **Wire**: `GET /cloudflow/v1/flows/{flowId}/runs`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudflowRunList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.ListCloudflowFlowRunsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"error"` [429] `Error` · `"problemDetails5"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.ListCloudflowFlowRunsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes | — |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `mode` | `query` | `ModeDoiTCloudFlowApi` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModeDoiTCloudFlowApi` | `modeDoiTCloudFlowApiSchema` | `src/models/mode-doi-tcloud-flow-api.ts` |
| `CloudflowRunList` | `cloudflowRunListSchema` | `src/models/cloudflow-run-list.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCloudflowTemplates

- **Signature**: `listCloudflowTemplates(request?: CloudFlowApi.ListCloudflowTemplatesRequest, options?: RequestOptions): ApiPromise<CloudflowTemplateListResponse, CloudFlowApi.ListCloudflowTemplatesError>`
- **Wire**: `GET /cloudflow/v1/templates`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudflowTemplateListResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.ListCloudflowTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.ListCloudflowTemplatesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowTemplateListResponse` | `cloudflowTemplateListResponseSchema` | `src/models/cloudflow-template-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCloudflows

- **Signature**: `listCloudflows(request?: CloudFlowApi.ListCloudflowsRequest, options?: RequestOptions): ApiPromise<CloudflowListResponse, CloudFlowApi.ListCloudflowsError>`
- **Wire**: `GET /cloudflow/v1/flows`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudflowListResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.ListCloudflowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.ListCloudflowsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowListResponse` | `cloudflowListResponseSchema` | `src/models/cloudflow-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### refineCloudFlow

- **Signature**: `refineCloudFlow(request: CloudFlowApi.RefineCloudFlowRequest, options?: RequestOptions): ApiPromise<EventStream<string>, CloudFlowApi.RefineCloudFlowError>`
- **Wire**: `POST /cloudflow/v1/flows/{flowId}/actions/refine`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<string>` — `text/event-stream`, resolved at the response headers and read one `string` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` is its plain text, whatever the event is named. The stream ends when the server closes it
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.RefineCloudFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [406] `Error` · `"error5"` [500] `Error` · `"error6"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.RefineCloudFlowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |
| `body` | `body` | `CloudFlowRefineRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudFlowRefineRequest` | `cloudFlowRefineRequestSchema` | `src/models/cloud-flow-refine-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### stopCloudflowFlow

- **Signature**: `stopCloudflowFlow(request: CloudFlowApi.StopCloudflowFlowRequest, options?: RequestOptions): ApiPromise<CloudflowRunSummary, CloudFlowApi.StopCloudflowFlowError>`
- **Wire**: `POST /cloudflow/v1/flows/{flowId}/actions/stop`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloudflowRunSummary`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.StopCloudflowFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"error"` [429] `Error` · `"problemDetails6"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.StopCloudflowFlowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowRunSummary` | `cloudflowRunSummarySchema` | `src/models/cloudflow-run-summary.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### testRunCloudflowFlow

- **Signature**: `testRunCloudflowFlow(request: CloudFlowApi.TestRunCloudflowFlowRequest, options?: RequestOptions): ApiPromise<CloudflowRunSummary, CloudFlowApi.TestRunCloudflowFlowError>`
- **Wire**: `POST /cloudflow/v1/flows/{flowId}/actions/test-run`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `CloudflowRunSummary`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.TestRunCloudflowFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [409] `ProblemDetails` · `"cloudflowTestRunValidation"` [422] `CloudflowTestRunValidation` · `"error"` [429] `Error` · `"problemDetails6"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.TestRunCloudflowFlowRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowId` | `path` | — | `string` | yes |
| `dryRun` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowRunSummary` | `cloudflowRunSummarySchema` | `src/models/cloudflow-run-summary.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `CloudflowTestRunValidation` | `cloudflowTestRunValidationSchema` | `src/models/cloudflow-test-run-validation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### triggerCloudflowFlow

- **Signature**: `triggerCloudflowFlow(request: CloudFlowApi.TriggerCloudflowFlowRequest, options?: RequestOptions): ApiPromise<CloudflowRunSummary, CloudFlowApi.TriggerCloudflowFlowError>`
- **Wire**: `POST /cloudflow/v1/flows/{flowId}/actions/trigger`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloudflowRunSummary`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.TriggerCloudflowFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"cloudflowV1FlowsActionsTrigger409Error1"` [409] `CloudflowV1FlowsActionsTrigger409Error1` · `"problemDetails5"` [422] `ProblemDetails` · `"error"` [429] `Error` · `"problemDetails6"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.TriggerCloudflowFlowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowRunSummary` | `cloudflowRunSummarySchema` | `src/models/cloudflow-run-summary.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |
| `CloudflowV1FlowsActionsTrigger409Error1` | `cloudflowV1FlowsActionsTrigger409Error1Schema` | `src/models/cloudflow-v1-flows-actions-trigger409-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### triggerCloudflowWebhook

- **Signature**: `triggerCloudflowWebhook(request: CloudFlowApi.TriggerCloudflowWebhookRequest, options?: RequestOptions): ApiPromise<CloudflowV1TriggerResponse, CloudFlowApi.TriggerCloudflowWebhookError>`
- **Wire**: `POST /cloudflow/v1/trigger/{flowId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloudflowV1TriggerResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudFlowApi.TriggerCloudflowWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudFlowApi.TriggerCloudflowWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowV1TriggerResponse` | `cloudflowV1TriggerResponseSchema` | `src/models/cloudflow-v1-trigger-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

