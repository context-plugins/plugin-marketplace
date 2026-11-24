<!-- Generated file — do not edit; regenerated with the SDK. -->

# Records — operations

Accessor: `client.records` · Source: `airtable/apis/records.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.records.create_records

- **Route**: `POST /{baseId}/{tableIdOrName}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_records(base_id: str, table_id_or_name: str, body: Request | RequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id_or_name`, `body`
- **Params**: `base_id` — path `baseId` · `table_id_or_name` — path `tableIdOrName` · `body` — JSON body
- **Returns (parsed)**: `Response`
- **Returns (raw)**: `ApiResult[Response, CreateRecordsErrorBody]`
- **Error**: `CreateRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Request` | `airtable/models/request.py` |
| `RequestDict` | `airtable/models/request.py` |
| `Response` | `airtable/models/response.py` |
| `CreateRecordsErrorBody` | `airtable/errors/create_records_error.py` |
| `Error` | `airtable/models/error.py` |

### client.records.delete_record

- **Route**: `DELETE /{baseId}/{tableIdOrName}/{recordId}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_record(base_id: str, table_id_or_name: str, record_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id_or_name`, `record_id`
- **Params**: `base_id` — path `baseId` · `table_id_or_name` — path `tableIdOrName` · `record_id` — path `recordId`
- **Returns (parsed)**: `RecordDeleted`
- **Returns (raw)**: `ApiResult[RecordDeleted, DeleteRecordErrorBody]`
- **Error**: `DeleteRecordErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecordDeleted` | `airtable/models/record_deleted.py` |
| `DeleteRecordErrorBody` | `airtable/errors/delete_record_error.py` |
| `Error` | `airtable/models/error.py` |

### client.records.get_record

- **Route**: `GET /{baseId}/{tableIdOrName}/{recordId}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_record(base_id: str, table_id_or_name: str, record_id: str, *, return_fields_by_field_id: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id_or_name`, `record_id`
- **Params**: `base_id` — path `baseId` · `table_id_or_name` — path `tableIdOrName` · `record_id` — path `recordId` · `return_fields_by_field_id` — query `returnFieldsByFieldId`
- **Returns (parsed)**: `Record`
- **Returns (raw)**: `ApiResult[Record, GetRecordErrorBody]`
- **Error**: `GetRecordErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Record` | `airtable/models/record.py` |
| `GetRecordErrorBody` | `airtable/errors/get_record_error.py` |
| `Error` | `airtable/models/error.py` |

### client.records.list_records

- **Route**: `GET /{baseId}/{tableIdOrName}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_records(base_id: str, table_id_or_name: str, *, fields: list[str] | None = None, filter_by_formula: str | None = None, max_records: int | None = None, page_size: int | None = 100, sort: list[Sort | SortDict] | None = None, view: str | None = None, cell_format: CellFormatOrStr | None = None, time_zone: str | None = None, user_locale: str | None = None, return_fields_by_field_id: bool | None = None, offset: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id_or_name`
- **Params**: `base_id` — path `baseId` · `table_id_or_name` — path `tableIdOrName` · `fields` — query `fields[]` · `filter_by_formula` — query `filterByFormula` · `max_records` — query `maxRecords` · `page_size` — query `pageSize` · `sort` — query · `view` — query · `cell_format` — query `cellFormat` · `time_zone` — query `timeZone` · `user_locale` — query `userLocale` · `return_fields_by_field_id` — query `returnFieldsByFieldId` · `offset` — query
- **Returns (parsed)**: `RecordList`
- **Returns (raw)**: `ApiResult[RecordList, ListRecordsErrorBody]`
- **Error**: `ListRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Sort` | `airtable/models/sort.py` |
| `SortDict` | `airtable/models/sort.py` |
| `CellFormatOrStr` | `airtable/models/enums/cell_format.py` |
| `RecordList` | `airtable/models/record_list.py` |
| `ListRecordsErrorBody` | `airtable/errors/list_records_error.py` |
| `Error` | `airtable/models/error.py` |

### client.records.replace_record

- **Route**: `PUT /{baseId}/{tableIdOrName}/{recordId}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def replace_record(base_id: str, table_id_or_name: str, record_id: str, body: RecordIdRequest1 | RecordIdRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id_or_name`, `record_id`, `body`
- **Params**: `base_id` — path `baseId` · `table_id_or_name` — path `tableIdOrName` · `record_id` — path `recordId` · `body` — JSON body
- **Returns (parsed)**: `Record`
- **Returns (raw)**: `ApiResult[Record, ReplaceRecordErrorBody]`
- **Error**: `ReplaceRecordErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecordIdRequest1` | `airtable/models/record_id_request1.py` |
| `RecordIdRequest1Dict` | `airtable/models/record_id_request1.py` |
| `Record` | `airtable/models/record.py` |
| `ReplaceRecordErrorBody` | `airtable/errors/replace_record_error.py` |
| `Error` | `airtable/models/error.py` |

### client.records.update_record

- **Route**: `PATCH /{baseId}/{tableIdOrName}/{recordId}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_record(base_id: str, table_id_or_name: str, record_id: str, body: RecordIdRequest | RecordIdRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id_or_name`, `record_id`, `body`
- **Params**: `base_id` — path `baseId` · `table_id_or_name` — path `tableIdOrName` · `record_id` — path `recordId` · `body` — JSON body
- **Returns (parsed)**: `Record`
- **Returns (raw)**: `ApiResult[Record, UpdateRecordErrorBody]`
- **Error**: `UpdateRecordErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecordIdRequest` | `airtable/models/record_id_request.py` |
| `RecordIdRequestDict` | `airtable/models/record_id_request.py` |
| `Record` | `airtable/models/record.py` |
| `UpdateRecordErrorBody` | `airtable/errors/update_record_error.py` |
| `Error` | `airtable/models/error.py` |

