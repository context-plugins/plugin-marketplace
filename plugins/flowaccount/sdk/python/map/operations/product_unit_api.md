<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductUnitApi — operations

Accessor: `client.product_unit_api` · Source: `flow_account/apis/product_unit_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.product_unit_api.product_unit_create_product_unit

- **Route**: `POST /{culture}/products/units`
- **Auth**: `bearer`
- **Signature**: `def product_unit_create_product_unit(culture: str, body: ProductUnit | ProductUnitDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProductUnit` | `flow_account/models/product_unit.py` |
| `ProductUnitDict` | `flow_account/models/product_unit.py` |

### client.product_unit_api.product_unit_delete_product_unit

- **Route**: `DELETE /{culture}/products/units/{id}`
- **Auth**: `bearer`
- **Signature**: `def product_unit_delete_product_unit(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`
- **Params**: `id_` — path `id` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.product_unit_api.product_unit_get_product_unit_list

- **Route**: `GET /{culture}/products/units`
- **Auth**: `bearer`
- **Signature**: `def product_unit_get_product_unit_list(culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.product_unit_api.product_unit_update_product_unit

- **Route**: `PUT /{culture}/products/units/{id}`
- **Auth**: `bearer`
- **Signature**: `def product_unit_update_product_unit(id_: int, culture: str, body: ProductUnit | ProductUnitDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`, `body`
- **Params**: `id_` — path `id` · `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProductUnit` | `flow_account/models/product_unit.py` |
| `ProductUnitDict` | `flow_account/models/product_unit.py` |

