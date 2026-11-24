<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entities — operations

Accessor: `client.entities` · Source: `ui_path/apis/entities.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.entities.create_entity_record

- **Route**: `POST /{entityName}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_data_service_entities_api`
- **Signature**: `def create_entity_record(entity_name: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entity_name`, `body`
- **Params**: `entity_name` — path `entityName` · `body` — JSON body
- **Returns (parsed)**: `EntityRecord`
- **Returns (raw)**: `ApiResult[EntityRecord, CreateEntityRecordErrorBody]`
- **Error**: `CreateEntityRecordErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntityRecord` | `ui_path/models/entity_record.py` |
| `CreateEntityRecordErrorBody` | `ui_path/errors/create_entity_record_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.entities.delete_entity_record

- **Route**: `DELETE /{entityName}/{recordId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_data_service_entities_api`
- **Signature**: `def delete_entity_record(entity_name: str, record_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entity_name`, `record_id`
- **Params**: `entity_name` — path `entityName` · `record_id` — path `recordId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEntityRecordErrorBody]`
- **Error**: `DeleteEntityRecordErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteEntityRecordErrorBody` | `ui_path/errors/delete_entity_record_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.entities.get_entity_record

- **Route**: `GET /{entityName}/{recordId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_data_service_entities_api`
- **Signature**: `def get_entity_record(entity_name: str, record_id: str, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entity_name`, `record_id`
- **Params**: `entity_name` — path `entityName` · `record_id` — path `recordId` · `select` — query `$select` · `expand` — query `$expand`
- **Returns (parsed)**: `EntityRecord`
- **Returns (raw)**: `ApiResult[EntityRecord, GetEntityRecordErrorBody]`
- **Error**: `GetEntityRecordErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntityRecord` | `ui_path/models/entity_record.py` |
| `GetEntityRecordErrorBody` | `ui_path/errors/get_entity_record_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.entities.list_entity_records

- **Route**: `GET /{entityName}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_data_service_entities_api`
- **Signature**: `def list_entity_records(entity_name: str, *, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entity_name`
- **Params**: `entity_name` — path `entityName` · `filter_` — query `$filter` · `orderby` — query `$orderby` · `top` — query `$top` · `skip` — query `$skip` · `select` — query `$select` · `expand` — query `$expand`
- **Returns (parsed)**: `EntityRecordCollection`
- **Returns (raw)**: `ApiResult[EntityRecordCollection, ListEntityRecordsErrorBody]`
- **Error**: `ListEntityRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntityRecordCollection` | `ui_path/models/entity_record_collection.py` |
| `ListEntityRecordsErrorBody` | `ui_path/errors/list_entity_records_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.entities.query_entity_records

- **Route**: `POST /{entityName}/query`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_data_service_entities_api`
- **Signature**: `def query_entity_records(entity_name: str, body: EntityQueryRequest | EntityQueryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entity_name`, `body`
- **Params**: `entity_name` — path `entityName` · `body` — JSON body
- **Returns (parsed)**: `EntityRecordCollection`
- **Returns (raw)**: `ApiResult[EntityRecordCollection, QueryEntityRecordsErrorBody]`
- **Error**: `QueryEntityRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntityQueryRequest` | `ui_path/models/entity_query_request.py` |
| `EntityQueryRequestDict` | `ui_path/models/entity_query_request.py` |
| `EntityRecordCollection` | `ui_path/models/entity_record_collection.py` |
| `QueryEntityRecordsErrorBody` | `ui_path/errors/query_entity_records_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.entities.update_entity_record

- **Route**: `PUT /{entityName}/{recordId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_data_service_entities_api`
- **Signature**: `def update_entity_record(entity_name: str, record_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entity_name`, `record_id`, `body`
- **Params**: `entity_name` — path `entityName` · `record_id` — path `recordId` · `body` — JSON body
- **Returns (parsed)**: `EntityRecord`
- **Returns (raw)**: `ApiResult[EntityRecord, UpdateEntityRecordErrorBody]`
- **Error**: `UpdateEntityRecordErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntityRecord` | `ui_path/models/entity_record.py` |
| `UpdateEntityRecordErrorBody` | `ui_path/errors/update_entity_record_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

