<!-- Generated file — do not edit; regenerated with the SDK. -->

# Comments — operations

Accessor: `client.comments` · Source: `airtable/apis/comments.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.comments.create_comment

- **Route**: `POST /{baseId}/{tableIdOrName}/{recordId}/comments`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_comment(base_id: str, table_id_or_name: str, record_id: str, body: RecordIdCommentsRequest | RecordIdCommentsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id_or_name`, `record_id`, `body`
- **Params**: `base_id` — path `baseId` · `table_id_or_name` — path `tableIdOrName` · `record_id` — path `recordId` · `body` — JSON body
- **Returns (parsed)**: `Comment`
- **Returns (raw)**: `ApiResult[Comment, CreateCommentErrorBody]`
- **Error**: `CreateCommentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecordIdCommentsRequest` | `airtable/models/record_id_comments_request.py` |
| `RecordIdCommentsRequestDict` | `airtable/models/record_id_comments_request.py` |
| `Comment` | `airtable/models/comment.py` |
| `CreateCommentErrorBody` | `airtable/errors/create_comment_error.py` |
| `Error` | `airtable/models/error.py` |

### client.comments.delete_comment

- **Route**: `DELETE /{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_comment(base_id: str, table_id_or_name: str, record_id: str, comment_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id_or_name`, `record_id`, `comment_id`
- **Params**: `base_id` — path `baseId` · `table_id_or_name` — path `tableIdOrName` · `record_id` — path `recordId` · `comment_id` — path `commentId`
- **Returns (parsed)**: `RecordIdCommentsCommentIdResponse`
- **Returns (raw)**: `ApiResult[RecordIdCommentsCommentIdResponse, DeleteCommentErrorBody]`
- **Error**: `DeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecordIdCommentsCommentIdResponse` | `airtable/models/record_id_comments_comment_id_response.py` |
| `DeleteCommentErrorBody` | `airtable/errors/delete_comment_error.py` |
| `Error` | `airtable/models/error.py` |

### client.comments.list_comments

- **Route**: `GET /{baseId}/{tableIdOrName}/{recordId}/comments`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_comments(base_id: str, table_id_or_name: str, record_id: str, *, offset: str | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id_or_name`, `record_id`
- **Params**: `base_id` — path `baseId` · `table_id_or_name` — path `tableIdOrName` · `record_id` — path `recordId` · `offset` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `CommentList`
- **Returns (raw)**: `ApiResult[CommentList, ListCommentsErrorBody]`
- **Error**: `ListCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CommentList` | `airtable/models/comment_list.py` |
| `ListCommentsErrorBody` | `airtable/errors/list_comments_error.py` |
| `Error` | `airtable/models/error.py` |

### client.comments.update_comment

- **Route**: `PATCH /{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_comment(base_id: str, table_id_or_name: str, record_id: str, comment_id: str, body: RecordIdCommentsCommentIdRequest | RecordIdCommentsCommentIdRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `table_id_or_name`, `record_id`, `comment_id`, `body`
- **Params**: `base_id` — path `baseId` · `table_id_or_name` — path `tableIdOrName` · `record_id` — path `recordId` · `comment_id` — path `commentId` · `body` — JSON body
- **Returns (parsed)**: `Comment`
- **Returns (raw)**: `ApiResult[Comment, UpdateCommentErrorBody]`
- **Error**: `UpdateCommentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecordIdCommentsCommentIdRequest` | `airtable/models/record_id_comments_comment_id_request.py` |
| `RecordIdCommentsCommentIdRequestDict` | `airtable/models/record_id_comments_comment_id_request.py` |
| `Comment` | `airtable/models/comment.py` |
| `UpdateCommentErrorBody` | `airtable/errors/update_comment_error.py` |
| `Error` | `airtable/models/error.py` |

