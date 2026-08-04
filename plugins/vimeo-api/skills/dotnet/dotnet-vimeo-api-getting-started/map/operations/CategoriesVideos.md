# CategoriesVideos — operations

Accessor: `client.CategoriesVideos` · Source: `Api/CategoriesVideos.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckCategoryForVideo
- **HTTP**: `GET /categories/{category}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video in the specified category. You can use this method to determine whether the video belongs to the category.
- **Signature**: `CheckCategoryForVideo(string category, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckCategoryForVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCategoryVideos
- **HTTP**: `GET /categories/{category}/videos` (Default (api))
- **Notes**: This method returns every video that belongs to the specified category.
- **Signature**: `GetCategoryVideos(string category, Direction? direction, Filter? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort6? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetCategoryVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoCategories
- **HTTP**: `GET /videos/{video_id}/categories` (Default (api))
- **Notes**: This method returns every category that contains the specified video.
- **Signature**: `GetVideoCategories(double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVideoCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### SuggestVideoCategory
- **HTTP**: `PUT /videos/{video_id}/categories` (Default (api))
- **Notes**: This method sets multiple categories and subcategories for the specified video. Include the categories as a JSON block in the body of the request using the category field, like this: `[{ "category": "Tech" }, { "category": "Music" }]`. The authenticated user must have edit access to the video. For more information on batch requests like this one, see Using Common Formats and Parameters .
- **Signature**: `SuggestVideoCategory(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SuggestVideoCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
