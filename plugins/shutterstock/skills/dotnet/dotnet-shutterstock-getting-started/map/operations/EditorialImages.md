<!-- Generated file — do not edit; regenerated with the SDK. -->

# EditorialImages — operations

Accessor: `client.EditorialImages` · Source: `Api/EditorialImages.cs` · 18 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEditorialCategories

- **Signature**: `GetEditorialCategories(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `EditorialCategoryResults`
- **Error**: `SdkException<GetEditorialCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialCategoryResults` | `Models/EditorialCategoryResults.cs` |
| `GetEditorialCategoriesError` | `Errors/GetEditorialCategoriesError.cs` |

### GetEditorialImage

- **Signature**: `GetEditorialImage(string id, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `country` ← `country`
- **Returns**: `EditorialContent`
- **Error**: `SdkException<GetEditorialImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialContent` | `Models/EditorialContent.cs` |
| `GetEditorialImageError` | `Errors/GetEditorialImageError.cs` |

### GetEditorialImage2

- **Signature**: `GetEditorialImage2(string id, string country, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `country` ← `country`, `search_id` ← `searchId`
- **Returns**: `EditorialContent`
- **Error**: `SdkException<GetEditorialImage2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialContent` | `Models/EditorialContent.cs` |
| `GetEditorialImage2Error` | `Errors/GetEditorialImage2Error.cs` |

### GetEditorialImageLicenseList

- **Signature**: `GetEditorialImageLicenseList(string? imageId, string? license, Sort5? sort, string? username, DateTimeOffset? startDate, DateTimeOffset? endDate, DownloadAvailability? downloadAvailability, int? page = 1, int? perPage = 20, bool? teamHistory = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`imageId` … `downloadAvailability`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = `1`, `perPage` = `20`, `teamHistory` = `false`
- **Query params (wire ← C#)**: `image_id` ← `imageId`, `license` ← `license`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `username` ← `username`, `start_date` ← `startDate`, `end_date` ← `endDate`, `download_availability` ← `downloadAvailability`, `team_history` ← `teamHistory`
- **Returns**: `DownloadHistoryDataList`
- **Error**: `SdkException<GetEditorialImageLicenseListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `DownloadAvailability` | `Models/Enums/DownloadAvailability.cs` |
| `DownloadHistoryDataList` | `Models/DownloadHistoryDataList.cs` |
| `GetEditorialImageLicenseListError` | `Errors/GetEditorialImageLicenseListError.cs` |

### GetEditorialImageLivefeed

- **Signature**: `GetEditorialImageLivefeed(string id, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `country` ← `country`
- **Returns**: `EditorialImageLivefeed`
- **Error**: `SdkException<GetEditorialImageLivefeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialImageLivefeed` | `Models/EditorialImageLivefeed.cs` |
| `GetEditorialImageLivefeedError` | `Errors/GetEditorialImageLivefeedError.cs` |

### GetEditorialImageLivefeedItems

- **Signature**: `GetEditorialImageLivefeedItems(string id, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `country` ← `country`
- **Returns**: `EditorialContentDataList`
- **Error**: `SdkException<GetEditorialImageLivefeedItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialContentDataList` | `Models/EditorialContentDataList.cs` |
| `GetEditorialImageLivefeedItemsError` | `Errors/GetEditorialImageLivefeedItemsError.cs` |

### GetEditorialImageLivefeedList

- **Signature**: `GetEditorialImageLivefeedList(string country, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = `1`, `perPage` = `20`
- **Query params (wire ← C#)**: `country` ← `country`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `EditorialImageLivefeedList`
- **Error**: `SdkException<GetEditorialImageLivefeedListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialImageLivefeedList` | `Models/EditorialImageLivefeedList.cs` |
| `GetEditorialImageLivefeedListError` | `Errors/GetEditorialImageLivefeedListError.cs` |

### GetEditorialLivefeed

- **Signature**: `GetEditorialLivefeed(string id, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `country` ← `country`
- **Returns**: `EditorialImageLivefeed`
- **Error**: `SdkException<GetEditorialLivefeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialImageLivefeed` | `Models/EditorialImageLivefeed.cs` |
| `GetEditorialLivefeedError` | `Errors/GetEditorialLivefeedError.cs` |

### GetEditorialLivefeedItems

- **Signature**: `GetEditorialLivefeedItems(string id, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `country` ← `country`
- **Returns**: `EditorialContentDataList`
- **Error**: `SdkException<GetEditorialLivefeedItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialContentDataList` | `Models/EditorialContentDataList.cs` |
| `GetEditorialLivefeedItemsError` | `Errors/GetEditorialLivefeedItemsError.cs` |

### GetEditorialLivefeedList

- **Signature**: `GetEditorialLivefeedList(string country, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = `1`, `perPage` = `20`
- **Query params (wire ← C#)**: `country` ← `country`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `EditorialImageLivefeedList`
- **Error**: `SdkException<GetEditorialLivefeedListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialImageLivefeedList` | `Models/EditorialImageLivefeedList.cs` |
| `GetEditorialLivefeedListError` | `Errors/GetEditorialLivefeedListError.cs` |

### GetUpdatedEditorialImage

- **Signature**: `GetUpdatedEditorialImage(Type15 type, DateTimeOffset dateUpdatedStart, DateTimeOffset dateUpdatedEnd, string country, DateTimeOffset? dateTakenStart, DateTimeOffset? dateTakenEnd, string? cursor, Sort5? sort, IReadOnlyList<string>? supplierCode, int? perPage = 500, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dateTakenStart` … `supplierCode`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `perPage` = `500`
- **Query params (wire ← C#)**: `type` ← `type`, `date_updated_start` ← `dateUpdatedStart`, `date_updated_end` ← `dateUpdatedEnd`, `country` ← `country`, `date_taken_start` ← `dateTakenStart`, `date_taken_end` ← `dateTakenEnd`, `cursor` ← `cursor`, `sort` ← `sort`, `supplier_code` ← `supplierCode`, `per_page` ← `perPage`
- **Returns**: `EditorialUpdatedResults`
- **Error**: `SdkException<GetUpdatedEditorialImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Type15` | `Models/Enums/Type15.cs` |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `EditorialUpdatedResults` | `Models/EditorialUpdatedResults.cs` |
| `GetUpdatedEditorialImageError` | `Errors/GetUpdatedEditorialImageError.cs` |

### GetUpdatedEditorialImages

- **Signature**: `GetUpdatedEditorialImages(Type15 type, DateTimeOffset dateUpdatedStart, DateTimeOffset dateUpdatedEnd, string country, DateTimeOffset? dateTakenStart, DateTimeOffset? dateTakenEnd, string? cursor, Sort5? sort, IReadOnlyList<string>? supplierCode, int? perPage = 500, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dateTakenStart` … `supplierCode`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `perPage` = `500`
- **Query params (wire ← C#)**: `type` ← `type`, `date_updated_start` ← `dateUpdatedStart`, `date_updated_end` ← `dateUpdatedEnd`, `country` ← `country`, `date_taken_start` ← `dateTakenStart`, `date_taken_end` ← `dateTakenEnd`, `cursor` ← `cursor`, `sort` ← `sort`, `supplier_code` ← `supplierCode`, `per_page` ← `perPage`
- **Returns**: `EditorialUpdatedResults`
- **Error**: `SdkException<GetUpdatedEditorialImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Type15` | `Models/Enums/Type15.cs` |
| `Sort5` | `Models/Enums/Sort5.cs` |
| `EditorialUpdatedResults` | `Models/EditorialUpdatedResults.cs` |
| `GetUpdatedEditorialImagesError` | `Errors/GetUpdatedEditorialImagesError.cs` |

### LicenseEditorialImage

- **Signature**: `LicenseEditorialImage(LicenseEditorialContentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `LicenseEditorialContentResults`
- **Error**: `SdkException<LicenseEditorialImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `LicenseEditorialContentRequest` | `Models/LicenseEditorialContentRequest.cs` |
| `LicenseEditorialContentResults` | `Models/LicenseEditorialContentResults.cs` |
| `LicenseEditorialImageError` | `Errors/LicenseEditorialImageError.cs` |

### LicenseEditorialImages

- **Signature**: `LicenseEditorialImages(LicenseEditorialContentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `LicenseEditorialContentResults`
- **Error**: `SdkException<LicenseEditorialImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `LicenseEditorialContentRequest` | `Models/LicenseEditorialContentRequest.cs` |
| `LicenseEditorialContentResults` | `Models/LicenseEditorialContentResults.cs` |
| `LicenseEditorialImagesError` | `Errors/LicenseEditorialImagesError.cs` |

### ListEditorialImageCategories

- **Signature**: `ListEditorialImageCategories(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `EditorialImageCategoryResults`
- **Error**: `SdkException<ListEditorialImageCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialImageCategoryResults` | `Models/EditorialImageCategoryResults.cs` |
| `ListEditorialImageCategoriesError` | `Errors/ListEditorialImageCategoriesError.cs` |

### ListEditorialImages

- **Signature**: `ListEditorialImages(IReadOnlyList<string> id, string country, string? searchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `searchId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `id` ← `id`, `country` ← `country`, `search_id` ← `searchId`
- **Returns**: `EditorialImageResults`
- **Error**: `SdkException<ListEditorialImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `EditorialImageResults` | `Models/EditorialImageResults.cs` |
| `ListEditorialImagesError` | `Errors/ListEditorialImagesError.cs` |

### SearchEditorial

- **Signature**: `SearchEditorial(string country, string? query, Sort17? sort, string? category, IReadOnlyList<string>? supplierCode, DateTimeOffset? dateStart, DateTimeOffset? dateEnd, string? cursor, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`query` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `perPage` = `20`
- **Query params (wire ← C#)**: `country` ← `country`, `query` ← `query`, `sort` ← `sort`, `category` ← `category`, `supplier_code` ← `supplierCode`, `date_start` ← `dateStart`, `date_end` ← `dateEnd`, `per_page` ← `perPage`, `cursor` ← `cursor`
- **Returns**: `EditorialSearchResults`
- **Error**: `SdkException<SearchEditorialError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort17` | `Models/Enums/Sort17.cs` |
| `EditorialSearchResults` | `Models/EditorialSearchResults.cs` |
| `SearchEditorialError` | `Errors/SearchEditorialError.cs` |

### SearchEditorialImages

- **Signature**: `SearchEditorialImages(string country, string? query, Sort17? sort, string? category, IReadOnlyList<string>? supplierCode, DateTimeOffset? dateStart, DateTimeOffset? dateEnd, string? cursor, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`query` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `perPage` = `20`
- **Query params (wire ← C#)**: `country` ← `country`, `query` ← `query`, `sort` ← `sort`, `category` ← `category`, `supplier_code` ← `supplierCode`, `date_start` ← `dateStart`, `date_end` ← `dateEnd`, `per_page` ← `perPage`, `cursor` ← `cursor`
- **Returns**: `EditorialSearchResults`
- **Error**: `SdkException<SearchEditorialImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Sort17` | `Models/Enums/Sort17.cs` |
| `EditorialSearchResults` | `Models/EditorialSearchResults.cs` |
| `SearchEditorialImagesError` | `Errors/SearchEditorialImagesError.cs` |

