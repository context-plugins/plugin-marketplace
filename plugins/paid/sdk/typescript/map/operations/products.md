<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.products` · Source: `src/resources/products.ts` · 12 operations · Request and error types: namespace `Products`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProduct

- **Signature**: `createProduct(request: Products.CreateProductRequestParams, options?: RequestOptions): ApiPromise<Product1, Products.CreateProductError>`
- **Wire**: `POST /products/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Product1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Products.CreateProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Products.CreateProductRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreateProductRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateProductRequest` | `createProductRequestSchema` | `src/models/create-product-request.ts` |
| `Product1` | `product1Schema` | `src/models/product1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### create5

- **Signature**: `create5(request: Products.Create5Request, options?: RequestOptions): ApiPromise<Product, ApiError>`
- **Wire**: `POST /products`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Product`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.Create5Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `ProductCreate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductCreate` | `productCreateSchema` | `src/models/product-create.ts` |
| `Product` | `productSchema` | `src/models/product.ts` |

### deleteByExternalId4

- **Signature**: `deleteByExternalId4(request: Products.DeleteByExternalId4Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `DELETE /products/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.DeleteByExternalId4Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

### delete5

- **Signature**: `delete5(request: Products.Delete5Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `DELETE /products/{productId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.Delete5Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `productId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

### getByExternalId4

- **Signature**: `getByExternalId4(request: Products.GetByExternalId4Request, options?: RequestOptions): ApiPromise<Product, ApiError>`
- **Wire**: `GET /products/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Product`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.GetByExternalId4Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Product` | `productSchema` | `src/models/product.ts` |

### getProductById

- **Signature**: `getProductById(request: Products.GetProductByIdRequest, options?: RequestOptions): ApiPromise<ProductDetail, Products.GetProductByIdError>`
- **Wire**: `GET /products/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProductDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Products.GetProductByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Products.GetProductByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductDetail` | `productDetailSchema` | `src/models/product-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### get5

- **Signature**: `get5(request: Products.Get5Request, options?: RequestOptions): ApiPromise<Product, ApiError>`
- **Wire**: `GET /products/{productId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Product`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.Get5Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `productId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Product` | `productSchema` | `src/models/product.ts` |

### listProducts

- **Signature**: `listProducts(request: Products.ListProductsRequest, options?: RequestOptions): ApiPromise<ProductListResponse, Products.ListProductsError>`
- **Wire**: `GET /products/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProductListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Products.ListProductsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Products.ListProductsRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `name` | `query` | — | `string` | no | — |
| `active` | `query` | — | `boolean` | no | — |
| `archived` | `query` | — | `boolean` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductListResponse` | `productListResponseSchema` | `src/models/product-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### list5

- **Signature**: `list5(request: Products.List5Request, options?: RequestOptions): ApiPromise<Product[], ApiError>`
- **Wire**: `GET /products`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Product[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.List5Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Product` | `productSchema` | `src/models/product.ts` |

### updateByExternalId3

- **Signature**: `updateByExternalId3(request: Products.UpdateByExternalId3Request, options?: RequestOptions): ApiPromise<Product, ApiError>`
- **Wire**: `PUT /products/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Product`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.UpdateByExternalId3Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `ProductUpdate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductUpdate` | `productUpdateSchema` | `src/models/product-update.ts` |
| `Product` | `productSchema` | `src/models/product.ts` |

### updateProductById

- **Signature**: `updateProductById(request: Products.UpdateProductByIdRequest, options?: RequestOptions): ApiPromise<ProductDetail, Products.UpdateProductByIdError>`
- **Wire**: `PUT /products/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProductDetail`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Products.UpdateProductByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Products.UpdateProductByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateProductRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateProductRequest` | `updateProductRequestSchema` | `src/models/update-product-request.ts` |
| `ProductDetail` | `productDetailSchema` | `src/models/product-detail.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### update4

- **Signature**: `update4(request: Products.Update4Request, options?: RequestOptions): ApiPromise<Product, ApiError>`
- **Wire**: `PUT /products/{productId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Product`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.Update4Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `productId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `ProductUpdate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductUpdate` | `productUpdateSchema` | `src/models/product-update.ts` |
| `Product` | `productSchema` | `src/models/product.ts` |

