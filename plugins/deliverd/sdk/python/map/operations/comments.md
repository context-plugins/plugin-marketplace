<!-- Generated file — do not edit; regenerated with the SDK. -->

# Comments — operations

Accessor: `client.comments` · Source: `deliverd/apis/comments.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.comments.get_api_v1_comments

- **Route**: `GET /api/v1/comments`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_comments(*, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1CommentsResponse`
- **Returns (raw)**: `ApiResult[ApiV1CommentsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1CommentsResponse` | `deliverd/models/api_v1_comments_response.py` |

### client.comments.post_api_v1_comments_by_thread_id_resolve

- **Route**: `POST /api/v1/comments/{threadId}/resolve`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_comments_by_thread_id_resolve(thread_id: UUID, *, body: ApiV1CommentsResolveRequest | ApiV1CommentsResolveRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `thread_id`
- **Params**: `thread_id` — path `threadId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1CommentsResolveRequest` | `deliverd/models/api_v1_comments_resolve_request.py` |
| `ApiV1CommentsResolveRequestDict` | `deliverd/models/api_v1_comments_resolve_request.py` |

