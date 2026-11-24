<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipelines — operations

Accessor: `client.pipelines` · Source: `src/resources/pipelines.ts` · 10 operations · Request types: namespace `Pipelines`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `relm-crm`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addStage

- **Signature**: `addStage(request: Pipelines.AddStageRequest, options?: RequestOptions): ApiPromise<Pipeline, ApiError>`
- **Wire**: `POST /pipelines/{key}/stages`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Pipeline`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.AddStageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `PipelinesStagesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelinesStagesRequest` | `pipelinesStagesRequestSchema` | `src/models/pipelines-stages-request.ts` |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |

### createPipeline

- **Signature**: `createPipeline(request: Pipelines.CreatePipelineRequest, options?: RequestOptions): ApiPromise<Pipeline, ApiError>`
- **Wire**: `POST /pipelines`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Pipeline`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.CreatePipelineRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PipelineInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelineInput` | `pipelineInputSchema` | `src/models/pipeline-input.ts` |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |

### deletePipeline

- **Signature**: `deletePipeline(request: Pipelines.DeletePipelineRequest, options?: RequestOptions): ApiPromise<Deleted, ApiError>`
- **Wire**: `DELETE /pipelines/{key}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Deleted`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.DeletePipelineRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Deleted` | `deletedSchema` | `src/models/deleted.ts` |

### deleteStage

- **Signature**: `deleteStage(request: Pipelines.DeleteStageRequest, options?: RequestOptions): ApiPromise<Pipeline, ApiError>`
- **Wire**: `DELETE /pipelines/{key}/stages/{stage}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Pipeline`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.DeleteStageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `stage` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |

### getPipeline

- **Signature**: `getPipeline(request: Pipelines.GetPipelineRequest, options?: RequestOptions): ApiPromise<Pipeline, ApiError>`
- **Wire**: `GET /pipelines/{key}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Pipeline`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.GetPipelineRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |

### listPipelines

- **Signature**: `listPipelines(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /pipelines`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### reorderStages

- **Signature**: `reorderStages(request: Pipelines.ReorderStagesRequest, options?: RequestOptions): ApiPromise<Pipeline, ApiError>`
- **Wire**: `POST /pipelines/{key}/stages/reorder`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Pipeline`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.ReorderStagesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `PipelinesStagesReorderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelinesStagesReorderRequest` | `pipelinesStagesReorderRequestSchema` | `src/models/pipelines-stages-reorder-request.ts` |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |

### setDefaultPipeline

- **Signature**: `setDefaultPipeline(request: Pipelines.SetDefaultPipelineRequest, options?: RequestOptions): ApiPromise<Pipeline, ApiError>`
- **Wire**: `POST /pipelines/{key}/default`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Pipeline`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.SetDefaultPipelineRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |

### updatePipeline

- **Signature**: `updatePipeline(request: Pipelines.UpdatePipelineRequest, options?: RequestOptions): ApiPromise<Pipeline, ApiError>`
- **Wire**: `PATCH /pipelines/{key}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Pipeline`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.UpdatePipelineRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `PipelinesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelinesRequest` | `pipelinesRequestSchema` | `src/models/pipelines-request.ts` |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |

### updateStage

- **Signature**: `updateStage(request: Pipelines.UpdateStageRequest, options?: RequestOptions): ApiPromise<Pipeline, ApiError>`
- **Wire**: `PATCH /pipelines/{key}/stages/{stage}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Pipeline`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.UpdateStageRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `stage` | `path` | `string` | yes |
| `body` | `body` | `PipelinesStagesRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PipelinesStagesRequest1` | `pipelinesStagesRequest1Schema` | `src/models/pipelines-stages-request1.ts` |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |

