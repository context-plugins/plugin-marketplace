<!-- Generated file — do not edit; regenerated with the SDK. -->

# Distributed — operations

Accessor: `client.distributed` · Source: `src/resources/distributed.ts` · 1 operation · Request and error types: namespace `Distributed`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProductsSummaryByProduct

- **Signature**: `getProductsSummaryByProduct(request: Distributed.GetProductsSummaryByProductRequest, options?: RequestOptions): ApiPromise<PaginatedDistributedSummary, Distributed.GetProductsSummaryByProductError>`
- **Wire**: `GET /products/{product}/summary`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedDistributedSummary`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Distributed.GetProductsSummaryByProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error403"` [403] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Distributed.GetProductsSummaryByProductRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `product` | `path` | `ProductsBase` | yes |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsBase` | `productsBaseSchema` | `src/models/products-base.ts` |
| `PaginatedDistributedSummary` | `paginatedDistributedSummarySchema` | `src/models/paginated-distributed-summary.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

