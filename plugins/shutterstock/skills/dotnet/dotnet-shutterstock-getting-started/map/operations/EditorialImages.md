# EditorialImages — operations

Accessor: `client.EditorialImages` · Source: `Api/EditorialImages.cs` · 18 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetEditorialCategories
- **HTTP**: `GET /v2/editorial/categories` (Default (api))
- **Notes**: Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
- **Signature**: `GetEditorialCategories(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EditorialCategoryResults`
- **Error**: `SdkException<GetEditorialCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEditorialImage
- **HTTP**: `GET /v2/editorial/images/{id}` (Default (api))
- **Notes**: This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
- **Signature**: `GetEditorialImage(string id, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`
- **Returns**: `EditorialContent`
- **Error**: `SdkException<GetEditorialImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEditorialImage2
- **HTTP**: `GET /v2/editorial/{id}` (Default (api))
- **Notes**: Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.
- **Signature**: `GetEditorialImage2(string id, string country, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`, `search_id` ← `searchId`
- **Returns**: `EditorialContent`
- **Error**: `SdkException<GetEditorialImage2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEditorialImageLicenseList
- **HTTP**: `GET /v2/editorial/images/licenses` (Default (api))
- **Notes**: This endpoint lists existing editorial image licenses.
- **Signature**: `GetEditorialImageLicenseList(string? imageId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`imageId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `teamHistory` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `image_id` ← `imageId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetEditorialImageLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetEditorialImageLivefeed
- **HTTP**: `GET /v2/editorial/images/livefeeds/{id}` (Default (api))
- **Signature**: `GetEditorialImageLivefeed(string id, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`
- **Returns**: `EditorialImageLivefeed`
- **Error**: `SdkException<GetEditorialImageLivefeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEditorialImageLivefeedItems
- **HTTP**: `GET /v2/editorial/images/livefeeds/{id}/items` (Default (api))
- **Signature**: `GetEditorialImageLivefeedItems(string id, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`
- **Returns**: `EditorialContentDataList`
- **Error**: `SdkException<GetEditorialImageLivefeedItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEditorialImageLivefeedList
- **HTTP**: `GET /v2/editorial/images/livefeeds` (Default (api))
- **Signature**: `GetEditorialImageLivefeedList(string country, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `EditorialImageLivefeedList`
- **Error**: `SdkException<GetEditorialImageLivefeedListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetEditorialLivefeed
- **HTTP**: `GET /v2/editorial/livefeeds/{id}` (Default (api))
- **Notes**: Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.
- **Signature**: `GetEditorialLivefeed(string id, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`
- **Returns**: `EditorialImageLivefeed`
- **Error**: `SdkException<GetEditorialLivefeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEditorialLivefeedItems
- **HTTP**: `GET /v2/editorial/livefeeds/{id}/items` (Default (api))
- **Notes**: Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.
- **Signature**: `GetEditorialLivefeedItems(string id, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`
- **Returns**: `EditorialContentDataList`
- **Error**: `SdkException<GetEditorialLivefeedItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEditorialLivefeedList
- **HTTP**: `GET /v2/editorial/livefeeds` (Default (api))
- **Notes**: Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.
- **Signature**: `GetEditorialLivefeedList(string country, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `EditorialImageLivefeedList`
- **Error**: `SdkException<GetEditorialLivefeedListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetUpdatedEditorialImage
- **HTTP**: `GET /v2/editorial/updated` (Default (api))
- **Notes**: Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.
- **Signature**: `GetUpdatedEditorialImage(Type15 type, DateTimeOffset dateUpdatedStart, DateTimeOffset dateUpdatedEnd, string country, DateTimeOffset? dateTakenStart, DateTimeOffset? dateTakenEnd, string? cursor, Sort5? sort, IReadOnlyList<string>? supplierCode, int? perPage = 500, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dateTakenStart` … `supplierCode`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `perPage` = 500, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `date_updated_start` ← `dateUpdatedStart`, `date_updated_end` ← `dateUpdatedEnd`, `country` ← `country`, `date_taken_start` ← `dateTakenStart`, `date_taken_end` ← `dateTakenEnd`, `cursor` ← `cursor`, `sort` ← `sort`, `supplier_code` ← `supplierCode`, `per_page` ← `perPage`
- **Returns**: `EditorialUpdatedResults`
- **Error**: `SdkException<GetUpdatedEditorialImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUpdatedEditorialImages
- **HTTP**: `GET /v2/editorial/images/updated` (Default (api))
- **Notes**: This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.
- **Signature**: `GetUpdatedEditorialImages(Type15 type, DateTimeOffset dateUpdatedStart, DateTimeOffset dateUpdatedEnd, string country, DateTimeOffset? dateTakenStart, DateTimeOffset? dateTakenEnd, string? cursor, Sort5? sort, IReadOnlyList<string>? supplierCode, int? perPage = 500, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dateTakenStart` … `supplierCode`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `perPage` = 500, `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `date_updated_start` ← `dateUpdatedStart`, `date_updated_end` ← `dateUpdatedEnd`, `country` ← `country`, `date_taken_start` ← `dateTakenStart`, `date_taken_end` ← `dateTakenEnd`, `cursor` ← `cursor`, `sort` ← `sort`, `supplier_code` ← `supplierCode`, `per_page` ← `perPage`
- **Returns**: `EditorialUpdatedResults`
- **Error**: `SdkException<GetUpdatedEditorialImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LicenseEditorialImage
- **HTTP**: `POST /v2/editorial/licenses` (Default (api))
- **Notes**: Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
- **Signature**: `LicenseEditorialImage(LicenseEditorialContentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LicenseEditorialContentResults`
- **Error**: `SdkException<LicenseEditorialImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LicenseEditorialImages
- **HTTP**: `POST /v2/editorial/images/licenses` (Default (api))
- **Notes**: This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
- **Signature**: `LicenseEditorialImages(LicenseEditorialContentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LicenseEditorialContentResults`
- **Error**: `SdkException<LicenseEditorialImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListEditorialImageCategories
- **HTTP**: `GET /v2/editorial/images/categories` (Default (api))
- **Notes**: This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
- **Signature**: `ListEditorialImageCategories(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EditorialImageCategoryResults`
- **Error**: `SdkException<ListEditorialImageCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListEditorialImages
- **HTTP**: `GET /v2/editorial/images` (Default (api))
- **Notes**: This endpoint lists the details of editorial images.
- **Signature**: `ListEditorialImages(IReadOnlyList<string> id, string country, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `searchId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `country` ← `country`, `search_id` ← `searchId`
- **Returns**: `EditorialImageResults`
- **Error**: `SdkException<ListEditorialImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchEditorial
- **HTTP**: `GET /v2/editorial/search` (Default (api))
- **Notes**: Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.
- **Signature**: `SearchEditorial(string country, string? query, Sort17? sort, string? category, IReadOnlyList<string>? supplierCode, DateTimeOffset? dateStart, DateTimeOffset? dateEnd, string? cursor, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`query` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`, `query` ← `query`, `sort` ← `sort`, `category` ← `category`, `supplier_code` ← `supplierCode`, `date_start` ← `dateStart`, `date_end` ← `dateEnd`, `per_page` ← `perPage`, `cursor` ← `cursor`
- **Returns**: `EditorialSearchResults`
- **Error**: `SdkException<SearchEditorialError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchEditorialImages
- **HTTP**: `GET /v2/editorial/images/search` (Default (api))
- **Notes**: This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
- **Signature**: `SearchEditorialImages(string country, string? query, Sort17? sort, string? category, IReadOnlyList<string>? supplierCode, DateTimeOffset? dateStart, DateTimeOffset? dateEnd, string? cursor, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`query` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`, `query` ← `query`, `sort` ← `sort`, `category` ← `category`, `supplier_code` ← `supplierCode`, `date_start` ← `dateStart`, `date_end` ← `dateEnd`, `per_page` ← `perPage`, `cursor` ← `cursor`
- **Returns**: `EditorialSearchResults`
- **Error**: `SdkException<SearchEditorialImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
