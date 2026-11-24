<!-- Generated file — do not edit; regenerated with the SDK. -->

# Drafts — operations

Accessor: `client.drafts` · Source: `deliverd/apis/drafts.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.drafts.post_api_v1_drafts

- **Route**: `POST /api/v1/drafts`
- **Signature**: `def post_api_v1_drafts(*, body: ApiV1DraftsRequest | ApiV1DraftsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1DraftsResponse`
- **Returns (raw)**: `ApiResult[ApiV1DraftsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1DraftsRequest` | `deliverd/models/api_v1_drafts_request.py` |
| `ApiV1DraftsRequestDict` | `deliverd/models/api_v1_drafts_request.py` |
| `ApiV1DraftsResponse` | `deliverd/models/api_v1_drafts_response.py` |

