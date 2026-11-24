<!-- Generated file — do not edit; regenerated with the SDK. -->

# Queues — operations

Accessor: `client.queues` · Source: `ui_path/apis/queues.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.queues.create_queue

- **Route**: `POST /odata/QueueDefinitions`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_queue(body: QueueDefinition | QueueDefinitionDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId` · `body` — JSON body
- **Returns (parsed)**: `QueueDefinition`
- **Returns (raw)**: `ApiResult[QueueDefinition, CreateQueueErrorBody]`
- **Error**: `CreateQueueErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QueueDefinition` | `ui_path/models/queue_definition.py` |
| `QueueDefinitionDict` | `ui_path/models/queue_definition.py` |
| `CreateQueueErrorBody` | `ui_path/errors/create_queue_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.queues.list_queues

- **Route**: `GET /odata/QueueDefinitions`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_queues(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `$filter` · `top` — query `$top` · `skip` — query `$skip` · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `ODataQueueDefinitionCollection`
- **Returns (raw)**: `ApiResult[ODataQueueDefinitionCollection, ListQueuesErrorBody]`
- **Error**: `ListQueuesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ODataQueueDefinitionCollection` | `ui_path/models/o_data_queue_definition_collection.py` |
| `ListQueuesErrorBody` | `ui_path/errors/list_queues_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

