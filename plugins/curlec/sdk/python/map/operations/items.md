<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.items` · Source: `curlec/apis/items.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.items.create_item

- **Route**: `POST /items`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_item(body: ItemsRequest | ItemsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Item`
- **Returns (raw)**: `ApiResult[Item, CreateItemErrorBody]`
- **Error**: `CreateItemErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ItemsRequest` | `curlec/models/items_request.py` |
| `ItemsRequestDict` | `curlec/models/items_request.py` |
| `Item` | `curlec/models/item.py` |
| `CreateItemErrorBody` | `curlec/errors/create_item_error.py` |
| `Error` | `curlec/models/error.py` |

### client.items.delete_item

- **Route**: `DELETE /items/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def delete_item(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteItemErrorBody]`
- **Error**: `DeleteItemErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteItemErrorBody` | `curlec/errors/delete_item_error.py` |
| `Error` | `curlec/models/error.py` |

### client.items.fetch_item

- **Route**: `GET /items/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_item(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Item`
- **Returns (raw)**: `ApiResult[Item, FetchItemErrorBody]`
- **Error**: `FetchItemErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Item` | `curlec/models/item.py` |
| `FetchItemErrorBody` | `curlec/errors/fetch_item_error.py` |
| `Error` | `curlec/models/error.py` |

### client.items.list_items

- **Route**: `GET /items`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_items(*, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `skip` — query
- **Returns (parsed)**: `ItemsResponse`
- **Returns (raw)**: `ApiResult[ItemsResponse, ListItemsErrorBody]`
- **Error**: `ListItemsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ItemsResponse` | `curlec/models/items_response.py` |
| `ListItemsErrorBody` | `curlec/errors/list_items_error.py` |
| `Error` | `curlec/models/error.py` |

### client.items.update_item

- **Route**: `PATCH /items/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_item(id_: str, body: ItemsRequest1 | ItemsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Item`
- **Returns (raw)**: `ApiResult[Item, UpdateItemErrorBody]`
- **Error**: `UpdateItemErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ItemsRequest1` | `curlec/models/items_request1.py` |
| `ItemsRequest1Dict` | `curlec/models/items_request1.py` |
| `Item` | `curlec/models/item.py` |
| `UpdateItemErrorBody` | `curlec/errors/update_item_error.py` |
| `Error` | `curlec/models/error.py` |

