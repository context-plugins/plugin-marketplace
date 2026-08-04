# LikesEssentials — operations

Accessor: `client.LikesEssentials` · Source: `Api/LikesEssentials.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckIfUserLikedVideo
- **HTTP**: `GET /users/{user_id}/likes/{video_id}` (Default (api))
- **Notes**: This method checks if the authenticated user has liked the specified video.
- **Signature**: `CheckIfUserLikedVideo(double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckIfUserLikedVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckIfUserLikedVideoAlt1
- **HTTP**: `GET /me/likes/{video_id}` (Default (api))
- **Notes**: This method checks if the authenticated user has liked the specified video.
- **Signature**: `CheckIfUserLikedVideoAlt1(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckIfUserLikedVideoAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLikes
- **HTTP**: `GET /users/{user_id}/likes` (Default (api))
- **Notes**: This method returns every video that the authenticated user has liked.
- **Signature**: `GetLikes(double userId, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort15? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLikesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetLikesAlt1
- **HTTP**: `GET /me/likes` (Default (api))
- **Notes**: This method returns every video that the authenticated user has liked.
- **Signature**: `GetLikesAlt1(Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort15? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLikesAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoLikes
- **HTTP**: `GET /videos/{video_id}/likes` (Default (api))
- **Notes**: This method returns every user who has liked the specified video.
- **Signature**: `GetVideoLikes(double videoId, Direction? direction, double? page, double? perPage, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoLikesAlt1
- **HTTP**: `GET /channels/{channel_id}/videos/{video_id}/likes` (Default (api))
- **Notes**: This method returns every user who has liked the specified video.
- **Signature**: `GetVideoLikesAlt1(double channelId, double videoId, Direction? direction, double? page, double? perPage, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVodLikes
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/likes` (Default (api))
- **Notes**: This method returns every user who has liked the specified video on an On Demand page.
- **Signature**: `GetVodLikes(double ondemandId, Direction? direction, Filter25? filter, double? page, double? perPage, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVodLikesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### LikeVideo
- **HTTP**: `PUT /users/{user_id}/likes/{video_id}` (Default (api))
- **Notes**: This method causes the authenticated user to like the specified video. The user can't like their own video.
- **Signature**: `LikeVideo(double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<LikeVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LikeVideoAlt1
- **HTTP**: `PUT /me/likes/{video_id}` (Default (api))
- **Notes**: This method causes the authenticated user to like the specified video. The user can't like their own video.
- **Signature**: `LikeVideoAlt1(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<LikeVideoAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnlikeVideo
- **HTTP**: `DELETE /users/{user_id}/likes/{video_id}` (Default (api))
- **Notes**: This method causes the authenticated user to unlike the specified video.
- **Signature**: `UnlikeVideo(double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnlikeVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnlikeVideoAlt1
- **HTTP**: `DELETE /me/likes/{video_id}` (Default (api))
- **Notes**: This method causes the authenticated user to unlike the specified video.
- **Signature**: `UnlikeVideoAlt1(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnlikeVideoAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
