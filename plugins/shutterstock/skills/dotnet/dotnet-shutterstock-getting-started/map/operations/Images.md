<!-- Generated file — do not edit; regenerated with the SDK. -->

# Images — operations

Accessor: `client.Images` · Source: `Api/Images.cs` · 21 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddImageCollectionItems

- **Signature**: `AddImageCollectionItems(string id, CollectionItemRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddImageCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CollectionItemRequest` | `Models/CollectionItemRequest.cs` |
| `AddImageCollectionItemsError` | `Errors/AddImageCollectionItemsError.cs` |

### BulkSearchImages

- **Signature**: `BulkSearchImages(DateTimeOffset? addedDate, DateTimeOffset? addedDateStart, double? aspectRatioMin, double? aspectRatioMax, double? aspectRatio, DateTimeOffset? addedDateEnd, string? category, string? color, IReadOnlyList<string>? contributor, ContributorCountryModel? contributorCountry, string? fields, int? height, int? heightFrom, int? heightTo, IReadOnlyList<ImageType2>? imageType, Language? language, IReadOnlyList<License>? license, IReadOnlyList<string>? model, Orientation2? orientation, bool? peopleModelReleased, PeopleAge2? peopleAge, IReadOnlyList<PeopleEthnicity2>? peopleEthnicity, PeopleGender2? peopleGender, int? peopleNumber, RegionModel? region, Sort2? sort, View2? view, int? width, int? widthFrom, int? widthTo, IReadOnlyList<SearchImage> body, bool? keywordSafeSearch = true, int? page = 1, int? perPage = 20, bool? safe = true, bool? spellcheckQuery = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 30 params (`addedDate` … `widthTo`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `keywordSafeSearch` = `true`, `page` = `1`, `perPage` = `20`, `safe` = `true`, `spellcheckQuery` = `true`
- **Query params (wire ← C#)**: `added_date` ← `addedDate`, `added_date_start` ← `addedDateStart`, `aspect_ratio_min` ← `aspectRatioMin`, `aspect_ratio_max` ← `aspectRatioMax`, `aspect_ratio` ← `aspectRatio`, `added_date_end` ← `addedDateEnd`, `category` ← `category`, `color` ← `color`, `contributor` ← `contributor`, `contributor_country` ← `contributorCountry`, `fields` ← `fields`, `height` ← `height`, `height_from` ← `heightFrom`, `height_to` ← `heightTo`, `image_type` ← `imageType`, `keyword_safe_search` ← `keywordSafeSearch`, `language` ← `language`, `license` ← `license`, `model` ← `model`, `orientation` ← `orientation`, `page` ← `page`, `per_page` ← `perPage`, `people_model_released` ← `peopleModelReleased`, `people_age` ← `peopleAge`, `people_ethnicity` ← `peopleEthnicity`, `people_gender` ← `peopleGender`, `people_number` ← `peopleNumber`, `region` ← `region`, `safe` ← `safe`, `sort` ← `sort`, `spellcheck_query` ← `spellcheckQuery`, `view` ← `view`, `width` ← `width`, `width_from` ← `widthFrom`, `width_to` ← `widthTo`
- **Returns**: `BulkImageSearchResults`
- **Error**: `SdkException<BulkSearchImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ContributorCountryModel` | `Models/AnyOf/ContributorCountryModel.cs` |
| `ImageType2` | `Models/Enums/ImageType2.cs` |
| `Language` | `Models/Enums/Language.cs` |
| `License` | `Models/Enums/License.cs` |
| `Orientation2` | `Models/Enums/Orientation2.cs` |
| `PeopleAge2` | `Models/Enums/PeopleAge2.cs` |
| `PeopleEthnicity2` | `Models/Enums/PeopleEthnicity2.cs` |
| `PeopleGender2` | `Models/Enums/PeopleGender2.cs` |
| `RegionModel` | `Models/AnyOf/RegionModel.cs` |
| `Sort2` | `Models/Enums/Sort2.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `SearchImage` | `Models/SearchImage.cs` |
| `BulkImageSearchResults` | `Models/BulkImageSearchResults.cs` |
| `BulkSearchImagesError` | `Errors/BulkSearchImagesError.cs` |

