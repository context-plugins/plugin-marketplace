# ShowcasesCustomShowcaseThumbnails — operations

Accessor: `client.ShowcasesCustomShowcaseThumbnails` · Source: `Api/ShowcasesCustomShowcaseThumbnails.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateShowcaseCustomThumb
- **HTTP**: `POST /users/{user_id}/albums/{album_id}/custom_thumbnails` (Default (api))
- **Notes**: This method adds an uploaded image file as a custom thumbnail for the specified showcase. The image doesn't need to be a still from a showcase video, unlike with the standard thumbnail method . The authenticated user must be the owner of the showcase. For information on how to upload the thumbnail, see our Working with Thumbnail Uploads guide, and follow the same steps.
- **Signature**: `CreateShowcaseCustomThumb(double albumId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateShowcaseCustomThumbError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteShowcaseCustomThumbnail
- **HTTP**: `DELETE /users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}` (Default (api))
- **Notes**: This method deletes the specified custom thumbnail from its showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `DeleteShowcaseCustomThumbnail(double albumId, double thumbnailId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteShowcaseCustomThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetShowcaseCustomThumbnail
- **HTTP**: `GET /users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}` (Default (api))
- **Notes**: This method returns a single custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `GetShowcaseCustomThumbnail(double albumId, double thumbnailId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetShowcaseCustomThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetShowcaseCustomThumbs
- **HTTP**: `GET /users/{user_id}/albums/{album_id}/custom_thumbnails` (Default (api))
- **Notes**: This method returns every custom thumbnail of the specified showcase.
- **Signature**: `GetShowcaseCustomThumbs(double albumId, double userId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetShowcaseCustomThumbsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReplaceShowcaseCustomThumb
- **HTTP**: `PATCH /users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}` (Default (api))
- **Notes**: This method replaces the specified custom showcase thumbnail with a new image file. The authenticated user must be the owner of the showcase. For information on how to upload the thumbnail, see our Working with Thumbnail Uploads guide.
- **Signature**: `ReplaceShowcaseCustomThumb(double albumId, double thumbnailId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReplaceShowcaseCustomThumbError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
