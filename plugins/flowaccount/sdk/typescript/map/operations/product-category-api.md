<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductCategoryApi — operations

Accessor: `client.productCategoryApi` · Source: `src/resources/product-category-api.ts` · 4 operations · Request types: namespace `ProductCategoryApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### productCategoryCreateProductCategory

- **Signature**: `productCategoryCreateProductCategory(request: ProductCategoryApi.ProductCategoryCreateProductCategoryRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/products/categories`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductCategoryApi.ProductCategoryCreateProductCategoryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `ProductCategory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductCategory` | `productCategorySchema` | `src/models/product-category.ts` |

### productCategoryDeleteProductCategory

- **Signature**: `productCategoryDeleteProductCategory(request: ProductCategoryApi.ProductCategoryDeleteProductCategoryRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /{culture}/products/categories/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductCategoryApi.ProductCategoryDeleteProductCategoryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### productCategoryGetProductCategory

- **Signature**: `productCategoryGetProductCategory(request: ProductCategoryApi.ProductCategoryGetProductCategoryRequest, options?: RequestOptions): ApiPromise<ProductCategory[], ApiError>`
- **Wire**: `GET /{culture}/products/categories`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProductCategory[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductCategoryApi.ProductCategoryGetProductCategoryRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `culture` | `path` | `string` | yes | — |
| `currentPage` | `query` | `number` | no | `0` |
| `pageSize` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductCategory` | `productCategorySchema` | `src/models/product-category.ts` |

### productCategoryUpdateProductCategory

- **Signature**: `productCategoryUpdateProductCategory(request: ProductCategoryApi.ProductCategoryUpdateProductCategoryRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/products/categories/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProductCategoryApi.ProductCategoryUpdateProductCategoryRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `ProductCategory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductCategory` | `productCategorySchema` | `src/models/product-category.ts` |

