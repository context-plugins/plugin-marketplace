# Shows — operations

Accessor: `client.Shows` · Source: `Api/Shows.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckUsersSavedShows
- **HTTP**: `GET /me/shows/contains` (Default (api))
- **Notes**: Check if one or more shows is already saved in the current Spotify user's library.
- **Signature**: `CheckUsersSavedShows(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckUsersSavedShowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAShow
- **HTTP**: `GET /shows/{id}` (Default (api))
- **Notes**: Get Spotify catalog information for a single show identified by its unique Spotify ID.
- **Signature**: `GetAShow(string id, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`
- **Returns**: `ShowObject`
- **Error**: `SdkException<GetAShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAShowsEpisodes
- **HTTP**: `GET /shows/{id}/episodes` (Default (api))
- **Notes**: Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
- **Signature**: `GetAShowsEpisodes(string id, string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSimplifiedEpisodeObject`
- **Error**: `SdkException<GetAShowsEpisodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMultipleShows
- **HTTP**: `GET /shows` (Default (api))
- **Notes**: Get Spotify catalog information for several shows based on their Spotify IDs.
- **Signature**: `GetMultipleShows(string ids, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `market` ← `market`
- **Returns**: `ManySimplifiedShows`
- **Error**: `SdkException<GetMultipleShowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersSavedShows
- **HTTP**: `GET /me/shows` (Default (api))
- **Notes**: Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
- **Signature**: `GetUsersSavedShows(int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSavedShowObject`
- **Error**: `SdkException<GetUsersSavedShowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveShowsUser
- **HTTP**: `DELETE /me/shows` (Default (api))
- **Notes**: Delete one or more shows from current Spotify user's library.
- **Signature**: `RemoveShowsUser(string ids, string? market, RemoveShowsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `market` ← `market`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveShowsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SaveShowsUser
- **HTTP**: `PUT /me/shows` (Default (api))
- **Notes**: Save one or more shows to current Spotify user's library.
- **Signature**: `SaveShowsUser(string ids, SaveShowsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SaveShowsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
