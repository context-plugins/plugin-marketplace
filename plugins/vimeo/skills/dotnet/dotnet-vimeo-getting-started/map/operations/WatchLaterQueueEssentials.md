# WatchLaterQueueEssentials — operations

Accessor: `client.WatchLaterQueueEssentials` · Source: `Api/WatchLaterQueueEssentials.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoToWatchLater
- **HTTP**: `PUT /users/{user_id}/watchlater/{video_id}` (Default (api))
- **Notes**: This method adds the specified video to the authenticated user's Watch Later queue.
- **Signature**: `AddVideoToWatchLater(double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AddVideoToWatchLaterAlt1
- **HTTP**: `PUT /me/watchlater/{video_id}` (Default (api))
- **Notes**: This method adds the specified video to the authenticated user's Watch Later queue.
- **Signature**: `AddVideoToWatchLaterAlt1(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CheckWatchLaterQueue
- **HTTP**: `GET /users/{user_id}/watchlater/{video_id}` (Default (api))
- **Notes**: This method checks the authenticated user's Watch Later queue for the specified video.
- **Signature**: `CheckWatchLaterQueue(double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<CheckWatchLaterQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckWatchLaterQueueAlt1
- **HTTP**: `GET /me/watchlater/{video_id}` (Default (api))
- **Notes**: This method checks the authenticated user's Watch Later queue for the specified video.
- **Signature**: `CheckWatchLaterQueueAlt1(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<CheckWatchLaterQueueAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoFromWatchLater
- **HTTP**: `DELETE /users/{user_id}/watchlater/{video_id}` (Default (api))
- **Notes**: This method removes the specified video from the authenticated user's Watch Later queue.
- **Signature**: `DeleteVideoFromWatchLater(double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoFromWatchLaterAlt1
- **HTTP**: `DELETE /me/watchlater/{video_id}` (Default (api))
- **Notes**: This method removes the specified video from the authenticated user's Watch Later queue.
- **Signature**: `DeleteVideoFromWatchLaterAlt1(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetWatchLaterQueue
- **HTTP**: `GET /users/{user_id}/watchlater` (Default (api))
- **Notes**: This method returns every video from the authenticated user's Watch Later queue.
- **Signature**: `GetWatchLaterQueue(double userId, Direction? direction, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort15? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetWatchLaterQueueAlt1
- **HTTP**: `GET /me/watchlater` (Default (api))
- **Notes**: This method returns every video from the authenticated user's Watch Later queue.
- **Signature**: `GetWatchLaterQueueAlt1(Direction? direction, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort15? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
