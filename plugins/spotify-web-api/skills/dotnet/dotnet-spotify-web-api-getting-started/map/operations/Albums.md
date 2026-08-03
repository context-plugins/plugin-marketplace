# Albums — operations

Accessor: `client.Albums` · Source: `Api/Albums.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckUsersSavedAlbums
- **HTTP**: `GET /me/albums/contains` (Default (api))
- **Notes**: Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
- **Signature**: `CheckUsersSavedAlbums(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckUsersSavedAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAnAlbum
- **HTTP**: `GET /albums/{id}` (Default (api))
- **Notes**: Get Spotify catalog information for a single album.
- **Signature**: `GetAnAlbum(string id, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`
- **Returns**: `AlbumObject`
- **Error**: `SdkException<GetAnAlbumError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAnAlbumsTracks
- **HTTP**: `GET /albums/{id}/tracks` (Default (api))
- **Notes**: Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
- **Signature**: `GetAnAlbumsTracks(string id, string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSimplifiedTrackObject`
- **Error**: `SdkException<GetAnAlbumsTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAnArtistsAlbums
- **HTTP**: `GET /artists/{id}/albums` (Default (api))
- **Notes**: Get Spotify catalog information about an artist's albums.
- **Signature**: `GetAnArtistsAlbums(string id, string? includeGroups, string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeGroups` — nullable, no default → **must pass explicitly**
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `include_groups` ← `includeGroups`, `market` ← `market`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingArtistDiscographyAlbumObject`
- **Error**: `SdkException<GetAnArtistsAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMultipleAlbums
- **HTTP**: `GET /albums` (Default (api))
- **Notes**: Get Spotify catalog information for multiple albums identified by their Spotify IDs.
- **Signature**: `GetMultipleAlbums(string ids, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `market` ← `market`
- **Returns**: `ManyAlbums`
- **Error**: `SdkException<GetMultipleAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetNewReleases
- **HTTP**: `GET /browse/new-releases` (Default (api))
- **Notes**: Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
- **Signature**: `GetNewReleases(int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagedAlbums`
- **Error**: `SdkException<GetNewReleasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersSavedAlbums
- **HTTP**: `GET /me/albums` (Default (api))
- **Notes**: Get a list of the albums saved in the current Spotify user's 'Your Music' library.
- **Signature**: `GetUsersSavedAlbums(string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`, `market` ← `market`
- **Returns**: `PagingSavedAlbumObject`
- **Error**: `SdkException<GetUsersSavedAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveAlbumsUser
- **HTTP**: `DELETE /me/albums` (Default (api))
- **Notes**: Remove one or more albums from the current user's 'Your Music' library.
- **Signature**: `RemoveAlbumsUser(string ids, RemoveAlbumsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveAlbumsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SaveAlbumsUser
- **HTTP**: `PUT /me/albums` (Default (api))
- **Notes**: Save one or more albums to the current user's 'Your Music' library.
- **Signature**: `SaveAlbumsUser(string ids, SaveAlbumsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SaveAlbumsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
