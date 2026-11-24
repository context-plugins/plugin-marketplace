<!-- Generated file — do not edit; regenerated with the SDK. -->

# Summary — operations

Accessor: `client.Summary` · Source: `src/CompSniper/Api/Summary.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPriceSummary

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPriceSummary(GetPriceSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Keyword`
- **Query params (wire ← C#)**: `keyword` ← `Keyword`, `count` ← `Count`, `page` ← `Page`, `ebaySite` ← `EbaySite`, `categoryId` ← `CategoryId`, `sortOrder` ← `SortOrder`, `minPrice` ← `MinPrice`, `maxPrice` ← `MaxPrice`, `itemCondition` ← `ItemCondition`, `conditionId` ← `ConditionId`, `buyingFormat` ← `BuyingFormat`, `sellerType` ← `SellerType`, `soldAfter` ← `SoldAfter`, `soldBefore` ← `SoldBefore`, `aspectFilter` ← `AspectFilter`, `exactMatch` ← `ExactMatch`, `relevance` ← `Relevance`
- **Returns**: `SummaryResponse`
- **Error**: `ApiException<GetPriceSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 403, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPriceSummaryRequest` | `src/CompSniper/Requests/Summary/GetPriceSummaryRequest.cs` |
| `EbaySite` | `src/CompSniper/Models/Enums/EbaySite.cs` |
| `SortOrder` | `src/CompSniper/Models/Enums/SortOrder.cs` |
| `ItemCondition` | `src/CompSniper/Models/Enums/ItemCondition.cs` |
| `BuyingFormat` | `src/CompSniper/Models/Enums/BuyingFormat.cs` |
| `SellerType` | `src/CompSniper/Models/Enums/SellerType.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `SummaryResponse` | `src/CompSniper/Models/SummaryResponse.cs` |
| `GetPriceSummaryError` | `src/CompSniper/Errors/GetPriceSummaryError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

