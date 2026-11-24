<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataHub — operations

Accessor: `client.data_hub` · Source: `doi_t/apis/data_hub.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_hub.create_datahub_dataset

- **Route**: `POST /datahub/v1/datasets`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_datahub_dataset(body: DatahubV1DatasetsRequest | DatahubV1DatasetsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DatahubV1DatasetsResponse1`
- **Returns (raw)**: `ApiResult[DatahubV1DatasetsResponse1, CreateDatahubDatasetErrorBody]`
- **Error**: `CreateDatahubDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatahubV1DatasetsRequest` | `doi_t/models/datahub_v1_datasets_request.py` |
| `DatahubV1DatasetsRequestDict` | `doi_t/models/datahub_v1_datasets_request.py` |
| `DatahubV1DatasetsResponse1` | `doi_t/models/datahub_v1_datasets_response1.py` |
| `CreateDatahubDatasetErrorBody` | `doi_t/errors/create_datahub_dataset_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.data_hub.datahub_events

- **Route**: `POST /datahub/v1/events`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def datahub_events(body: DatahubV1EventsRequest | DatahubV1EventsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DatahubV1EventsResponse`
- **Returns (raw)**: `ApiResult[DatahubV1EventsResponse, DatahubEventsErrorBody]`
- **Error**: `DatahubEventsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatahubV1EventsRequest` | `doi_t/models/datahub_v1_events_request.py` |
| `DatahubV1EventsRequestDict` | `doi_t/models/datahub_v1_events_request.py` |
| `DatahubV1EventsResponse` | `doi_t/models/datahub_v1_events_response.py` |
| `DatahubEventsErrorBody` | `doi_t/errors/datahub_events_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.data_hub.datahub_events_csv_file

- **Route**: `POST /datahub/v1/csv/upload`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def datahub_events_csv_file(*, provider: str | None = None, file: FileInput | None = None, schema_template: str | None = None, period_start: Date | None = None, period_end: Date | None = None, replace: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `provider` — multipart field · `file` — multipart file · `schema_template` — multipart field `schemaTemplate` · `period_start` — multipart field `periodStart` · `period_end` — multipart field `periodEnd` · `replace` — multipart field
- **Returns (parsed)**: `DatahubV1CsvUploadResponse`
- **Returns (raw)**: `ApiResult[DatahubV1CsvUploadResponse, DatahubEventsCsvFileErrorBody]`
- **Error**: `DatahubEventsCsvFileErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatahubV1CsvUploadResponse` | `doi_t/models/datahub_v1_csv_upload_response.py` |
| `DatahubEventsCsvFileErrorBody` | `doi_t/errors/datahub_events_csv_file_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.data_hub.datahub_import_provider_records

- **Route**: `POST /datahub/v1/import`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def datahub_import_provider_records(body: DatahubV1ImportRequest | DatahubV1ImportRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DatahubV1ImportResponse`
- **Returns (raw)**: `ApiResult[DatahubV1ImportResponse, DatahubImportProviderRecordsErrorBody]`
- **Error**: `DatahubImportProviderRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatahubV1ImportRequest` | `doi_t/models/datahub_v1_import_request.py` |
| `DatahubV1ImportRequestDict` | `doi_t/models/datahub_v1_import_request.py` |
| `DatahubV1ImportResponse` | `doi_t/models/datahub_v1_import_response.py` |
| `DatahubImportProviderRecordsErrorBody` | `doi_t/errors/datahub_import_provider_records_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.data_hub.delete_datahub_dataset

- **Route**: `DELETE /datahub/v1/datasets/{name}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_datahub_dataset(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path
- **Returns (parsed)**: `DatahubV1DatasetsResponse2`
- **Returns (raw)**: `ApiResult[DatahubV1DatasetsResponse2, DeleteDatahubDatasetErrorBody]`
- **Error**: `DeleteDatahubDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatahubV1DatasetsResponse2` | `doi_t/models/datahub_v1_datasets_response2.py` |
| `DeleteDatahubDatasetErrorBody` | `doi_t/errors/delete_datahub_dataset_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.data_hub.delete_datahub_datasets

- **Route**: `DELETE /datahub/v1/datasets`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_datahub_datasets(body: DatahubV1DatasetsRequest1 | DatahubV1DatasetsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DatahubV1DatasetsResponse2`
- **Returns (raw)**: `ApiResult[DatahubV1DatasetsResponse2, DeleteDatahubDatasetsErrorBody]`
- **Error**: `DeleteDatahubDatasetsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatahubV1DatasetsRequest1` | `doi_t/models/datahub_v1_datasets_request1.py` |
| `DatahubV1DatasetsRequest1Dict` | `doi_t/models/datahub_v1_datasets_request1.py` |
| `DatahubV1DatasetsResponse2` | `doi_t/models/datahub_v1_datasets_response2.py` |
| `DeleteDatahubDatasetsErrorBody` | `doi_t/errors/delete_datahub_datasets_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.data_hub.delete_datahub_events_by_filter

- **Route**: `POST /datahub/v1/events/delete`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_datahub_events_by_filter(body: DatahubV1EventsDeleteRequest | DatahubV1EventsDeleteRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DatahubV1EventsDeleteResponse`
- **Returns (raw)**: `ApiResult[DatahubV1EventsDeleteResponse, DeleteDatahubEventsByFilterErrorBody]`
- **Error**: `DeleteDatahubEventsByFilterErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatahubV1EventsDeleteRequest` | `doi_t/models/datahub_v1_events_delete_request.py` |
| `DatahubV1EventsDeleteRequestDict` | `doi_t/models/datahub_v1_events_delete_request.py` |
| `DatahubV1EventsDeleteResponse` | `doi_t/models/datahub_v1_events_delete_response.py` |
| `DeleteDatahubEventsByFilterErrorBody` | `doi_t/errors/delete_datahub_events_by_filter_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.data_hub.export_datahub_dataset_records

- **Route**: `GET /datahub/v1/datasets/{name}/records`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def export_datahub_dataset_records(name: str, start_time: RFC3339DateTime, end_time: RFC3339DateTime, *, format_: FormatOrStr | None = Format.CSV, max_results: int | None = 10000, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `start_time`, `end_time`
- **Params**: `name` — path · `start_time` — query `startTime` · `end_time` — query `endTime` · `format_` — query `format` · `max_results` — query `maxResults` · `page_token` — query `pageToken`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, ExportDatahubDatasetRecordsErrorBody]`
- **Error**: `ExportDatahubDatasetRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `doi_t/models/enums/format.py` |
| `ExportDatahubDatasetRecordsErrorBody` | `doi_t/errors/export_datahub_dataset_records_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.data_hub.get_datahub_dataset

- **Route**: `GET /datahub/v1/datasets/{name}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_datahub_dataset(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path
- **Returns (parsed)**: `DatahubV1DatasetsResponse4`
- **Returns (raw)**: `ApiResult[DatahubV1DatasetsResponse4, GetDatahubDatasetErrorBody]`
- **Error**: `GetDatahubDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatahubV1DatasetsResponse4` | `doi_t/models/datahub_v1_datasets_response4.py` |
| `GetDatahubDatasetErrorBody` | `doi_t/errors/get_datahub_dataset_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.data_hub.list_datahub_datasets

- **Route**: `GET /datahub/v1/datasets`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_datahub_datasets(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `DatahubV1DatasetsResponse`
- **Returns (raw)**: `ApiResult[DatahubV1DatasetsResponse, ListDatahubDatasetsErrorBody]`
- **Error**: `ListDatahubDatasetsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatahubV1DatasetsResponse` | `doi_t/models/datahub_v1_datasets_response.py` |
| `ListDatahubDatasetsErrorBody` | `doi_t/errors/list_datahub_datasets_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.data_hub.update_datahub_dataset

- **Route**: `PATCH /datahub/v1/datasets/{name}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_datahub_dataset(name: str, body: DatahubV1DatasetsRequest2 | DatahubV1DatasetsRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`, `body`
- **Params**: `name` — path · `body` — JSON body
- **Returns (parsed)**: `DatahubV1DatasetsResponse1`
- **Returns (raw)**: `ApiResult[DatahubV1DatasetsResponse1, UpdateDatahubDatasetErrorBody]`
- **Error**: `UpdateDatahubDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatahubV1DatasetsRequest2` | `doi_t/models/datahub_v1_datasets_request2.py` |
| `DatahubV1DatasetsRequest2Dict` | `doi_t/models/datahub_v1_datasets_request2.py` |
| `DatahubV1DatasetsResponse1` | `doi_t/models/datahub_v1_datasets_response1.py` |
| `UpdateDatahubDatasetErrorBody` | `doi_t/errors/update_datahub_dataset_error.py` |
| `Error` | `doi_t/models/error.py` |

