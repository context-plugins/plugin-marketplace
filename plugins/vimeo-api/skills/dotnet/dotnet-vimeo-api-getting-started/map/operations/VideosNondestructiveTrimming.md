# VideosNondestructiveTrimming — operations

Accessor: `client.VideosNondestructiveTrimming` · Source: `Api/VideosNondestructiveTrimming.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ClipTrim
- **HTTP**: `POST /videos/{video_id}/trim` (Default (api))
- **Notes**: This method starts a trim operation for the specified video.
- **Signature**: `ClipTrim(double videoId, VideosTrimRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TrimmedVideo`
- **Error**: `SdkException<ClipTrimError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
