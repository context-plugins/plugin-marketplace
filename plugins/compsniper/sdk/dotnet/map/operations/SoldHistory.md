<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoldHistory — operations

Accessor: `client.SoldHistory` · Source: `src/CompSniper/Api/SoldHistory.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetV1ResearchSold

- **Auth**: `options.BearerAuth`
- **Signature**: `GetV1ResearchSold(GetV1ResearchSoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`, `StartDate`, `EndDate`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `startDate` ← `StartDate`, `endDate` ← `EndDate`, `ebaySite` ← `EbaySite`, `sort` ← `Sort`, `limit` ← `Limit`, `page` ← `Page`, `singleUnitOnly` ← `SingleUnitOnly`, `allListingSites` ← `AllListingSites`, `relevance` ← `Relevance`
- **Returns**: `V1ResearchSoldResponse`
- **Error**: `ApiException<GetV1ResearchSoldError>` — **Case A (typed)**
- **Error accessors**: `TryGetV1ResearchSold400Error1([NotNullWhen(true)] out V1ResearchSold400Error1? value)` [400] · `TryGetV1ResearchSold401Error1([NotNullWhen(true)] out V1ResearchSold401Error1? value)` [401] · `TryGetV1ResearchSold429Error1([NotNullWhen(true)] out V1ResearchSold429Error1? value)` [429] · `TryGetV1ResearchSold502Error1([NotNullWhen(true)] out V1ResearchSold502Error1? value)` [502] · `TryGetV1ResearchSold503Error1([NotNullWhen(true)] out V1ResearchSold503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetV1ResearchSoldRequest` | `src/CompSniper/Requests/SoldHistory/GetV1ResearchSoldRequest.cs` |
| `EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi` | `src/CompSniper/Models/Enums/EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.cs` |
| `Sort` | `src/CompSniper/Models/Enums/Sort.cs` |
| `Limit` | `src/CompSniper/Models/Enums/Limit.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `V1ResearchSoldResponse` | `src/CompSniper/Models/V1ResearchSoldResponse.cs` |
| `GetV1ResearchSoldError` | `src/CompSniper/Errors/GetV1ResearchSoldError.cs` |
| `V1ResearchSold400Error1` | `src/CompSniper/Models/V1ResearchSold400Error1.cs` |
| `V1ResearchSold401Error1` | `src/CompSniper/Models/V1ResearchSold401Error1.cs` |
| `V1ResearchSold429Error1` | `src/CompSniper/Models/V1ResearchSold429Error1.cs` |
| `V1ResearchSold502Error1` | `src/CompSniper/Models/V1ResearchSold502Error1.cs` |
| `V1ResearchSold503Error1` | `src/CompSniper/Models/V1ResearchSold503Error1.cs` |

