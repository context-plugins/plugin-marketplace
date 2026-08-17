<!-- Generated file — do not edit; regenerated with the SDK. -->

# ComputerVision — operations

Accessor: `client.ComputerVision` · Source: `Api/ComputerVision.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetKeywords

- **Signature**: `GetKeywords(AssetId assetId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `asset_id` ← `assetId`
- **Returns**: `KeywordDataList`
- **Error**: `SdkException<GetKeywordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 415] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AssetId` | `Models/AnyOf/AssetId.cs` |
| `KeywordDataList` | `Models/KeywordDataList.cs` |
| `GetKeywordsError` | `Errors/GetKeywordsError.cs` |

### GetSimilarImages

- **Signature**: `GetSimilarImages(string assetId, IReadOnlyList<License9>? license, Language? language, View2? view, bool? safe = true, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `license` — nullable, no default → **must pass explicitly**
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - defaults: `safe` = `true`, `page` = `1`, `perPage` = `20`
- **Query params (wire ← C#)**: `asset_id` ← `assetId`, `license` ← `license`, `safe` ← `safe`, `language` ← `language`, `page` ← `page`, `per_page` ← `perPage`, `view` ← `view`
- **Returns**: `ImageSearchResults`
- **Error**: `SdkException<GetSimilarImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `License9` | `Models/Enums/License9.cs` |
| `Language` | `Models/Enums/Language.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `ImageSearchResults` | `Models/ImageSearchResults.cs` |
| `GetSimilarImagesError` | `Errors/GetSimilarImagesError.cs` |

### GetSimilarVideos

- **Signature**: `GetSimilarVideos(string assetId, IReadOnlyList<License9>? license, Language? language, View2? view, bool? safe = true, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `license` — nullable, no default → **must pass explicitly**
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - defaults: `safe` = `true`, `page` = `1`, `perPage` = `20`
- **Query params (wire ← C#)**: `asset_id` ← `assetId`, `license` ← `license`, `safe` ← `safe`, `language` ← `language`, `page` ← `page`, `per_page` ← `perPage`, `view` ← `view`
- **Returns**: `VideoSearchResults`
- **Error**: `SdkException<GetSimilarVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `License9` | `Models/Enums/License9.cs` |
| `Language` | `Models/Enums/Language.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `VideoSearchResults` | `Models/VideoSearchResults.cs` |
| `GetSimilarVideosError` | `Errors/GetSimilarVideosError.cs` |

### UploadImage

- **Signature**: `UploadImage(ImageCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ComputerVisionImageCreateResponse`
- **Error**: `SdkException<UploadImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 413, 415] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ImageCreateRequest` | `Models/ImageCreateRequest.cs` |
| `ComputerVisionImageCreateResponse` | `Models/ComputerVisionImageCreateResponse.cs` |
| `UploadImageError` | `Errors/UploadImageError.cs` |

