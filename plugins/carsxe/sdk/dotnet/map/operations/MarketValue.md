<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketValue — operations

Accessor: `client.MarketValue` · Source: `src/CarsXe/Api/MarketValue.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMarketValue

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetMarketValue(GetMarketValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Vin`
- **Query params (wire ← C#)**: `vin` ← `Vin`, `format` ← `Format`
- **Returns**: `MarketvalueResponse`
- **Error**: `ApiException<GetMarketValueError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 500] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMarketValueRequest` | `src/CarsXe/Requests/MarketValue/GetMarketValueRequest.cs` |
| `Format` | `src/CarsXe/Models/Enums/Format.cs` |
| `MarketvalueResponse` | `src/CarsXe/Models/MarketvalueResponse.cs` |
| `GetMarketValueError` | `src/CarsXe/Errors/GetMarketValueError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

### GetMarketValueV2

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetMarketValueV2(GetMarketValueV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Vin`
- **Query params (wire ← C#)**: `vin` ← `Vin`, `state` ← `State`, `mileage` ← `Mileage`, `condition` ← `Condition`
- **Returns**: `V2MarketvalueResponse`
- **Error**: `ApiException<GetMarketValueV2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 500, 503] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMarketValueV2Request` | `src/CarsXe/Requests/MarketValue/GetMarketValueV2Request.cs` |
| `Condition` | `src/CarsXe/Models/Enums/Condition.cs` |
| `V2MarketvalueResponse` | `src/CarsXe/Models/V2MarketvalueResponse.cs` |
| `GetMarketValueV2Error` | `src/CarsXe/Errors/GetMarketValueV2Error.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

