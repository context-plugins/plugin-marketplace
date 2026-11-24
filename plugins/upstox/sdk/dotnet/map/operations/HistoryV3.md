<!-- Generated file — do not edit; regenerated with the SDK. -->

# HistoryV3 — operations

Accessor: `client.HistoryV3` · Source: `src/Upstox/Api/HistoryV3.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetHistoricalCandleData

- **Signature**: `GetHistoricalCandleData(GetHistoricalCandleDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `Unit`, `Interval`, `ToDate`
- **Returns**: `GetHistoricalCandleResponse`
- **Error**: `ApiException<GetHistoricalCandleDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetHistoricalCandleDataRequest` | `src/Upstox/Requests/HistoryV3/GetHistoricalCandleDataRequest.cs` |
| `GetHistoricalCandleResponse` | `src/Upstox/Models/GetHistoricalCandleResponse.cs` |
| `GetHistoricalCandleDataError` | `src/Upstox/Errors/GetHistoricalCandleDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetHistoricalCandleData1

- **Signature**: `GetHistoricalCandleData1(GetHistoricalCandleData1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `Unit`, `Interval`, `ToDate`, `FromDate`
- **Returns**: `GetHistoricalCandleResponse`
- **Error**: `ApiException<GetHistoricalCandleData1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetHistoricalCandleData1Request` | `src/Upstox/Requests/HistoryV3/GetHistoricalCandleData1Request.cs` |
| `GetHistoricalCandleResponse` | `src/Upstox/Models/GetHistoricalCandleResponse.cs` |
| `GetHistoricalCandleData1Error` | `src/Upstox/Errors/GetHistoricalCandleData1Error.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetIntraDayCandleData

- **Signature**: `GetIntraDayCandleData(GetIntraDayCandleDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `Unit`, `Interval`
- **Returns**: `GetIntraDayCandleResponse`
- **Error**: `ApiException<GetIntraDayCandleDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIntraDayCandleDataRequest` | `src/Upstox/Requests/HistoryV3/GetIntraDayCandleDataRequest.cs` |
| `GetIntraDayCandleResponse` | `src/Upstox/Models/GetIntraDayCandleResponse.cs` |
| `GetIntraDayCandleDataError` | `src/Upstox/Errors/GetIntraDayCandleDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

