# VideosAnimatedThumbnails — operations

Accessor: `client.VideosAnimatedThumbnails` · Source: `Api/VideosAnimatedThumbnails.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAnimatedThumbset
- **HTTP**: `POST /videos/{video_id}/animated_thumbsets` (Default (api))
- **Notes**: This method creates a set of animated thumbnails for the specified video. Please note that you can't create more than four sets of animated thumbnails for the same video.
- **Signature**: `CreateAnimatedThumbset(double videoId, VideosAnimatedThumbsetsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnimatedThumbset`
- **Error**: `SdkException<CreateAnimatedThumbsetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetLegacyError(out LegacyError)` [403, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAnimatedThumbset
- **HTTP**: `DELETE /videos/{video_id}/animated_thumbsets/{picture_id}` (Default (api))
- **Notes**: This method deletes a set of animated thumbnails for the specified video.
- **Signature**: `DeleteAnimatedThumbset(string pictureId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteAnimatedThumbsetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAllAnimatedThumbset
- **HTTP**: `GET /videos/{video_id}/animated_thumbsets` (Default (api))
- **Notes**: This method returns all the sets of animated thumbnails associated with the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetAllAnimatedThumbset(double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `AnimatedThumbsetConnection`
- **Error**: `SdkException<GetAllAnimatedThumbsetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetAnimatedThumbset
- **HTTP**: `GET /videos/{video_id}/animated_thumbsets/{picture_id}` (Default (api))
- **Notes**: This method returns a particular set of animated thumbnails associated with the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetAnimatedThumbset(string pictureId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnimatedThumbset`
- **Error**: `SdkException<GetAnimatedThumbsetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAnimatedThumbsetStatus
- **HTTP**: `GET /videos/{video_id}/animated_thumbsets/{picture_id}/status` (Default (api))
- **Notes**: This method returns the status of a particular set of animated thumbnails associated with the specified video. The status indicates whether the thumbnails are ready to use. The authenticated user must be the owner of the video.
- **Signature**: `GetAnimatedThumbsetStatus(string pictureId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AnimatedThumbset`
- **Error**: `SdkException<GetAnimatedThumbsetStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
