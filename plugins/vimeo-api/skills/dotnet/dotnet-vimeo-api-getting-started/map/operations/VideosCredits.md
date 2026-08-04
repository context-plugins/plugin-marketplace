# VideosCredits — operations

Accessor: `client.VideosCredits` · Source: `Api/VideosCredits.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoCredit
- **HTTP**: `POST /videos/{video_id}/credits` (Default (api))
- **Notes**: This method adds a user credit to the specified video.
- **Signature**: `AddVideoCredit(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideoCreditAlt1
- **HTTP**: `POST /channels/{channel_id}/videos/{video_id}/credits` (Default (api))
- **Notes**: This method adds a user credit to the specified video.
- **Signature**: `AddVideoCreditAlt1(double channelId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoCreditAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AvailableUsers
- **HTTP**: `GET /videos/{video_id}/credits/available_users` (Default (api))
- **Notes**: This method returns the users who can be credited on the specified video.
- **Signature**: `AvailableUsers(double videoId, Direction? direction, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### DeleteVideoCredit
- **HTTP**: `DELETE /videos/{video_id}/credits/{credit_id}` (Default (api))
- **Notes**: This method deletes the specified user credit from a video. The authenticated user must be the creator of the credit or the credited user.
- **Signature**: `DeleteVideoCredit(double creditId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditVideoCredit
- **HTTP**: `PATCH /videos/{video_id}/credits/{credit_id}` (Default (api))
- **Notes**: This method edits the specified user credit in a video.
- **Signature**: `EditVideoCredit(double creditId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditVideoCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoCredit
- **HTTP**: `GET /videos/{video_id}/credits/{credit_id}` (Default (api))
- **Notes**: This method returns a single credited user in a video.
- **Signature**: `GetVideoCredit(double creditId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVideoCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoCredits
- **HTTP**: `GET /videos/{video_id}/credits` (Default (api))
- **Notes**: This method returns every credited user in a video.
- **Signature**: `GetVideoCredits(double videoId, Direction? direction, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoCreditsAlt1
- **HTTP**: `GET /channels/{channel_id}/videos/{video_id}/credits` (Default (api))
- **Notes**: This method returns every credited user in a video.
- **Signature**: `GetVideoCreditsAlt1(double channelId, double videoId, Direction? direction, double? page, double? perPage, string? query, Sort8? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
