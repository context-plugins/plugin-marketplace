# ShowcasesShowcaseVideos — operations

Accessor: `client.ShowcasesShowcaseVideos` · Source: `Api/ShowcasesShowcaseVideos.cs` · 16 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoToShowcase
- **HTTP**: `PUT /users/{user_id}/albums/{album_id}/videos/{video_id}` (Default (api))
- **Notes**: This method adds a single video to the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `AddVideoToShowcase(double albumId, double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoToShowcaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideoToShowcaseAlt2
- **HTTP**: `PUT /me/albums/{album_id}/videos/{video_id}` (Default (api))
- **Notes**: This method adds a single video to the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `AddVideoToShowcaseAlt2(double albumId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoToShowcaseAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAvailableShowcaseVideos
- **HTTP**: `GET /albums/{album_id}/available_videos` (Default (api))
- **Notes**: This method returns every video belonging to the authenticated user that can be added to or removed from the specified showcase.
- **Signature**: `GetAvailableShowcaseVideos(double albumId, Direction? direction, double? page, double? perPage, string? query, Sort2? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetAvailableShowcaseVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetAvailableVideoShowcases
- **HTTP**: `GET /videos/{video_id}/available_albums` (Default (api))
- **Notes**: This method returns every showcase to which the authenticated user can add or remove the specified video. The user must be the owner of the showcase.
- **Signature**: `GetAvailableVideoShowcases(double videoId, Direction? direction, double? page, double? perPage, string? query, Sort74? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `AlbumConnection`
- **Error**: `SdkException<GetAvailableVideoShowcasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetShowcaseVideo
- **HTTP**: `GET /users/{user_id}/albums/{album_id}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video belonging to the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `GetShowcaseVideo(double albumId, double userId, double videoId, string? password, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `password` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `password` ← `password`
- **Returns**: `Video`
- **Error**: `SdkException<GetShowcaseVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetShowcaseVideoAlt2
- **HTTP**: `GET /me/albums/{album_id}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video belonging to the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `GetShowcaseVideoAlt2(double albumId, double videoId, string? password, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `password` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `password` ← `password`
- **Returns**: `Video`
- **Error**: `SdkException<GetShowcaseVideoAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetShowcaseVideos
- **HTTP**: `GET /users/{user_id}/albums/{album_id}/videos` (Default (api))
- **Notes**: This method returns every video in the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `GetShowcaseVideos(double albumId, double userId, string? containingUri, Direction? direction, Filter10? filter, bool? filterEmbeddable, double? page, string? password, double? perPage, string? query, Sort21? sort, bool? weakSearch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`containingUri` … `weakSearch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `containing_uri` ← `containingUri`, `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `password` ← `password`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`, `weak_search` ← `weakSearch`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetShowcaseVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetShowcaseVideosAlt2
- **HTTP**: `GET /me/albums/{album_id}/videos` (Default (api))
- **Notes**: This method returns every video in the specified showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `GetShowcaseVideosAlt2(double albumId, string? containingUri, Direction? direction, Filter10? filter, bool? filterEmbeddable, double? page, string? password, double? perPage, string? query, Sort21? sort, bool? weakSearch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`containingUri` … `weakSearch`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `containing_uri` ← `containingUri`, `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `password` ← `password`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`, `weak_search` ← `weakSearch`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetShowcaseVideosAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### RemoveVideoFromShowcase
- **HTTP**: `DELETE /users/{user_id}/albums/{album_id}/videos/{video_id}` (Default (api))
- **Notes**: This method removes the specified video from its showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `RemoveVideoFromShowcase(double albumId, double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveVideoFromShowcaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveVideoFromShowcaseAlt2
- **HTTP**: `DELETE /me/albums/{album_id}/videos/{video_id}` (Default (api))
- **Notes**: This method removes the specified video from its showcase. The authenticated user must be the owner of the showcase.
- **Signature**: `RemoveVideoFromShowcaseAlt2(double albumId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveVideoFromShowcaseAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceVideosInShowcase
- **HTTP**: `PUT /users/{user_id}/albums/{album_id}/videos` (Default (api))
- **Notes**: This method replaces all the videos in the specified showcase with a new set of one or more videos. The authenticated user must be the owner of the showcase.
- **Signature**: `ReplaceVideosInShowcase(double albumId, double userId, UsersAlbumsVideosRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReplaceVideosInShowcaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReplaceVideosInShowcaseAlt2
- **HTTP**: `PUT /me/albums/{album_id}/videos` (Default (api))
- **Notes**: This method replaces all the videos in the specified showcase with a new set of one or more videos. The authenticated user must be the owner of the showcase.
- **Signature**: `ReplaceVideosInShowcaseAlt2(double albumId, MeAlbumsVideosRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ReplaceVideosInShowcaseAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetVideoAsShowcaseFeatured
- **HTTP**: `PATCH /users/{user_id}/albums/{album_id}/videos/{video_id}/set_featured_video` (Default (api))
- **Notes**: This method sets the featured video of the specified showcase. The authenticated user must be the owner of the showcase, and the featured video must belong to it.
- **Signature**: `SetVideoAsShowcaseFeatured(double albumId, double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Album`
- **Error**: `SdkException<SetVideoAsShowcaseFeaturedError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetVideoAsShowcaseFeaturedAlt2
- **HTTP**: `PATCH /me/albums/{album_id}/videos/{video_id}/set_featured_video` (Default (api))
- **Notes**: This method sets the featured video of the specified showcase. The authenticated user must be the owner of the showcase, and the featured video must belong to it.
- **Signature**: `SetVideoAsShowcaseFeaturedAlt2(double albumId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Album`
- **Error**: `SdkException<SetVideoAsShowcaseFeaturedAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetVideoAsShowcaseThumbnail
- **HTTP**: `POST /users/{user_id}/albums/{album_id}/videos/{video_id}/set_album_thumbnail` (Default (api))
- **Notes**: This method creates a thumbnail image for a showcase from the specified frame of a showcase video. The authenticated user must be the owner of the showcase.
- **Signature**: `SetVideoAsShowcaseThumbnail(double albumId, double userId, double videoId, UsersAlbumsVideosVideoIdSetAlbumThumbnailRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Album`
- **Error**: `SdkException<SetVideoAsShowcaseThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetVideoAsShowcaseThumbnailAlt2
- **HTTP**: `POST /me/albums/{album_id}/videos/{video_id}/set_album_thumbnail` (Default (api))
- **Notes**: This method creates a thumbnail image for a showcase from the specified frame of a showcase video. The authenticated user must be the owner of the showcase.
- **Signature**: `SetVideoAsShowcaseThumbnailAlt2(double albumId, double videoId, MeAlbumsVideosSetAlbumThumbnailRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Album`
- **Error**: `SdkException<SetVideoAsShowcaseThumbnailAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
