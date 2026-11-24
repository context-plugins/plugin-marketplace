<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductInventory — operations

Accessor: `client.product_inventory` · Source: `flow_account/apis/product_inventory.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.product_inventory.product_inventory_adjust

- **Route**: `POST /{culture}/product-inventories/adjust`
- **Auth**: `bearer`
- **Signature**: `def product_inventory_adjust(culture: str, body: StockCard | StockCardDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StockCard` | `flow_account/models/stock_card.py` |
| `StockCardDict` | `flow_account/models/stock_card.py` |

### client.product_inventory.product_inventory_delete_product_inventory

- **Route**: `DELETE /{culture}/product-inventories/{id}`
- **Auth**: `bearer`
- **Signature**: `def product_inventory_delete_product_inventory(id_: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`
- **Params**: `id_` — path `id` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.product_inventory.product_inventory_get_list

- **Route**: `GET /{culture}/product-inventories/{id}`
- **Auth**: `bearer`
- **Signature**: `def product_inventory_get_list(culture: str, *, id_: int = 0, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `id_` — path `id` · `culture` — path · `sort_by` — query `SortBy` · `current_page` — query `CurrentPage` · `page_size` — query `PageSize` · `filter_` — query `Filter` · `search_string` — query `SearchString` · `custom_document_models` — query `CustomDocumentModels` · `range_` — query `Range` · `month` — query `Month` · `year` — query `Year` · `start_date` — query `StartDate` · `end_date` — query `EndDate`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

