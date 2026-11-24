<!-- Generated file — do not edit; regenerated with the SDK. -->

# Market — operations

Accessor: `client.Market` · Source: `src/Apibara/Api/Market.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### MarketSoldPriceStats

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `MarketSoldPriceStats(MarketSoldPriceStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Make`
- **Query params (wire ← C#)**: `make` ← `Make`, `model` ← `Model`, `year` ← `Year`, `damage` ← `Damage`, `auction` ← `Auction`, `sale_date_from` ← `SaleDateFrom`, `sale_date_to` ← `SaleDateTo`
- **Returns**: `MarketSoldPriceStatsResponse`
- **Error**: `ApiException<MarketSoldPriceStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MarketSoldPriceStatsRequest` | `src/Apibara/Requests/Market/MarketSoldPriceStatsRequest.cs` |
| `Auction` | `src/Apibara/Models/Enums/Auction.cs` |
| `MarketSoldPriceStatsResponse` | `src/Apibara/Models/MarketSoldPriceStatsResponse.cs` |
| `MarketSoldPriceStatsError` | `src/Apibara/Errors/MarketSoldPriceStatsError.cs` |

