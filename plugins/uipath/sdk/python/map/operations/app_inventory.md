<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppInventory — operations

Accessor: `client.app_inventory` · Source: `ui_path/apis/app_inventory.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.app_inventory.bulk_upsert_app_inventory

- **Route**: `PUT /appinventory`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def bulk_upsert_app_inventory(body: AppinventoryRequest | AppinventoryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AppInventoryListResponse`
- **Returns (raw)**: `ApiResult[AppInventoryListResponse, BulkUpsertAppInventoryErrorBody]`
- **Error**: `BulkUpsertAppInventoryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppinventoryRequest` | `ui_path/models/appinventory_request.py` |
| `AppinventoryRequestDict` | `ui_path/models/appinventory_request.py` |
| `AppInventoryListResponse` | `ui_path/models/app_inventory_list_response.py` |
| `BulkUpsertAppInventoryErrorBody` | `ui_path/errors/bulk_upsert_app_inventory_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.app_inventory.delete_application

- **Route**: `DELETE /appinventory/{applicationId}`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def delete_application(application_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `application_id`
- **Params**: `application_id` — path `applicationId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteApplicationErrorBody]`
- **Error**: `DeleteApplicationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApplicationErrorBody` | `ui_path/errors/delete_application_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.app_inventory.list_app_inventory

- **Route**: `GET /appinventory`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def list_app_inventory(*, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `AppInventoryListResponse`
- **Returns (raw)**: `ApiResult[AppInventoryListResponse, ListAppInventoryErrorBody]`
- **Error**: `ListAppInventoryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppInventoryListResponse` | `ui_path/models/app_inventory_list_response.py` |
| `ListAppInventoryErrorBody` | `ui_path/errors/list_app_inventory_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

