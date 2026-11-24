<!-- Generated file — do not edit; regenerated with the SDK. -->

# FileUploads — operations

Accessor: `client.file_uploads` · Source: `contentstack/apis/file_uploads.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.file_uploads.get_project_upload_url

- **Route**: `GET /projects/upload-url`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default`
- **Signature**: `def get_project_upload_url(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `UploadUrlResponse`
- **Returns (raw)**: `ApiResult[UploadUrlResponse, GetProjectUploadUrlErrorBody]`
- **Error**: `GetProjectUploadUrlErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UploadUrlResponse` | `contentstack/models/upload_url_response.py` |
| `GetProjectUploadUrlErrorBody` | `contentstack/errors/get_project_upload_url_error.py` |
| `Error` | `contentstack/models/error.py` |

