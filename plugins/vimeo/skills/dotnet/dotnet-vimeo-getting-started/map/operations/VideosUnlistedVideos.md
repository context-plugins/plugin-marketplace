# VideosUnlistedVideos — operations

Accessor: `client.VideosUnlistedVideos` · Source: `Api/VideosUnlistedVideos.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoPrivacyUser
- **HTTP**: `PUT /videos/{video_id}/privacy/users/{user_id}` (Default (api))
- **Notes**: This method gives a single user permission to access the specified unlisted video. The authenticated user must be the owner of the video.
- **Signature**: `AddVideoPrivacyUser(double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `User`
- **Error**: `SdkException<AddVideoPrivacyUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideoPrivacyUsers
- **HTTP**: `PUT /videos/{video_id}/privacy/users` (Default (api))
- **Notes**: This method gives multiple users permission to access the specified unlisted video. The authenticated user must be the owner of the video. The body of the request should follow our batch request format : each object must contain a single uri field whose value is the URI of the user who can access the video.
- **Signature**: `AddVideoPrivacyUsers(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AddVideoPrivacyUsersAlt1
- **HTTP**: `PUT /channels/{channel_id}/videos/{video_id}/privacy/users` (Default (api))
- **Notes**: This method gives multiple users permission to access the specified unlisted video. The authenticated user must be the owner of the video. The body of the request should follow our batch request format : each object must contain a single uri field whose value is the URI of the user who can access the video.
- **Signature**: `AddVideoPrivacyUsersAlt1(double channelId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoPrivacyUser
- **HTTP**: `DELETE /videos/{video_id}/privacy/users/{user_id}` (Default (api))
- **Notes**: This method prevents a user from being able to view the specified unlisted video. The authenticated user must be the owner of the video.
- **Signature**: `DeleteVideoPrivacyUser(double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoPrivacyUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoPrivacyUsers
- **HTTP**: `GET /videos/{video_id}/privacy/users` (Default (api))
- **Notes**: This method returns every user who has access to the specified unlisted video.
- **Signature**: `GetVideoPrivacyUsers(double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `UserConnection`
- **Error**: `SdkException<GetVideoPrivacyUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoPrivacyUsersAlt1
- **HTTP**: `GET /channels/{channel_id}/videos/{video_id}/privacy/users` (Default (api))
- **Notes**: This method returns every user who has access to the specified unlisted video.
- **Signature**: `GetVideoPrivacyUsersAlt1(double channelId, double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `UserConnection`
- **Error**: `SdkException<GetVideoPrivacyUsersAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
