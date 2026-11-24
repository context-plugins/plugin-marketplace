<!-- Generated file — do not edit; regenerated with the SDK. -->

# BestOfferPrices — operations

Accessor: `client.BestOfferPrices` · Source: `src/CompSniper/Api/BestOfferPrices.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBestOfferPrices

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBestOfferPrices(GetBestOfferPricesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ItemIds`
- **Query params (wire ← C#)**: `itemIds` ← `ItemIds`
- **Returns**: `V1BestOfferPricesResponse`
- **Error**: `ApiException<GetBestOfferPricesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBestOfferPricesRequest` | `src/CompSniper/Requests/BestOfferPrices/GetBestOfferPricesRequest.cs` |
| `V1BestOfferPricesResponse` | `src/CompSniper/Models/V1BestOfferPricesResponse.cs` |
| `GetBestOfferPricesError` | `src/CompSniper/Errors/GetBestOfferPricesError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

