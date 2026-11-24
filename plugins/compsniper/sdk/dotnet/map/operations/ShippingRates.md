<!-- Generated file — do not edit; regenerated with the SDK. -->

# ShippingRates — operations

Accessor: `client.ShippingRates` · Source: `src/CompSniper/Api/ShippingRates.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetShippingRateUsage

- **Auth**: `options.BearerAuth`
- **Signature**: `GetShippingRateUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ShippingRateUsageResponse`
- **Error**: `ApiException<GetShippingRateUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ShippingRateUsageResponse` | `src/CompSniper/Models/ShippingRateUsageResponse.cs` |
| `GetShippingRateUsageError` | `src/CompSniper/Errors/GetShippingRateUsageError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

### GetShippingRates

- **Auth**: `options.BearerAuth`
- **Signature**: `GetShippingRates(GetShippingRatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ShippingRateResponse`
- **Error**: `ApiException<GetShippingRatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 403, 409, 413, 422, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetShippingRatesRequest` | `src/CompSniper/Requests/ShippingRates/GetShippingRatesRequest.cs` |
| `ShippingRateRequest` | `src/CompSniper/Models/ShippingRateRequest.cs` |
| `ShippingRateResponse` | `src/CompSniper/Models/ShippingRateResponse.cs` |
| `GetShippingRatesError` | `src/CompSniper/Errors/GetShippingRatesError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

