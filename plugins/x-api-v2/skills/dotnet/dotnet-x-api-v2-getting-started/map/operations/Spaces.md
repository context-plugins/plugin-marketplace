# Spaces — operations

Accessor: `client.Spaces` · Source: `Api/Spaces.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSpacesBuyers
- **HTTP**: `GET /2/spaces/{id}/buyers` (Default (api))
- **Notes**: Retrieves a list of Users who purchased tickets to a specific Space by its ID.
- **Signature**: `GetSpacesBuyers(string id, string? paginationToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`paginationToken` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetSpacesBuyersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetSpacesByCreatorIds
- **HTTP**: `GET /2/spaces/by/creator_ids` (Default (api))
- **Signature**: `GetSpacesByCreatorIds(IReadOnlyList<string> userIds, IReadOnlyList<SpaceField>? spaceFields, IReadOnlyList<Expansions8>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<TopicField>? topicFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`spaceFields` … `topicFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user_ids` ← `userIds`, `space.fields` ← `spaceFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `topic.fields` ← `topicFields`
- **Returns**: `GetSpacesByCreatorIdsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetSpacesById
- **HTTP**: `GET /2/spaces/{id}` (Default (api))
- **Signature**: `GetSpacesById(string id, IReadOnlyList<SpaceField>? spaceFields, IReadOnlyList<Expansions8>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<TopicField>? topicFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`spaceFields` … `topicFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `space.fields` ← `spaceFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `topic.fields` ← `topicFields`
- **Returns**: `GetSpacesByIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetSpacesByIds
- **HTTP**: `GET /2/spaces` (Default (api))
- **Signature**: `GetSpacesByIds(IReadOnlyList<string> ids, IReadOnlyList<SpaceField>? spaceFields, IReadOnlyList<Expansions8>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<TopicField>? topicFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`spaceFields` … `topicFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `space.fields` ← `spaceFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `topic.fields` ← `topicFields`
- **Returns**: `GetSpacesByIdsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetSpacesPosts
- **HTTP**: `GET /2/spaces/{id}/tweets` (Default (api))
- **Notes**: Retrieves a list of Posts shared in a specific Space by its ID.
- **Signature**: `GetSpacesPosts(string id, string? paginationToken, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`paginationToken` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetSpacesPostsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchSpaces
- **HTTP**: `GET /2/spaces/search` (Default (api))
- **Notes**: Retrieves a list of Spaces matching the specified search query.
- **Signature**: `SearchSpaces(string query, State? state, IReadOnlyList<SpaceField>? spaceFields, IReadOnlyList<Expansions8>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<TopicField>? topicFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`state` … `topicFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `state` ← `state`, `max_results` ← `maxResults`, `space.fields` ← `spaceFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `topic.fields` ← `topicFields`
- **Returns**: `SearchSpacesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
