# Images — operations

Accessor: `client.Images` · Source: `Api/Images.cs` · 21 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddImageCollectionItems
- **HTTP**: `POST /v2/images/collections/{id}/items` (Default (api))
- **Notes**: This endpoint adds one or more images to a collection by image IDs.
- **Signature**: `AddImageCollectionItems(string id, CollectionItemRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddImageCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BulkSearchImages
- **HTTP**: `POST /v2/bulk_search/images` (Default (api))
- **Notes**: This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.
- **Signature**: `BulkSearchImages(DateTimeOffset? addedDate, DateTimeOffset? addedDateStart, double? aspectRatioMin, double? aspectRatioMax, double? aspectRatio, DateTimeOffset? addedDateEnd, string? category, string? color, IReadOnlyList<string>? contributor, ContributorCountryModel? contributorCountry, string? fields, int? height, int? heightFrom, int? heightTo, IReadOnlyList<ImageType2>? imageType, Language? language, IReadOnlyList<License>? license, IReadOnlyList<string>? model, Orientation2? orientation, bool? peopleModelReleased, PeopleAge2? peopleAge, IReadOnlyList<PeopleEthnicity2>? peopleEthnicity, PeopleGender2? peopleGender, int? peopleNumber, RegionModel? region, Sort2? sort, View2? view, int? width, int? widthFrom, int? widthTo, IReadOnlyList<SearchImage> body, bool? keywordSafeSearch = true, int? page = 1, int? perPage = 20, bool? safe = true, bool? spellcheckQuery = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 30 params (`addedDate` … `widthTo`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `keywordSafeSearch` = true, `page` = 1, `perPage` = 20, `safe` = true, `spellcheckQuery` = true, `requestOptions` = null
- **Query params (wire ← C#)**: `added_date` ← `addedDate`, `added_date_start` ← `addedDateStart`, `aspect_ratio_min` ← `aspectRatioMin`, `aspect_ratio_max` ← `aspectRatioMax`, `aspect_ratio` ← `aspectRatio`, `added_date_end` ← `addedDateEnd`, `category` ← `category`, `color` ← `color`, `contributor` ← `contributor`, `contributor_country` ← `contributorCountry`, `fields` ← `fields`, `height` ← `height`, `height_from` ← `heightFrom`, `height_to` ← `heightTo`, `image_type` ← `imageType`, `keyword_safe_search` ← `keywordSafeSearch`, `language` ← `language`, `license` ← `license`, `model` ← `model`, `orientation` ← `orientation`, `page` ← `page`, `per_page` ← `perPage`, `people_model_released` ← `peopleModelReleased`, `people_age` ← `peopleAge`, `people_ethnicity` ← `peopleEthnicity`, `people_gender` ← `peopleGender`, `people_number` ← `peopleNumber`, `region` ← `region`, `safe` ← `safe`, `sort` ← `sort`, `spellcheck_query` ← `spellcheckQuery`, `view` ← `view`, `width` ← `width`, `width_from` ← `widthFrom`, `width_to` ← `widthTo`
- **Returns**: `BulkImageSearchResults`
- **Error**: `SdkException<BulkSearchImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### CreateImageCollection
- **HTTP**: `POST /v2/images/collections` (Default (api))
- **Notes**: This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.
- **Signature**: `CreateImageCollection(CollectionCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CollectionCreateResponse`
- **Error**: `SdkException<CreateImageCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteImageCollection
- **HTTP**: `DELETE /v2/images/collections/{id}` (Default (api))
- **Notes**: This endpoint deletes an image collection.
- **Signature**: `DeleteImageCollection(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteImageCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteImageCollectionItems
- **HTTP**: `DELETE /v2/images/collections/{id}/items` (Default (api))
- **Notes**: This endpoint removes one or more images from a collection.
- **Signature**: `DeleteImageCollectionItems(string id, IReadOnlyList<string>? itemId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `itemId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `item_id` ← `itemId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteImageCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadImage
- **HTTP**: `POST /v2/images/licenses/{id}/downloads` (Default (api))
- **Notes**: This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.
- **Signature**: `DownloadImage(string id, RedownloadImage body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Url`
- **Error**: `SdkException<DownloadImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetImage
- **HTTP**: `GET /v2/images/{id}` (Default (api))
- **Notes**: This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.
- **Signature**: `GetImage(string id, Language? language, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`, `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `Image`
- **Error**: `SdkException<GetImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetImageCollection
- **HTTP**: `GET /v2/images/collections/{id}` (Default (api))
- **Notes**: This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.
- **Signature**: `GetImageCollection(string id, IReadOnlyList<Embed>? embed, string? shareCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - `shareCode` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `embed` ← `embed`, `share_code` ← `shareCode`
- **Returns**: `Collection`
- **Error**: `SdkException<GetImageCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetImageCollectionItems
- **HTTP**: `GET /v2/images/collections/{id}/items` (Default (api))
- **Notes**: This endpoint lists the IDs of images in a collection and the date that each was added.
- **Signature**: `GetImageCollectionItems(string id, string? shareCode, Sort5? sort, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `shareCode` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `share_code` ← `shareCode`, `sort` ← `sort`
- **Returns**: `CollectionItemDataList`
- **Error**: `SdkException<GetImageCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetImageCollectionList
- **HTTP**: `GET /v2/images/collections` (Default (api))
- **Notes**: This endpoint lists your collections of images and their basic attributes.
- **Signature**: `GetImageCollectionList(IReadOnlyList<Embed>? embed, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `embed` ← `embed`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `CollectionDataList`
- **Error**: `SdkException<GetImageCollectionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetImageKeywordSuggestions
- **HTTP**: `POST /v2/images/search/suggestions` (Default (api))
- **Notes**: This endpoint returns up to 10 important keywords from a block of plain text.
- **Signature**: `GetImageKeywordSuggestions(SearchEntitiesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchEntitiesResponse`
- **Error**: `SdkException<GetImageKeywordSuggestionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetImageLicenseList
- **HTTP**: `GET /v2/images/licenses` (Default (api))
- **Notes**: This endpoint lists existing licenses.
- **Signature**: `GetImageLicenseList(string? imageId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`imageId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `teamHistory` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `image_id` ← `imageId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetImageLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetImageList
- **HTTP**: `GET /v2/images` (Default (api))
- **Notes**: This endpoint lists information about one or more images, including the available sizes.
- **Signature**: `GetImageList(IReadOnlyList<string> id, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `ImageDataList`
- **Error**: `SdkException<GetImageListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetImageRecommendations
- **HTTP**: `GET /v2/images/recommendations` (Default (api))
- **Notes**: This endpoint returns images that customers put in the same collection as the specified image IDs.
- **Signature**: `GetImageRecommendations(IReadOnlyList<string> id, int? maxItems = 20, bool? safe = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `maxItems` = 20, `safe` = true, `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `max_items` ← `maxItems`, `safe` ← `safe`
- **Returns**: `RecommendationDataList`
- **Error**: `SdkException<GetImageRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetImageSuggestions
- **HTTP**: `GET /v2/images/search/suggestions` (Default (api))
- **Notes**: This endpoint provides autocomplete suggestions for partial search terms.
- **Signature**: `GetImageSuggestions(string query, int? limit = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `limit` ← `limit`
- **Returns**: `Suggestions`
- **Error**: `SdkException<GetImageSuggestionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUpdatedImages
- **HTTP**: `GET /v2/images/updated` (Default (api))
- **Notes**: This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
- **Signature**: `GetUpdatedImages(IReadOnlyList<Type14>? type, string? startDate, string? endDate, Sort5? sort, string? interval = "1 HOUR", int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`type` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `interval` = "1 HOUR", `page` = 1, `perPage` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `start_date` ← `startDate`, `end_date` ← `endDate`, `interval` ← `interval`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `UpdatedMediaDataList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### LicenseImages
- **HTTP**: `POST /v2/images/licenses` (Default (api))
- **Notes**: This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
- **Signature**: `LicenseImages(string? subscriptionId, Format15? format, Size12? size, string? searchId, LicenseImageRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`subscriptionId` … `searchId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `subscription_id` ← `subscriptionId`, `format` ← `format`, `size` ← `size`, `search_id` ← `searchId`
- **Returns**: `LicenseImageResultDataList`
- **Error**: `SdkException<LicenseImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListImageCategories
- **HTTP**: `GET /v2/images/categories` (Default (api))
- **Notes**: This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.
- **Signature**: `ListImageCategories(Language? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `CategoryDataList`
- **Error**: `SdkException<ListImageCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSimilarImages
- **HTTP**: `GET /v2/images/{id}/similar` (Default (api))
- **Notes**: This endpoint returns images that are visually similar to an image that you specify.
- **Signature**: `ListSimilarImages(string id, Language? language, View2? view, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`, `page` ← `page`, `per_page` ← `perPage`, `view` ← `view`
- **Returns**: `ImageSearchResults`
- **Error**: `SdkException<ListSimilarImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### RenameImageCollection
- **HTTP**: `POST /v2/images/collections/{id}` (Default (api))
- **Notes**: This endpoint sets a new name for an image collection.
- **Signature**: `RenameImageCollection(string id, CollectionUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RenameImageCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchImages
- **HTTP**: `GET /v2/images/search` (Default (api))
- **Notes**: This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.
- **Signature**: `SearchImages(IReadOnlyList<Library>? library, DateTimeOffset? addedDate, DateTimeOffset? addedDateStart, double? aspectRatioMin, double? aspectRatioMax, double? aspectRatio, DateTimeOffset? addedDateEnd, string? category, string? color, IReadOnlyList<string>? contributor, ContributorCountryModel? contributorCountry, string? fields, int? height, int? heightFrom, int? heightTo, IReadOnlyList<ImageType2>? imageType, Language? language, IReadOnlyList<License>? license, IReadOnlyList<string>? model, Orientation2? orientation, bool? peopleModelReleased, PeopleAge2? peopleAge, IReadOnlyList<PeopleEthnicity2>? peopleEthnicity, PeopleGender2? peopleGender, int? peopleNumber, string? query, RegionModel? region, Sort2? sort, View2? view, int? width, int? widthFrom, int? widthTo, bool? keywordSafeSearch = true, int? page = 1, int? perPage = 20, bool? safe = true, bool? spellcheckQuery = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 32 params (`library` … `widthTo`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `keywordSafeSearch` = true, `page` = 1, `perPage` = 20, `safe` = true, `spellcheckQuery` = true, `requestOptions` = null
- **Query params (wire ← C#)**: `library` ← `library`, `added_date` ← `addedDate`, `added_date_start` ← `addedDateStart`, `aspect_ratio_min` ← `aspectRatioMin`, `aspect_ratio_max` ← `aspectRatioMax`, `aspect_ratio` ← `aspectRatio`, `added_date_end` ← `addedDateEnd`, `category` ← `category`, `color` ← `color`, `contributor` ← `contributor`, `contributor_country` ← `contributorCountry`, `fields` ← `fields`, `height` ← `height`, `height_from` ← `heightFrom`, `height_to` ← `heightTo`, `image_type` ← `imageType`, `keyword_safe_search` ← `keywordSafeSearch`, `language` ← `language`, `license` ← `license`, `model` ← `model`, `orientation` ← `orientation`, `page` ← `page`, `per_page` ← `perPage`, `people_model_released` ← `peopleModelReleased`, `people_age` ← `peopleAge`, `people_ethnicity` ← `peopleEthnicity`, `people_gender` ← `peopleGender`, `people_number` ← `peopleNumber`, `query` ← `query`, `region` ← `region`, `safe` ← `safe`, `sort` ← `sort`, `spellcheck_query` ← `spellcheckQuery`, `view` ← `view`, `width` ← `width`, `width_from` ← `widthFrom`, `width_to` ← `widthTo`
- **Returns**: `ImageSearchResults`
- **Error**: `SdkException<SearchImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
