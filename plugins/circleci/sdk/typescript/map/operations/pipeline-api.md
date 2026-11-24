<!-- Generated file — do not edit; regenerated with the SDK. -->

# PipelineApi — operations

Accessor: `client.pipelineApi` · Source: `src/resources/pipeline-api.ts` · 8 operations · Request and error types: namespace `PipelineApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### continuePipeline

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `continuePipeline(request: PipelineApi.ContinuePipelineRequest, options?: RequestOptions): ApiPromise<MessageResponse, PipelineApi.ContinuePipelineError>`
- **Wire**: `POST /pipeline/continue`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `PipelineApi.ContinuePipelineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PipelineApi.ContinuePipelineRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PipelineContinueRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelineContinueRequest` | `pipelineContinueRequestSchema` | `src/models/pipeline-continue-request.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPipeline

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPipeline(request: PipelineApi.GetPipelineRequest, options?: RequestOptions): ApiPromise<PipelineCircleCiRestApiV2PipelineApi, PipelineApi.GetPipelineError>`
- **Wire**: `GET /pipeline/{pipeline-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PipelineCircleCiRestApiV2PipelineApi`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `PipelineApi.GetPipelineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PipelineApi.GetPipelineRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pipelineId` | `path` | `pipeline-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelineCircleCiRestApiV2PipelineApi` | `pipelineCircleCiRestApiV2PipelineApiSchema` | `src/models/pipeline-circle-ci-rest-api-v2-pipeline-api.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPipelineConfig

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPipelineConfig(request: PipelineApi.GetPipelineConfigRequest, options?: RequestOptions): ApiPromise<PipelineConfig, PipelineApi.GetPipelineConfigError>`
- **Wire**: `GET /pipeline/{pipeline-id}/config`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PipelineConfig`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `PipelineApi.GetPipelineConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PipelineApi.GetPipelineConfigRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pipelineId` | `path` | `pipeline-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelineConfig` | `pipelineConfigSchema` | `src/models/pipeline-config.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listMyProjectPipelines

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listMyProjectPipelines(request: PipelineApi.ListMyProjectPipelinesRequest, options?: RequestOptions): ApiPromise<PipelineList, PipelineApi.ListMyProjectPipelinesError>`
- **Wire**: `GET /project/{project-slug}/pipeline/mine`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PipelineList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `PipelineApi.ListMyProjectPipelinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PipelineApi.ListMyProjectPipelinesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `pageToken` | `query` | `page-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelineList` | `pipelineListSchema` | `src/models/pipeline-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listPipelineWorkflows

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPipelineWorkflows(request: PipelineApi.ListPipelineWorkflowsRequest, options?: RequestOptions): ApiPromise<WorkflowList, PipelineApi.ListPipelineWorkflowsError>`
- **Wire**: `GET /pipeline/{pipeline-id}/workflow`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkflowList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `PipelineApi.ListPipelineWorkflowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PipelineApi.ListPipelineWorkflowsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pipelineId` | `path` | `pipeline-id` | `string` | yes |
| `pageToken` | `query` | `page-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkflowList` | `workflowListSchema` | `src/models/workflow-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listPipelines

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPipelines(request?: PipelineApi.ListPipelinesRequest, options?: RequestOptions): ApiPromise<PipelineList, PipelineApi.ListPipelinesError>`
- **Wire**: `GET /pipeline`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PipelineList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `PipelineApi.ListPipelinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PipelineApi.ListPipelinesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orgSlug` | `query` | `org-slug` | `string` | no |
| `mine` | `query` | — | `boolean` | no |
| `pageToken` | `query` | `page-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelineList` | `pipelineListSchema` | `src/models/pipeline-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listProjectPipelines

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listProjectPipelines(request: PipelineApi.ListProjectPipelinesRequest, options?: RequestOptions): ApiPromise<PipelineList, PipelineApi.ListProjectPipelinesError>`
- **Wire**: `GET /project/{project-slug}/pipeline`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PipelineList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `PipelineApi.ListProjectPipelinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PipelineApi.ListProjectPipelinesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `branch` | `query` | — | `string` | no |
| `pageToken` | `query` | `page-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelineList` | `pipelineListSchema` | `src/models/pipeline-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### triggerPipeline

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `triggerPipeline(request: PipelineApi.TriggerPipelineRequestParams, options?: RequestOptions): ApiPromise<PipelineCreation, PipelineApi.TriggerPipelineError>`
- **Wire**: `POST /project/{project-slug}/pipeline`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PipelineCreation`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `PipelineApi.TriggerPipelineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PipelineApi.TriggerPipelineRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectSlug` | `path` | `project-slug` | `string` | yes |
| `body` | `body` | — | `TriggerPipelineRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerPipelineRequest` | `triggerPipelineRequestSchema` | `src/models/trigger-pipeline-request.ts` |
| `PipelineCreation` | `pipelineCreationSchema` | `src/models/pipeline-creation.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

