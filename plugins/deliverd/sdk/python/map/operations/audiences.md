<!-- Generated file — do not edit; regenerated with the SDK. -->

# Audiences — operations

Accessor: `client.audiences` · Source: `deliverd/apis/audiences.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.audiences.post_api_v1_audiences_resolve

- **Route**: `POST /api/v1/audiences/resolve`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_audiences_resolve(*, body: ApiV1AudiencesResolveRequest | ApiV1AudiencesResolveRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1AudiencesResolveResponse`
- **Returns (raw)**: `ApiResult[ApiV1AudiencesResolveResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1AudiencesResolveRequest` | `deliverd/models/api_v1_audiences_resolve_request.py` |
| `ApiV1AudiencesResolveRequestDict` | `deliverd/models/api_v1_audiences_resolve_request.py` |
| `ApiV1AudiencesResolveResponse` | `deliverd/models/api_v1_audiences_resolve_response.py` |

