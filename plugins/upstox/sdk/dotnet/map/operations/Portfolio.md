<!-- Generated file — do not edit; regenerated with the SDK. -->

# Portfolio — operations

Accessor: `client.Portfolio` · Source: `src/Upstox/Api/Portfolio.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ConvertPositions

- **Auth**: `options.Oauth2`
- **Signature**: `ConvertPositions(ConvertPositionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ConvertPositionResponse`
- **Error**: `ApiException<ConvertPositionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConvertPositionsRequest` | `src/Upstox/Requests/Portfolio/ConvertPositionsRequest.cs` |
| `ConvertPositionRequest` | `src/Upstox/Models/ConvertPositionRequest.cs` |
| `ConvertPositionResponse` | `src/Upstox/Models/ConvertPositionResponse.cs` |
| `ConvertPositionsError` | `src/Upstox/Errors/ConvertPositionsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetHoldings

- **Auth**: `options.Oauth2`
- **Signature**: `GetHoldings(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetHoldingsResponse`
- **Error**: `ApiException<GetHoldingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetHoldingsResponse` | `src/Upstox/Models/GetHoldingsResponse.cs` |
| `GetHoldingsError` | `src/Upstox/Errors/GetHoldingsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetMtfPositions

- **Auth**: `options.Oauth2`
- **Signature**: `GetMtfPositions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetPositionResponse`
- **Error**: `ApiException<GetMtfPositionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPositionResponse` | `src/Upstox/Models/GetPositionResponse.cs` |
| `GetMtfPositionsError` | `src/Upstox/Errors/GetMtfPositionsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetPositions

- **Auth**: `options.Oauth2`
- **Signature**: `GetPositions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetPositionResponse`
- **Error**: `ApiException<GetPositionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPositionResponse` | `src/Upstox/Models/GetPositionResponse.cs` |
| `GetPositionsError` | `src/Upstox/Errors/GetPositionsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

