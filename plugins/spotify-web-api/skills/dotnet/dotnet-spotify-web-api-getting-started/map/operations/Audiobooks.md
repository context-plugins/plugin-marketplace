# Audiobooks — operations

Accessor: `client.Audiobooks` · Source: `Api/Audiobooks.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckUsersSavedAudiobooks
- **HTTP**: `GET /me/audiobooks/contains` (Default (api))
- **Notes**: Check if one or more audiobooks are already saved in the current Spotify user's library.
- **Signature**: `CheckUsersSavedAudiobooks(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `SdkException<CheckUsersSavedAudiobooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAnAudiobook
- **HTTP**: `GET /audiobooks/{id}` (Default (api))
- **Notes**: Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
- **Signature**: `GetAnAudiobook(string id, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`
- **Returns**: `AudiobookObject`
- **Error**: `SdkException<GetAnAudiobookError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAudiobookChapters
- **HTTP**: `GET /audiobooks/{id}/chapters` (Default (api))
- **Notes**: Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
- **Signature**: `GetAudiobookChapters(string id, string? market, int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSimplifiedChapterObject`
- **Error**: `SdkException<GetAudiobookChaptersError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMultipleAudiobooks
- **HTTP**: `GET /audiobooks` (Default (api))
- **Notes**: Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
- **Signature**: `GetMultipleAudiobooks(string ids, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `market` ← `market`
- **Returns**: `ManyAudiobooks`
- **Error**: `SdkException<GetMultipleAudiobooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersSavedAudiobooks
- **HTTP**: `GET /me/audiobooks` (Default (api))
- **Notes**: Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
- **Signature**: `GetUsersSavedAudiobooks(int? limit = 20, int? offset = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 20, `offset` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PagingSavedAudiobookObject`
- **Error**: `SdkException<GetUsersSavedAudiobooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveAudiobooksUser
- **HTTP**: `DELETE /me/audiobooks` (Default (api))
- **Notes**: Remove one or more audiobooks from the Spotify user's library.
- **Signature**: `RemoveAudiobooksUser(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveAudiobooksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SaveAudiobooksUser
- **HTTP**: `PUT /me/audiobooks` (Default (api))
- **Notes**: Save one or more audiobooks to the current Spotify user's library.
- **Signature**: `SaveAudiobooksUser(string ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SaveAudiobooksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
