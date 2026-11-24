<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.products` · Source: `src/resources/products.ts` · 6 operations · Request types: namespace `Products`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### productsCreate

- **Signature**: `productsCreate(request: Products.ProductsCreateRequest, options?: RequestOptions): ApiPromise<ApiResponseOfISimpleListResultOfIProductResult, ApiError>`
- **Wire**: `POST /{culture}/Products`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.ProductsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `ProductResult` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductResult` | `productResultSchema` | `src/models/product-result.ts` |
| `ApiResponseOfISimpleListResultOfIProductResult` | `apiResponseOfISimpleListResultOfIProductResultSchema` | `src/models/api-response-of-isimple-list-result-of-iproduct-result.ts` |

### productsGetById

- **Signature**: `productsGetById(request: Products.ProductsGetByIdRequest, options?: RequestOptions): ApiPromise<ApiResponseOfISimpleListResultOfIProductResult, ApiError>`
- **Wire**: `GET /{culture}/Products/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.ProductsGetByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiResponseOfISimpleListResultOfIProductResult` | `apiResponseOfISimpleListResultOfIProductResultSchema` | `src/models/api-response-of-isimple-list-result-of-iproduct-result.ts` |

### productsGetList

- **Signature**: `productsGetList(request: Products.ProductsGetListRequest, options?: RequestOptions): ApiPromise<ApiResponseOfISimpleListResultOfIProductResult, ApiError>`
- **Wire**: `GET /{culture}/Products`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.ProductsGetListRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `culture` | `path` | — | `string` | yes | — |
| `sortBy` | `query` | `SortBy` | `string` | no | — |
| `currentPage` | `query` | `CurrentPage` | `string` | no | — |
| `pageSize` | `query` | `PageSize` | `string` | no | — |
| `filter` | `query` | `Filter` | `string` | no | — |
| `searchString` | `query` | `SearchString` | `string` | no | — |
| `customDocumentModels` | `query` | `CustomDocumentModels` | `string` | no | — |
| `range` | `query` | `Range` | `string` | no | — |
| `month` | `query` | `Month` | `string` | no | — |
| `year` | `query` | `Year` | `string` | no | — |
| `startDate` | `query` | `StartDate` | `string` | no | — |
| `endDate` | `query` | `EndDate` | `string` | no | — |
| `id` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiResponseOfISimpleListResultOfIProductResult` | `apiResponseOfISimpleListResultOfIProductResultSchema` | `src/models/api-response-of-isimple-list-result-of-iproduct-result.ts` |

### productsRemove

- **Signature**: `productsRemove(request: Products.ProductsRemoveRequest, options?: RequestOptions): ApiPromise<ApiResponseOfBoolean, ApiError>`
- **Wire**: `DELETE /{culture}/Products/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiResponseOfBoolean`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.ProductsRemoveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiResponseOfBoolean` | `apiResponseOfBooleanSchema` | `src/models/api-response-of-boolean.ts` |

### productsSearch

- **Signature**: `productsSearch(request: Products.ProductsSearchRequest, options?: RequestOptions): ApiPromise<ApiResponseOfISimpleListResultOfIProductResult, ApiError>`
- **Wire**: `GET /{culture}/Products/search`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.ProductsSearchRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `culture` | `path` | — | `string` | yes |
| `sortBy` | `query` | `SortBy` | `string` | no |
| `currentPage` | `query` | `CurrentPage` | `string` | no |
| `pageSize` | `query` | `PageSize` | `string` | no |
| `filter` | `query` | `Filter` | `string` | no |
| `searchString` | `query` | `SearchString` | `string` | no |
| `customDocumentModels` | `query` | `CustomDocumentModels` | `string` | no |
| `range` | `query` | `Range` | `string` | no |
| `month` | `query` | `Month` | `string` | no |
| `year` | `query` | `Year` | `string` | no |
| `startDate` | `query` | `StartDate` | `string` | no |
| `endDate` | `query` | `EndDate` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiResponseOfISimpleListResultOfIProductResult` | `apiResponseOfISimpleListResultOfIProductResultSchema` | `src/models/api-response-of-isimple-list-result-of-iproduct-result.ts` |

### productsUpdate

- **Signature**: `productsUpdate(request: Products.ProductsUpdateRequest, options?: RequestOptions): ApiPromise<ApiResponseOfISimpleListResultOfIProductResult, ApiError>`
- **Wire**: `PUT /{culture}/Products/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Products.ProductsUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `ProductResult` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductResult` | `productResultSchema` | `src/models/product-result.ts` |
| `ApiResponseOfISimpleListResultOfIProductResult` | `apiResponseOfISimpleListResultOfIProductResultSchema` | `src/models/api-response-of-isimple-list-result-of-iproduct-result.ts` |

