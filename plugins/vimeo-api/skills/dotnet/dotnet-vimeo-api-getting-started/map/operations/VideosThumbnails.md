# VideosThumbnails — operations

Accessor: `client.VideosThumbnails` · Source: `Api/VideosThumbnails.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateVideoThumbnail
- **HTTP**: `POST /videos/{video_id}/pictures` (Default (api))
- **Notes**: This method adds a thumbnail image to the specified video. The authenticated user must have team permissions for the video.
- **Signature**: `CreateVideoThumbnail(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateVideoThumbnailAlt1
- **HTTP**: `POST /channels/{channel_id}/videos/{video_id}/pictures` (Default (api))
- **Notes**: This method adds a thumbnail image to the specified video. The authenticated user must have team permissions for the video.
- **Signature**: `CreateVideoThumbnailAlt1(double channelId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoThumbnail
- **HTTP**: `DELETE /videos/{video_id}/pictures/{picture_id}` (Default (api))
- **Notes**: This method deletes the specified thumbnail image from a video. The authenticated user must have team permissions for the video.
- **Signature**: `DeleteVideoThumbnail(double pictureId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EditVideoThumbnail
- **HTTP**: `PATCH /videos/{video_id}/pictures/{picture_id}` (Default (api))
- **Notes**: This method edits the specified video thumbnail image. The authenticated user must be the owner of the thumbnail.
- **Signature**: `EditVideoThumbnail(double pictureId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoThumbnail
- **HTTP**: `GET /videos/{video_id}/pictures/{picture_id}` (Default (api))
- **Notes**: This method returns a single thumbnail image from the specified video. The authenticated user must have team permissions for the video.
- **Signature**: `GetVideoThumbnail(double pictureId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoThumbnails
- **HTTP**: `GET /videos/{video_id}/pictures` (Default (api))
- **Notes**: This method returns all thumbnail images of the specified video. The authenticated user must have team permissions for the video.
- **Signature**: `GetVideoThumbnails(double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoThumbnailsAlt1
- **HTTP**: `GET /channels/{channel_id}/videos/{video_id}/pictures` (Default (api))
- **Notes**: This method returns all thumbnail images of the specified video. The authenticated user must have team permissions for the video.
- **Signature**: `GetVideoThumbnailsAlt1(double channelId, double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
