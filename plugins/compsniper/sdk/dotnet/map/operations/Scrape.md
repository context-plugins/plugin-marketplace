<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scrape — operations

Accessor: `client.Scrape` · Source: `src/CompSniper/Api/Scrape.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BrowseSoldListingsByCategory

- **Auth**: `options.BearerAuth`
- **Signature**: `BrowseSoldListingsByCategory(BrowseSoldListingsByCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CategoryId`
- **Query params (wire ← C#)**: `categoryId` ← `CategoryId`, `count` ← `Count`, `page` ← `Page`, `ebaySite` ← `EbaySite`, `sortOrder` ← `SortOrder`, `itemCondition` ← `ItemCondition`, `conditionId` ← `ConditionId`, `buyingFormat` ← `BuyingFormat`, `sellerType` ← `SellerType`, `minPrice` ← `MinPrice`, `maxPrice` ← `MaxPrice`, `aspectFilter` ← `AspectFilter`
- **Returns**: `ScrapeResponse`
- **Error**: `ApiException<BrowseSoldListingsByCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BrowseSoldListingsByCategoryRequest` | `src/CompSniper/Requests/Scrape/BrowseSoldListingsByCategoryRequest.cs` |
| `EbaySite` | `src/CompSniper/Models/Enums/EbaySite.cs` |
| `SortOrder` | `src/CompSniper/Models/Enums/SortOrder.cs` |
| `ItemCondition` | `src/CompSniper/Models/Enums/ItemCondition.cs` |
| `BuyingFormat` | `src/CompSniper/Models/Enums/BuyingFormat.cs` |
| `SellerType` | `src/CompSniper/Models/Enums/SellerType.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `ScrapeResponse` | `src/CompSniper/Models/ScrapeResponse.cs` |
| `BrowseSoldListingsByCategoryError` | `src/CompSniper/Errors/BrowseSoldListingsByCategoryError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

### CancelMaxSearch

- **Auth**: `options.BearerAuth`
- **Signature**: `CancelMaxSearch(CancelMaxSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `MaxCancelResponse`
- **Error**: `ApiException<CancelMaxSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelMaxSearchRequest` | `src/CompSniper/Requests/Scrape/CancelMaxSearchRequest.cs` |
| `MaxCancelResponse` | `src/CompSniper/Models/MaxCancelResponse.cs` |
| `CancelMaxSearchError` | `src/CompSniper/Errors/CancelMaxSearchError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

### DownloadMaxSearchCsv

- **Signature**: `DownloadMaxSearchCsv(DownloadMaxSearchCsvRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`, `Token`
- **Query params (wire ← C#)**: `token` ← `Token`
- **Returns**: `string`
- **Error**: `ApiException<DownloadMaxSearchCsvError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadMaxSearchCsvRequest` | `src/CompSniper/Requests/Scrape/DownloadMaxSearchCsvRequest.cs` |
| `DownloadMaxSearchCsvError` | `src/CompSniper/Errors/DownloadMaxSearchCsvError.cs` |

### GetMaxSearchResults

- **Auth**: `options.BearerAuth`
- **Signature**: `GetMaxSearchResults(GetMaxSearchResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `MaxJob`
- **Error**: `ApiException<GetMaxSearchResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMaxSearchResultsRequest` | `src/CompSniper/Requests/Scrape/GetMaxSearchResultsRequest.cs` |
| `MaxJob` | `src/CompSniper/Models/MaxJob.cs` |
| `GetMaxSearchResultsError` | `src/CompSniper/Errors/GetMaxSearchResultsError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

### SearchSoldListings

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchSoldListings(SearchSoldListingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `count` ← `Count`, `page` ← `Page`, `ebaySite` ← `EbaySite`, `categoryId` ← `CategoryId`, `sortOrder` ← `SortOrder`, `itemLocation` ← `ItemLocation`, `itemCondition` ← `ItemCondition`, `conditionId` ← `ConditionId`, `buyingFormat` ← `BuyingFormat`, `sellerType` ← `SellerType`, `minPrice` ← `MinPrice`, `maxPrice` ← `MaxPrice`, `includeCompleteListing` ← `IncludeCompleteListing`, `sold` ← `Sold`, `soldAfter` ← `SoldAfter`, `soldBefore` ← `SoldBefore`, `aspectFilter` ← `AspectFilter`, `exactMatch` ← `ExactMatch`, `relevance` ← `Relevance`, `bestOfferPrice` ← `BestOfferPrice`
- **Returns**: `ScrapeResponse`
- **Error**: `ApiException<SearchSoldListingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 429, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchSoldListingsRequest` | `src/CompSniper/Requests/Scrape/SearchSoldListingsRequest.cs` |
| `EbaySite` | `src/CompSniper/Models/Enums/EbaySite.cs` |
| `SortOrder1` | `src/CompSniper/Models/Enums/SortOrder1.cs` |
| `ItemLocation` | `src/CompSniper/Models/Enums/ItemLocation.cs` |
| `ItemCondition` | `src/CompSniper/Models/Enums/ItemCondition.cs` |
| `BuyingFormat` | `src/CompSniper/Models/Enums/BuyingFormat.cs` |
| `SellerType` | `src/CompSniper/Models/Enums/SellerType.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `ScrapeResponse` | `src/CompSniper/Models/ScrapeResponse.cs` |
| `SearchSoldListingsError` | `src/CompSniper/Errors/SearchSoldListingsError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

### StartMaxSearch

- **Auth**: `options.BearerAuth`
- **Signature**: `StartMaxSearch(StartMaxSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MaxJobAccepted`
- **Error**: `ApiException<StartMaxSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 403, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartMaxSearchRequest` | `src/CompSniper/Requests/Scrape/StartMaxSearchRequest.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `MaxSearchRequest` | `src/CompSniper/Models/MaxSearchRequest.cs` |
| `MaxJobAccepted` | `src/CompSniper/Models/MaxJobAccepted.cs` |
| `StartMaxSearchError` | `src/CompSniper/Errors/StartMaxSearchError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

