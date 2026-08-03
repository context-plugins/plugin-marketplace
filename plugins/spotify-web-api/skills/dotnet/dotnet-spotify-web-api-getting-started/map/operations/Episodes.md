# Episodes — operations

Accessor: `client.Episodes` · Source: `Api/Episodes.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckUsersSavedEpisodes
- **HTTP**: `GET /me/episodes/contains` (Default (api))
- **Notes**: Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.&lt;br/&gt; This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum ..
- **Signature**: `CheckUsersSavedEpisodes(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckUsersSavedEpisodesError>` — **Case A (typed)**
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

### GetAnEpisode
- **HTTP**: `GET /episodes/{id}` (Default (api))
- **Notes**: Get Spotify catalog information for a single episode identified by its unique Spotify ID.
- **Signature**: `GetAnEpisode(string id, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`
- **Returns**: `EpisodeObject`
- **Error**: `SdkException<GetAnEpisodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMultipleEpisodes
- **HTTP**: `GET /episodes` (Default (api))
- **Notes**: Get Spotify catalog information for several episodes based on their Spotify IDs.
- **Signature**: `GetMultipleEpisodes(string ids, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `market` ← `market`
- **Returns**: `ManyEpisodes`
- **Error**: `SdkException<GetMultipleEpisodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersSavedEpisodes
- **HTTP**: `GET /me/episodes` (Default (api))
- **Notes**: Get a list of the episodes saved in the current Spotify user's library.&lt;br/&gt; This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum .
- **Signature**: `GetUsersSavedEpisodes(string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSavedEpisodeObject`
- **Error**: `SdkException<GetUsersSavedEpisodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveEpisodesUser
- **HTTP**: `DELETE /me/episodes` (Default (api))
- **Notes**: Remove one or more episodes from the current user's library.&lt;br/&gt; This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum .
- **Signature**: `RemoveEpisodesUser(string ids, RemoveEpisodesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveEpisodesUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SaveEpisodesUser
- **HTTP**: `PUT /me/episodes` (Default (api))
- **Notes**: Save one or more episodes to the current user's library.&lt;br/&gt; This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum .
- **Signature**: `SaveEpisodesUser(string ids, SaveEpisodesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SaveEpisodesUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
