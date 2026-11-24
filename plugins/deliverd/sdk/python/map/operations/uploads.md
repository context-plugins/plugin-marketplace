<!-- Generated file — do not edit; regenerated with the SDK. -->

# Uploads — operations

Accessor: `client.uploads` · Source: `deliverd/apis/uploads.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.uploads.post_api_v1_uploads

- **Route**: `POST /api/v1/uploads`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_uploads(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1UploadsResponse`
- **Returns (raw)**: `ApiResult[ApiV1UploadsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1UploadsResponse` | `deliverd/models/api_v1_uploads_response.py` |

