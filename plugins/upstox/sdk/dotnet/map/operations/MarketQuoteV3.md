<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketQuoteV3 — operations

Accessor: `client.MarketQuoteV3` · Source: `src/Upstox/Api/MarketQuoteV3.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetLtp

- **Auth**: `options.Oauth2`
- **Signature**: `GetLtp(GetLtpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`
- **Returns**: `GetMarketQuoteLastTradedPriceResponseV3`
- **Error**: `ApiException<GetLtpError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLtpRequest` | `src/Upstox/Requests/MarketQuoteV3/GetLtpRequest.cs` |
| `GetMarketQuoteLastTradedPriceResponseV3` | `src/Upstox/Models/GetMarketQuoteLastTradedPriceResponseV3.cs` |
| `GetLtpError` | `src/Upstox/Errors/GetLtpError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetMarketQuoteOhlcv3

- **Auth**: `options.Oauth2`
- **Signature**: `GetMarketQuoteOhlcv3(GetMarketQuoteOhlcv3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Interval`
- **Query params (wire ← C#)**: `interval` ← `Interval`, `instrument_key` ← `InstrumentKey`
- **Returns**: `GetMarketQuoteOhlcResponseV3`
- **Error**: `ApiException<GetMarketQuoteOhlcv3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMarketQuoteOhlcv3Request` | `src/Upstox/Requests/MarketQuoteV3/GetMarketQuoteOhlcv3Request.cs` |
| `GetMarketQuoteOhlcResponseV3` | `src/Upstox/Models/GetMarketQuoteOhlcResponseV3.cs` |
| `GetMarketQuoteOhlcv3Error` | `src/Upstox/Errors/GetMarketQuoteOhlcv3Error.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetMarketQuoteOptionGreek

- **Auth**: `options.Oauth2`
- **Signature**: `GetMarketQuoteOptionGreek(GetMarketQuoteOptionGreekRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`
- **Returns**: `GetMarketQuoteOptionGreekResponseV3`
- **Error**: `ApiException<GetMarketQuoteOptionGreekError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMarketQuoteOptionGreekRequest` | `src/Upstox/Requests/MarketQuoteV3/GetMarketQuoteOptionGreekRequest.cs` |
| `GetMarketQuoteOptionGreekResponseV3` | `src/Upstox/Models/GetMarketQuoteOptionGreekResponseV3.cs` |
| `GetMarketQuoteOptionGreekError` | `src/Upstox/Errors/GetMarketQuoteOptionGreekError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

