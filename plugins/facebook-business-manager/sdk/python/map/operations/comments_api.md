<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommentsApi — operations

Accessor: `client.comments_api` · Source: `facebook_business_manager/apis/comments_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.comments_api.create_comment

- **Route**: `POST /{post_id}/comments`
- **Auth**: `bearer_auth`
- **Signature**: `def create_comment(post_id: str, body: CommentsRequest | CommentsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `post_id`, `body`
- **Params**: `post_id` — path · `body` — JSON body
- **Returns (parsed)**: `CreateResponse`
- **Returns (raw)**: `ApiResult[CreateResponse, CreateCommentErrorBody]`
- **Error**: `CreateCommentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CommentsRequest` | `facebook_business_manager/models/comments_request.py` |
| `CommentsRequestDict` | `facebook_business_manager/models/comments_request.py` |
| `CreateResponse` | `facebook_business_manager/models/create_response.py` |
| `CreateCommentErrorBody` | `facebook_business_manager/errors/create_comment_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.comments_api.delete_comment

- **Route**: `DELETE /{comment_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_comment(comment_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`
- **Params**: `comment_id` — path
- **Returns (parsed)**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Returns (raw)**: `ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, DeleteCommentErrorBody]`
- **Error**: `DeleteCommentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py` |
| `DeleteCommentErrorBody` | `facebook_business_manager/errors/delete_comment_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.comments_api.get_post_comments

- **Route**: `GET /{post_id}/comments`
- **Auth**: `bearer_auth`
- **Signature**: `def get_post_comments(post_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, filter_: FilterOrStr | None = None, order: OrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `post_id`
- **Params**: `post_id` — path · `fields` — query · `limit` — query · `after` — query · `filter_` — query `filter` · `order` — query
- **Returns (parsed)**: `CommentList`
- **Returns (raw)**: `ApiResult[CommentList, GetPostCommentsErrorBody]`
- **Error**: `GetPostCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FilterOrStr` | `facebook_business_manager/models/enums/filter.py` |
| `OrderOrStr` | `facebook_business_manager/models/enums/order.py` |
| `CommentList` | `facebook_business_manager/models/comment_list.py` |
| `GetPostCommentsErrorBody` | `facebook_business_manager/errors/get_post_comments_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

