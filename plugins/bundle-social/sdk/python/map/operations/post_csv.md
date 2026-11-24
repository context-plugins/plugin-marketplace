<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostCsv — operations

Accessor: `client.post_csv` · Source: `bundle_social/apis/post_csv.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.post_csv.post_csv_create

- **Route**: `POST /api/v1/post-csv-import/`
- **Auth**: `api_key_auth`
- **Signature**: `def post_csv_create(*, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `file` — multipart file
- **Returns (parsed)**: `ApiV1PostCsvImportResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostCsvImportResponse, PostCsvCreateErrorBody]`
- **Error**: `PostCsvCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostCsvImport400Error1` [400] · `ApiV1PostCsvImport401Error1` [401] · `ApiV1PostCsvImport403Error1` [403] · `ApiV1PostCsvImport404Error1` [404] · `ApiV1PostCsvImport429Error1` [429] · `ApiV1PostCsvImport500Error1` [500] · `ApiV1PostCsvImport502Error1` [502] · `ApiV1PostCsvImport503Error1` [503] · `ApiV1PostCsvImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostCsvImportResponse` | `bundle_social/models/api_v1_post_csv_import_response.py` |
| `PostCsvCreateErrorBody` | `bundle_social/errors/post_csv_create_error.py` |
| `ApiV1PostCsvImport400Error1` | `bundle_social/models/api_v1_post_csv_import400_error1.py` |
| `ApiV1PostCsvImport401Error1` | `bundle_social/models/api_v1_post_csv_import401_error1.py` |
| `ApiV1PostCsvImport403Error1` | `bundle_social/models/api_v1_post_csv_import403_error1.py` |
| `ApiV1PostCsvImport404Error1` | `bundle_social/models/api_v1_post_csv_import404_error1.py` |
| `ApiV1PostCsvImport429Error1` | `bundle_social/models/api_v1_post_csv_import429_error1.py` |
| `ApiV1PostCsvImport500Error1` | `bundle_social/models/api_v1_post_csv_import500_error1.py` |
| `ApiV1PostCsvImport502Error1` | `bundle_social/models/api_v1_post_csv_import502_error1.py` |
| `ApiV1PostCsvImport503Error1` | `bundle_social/models/api_v1_post_csv_import503_error1.py` |
| `ApiV1PostCsvImport504Error1` | `bundle_social/models/api_v1_post_csv_import504_error1.py` |

### client.post_csv.post_csv_get_by_id

- **Route**: `GET /api/v1/post-csv-import/{importId}`
- **Auth**: `api_key_auth`
- **Signature**: `def post_csv_get_by_id(import_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path `importId`
- **Returns (parsed)**: `ApiV1PostCsvImportResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostCsvImportResponse, PostCsvGetByIdErrorBody]`
- **Error**: `PostCsvGetByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostCsvImport400Error1` [400] · `ApiV1PostCsvImport401Error1` [401] · `ApiV1PostCsvImport403Error1` [403] · `ApiV1PostCsvImport404Error1` [404] · `ApiV1PostCsvImport429Error1` [429] · `ApiV1PostCsvImport500Error1` [500] · `ApiV1PostCsvImport502Error1` [502] · `ApiV1PostCsvImport503Error1` [503] · `ApiV1PostCsvImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostCsvImportResponse` | `bundle_social/models/api_v1_post_csv_import_response.py` |
| `PostCsvGetByIdErrorBody` | `bundle_social/errors/post_csv_get_by_id_error.py` |
| `ApiV1PostCsvImport400Error1` | `bundle_social/models/api_v1_post_csv_import400_error1.py` |
| `ApiV1PostCsvImport401Error1` | `bundle_social/models/api_v1_post_csv_import401_error1.py` |
| `ApiV1PostCsvImport403Error1` | `bundle_social/models/api_v1_post_csv_import403_error1.py` |
| `ApiV1PostCsvImport404Error1` | `bundle_social/models/api_v1_post_csv_import404_error1.py` |
| `ApiV1PostCsvImport429Error1` | `bundle_social/models/api_v1_post_csv_import429_error1.py` |
| `ApiV1PostCsvImport500Error1` | `bundle_social/models/api_v1_post_csv_import500_error1.py` |
| `ApiV1PostCsvImport502Error1` | `bundle_social/models/api_v1_post_csv_import502_error1.py` |
| `ApiV1PostCsvImport503Error1` | `bundle_social/models/api_v1_post_csv_import503_error1.py` |
| `ApiV1PostCsvImport504Error1` | `bundle_social/models/api_v1_post_csv_import504_error1.py` |

### client.post_csv.post_csv_get_list

- **Route**: `GET /api/v1/post-csv-import/`
- **Auth**: `api_key_auth`
- **Signature**: `def post_csv_get_list(*, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `offset` — query · `limit` — query
- **Returns (parsed)**: `ApiV1PostCsvImportResponse1`
- **Returns (raw)**: `ApiResult[ApiV1PostCsvImportResponse1, PostCsvGetListErrorBody]`
- **Error**: `PostCsvGetListErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostCsvImport400Error1` [400] · `ApiV1PostCsvImport401Error1` [401] · `ApiV1PostCsvImport403Error1` [403] · `ApiV1PostCsvImport404Error1` [404] · `ApiV1PostCsvImport429Error1` [429] · `ApiV1PostCsvImport500Error1` [500] · `ApiV1PostCsvImport502Error1` [502] · `ApiV1PostCsvImport503Error1` [503] · `ApiV1PostCsvImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostCsvImportResponse1` | `bundle_social/models/api_v1_post_csv_import_response1.py` |
| `PostCsvGetListErrorBody` | `bundle_social/errors/post_csv_get_list_error.py` |
| `ApiV1PostCsvImport400Error1` | `bundle_social/models/api_v1_post_csv_import400_error1.py` |
| `ApiV1PostCsvImport401Error1` | `bundle_social/models/api_v1_post_csv_import401_error1.py` |
| `ApiV1PostCsvImport403Error1` | `bundle_social/models/api_v1_post_csv_import403_error1.py` |
| `ApiV1PostCsvImport404Error1` | `bundle_social/models/api_v1_post_csv_import404_error1.py` |
| `ApiV1PostCsvImport429Error1` | `bundle_social/models/api_v1_post_csv_import429_error1.py` |
| `ApiV1PostCsvImport500Error1` | `bundle_social/models/api_v1_post_csv_import500_error1.py` |
| `ApiV1PostCsvImport502Error1` | `bundle_social/models/api_v1_post_csv_import502_error1.py` |
| `ApiV1PostCsvImport503Error1` | `bundle_social/models/api_v1_post_csv_import503_error1.py` |
| `ApiV1PostCsvImport504Error1` | `bundle_social/models/api_v1_post_csv_import504_error1.py` |

### client.post_csv.post_csv_get_rows

- **Route**: `GET /api/v1/post-csv-import/{importId}/rows`
- **Auth**: `api_key_auth`
- **Signature**: `def post_csv_get_rows(import_id: str, *, status: Status4BundleSocialPostCsvApiOrStr | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path `importId` · `status` — query · `offset` — query · `limit` — query
- **Returns (parsed)**: `ApiV1PostCsvImportRowsResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostCsvImportRowsResponse, PostCsvGetRowsErrorBody]`
- **Error**: `PostCsvGetRowsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostCsvImportRows400Error1` [400] · `ApiV1PostCsvImportRows401Error1` [401] · `ApiV1PostCsvImportRows403Error1` [403] · `ApiV1PostCsvImportRows404Error1` [404] · `ApiV1PostCsvImportRows429Error1` [429] · `ApiV1PostCsvImportRows500Error1` [500] · `ApiV1PostCsvImportRows502Error1` [502] · `ApiV1PostCsvImportRows503Error1` [503] · `ApiV1PostCsvImportRows504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status4BundleSocialPostCsvApiOrStr` | `bundle_social/models/enums/status4_bundle_social_post_csv_api.py` |
| `ApiV1PostCsvImportRowsResponse` | `bundle_social/models/api_v1_post_csv_import_rows_response.py` |
| `PostCsvGetRowsErrorBody` | `bundle_social/errors/post_csv_get_rows_error.py` |
| `ApiV1PostCsvImportRows400Error1` | `bundle_social/models/api_v1_post_csv_import_rows400_error1.py` |
| `ApiV1PostCsvImportRows401Error1` | `bundle_social/models/api_v1_post_csv_import_rows401_error1.py` |
| `ApiV1PostCsvImportRows403Error1` | `bundle_social/models/api_v1_post_csv_import_rows403_error1.py` |
| `ApiV1PostCsvImportRows404Error1` | `bundle_social/models/api_v1_post_csv_import_rows404_error1.py` |
| `ApiV1PostCsvImportRows429Error1` | `bundle_social/models/api_v1_post_csv_import_rows429_error1.py` |
| `ApiV1PostCsvImportRows500Error1` | `bundle_social/models/api_v1_post_csv_import_rows500_error1.py` |
| `ApiV1PostCsvImportRows502Error1` | `bundle_social/models/api_v1_post_csv_import_rows502_error1.py` |
| `ApiV1PostCsvImportRows503Error1` | `bundle_social/models/api_v1_post_csv_import_rows503_error1.py` |
| `ApiV1PostCsvImportRows504Error1` | `bundle_social/models/api_v1_post_csv_import_rows504_error1.py` |

### client.post_csv.post_csv_get_status

- **Route**: `GET /api/v1/post-csv-import/{importId}/status`
- **Auth**: `api_key_auth`
- **Signature**: `def post_csv_get_status(import_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path `importId`
- **Returns (parsed)**: `ApiV1PostCsvImportStatusResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostCsvImportStatusResponse, PostCsvGetStatusErrorBody]`
- **Error**: `PostCsvGetStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostCsvImportStatus400Error1` [400] · `ApiV1PostCsvImportStatus401Error1` [401] · `ApiV1PostCsvImportStatus403Error1` [403] · `ApiV1PostCsvImportStatus404Error1` [404] · `ApiV1PostCsvImportStatus429Error1` [429] · `ApiV1PostCsvImportStatus500Error1` [500] · `ApiV1PostCsvImportStatus502Error1` [502] · `ApiV1PostCsvImportStatus503Error1` [503] · `ApiV1PostCsvImportStatus504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostCsvImportStatusResponse` | `bundle_social/models/api_v1_post_csv_import_status_response.py` |
| `PostCsvGetStatusErrorBody` | `bundle_social/errors/post_csv_get_status_error.py` |
| `ApiV1PostCsvImportStatus400Error1` | `bundle_social/models/api_v1_post_csv_import_status400_error1.py` |
| `ApiV1PostCsvImportStatus401Error1` | `bundle_social/models/api_v1_post_csv_import_status401_error1.py` |
| `ApiV1PostCsvImportStatus403Error1` | `bundle_social/models/api_v1_post_csv_import_status403_error1.py` |
| `ApiV1PostCsvImportStatus404Error1` | `bundle_social/models/api_v1_post_csv_import_status404_error1.py` |
| `ApiV1PostCsvImportStatus429Error1` | `bundle_social/models/api_v1_post_csv_import_status429_error1.py` |
| `ApiV1PostCsvImportStatus500Error1` | `bundle_social/models/api_v1_post_csv_import_status500_error1.py` |
| `ApiV1PostCsvImportStatus502Error1` | `bundle_social/models/api_v1_post_csv_import_status502_error1.py` |
| `ApiV1PostCsvImportStatus503Error1` | `bundle_social/models/api_v1_post_csv_import_status503_error1.py` |
| `ApiV1PostCsvImportStatus504Error1` | `bundle_social/models/api_v1_post_csv_import_status504_error1.py` |

