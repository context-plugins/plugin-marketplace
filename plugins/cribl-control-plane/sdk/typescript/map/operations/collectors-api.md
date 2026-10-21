<!-- Generated file — do not edit; regenerated with the SDK. -->

# CollectorsApi — operations

Accessor: `client.collectorsApi` · Source: `src/resources/collectors-api.ts` · 5 operations · Request and error types: namespace `CollectorsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSavedJob

- **Signature**: `createSavedJob(request: CollectorsApi.CreateSavedJobRequest, options?: RequestOptions): ApiPromise<CountedSavedJobResponse, CollectorsApi.CreateSavedJobError>`
- **Wire**: `POST /lib/jobs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedSavedJobResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `CollectorsApi.CreateSavedJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CollectorsApi.CreateSavedJobRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SavedJob` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SavedJob` | `savedJobSchema` | `src/models/unions/saved-job.ts` |
| `CountedSavedJobResponse` | `countedSavedJobResponseSchema` | `src/models/counted-saved-job-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteSavedJobById

- **Signature**: `deleteSavedJobById(request: CollectorsApi.DeleteSavedJobByIdRequest, options?: RequestOptions): ApiPromise<CountedSavedJobResponse, CollectorsApi.DeleteSavedJobByIdError>`
- **Wire**: `DELETE /lib/jobs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedSavedJobResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `CollectorsApi.DeleteSavedJobByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CollectorsApi.DeleteSavedJobByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedSavedJobResponse` | `countedSavedJobResponseSchema` | `src/models/counted-saved-job-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSavedJob

- **Signature**: `getSavedJob(request: CollectorsApi.GetSavedJobRequest, options?: RequestOptions): ApiPromise<PaginatedSavedJobResponse, CollectorsApi.GetSavedJobError>`
- **Wire**: `GET /lib/jobs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedSavedJobResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `CollectorsApi.GetSavedJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CollectorsApi.GetSavedJobRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `collectorType` | `query` | `CollectorType` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CollectorType` | `collectorTypeSchema` | `src/models/collector-type.ts` |
| `PaginatedSavedJobResponse` | `paginatedSavedJobResponseSchema` | `src/models/paginated-saved-job-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSavedJobById

- **Signature**: `getSavedJobById(request: CollectorsApi.GetSavedJobByIdRequest, options?: RequestOptions): ApiPromise<CountedSavedJobResponse, CollectorsApi.GetSavedJobByIdError>`
- **Wire**: `GET /lib/jobs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedSavedJobResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `CollectorsApi.GetSavedJobByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CollectorsApi.GetSavedJobByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedSavedJobResponse` | `countedSavedJobResponseSchema` | `src/models/counted-saved-job-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateSavedJobById

- **Signature**: `updateSavedJobById(request: CollectorsApi.UpdateSavedJobByIdRequest, options?: RequestOptions): ApiPromise<CountedSavedJobResponse, CollectorsApi.UpdateSavedJobByIdError>`
- **Wire**: `PATCH /lib/jobs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedSavedJobResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `CollectorsApi.UpdateSavedJobByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CollectorsApi.UpdateSavedJobByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `SavedJob` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SavedJob` | `savedJobSchema` | `src/models/unions/saved-job.ts` |
| `CountedSavedJobResponse` | `countedSavedJobResponseSchema` | `src/models/counted-saved-job-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

