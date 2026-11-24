<!-- Generated file — do not edit; regenerated with the SDK. -->

# Comments — operations

Accessor: `client.comments` · Source: `instagram/apis/comments.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.comments.create_comment

- **Route**: `POST /{media_id}/comments`
- **Server**: `default`
- **Signature**: `def create_comment(media_id: str, body: CommentsRequest | CommentsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `media_id`, `body`
- **Params**: `media_id` — path · `body` — JSON body
- **Returns (parsed)**: `CommentsResponse`
- **Returns (raw)**: `ApiResult[CommentsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CommentsRequest` | `instagram/models/comments_request.py` |
| `CommentsRequestDict` | `instagram/models/comments_request.py` |
| `CommentsResponse` | `instagram/models/comments_response.py` |

### client.comments.create_comment_reply

- **Route**: `POST /{comment_id}/replies`
- **Server**: `default`
- **Signature**: `def create_comment_reply(comment_id: str, body: RepliesRequest | RepliesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `body`
- **Params**: `comment_id` — path · `body` — JSON body
- **Returns (parsed)**: `RepliesResponse`
- **Returns (raw)**: `ApiResult[RepliesResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `RepliesRequest` | `instagram/models/replies_request.py` |
| `RepliesRequestDict` | `instagram/models/replies_request.py` |
| `RepliesResponse` | `instagram/models/replies_response.py` |

### client.comments.delete_comment

- **Route**: `DELETE /{comment_id}`
- **Server**: `default`
- **Signature**: `def delete_comment(comment_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `access_token`
- **Params**: `comment_id` — path · `access_token` — query
- **Returns (parsed)**: `SuccessResponse`
- **Returns (raw)**: `ApiResult[SuccessResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SuccessResponse` | `instagram/models/success_response.py` |

### client.comments.get_comment

- **Route**: `GET /{comment_id}`
- **Server**: `default`
- **Signature**: `def get_comment(comment_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `access_token`
- **Params**: `comment_id` — path · `access_token` — query · `fields` — query
- **Returns (parsed)**: `Comment`
- **Returns (raw)**: `ApiResult[Comment, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Comment` | `instagram/models/comment.py` |

### client.comments.get_comment_replies

- **Route**: `GET /{comment_id}/replies`
- **Server**: `default`
- **Signature**: `def get_comment_replies(comment_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`, `access_token`
- **Params**: `comment_id` — path · `access_token` — query · `fields` — query
- **Returns (parsed)**: `CommentList`
- **Returns (raw)**: `ApiResult[CommentList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CommentList` | `instagram/models/comment_list.py` |

### client.comments.get_media_comments

- **Route**: `GET /{media_id}/comments`
- **Server**: `default`
- **Signature**: `def get_media_comments(media_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `media_id`, `access_token`
- **Params**: `media_id` — path · `access_token` — query · `fields` — query
- **Returns (parsed)**: `CommentList`
- **Returns (raw)**: `ApiResult[CommentList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CommentList` | `instagram/models/comment_list.py` |

### client.comments.hide_comment

- **Route**: `POST /{comment_id}`
- **Server**: `default`
- **Signature**: `def hide_comment(comment_id: str, *, body: Request | RequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`
- **Params**: `comment_id` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessResponse`
- **Returns (raw)**: `ApiResult[SuccessResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Request` | `instagram/models/request.py` |
| `RequestDict` | `instagram/models/request.py` |
| `SuccessResponse` | `instagram/models/success_response.py` |

