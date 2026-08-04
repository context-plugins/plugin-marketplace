# Posts — operations

Accessor: `client.Posts` · Source: `Api/Posts.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePosts
- **HTTP**: `POST /2/tweets` (Default (api))
- **Signature**: `CreatePosts(CreatePostsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreatePostsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeletePosts
- **HTTP**: `DELETE /2/tweets/{id}` (Default (api))
- **Signature**: `DeletePosts(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeletePostsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPostsAnalytics
- **HTTP**: `GET /2/tweets/analytics` (Default (api))
- **Signature**: `GetPostsAnalytics(IReadOnlyList<string> ids, DateTimeOffset startTime, DateTimeOffset endTime, Granularity1? granularity, IReadOnlyList<AnalyticsField>? analyticsFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `granularity` — nullable, no default → **must pass explicitly**
  - `analyticsFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `start_time` ← `startTime`, `end_time` ← `endTime`, `granularity` ← `granularity`, `analytics.fields` ← `analyticsFields`
- **Returns**: `GetPostsAnalyticsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPostsById
- **HTTP**: `GET /2/tweets/{id}` (Default (api))
- **Signature**: `GetPostsById(string id, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`postFields` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetPostsByIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPostsByIds
- **HTTP**: `GET /2/tweets` (Default (api))
- **Signature**: `GetPostsByIds(IReadOnlyList<string> ids, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`postFields` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetPostsByIdsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPostsCountsAll
- **HTTP**: `GET /2/tweets/counts/all` (Default (api))
- **Notes**: At most one of `pagination_token`, `next_token` may be provided.
- **Signature**: `GetPostsCountsAll(string query, DateTimeOffset? startTime, DateTimeOffset? endTime, string? sinceId, string? untilId, string? nextToken, string? paginationToken, Granularity2? granularity, string? searchCountFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`startTime` … `searchCountFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `start_time` ← `startTime`, `end_time` ← `endTime`, `since_id` ← `sinceId`, `until_id` ← `untilId`, `next_token` ← `nextToken`, `pagination_token` ← `paginationToken`, `granularity` ← `granularity`, `search_count.fields` ← `searchCountFields`
- **Returns**: `GetPostsCountsAllResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPostsCountsRecent
- **HTTP**: `GET /2/tweets/counts/recent` (Default (api))
- **Notes**: At most one of `pagination_token`, `next_token` may be provided.
- **Signature**: `GetPostsCountsRecent(string query, DateTimeOffset? startTime, DateTimeOffset? endTime, string? sinceId, string? untilId, string? nextToken, string? paginationToken, Granularity2? granularity, string? searchCountFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`startTime` … `searchCountFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `start_time` ← `startTime`, `end_time` ← `endTime`, `since_id` ← `sinceId`, `until_id` ← `untilId`, `next_token` ← `nextToken`, `pagination_token` ← `paginationToken`, `granularity` ← `granularity`, `search_count.fields` ← `searchCountFields`
- **Returns**: `GetPostsCountsRecentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPostsLikingUsers
- **HTTP**: `GET /2/tweets/{id}/liking_users` (Default (api))
- **Signature**: `GetPostsLikingUsers(string id, string? paginationToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`paginationToken` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetPostsLikingUsersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPostsQuotedPosts
- **HTTP**: `GET /2/tweets/{id}/quote_tweets` (Default (api))
- **Signature**: `GetPostsQuotedPosts(string id, string? paginationToken, IReadOnlyList<Exclude>? exclude, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, int? maxResults = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`paginationToken` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `exclude` ← `exclude`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetPostsQuotedPostsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPostsRepostedBy
- **HTTP**: `GET /2/tweets/{id}/retweeted_by` (Default (api))
- **Signature**: `GetPostsRepostedBy(string id, string? paginationToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`paginationToken` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetPostsRepostedByResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPostsReposts
- **HTTP**: `GET /2/tweets/{id}/retweets` (Default (api))
- **Signature**: `GetPostsReposts(string id, string? paginationToken, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`paginationToken` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetPostsRepostsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### HidePostsReply
- **HTTP**: `PUT /2/tweets/{tweet_id}/hidden` (Default (api))
- **Notes**: Hides or unhides a reply to a conversation owned by the authenticated user.
- **Signature**: `HidePostsReply(string tweetId, HidePostsReplyRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `HidePostsReplyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchPostsAll
- **HTTP**: `GET /2/tweets/search/all` (Default (api))
- **Notes**: At most one of `start_time`, `since_id` may be provided. At most one of `end_time`, `until_id` may be provided. At most one of `pagination_token`, `next_token` may be provided.
- **Signature**: `SearchPostsAll(string query, DateTimeOffset? startTime, DateTimeOffset? endTime, string? sinceId, string? untilId, string? nextToken, string? paginationToken, SortOrder? sortOrder, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, int? maxResults = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`startTime` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `start_time` ← `startTime`, `end_time` ← `endTime`, `since_id` ← `sinceId`, `until_id` ← `untilId`, `max_results` ← `maxResults`, `next_token` ← `nextToken`, `pagination_token` ← `paginationToken`, `sort_order` ← `sortOrder`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `SearchPostsAllResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchPostsRecent
- **HTTP**: `GET /2/tweets/search/recent` (Default (api))
- **Notes**: At most one of `start_time`, `since_id` may be provided. At most one of `end_time`, `until_id` may be provided. At most one of `pagination_token`, `next_token` may be provided.
- **Signature**: `SearchPostsRecent(string query, string? nextToken, string? paginationToken, DateTimeOffset? startTime, DateTimeOffset? endTime, string? sinceId, string? untilId, SortOrder? sortOrder, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, int? maxResults = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`nextToken` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `max_results` ← `maxResults`, `next_token` ← `nextToken`, `pagination_token` ← `paginationToken`, `start_time` ← `startTime`, `end_time` ← `endTime`, `since_id` ← `sinceId`, `until_id` ← `untilId`, `sort_order` ← `sortOrder`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `SearchPostsRecentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
