<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.products` · Source: `src/resources/products.ts` · 3 operations · Request and error types: namespace `Products`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instacart`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRecipePage

- **Signature**: `createRecipePage(request: Products.CreateRecipePageRequest, options?: RequestOptions): ApiPromise<ProductsLinkResponse, Products.CreateRecipePageError>`
- **Wire**: `POST /idp/v1/products/recipe`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProductsLinkResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Products.CreateRecipePageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"error22"` [401] `Error2` · `"error23"` [429] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Products.CreateRecipePageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RecipeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecipeRequest` | `recipeRequestSchema` | `src/models/recipe-request.ts` |
| `ProductsLinkResponse` | `productsLinkResponseSchema` | `src/models/products-link-response.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### createShoppingListPage

- **Signature**: `createShoppingListPage(request: Products.CreateShoppingListPageRequest, options?: RequestOptions): ApiPromise<ProductsLinkResponse, Products.CreateShoppingListPageError>`
- **Wire**: `POST /idp/v1/products/products_link`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProductsLinkResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Products.CreateShoppingListPageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error2"` [400] `Error2` · `"error22"` [401] `Error2` · `"error23"` [429] `Error2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Products.CreateShoppingListPageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ShoppingListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShoppingListRequest` | `shoppingListRequestSchema` | `src/models/shopping-list-request.ts` |
| `ProductsLinkResponse` | `productsLinkResponseSchema` | `src/models/products-link-response.ts` |
| `Error2` | `error2Schema` | `src/models/error2.ts` |

### submitProducts

- **Signature**: `submitProducts(request: Products.SubmitProductsRequest, options?: RequestOptions): ApiPromise<SubmissionResponse, Products.SubmitProductsError>`
- **Wire**: `POST /v2/data_ingestion/catalog/product/submission`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubmissionResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Products.SubmitProductsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Products.SubmitProductsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProductSubmissionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductSubmissionRequest` | `productSubmissionRequestSchema` | `src/models/product-submission-request.ts` |
| `SubmissionResponse` | `submissionResponseSchema` | `src/models/submission-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

