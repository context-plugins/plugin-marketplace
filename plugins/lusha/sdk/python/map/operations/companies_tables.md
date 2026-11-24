<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompaniesTables — operations

Accessor: `client.companies_tables` · Source: `lusha/apis/companies_tables.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.companies_tables.add_companies_table_entities

- **Route**: `POST /v3/companies/tables/{table_id}/entities`
- **Auth**: `api_key_auth`
- **Signature**: `def add_companies_table_entities(table_id: str, body: EntitiesAddRequest | EntitiesAddRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`, `body`
- **Params**: `table_id` — path · `body` — JSON body
- **Returns (parsed)**: `EntitiesAddResponse`
- **Returns (raw)**: `ApiResult[EntitiesAddResponse, AddCompaniesTableEntitiesErrorBody]`
- **Error**: `AddCompaniesTableEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntitiesAddRequest` | `lusha/models/entities_add_request.py` |
| `EntitiesAddRequestDict` | `lusha/models/entities_add_request.py` |
| `EntitiesAddResponse` | `lusha/models/entities_add_response.py` |
| `AddCompaniesTableEntitiesErrorBody` | `lusha/errors/add_companies_table_entities_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.companies_tables.create_companies_table

- **Route**: `POST /v3/companies/tables`
- **Auth**: `api_key_auth`
- **Signature**: `def create_companies_table(body: TableCreateRequest | TableCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TableResponse`
- **Returns (raw)**: `ApiResult[TableResponse, CreateCompaniesTableErrorBody]`
- **Error**: `CreateCompaniesTableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TableCreateRequest` | `lusha/models/table_create_request.py` |
| `TableCreateRequestDict` | `lusha/models/table_create_request.py` |
| `TableResponse` | `lusha/models/table_response.py` |
| `CreateCompaniesTableErrorBody` | `lusha/errors/create_companies_table_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.companies_tables.delete_companies_table

- **Route**: `DELETE /v3/companies/tables/{table_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def delete_companies_table(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`
- **Params**: `table_id` — path · `email` — query
- **Returns (parsed)**: `V3CompaniesTablesResponse`
- **Returns (raw)**: `ApiResult[V3CompaniesTablesResponse, DeleteCompaniesTableErrorBody]`
- **Error**: `DeleteCompaniesTableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3CompaniesTablesResponse` | `lusha/models/v3_companies_tables_response.py` |
| `DeleteCompaniesTableErrorBody` | `lusha/errors/delete_companies_table_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.companies_tables.get_companies_table

- **Route**: `GET /v3/companies/tables/{table_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_companies_table(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`
- **Params**: `table_id` — path · `email` — query
- **Returns (parsed)**: `TableResponse`
- **Returns (raw)**: `ApiResult[TableResponse, GetCompaniesTableErrorBody]`
- **Error**: `GetCompaniesTableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TableResponse` | `lusha/models/table_response.py` |
| `GetCompaniesTableErrorBody` | `lusha/errors/get_companies_table_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.companies_tables.get_companies_table_entities

- **Route**: `GET /v3/companies/tables/{table_id}/entities`
- **Auth**: `api_key_auth`
- **Signature**: `def get_companies_table_entities(table_id: str, *, email: EmailStr | None = None, page: int | None = 0, size: int | None = 100, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`
- **Params**: `table_id` — path · `email` — query · `page` — query · `size` — query
- **Returns (parsed)**: `EntitiesGetResponse`
- **Returns (raw)**: `ApiResult[EntitiesGetResponse, GetCompaniesTableEntitiesErrorBody]`
- **Error**: `GetCompaniesTableEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntitiesGetResponse` | `lusha/models/entities_get_response.py` |
| `GetCompaniesTableEntitiesErrorBody` | `lusha/errors/get_companies_table_entities_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.companies_tables.list_companies_table_columns

- **Route**: `GET /v3/companies/tables/{table_id}/columns`
- **Auth**: `api_key_auth`
- **Signature**: `def list_companies_table_columns(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`
- **Params**: `table_id` — path · `email` — query
- **Returns (parsed)**: `ColumnsListResponse`
- **Returns (raw)**: `ApiResult[ColumnsListResponse, ListCompaniesTableColumnsErrorBody]`
- **Error**: `ListCompaniesTableColumnsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ColumnsListResponse` | `lusha/models/columns_list_response.py` |
| `ListCompaniesTableColumnsErrorBody` | `lusha/errors/list_companies_table_columns_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.companies_tables.list_companies_tables

- **Route**: `POST /v3/companies/tables/list`
- **Auth**: `api_key_auth`
- **Signature**: `def list_companies_tables(body: TableListRequest | TableListRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TableListResponse`
- **Returns (raw)**: `ApiResult[TableListResponse, ListCompaniesTablesErrorBody]`
- **Error**: `ListCompaniesTablesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TableListRequest` | `lusha/models/table_list_request.py` |
| `TableListRequestDict` | `lusha/models/table_list_request.py` |
| `TableListResponse` | `lusha/models/table_list_response.py` |
| `ListCompaniesTablesErrorBody` | `lusha/errors/list_companies_tables_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.companies_tables.remove_companies_table_column

- **Route**: `DELETE /v3/companies/tables/{table_id}/columns/{column_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def remove_companies_table_column(table_id: str, column_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`, `column_id`
- **Params**: `table_id` — path · `column_id` — path · `email` — query
- **Returns (parsed)**: `V3CompaniesTablesColumnsResponse`
- **Returns (raw)**: `ApiResult[V3CompaniesTablesColumnsResponse, RemoveCompaniesTableColumnErrorBody]`
- **Error**: `RemoveCompaniesTableColumnErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3CompaniesTablesColumnsResponse` | `lusha/models/v3_companies_tables_columns_response.py` |
| `RemoveCompaniesTableColumnErrorBody` | `lusha/errors/remove_companies_table_column_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.companies_tables.remove_companies_table_entities

- **Route**: `DELETE /v3/companies/tables/{table_id}/entities`
- **Auth**: `api_key_auth`
- **Signature**: `def remove_companies_table_entities(table_id: str, body: EntitiesRemoveRequest | EntitiesRemoveRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`, `body`
- **Params**: `table_id` — path · `body` — JSON body
- **Returns (parsed)**: `EntitiesRemoveResponse`
- **Returns (raw)**: `ApiResult[EntitiesRemoveResponse, RemoveCompaniesTableEntitiesErrorBody]`
- **Error**: `RemoveCompaniesTableEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EntitiesRemoveRequest` | `lusha/models/entities_remove_request.py` |
| `EntitiesRemoveRequestDict` | `lusha/models/entities_remove_request.py` |
| `EntitiesRemoveResponse` | `lusha/models/entities_remove_response.py` |
| `RemoveCompaniesTableEntitiesErrorBody` | `lusha/errors/remove_companies_table_entities_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.companies_tables.run_companies_table_column

- **Route**: `POST /v3/companies/tables/{table_id}/columns/{column_id}/run`
- **Auth**: `api_key_auth`
- **Signature**: `def run_companies_table_column(table_id: str, column_id: str, body: ColumnsRunRequest | ColumnsRunRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`, `column_id`, `body`
- **Params**: `table_id` — path · `column_id` — path · `body` — JSON body
- **Returns (parsed)**: `ColumnsRunResponse`
- **Returns (raw)**: `ApiResult[ColumnsRunResponse, RunCompaniesTableColumnErrorBody]`
- **Error**: `RunCompaniesTableColumnErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ColumnsRunRequest` | `lusha/models/columns_run_request.py` |
| `ColumnsRunRequestDict` | `lusha/models/columns_run_request.py` |
| `ColumnsRunResponse` | `lusha/models/columns_run_response.py` |
| `RunCompaniesTableColumnErrorBody` | `lusha/errors/run_companies_table_column_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.companies_tables.update_companies_table

- **Route**: `PATCH /v3/companies/tables/{table_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def update_companies_table(table_id: str, body: TableUpdateRequest | TableUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `table_id`, `body`
- **Params**: `table_id` — path · `body` — JSON body
- **Returns (parsed)**: `TableResponse`
- **Returns (raw)**: `ApiResult[TableResponse, UpdateCompaniesTableErrorBody]`
- **Error**: `UpdateCompaniesTableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TableUpdateRequest` | `lusha/models/table_update_request.py` |
| `TableUpdateRequestDict` | `lusha/models/table_update_request.py` |
| `TableResponse` | `lusha/models/table_response.py` |
| `UpdateCompaniesTableErrorBody` | `lusha/errors/update_companies_table_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

