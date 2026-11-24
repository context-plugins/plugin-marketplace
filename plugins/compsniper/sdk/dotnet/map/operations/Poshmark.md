<!-- Generated file — do not edit; regenerated with the SDK. -->

# Poshmark — operations

Accessor: `client.Poshmark` · Source: `src/CompSniper/Api/Poshmark.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchPoshmarkSold

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchPoshmarkSold(SearchPoshmarkSoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `page` ← `Page`, `minPrice` ← `MinPrice`, `maxPrice` ← `MaxPrice`, `department` ← `Department`, `condition` ← `Condition`, `brand` ← `Brand`, `sortBy` ← `SortBy`, `enrich` ← `Enrich`
- **Returns**: `V1PoshmarkSoldResponse`
- **Error**: `ApiException<SearchPoshmarkSoldError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1PoshmarkSold400Error1([NotNullWhen(true)] out V1PoshmarkSold400Error1? value)` [400] · `TryGetV1PoshmarkSold401Error1([NotNullWhen(true)] out V1PoshmarkSold401Error1? value)` [401] · `TryGetV1PoshmarkSoldResponse12([NotNullWhen(true)] out V1PoshmarkSoldResponse12? value)` [429] · `TryGetV1PoshmarkSold500Error1([NotNullWhen(true)] out V1PoshmarkSold500Error1? value)` [500] · `TryGetV1PoshmarkSold502Error1([NotNullWhen(true)] out V1PoshmarkSold502Error1? value)` [502] · `TryGetV1PoshmarkSold503Error1([NotNullWhen(true)] out V1PoshmarkSold503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchPoshmarkSoldRequest` | `src/CompSniper/Requests/Poshmark/SearchPoshmarkSoldRequest.cs` |
| `DepartmentCompSniperMarketplaceAndShippingPoshmarkApi` | `src/CompSniper/Models/Enums/DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.cs` |
| `ConditionCompSniperMarketplaceAndShippingPoshmarkApi` | `src/CompSniper/Models/Enums/ConditionCompSniperMarketplaceAndShippingPoshmarkApi.cs` |
| `SortByCompSniperMarketplaceAndShippingPoshmarkApi` | `src/CompSniper/Models/Enums/SortByCompSniperMarketplaceAndShippingPoshmarkApi.cs` |
| `Enrich` | `src/CompSniper/Models/Enums/Enrich.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1PoshmarkSoldResponse` | `src/CompSniper/Models/V1PoshmarkSoldResponse.cs` |
| `SearchPoshmarkSoldError` | `src/CompSniper/Errors/SearchPoshmarkSoldError.cs` |
| `V1PoshmarkSold400Error1` | `src/CompSniper/Models/V1PoshmarkSold400Error1.cs` |
| `V1PoshmarkSold401Error1` | `src/CompSniper/Models/V1PoshmarkSold401Error1.cs` |
| `V1PoshmarkSoldResponse12` | `src/CompSniper/Models/AnyOf/V1PoshmarkSoldResponse12.cs` |
| `V1PoshmarkSold500Error1` | `src/CompSniper/Models/V1PoshmarkSold500Error1.cs` |
| `V1PoshmarkSold502Error1` | `src/CompSniper/Models/V1PoshmarkSold502Error1.cs` |
| `V1PoshmarkSold503Error1` | `src/CompSniper/Models/V1PoshmarkSold503Error1.cs` |

