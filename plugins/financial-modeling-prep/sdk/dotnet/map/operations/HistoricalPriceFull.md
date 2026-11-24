<!-- Generated file — do not edit; regenerated with the SDK. -->

# HistoricalPriceFull — operations

Accessor: `client.HistoricalPriceFull` · Source: `src/FinancialModelingPrep/Api/HistoricalPriceFull.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetHistoricalPrice

- **Auth**: `options.ApiKeyQuery`
- **Signature**: `GetHistoricalPrice(GetHistoricalPriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Symbol`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`
- **Returns**: `HistoricalPriceResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetHistoricalPriceRequest` | `src/FinancialModelingPrep/Requests/HistoricalPriceFull/GetHistoricalPriceRequest.cs` |
| `HistoricalPriceResponse` | `src/FinancialModelingPrep/Models/HistoricalPriceResponse.cs` |

