<!-- Generated file — do not edit; regenerated with the SDK. -->

# ActionItems — operations

Accessor: `client.action_items` · Source: `fellow/apis/action_items.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.action_items.apps_developer_api_api_archive_action_item

- **Route**: `POST /api/v1/action_item/{action_item_id}/archive`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_archive_action_item(action_item_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `action_item_id`
- **Params**: `action_item_id` — path
- **Returns (parsed)**: `ActionItemResponse`
- **Returns (raw)**: `ApiResult[ActionItemResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ActionItemResponse` | `fellow/models/action_item_response.py` |

### client.action_items.apps_developer_api_api_get_action_item_by_id

- **Route**: `GET /api/v1/action_item/{action_item_id}`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_get_action_item_by_id(action_item_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `action_item_id`
- **Params**: `action_item_id` — path
- **Returns (parsed)**: `ActionItemResponse`
- **Returns (raw)**: `ApiResult[ActionItemResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ActionItemResponse` | `fellow/models/action_item_response.py` |

### client.action_items.apps_developer_api_api_get_action_items

- **Route**: `POST /api/v1/action_items`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_get_action_items(body: GetActionItemsRequest | GetActionItemsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ActionItemsListResponse`
- **Returns (raw)**: `ApiResult[ActionItemsListResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `GetActionItemsRequest` | `fellow/models/get_action_items_request.py` |
| `GetActionItemsRequestDict` | `fellow/models/get_action_items_request.py` |
| `ActionItemsListResponse` | `fellow/models/action_items_list_response.py` |

### client.action_items.apps_developer_api_api_mark_action_item_complete

- **Route**: `POST /api/v1/action_item/{action_item_id}/complete`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_mark_action_item_complete(action_item_id: str, body: MarkActionItemCompleteRequest | MarkActionItemCompleteRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `action_item_id`, `body`
- **Params**: `action_item_id` — path · `body` — JSON body
- **Returns (parsed)**: `ActionItemResponse`
- **Returns (raw)**: `ApiResult[ActionItemResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MarkActionItemCompleteRequest` | `fellow/models/mark_action_item_complete_request.py` |
| `MarkActionItemCompleteRequestDict` | `fellow/models/mark_action_item_complete_request.py` |
| `ActionItemResponse` | `fellow/models/action_item_response.py` |

