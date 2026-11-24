<!-- Generated file — do not edit; regenerated with the SDK. -->

# Listings — operations

Accessor: `client.Listings` · Source: `src/Zillapi/Api/Listings.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListingsBbox

- **Auth**: `options.BearerAuth`
- **Signature**: `ListingsBbox(ListingsBboxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bbox`
- **Query params (wire ← C#)**: `bbox` ← `Bbox`, `status` ← `Status`, `price_min` ← `PriceMin`, `price_max` ← `PriceMax`, `beds_min` ← `BedsMin`, `beds_max` ← `BedsMax`, `baths_min` ← `BathsMin`, `baths_max` ← `BathsMax`, `sqft_min` ← `SqftMin`, `sqft_max` ← `SqftMax`, `year_built_min` ← `YearBuiltMin`, `year_built_max` ← `YearBuiltMax`, `home_types` ← `HomeTypes`, `days_on_zillow` ← `DaysOnZillow`, `max_items` ← `MaxItems`, `format` ← `Format`, `location` ← `Location`
- **Returns**: `SearchResultsOk`
- **Error**: `ApiException<ListingsBboxError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListingsBboxRequest` | `src/Zillapi/Requests/Listings/ListingsBboxRequest.cs` |
| `Status1` | `src/Zillapi/Models/Enums/Status1.cs` |
| `DaysOnZillow1` | `src/Zillapi/Models/Enums/DaysOnZillow1.cs` |
| `Format` | `src/Zillapi/Models/Enums/Format.cs` |
| `SearchResultsOk` | `src/Zillapi/Models/SearchResultsOk.cs` |
| `ListingsBboxError` | `src/Zillapi/Errors/ListingsBboxError.cs` |
| `ApiErrorModel` | `src/Zillapi/Models/ApiErrorModel.cs` |

### ListingsForRent

- **Auth**: `options.BearerAuth`
- **Signature**: `ListingsForRent(ListingsForRentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SearchResultsOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListingsForRentRequest` | `src/Zillapi/Requests/Listings/ListingsForRentRequest.cs` |
| `SearchRequest2` | `src/Zillapi/Models/AnyOf/SearchRequest2.cs` |
| `SearchResultsOk` | `src/Zillapi/Models/SearchResultsOk.cs` |

### ListingsForSale

- **Auth**: `options.BearerAuth`
- **Signature**: `ListingsForSale(ListingsForSaleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SearchResultsOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListingsForSaleRequest` | `src/Zillapi/Requests/Listings/ListingsForSaleRequest.cs` |
| `SearchRequest2` | `src/Zillapi/Models/AnyOf/SearchRequest2.cs` |
| `SearchResultsOk` | `src/Zillapi/Models/SearchResultsOk.cs` |

### ListingsSold

- **Auth**: `options.BearerAuth`
- **Signature**: `ListingsSold(ListingsSoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SearchResultsOk`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListingsSoldRequest` | `src/Zillapi/Requests/Listings/ListingsSoldRequest.cs` |
| `SearchRequest2` | `src/Zillapi/Models/AnyOf/SearchRequest2.cs` |
| `SearchResultsOk` | `src/Zillapi/Models/SearchResultsOk.cs` |

