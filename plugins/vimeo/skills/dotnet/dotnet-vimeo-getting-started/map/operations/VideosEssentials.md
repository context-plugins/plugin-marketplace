# VideosEssentials — operations

Accessor: `client.VideosEssentials` · Source: `Api/VideosEssentials.cs` · 15 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckIfUserOwnsVideo
- **HTTP**: `GET /users/{user_id}/videos/{video_id}` (Default (api))
- **Notes**: This method determines whether the authenticated user is the owner of the specified video.
- **Signature**: `CheckIfUserOwnsVideo(double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<CheckIfUserOwnsVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckIfUserOwnsVideoAlt1
- **HTTP**: `GET /me/videos/{video_id}` (Default (api))
- **Notes**: This method determines whether the authenticated user is the owner of the specified video.
- **Signature**: `CheckIfUserOwnsVideoAlt1(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<CheckIfUserOwnsVideoAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CopyVideo
- **HTTP**: `POST /users/{user_id}/videos/{video_id}/copy` (Default (api))
- **Notes**: This method creates a copy of the specified video. Only the source's current version is copied; prior version history is not carried over.
- **Signature**: `CopyVideo(double userId, double videoId, UsersVideosCopyRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<CopyVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CopyVideoAlt2
- **HTTP**: `POST /me/videos/{video_id}/copy` (Default (api))
- **Notes**: This method creates a copy of the specified video. Only the source's current version is copied; prior version history is not carried over.
- **Signature**: `CopyVideoAlt2(double videoId, MeVideosCopyRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<CopyVideoAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideo
- **HTTP**: `DELETE /videos/{video_id}` (Default (api))
- **Notes**: This method deletes the specified video. The authenticated user must be the owner of the video.
- **Signature**: `DeleteVideo(double videoId, VideosRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideos
- **HTTP**: `DELETE /users/{user_id}/videos` (Default (api))
- **Notes**: This method deletes one or more videos belonging to the specified user. The authenticated user must have permission to delete the videos. Specify the videos to delete in a comma-separated list by URI using the uris query parameter.
- **Signature**: `DeleteVideos(double userId, string uris, UsersVideosRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `uris` ← `uris`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideosAlt1
- **HTTP**: `DELETE /me/videos` (Default (api))
- **Notes**: This method deletes one or more videos belonging to the specified user. The authenticated user must have permission to delete the videos. Specify the videos to delete in a comma-separated list by URI using the uris query parameter.
- **Signature**: `DeleteVideosAlt1(string uris, MeVideosRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `uris` ← `uris`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideosAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditVideo
- **HTTP**: `PATCH /videos/{video_id}` (Default (api))
- **Notes**: This method edits the specified video.
- **Signature**: `EditVideo(double videoId, VideosRequest1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<EditVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAppearances
- **HTTP**: `GET /users/{user_id}/appearances` (Default (api))
- **Notes**: This method returns all the videos in which the authenticated user has a credited appearance.
- **Signature**: `GetAppearances(double userId, Direction? direction, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort15? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetAppearancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetAppearancesAlt1
- **HTTP**: `GET /me/appearances` (Default (api))
- **Notes**: This method returns all the videos in which the authenticated user has a credited appearance.
- **Signature**: `GetAppearancesAlt1(Direction? direction, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort15? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetAppearancesAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideo
- **HTTP**: `GET /videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video.
- **Signature**: `GetVideo(double videoId, bool? timeLinks, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `timeLinks` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `time_links` ← `timeLinks`
- **Returns**: `Video`
- **Error**: `SdkException<GetVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideos
- **HTTP**: `GET /users/{user_id}/videos` (Default (api))
- **Notes**: This method returns all the videos that the authenticated user has uploaded.
- **Signature**: `GetVideos(double userId, string? containingUri, Direction? direction, Filter22? filter, bool? filterEmbeddable, bool? filterPlayable, bool? filterScreenRecorded, string? filterTag, string? filterTagAllOf, string? filterTagExclude, double? filterUploader, double? page, double? perPage, string? query, QueryFields? queryFields, Sort39? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`containingUri` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `containing_uri` ← `containingUri`, `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `filter_playable` ← `filterPlayable`, `filter_screen_recorded` ← `filterScreenRecorded`, `filter_tag` ← `filterTag`, `filter_tag_all_of` ← `filterTagAllOf`, `filter_tag_exclude` ← `filterTagExclude`, `filter_uploader` ← `filterUploader`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `query_fields` ← `queryFields`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideosAlt1
- **HTTP**: `GET /me/videos` (Default (api))
- **Notes**: This method returns all the videos that the authenticated user has uploaded.
- **Signature**: `GetVideosAlt1(string? containingUri, Direction? direction, Filter22? filter, bool? filterEmbeddable, bool? filterPlayable, bool? filterScreenRecorded, string? filterTag, string? filterTagAllOf, string? filterTagExclude, double? filterUploader, double? page, double? perPage, string? query, QueryFields? queryFields, Sort39? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`containingUri` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `containing_uri` ← `containingUri`, `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `filter_playable` ← `filterPlayable`, `filter_screen_recorded` ← `filterScreenRecorded`, `filter_tag` ← `filterTag`, `filter_tag_all_of` ← `filterTagAllOf`, `filter_tag_exclude` ← `filterTagExclude`, `filter_uploader` ← `filterUploader`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `query_fields` ← `queryFields`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### SearchVideos
- **HTTP**: `GET /videos` (Default (api))
- **Notes**: This method returns all the videos that match custom search criteria.
- **Signature**: `SearchVideos(Direction? direction, Filter45? filter, string? links, double? page, double? perPage, string? query, Sort73? sort, string? uris, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`direction` … `uris`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `links` ← `links`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`, `uris` ← `uris`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<SearchVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404] · `TryGetLegacyError(out LegacyError)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### UpdateVideoCustomMetadata
- **HTTP**: `PUT /videos/{video_id}/custom_metadata` (Default (api))
- **Notes**: This method sets, updates, or clears custom metadata values on a single video. The authenticated user must own the video or have team permission to edit it. Send each value as a `{field_id, field_value}` pair under the `fields` array. The value's data type is validated against the field's definition (set via `POST /teams/{user_id}/custom_metadata`): | Type | Accepted format | | -------------- | ------------------------------------------------------- | | `str` | A non-empty string of up to 50 characters | | `int` | An integer, optionally negative (for example, `42`) | | `date` | `YYYY-MM-DD` | | `bool` | `"true"`, `"false"`, `"1"`, or `"0"` | | `select` | One of the values defined for the field | | `multi-select` | A JSON-encoded array of allowed values | To clear an existing value, send `field_value: null`. The field will return to its default value (if one is defined) or become unset.
- **Signature**: `UpdateVideoCustomMetadata(double videoId, VideosCustomMetadataRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<CustomMetadataValues>`
- **Error**: `SdkException<UpdateVideoCustomMetadataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetLegacyError(out LegacyError)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
