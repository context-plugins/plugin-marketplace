<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipelines — operations

Accessor: `client.pipelines` · Source: `src/resources/pipelines.ts` · 10 operations · Request and error types: namespace `Pipelines`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPipelines

- **Signature**: `createPipelines(request: Pipelines.CreatePipelinesRequest, options?: RequestOptions): ApiPromise<CountedPipeline, Pipelines.CreatePipelinesError>`
- **Wire**: `POST /pipelines`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedPipeline`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Pipelines.CreatePipelinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pipelines.CreatePipelinesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Pipeline` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |
| `CountedPipeline` | `countedPipelineSchema` | `src/models/counted-pipeline.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createPipelinesByPack

- **Signature**: `createPipelinesByPack(request: Pipelines.CreatePipelinesByPackRequest, options?: RequestOptions): ApiPromise<CountedPipeline, Pipelines.CreatePipelinesByPackError>`
- **Wire**: `POST /p/{pack}/pipelines`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedPipeline`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Pipelines.CreatePipelinesByPackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pipelines.CreatePipelinesByPackRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `Pipeline` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |
| `CountedPipeline` | `countedPipelineSchema` | `src/models/counted-pipeline.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deletePipelinesById

- **Signature**: `deletePipelinesById(request: Pipelines.DeletePipelinesByIdRequest, options?: RequestOptions): ApiPromise<CountedPipeline, Pipelines.DeletePipelinesByIdError>`
- **Wire**: `DELETE /pipelines/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedPipeline`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Pipelines.DeletePipelinesByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pipelines.DeletePipelinesByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedPipeline` | `countedPipelineSchema` | `src/models/counted-pipeline.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deletePipelinesByPackAndId

- **Signature**: `deletePipelinesByPackAndId(request: Pipelines.DeletePipelinesByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedPipeline, Pipelines.DeletePipelinesByPackAndIdError>`
- **Wire**: `DELETE /p/{pack}/pipelines/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedPipeline`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Pipelines.DeletePipelinesByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pipelines.DeletePipelinesByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedPipeline` | `countedPipelineSchema` | `src/models/counted-pipeline.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPipelines

- **Signature**: `getPipelines(request: Pipelines.GetPipelinesRequest, options?: RequestOptions): ApiPromise<PaginatedPipeline, Pipelines.GetPipelinesError>`
- **Wire**: `GET /pipelines`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedPipeline`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Pipelines.GetPipelinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pipelines.GetPipelinesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedPipeline` | `paginatedPipelineSchema` | `src/models/paginated-pipeline.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPipelinesById

- **Signature**: `getPipelinesById(request: Pipelines.GetPipelinesByIdRequest, options?: RequestOptions): ApiPromise<CountedPipeline, Pipelines.GetPipelinesByIdError>`
- **Wire**: `GET /pipelines/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedPipeline`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Pipelines.GetPipelinesByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pipelines.GetPipelinesByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedPipeline` | `countedPipelineSchema` | `src/models/counted-pipeline.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPipelinesByPack

- **Signature**: `getPipelinesByPack(request: Pipelines.GetPipelinesByPackRequest, options?: RequestOptions): ApiPromise<PaginatedPipeline, Pipelines.GetPipelinesByPackError>`
- **Wire**: `GET /p/{pack}/pipelines`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedPipeline`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Pipelines.GetPipelinesByPackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pipelines.GetPipelinesByPackRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pack` | `path` | `string` | yes |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedPipeline` | `paginatedPipelineSchema` | `src/models/paginated-pipeline.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPipelinesByPackAndId

- **Signature**: `getPipelinesByPackAndId(request: Pipelines.GetPipelinesByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedPipeline, Pipelines.GetPipelinesByPackAndIdError>`
- **Wire**: `GET /p/{pack}/pipelines/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedPipeline`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Pipelines.GetPipelinesByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pipelines.GetPipelinesByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedPipeline` | `countedPipelineSchema` | `src/models/counted-pipeline.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updatePipelinesById

- **Signature**: `updatePipelinesById(request: Pipelines.UpdatePipelinesByIdRequest, options?: RequestOptions): ApiPromise<CountedPipeline, Pipelines.UpdatePipelinesByIdError>`
- **Wire**: `PATCH /pipelines/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedPipeline`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Pipelines.UpdatePipelinesByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pipelines.UpdatePipelinesByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `Pipeline` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |
| `CountedPipeline` | `countedPipelineSchema` | `src/models/counted-pipeline.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updatePipelinesByPackAndId

- **Signature**: `updatePipelinesByPackAndId(request: Pipelines.UpdatePipelinesByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedPipeline, Pipelines.UpdatePipelinesByPackAndIdError>`
- **Wire**: `PATCH /p/{pack}/pipelines/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedPipeline`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Pipelines.UpdatePipelinesByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pipelines.UpdatePipelinesByPackAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `Pipeline` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |
| `CountedPipeline` | `countedPipelineSchema` | `src/models/counted-pipeline.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

