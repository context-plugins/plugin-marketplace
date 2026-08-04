# Users — operations

Accessor: `client.Users` · Source: `Api/Users.cs` · 42 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BlockUsersDms
- **HTTP**: `POST /2/users/{id}/dm/block` (Default (api))
- **Signature**: `BlockUsersDms(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BlockUsersDmsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateUsersBookmark
- **HTTP**: `POST /2/users/{id}/bookmarks` (Default (api))
- **Signature**: `CreateUsersBookmark(string id, CreateUsersBookmarkRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateUsersBookmarkResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateUsersBookmarkFolder
- **HTTP**: `POST /2/users/{id}/bookmarks/folders` (Default (api))
- **Notes**: Creates a new Bookmark folder for the authenticated user.
- **Signature**: `CreateUsersBookmarkFolder(string id, CreateUsersBookmarkFolderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateUsersBookmarkFolderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUsersBookmark
- **HTTP**: `DELETE /2/users/{id}/bookmarks/{tweet_id}` (Default (api))
- **Notes**: Removes a Post from the authenticated user's Bookmarks by its ID.
- **Signature**: `DeleteUsersBookmark(string id, string tweetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteUsersBookmarkResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FollowList
- **HTTP**: `POST /2/users/{id}/followed_lists` (Default (api))
- **Signature**: `FollowList(string id, FollowListRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FollowListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FollowUser
- **HTTP**: `POST /2/users/{id}/following` (Default (api))
- **Signature**: `FollowUser(string id, FollowUserRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FollowUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersAffiliates
- **HTTP**: `GET /2/users/{id}/affiliates` (Default (api))
- **Signature**: `GetUsersAffiliates(string id, int? maxResults, string? paginationToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`maxResults` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetUsersAffiliatesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersBlocking
- **HTTP**: `GET /2/users/{id}/blocking` (Default (api))
- **Signature**: `GetUsersBlocking(string id, int? maxResults, string? paginationToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`maxResults` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetUsersBlockingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersBookmarkFolders
- **HTTP**: `GET /2/users/{id}/bookmarks/folders` (Default (api))
- **Signature**: `GetUsersBookmarkFolders(string id, int? maxResults, string? paginationToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `maxResults` — nullable, no default → **must pass explicitly**
  - `paginationToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`
- **Returns**: `GetUsersBookmarkFoldersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersBookmarks
- **HTTP**: `GET /2/users/{id}/bookmarks` (Default (api))
- **Signature**: `GetUsersBookmarks(string id, int? maxResults, string? paginationToken, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`maxResults` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetUsersBookmarksResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersBookmarksByFolderId
- **HTTP**: `GET /2/users/{id}/bookmarks/folders/{folder_id}` (Default (api))
- **Signature**: `GetUsersBookmarksByFolderId(string id, string folderId, int? maxResults, string? paginationToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `maxResults` — nullable, no default → **must pass explicitly**
  - `paginationToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`
- **Returns**: `GetUsersBookmarksByFolderIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersById
- **HTTP**: `GET /2/users/{id}` (Default (api))
- **Signature**: `GetUsersById(string id, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `userFields` — nullable, no default → **must pass explicitly**
  - `expansions` — nullable, no default → **must pass explicitly**
  - `postFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetUsersByIdResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersByIds
- **HTTP**: `GET /2/users` (Default (api))
- **Signature**: `GetUsersByIds(IReadOnlyList<string> ids, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `userFields` — nullable, no default → **must pass explicitly**
  - `expansions` — nullable, no default → **must pass explicitly**
  - `postFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetUsersByIdsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersByUsername
- **HTTP**: `GET /2/users/by/username/{username}` (Default (api))
- **Signature**: `GetUsersByUsername(string username, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `userFields` — nullable, no default → **must pass explicitly**
  - `expansions` — nullable, no default → **must pass explicitly**
  - `postFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetUsersByUsernameResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersByUsernames
- **HTTP**: `GET /2/users/by` (Default (api))
- **Signature**: `GetUsersByUsernames(IReadOnlyList<string> usernames, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `userFields` — nullable, no default → **must pass explicitly**
  - `expansions` — nullable, no default → **must pass explicitly**
  - `postFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `usernames` ← `usernames`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetUsersByUsernamesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersFollowedLists
- **HTTP**: `GET /2/users/{id}/followed_lists` (Default (api))
- **Signature**: `GetUsersFollowedLists(string id, string? paginationToken, IReadOnlyList<ListField>? listFields, IReadOnlyList<Expansions5>? expansions, IReadOnlyList<UserField>? userFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`paginationToken` … `userFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `list.fields` ← `listFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`
- **Returns**: `GetUsersFollowedListsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersFollowers
- **HTTP**: `GET /2/users/{id}/followers` (Default (api))
- **Signature**: `GetUsersFollowers(string id, int? maxResults, string? paginationToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`maxResults` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetUsersFollowersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersFollowing
- **HTTP**: `GET /2/users/{id}/following` (Default (api))
- **Signature**: `GetUsersFollowing(string id, int? maxResults, string? paginationToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`maxResults` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetUsersFollowingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersLikedPosts
- **HTTP**: `GET /2/users/{id}/liked_tweets` (Default (api))
- **Signature**: `GetUsersLikedPosts(string id, int? maxResults, string? paginationToken, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`maxResults` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetUsersLikedPostsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersListMemberships
- **HTTP**: `GET /2/users/{id}/list_memberships` (Default (api))
- **Signature**: `GetUsersListMemberships(string id, string? paginationToken, IReadOnlyList<ListField>? listFields, IReadOnlyList<Expansions5>? expansions, IReadOnlyList<UserField>? userFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`paginationToken` … `userFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `list.fields` ← `listFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`
- **Returns**: `GetUsersListMembershipsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersMe
- **HTTP**: `GET /2/users/me` (Default (api))
- **Signature**: `GetUsersMe(IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `userFields` — nullable, no default → **must pass explicitly**
  - `expansions` — nullable, no default → **must pass explicitly**
  - `postFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetUsersMeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersMentions
- **HTTP**: `GET /2/users/{id}/mentions` (Default (api))
- **Notes**: When both are provided, `start_time` must be earlier than `end_time`. When both are provided, `since_id` must be less than `until_id`.
- **Signature**: `GetUsersMentions(string id, int? maxResults, string? paginationToken, DateTimeOffset? startTime, DateTimeOffset? endTime, string? sinceId, string? untilId, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`maxResults` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `start_time` ← `startTime`, `end_time` ← `endTime`, `since_id` ← `sinceId`, `until_id` ← `untilId`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetUsersMentionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersMuting
- **HTTP**: `GET /2/users/{id}/muting` (Default (api))
- **Signature**: `GetUsersMuting(string id, string? paginationToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`paginationToken` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `GetUsersMutingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersOwnedLists
- **HTTP**: `GET /2/users/{id}/owned_lists` (Default (api))
- **Signature**: `GetUsersOwnedLists(string id, string? paginationToken, IReadOnlyList<ListField>? listFields, IReadOnlyList<Expansions5>? expansions, IReadOnlyList<UserField>? userFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`paginationToken` … `userFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `list.fields` ← `listFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`
- **Returns**: `GetUsersOwnedListsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersPinnedLists
- **HTTP**: `GET /2/users/{id}/pinned_lists` (Default (api))
- **Signature**: `GetUsersPinnedLists(string id, IReadOnlyList<ListField>? listFields, IReadOnlyList<Expansions5>? expansions, IReadOnlyList<UserField>? userFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `listFields` — nullable, no default → **must pass explicitly**
  - `expansions` — nullable, no default → **must pass explicitly**
  - `userFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `list.fields` ← `listFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`
- **Returns**: `GetUsersPinnedListsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersPosts
- **HTTP**: `GET /2/users/{id}/tweets` (Default (api))
- **Notes**: When both are provided, `start_time` must be earlier than `end_time`. When both are provided, `since_id` must be less than `until_id`.
- **Signature**: `GetUsersPosts(string id, int? maxResults, string? paginationToken, DateTimeOffset? startTime, DateTimeOffset? endTime, string? sinceId, string? untilId, IReadOnlyList<Exclude>? exclude, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`maxResults` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `start_time` ← `startTime`, `end_time` ← `endTime`, `since_id` ← `sinceId`, `until_id` ← `untilId`, `exclude` ← `exclude`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetUsersPostsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersPublicKey
- **HTTP**: `GET /2/users/{id}/public_keys` (Default (api))
- **Notes**: Returns a user's registered public keys for X Chat encryption.
- **Signature**: `GetUsersPublicKey(string id, IReadOnlyList<PublicKeyField>? publicKeyFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `publicKeyFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `public_key.fields` ← `publicKeyFields`
- **Returns**: `GetUsersPublicKeyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersPublicKeys
- **HTTP**: `GET /2/users/public_keys` (Default (api))
- **Notes**: Returns registered public keys for X Chat encryption for the specified users.
- **Signature**: `GetUsersPublicKeys(IReadOnlyList<string> ids, IReadOnlyList<PublicKeyField>? publicKeyFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `publicKeyFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `public_key.fields` ← `publicKeyFields`
- **Returns**: `GetUsersPublicKeysResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersRepostsOfMe
- **HTTP**: `GET /2/users/reposts_of_me` (Default (api))
- **Signature**: `GetUsersRepostsOfMe(string? paginationToken, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`paginationToken` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetUsersRepostsOfMeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersTimeline
- **HTTP**: `GET /2/users/{id}/timelines/reverse_chronological` (Default (api))
- **Notes**: When both are provided, `start_time` must be earlier than `end_time`. When both are provided, `since_id` must be less than `until_id`.
- **Signature**: `GetUsersTimeline(string id, int? maxResults, string? paginationToken, DateTimeOffset? startTime, DateTimeOffset? endTime, string? sinceId, string? untilId, IReadOnlyList<Exclude>? exclude, IReadOnlyList<PostField>? postFields, IReadOnlyList<Expansions7>? expansions, IReadOnlyList<UserField>? userFields, IReadOnlyList<MediaField>? mediaFields, IReadOnlyList<PollField>? pollFields, IReadOnlyList<PlaceField>? placeFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`maxResults` … `placeFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`, `start_time` ← `startTime`, `end_time` ← `endTime`, `since_id` ← `sinceId`, `until_id` ← `untilId`, `exclude` ← `exclude`, `post.fields` ← `postFields`, `expansions` ← `expansions`, `user.fields` ← `userFields`, `media.fields` ← `mediaFields`, `poll.fields` ← `pollFields`, `place.fields` ← `placeFields`
- **Returns**: `GetUsersTimelineResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LikePost
- **HTTP**: `POST /2/users/{id}/likes` (Default (api))
- **Signature**: `LikePost(string id, LikePostRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LikePostResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MuteUser
- **HTTP**: `POST /2/users/{id}/muting` (Default (api))
- **Signature**: `MuteUser(string id, MuteUserRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MuteUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PinList
- **HTTP**: `POST /2/users/{id}/pinned_lists` (Default (api))
- **Notes**: Causes the authenticated user to pin a specific List by its ID.
- **Signature**: `PinList(string id, PinListRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PinListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RepostPost
- **HTTP**: `POST /2/users/{id}/retweets` (Default (api))
- **Notes**: Causes the authenticated user to repost a specific Post by its ID.
- **Signature**: `RepostPost(string id, RepostPostRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RepostPostResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchUsers
- **HTTP**: `GET /2/users/search` (Default (api))
- **Signature**: `SearchUsers(string query, string? nextToken, IReadOnlyList<UserField>? userFields, IReadOnlyList<Expansions6>? expansions, IReadOnlyList<PostField>? postFields, int? maxResults = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`nextToken` … `postFields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `maxResults` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `max_results` ← `maxResults`, `next_token` ← `nextToken`, `user.fields` ← `userFields`, `expansions` ← `expansions`, `post.fields` ← `postFields`
- **Returns**: `SearchUsersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnblockUsersDms
- **HTTP**: `POST /2/users/{id}/dm/unblock` (Default (api))
- **Signature**: `UnblockUsersDms(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UnblockUsersDmsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnfollowList
- **HTTP**: `DELETE /2/users/{id}/followed_lists/{list_id}` (Default (api))
- **Notes**: Causes the authenticated user to unfollow a List by its ID.
- **Signature**: `UnfollowList(string id, string listId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UnfollowListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnfollowUser
- **HTTP**: `DELETE /2/users/{source_user_id}/following/{target_user_id}` (Default (api))
- **Notes**: Causes the authenticated user to unfollow a specific user by their ID.
- **Signature**: `UnfollowUser(string sourceUserId, string targetUserId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UnfollowUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnlikePost
- **HTTP**: `DELETE /2/users/{id}/likes/{tweet_id}` (Default (api))
- **Signature**: `UnlikePost(string id, string tweetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UnlikePostResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnmuteUser
- **HTTP**: `DELETE /2/users/{source_user_id}/muting/{target_user_id}` (Default (api))
- **Notes**: Causes the authenticated user to unmute the target user.
- **Signature**: `UnmuteUser(string sourceUserId, string targetUserId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UnmuteUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnpinList
- **HTTP**: `DELETE /2/users/{id}/pinned_lists/{list_id}` (Default (api))
- **Notes**: Causes the authenticated user to unpin a List by its ID.
- **Signature**: `UnpinList(string id, string listId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UnpinListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnrepostPost
- **HTTP**: `DELETE /2/users/{id}/retweets/{source_tweet_id}` (Default (api))
- **Notes**: Causes the authenticated user to unrepost a specific Post by its ID.
- **Signature**: `UnrepostPost(string id, string sourceTweetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UnrepostPostResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
