# UsersFeeds — operations

Accessor: `client.UsersFeeds` · Source: `Api/UsersFeeds.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetFeed
- **HTTP**: `GET /users/{user_id}/feed` (Default (api))
- **Notes**: This method returns every video in the authenticated user's feed.
- **Signature**: `GetFeed(double userId, string? offset, double? page, double? perPage, Type33? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`offset` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `page` ← `page`, `per_page` ← `perPage`, `type` ← `type`
- **Returns**: `Activity31Connection`
- **Error**: `SdkException<GetFeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetFeedAlt1
- **HTTP**: `GET /me/feed` (Default (api))
- **Notes**: This method returns every video in the authenticated user's feed.
- **Signature**: `GetFeedAlt1(string? offset, double? page, double? perPage, Type33? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`offset` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `page` ← `page`, `per_page` ← `perPage`, `type` ← `type`
- **Returns**: `Activity31Connection`
- **Error**: `SdkException<GetFeedAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
