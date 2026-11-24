<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.products` · Source: `instacart/apis/products.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.products.create_recipe_page

- **Route**: `POST /idp/v1/products/recipe`
- **Auth**: `api_key_auth`
- **Server**: `default`
- **Signature**: `def create_recipe_page(body: RecipeRequest | RecipeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ProductsLinkResponse`
- **Returns (raw)**: `ApiResult[ProductsLinkResponse, CreateRecipePageErrorBody]`
- **Error**: `CreateRecipePageErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecipeRequest` | `instacart/models/recipe_request.py` |
| `RecipeRequestDict` | `instacart/models/recipe_request.py` |
| `ProductsLinkResponse` | `instacart/models/products_link_response.py` |
| `CreateRecipePageErrorBody` | `instacart/errors/create_recipe_page_error.py` |
| `Error2` | `instacart/models/error2.py` |

### client.products.create_shopping_list_page

- **Route**: `POST /idp/v1/products/products_link`
- **Auth**: `api_key_auth`
- **Server**: `default`
- **Signature**: `def create_shopping_list_page(body: ShoppingListRequest | ShoppingListRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ProductsLinkResponse`
- **Returns (raw)**: `ApiResult[ProductsLinkResponse, CreateShoppingListPageErrorBody]`
- **Error**: `CreateShoppingListPageErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ShoppingListRequest` | `instacart/models/shopping_list_request.py` |
| `ShoppingListRequestDict` | `instacart/models/shopping_list_request.py` |
| `ProductsLinkResponse` | `instacart/models/products_link_response.py` |
| `CreateShoppingListPageErrorBody` | `instacart/errors/create_shopping_list_page_error.py` |
| `Error2` | `instacart/models/error2.py` |

### client.products.submit_products

- **Route**: `POST /v2/data_ingestion/catalog/product/submission`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def submit_products(body: ProductSubmissionRequest | ProductSubmissionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SubmissionResponse`
- **Returns (raw)**: `ApiResult[SubmissionResponse, SubmitProductsErrorBody]`
- **Error**: `SubmitProductsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProductSubmissionRequest` | `instacart/models/product_submission_request.py` |
| `ProductSubmissionRequestDict` | `instacart/models/product_submission_request.py` |
| `SubmissionResponse` | `instacart/models/submission_response.py` |
| `SubmitProductsErrorBody` | `instacart/errors/submit_products_error.py` |
| `Error` | `instacart/models/error.py` |

