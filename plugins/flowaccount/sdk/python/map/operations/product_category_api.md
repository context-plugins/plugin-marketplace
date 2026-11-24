<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductCategoryApi — operations

Accessor: `client.product_category_api` · Source: `flow_account/apis/product_category_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.product_category_api.product_category_create_product_category

- **Route**: `POST /{culture}/products/categories`
- **Auth**: `bearer`
- **Signature**: `def product_category_create_product_category(culture: str, body: ProductCategory | ProductCategoryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProductCategory` | `flow_account/models/product_category.py` |
| `ProductCategoryDict` | `flow_account/models/product_category.py` |

### client.product_category_api.product_category_delete_product_category

- **Route**: `DELETE /{culture}/products/categories/{id}`
- **Auth**: `bearer`
- **Signature**: `def product_category_delete_product_category(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`
- **Params**: `id_` — path `id` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.product_category_api.product_category_get_product_category

- **Route**: `GET /{culture}/products/categories`
- **Auth**: `bearer`
- **Signature**: `def product_category_get_product_category(culture: str, *, current_page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path · `current_page` — query `currentPage` · `page_size` — query `pageSize`
- **Returns (parsed)**: `list[ProductCategory]`
- **Returns (raw)**: `ApiResult[list[ProductCategory], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProductCategory` | `flow_account/models/product_category.py` |

### client.product_category_api.product_category_update_product_category

- **Route**: `PUT /{culture}/products/categories/{id}`
- **Auth**: `bearer`
- **Signature**: `def product_category_update_product_category(id_: int, culture: str, body: ProductCategory | ProductCategoryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`, `body`
- **Params**: `id_` — path `id` · `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProductCategory` | `flow_account/models/product_category.py` |
| `ProductCategoryDict` | `flow_account/models/product_category.py` |

