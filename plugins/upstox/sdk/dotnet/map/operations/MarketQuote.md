<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketQuote — operations

Accessor: `client.MarketQuote` · Source: `src/Upstox/Api/MarketQuote.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetFullMarketQuote

- **Auth**: `options.Oauth2`
- **Signature**: `GetFullMarketQuote(GetFullMarketQuoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `symbol` ← `Symbol`, `instrument_key` ← `InstrumentKey`
- **Returns**: `GetFullMarketQuoteResponse`
- **Error**: `ApiException<GetFullMarketQuoteError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFullMarketQuoteRequest` | `src/Upstox/Requests/MarketQuote/GetFullMarketQuoteRequest.cs` |
| `GetFullMarketQuoteResponse` | `src/Upstox/Models/GetFullMarketQuoteResponse.cs` |
| `GetFullMarketQuoteError` | `src/Upstox/Errors/GetFullMarketQuoteError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetMarketQuoteOhlc

- **Auth**: `options.Oauth2`
- **Signature**: `GetMarketQuoteOhlc(GetMarketQuoteOhlcRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Interval`
- **Query params (wire ← C#)**: `interval` ← `Interval`, `symbol` ← `Symbol`, `instrument_key` ← `InstrumentKey`
- **Returns**: `GetMarketQuoteOhlcResponse`
- **Error**: `ApiException<GetMarketQuoteOhlcError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMarketQuoteOhlcRequest` | `src/Upstox/Requests/MarketQuote/GetMarketQuoteOhlcRequest.cs` |
| `GetMarketQuoteOhlcResponse` | `src/Upstox/Models/GetMarketQuoteOhlcResponse.cs` |
| `GetMarketQuoteOhlcError` | `src/Upstox/Errors/GetMarketQuoteOhlcError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### Ltp

- **Auth**: `options.Oauth2`
- **Signature**: `Ltp(LtpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `symbol` ← `Symbol`, `instrument_key` ← `InstrumentKey`
- **Returns**: `GetMarketQuoteLastTradedPriceResponse`
- **Error**: `ApiException<LtpError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LtpRequest` | `src/Upstox/Requests/MarketQuote/LtpRequest.cs` |
| `GetMarketQuoteLastTradedPriceResponse` | `src/Upstox/Models/GetMarketQuoteLastTradedPriceResponse.cs` |
| `LtpError` | `src/Upstox/Errors/LtpError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

