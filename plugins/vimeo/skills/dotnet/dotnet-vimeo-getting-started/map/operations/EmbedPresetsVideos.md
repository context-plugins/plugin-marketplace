# EmbedPresetsVideos — operations

Accessor: `client.EmbedPresetsVideos` · Source: `Api/EmbedPresetsVideos.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoEmbedPreset
- **HTTP**: `PUT /videos/{video_id}/presets/{preset_id}` (Default (api))
- **Notes**: This method adds an embed preset to the specified video. The authenticated user must either be the owner of the video or a team user with the contributor or admin role.
- **Signature**: `AddVideoEmbedPreset(double presetId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoEmbedPreset
- **HTTP**: `DELETE /videos/{video_id}/presets/{preset_id}` (Default (api))
- **Notes**: This method removes the specified embed preset from a video. The authenticated user must either be the owner of the video or a team user with the contributor or admin role.
- **Signature**: `DeleteVideoEmbedPreset(double presetId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoEmbedPresetError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEmbedPresetVideos
- **HTTP**: `GET /users/{user_id}/presets/{preset_id}/videos` (Default (api))
- **Notes**: This method returns every video to which the specified embed preset has been added. The authenticated user must be the owner of the videos.
- **Signature**: `GetEmbedPresetVideos(double presetId, double userId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetEmbedPresetVideosAlt1
- **HTTP**: `GET /me/presets/{preset_id}/videos` (Default (api))
- **Notes**: This method returns every video to which the specified embed preset has been added. The authenticated user must be the owner of the videos.
- **Signature**: `GetEmbedPresetVideosAlt1(double presetId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoEmbedPreset
- **HTTP**: `GET /videos/{video_id}/presets/{preset_id}` (Default (api))
- **Notes**: This method determines whether a video has the specified embed preset.
- **Signature**: `GetVideoEmbedPreset(double presetId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVideoEmbedPresetError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
