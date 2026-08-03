# CategoriesApi — operations

Accessor: `client.CategoriesApi` · Source: `Api/CategoriesApi.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetACategoriesPlaylists
- **HTTP**: `GET /browse/categories/{category_id}/playlists` (Default (api))
- **Notes**: Get a list of Spotify playlists tagged with a particular category.
- **Signature**: `GetACategoriesPlaylists(string categoryId, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingFeaturedPlaylistObject`
- **Error**: `SdkException<GetACategoriesPlaylistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetACategory
- **HTTP**: `GET /browse/categories/{category_id}` (Default (api))
- **Notes**: Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
- **Signature**: `GetACategory(string categoryId, string? locale, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `locale` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `locale` ← `locale`
- **Returns**: `CategoryObject`
- **Error**: `SdkException<GetACategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCategories
- **HTTP**: `GET /browse/categories` (Default (api))
- **Notes**: Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
- **Signature**: `GetCategories(string? locale, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `locale` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `locale` ← `locale`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagedCategories`
- **Error**: `SdkException<GetCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
