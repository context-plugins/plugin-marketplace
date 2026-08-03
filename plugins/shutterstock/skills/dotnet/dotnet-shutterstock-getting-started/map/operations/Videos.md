# Videos — operations

Accessor: `client.Videos` · Source: `Api/Videos.cs` · 18 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoCollectionItems
- **HTTP**: `POST /v2/videos/collections/{id}/items` (Default (api))
- **Notes**: This endpoint adds one or more videos to a collection by video IDs.
- **Signature**: `AddVideoCollectionItems(string id, CollectionItemRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateVideoCollection
- **HTTP**: `POST /v2/videos/collections` (Default (api))
- **Notes**: This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.
- **Signature**: `CreateVideoCollection(CollectionCreateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CollectionCreateResponse`
- **Error**: `SdkException<CreateVideoCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoCollection
- **HTTP**: `DELETE /v2/videos/collections/{id}` (Default (api))
- **Notes**: This endpoint deletes a collection.
- **Signature**: `DeleteVideoCollection(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoCollectionItems
- **HTTP**: `DELETE /v2/videos/collections/{id}/items` (Default (api))
- **Notes**: This endpoint removes one or more videos from a collection.
- **Signature**: `DeleteVideoCollectionItems(string id, IReadOnlyList<string>? itemId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `itemId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `item_id` ← `itemId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadVideos
- **HTTP**: `POST /v2/videos/licenses/{id}/downloads` (Default (api))
- **Notes**: This endpoint redownloads videos that you have already received a license for.
- **Signature**: `DownloadVideos(string id, RedownloadVideo body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Url`
- **Error**: `SdkException<DownloadVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FindSimilarVideos
- **HTTP**: `GET /v2/videos/{id}/similar` (Default (api))
- **Notes**: This endpoint searches for videos that are similar to a video that you specify.
- **Signature**: `FindSimilarVideos(string id, Language? language, View2? view, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`, `page` ← `page`, `per_page` ← `perPage`, `view` ← `view`
- **Returns**: `VideoSearchResults`
- **Error**: `SdkException<FindSimilarVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetUpdatedVideos
- **HTTP**: `GET /v2/videos/updated` (Default (api))
- **Notes**: This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
- **Signature**: `GetUpdatedVideos(string? startDate, string? endDate, Sort5? sort, string? interval = "1 HOUR", int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startDate` — nullable, no default → **must pass explicitly**
  - `endDate` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `interval` = "1 HOUR", `page` = 1, `perPage` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `start_date` ← `startDate`, `end_date` ← `endDate`, `interval` ← `interval`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `UpdatedMediaDataList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideo
- **HTTP**: `GET /v2/videos/{id}` (Default (api))
- **Notes**: This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.
- **Signature**: `GetVideo(string id, Language? language, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`, `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `Video`
- **Error**: `SdkException<GetVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoCollection
- **HTTP**: `GET /v2/videos/collections/{id}` (Default (api))
- **Notes**: This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.
- **Signature**: `GetVideoCollection(string id, IReadOnlyList<Embed>? embed, string? shareCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - `shareCode` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `embed` ← `embed`, `share_code` ← `shareCode`
- **Returns**: `Collection`
- **Error**: `SdkException<GetVideoCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoCollectionItems
- **HTTP**: `GET /v2/videos/collections/{id}/items` (Default (api))
- **Notes**: This endpoint lists the IDs of videos in a collection and the date that each was added.
- **Signature**: `GetVideoCollectionItems(string id, string? shareCode, Sort5? sort, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `shareCode` — nullable, no default → **must pass explicitly**
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `share_code` ← `shareCode`, `sort` ← `sort`
- **Returns**: `CollectionItemDataList`
- **Error**: `SdkException<GetVideoCollectionItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoCollectionList
- **HTTP**: `GET /v2/videos/collections` (Default (api))
- **Notes**: This endpoint lists your collections of videos and their basic attributes.
- **Signature**: `GetVideoCollectionList(IReadOnlyList<Embed>? embed, int? page = 1, int? perPage = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `embed` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `embed` ← `embed`
- **Returns**: `CollectionDataList`
- **Error**: `SdkException<GetVideoCollectionListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoLicenseList
- **HTTP**: `GET /v2/videos/licenses` (Default (api))
- **Notes**: This endpoint lists existing licenses.
- **Signature**: `GetVideoLicenseList(string? videoId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`videoId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `teamHistory` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `video_id` ← `videoId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetVideoLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoList
- **HTTP**: `GET /v2/videos` (Default (api))
- **Notes**: This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.
- **Signature**: `GetVideoList(IReadOnlyList<string> id, View2? view, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `view` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `view` ← `view`, `search_id` ← `searchId`
- **Returns**: `VideoDataList`
- **Error**: `SdkException<GetVideoListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoSuggestions
- **HTTP**: `GET /v2/videos/search/suggestions` (Default (api))
- **Notes**: This endpoint provides autocomplete suggestions for partial search terms.
- **Signature**: `GetVideoSuggestions(string query, int? limit = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `limit` ← `limit`
- **Returns**: `Suggestions`
- **Error**: `SdkException<GetVideoSuggestionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LicenseVideos
- **HTTP**: `POST /v2/videos/licenses` (Default (api))
- **Notes**: This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
- **Signature**: `LicenseVideos(string? subscriptionId, Size16? size, string? searchId, LicenseVideoRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `subscriptionId` — nullable, no default → **must pass explicitly**
  - `size` — nullable, no default → **must pass explicitly**
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `subscription_id` ← `subscriptionId`, `size` ← `size`, `search_id` ← `searchId`
- **Returns**: `LicenseVideoResultDataList`
- **Error**: `SdkException<LicenseVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListVideoCategories
- **HTTP**: `GET /v2/videos/categories` (Default (api))
- **Notes**: This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.
- **Signature**: `ListVideoCategories(Language? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `language` ← `language`
- **Returns**: `CategoryDataList`
- **Error**: `SdkException<ListVideoCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RenameVideoCollection
- **HTTP**: `POST /v2/videos/collections/{id}` (Default (api))
- **Notes**: This endpoint sets a new name for a collection.
- **Signature**: `RenameVideoCollection(string id, CollectionUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RenameVideoCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchVideos
- **HTTP**: `GET /v2/videos/search` (Default (api))
- **Notes**: This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
- **Signature**: `SearchVideos(DateTimeOffset? addedDate, DateTimeOffset? addedDateStart, DateTimeOffset? addedDateEnd, AspectRatio? aspectRatio, string? category, IReadOnlyList<string>? contributor, IReadOnlyList<string>? contributorCountry, int? duration, int? durationFrom, int? durationTo, double? fps, double? fpsFrom, double? fpsTo, Language? language, IReadOnlyList<License9>? license, IReadOnlyList<string>? model, Orientation2? orientation, PeopleAge2? peopleAge, IReadOnlyList<PeopleEthnicity5>? peopleEthnicity, PeopleGender2? peopleGender, int? peopleNumber, bool? peopleModelReleased, string? query, Resolution? resolution, Sort2? sort, View2? view, bool? keywordSafeSearch = true, int? page = 1, int? perPage = 20, bool? safe = true, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 26 params (`addedDate` … `view`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `keywordSafeSearch` = true, `page` = 1, `perPage` = 20, `safe` = true, `requestOptions` = null
- **Query params (wire ← C#)**: `added_date` ← `addedDate`, `added_date_start` ← `addedDateStart`, `added_date_end` ← `addedDateEnd`, `aspect_ratio` ← `aspectRatio`, `category` ← `category`, `contributor` ← `contributor`, `contributor_country` ← `contributorCountry`, `duration` ← `duration`, `duration_from` ← `durationFrom`, `duration_to` ← `durationTo`, `fps` ← `fps`, `fps_from` ← `fpsFrom`, `fps_to` ← `fpsTo`, `keyword_safe_search` ← `keywordSafeSearch`, `language` ← `language`, `license` ← `license`, `model` ← `model`, `orientation` ← `orientation`, `page` ← `page`, `per_page` ← `perPage`, `people_age` ← `peopleAge`, `people_ethnicity` ← `peopleEthnicity`, `people_gender` ← `peopleGender`, `people_number` ← `peopleNumber`, `people_model_released` ← `peopleModelReleased`, `query` ← `query`, `resolution` ← `resolution`, `safe` ← `safe`, `sort` ← `sort`, `view` ← `view`
- **Returns**: `VideoSearchResults`
- **Error**: `SdkException<SearchVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
