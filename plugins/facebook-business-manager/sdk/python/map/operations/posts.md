<!-- Generated file — do not edit; regenerated with the SDK. -->

# Posts — operations

Accessor: `client.posts` · Source: `facebook_business_manager/apis/posts.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.posts.create_page_post

- **Route**: `POST /{page_id}/feed`
- **Auth**: `bearer_auth`
- **Signature**: `def create_page_post(page_id: str, body: PostCreate | PostCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`, `body`
- **Params**: `page_id` — path · `body` — JSON body
- **Returns (parsed)**: `CreateResponse`
- **Returns (raw)**: `ApiResult[CreateResponse, CreatePagePostErrorBody]`
- **Error**: `CreatePagePostErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostCreate` | `facebook_business_manager/models/post_create.py` |
| `PostCreateDict` | `facebook_business_manager/models/post_create.py` |
| `CreateResponse` | `facebook_business_manager/models/create_response.py` |
| `CreatePagePostErrorBody` | `facebook_business_manager/errors/create_page_post_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.posts.delete_post

- **Route**: `DELETE /{post_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_post(post_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `post_id`
- **Params**: `post_id` — path
- **Returns (parsed)**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Returns (raw)**: `ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, DeletePostErrorBody]`
- **Error**: `DeletePostErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py` |
| `DeletePostErrorBody` | `facebook_business_manager/errors/delete_post_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.posts.get_page_feed

- **Route**: `GET /{page_id}/feed`
- **Auth**: `bearer_auth`
- **Signature**: `def get_page_feed(page_id: str, *, fields: str | None = None, limit: int | None = 25, after: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`
- **Params**: `page_id` — path · `fields` — query · `limit` — query · `after` — query
- **Returns (parsed)**: `PostList`
- **Returns (raw)**: `ApiResult[PostList, GetPageFeedErrorBody]`
- **Error**: `GetPageFeedErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostList` | `facebook_business_manager/models/post_list.py` |
| `GetPageFeedErrorBody` | `facebook_business_manager/errors/get_page_feed_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.posts.get_post

- **Route**: `GET /{post_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_post(post_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `post_id`
- **Params**: `post_id` — path · `fields` — query
- **Returns (parsed)**: `Post`
- **Returns (raw)**: `ApiResult[Post, GetPostErrorBody]`
- **Error**: `GetPostErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Post` | `facebook_business_manager/models/post.py` |
| `GetPostErrorBody` | `facebook_business_manager/errors/get_post_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.posts.update_post

- **Route**: `POST /{post_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_post(post_id: str, body: Request | RequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `post_id`, `body`
- **Params**: `post_id` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Returns (raw)**: `ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, UpdatePostErrorBody]`
- **Error**: `UpdatePostErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Request` | `facebook_business_manager/models/request.py` |
| `RequestDict` | `facebook_business_manager/models/request.py` |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `facebook_business_manager/models/success_response_facebook_business_manager_facebook_pages_comments_api.py` |
| `UpdatePostErrorBody` | `facebook_business_manager/errors/update_post_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

