<!-- Generated file — do not edit; regenerated with the SDK. -->

# Fields — operations

Accessor: `client.fields` · Source: `airtable/apis/fields.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.fields.create_field

- **Route**: `POST /meta/bases/{baseId}/tables/{tableId}/fields`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_field(base_id: str, table_id: str, body: CreateFieldRequest | CreateFieldRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id`, `body`
- **Params**: `base_id` — path `baseId` · `table_id` — path `tableId` · `body` — JSON body
- **Returns (parsed)**: `FieldSchema`
- **Returns (raw)**: `ApiResult[FieldSchema, CreateFieldErrorBody]`
- **Error**: `CreateFieldErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateFieldRequest` | `airtable/models/create_field_request.py` |
| `CreateFieldRequestDict` | `airtable/models/create_field_request.py` |
| `FieldSchema` | `airtable/models/field_schema.py` |
| `CreateFieldErrorBody` | `airtable/errors/create_field_error.py` |
| `Error` | `airtable/models/error.py` |

### client.fields.update_field

- **Route**: `PATCH /meta/bases/{baseId}/tables/{tableId}/fields/{fieldId}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_field(base_id: str, table_id: str, field_id: str, body: MetaBasesTablesFieldsFieldIdRequest | MetaBasesTablesFieldsFieldIdRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id`, `field_id`, `body`
- **Params**: `base_id` — path `baseId` · `table_id` — path `tableId` · `field_id` — path `fieldId` · `body` — JSON body
- **Returns (parsed)**: `FieldSchema`
- **Returns (raw)**: `ApiResult[FieldSchema, UpdateFieldErrorBody]`
- **Error**: `UpdateFieldErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MetaBasesTablesFieldsFieldIdRequest` | `airtable/models/meta_bases_tables_fields_field_id_request.py` |
| `MetaBasesTablesFieldsFieldIdRequestDict` | `airtable/models/meta_bases_tables_fields_field_id_request.py` |
| `FieldSchema` | `airtable/models/field_schema.py` |
| `UpdateFieldErrorBody` | `airtable/errors/update_field_error.py` |
| `Error` | `airtable/models/error.py` |

