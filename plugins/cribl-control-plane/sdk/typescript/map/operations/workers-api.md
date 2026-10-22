<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorkersApi — operations

Accessor: `client.workersApi` · Source: `src/resources/workers-api.ts` · 4 operations · Request and error types: namespace `WorkersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProductsSummaryWorkersByProduct

- **Signature**: `getProductsSummaryWorkersByProduct(request: WorkersApi.GetProductsSummaryWorkersByProductRequest, options?: RequestOptions): ApiPromise<CountedNumber, WorkersApi.GetProductsSummaryWorkersByProductError>`
- **Wire**: `GET /products/{product}/summary/workers`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedNumber`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `WorkersApi.GetProductsSummaryWorkersByProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error403"` [403] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkersApi.GetProductsSummaryWorkersByProductRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `filterExp` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `CountedNumber` | `countedNumberSchema` | `src/models/counted-number.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProductsWorkersByProduct

- **Signature**: `getProductsWorkersByProduct(request: WorkersApi.GetProductsWorkersByProductRequest, options?: RequestOptions): ApiPromise<PaginatedMasterWorkerEntry, WorkersApi.GetProductsWorkersByProductError>`
- **Wire**: `GET /products/{product}/workers`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedMasterWorkerEntry`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `WorkersApi.GetProductsWorkersByProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error403"` [403] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkersApi.GetProductsWorkersByProductRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `filterExp` | `query` | `string` | no |
| `sortExp` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `PaginatedMasterWorkerEntry` | `paginatedMasterWorkerEntrySchema` | `src/models/paginated-master-worker-entry.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProductsWorkersByProductAndId

- **Signature**: `getProductsWorkersByProductAndId(request: WorkersApi.GetProductsWorkersByProductAndIdRequest, options?: RequestOptions): ApiPromise<CountedMasterWorkerEntry, WorkersApi.GetProductsWorkersByProductAndIdError>`
- **Wire**: `GET /products/{product}/workers/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedMasterWorkerEntry`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `WorkersApi.GetProductsWorkersByProductAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error403"` [403] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkersApi.GetProductsWorkersByProductAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `CountedMasterWorkerEntry` | `countedMasterWorkerEntrySchema` | `src/models/counted-master-worker-entry.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateProductsWorkersRestartByProduct

- **Signature**: `updateProductsWorkersRestartByProduct(request: WorkersApi.UpdateProductsWorkersRestartByProductRequest, options?: RequestOptions): ApiPromise<CountedRestartResponse, WorkersApi.UpdateProductsWorkersRestartByProductError>`
- **Wire**: `PATCH /products/{product}/workers/restart`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedRestartResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `WorkersApi.UpdateProductsWorkersRestartByProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error403"` [403] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkersApi.UpdateProductsWorkersRestartByProductRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsCore` | yes |
| `body` | `body` | `RestartRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsCore` | `productsCoreSchema` | `src/models/products-core.ts` |
| `RestartRequest` | `restartRequestSchema` | `src/models/restart-request.ts` |
| `CountedRestartResponse` | `countedRestartResponseSchema` | `src/models/counted-restart-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

