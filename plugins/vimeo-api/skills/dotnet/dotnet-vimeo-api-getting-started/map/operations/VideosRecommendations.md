# VideosRecommendations — operations

Accessor: `client.VideosRecommendations` · Source: `Api/VideosRecommendations.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetRelatedVideos
- **HTTP**: `GET /videos/{video_id}/videos` (Default (api))
- **Notes**: This method returns every related video of the specified video.
- **Signature**: `GetRelatedVideos(double videoId, Filter46? filter, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetRelatedVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
