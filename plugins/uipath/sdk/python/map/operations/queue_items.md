<!-- Generated file — do not edit; regenerated with the SDK. -->

# QueueItems — operations

Accessor: `client.queue_items` · Source: `ui_path/apis/queue_items.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.queue_items.add_queue_item

- **Route**: `POST /odata/QueueItems`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def add_queue_item(body: AddQueueItemRequest | AddQueueItemRequestDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId` · `body` — JSON body
- **Returns (parsed)**: `QueueItem`
- **Returns (raw)**: `ApiResult[QueueItem, AddQueueItemErrorBody]`
- **Error**: `AddQueueItemErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AddQueueItemRequest` | `ui_path/models/add_queue_item_request.py` |
| `AddQueueItemRequestDict` | `ui_path/models/add_queue_item_request.py` |
| `QueueItem` | `ui_path/models/queue_item.py` |
| `AddQueueItemErrorBody` | `ui_path/errors/add_queue_item_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.queue_items.list_queue_items

- **Route**: `GET /odata/QueueItems`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_queue_items(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `$filter` · `orderby` — query `$orderby` · `top` — query `$top` · `skip` — query `$skip` · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `ODataQueueItemCollection`
- **Returns (raw)**: `ApiResult[ODataQueueItemCollection, ListQueueItemsErrorBody]`
- **Error**: `ListQueueItemsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ODataQueueItemCollection` | `ui_path/models/o_data_queue_item_collection.py` |
| `ListQueueItemsErrorBody` | `ui_path/errors/list_queue_items_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

