<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorkflowApi — operations

Accessor: `client.workflowApi` · Source: `src/resources/workflow-api.ts` · 5 operations · Request and error types: namespace `WorkflowApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### approveWorkflowJob

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `approveWorkflowJob(request: WorkflowApi.ApproveWorkflowJobRequest, options?: RequestOptions): ApiPromise<MessageResponse, WorkflowApi.ApproveWorkflowJobError>`
- **Wire**: `POST /workflow/{id}/approve/{approval_request_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `WorkflowApi.ApproveWorkflowJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkflowApi.ApproveWorkflowJobRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `approvalRequestId` | `path` | `approval_request_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### cancelWorkflow

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelWorkflow(request: WorkflowApi.CancelWorkflowRequest, options?: RequestOptions): ApiPromise<MessageResponse, WorkflowApi.CancelWorkflowError>`
- **Wire**: `POST /workflow/{id}/cancel`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `WorkflowApi.CancelWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkflowApi.CancelWorkflowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWorkflow

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getWorkflow(request: WorkflowApi.GetWorkflowRequest, options?: RequestOptions): ApiPromise<Workflow, WorkflowApi.GetWorkflowError>`
- **Wire**: `GET /workflow/{id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Workflow`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `WorkflowApi.GetWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkflowApi.GetWorkflowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Workflow` | `workflowSchema` | `src/models/workflow.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listWorkflowJobs

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listWorkflowJobs(request: WorkflowApi.ListWorkflowJobsRequest, options?: RequestOptions): ApiPromise<WorkflowJobList, WorkflowApi.ListWorkflowJobsError>`
- **Wire**: `GET /workflow/{id}/job`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkflowJobList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `WorkflowApi.ListWorkflowJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkflowApi.ListWorkflowJobsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowJobList` | `workflowJobListSchema` | `src/models/workflow-job-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### rerunWorkflow

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `rerunWorkflow(request: WorkflowApi.RerunWorkflowRequest, options?: RequestOptions): ApiPromise<RerunWorkflowResponse, WorkflowApi.RerunWorkflowError>`
- **Wire**: `POST /workflow/{id}/rerun`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RerunWorkflowResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `WorkflowApi.RerunWorkflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkflowApi.RerunWorkflowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `WorkflowRerunRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowRerunRequest` | `workflowRerunRequestSchema` | `src/models/workflow-rerun-request.ts` |
| `RerunWorkflowResponse` | `rerunWorkflowResponseSchema` | `src/models/rerun-workflow-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

