<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipelines — operations

Accessor: `client.pipelines` · Source: `src/resources/pipelines.ts` · 5 operations · Request types: namespace `Pipelines`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPipeline

- **Signature**: `createPipeline(request: Pipelines.CreatePipelineRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /organizations/{org}/pipelines`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.CreatePipelineRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `body` | `body` | `Pipeline` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |

### deletePipeline

- **Signature**: `deletePipeline(request: Pipelines.DeletePipelineRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /organizations/{org}/pipelines/{pipeline}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.DeletePipelineRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |

### getPipeline

- **Signature**: `getPipeline(request: Pipelines.GetPipelineRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /organizations/{org}/pipelines/{pipeline}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.GetPipelineRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |

### listPipelines

- **Signature**: `listPipelines(request: Pipelines.ListPipelinesRequest, options?: RequestOptions): ApiPromise<Pipeline[], ApiError>`
- **Wire**: `GET /organizations/{org}/pipelines`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Pipeline[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.ListPipelinesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pipeline` | `pipelineSchema` | `src/models/pipeline.ts` |

### updatePipeline

- **Signature**: `updatePipeline(request: Pipelines.UpdatePipelineRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PATCH /organizations/{org}/pipelines/{pipeline}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pipelines.UpdatePipelineRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |

