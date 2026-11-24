<!-- Generated file — do not edit; regenerated with the SDK. -->

# BatchImport — operations

Accessor: `client.batch_import` · Source: `flow_account/apis/batch_import.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.batch_import.batch_import_delete_custom_template

- **Route**: `DELETE /{culture}/cash-invoices/custom-template/{templateId}`
- **Auth**: `bearer`
- **Signature**: `def batch_import_delete_custom_template(template_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `template_id`, `culture`
- **Params**: `template_id` — path `templateId` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.batch_import.batch_import_generate_bacth_id_metadata

- **Route**: `GET /{culture}/cash-invoices/batch-metadata`
- **Auth**: `bearer`
- **Signature**: `def batch_import_generate_bacth_id_metadata(culture: str, *, file_name: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path · `file_name` — query `fileName`
- **Returns (parsed)**: `BatchImportMetadata`
- **Returns (raw)**: `ApiResult[BatchImportMetadata, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportMetadata` | `flow_account/models/batch_import_metadata.py` |

### client.batch_import.batch_import_get_batch_s3_data

- **Route**: `GET /{culture}/cash-invoices/get-batch-s3-data/{batchId}`
- **Auth**: `bearer`
- **Signature**: `def batch_import_get_batch_s3_data(batch_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `batch_id`, `culture`
- **Params**: `batch_id` — path `batchId` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.batch_import.batch_import_get_custom_template

- **Route**: `GET /{culture}/cash-invoices/custom-template/{templateId}`
- **Auth**: `bearer`
- **Signature**: `def batch_import_get_custom_template(template_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `template_id`, `culture`
- **Params**: `template_id` — path `templateId` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.batch_import.batch_import_get_orgingal_file

- **Route**: `GET /{culture}/cash-invoices/get-batch-import-org-file/{batchId}`
- **Auth**: `bearer`
- **Signature**: `def batch_import_get_orgingal_file(batch_id: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `batch_id`, `culture`
- **Params**: `batch_id` — path `batchId` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.batch_import.batch_import_get_presign

- **Route**: `POST /{culture}/cash-invoices/get-presign-for-upload-simpledoc`
- **Auth**: `bearer`
- **Signature**: `def batch_import_get_presign(culture: str, body: BatchImportPayload | BatchImportPayloadDict, *, id_: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `id_` — query `id` · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportPayload` | `flow_account/models/batch_import_payload.py` |
| `BatchImportPayloadDict` | `flow_account/models/batch_import_payload.py` |

### client.batch_import.batch_import_mark_viewed

- **Route**: `POST /{culture}/cash-invoices/mark-viewed`
- **Auth**: `bearer`
- **Signature**: `def batch_import_mark_viewed(culture: str, body: int, *, user_id: int | None = None, batch_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `user_id` — query `userId` · `batch_id` — query `batchId` · `body` — JSON body
- **Returns (parsed)**: `bool`
- **Returns (raw)**: `ApiResult[bool, RawError]`
- **Error**: `RawError` — **Case B**

### client.batch_import.batch_import_query_batch

- **Route**: `POST /{culture}/cash-invoices/query-batch`
- **Auth**: `bearer`
- **Signature**: `def batch_import_query_batch(culture: str, body: str, *, status: BatchImportStatusOrInt | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `status` — query · `body` — JSON body
- **Returns (parsed)**: `BatchStatus`
- **Returns (raw)**: `ApiResult[BatchStatus, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportStatusOrInt` | `flow_account/models/enums/batch_import_status.py` |
| `BatchStatus` | `flow_account/models/batch_status.py` |

### client.batch_import.batch_import_query_batch_history

- **Route**: `POST /{culture}/cash-invoices/batch-import-history`
- **Auth**: `bearer`
- **Signature**: `def batch_import_query_batch_history(culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path
- **Returns (parsed)**: `BatchHistory`
- **Returns (raw)**: `ApiResult[BatchHistory, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `BatchHistory` | `flow_account/models/batch_history.py` |

### client.batch_import.batch_import_retry_simple_documents

- **Route**: `POST /{culture}/cash-invoices/retry-simple-documents`
- **Auth**: `bearer`
- **Signature**: `def batch_import_retry_simple_documents(culture: str, body: BatchImportRetry | BatchImportRetryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `body` — JSON body
- **Returns (parsed)**: `bool`
- **Returns (raw)**: `ApiResult[bool, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `BatchImportRetry` | `flow_account/models/batch_import_retry.py` |
| `BatchImportRetryDict` | `flow_account/models/batch_import_retry.py` |

### client.batch_import.batch_import_upsert_custom_template

- **Route**: `POST /{culture}/cash-invoices/custom-template`
- **Auth**: `bearer`
- **Signature**: `def batch_import_upsert_custom_template(culture: str, body: CustomTemplate | CustomTemplateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CustomTemplate` | `flow_account/models/custom_template.py` |
| `CustomTemplateDict` | `flow_account/models/custom_template.py` |

