<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mercari — operations

Accessor: `client.Mercari` · Source: `src/CompSniper/Api/Mercari.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchMercariListings

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchMercariListings(SearchMercariListingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `page` ← `Page`, `count` ← `Count`, `sortOrder` ← `SortOrder`, `minPrice` ← `MinPrice`, `maxPrice` ← `MaxPrice`, `itemCondition` ← `ItemCondition`, `categoryId` ← `CategoryId`, `brandId` ← `BrandId`, `sold` ← `Sold`, `includeListedAt` ← `IncludeListedAt`
- **Returns**: `V1MercariResponse`
- **Error**: `ApiException<SearchMercariListingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1Mercari400Error1([NotNullWhen(true)] out V1Mercari400Error1? value)` [400] · `TryGetV1Mercari401Error1([NotNullWhen(true)] out V1Mercari401Error1? value)` [401] · `TryGetV1MercariResponse12([NotNullWhen(true)] out V1MercariResponse12? value)` [429] · `TryGetV1Mercari500Error1([NotNullWhen(true)] out V1Mercari500Error1? value)` [500] · `TryGetV1Mercari502Error1([NotNullWhen(true)] out V1Mercari502Error1? value)` [502] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchMercariListingsRequest` | `src/CompSniper/Requests/Mercari/SearchMercariListingsRequest.cs` |
| `SortOrderCompSniperMarketplaceAndShippingMercariApi` | `src/CompSniper/Models/Enums/SortOrderCompSniperMarketplaceAndShippingMercariApi.cs` |
| `ItemConditionCompSniperMarketplaceAndShippingMercariApi` | `src/CompSniper/Models/Enums/ItemConditionCompSniperMarketplaceAndShippingMercariApi.cs` |
| `Sold` | `src/CompSniper/Models/Enums/Sold.cs` |
| `IncludeListedAt` | `src/CompSniper/Models/Enums/IncludeListedAt.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1MercariResponse` | `src/CompSniper/Models/V1MercariResponse.cs` |
| `SearchMercariListingsError` | `src/CompSniper/Errors/SearchMercariListingsError.cs` |
| `V1Mercari400Error1` | `src/CompSniper/Models/V1Mercari400Error1.cs` |
| `V1Mercari401Error1` | `src/CompSniper/Models/V1Mercari401Error1.cs` |
| `V1MercariResponse12` | `src/CompSniper/Models/AnyOf/V1MercariResponse12.cs` |
| `V1Mercari500Error1` | `src/CompSniper/Models/V1Mercari500Error1.cs` |
| `V1Mercari502Error1` | `src/CompSniper/Models/V1Mercari502Error1.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

