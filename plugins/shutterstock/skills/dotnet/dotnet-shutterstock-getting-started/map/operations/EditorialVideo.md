# EditorialVideo — operations

Accessor: `client.EditorialVideo` · Source: `Api/EditorialVideo.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetEditorialVideo
- **HTTP**: `GET /v2/editorial/videos/{id}` (Default (api))
- **Notes**: This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
- **Signature**: `GetEditorialVideo(string id, string country, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`, `search_id` ← `searchId`
- **Returns**: `EditorialVideoContent`
- **Error**: `SdkException<GetEditorialVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEditorialVideoLicenseList
- **HTTP**: `GET /v2/editorial/videos/licenses` (Default (api))
- **Notes**: This endpoint lists existing editorial video licenses.
- **Signature**: `GetEditorialVideoLicenseList(string? videoId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`videoId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `teamHistory` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `video_id` ← `videoId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetEditorialVideoLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### LicenseEditorialVideo
- **HTTP**: `POST /v2/editorial/videos/licenses` (Default (api))
- **Notes**: This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.
- **Signature**: `LicenseEditorialVideo(LicenseEditorialVideoContentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LicenseEditorialContentResults`
- **Error**: `SdkException<LicenseEditorialVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListEditorialVideoCategories
- **HTTP**: `GET /v2/editorial/videos/categories` (Default (api))
- **Notes**: This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
- **Signature**: `ListEditorialVideoCategories(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EditorialVideoCategoryResults`
- **Error**: `SdkException<ListEditorialVideoCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListEditorialVideos
- **HTTP**: `GET /v2/editorial/videos` (Default (api))
- **Notes**: This endpoint lists the details of editorial videos by ID list.
- **Signature**: `ListEditorialVideos(IReadOnlyList<string> id, string country, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `country` ← `country`, `search_id` ← `searchId`
- **Returns**: `EditorialVideoResults`
- **Error**: `SdkException<ListEditorialVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchEditorialVideos
- **HTTP**: `GET /v2/editorial/videos/search` (Default (api))
- **Notes**: This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
- **Signature**: `SearchEditorialVideos(string country, string? query, Sort17? sort, string? category, IReadOnlyList<string>? supplierCode, DateTimeOffset? dateStart, DateTimeOffset? dateEnd, Resolution? resolution, double? fps, string? cursor, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`query` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`, `query` ← `query`, `sort` ← `sort`, `category` ← `category`, `supplier_code` ← `supplierCode`, `date_start` ← `dateStart`, `date_end` ← `dateEnd`, `resolution` ← `resolution`, `fps` ← `fps`, `per_page` ← `perPage`, `cursor` ← `cursor`
- **Returns**: `EditorialVideoSearchResults`
- **Error**: `SdkException<SearchEditorialVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
