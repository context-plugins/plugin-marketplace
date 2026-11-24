<!-- Generated file — do not edit; regenerated with the SDK. -->

# Posts — operations

Accessor: `client.posts` · Source: `src/resources/posts.ts` · 8 operations · Request and error types: namespace `Posts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### aggregateStats

- **Signature**: `aggregateStats(request: Posts.AggregateStatsRequest, options?: RequestOptions): ApiPromise<PostsAggregateStatsResponse, Posts.AggregateStatsError>`
- **Wire**: `GET /publications/{publicationId}/posts/aggregate_stats`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PostsAggregateStatsResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Posts.AggregateStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.AggregateStatsRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `audience` | `query` | — | `PostAudienceFilter` | no | `PostAudienceFilter.All` |
| `platform` | `query` | — | `PostPlatformFilter` | no | `PostPlatformFilter.All` |
| `status` | `query` | — | `PostStatusFilter` | no | `PostStatusFilter.All` |
| `contentTags` | `query` | `content_tags[]` | `string[]` | no | — |
| `authors` | `query` | `authors[]` | `string[]` | no | — |
| `hiddenFromFeed` | `query` | `hidden_from_feed` | `PostsListRequestHiddenFromFeed` | no | `PostsListRequestHiddenFromFeed.All` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostAudienceFilter` | `postAudienceFilterSchema` | `src/models/post-audience-filter.ts` |
| `PostPlatformFilter` | `postPlatformFilterSchema` | `src/models/post-platform-filter.ts` |
| `PostStatusFilter` | `postStatusFilterSchema` | `src/models/post-status-filter.ts` |
| `PostsListRequestHiddenFromFeed` | `postsListRequestHiddenFromFeedSchema` | `src/models/posts-list-request-hidden-from-feed.ts` |
| `PostsAggregateStatsResponse` | `postsAggregateStatsResponseSchema` | `src/models/posts-aggregate-stats-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### create8

- **Signature**: `create8(request: Posts.Create8Request, options?: RequestOptions): ApiPromise<PostsCreateResponse, Posts.Create8Error>`
- **Wire**: `POST /publications/{publicationId}/posts`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PostsCreateResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Posts.Create8Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.Create8Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsPostsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsPostsRequest` | `publicationsPostsRequestSchema` | `src/models/publications-posts-request.ts` |
| `PostsCreateResponse` | `postsCreateResponseSchema` | `src/models/posts-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### delete3

- **Signature**: `delete3(request: Posts.Delete3Request, options?: RequestOptions): ApiPromise<PostProcessing, Posts.Delete3Error>`
- **Wire**: `DELETE /publications/{publicationId}/posts/{postId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PostProcessing`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Posts.Delete3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.Delete3Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `postId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostProcessing` | `postProcessingSchema` | `src/models/post-processing.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index17

- **Signature**: `index17(request: Posts.Index17Request, options?: RequestOptions): ApiPromise<PostsListResponse, Posts.Index17Error>`
- **Wire**: `GET /publications/{publicationId}/posts`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PostsListResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Posts.Index17Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.Index17Request` (15):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `expand` | `query` | — | `PostExpandField[]` | no | — |
| `audience` | `query` | — | `PostAudienceFilter` | no | `PostAudienceFilter.All` |
| `platform` | `query` | — | `PostPlatformFilter` | no | `PostPlatformFilter.All` |
| `status` | `query` | — | `PostStatusFilter` | no | `PostStatusFilter.All` |
| `contentTags` | `query` | `content_tags[]` | `string[]` | no | — |
| `slugs` | `query` | `slugs[]` | `string[]` | no | — |
| `authors` | `query` | `authors[]` | `string[]` | no | — |
| `premiumTiers` | `query` | `premium_tiers` | `string[]` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `page` | `query` | — | `number` | no | — |
| `orderBy` | `query` | `order_by` | `PostOrderBy` | no | `PostOrderBy.Created` |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `hiddenFromFeed` | `query` | `hidden_from_feed` | `PostsListRequestHiddenFromFeed` | no | `PostsListRequestHiddenFromFeed.All` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostExpandField` | `postExpandFieldSchema` | `src/models/post-expand-field.ts` |
| `PostAudienceFilter` | `postAudienceFilterSchema` | `src/models/post-audience-filter.ts` |
| `PostPlatformFilter` | `postPlatformFilterSchema` | `src/models/post-platform-filter.ts` |
| `PostStatusFilter` | `postStatusFilterSchema` | `src/models/post-status-filter.ts` |
| `PostOrderBy` | `postOrderBySchema` | `src/models/post-order-by.ts` |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `PostsListRequestHiddenFromFeed` | `postsListRequestHiddenFromFeedSchema` | `src/models/posts-list-request-hidden-from-feed.ts` |
| `PostsListResponse` | `postsListResponseSchema` | `src/models/posts-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### preview

- **Signature**: `preview(request: Posts.PreviewRequest, options?: RequestOptions): ApiPromise<PostsPreviewResponse, Posts.PreviewError>`
- **Wire**: `GET /publications/{publicationId}/posts/{postId}/preview`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PostsPreviewResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Posts.PreviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.PreviewRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `postId` | `path` | — | `string` | yes |
| `platform` | `query` | — | `string` | no |
| `subscriberType` | `query` | `subscriber_type` | `string` | no |
| `tierIds` | `query` | `tier_ids` | `string[]` | no |
| `subscriberId` | `query` | `subscriber_id` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostsPreviewResponse` | `postsPreviewResponseSchema` | `src/models/posts-preview-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show12

- **Signature**: `show12(request: Posts.Show12Request, options?: RequestOptions): ApiPromise<PostsGetResponse, Posts.Show12Error>`
- **Wire**: `GET /publications/{publicationId}/posts/{postId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PostsGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Posts.Show12Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.Show12Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `postId` | `path` | — | `string` | yes |
| `expand` | `query` | — | `PostExpandField[]` | no |
| `premiumTiers` | `query` | `premium_tiers` | `string[]` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostExpandField` | `postExpandFieldSchema` | `src/models/post-expand-field.ts` |
| `PostsGetResponse` | `postsGetResponseSchema` | `src/models/posts-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### testSend

- **Signature**: `testSend(request: Posts.TestSendRequest, options?: RequestOptions): ApiPromise<PostsTestSendResponse, Posts.TestSendError>`
- **Wire**: `POST /publications/{publicationId}/posts/{postId}/test_sends`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PostsTestSendResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Posts.TestSendError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.TestSendRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `postId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsPostsTestSendsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsPostsTestSendsRequest` | `publicationsPostsTestSendsRequestSchema` | `src/models/publications-posts-test-sends-request.ts` |
| `PostsTestSendResponse` | `postsTestSendResponseSchema` | `src/models/posts-test-send-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### update3

- **Signature**: `update3(request: Posts.Update3Request, options?: RequestOptions): ApiPromise<PostsGetResponse, Posts.Update3Error>`
- **Wire**: `PATCH /publications/{publicationId}/posts/{postId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PostsGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Posts.Update3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Posts.Update3Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `postId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsPostsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsPostsRequest1` | `publicationsPostsRequest1Schema` | `src/models/publications-posts-request1.ts` |
| `PostsGetResponse` | `postsGetResponseSchema` | `src/models/posts-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

