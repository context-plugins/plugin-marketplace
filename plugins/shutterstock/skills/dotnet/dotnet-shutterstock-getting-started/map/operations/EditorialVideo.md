<!-- Generated file — do not edit; regenerated with the SDK. -->

# EditorialVideo — operations

Accessor: `client.EditorialVideo` · Source: `Api/EditorialVideo.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEditorialVideo

- **Signature**: `GetEditorialVideo(string id, string country, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `country` ← `country`, `search_id` ← `searchId`
- **Returns**: `EditorialVideoContent`
- **Error**: `SdkException<GetEditorialVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialVideoContent` | `Models/EditorialVideoContent.cs` |
| `GetEditorialVideoError` | `Errors/GetEditorialVideoError.cs` |

### GetEditorialVideoLicenseList

- **Signature**: `GetEditorialVideoLicenseList(string? videoId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`videoId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = `1`, `perPage` = `20`, `teamHistory` = `false`
- **Query params (wire ← C#)**: `video_id` ← `videoId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetEditorialVideoLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `DownloadAvailability` | `Models/Enums/DownloadAvailability.cs` |
| `DownloadHistoryDataList` | `Models/DownloadHistoryDataList.cs` |
| `GetEditorialVideoLicenseListError` | `Errors/GetEditorialVideoLicenseListError.cs` |

### LicenseEditorialVideo

- **Signature**: `LicenseEditorialVideo(LicenseEditorialVideoContentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `LicenseEditorialContentResults`
- **Error**: `SdkException<LicenseEditorialVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `LicenseEditorialVideoContentRequest` | `Models/LicenseEditorialVideoContentRequest.cs` |
| `LicenseEditorialContentResults` | `Models/LicenseEditorialContentResults.cs` |
| `LicenseEditorialVideoError` | `Errors/LicenseEditorialVideoError.cs` |

### ListEditorialVideoCategories

- **Signature**: `ListEditorialVideoCategories(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `EditorialVideoCategoryResults`
- **Error**: `SdkException<ListEditorialVideoCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialVideoCategoryResults` | `Models/EditorialVideoCategoryResults.cs` |
| `ListEditorialVideoCategoriesError` | `Errors/ListEditorialVideoCategoriesError.cs` |

### ListEditorialVideos

- **Signature**: `ListEditorialVideos(IReadOnlyList<string> id, string country, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `id` ← `id`, `country` ← `country`, `search_id` ← `searchId`
- **Returns**: `EditorialVideoResults`
- **Error**: `SdkException<ListEditorialVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialVideoResults` | `Models/EditorialVideoResults.cs` |
| `ListEditorialVideosError` | `Errors/ListEditorialVideosError.cs` |

### SearchEditorialVideos

- **Signature**: `SearchEditorialVideos(string country, string? query, Sort17? sort, string? category, IReadOnlyList<string>? supplierCode, DateTimeOffset? dateStart, DateTimeOffset? dateEnd, Resolution? resolution, double? fps, string? cursor, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`query` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `perPage` = `20`
- **Query params (wire ← C#)**: `country` ← `country`, `query` ← `query`, `sort` ← `sort`, `category` ← `category`, `supplier_code` ← `supplierCode`, `date_start` ← `dateStart`, `date_end` ← `dateEnd`, `resolution` ← `resolution`, `fps` ← `fps`, `per_page` ← `perPage`, `cursor` ← `cursor`
- **Returns**: `EditorialVideoSearchResults`
- **Error**: `SdkException<SearchEditorialVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort17` | `Models/Enums/Sort17.cs` |
| `Resolution` | `Models/Enums/Resolution.cs` |
| `EditorialVideoSearchResults` | `Models/EditorialVideoSearchResults.cs` |
| `SearchEditorialVideosError` | `Errors/SearchEditorialVideosError.cs` |

