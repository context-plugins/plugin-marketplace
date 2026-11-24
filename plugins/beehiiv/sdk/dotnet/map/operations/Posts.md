<!-- Generated file — do not edit; regenerated with the SDK. -->

# Posts — operations

Accessor: `client.Posts` · Source: `src/Beehiiv/Api/Posts.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AggregateStats

- **Signature**: `AggregateStats(AggregateStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `audience` ← `Audience`, `platform` ← `Platform`, `status` ← `Status`, `content_tags[]` ← `ContentTags`, `authors[]` ← `Authors`, `hidden_from_feed` ← `HiddenFromFeed`
- **Returns**: `PostsAggregateStatsResponse`
- **Error**: `ApiException<AggregateStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AggregateStatsRequest` | `src/Beehiiv/Requests/Posts/AggregateStatsRequest.cs` |
| `PostAudienceFilter` | `src/Beehiiv/Models/Enums/PostAudienceFilter.cs` |
| `PostPlatformFilter` | `src/Beehiiv/Models/Enums/PostPlatformFilter.cs` |
| `PostStatusFilter` | `src/Beehiiv/Models/Enums/PostStatusFilter.cs` |
| `PostsListRequestHiddenFromFeed` | `src/Beehiiv/Models/Enums/PostsListRequestHiddenFromFeed.cs` |
| `PostsAggregateStatsResponse` | `src/Beehiiv/Models/PostsAggregateStatsResponse.cs` |
| `AggregateStatsError` | `src/Beehiiv/Errors/AggregateStatsError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Create8

- **Signature**: `Create8(Create8Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `PostsCreateResponse`
- **Error**: `ApiException<Create8Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create8Request` | `src/Beehiiv/Requests/Posts/Create8Request.cs` |
| `PublicationsPostsRequest` | `src/Beehiiv/Models/PublicationsPostsRequest.cs` |
| `PostsCreateResponse` | `src/Beehiiv/Models/PostsCreateResponse.cs` |
| `Create8Error` | `src/Beehiiv/Errors/Create8Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Delete3

- **Signature**: `Delete3(Delete3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `PostId`, `Authorization`
- **Returns**: `PostProcessing`
- **Error**: `ApiException<Delete3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Delete3Request` | `src/Beehiiv/Requests/Posts/Delete3Request.cs` |
| `PostProcessing` | `src/Beehiiv/Models/PostProcessing.cs` |
| `Delete3Error` | `src/Beehiiv/Errors/Delete3Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index17

- **Signature**: `Index17(Index17Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `expand` ← `Expand`, `audience` ← `Audience`, `platform` ← `Platform`, `status` ← `Status`, `content_tags[]` ← `ContentTags`, `slugs[]` ← `Slugs`, `authors[]` ← `Authors`, `premium_tiers` ← `PremiumTiers`, `limit` ← `Limit`, `page` ← `Page`, `order_by` ← `OrderBy`, `direction` ← `Direction`, `hidden_from_feed` ← `HiddenFromFeed`
- **Returns**: `PostsListResponse`
- **Error**: `ApiException<Index17Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index17Request` | `src/Beehiiv/Requests/Posts/Index17Request.cs` |
| `PostExpandField` | `src/Beehiiv/Models/Enums/PostExpandField.cs` |
| `PostAudienceFilter` | `src/Beehiiv/Models/Enums/PostAudienceFilter.cs` |
| `PostPlatformFilter` | `src/Beehiiv/Models/Enums/PostPlatformFilter.cs` |
| `PostStatusFilter` | `src/Beehiiv/Models/Enums/PostStatusFilter.cs` |
| `PostOrderBy` | `src/Beehiiv/Models/Enums/PostOrderBy.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `PostsListRequestHiddenFromFeed` | `src/Beehiiv/Models/Enums/PostsListRequestHiddenFromFeed.cs` |
| `PostsListResponse` | `src/Beehiiv/Models/PostsListResponse.cs` |
| `Index17Error` | `src/Beehiiv/Errors/Index17Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Preview

- **Signature**: `Preview(PreviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `PostId`, `Authorization`
- **Query params (wire ← C#)**: `platform` ← `Platform`, `subscriber_type` ← `SubscriberType`, `tier_ids` ← `TierIds`, `subscriber_id` ← `SubscriberId`
- **Returns**: `PostsPreviewResponse`
- **Error**: `ApiException<PreviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PreviewRequest` | `src/Beehiiv/Requests/Posts/PreviewRequest.cs` |
| `PostsPreviewResponse` | `src/Beehiiv/Models/PostsPreviewResponse.cs` |
| `PreviewError` | `src/Beehiiv/Errors/PreviewError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show12

- **Signature**: `Show12(Show12Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `PostId`, `Authorization`
- **Query params (wire ← C#)**: `expand` ← `Expand`, `premium_tiers` ← `PremiumTiers`
- **Returns**: `PostsGetResponse`
- **Error**: `ApiException<Show12Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show12Request` | `src/Beehiiv/Requests/Posts/Show12Request.cs` |
| `PostExpandField` | `src/Beehiiv/Models/Enums/PostExpandField.cs` |
| `PostsGetResponse` | `src/Beehiiv/Models/PostsGetResponse.cs` |
| `Show12Error` | `src/Beehiiv/Errors/Show12Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### TestSend

- **Signature**: `TestSend(TestSendRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `PostId`, `Authorization`
- **Returns**: `PostsTestSendResponse`
- **Error**: `ApiException<TestSendError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TestSendRequest` | `src/Beehiiv/Requests/Posts/TestSendRequest.cs` |
| `PublicationsPostsTestSendsRequest` | `src/Beehiiv/Models/PublicationsPostsTestSendsRequest.cs` |
| `PostsTestSendResponse` | `src/Beehiiv/Models/PostsTestSendResponse.cs` |
| `TestSendError` | `src/Beehiiv/Errors/TestSendError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Update3

- **Signature**: `Update3(Update3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `PostId`, `Authorization`
- **Returns**: `PostsGetResponse`
- **Error**: `ApiException<Update3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Update3Request` | `src/Beehiiv/Requests/Posts/Update3Request.cs` |
| `PublicationsPostsRequest1` | `src/Beehiiv/Models/PublicationsPostsRequest1.cs` |
| `PostsGetResponse` | `src/Beehiiv/Models/PostsGetResponse.cs` |
| `Update3Error` | `src/Beehiiv/Errors/Update3Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

