<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.products` · Source: `src/resources/products.ts` · 1 operation · Request and error types: namespace `Products`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listProducts

- **Signature**: `listProducts(request?: Products.ListProductsRequest, options?: RequestOptions): ApiPromise<SupportV1MetadataProductsResponse, Products.ListProductsError>`
- **Wire**: `GET /support/v1/metadata/products`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupportV1MetadataProductsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Products.ListProductsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Products.ListProductsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `platform` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SupportV1MetadataProductsResponse` | `supportV1MetadataProductsResponseSchema` | `src/models/support-v1-metadata-products-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

