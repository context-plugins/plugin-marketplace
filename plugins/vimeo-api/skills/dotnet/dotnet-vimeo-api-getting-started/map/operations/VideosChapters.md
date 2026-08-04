# VideosChapters — operations

Accessor: `client.VideosChapters` · Source: `Api/VideosChapters.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateChapter
- **HTTP**: `POST /videos/{video_id}/chapters` (Default (api))
- **Notes**: This method adds a chapter to the specified video.
- **Signature**: `CreateChapter(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateChapterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateChapterThumbnailOrUploadLink
- **HTTP**: `POST /videos/{video_id}/chapters/{chapter_id}/pictures` (Default (api))
- **Notes**: This method generates either an upload link or a timecode-based thumbnail for the specified saved video chapter. To generate the upload link, which enables the authenticated user to upload a chapter thumbnail image manually, leave the body of the request empty. To generate an automatic timecode-based thumbnail, include the timecode parameter in the body of the request.
- **Signature**: `CreateChapterThumbnailOrUploadLink(double chapterId, double videoId, VideosChaptersPicturesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<CreateChapterThumbnailOrUploadLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateUnsavedChapterThumbnailOrUploadLink
- **HTTP**: `POST /videos/{video_id}/chapters/temporary/pictures` (Default (api))
- **Notes**: This method generates either an upload link or a timecode-based thumbnail for an unsaved video chapter. To generate the upload link, which enables the authenticated user to upload a chapter thumbnail image manually, leave the body of the request empty. To generate an automatic timecode-based thumbnail, specify the timecode parameter in the body of the request.
- **Signature**: `CreateUnsavedChapterThumbnailOrUploadLink(double videoId, VideosChaptersTemporaryPicturesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<CreateUnsavedChapterThumbnailOrUploadLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteChapter
- **HTTP**: `DELETE /videos/{video_id}/chapters/{chapter_id}` (Default (api))
- **Notes**: This method deletes the specified chapter from a video. The authenticated user must be the owner of the video.
- **Signature**: `DeleteChapter(double chapterId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteChapterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteChapterThumbnail
- **HTTP**: `DELETE /videos/{video_id}/chapters/{chapter_id}/pictures/{uid}` (Default (api))
- **Notes**: This method deletes the specified chapter thumbnail from a video. The authenticated user must be the owner of the video that the chapter belongs to. This method deletes both timecode-generated and custom-uploaded thumbnails.
- **Signature**: `DeleteChapterThumbnail(double chapterId, string uid, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteChapterThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditChapter
- **HTTP**: `PATCH /videos/{video_id}/chapters/{chapter_id}` (Default (api))
- **Notes**: This method edits the specified chapter of a video. The authenticated user must be the owner of the video.
- **Signature**: `EditChapter(double chapterId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditChapterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChapter
- **HTTP**: `GET /videos/{video_id}/chapters/{chapter_id}` (Default (api))
- **Notes**: This method returns a single chapter of the specified video.
- **Signature**: `GetChapter(double chapterId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetChapterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChapterThumbnail
- **HTTP**: `GET /videos/{video_id}/chapters/{chapter_id}/pictures/{uid}` (Default (api))
- **Notes**: This method returns the specified thumbnail associated with a saved video chapter.
- **Signature**: `GetChapterThumbnail(double chapterId, double videoId, string uid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<GetChapterThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChapterThumbnails
- **HTTP**: `GET /videos/{video_id}/chapters/{chapter_id}/pictures` (Default (api))
- **Notes**: This method returns every thumbnail associated with the specified saved video chapter.
- **Signature**: `GetChapterThumbnails(double chapterId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<GetChapterThumbnailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChapters
- **HTTP**: `GET /videos/{video_id}/chapters` (Default (api))
- **Notes**: This method returns every chapter of the specified video.
- **Signature**: `GetChapters(double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetChaptersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetUnsavedChapterThumbnail
- **HTTP**: `GET /videos/{video_id}/chapters/temporary/pictures/{uid}` (Default (api))
- **Notes**: This method returns the specified thumbnail associated with an unsaved video chapter.
- **Signature**: `GetUnsavedChapterThumbnail(double videoId, string uid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<GetUnsavedChapterThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetChapterThumbnailActive
- **HTTP**: `PATCH /videos/{video_id}/chapters/{chapter_id}/pictures/{uid}` (Default (api))
- **Notes**: This method sets the specified chapter thumbnail for a video as active.
- **Signature**: `SetChapterThumbnailActive(double chapterId, double videoId, string uid, VideosChaptersPicturesUidRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<SetChapterThumbnailActiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
