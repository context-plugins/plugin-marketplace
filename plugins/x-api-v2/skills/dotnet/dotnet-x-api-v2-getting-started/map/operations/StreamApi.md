# StreamApi — operations

Accessor: `client.StreamApi` · Source: `Api/StreamApi.cs` · 18 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActivityStream
- **HTTP**: `GET /2/activity/stream` (Default (api))
- **Notes**: Stream of X Activities
- **Signature**: `ActivityStream(int? backfillMinutes, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `backfillMinutes` — nullable, no default → **must pass explicitly**
  - `startTime` — nullable, no default → **must pass explicitly**
  - `endTime` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `backfill_minutes` ← `backfillMinutes`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `ActivityStreamResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRuleCounts
- **HTTP**: `GET /2/tweets/search/stream/rules/counts` (Default (api))
- **Signature**: `GetRuleCounts(string? rulesCountFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `rulesCountFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `rules_count.fields` ← `rulesCountFields`
- **Returns**: `GetRuleCountsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetRules
- **HTTP**: `GET /2/tweets/search/stream/rules` (Default (api))
- **Notes**: Returns the active filtered-stream rules for the authenticated app. Provide `ids` to fetch specific rules; omit it to list all rules.
- **Signature**: `GetRules(IReadOnlyList<string>? ids, string? paginationToken, int? maxResults = 1000, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ids` — nullable, no default → **must pass explicitly**
  - `paginationToken` — nullable, no default → **must pass explicitly**
  - defaults: `maxResults` = 1000, `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`
- **Returns**: `GetRulesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamLabelsCompliance
- **HTTP**: `GET /2/tweets/label/stream` (Default (api))
- **Notes**: Streams all labeling events applied to Posts.
- **Signature**: `StreamLabelsCompliance(int? backfillMinutes, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `backfillMinutes` — nullable, no default → **must pass explicitly**
  - `startTime` — nullable, no default → **must pass explicitly**
  - `endTime` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `backfill_minutes` ← `backfillMinutes`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `StreamLabelsComplianceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamLikesCompliance
- **HTTP**: `GET /2/likes/compliance/stream` (Default (api))
- **Notes**: Streams all compliance data related to Likes for Users.
- **Signature**: `StreamLikesCompliance(int? backfillMinutes, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `backfillMinutes` — nullable, no default → **must pass explicitly**
  - `startTime` — nullable, no default → **must pass explicitly**
  - `endTime` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `backfill_minutes` ← `backfillMinutes`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `StreamLikesComplianceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamLikesFirehose
- **HTTP**: `GET /2/likes/firehose/stream` (Default (api))
- **Notes**: Streams all public Likes in real-time.
- **Signature**: `StreamLikesFirehose(int partition, int? backfillMinutes, DateTimeOffset? startTime, DateTimeOffset? endTime, IReadOnlyList<LikeWithTweetAuthorField>? likeWithTweetAuthorFields, IReadOnlyList<Expansions3>? expansions, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<UserField1>? userFields, IReadOnlyList<TweetField>? tweetFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`backfillMinutes` … `tweetFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `partition` ← `partition`, `backfill_minutes` ← `backfillMinutes`, `start_time` ← `startTime`, `end_time` ← `endTime`, `like_with_tweet_author.fields` ← `likeWithTweetAuthorFields`, `expansions` ← `expansions`, `media.fields` ← `mediaFields`, `user.fields` ← `userFields`, `tweet.fields` ← `tweetFields`
- **Returns**: `StreamLikesFirehoseResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamLikesSample10
- **HTTP**: `GET /2/likes/sample10/stream` (Default (api))
- **Notes**: Streams a 10% sample of public Likes in real-time.
- **Signature**: `StreamLikesSample10(int partition, int? backfillMinutes, DateTimeOffset? startTime, DateTimeOffset? endTime, IReadOnlyList<LikeWithTweetAuthorField>? likeWithTweetAuthorFields, IReadOnlyList<Expansions3>? expansions, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<UserField1>? userFields, IReadOnlyList<TweetField>? tweetFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`backfillMinutes` … `tweetFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `partition` ← `partition`, `backfill_minutes` ← `backfillMinutes`, `start_time` ← `startTime`, `end_time` ← `endTime`, `like_with_tweet_author.fields` ← `likeWithTweetAuthorFields`, `expansions` ← `expansions`, `media.fields` ← `mediaFields`, `user.fields` ← `userFields`, `tweet.fields` ← `tweetFields`
- **Returns**: `StreamLikesSample10Response`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamPosts
- **HTTP**: `GET /2/tweets/search/stream` (Default (api))
- **Notes**: Streams Posts in real-time matching the active rule set.
- **Signature**: `StreamPosts(int? backfillMinutes, DateTimeOffset? startTime, DateTimeOffset? endTime, IReadOnlyList<TweetField>? tweetFields, IReadOnlyList<Expansions9>? expansions, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<UserField1>? userFields, IReadOnlyList<PlaceField>? placeFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`backfillMinutes` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `backfill_minutes` ← `backfillMinutes`, `start_time` ← `startTime`, `end_time` ← `endTime`, `tweet.fields` ← `tweetFields`, `expansions` ← `expansions`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `user.fields` ← `userFields`, `place.fields` ← `placeFields`
- **Returns**: `StreamPostsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamPostsCompliance
- **HTTP**: `GET /2/tweets/compliance/stream` (Default (api))
- **Notes**: Streams all compliance data related to Posts.
- **Signature**: `StreamPostsCompliance(int partition, int? backfillMinutes, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `backfillMinutes` — nullable, no default → **must pass explicitly**
  - `startTime` — nullable, no default → **must pass explicitly**
  - `endTime` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `partition` ← `partition`, `backfill_minutes` ← `backfillMinutes`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `StreamPostsComplianceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamPostsFirehose
- **HTTP**: `GET /2/tweets/firehose/stream` (Default (api))
- **Notes**: Streams all public Posts in real-time.
- **Signature**: `StreamPostsFirehose(int partition, int? backfillMinutes, IReadOnlyList<TweetField>? tweetFields, IReadOnlyList<Expansions9>? expansions, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<UserField1>? userFields, IReadOnlyList<PlaceField>? placeFields, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`backfillMinutes` … `endTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `partition` ← `partition`, `backfill_minutes` ← `backfillMinutes`, `tweet.fields` ← `tweetFields`, `expansions` ← `expansions`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `user.fields` ← `userFields`, `place.fields` ← `placeFields`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `StreamPostsFirehoseResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamPostsFirehoseEn
- **HTTP**: `GET /2/tweets/firehose/stream/lang/en` (Default (api))
- **Notes**: Streams all public English-language Posts in real-time.
- **Signature**: `StreamPostsFirehoseEn(int partition, int? backfillMinutes, IReadOnlyList<TweetField>? tweetFields, IReadOnlyList<Expansions9>? expansions, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<UserField1>? userFields, IReadOnlyList<PlaceField>? placeFields, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`backfillMinutes` … `endTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `partition` ← `partition`, `backfill_minutes` ← `backfillMinutes`, `tweet.fields` ← `tweetFields`, `expansions` ← `expansions`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `user.fields` ← `userFields`, `place.fields` ← `placeFields`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `StreamPostsFirehoseEnResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamPostsFirehoseJa
- **HTTP**: `GET /2/tweets/firehose/stream/lang/ja` (Default (api))
- **Notes**: Streams all public Japanese-language Posts in real-time.
- **Signature**: `StreamPostsFirehoseJa(int partition, int? backfillMinutes, IReadOnlyList<TweetField>? tweetFields, IReadOnlyList<Expansions9>? expansions, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<UserField1>? userFields, IReadOnlyList<PlaceField>? placeFields, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`backfillMinutes` … `endTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `partition` ← `partition`, `backfill_minutes` ← `backfillMinutes`, `tweet.fields` ← `tweetFields`, `expansions` ← `expansions`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `user.fields` ← `userFields`, `place.fields` ← `placeFields`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `StreamPostsFirehoseJaResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamPostsFirehoseKo
- **HTTP**: `GET /2/tweets/firehose/stream/lang/ko` (Default (api))
- **Notes**: Streams all public Korean-language Posts in real-time.
- **Signature**: `StreamPostsFirehoseKo(int partition, int? backfillMinutes, IReadOnlyList<TweetField>? tweetFields, IReadOnlyList<Expansions9>? expansions, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<UserField1>? userFields, IReadOnlyList<PlaceField>? placeFields, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`backfillMinutes` … `endTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `partition` ← `partition`, `backfill_minutes` ← `backfillMinutes`, `tweet.fields` ← `tweetFields`, `expansions` ← `expansions`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `user.fields` ← `userFields`, `place.fields` ← `placeFields`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `StreamPostsFirehoseKoResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamPostsFirehosePt
- **HTTP**: `GET /2/tweets/firehose/stream/lang/pt` (Default (api))
- **Notes**: Streams all public Portuguese-language Posts in real-time.
- **Signature**: `StreamPostsFirehosePt(int partition, int? backfillMinutes, IReadOnlyList<TweetField>? tweetFields, IReadOnlyList<Expansions9>? expansions, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<UserField1>? userFields, IReadOnlyList<PlaceField>? placeFields, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`backfillMinutes` … `endTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `partition` ← `partition`, `backfill_minutes` ← `backfillMinutes`, `tweet.fields` ← `tweetFields`, `expansions` ← `expansions`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `user.fields` ← `userFields`, `place.fields` ← `placeFields`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `StreamPostsFirehosePtResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamPostsSample
- **HTTP**: `GET /2/tweets/sample/stream` (Default (api))
- **Notes**: Streams a 1% sample of public Posts in real-time.
- **Signature**: `StreamPostsSample(int? backfillMinutes, IReadOnlyList<TweetField>? tweetFields, IReadOnlyList<Expansions9>? expansions, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<UserField1>? userFields, IReadOnlyList<PlaceField>? placeFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`backfillMinutes` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `backfill_minutes` ← `backfillMinutes`, `tweet.fields` ← `tweetFields`, `expansions` ← `expansions`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `user.fields` ← `userFields`, `place.fields` ← `placeFields`
- **Returns**: `StreamPostsSampleResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamPostsSample10
- **HTTP**: `GET /2/tweets/sample10/stream` (Default (api))
- **Notes**: Streams a 10% sample of public Posts in real-time.
- **Signature**: `StreamPostsSample10(int partition, int? backfillMinutes, IReadOnlyList<TweetField>? tweetFields, IReadOnlyList<Expansions9>? expansions, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<UserField1>? userFields, IReadOnlyList<PlaceField>? placeFields, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`backfillMinutes` … `endTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `partition` ← `partition`, `backfill_minutes` ← `backfillMinutes`, `tweet.fields` ← `tweetFields`, `expansions` ← `expansions`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `user.fields` ← `userFields`, `place.fields` ← `placeFields`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `StreamPostsSample10Response`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreamUsersCompliance
- **HTTP**: `GET /2/users/compliance/stream` (Default (api))
- **Notes**: Streams all compliance data related to Users.
- **Signature**: `StreamUsersCompliance(int partition, int? backfillMinutes, DateTimeOffset? startTime, DateTimeOffset? endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `backfillMinutes` — nullable, no default → **must pass explicitly**
  - `startTime` — nullable, no default → **must pass explicitly**
  - `endTime` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `partition` ← `partition`, `backfill_minutes` ← `backfillMinutes`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `StreamUsersComplianceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateRules
- **HTTP**: `POST /2/tweets/search/stream/rules` (Default (api))
- **Notes**: Adds or deletes rules from the active rule set for the filtered stream. Exactly one of `add`, `delete`, or `?delete_all=true` must be specified. Use `?dry_run=true` to validate without committing.
- **Signature**: `UpdateRules(bool? dryRun, bool? deleteAll, UpdateRulesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `dryRun` — nullable, no default → **must pass explicitly**
  - `deleteAll` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dry_run` ← `dryRun`, `delete_all` ← `deleteAll`
- **Returns**: `UpdateRulesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
