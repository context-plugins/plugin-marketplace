<!-- Generated file — do not edit; regenerated with the SDK. -->

# Posts — operations

Accessor: `client.posts` · Source: `beehiiv/apis/posts.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.posts.aggregate_stats

- **Route**: `GET /publications/{publicationId}/posts/aggregate_stats`
- **Server**: `default`
- **Signature**: `def aggregate_stats(publication_id: str, authorization: str, *, audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL, platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL, status: PostStatusFilterOrStr | None = PostStatusFilter.ALL, content_tags: list[str] | None = None, authors: list[str] | None = None, hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `audience` — query · `platform` — query · `status` — query · `content_tags` — query `content_tags[]` · `authors` — query `authors[]` · `hidden_from_feed` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PostsAggregateStatsResponse`
- **Returns (raw)**: `ApiResult[PostsAggregateStatsResponse, AggregateStatsErrorBody]`
- **Error**: `AggregateStatsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostAudienceFilterOrStr` | `beehiiv/models/enums/post_audience_filter.py` |
| `PostPlatformFilterOrStr` | `beehiiv/models/enums/post_platform_filter.py` |
| `PostStatusFilterOrStr` | `beehiiv/models/enums/post_status_filter.py` |
| `PostsListRequestHiddenFromFeedOrStr` | `beehiiv/models/enums/posts_list_request_hidden_from_feed.py` |
| `PostsAggregateStatsResponse` | `beehiiv/models/posts_aggregate_stats_response.py` |
| `AggregateStatsErrorBody` | `beehiiv/errors/aggregate_stats_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.posts.create8

- **Route**: `POST /publications/{publicationId}/posts`
- **Server**: `default`
- **Signature**: `def create8(publication_id: str, authorization: str, *, body: PublicationsPostsRequest | PublicationsPostsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `PostsCreateResponse`
- **Returns (raw)**: `ApiResult[PostsCreateResponse, Create8ErrorBody]`
- **Error**: `Create8ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsPostsRequest` | `beehiiv/models/publications_posts_request.py` |
| `PublicationsPostsRequestDict` | `beehiiv/models/publications_posts_request.py` |
| `PostsCreateResponse` | `beehiiv/models/posts_create_response.py` |
| `Create8ErrorBody` | `beehiiv/errors/create8_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.posts.delete3

- **Route**: `DELETE /publications/{publicationId}/posts/{postId}`
- **Server**: `default`
- **Signature**: `def delete3(publication_id: str, post_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `post_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `post_id` — path `postId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `PostProcessing`
- **Returns (raw)**: `ApiResult[PostProcessing, Delete3ErrorBody]`
- **Error**: `Delete3ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostProcessing` | `beehiiv/models/post_processing.py` |
| `Delete3ErrorBody` | `beehiiv/errors/delete3_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.posts.index17

- **Route**: `GET /publications/{publicationId}/posts`
- **Server**: `default`
- **Signature**: `def index17(publication_id: str, authorization: str, *, expand: list[PostExpandFieldOrStr] | None = None, audience: PostAudienceFilterOrStr | None = PostAudienceFilter.ALL, platform: PostPlatformFilterOrStr | None = PostPlatformFilter.ALL, status: PostStatusFilterOrStr | None = PostStatusFilter.ALL, content_tags: list[str] | None = None, slugs: list[str] | None = None, authors: list[str] | None = None, premium_tiers: list[str] | None = None, limit: int | None = None, page: int | None = None, order_by: PostOrderByOrStr | None = PostOrderBy.CREATED, direction: RequestDirectionOrStr | None = RequestDirection.ASC, hidden_from_feed: PostsListRequestHiddenFromFeedOrStr | None = PostsListRequestHiddenFromFeed.ALL, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `expand` — query · `audience` — query · `platform` — query · `status` — query · `content_tags` — query `content_tags[]` · `slugs` — query `slugs[]` · `authors` — query `authors[]` · `premium_tiers` — query · `limit` — query · `page` — query · `order_by` — query · `direction` — query · `hidden_from_feed` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PostsListResponse`
- **Returns (raw)**: `ApiResult[PostsListResponse, Index17ErrorBody]`
- **Error**: `Index17ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostExpandFieldOrStr` | `beehiiv/models/enums/post_expand_field.py` |
| `PostAudienceFilterOrStr` | `beehiiv/models/enums/post_audience_filter.py` |
| `PostPlatformFilterOrStr` | `beehiiv/models/enums/post_platform_filter.py` |
| `PostStatusFilterOrStr` | `beehiiv/models/enums/post_status_filter.py` |
| `PostOrderByOrStr` | `beehiiv/models/enums/post_order_by.py` |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `PostsListRequestHiddenFromFeedOrStr` | `beehiiv/models/enums/posts_list_request_hidden_from_feed.py` |
| `PostsListResponse` | `beehiiv/models/posts_list_response.py` |
| `Index17ErrorBody` | `beehiiv/errors/index17_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.posts.preview

- **Route**: `GET /publications/{publicationId}/posts/{postId}/preview`
- **Server**: `default`
- **Signature**: `def preview(publication_id: str, post_id: str, authorization: str, *, platform: str | None = None, subscriber_type: str | None = None, tier_ids: list[str] | None = None, subscriber_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `post_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `post_id` — path `postId` · `platform` — query · `subscriber_type` — query · `tier_ids` — query · `subscriber_id` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PostsPreviewResponse`
- **Returns (raw)**: `ApiResult[PostsPreviewResponse, PreviewErrorBody]`
- **Error**: `PreviewErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostsPreviewResponse` | `beehiiv/models/posts_preview_response.py` |
| `PreviewErrorBody` | `beehiiv/errors/preview_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.posts.show12

- **Route**: `GET /publications/{publicationId}/posts/{postId}`
- **Server**: `default`
- **Signature**: `def show12(publication_id: str, post_id: str, authorization: str, *, expand: list[PostExpandFieldOrStr] | None = None, premium_tiers: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `post_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `post_id` — path `postId` · `expand` — query · `premium_tiers` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PostsGetResponse`
- **Returns (raw)**: `ApiResult[PostsGetResponse, Show12ErrorBody]`
- **Error**: `Show12ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostExpandFieldOrStr` | `beehiiv/models/enums/post_expand_field.py` |
| `PostsGetResponse` | `beehiiv/models/posts_get_response.py` |
| `Show12ErrorBody` | `beehiiv/errors/show12_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.posts.test_send

- **Route**: `POST /publications/{publicationId}/posts/{postId}/test_sends`
- **Server**: `default`
- **Signature**: `def test_send(publication_id: str, post_id: str, authorization: str, *, body: PublicationsPostsTestSendsRequest | PublicationsPostsTestSendsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `post_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `post_id` — path `postId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `PostsTestSendResponse`
- **Returns (raw)**: `ApiResult[PostsTestSendResponse, TestSendErrorBody]`
- **Error**: `TestSendErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsPostsTestSendsRequest` | `beehiiv/models/publications_posts_test_sends_request.py` |
| `PublicationsPostsTestSendsRequestDict` | `beehiiv/models/publications_posts_test_sends_request.py` |
| `PostsTestSendResponse` | `beehiiv/models/posts_test_send_response.py` |
| `TestSendErrorBody` | `beehiiv/errors/test_send_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.posts.update3

- **Route**: `PATCH /publications/{publicationId}/posts/{postId}`
- **Server**: `default`
- **Signature**: `def update3(publication_id: str, post_id: str, authorization: str, *, body: PublicationsPostsRequest1 | PublicationsPostsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `post_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `post_id` — path `postId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `PostsGetResponse`
- **Returns (raw)**: `ApiResult[PostsGetResponse, Update3ErrorBody]`
- **Error**: `Update3ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsPostsRequest1` | `beehiiv/models/publications_posts_request1.py` |
| `PublicationsPostsRequest1Dict` | `beehiiv/models/publications_posts_request1.py` |
| `PostsGetResponse` | `beehiiv/models/posts_get_response.py` |
| `Update3ErrorBody` | `beehiiv/errors/update3_error.py` |
| `Error` | `beehiiv/models/error.py` |

