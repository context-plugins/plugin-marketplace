# ComputerVision — operations

Accessor: `client.ComputerVision` · Source: `Api/ComputerVision.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetKeywords
- **HTTP**: `GET /v2/cv/keywords` (Default (api))
- **Notes**: This endpoint returns a list of suggested keywords for a media item that you specify or upload.
- **Signature**: `GetKeywords(AssetId assetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset_id` ← `assetId`
- **Returns**: `KeywordDataList`
- **Error**: `SdkException<GetKeywordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 415] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSimilarImages
- **HTTP**: `GET /v2/cv/similar/images` (Default (api))
- **Notes**: This endpoint returns images that are visually similar to an image that you specify or upload.
- **Signature**: `GetSimilarImages(string assetId, IReadOnlyList<License9>? license, Language? language, View2? view, bool? safe = true, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `license` — nullable, no default → **must pass explicitly**
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - defaults: `safe` = true, `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `asset_id` ← `assetId`, `license` ← `license`, `safe` ← `safe`, `language` ← `language`, `page` ← `page`, `per_page` ← `perPage`, `view` ← `view`
- **Returns**: `ImageSearchResults`
- **Error**: `SdkException<GetSimilarImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetSimilarVideos
- **HTTP**: `GET /v2/cv/similar/videos` (Default (api))
- **Notes**: This endpoint returns videos that are visually similar to an image that you specify or upload.
- **Signature**: `GetSimilarVideos(string assetId, IReadOnlyList<License9>? license, Language? language, View2? view, bool? safe = true, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `license` — nullable, no default → **must pass explicitly**
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - defaults: `safe` = true, `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `asset_id` ← `assetId`, `license` ← `license`, `safe` ← `safe`, `language` ← `language`, `page` ← `page`, `per_page` ← `perPage`, `view` ← `view`
- **Returns**: `VideoSearchResults`
- **Error**: `SdkException<GetSimilarVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### UploadImage
- **HTTP**: `POST /v2/cv/images` (Default (api))
- **Notes**: This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.
- **Signature**: `UploadImage(ImageCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComputerVisionImageCreateResponse`
- **Error**: `SdkException<UploadImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 413, 415] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
