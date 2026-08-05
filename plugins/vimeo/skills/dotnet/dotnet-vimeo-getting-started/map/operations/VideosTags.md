# VideosTags — operations

Accessor: `client.VideosTags` · Source: `Api/VideosTags.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoTag
- **HTTP**: `PUT /videos/{video_id}/tags/{word}` (Default (api))
- **Notes**: This method adds a single tag to the specified video. The authenticated user must have edit access to the video.
- **Signature**: `AddVideoTag(double videoId, string word, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Tag`
- **Error**: `SdkException<AddVideoTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideoTags
- **HTTP**: `PUT /videos/{video_id}/tags` (Default (api))
- **Notes**: This method adds multiple tags to the specified video. Include the tags as a JSON array as the body of the request with the name field, like this: `[{ "name": "funny"}, {"name": "concert" }]`. The authenticated user must have edit access to the video. For more information on batch requests like this one, see Using Common Formats and Parameters .
- **Signature**: `AddVideoTags(double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `IReadOnlyList<Tag>`
- **Error**: `SdkException<AddVideoTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### CheckVideoForTag
- **HTTP**: `GET /videos/{video_id}/tags/{word}` (Default (api))
- **Notes**: This method determines whether the specified tag has been added to a video. The authenticated user must be the owner of the video.
- **Signature**: `CheckVideoForTag(double videoId, string word, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Tag`
- **Error**: `SdkException<CheckVideoForTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoTag
- **HTTP**: `DELETE /videos/{video_id}/tags/{word}` (Default (api))
- **Notes**: This method removes the specified tag from a video. The authenticated user must have edit access to the video.
- **Signature**: `DeleteVideoTag(double videoId, string word, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoTags
- **HTTP**: `GET /videos/{video_id}/tags` (Default (api))
- **Notes**: This method returns all the tags associated with the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetVideoTags(double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `TagConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideosWithTag
- **HTTP**: `GET /tags/{word}/videos` (Default (api))
- **Notes**: This method returns all the public videos associated with the specified tag.
- **Signature**: `GetVideosWithTag(string word, Direction? direction, double? page, double? perPage, Sort47? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetVideosWithTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
