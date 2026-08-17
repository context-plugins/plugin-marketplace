<!-- Generated file — do not edit; regenerated with the SDK. -->

# Videos — operations

Accessor: `client.Videos` · Source: `Api/Videos.cs` · 18 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddVideoCollectionItems

- **Signature**: `AddVideoCollectionItems(string id, CollectionItemRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CollectionItemRequest` | `Models/CollectionItemRequest.cs` |
| `AddVideoCollectionItemsError` | `Errors/AddVideoCollectionItemsError.cs` |

### CreateVideoCollection

- **Signature**: `CreateVideoCollection(CollectionCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CollectionCreateResponse`
- **Error**: `SdkException<CreateVideoCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CollectionCreateRequest` | `Models/CollectionCreateRequest.cs` |
| `CollectionCreateResponse` | `Models/CollectionCreateResponse.cs` |
| `CreateVideoCollectionError` | `Errors/CreateVideoCollectionError.cs` |

### DeleteVideoCollection

- **Signature**: `DeleteVideoCollection(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVideoCollectionError` | `Errors/DeleteVideoCollectionError.cs` |

### DeleteVideoCollectionItems

- **Signature**: `DeleteVideoCollectionItems(string id, IReadOnlyList<string>? itemId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `itemId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `item_id` ← `itemId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVideoCollectionItemsError` | `Errors/DeleteVideoCollectionItemsError.cs` |

### DownloadVideos

- **Signature**: `DownloadVideos(string id, RedownloadVideo body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Url`
- **Error**: `SdkException<DownloadVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RedownloadVideo` | `Models/RedownloadVideo.cs` |
| `Url` | `Models/Url.cs` |
| `DownloadVideosError` | `Errors/DownloadVideosError.cs` |

### FindSimilarVideos

- **Signature**: `FindSimilarVideos(string id, Language? language, View2? view, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - defaults: `page` = `1`, `perPage` = `20`
- **Query params (wire ← C#)**: `language` ← `language`, `page` ← `page`, `per_page` ← `perPage`, `view` ← `view`
- **Returns**: `VideoSearchResults`
- **Error**: `SdkException<FindSimilarVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Language` | `Models/Enums/Language.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `VideoSearchResults` | `Models/VideoSearchResults.cs` |
| `FindSimilarVideosError` | `Errors/FindSimilarVideosError.cs` |

### GetUpdatedVideos

- **Signature**: `GetUpdatedVideos(string? startDate, string? endDate, Sort5? sort, string? interval = "1 HOUR", int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startDate` — nullable, no default → **must pass explicitly**
  - `endDate` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `interval` = `"1 HOUR"`, `page` = `1`, `perPage` = `100`
