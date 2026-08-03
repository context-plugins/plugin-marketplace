# Search — operations

Accessor: `client.Search` · Source: `Api/Search.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SearchInvoke
- **HTTP**: `GET /search` (Default (api))
- **Notes**: Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
- **Signature**: `SearchInvoke(string q, IReadOnlyList<Itemtype> type, string? market, IncludeExternal? includeExternal, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - `includeExternal` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `q` ← `q`, `type` ← `type`, `market` ← `market`, `limit` ← `limit`, `offset` ← `offset`, `include_external` ← `includeExternal`
- **Returns**: `SearchItems`
- **Error**: `SdkException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
