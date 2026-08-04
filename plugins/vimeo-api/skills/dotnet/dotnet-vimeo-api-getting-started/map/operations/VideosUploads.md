# VideosUploads — operations

Accessor: `client.VideosUploads` · Source: `Api/VideosUploads.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CompleteStreamingUpload
- **HTTP**: `DELETE /users/{user_id}/uploads/{upload_id}` (Default (api))
- **Notes**: This method completes the specified streaming upload of the authenticated user.
- **Signature**: `CompleteStreamingUpload(double uploadId, double userId, string signature, double videoFileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `signature` ← `signature`, `video_file_id` ← `videoFileId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<CompleteStreamingUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUploadAttempt
- **HTTP**: `GET /users/{user_id}/uploads/{upload_id}` (Default (api))
- **Notes**: This method returns the specified upload attempt of the authenticated user. _This method has been deprecated. For information on our currently supported upload approaches, see our Working with Video Uploads guide._
- **Signature**: `GetUploadAttempt(double uploadId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UploadVideo
- **HTTP**: `POST /users/{user_id}/videos` (Default (api))
- **Notes**: This method begins the video upload process for the authenticated user. For more information, see our upload documentation .
- **Signature**: `UploadVideo(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadVideoAlt1
- **HTTP**: `POST /me/videos` (Default (api))
- **Notes**: This method begins the video upload process for the authenticated user. For more information, see our upload documentation .
- **Signature**: `UploadVideoAlt1(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadVideoAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
