# Chapters — operations

Accessor: `client.Chapters` · Source: `Api/Chapters.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAChapter
- **HTTP**: `GET /chapters/{id}` (Default (api))
- **Notes**: Get Spotify catalog information for a single audiobook chapter. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
- **Signature**: `GetAChapter(string id, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`
- **Returns**: `ChapterObject`
- **Error**: `SdkException<GetAChapterError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
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

### GetSeveralChapters
- **HTTP**: `GET /chapters` (Default (api))
- **Notes**: Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
- **Signature**: `GetSeveralChapters(string ids, string? market, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`, `market` ← `market`
- **Returns**: `ManyChapters`
- **Error**: `SdkException<GetSeveralChaptersError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
