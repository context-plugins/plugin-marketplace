# VideosShowcases — operations

Accessor: `client.VideosShowcases` · Source: `Api/VideosShowcases.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddOrRemoveMultipleAlbums
- **HTTP**: `PATCH /videos/{video_id}/albums` (Default (api))
- **Notes**: This method adds or removes the specified video to or from multiple showcases.
- **Signature**: `AddOrRemoveMultipleAlbums(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddOrRemoveMultipleAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoAlbums
- **HTTP**: `GET /videos/{video_id}/albums` (Default (api))
- **Notes**: This method returns all the showcases that contain the specified video.
- **Signature**: `GetVideoAlbums(double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVideoAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
