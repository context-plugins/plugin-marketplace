<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recordings — operations

Accessor: `client.recordings` · Source: `fellow/apis/recordings.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.recordings.apps_developer_api_api_delete_recording

- **Route**: `DELETE /api/v1/recording/{recording_id}`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_delete_recording(recording_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recording_id`
- **Params**: `recording_id` — path
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MessageResponse` | `fellow/models/message_response.py` |

### client.recordings.apps_developer_api_api_get_recording_by_id

- **Route**: `GET /api/v1/recording/{recording_id}`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_get_recording_by_id(recording_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recording_id`
- **Params**: `recording_id` — path
- **Returns (parsed)**: `RecordingResponse`
- **Returns (raw)**: `ApiResult[RecordingResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `RecordingResponse` | `fellow/models/recording_response.py` |

### client.recordings.apps_developer_api_api_get_recordings

- **Route**: `POST /api/v1/recordings`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_get_recordings(body: GetRecordingsRequest | GetRecordingsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RecordingsListResponse`
- **Returns (raw)**: `ApiResult[RecordingsListResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `GetRecordingsRequest` | `fellow/models/get_recordings_request.py` |
| `GetRecordingsRequestDict` | `fellow/models/get_recordings_request.py` |
| `RecordingsListResponse` | `fellow/models/recordings_list_response.py` |

### client.recordings.apps_developer_api_api_get_upload_by_id

- **Route**: `GET /api/v1/recordings/upload/{recording_id}`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_get_upload_by_id(recording_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recording_id`
- **Params**: `recording_id` — path
- **Returns (parsed)**: `RecordingUploadResponse`
- **Returns (raw)**: `ApiResult[RecordingUploadResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `RecordingUploadResponse` | `fellow/models/recording_upload_response.py` |

### client.recordings.apps_developer_api_api_list_uploads

- **Route**: `POST /api/v1/recordings/upload/list`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_list_uploads(body: GetUploadsRequest | GetUploadsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RecordingUploadsListResponse`
- **Returns (raw)**: `ApiResult[RecordingUploadsListResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `GetUploadsRequest` | `fellow/models/get_uploads_request.py` |
| `GetUploadsRequestDict` | `fellow/models/get_uploads_request.py` |
| `RecordingUploadsListResponse` | `fellow/models/recording_uploads_list_response.py` |

### client.recordings.apps_developer_api_api_upload_recording

- **Route**: `POST /api/v1/recordings/upload`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_upload_recording(body: RecordingUploadRequest | RecordingUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RecordingUploadSubmitResponse`
- **Returns (raw)**: `ApiResult[RecordingUploadSubmitResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `RecordingUploadRequest` | `fellow/models/recording_upload_request.py` |
| `RecordingUploadRequestDict` | `fellow/models/recording_upload_request.py` |
| `RecordingUploadSubmitResponse` | `fellow/models/recording_upload_submit_response.py` |

