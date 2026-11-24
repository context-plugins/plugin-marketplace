<!-- Generated file — do not edit; regenerated with the SDK. -->

# Grailed — operations

Accessor: `client.Grailed` · Source: `src/CompSniper/Api/Grailed.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetV1GrailedListings

- **Auth**: `options.BearerAuth`
- **Signature**: `GetV1GrailedListings(GetV1GrailedListingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `department` ← `Department`, `condition` ← `Condition`, `minPrice` ← `MinPrice`, `maxPrice` ← `MaxPrice`, `count` ← `Count`, `page` ← `Page`, `sortBy` ← `SortBy`
- **Returns**: `V1GrailedListingsResponse`
- **Error**: `ApiException<GetV1GrailedListingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1GrailedListings400Error1([NotNullWhen(true)] out V1GrailedListings400Error1? value)` [400] · `TryGetV1GrailedListings401Error1([NotNullWhen(true)] out V1GrailedListings401Error1? value)` [401] · `TryGetV1GrailedListings429Error1([NotNullWhen(true)] out V1GrailedListings429Error1? value)` [429] · `TryGetV1GrailedListings502Error1([NotNullWhen(true)] out V1GrailedListings502Error1? value)` [502] · `TryGetV1GrailedListings503Error1([NotNullWhen(true)] out V1GrailedListings503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetV1GrailedListingsRequest` | `src/CompSniper/Requests/Grailed/GetV1GrailedListingsRequest.cs` |
| `Department` | `src/CompSniper/Models/Enums/Department.cs` |
| `Condition` | `src/CompSniper/Models/Enums/Condition.cs` |
| `SortBy1` | `src/CompSniper/Models/Enums/SortBy1.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1GrailedListingsResponse` | `src/CompSniper/Models/V1GrailedListingsResponse.cs` |
| `GetV1GrailedListingsError` | `src/CompSniper/Errors/GetV1GrailedListingsError.cs` |
| `V1GrailedListings400Error1` | `src/CompSniper/Models/V1GrailedListings400Error1.cs` |
| `V1GrailedListings401Error1` | `src/CompSniper/Models/V1GrailedListings401Error1.cs` |
| `V1GrailedListings429Error1` | `src/CompSniper/Models/V1GrailedListings429Error1.cs` |
| `V1GrailedListings502Error1` | `src/CompSniper/Models/V1GrailedListings502Error1.cs` |
| `V1GrailedListings503Error1` | `src/CompSniper/Models/V1GrailedListings503Error1.cs` |

### GetV1GrailedSold

- **Auth**: `options.BearerAuth`
- **Signature**: `GetV1GrailedSold(GetV1GrailedSoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `department` ← `Department`, `condition` ← `Condition`, `minPrice` ← `MinPrice`, `maxPrice` ← `MaxPrice`, `count` ← `Count`, `page` ← `Page`, `sortBy` ← `SortBy`
- **Returns**: `V1GrailedSoldResponse`
- **Error**: `ApiException<GetV1GrailedSoldError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1GrailedSold400Error1([NotNullWhen(true)] out V1GrailedSold400Error1? value)` [400] · `TryGetV1GrailedSold401Error1([NotNullWhen(true)] out V1GrailedSold401Error1? value)` [401] · `TryGetV1GrailedSold429Error1([NotNullWhen(true)] out V1GrailedSold429Error1? value)` [429] · `TryGetV1GrailedSold502Error1([NotNullWhen(true)] out V1GrailedSold502Error1? value)` [502] · `TryGetV1GrailedSold503Error1([NotNullWhen(true)] out V1GrailedSold503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetV1GrailedSoldRequest` | `src/CompSniper/Requests/Grailed/GetV1GrailedSoldRequest.cs` |
| `Department` | `src/CompSniper/Models/Enums/Department.cs` |
| `Condition` | `src/CompSniper/Models/Enums/Condition.cs` |
| `SortBy` | `src/CompSniper/Models/Enums/SortBy.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1GrailedSoldResponse` | `src/CompSniper/Models/V1GrailedSoldResponse.cs` |
| `GetV1GrailedSoldError` | `src/CompSniper/Errors/GetV1GrailedSoldError.cs` |
| `V1GrailedSold400Error1` | `src/CompSniper/Models/V1GrailedSold400Error1.cs` |
| `V1GrailedSold401Error1` | `src/CompSniper/Models/V1GrailedSold401Error1.cs` |
| `V1GrailedSold429Error1` | `src/CompSniper/Models/V1GrailedSold429Error1.cs` |
| `V1GrailedSold502Error1` | `src/CompSniper/Models/V1GrailedSold502Error1.cs` |
| `V1GrailedSold503Error1` | `src/CompSniper/Models/V1GrailedSold503Error1.cs` |

