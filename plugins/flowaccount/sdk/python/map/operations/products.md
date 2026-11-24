<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.products` · Source: `flow_account/apis/products.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.products.products_create

- **Route**: `POST /{culture}/Products`
- **Auth**: `bearer`
- **Signature**: `def products_create(culture: str, body: ProductResult | ProductResultDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `body` — JSON body
- **Returns (parsed)**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Returns (raw)**: `ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProductResult` | `flow_account/models/product_result.py` |
| `ProductResultDict` | `flow_account/models/product_result.py` |
| `ApiResponseOfISimpleListResultOfIProductResult` | `flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py` |

### client.products.products_get_by_id

- **Route**: `GET /{culture}/Products/{id}`
- **Auth**: `bearer`
- **Signature**: `def products_get_by_id(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`
- **Params**: `id_` — path `id` · `culture` — path
- **Returns (parsed)**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Returns (raw)**: `ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiResponseOfISimpleListResultOfIProductResult` | `flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py` |

### client.products.products_get_list

- **Route**: `GET /{culture}/Products`
- **Auth**: `bearer`
- **Signature**: `def products_get_list(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, id_: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path · `sort_by` — query `SortBy` · `current_page` — query `CurrentPage` · `page_size` — query `PageSize` · `filter_` — query `Filter` · `search_string` — query `SearchString` · `custom_document_models` — query `CustomDocumentModels` · `range_` — query `Range` · `month` — query `Month` · `year` — query `Year` · `start_date` — query `StartDate` · `end_date` — query `EndDate` · `id_` — query `id`
- **Returns (parsed)**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Returns (raw)**: `ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiResponseOfISimpleListResultOfIProductResult` | `flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py` |

### client.products.products_remove

- **Route**: `DELETE /{culture}/Products/{id}`
- **Auth**: `bearer`
- **Signature**: `def products_remove(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`
- **Params**: `id_` — path `id` · `culture` — path
- **Returns (parsed)**: `ApiResponseOfBoolean`
- **Returns (raw)**: `ApiResult[ApiResponseOfBoolean, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiResponseOfBoolean` | `flow_account/models/api_response_of_boolean.py` |

### client.products.products_search

- **Route**: `GET /{culture}/Products/search`
- **Auth**: `bearer`
- **Signature**: `def products_search(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path · `sort_by` — query `SortBy` · `current_page` — query `CurrentPage` · `page_size` — query `PageSize` · `filter_` — query `Filter` · `search_string` — query `SearchString` · `custom_document_models` — query `CustomDocumentModels` · `range_` — query `Range` · `month` — query `Month` · `year` — query `Year` · `start_date` — query `StartDate` · `end_date` — query `EndDate`
- **Returns (parsed)**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Returns (raw)**: `ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiResponseOfISimpleListResultOfIProductResult` | `flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py` |

### client.products.products_update

- **Route**: `PUT /{culture}/Products/{id}`
- **Auth**: `bearer`
- **Signature**: `def products_update(id_: int, culture: str, body: ProductResult | ProductResultDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`, `body`
- **Params**: `id_` — path `id` · `culture` — path · `body` — JSON body
- **Returns (parsed)**: `ApiResponseOfISimpleListResultOfIProductResult`
- **Returns (raw)**: `ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProductResult` | `flow_account/models/product_result.py` |
| `ProductResultDict` | `flow_account/models/product_result.py` |
| `ApiResponseOfISimpleListResultOfIProductResult` | `flow_account/models/api_response_of_i_simple_list_result_of_i_product_result.py` |