- **Query params (wire ← C#)**: `start_date` ← `startDate`, `end_date` ← `endDate`, `interval` ← `interval`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `UpdatedMediaDataList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `UpdatedMediaDataList` | `Models/UpdatedMediaDataList.cs` |

### GetVideo

- **Signature**: `GetVideo(string id, Language? language, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `language` ← `language`, `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `Video`
- **Error**: `SdkException<GetVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Language` | `Models/Enums/Language.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `Video` | `Models/Video.cs` |
| `GetVideoError` | `Errors/GetVideoError.cs` |

### GetVideoCollection

- **Signature**: `GetVideoCollection(string id, IReadOnlyList<Embed>? embed, string? shareCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - `shareCode` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `embed` ← `embed`, `share_code` ← `shareCode`
- **Returns**: `Collection`
- **Error**: `SdkException<GetVideoCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Embed` | `Models/Enums/Embed.cs` |
| `Collection` | `Models/Collection.cs` |
| `GetVideoCollectionError` | `Errors/GetVideoCollectionError.cs` |

### GetVideoCollectionItems

- **Signature**: `GetVideoCollectionItems(string id, string? shareCode, Sort5? sort, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `shareCode` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `page` = `1`, `perPage` = `100`
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `share_code` ← `shareCode`, `sort` ← `sort`
- **Returns**: `CollectionItemDataList`
- **Error**: `SdkException<GetVideoCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `CollectionItemDataList` | `Models/CollectionItemDataList.cs` |
| `GetVideoCollectionItemsError` | `Errors/GetVideoCollectionItemsError.cs` |

### GetVideoCollectionList

- **Signature**: `GetVideoCollectionList(IReadOnlyList<Embed>? embed, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - defaults: `page` = `1`, `perPage` = `100`
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `embed` ← `embed`
- **Returns**: `CollectionDataList`
- **Error**: `SdkException<GetVideoCollectionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Embed` | `Models/Enums/Embed.cs` |
| `CollectionDataList` | `Models/CollectionDataList.cs` |
| `GetVideoCollectionListError` | `Errors/GetVideoCollectionListError.cs` |

### GetVideoLicenseList

- **Signature**: `GetVideoLicenseList(string? videoId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`videoId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = `1`, `perPage` = `20`, `teamHistory` = `false`
- **Query params (wire ← C#)**: `video_id` ← `videoId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetVideoLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `DownloadAvailability` | `Models/Enums/DownloadAvailability.cs` |
| `DownloadHistoryDataList` | `Models/DownloadHistoryDataList.cs` |
| `GetVideoLicenseListError` | `Errors/GetVideoLicenseListError.cs` |

### GetVideoList

- **Signature**: `GetVideoList(IReadOnlyList<string> id, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `id` ← `id`, `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `VideoDataList`
- **Error**: `SdkException<GetVideoListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `View2` | `Models/Enums/View2.cs` |
| `VideoDataList` | `Models/VideoDataList.cs` |
| `GetVideoListError` | `Errors/GetVideoListError.cs` |

### GetVideoSuggestions

- **Signature**: `GetVideoSuggestions(string query, int? limit = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = `10`
- **Query params (wire ← C#)**: `query` ← `query`, `limit` ← `limit`
- **Returns**: `Suggestions`
- **Error**: `SdkException<GetVideoSuggestionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Suggestions` | `Models/Suggestions.cs` |
| `GetVideoSuggestionsError` | `Errors/GetVideoSuggestionsError.cs` |

### LicenseVideos

- **Signature**: `LicenseVideos(string? subscriptionId, Size16? size, string? searchId, LicenseVideoRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `subscriptionId` — nullable, no default → **must pass explicitly**
  - `size` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `subscription_id` ← `subscriptionId`, `size` ← `size`, `search_id` ← `searchId`
- **Returns**: `LicenseVideoResultDataList`
- **Error**: `SdkException<LicenseVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Size16` | `Models/Enums/Size16.cs` |
| `LicenseVideoRequest` | `Models/LicenseVideoRequest.cs` |
| `LicenseVideoResultDataList` | `Models/LicenseVideoResultDataList.cs` |
| `LicenseVideosError` | `Errors/LicenseVideosError.cs` |

### ListVideoCategories

- **Signature**: `ListVideoCategories(Language? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `CategoryDataList`
- **Error**: `SdkException<ListVideoCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Language` | `Models/Enums/Language.cs` |
| `CategoryDataList` | `Models/CategoryDataList.cs` |
| `ListVideoCategoriesError` | `Errors/ListVideoCategoriesError.cs` |

### RenameVideoCollection

- **Signature**: `RenameVideoCollection(string id, CollectionUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RenameVideoCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CollectionUpdateRequest` | `Models/CollectionUpdateRequest.cs` |
| `RenameVideoCollectionError` | `Errors/RenameVideoCollectionError.cs` |

### SearchVideos

- **Signature**: `SearchVideos(DateTimeOffset? addedDate, DateTimeOffset? addedDateStart, DateTimeOffset? addedDateEnd, AspectRatio? aspectRatio, string? category, IReadOnlyList<string>? contributor, IReadOnlyList<string>? contributorCountry, int? duration, int? durationFrom, int? durationTo, double? fps, double? fpsFrom, double? fpsTo, Language? language, IReadOnlyList<License9>? license, IReadOnlyList<string>? model, Orientation2? orientation, PeopleAge2? peopleAge, IReadOnlyList<PeopleEthnicity5>? peopleEthnicity, PeopleGender2? peopleGender, int? peopleNumber, bool? peopleModelReleased, string? query, Resolution? resolution, Sort2? sort, View2? view, bool? keywordSafeSearch = true, int? page = 1, int? perPage = 20, bool? safe = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 26 params (`addedDate` … `view`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `keywordSafeSearch` = `true`, `page` = `1`, `perPage` = `20`, `safe` = `true`
- **Query params (wire ← C#)**: `added_date` ← `addedDate`, `added_date_start` ← `addedDateStart`, `added_date_end` ← `addedDateEnd`, `aspect_ratio` ← `aspectRatio`, `category` ← `category`, `contributor` ← `contributor`, `contributor_country` ← `contributorCountry`, `duration` ← `duration`, `duration_from` ← `durationFrom`, `duration_to` ← `durationTo`, `fps` ← `fps`, `fps_from` ← `fpsFrom`, `fps_to` ← `fpsTo`, `keyword_safe_search` ← `keywordSafeSearch`, `language` ← `language`, `license` ← `license`, `model` ← `model`, `orientation` ← `orientation`, `page` ← `page`, `per_page` ← `perPage`, `people_age` ← `peopleAge`, `people_ethnicity` ← `peopleEthnicity`, `people_gender` ← `peopleGender`, `people_number` ← `peopleNumber`, `people_model_released` ← `peopleModelReleased`, `query` ← `query`, `resolution` ← `resolution`, `safe` ← `safe`, `sort` ← `sort`, `view` ← `view`
- **Returns**: `VideoSearchResults`
- **Error**: `SdkException<SearchVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AspectRatio` | `Models/Enums/AspectRatio.cs` |
| `Language` | `Models/Enums/Language.cs` |
| `License9` | `Models/Enums/License9.cs` |
| `Orientation2` | `Models/Enums/Orientation2.cs` |
| `PeopleAge2` | `Models/Enums/PeopleAge2.cs` |
| `PeopleEthnicity5` | `Models/Enums/PeopleEthnicity5.cs` |
| `PeopleGender2` | `Models/Enums/PeopleGender2.cs` |
| `Resolution` | `Models/Enums/Resolution.cs` |
| `Sort2` | `Models/Enums/Sort2.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `VideoSearchResults` | `Models/VideoSearchResults.cs` |
| `SearchVideosError` | `Errors/SearchVideosError.cs` |

