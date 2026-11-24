<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactsTables — operations

Accessor: `client.contacts_tables` · Source: `lusha/apis/contacts_tables.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contacts_tables.add_contacts_table_entities

- **Route**: `POST /v3/contacts/tables/{table_id}/entities`
- **Auth**: `api_key_auth`
- **Signature**: `def add_contacts_table_entities(table_id: str, body: EntitiesAddRequest | EntitiesAddRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`, `body`
- **Params**: `table_id` — path · `body` — JSON body
- **Returns (parsed)**: `EntitiesAddResponse`
- **Returns (raw)**: `ApiResult[EntitiesAddResponse, AddContactsTableEntitiesErrorBody]`
- **Error**: `AddContactsTableEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntitiesAddRequest` | `lusha/models/entities_add_request.py` |
| `EntitiesAddRequestDict` | `lusha/models/entities_add_request.py` |
| `EntitiesAddResponse` | `lusha/models/entities_add_response.py` |
| `AddContactsTableEntitiesErrorBody` | `lusha/errors/add_contacts_table_entities_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contacts_tables.create_contacts_table

- **Route**: `POST /v3/contacts/tables`
- **Auth**: `api_key_auth`
- **Signature**: `def create_contacts_table(body: TableCreateRequest | TableCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TableResponse`
- **Returns (raw)**: `ApiResult[TableResponse, CreateContactsTableErrorBody]`
- **Error**: `CreateContactsTableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TableCreateRequest` | `lusha/models/table_create_request.py` |
| `TableCreateRequestDict` | `lusha/models/table_create_request.py` |
| `TableResponse` | `lusha/models/table_response.py` |
| `CreateContactsTableErrorBody` | `lusha/errors/create_contacts_table_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contacts_tables.delete_contacts_table

- **Route**: `DELETE /v3/contacts/tables/{table_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def delete_contacts_table(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`
- **Params**: `table_id` — path · `email` — query
- **Returns (parsed)**: `V3ContactsTablesResponse`
- **Returns (raw)**: `ApiResult[V3ContactsTablesResponse, DeleteContactsTableErrorBody]`
- **Error**: `DeleteContactsTableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3ContactsTablesResponse` | `lusha/models/v3_contacts_tables_response.py` |
| `DeleteContactsTableErrorBody` | `lusha/errors/delete_contacts_table_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contacts_tables.get_contacts_table

- **Route**: `GET /v3/contacts/tables/{table_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contacts_table(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`
- **Params**: `table_id` — path · `email` — query
- **Returns (parsed)**: `TableResponse`
- **Returns (raw)**: `ApiResult[TableResponse, GetContactsTableErrorBody]`
- **Error**: `GetContactsTableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TableResponse` | `lusha/models/table_response.py` |
| `GetContactsTableErrorBody` | `lusha/errors/get_contacts_table_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contacts_tables.get_contacts_table_entities

- **Route**: `GET /v3/contacts/tables/{table_id}/entities`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contacts_table_entities(table_id: str, *, email: EmailStr | None = None, page: int | None = 0, size: int | None = 100, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`
- **Params**: `table_id` — path · `email` — query · `page` — query · `size` — query
- **Returns (parsed)**: `EntitiesGetResponse`
- **Returns (raw)**: `ApiResult[EntitiesGetResponse, GetContactsTableEntitiesErrorBody]`
- **Error**: `GetContactsTableEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntitiesGetResponse` | `lusha/models/entities_get_response.py` |
| `GetContactsTableEntitiesErrorBody` | `lusha/errors/get_contacts_table_entities_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contacts_tables.list_contacts_table_columns

- **Route**: `GET /v3/contacts/tables/{table_id}/columns`
- **Auth**: `api_key_auth`
- **Signature**: `def list_contacts_table_columns(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`
- **Params**: `table_id` — path · `email` — query
- **Returns (parsed)**: `ColumnsListResponse`
- **Returns (raw)**: `ApiResult[ColumnsListResponse, ListContactsTableColumnsErrorBody]`
- **Error**: `ListContactsTableColumnsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ColumnsListResponse` | `lusha/models/columns_list_response.py` |
| `ListContactsTableColumnsErrorBody` | `lusha/errors/list_contacts_table_columns_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contacts_tables.list_contacts_tables

- **Route**: `POST /v3/contacts/tables/list`
- **Auth**: `api_key_auth`
- **Signature**: `def list_contacts_tables(body: TableListRequest | TableListRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TableListResponse`
- **Returns (raw)**: `ApiResult[TableListResponse, ListContactsTablesErrorBody]`
- **Error**: `ListContactsTablesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TableListRequest` | `lusha/models/table_list_request.py` |
| `TableListRequestDict` | `lusha/models/table_list_request.py` |
| `TableListResponse` | `lusha/models/table_list_response.py` |
| `ListContactsTablesErrorBody` | `lusha/errors/list_contacts_tables_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contacts_tables.remove_contacts_table_column

- **Route**: `DELETE /v3/contacts/tables/{table_id}/columns/{column_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def remove_contacts_table_column(table_id: str, column_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`, `column_id`
- **Params**: `table_id` — path · `column_id` — path · `email` — query
- **Returns (parsed)**: `V3ContactsTablesColumnsResponse`
- **Returns (raw)**: `ApiResult[V3ContactsTablesColumnsResponse, RemoveContactsTableColumnErrorBody]`
- **Error**: `RemoveContactsTableColumnErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3ContactsTablesColumnsResponse` | `lusha/models/v3_contacts_tables_columns_response.py` |
| `RemoveContactsTableColumnErrorBody` | `lusha/errors/remove_contacts_table_column_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contacts_tables.remove_contacts_table_entities

- **Route**: `DELETE /v3/contacts/tables/{table_id}/entities`
- **Auth**: `api_key_auth`
- **Signature**: `def remove_contacts_table_entities(table_id: str, body: EntitiesRemoveRequest | EntitiesRemoveRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`, `body`
- **Params**: `table_id` — path · `body` — JSON body
- **Returns (parsed)**: `EntitiesRemoveResponse`
- **Returns (raw)**: `ApiResult[EntitiesRemoveResponse, RemoveContactsTableEntitiesErrorBody]`
- **Error**: `RemoveContactsTableEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntitiesRemoveRequest` | `lusha/models/entities_remove_request.py` |
| `EntitiesRemoveRequestDict` | `lusha/models/entities_remove_request.py` |
| `EntitiesRemoveResponse` | `lusha/models/entities_remove_response.py` |
| `RemoveContactsTableEntitiesErrorBody` | `lusha/errors/remove_contacts_table_entities_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contacts_tables.run_contacts_table_column

- **Route**: `POST /v3/contacts/tables/{table_id}/columns/{column_id}/run`
- **Auth**: `api_key_auth`
- **Signature**: `def run_contacts_table_column(table_id: str, column_id: str, body: ColumnsRunRequest | ColumnsRunRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`, `column_id`, `body`
- **Params**: `table_id` — path · `column_id` — path · `body` — JSON body
- **Returns (parsed)**: `ColumnsRunResponse`
- **Returns (raw)**: `ApiResult[ColumnsRunResponse, RunContactsTableColumnErrorBody]`
- **Error**: `RunContactsTableColumnErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ColumnsRunRequest` | `lusha/models/columns_run_request.py` |
| `ColumnsRunRequestDict` | `lusha/models/columns_run_request.py` |
| `ColumnsRunResponse` | `lusha/models/columns_run_response.py` |
| `RunContactsTableColumnErrorBody` | `lusha/errors/run_contacts_table_column_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contacts_tables.update_contacts_table

- **Route**: `PATCH /v3/contacts/tables/{table_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def update_contacts_table(table_id: str, body: TableUpdateRequest | TableUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`, `body`
- **Params**: `table_id` — path · `body` — JSON body
- **Returns (parsed)**: `TableResponse`
- **Returns (raw)**: `ApiResult[TableResponse, UpdateContactsTableErrorBody]`
- **Error**: `UpdateContactsTableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TableUpdateRequest` | `lusha/models/table_update_request.py` |
| `TableUpdateRequestDict` | `lusha/models/table_update_request.py` |
| `TableResponse` | `lusha/models/table_response.py` |
| `UpdateContactsTableErrorBody` | `lusha/errors/update_contacts_table_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

