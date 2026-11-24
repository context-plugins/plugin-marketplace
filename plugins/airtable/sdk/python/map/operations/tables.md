<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tables — operations

Accessor: `client.tables` · Source: `airtable/apis/tables.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tables.create_table

- **Route**: `POST /meta/bases/{baseId}/tables`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_table(base_id: str, body: CreateTableRequest | CreateTableRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `body`
- **Params**: `base_id` — path `baseId` · `body` — JSON body
- **Returns (parsed)**: `TableSchema`
- **Returns (raw)**: `ApiResult[TableSchema, CreateTableErrorBody]`
- **Error**: `CreateTableErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateTableRequest` | `airtable/models/create_table_request.py` |
| `CreateTableRequestDict` | `airtable/models/create_table_request.py` |
| `TableSchema` | `airtable/models/table_schema.py` |
| `CreateTableErrorBody` | `airtable/errors/create_table_error.py` |
| `Error` | `airtable/models/error.py` |

### client.tables.update_table

- **Route**: `PATCH /meta/bases/{baseId}/tables/{tableId}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_table(base_id: str, table_id: str, body: MetaBasesTablesRequest | MetaBasesTablesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id`, `body`
- **Params**: `base_id` — path `baseId` · `table_id` — path `tableId` · `body` — JSON body
- **Returns (parsed)**: `TableSchema`
- **Returns (raw)**: `ApiResult[TableSchema, UpdateTableErrorBody]`
- **Error**: `UpdateTableErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MetaBasesTablesRequest` | `airtable/models/meta_bases_tables_request.py` |
| `MetaBasesTablesRequestDict` | `airtable/models/meta_bases_tables_request.py` |
| `TableSchema` | `airtable/models/table_schema.py` |
| `UpdateTableErrorBody` | `airtable/errors/update_table_error.py` |
| `Error` | `airtable/models/error.py` |

