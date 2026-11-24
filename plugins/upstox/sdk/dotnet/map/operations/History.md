<!-- Generated file — do not edit; regenerated with the SDK. -->

# History — operations

Accessor: `client.History` · Source: `src/Upstox/Api/History.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetHistoricalCandleData2

- **Signature**: `GetHistoricalCandleData2(GetHistoricalCandleData2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `Interval`, `ToDate`
- **Returns**: `GetHistoricalCandleResponse`
- **Error**: `ApiException<GetHistoricalCandleData2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetHistoricalCandleData2Request` | `src/Upstox/Requests/History/GetHistoricalCandleData2Request.cs` |
| `GetHistoricalCandleResponse` | `src/Upstox/Models/GetHistoricalCandleResponse.cs` |
| `GetHistoricalCandleData2Error` | `src/Upstox/Errors/GetHistoricalCandleData2Error.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetHistoricalCandleData3

- **Signature**: `GetHistoricalCandleData3(GetHistoricalCandleData3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `Interval`, `ToDate`, `FromDate`
- **Returns**: `GetHistoricalCandleResponse`
- **Error**: `ApiException<GetHistoricalCandleData3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetHistoricalCandleData3Request` | `src/Upstox/Requests/History/GetHistoricalCandleData3Request.cs` |
| `GetHistoricalCandleResponse` | `src/Upstox/Models/GetHistoricalCandleResponse.cs` |
| `GetHistoricalCandleData3Error` | `src/Upstox/Errors/GetHistoricalCandleData3Error.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetIntraDayCandleData1

- **Signature**: `GetIntraDayCandleData1(GetIntraDayCandleData1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `Interval`
- **Returns**: `GetIntraDayCandleResponse`
- **Error**: `ApiException<GetIntraDayCandleData1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIntraDayCandleData1Request` | `src/Upstox/Requests/History/GetIntraDayCandleData1Request.cs` |
| `GetIntraDayCandleResponse` | `src/Upstox/Models/GetIntraDayCandleResponse.cs` |
| `GetIntraDayCandleData1Error` | `src/Upstox/Errors/GetIntraDayCandleData1Error.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