### CreateImageCollection

- **Signature**: `CreateImageCollection(CollectionCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CollectionCreateResponse`
- **Error**: `SdkException<CreateImageCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CollectionCreateRequest` | `Models/CollectionCreateRequest.cs` |
| `CollectionCreateResponse` | `Models/CollectionCreateResponse.cs` |
| `CreateImageCollectionError` | `Errors/CreateImageCollectionError.cs` |

### DeleteImageCollection

- **Signature**: `DeleteImageCollection(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteImageCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteImageCollectionError` | `Errors/DeleteImageCollectionError.cs` |

### DeleteImageCollectionItems

- **Signature**: `DeleteImageCollectionItems(string id, IReadOnlyList<string>? itemId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `itemId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `item_id` ← `itemId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteImageCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteImageCollectionItemsError` | `Errors/DeleteImageCollectionItemsError.cs` |

### DownloadImage

- **Signature**: `DownloadImage(string id, RedownloadImage body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Url`
- **Error**: `SdkException<DownloadImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RedownloadImage` | `Models/RedownloadImage.cs` |
| `Url` | `Models/Url.cs` |
| `DownloadImageError` | `Errors/DownloadImageError.cs` |

### GetImage

- **Signature**: `GetImage(string id, Language? language, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `language` ← `language`, `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `Image`
- **Error**: `SdkException<GetImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Language` | `Models/Enums/Language.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `Image` | `Models/Image.cs` |
| `GetImageError` | `Errors/GetImageError.cs` |

### GetImageCollection

- **Signature**: `GetImageCollection(string id, IReadOnlyList<Embed>? embed, string? shareCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - `shareCode` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `embed` ← `embed`, `share_code` ← `shareCode`
- **Returns**: `Collection`
- **Error**: `SdkException<GetImageCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Embed` | `Models/Enums/Embed.cs` |
| `Collection` | `Models/Collection.cs` |
| `GetImageCollectionError` | `Errors/GetImageCollectionError.cs` |

### GetImageCollectionItems

- **Signature**: `GetImageCollectionItems(string id, string? shareCode, Sort5? sort, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `shareCode` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `page` = `1`, `perPage` = `100`
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `share_code` ← `shareCode`, `sort` ← `sort`
- **Returns**: `CollectionItemDataList`
- **Error**: `SdkException<GetImageCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `CollectionItemDataList` | `Models/CollectionItemDataList.cs` |
| `GetImageCollectionItemsError` | `Errors/GetImageCollectionItemsError.cs` |

### GetImageCollectionList

- **Signature**: `GetImageCollectionList(IReadOnlyList<Embed>? embed, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - defaults: `page` = `1`, `perPage` = `100`
- **Query params (wire ← C#)**: `embed` ← `embed`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `CollectionDataList`
- **Error**: `SdkException<GetImageCollectionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Embed` | `Models/Enums/Embed.cs` |
| `CollectionDataList` | `Models/CollectionDataList.cs` |
| `GetImageCollectionListError` | `Errors/GetImageCollectionListError.cs` |

### GetImageKeywordSuggestions

- **Signature**: `GetImageKeywordSuggestions(SearchEntitiesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SearchEntitiesResponse`
- **Error**: `SdkException<GetImageKeywordSuggestionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SearchEntitiesRequest` | `Models/SearchEntitiesRequest.cs` |
| `SearchEntitiesResponse` | `Models/SearchEntitiesResponse.cs` |
| `GetImageKeywordSuggestionsError` | `Errors/GetImageKeywordSuggestionsError.cs` |

### GetImageLicenseList

- **Signature**: `GetImageLicenseList(string? imageId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`imageId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = `1`, `perPage` = `20`, `teamHistory` = `false`
- **Query params (wire ← C#)**: `image_id` ← `imageId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetImageLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `DownloadAvailability` | `Models/Enums/DownloadAvailability.cs` |
| `DownloadHistoryDataList` | `Models/DownloadHistoryDataList.cs` |
| `GetImageLicenseListError` | `Errors/GetImageLicenseListError.cs` |

### GetImageList

- **Signature**: `GetImageList(IReadOnlyList<string> id, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `id` ← `id`, `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `ImageDataList`
- **Error**: `SdkException<GetImageListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `View2` | `Models/Enums/View2.cs` |
| `ImageDataList` | `Models/ImageDataList.cs` |
| `GetImageListError` | `Errors/GetImageListError.cs` |

### GetImageRecommendations

- **Signature**: `GetImageRecommendations(IReadOnlyList<string> id, int? maxItems = 20, bool? safe = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `maxItems` = `20`, `safe` = `true`
- **Query params (wire ← C#)**: `id` ← `id`, `max_items` ← `maxItems`, `safe` ← `safe`
- **Returns**: `RecommendationDataList`
- **Error**: `SdkException<GetImageRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RecommendationDataList` | `Models/RecommendationDataList.cs` |
| `GetImageRecommendationsError` | `Errors/GetImageRecommendationsError.cs` |

### GetImageSuggestions

- **Signature**: `GetImageSuggestions(string query, int? limit = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = `10`
- **Query params (wire ← C#)**: `query` ← `query`, `limit` ← `limit`
- **Returns**: `Suggestions`
- **Error**: `SdkException<GetImageSuggestionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Suggestions` | `Models/Suggestions.cs` |
| `GetImageSuggestionsError` | `Errors/GetImageSuggestionsError.cs` |

### GetUpdatedImages

- **Signature**: `GetUpdatedImages(IReadOnlyList<Type14>? type, string? startDate, string? endDate, Sort5? sort, string? interval = "1 HOUR", int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`type` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `interval` = `"1 HOUR"`, `page` = `1`, `perPage` = `100`
- **Query params (wire ← C#)**: `type` ← `type`, `start_date` ← `startDate`, `end_date` ← `endDate`, `interval` ← `interval`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `UpdatedMediaDataList`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Type14` | `Models/Enums/Type14.cs` |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `UpdatedMediaDataList` | `Models/UpdatedMediaDataList.cs` |

### LicenseImages

- **Signature**: `LicenseImages(string? subscriptionId, Format15? format, Size12? size, string? searchId, LicenseImageRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`subscriptionId` … `searchId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `subscription_id` ← `subscriptionId`, `format` ← `format`, `size` ← `size`, `search_id` ← `searchId`
- **Returns**: `LicenseImageResultDataList`
- **Error**: `SdkException<LicenseImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Format15` | `Models/Enums/Format15.cs` |
| `Size12` | `Models/Enums/Size12.cs` |
| `LicenseImageRequest` | `Models/LicenseImageRequest.cs` |
| `LicenseImageResultDataList` | `Models/LicenseImageResultDataList.cs` |
| `LicenseImagesError` | `Errors/LicenseImagesError.cs` |

### ListImageCategories

- **Signature**: `ListImageCategories(Language? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `CategoryDataList`
- **Error**: `SdkException<ListImageCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Language` | `Models/Enums/Language.cs` |
| `CategoryDataList` | `Models/CategoryDataList.cs` |
| `ListImageCategoriesError` | `Errors/ListImageCategoriesError.cs` |

### ListSimilarImages

- **Signature**: `ListSimilarImages(string id, Language? language, View2? view, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - defaults: `page` = `1`, `perPage` = `20`
- **Query params (wire ← C#)**: `language` ← `language`, `page` ← `page`, `per_page` ← `perPage`, `view` ← `view`
- **Returns**: `ImageSearchResults`
- **Error**: `SdkException<ListSimilarImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Language` | `Models/Enums/Language.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `ImageSearchResults` | `Models/ImageSearchResults.cs` |
| `ListSimilarImagesError` | `Errors/ListSimilarImagesError.cs` |

### RenameImageCollection

- **Signature**: `RenameImageCollection(string id, CollectionUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RenameImageCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CollectionUpdateRequest` | `Models/CollectionUpdateRequest.cs` |
| `RenameImageCollectionError` | `Errors/RenameImageCollectionError.cs` |

### SearchImages

- **Signature**: `SearchImages(IReadOnlyList<Library>? library, DateTimeOffset? addedDate, DateTimeOffset? addedDateStart, double? aspectRatioMin, double? aspectRatioMax, double? aspectRatio, DateTimeOffset? addedDateEnd, string? category, string? color, IReadOnlyList<string>? contributor, ContributorCountryModel? contributorCountry, string? fields, int? height, int? heightFrom, int? heightTo, IReadOnlyList<ImageType2>? imageType, Language? language, IReadOnlyList<License>? license, IReadOnlyList<string>? model, Orientation2? orientation, bool? peopleModelReleased, PeopleAge2? peopleAge, IReadOnlyList<PeopleEthnicity2>? peopleEthnicity, PeopleGender2? peopleGender, int? peopleNumber, string? query, RegionModel? region, Sort2? sort, View2? view, int? width, int? widthFrom, int? widthTo, bool? keywordSafeSearch = true, int? page = 1, int? perPage = 20, bool? safe = true, bool? spellcheckQuery = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 32 params (`library` … `widthTo`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `keywordSafeSearch` = `true`, `page` = `1`, `perPage` = `20`, `safe` = `true`, `spellcheckQuery` = `true`
- **Query params (wire ← C#)**: `library` ← `library`, `added_date` ← `addedDate`, `added_date_start` ← `addedDateStart`, `aspect_ratio_min` ← `aspectRatioMin`, `aspect_ratio_max` ← `aspectRatioMax`, `aspect_ratio` ← `aspectRatio`, `added_date_end` ← `addedDateEnd`, `category` ← `category`, `color` ← `color`, `contributor` ← `contributor`, `contributor_country` ← `contributorCountry`, `fields` ← `fields`, `height` ← `height`, `height_from` ← `heightFrom`, `height_to` ← `heightTo`, `image_type` ← `imageType`, `keyword_safe_search` ← `keywordSafeSearch`, `language` ← `language`, `license` ← `license`, `model` ← `model`, `orientation` ← `orientation`, `page` ← `page`, `per_page` ← `perPage`, `people_model_released` ← `peopleModelReleased`, `people_age` ← `peopleAge`, `people_ethnicity` ← `peopleEthnicity`, `people_gender` ← `peopleGender`, `people_number` ← `peopleNumber`, `query` ← `query`, `region` ← `region`, `safe` ← `safe`, `sort` ← `sort`, `spellcheck_query` ← `spellcheckQuery`, `view` ← `view`, `width` ← `width`, `width_from` ← `widthFrom`, `width_to` ← `widthTo`
- **Returns**: `ImageSearchResults`
- **Error**: `SdkException<SearchImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Library` | `Models/Enums/Library.cs` |
| `ContributorCountryModel` | `Models/AnyOf/ContributorCountryModel.cs` |
| `ImageType2` | `Models/Enums/ImageType2.cs` |
| `Language` | `Models/Enums/Language.cs` |
| `License` | `Models/Enums/License.cs` |
| `Orientation2` | `Models/Enums/Orientation2.cs` |
| `PeopleAge2` | `Models/Enums/PeopleAge2.cs` |
| `PeopleEthnicity2` | `Models/Enums/PeopleEthnicity2.cs` |
| `PeopleGender2` | `Models/Enums/PeopleGender2.cs` |
| `RegionModel` | `Models/AnyOf/RegionModel.cs` |
| `Sort2` | `Models/Enums/Sort2.cs` |
| `View2` | `Models/Enums/View2.cs` |
| `ImageSearchResults` | `Models/ImageSearchResults.cs` |
| `SearchImagesError` | `Errors/SearchImagesError.cs` |

