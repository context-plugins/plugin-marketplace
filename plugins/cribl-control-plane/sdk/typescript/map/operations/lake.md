<!-- Generated file — do not edit; regenerated with the SDK. -->

# Lake — operations

Accessor: `client.lake` · Source: `src/resources/lake.ts` · 5 operations · Request and error types: namespace `Lake`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCriblLakeDatasetByLakeId

- **Signature**: `createCriblLakeDatasetByLakeId(request: Lake.CreateCriblLakeDatasetByLakeIdRequest, options?: RequestOptions): ApiPromise<CountedCriblLakeDataset, Lake.CreateCriblLakeDatasetByLakeIdError>`
- **Wire**: `POST /products/lake/lakes/{lakeId}/datasets`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedCriblLakeDataset`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Lake.CreateCriblLakeDatasetByLakeIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lake.CreateCriblLakeDatasetByLakeIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lakeId` | `path` | `string` | yes |
| `body` | `body` | `CriblLakeDataset` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CriblLakeDataset` | `criblLakeDatasetSchema` | `src/models/cribl-lake-dataset.ts` |
| `CountedCriblLakeDataset` | `countedCriblLakeDatasetSchema` | `src/models/counted-cribl-lake-dataset.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteCriblLakeDatasetByLakeIdAndId

- **Signature**: `deleteCriblLakeDatasetByLakeIdAndId(request: Lake.DeleteCriblLakeDatasetByLakeIdAndIdRequest, options?: RequestOptions): ApiPromise<CountedCriblLakeDataset, Lake.DeleteCriblLakeDatasetByLakeIdAndIdError>`
- **Wire**: `DELETE /products/lake/lakes/{lakeId}/datasets/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedCriblLakeDataset`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Lake.DeleteCriblLakeDatasetByLakeIdAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lake.DeleteCriblLakeDatasetByLakeIdAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lakeId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedCriblLakeDataset` | `countedCriblLakeDatasetSchema` | `src/models/counted-cribl-lake-dataset.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCriblLakeDatasetByLakeId

- **Signature**: `getCriblLakeDatasetByLakeId(request: Lake.GetCriblLakeDatasetByLakeIdRequest, options?: RequestOptions): ApiPromise<PaginatedCriblLakeDataset, Lake.GetCriblLakeDatasetByLakeIdError>`
- **Wire**: `GET /products/lake/lakes/{lakeId}/datasets`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedCriblLakeDataset`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Lake.GetCriblLakeDatasetByLakeIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lake.GetCriblLakeDatasetByLakeIdRequest` (17):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `lakeId` | `path` | — | `string` | yes |
| `storageLocationId` | `query` | — | `string` | no |
| `format` | `query` | — | `DatasetFormatFilter` | no |
| `excludeDdss` | `query` | `excludeDDSS` | `boolean` | no |
| `excludeNetskope` | `query` | — | `boolean` | no |
| `excludeDeleted` | `query` | — | `boolean` | no |
| `excludeInternal` | `query` | — | `boolean` | no |
| `excludeByos` | `query` | `excludeBYOS` | `boolean` | no |
| `includeMetrics` | `query` | — | `boolean` | no |
| `offset` | `query` | — | `number` | no |
| `limit` | `query` | — | `number` | no |
| `orderBy` | `query` | — | `string` | no |
| `orderDir` | `query` | — | `string` | no |
| `name` | `query` | — | `string` | no |
| `nameContains` | `query` | — | `string` | no |
| `providerPathContains` | `query` | — | `string` | no |
| `descriptionContains` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatasetFormatFilter` | `datasetFormatFilterSchema` | `src/models/dataset-format-filter.ts` |
| `PaginatedCriblLakeDataset` | `paginatedCriblLakeDatasetSchema` | `src/models/paginated-cribl-lake-dataset.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCriblLakeDatasetByLakeIdAndId

- **Signature**: `getCriblLakeDatasetByLakeIdAndId(request: Lake.GetCriblLakeDatasetByLakeIdAndIdRequest, options?: RequestOptions): ApiPromise<CountedCriblLakeDataset, Lake.GetCriblLakeDatasetByLakeIdAndIdError>`
- **Wire**: `GET /products/lake/lakes/{lakeId}/datasets/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedCriblLakeDataset`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Lake.GetCriblLakeDatasetByLakeIdAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lake.GetCriblLakeDatasetByLakeIdAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lakeId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `includeMetrics` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedCriblLakeDataset` | `countedCriblLakeDatasetSchema` | `src/models/counted-cribl-lake-dataset.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateCriblLakeDatasetByLakeIdAndId

- **Signature**: `updateCriblLakeDatasetByLakeIdAndId(request: Lake.UpdateCriblLakeDatasetByLakeIdAndIdRequest, options?: RequestOptions): ApiPromise<CountedCriblLakeDataset, Lake.UpdateCriblLakeDatasetByLakeIdAndIdError>`
- **Wire**: `PATCH /products/lake/lakes/{lakeId}/datasets/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedCriblLakeDataset`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Lake.UpdateCriblLakeDatasetByLakeIdAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error409"` [409] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lake.UpdateCriblLakeDatasetByLakeIdAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lakeId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `CriblLakeDatasetUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CriblLakeDatasetUpdate` | `criblLakeDatasetUpdateSchema` | `src/models/cribl-lake-dataset-update.ts` |
| `CountedCriblLakeDataset` | `countedCriblLakeDatasetSchema` | `src/models/counted-cribl-lake-dataset.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

