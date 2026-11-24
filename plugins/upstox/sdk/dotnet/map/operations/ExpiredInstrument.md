<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExpiredInstrument — operations

Accessor: `client.ExpiredInstrument` · Source: `src/Upstox/Api/ExpiredInstrument.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetExpiredFutureContracts

- **Auth**: `options.Oauth2`
- **Signature**: `GetExpiredFutureContracts(GetExpiredFutureContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `ExpiryDate`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`, `expiry_date` ← `ExpiryDate`
- **Returns**: `GetExpiredFuturesContractResponse`
- **Error**: `ApiException<GetExpiredFutureContractsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExpiredFutureContractsRequest` | `src/Upstox/Requests/ExpiredInstrument/GetExpiredFutureContractsRequest.cs` |
| `GetExpiredFuturesContractResponse` | `src/Upstox/Models/GetExpiredFuturesContractResponse.cs` |
| `GetExpiredFutureContractsError` | `src/Upstox/Errors/GetExpiredFutureContractsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetExpiredHistoricalCandleData

- **Auth**: `options.Oauth2`
- **Signature**: `GetExpiredHistoricalCandleData(GetExpiredHistoricalCandleDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ExpiredInstrumentKey`, `Interval`, `ToDate`, `FromDate`
- **Returns**: `GetHistoricalCandleResponse`
- **Error**: `ApiException<GetExpiredHistoricalCandleDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExpiredHistoricalCandleDataRequest` | `src/Upstox/Requests/ExpiredInstrument/GetExpiredHistoricalCandleDataRequest.cs` |
| `GetHistoricalCandleResponse` | `src/Upstox/Models/GetHistoricalCandleResponse.cs` |
| `GetExpiredHistoricalCandleDataError` | `src/Upstox/Errors/GetExpiredHistoricalCandleDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetExpiredOptionContracts

- **Auth**: `options.Oauth2`
- **Signature**: `GetExpiredOptionContracts(GetExpiredOptionContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `ExpiryDate`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`, `expiry_date` ← `ExpiryDate`
- **Returns**: `GetOptionContractResponse`
- **Error**: `ApiException<GetExpiredOptionContractsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExpiredOptionContractsRequest` | `src/Upstox/Requests/ExpiredInstrument/GetExpiredOptionContractsRequest.cs` |
| `GetOptionContractResponse` | `src/Upstox/Models/GetOptionContractResponse.cs` |
| `GetExpiredOptionContractsError` | `src/Upstox/Errors/GetExpiredOptionContractsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetExpiriesResponse

- **Auth**: `options.Oauth2`
- **Signature**: `GetExpiriesResponse(GetExpiriesResponseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`
- **Returns**: `GetExpiriesResponse`
- **Error**: `ApiException<GetExpiriesResponseError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExpiriesResponseRequest` | `src/Upstox/Requests/ExpiredInstrument/GetExpiriesResponseRequest.cs` |
| `GetExpiriesResponse` | `src/Upstox/Models/GetExpiriesResponse.cs` |
| `GetExpiriesResponseError` | `src/Upstox/Errors/GetExpiriesResponseError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

