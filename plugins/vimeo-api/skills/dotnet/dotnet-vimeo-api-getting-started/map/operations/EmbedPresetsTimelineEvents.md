# EmbedPresetsTimelineEvents — operations

Accessor: `client.EmbedPresetsTimelineEvents` · Source: `Api/EmbedPresetsTimelineEvents.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateVideoCustomLogo
- **HTTP**: `POST /videos/{video_id}/timelinethumbnails` (Default (api))
- **Notes**: This method adds a timeline event thumbnail to the specified video. The authenticated user must be the owner of the video.
- **Signature**: `CreateVideoCustomLogo(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateVideoCustomLogoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoCustomLogo
- **HTTP**: `GET /videos/{video_id}/timelinethumbnails/{thumbnail_id}` (Default (api))
- **Notes**: This method returns a single timeline event thumbnail that belongs to the specified video.
- **Signature**: `GetVideoCustomLogo(double thumbnailId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVideoCustomLogoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
