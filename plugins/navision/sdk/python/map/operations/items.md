<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.items` · Source: `microsoft_dynamics_nav/apis/items.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.items.create_item

- **Route**: `POST /companies({company_id})/items`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_item(company_id: UUID, body: ItemCreate | ItemCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `Item`
- **Returns (raw)**: `ApiResult[Item, CreateItemErrorBody]`
- **Error**: `CreateItemErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ItemCreate` | `microsoft_dynamics_nav/models/item_create.py` |
| `ItemCreateDict` | `microsoft_dynamics_nav/models/item_create.py` |
| `Item` | `microsoft_dynamics_nav/models/item.py` |
| `CreateItemErrorBody` | `microsoft_dynamics_nav/errors/create_item_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.items.delete_item

- **Route**: `DELETE /companies({company_id})/items({item_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_item(company_id: UUID, item_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `item_id`
- **Params**: `company_id` — path · `item_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteItemErrorBody]`
- **Error**: `DeleteItemErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteItemErrorBody` | `microsoft_dynamics_nav/errors/delete_item_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.items.get_item

- **Route**: `GET /companies({company_id})/items({item_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_item(company_id: UUID, item_id: UUID, *, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `item_id`
- **Params**: `company_id` — path · `item_id` — path · `select` — query `$select`
- **Returns (parsed)**: `Item`
- **Returns (raw)**: `ApiResult[Item, GetItemErrorBody]`
- **Error**: `GetItemErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Item` | `microsoft_dynamics_nav/models/item.py` |
| `GetItemErrorBody` | `microsoft_dynamics_nav/errors/get_item_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.items.list_items

- **Route**: `GET /companies({company_id})/items`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_items(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `orderby` — query `$orderby` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiItemsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiItemsResponse, ListItemsErrorBody]`
- **Error**: `ListItemsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiItemsResponse` | `microsoft_dynamics_nav/models/companies_api_items_response.py` |
| `ListItemsErrorBody` | `microsoft_dynamics_nav/errors/list_items_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.items.update_item

- **Route**: `PATCH /companies({company_id})/items({item_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_item(company_id: UUID, item_id: UUID, if_match: str, body: ItemUpdate | ItemUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `item_id`, `if_match`, `body`
- **Params**: `company_id` — path · `item_id` — path · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `Item`
- **Returns (raw)**: `ApiResult[Item, UpdateItemErrorBody]`
- **Error**: `UpdateItemErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ItemUpdate` | `microsoft_dynamics_nav/models/item_update.py` |
| `ItemUpdateDict` | `microsoft_dynamics_nav/models/item_update.py` |
| `Item` | `microsoft_dynamics_nav/models/item.py` |
| `UpdateItemErrorBody` | `microsoft_dynamics_nav/errors/update_item_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

