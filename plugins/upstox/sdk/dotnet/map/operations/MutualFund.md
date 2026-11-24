<!-- Generated file — do not edit; regenerated with the SDK. -->

# MutualFund — operations

Accessor: `client.MutualFund` · Source: `src/Upstox/Api/MutualFund.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMutualFundHoldings

- **Auth**: `options.Oauth2`
- **Signature**: `GetMutualFundHoldings(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetMutualFundHoldingsResponse`
- **Error**: `ApiException<GetMutualFundHoldingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMutualFundHoldingsResponse` | `src/Upstox/Models/GetMutualFundHoldingsResponse.cs` |
| `GetMutualFundHoldingsError` | `src/Upstox/Errors/GetMutualFundHoldingsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetMutualFundOrder

- **Auth**: `options.Oauth2`
- **Signature**: `GetMutualFundOrder(GetMutualFundOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`
- **Returns**: `GetMutualFundOrderDetailsResponse`
- **Error**: `ApiException<GetMutualFundOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMutualFundOrderRequest` | `src/Upstox/Requests/MutualFund/GetMutualFundOrderRequest.cs` |
| `GetMutualFundOrderDetailsResponse` | `src/Upstox/Models/GetMutualFundOrderDetailsResponse.cs` |
| `GetMutualFundOrderError` | `src/Upstox/Errors/GetMutualFundOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetMutualFundOrders

- **Auth**: `options.Oauth2`
- **Signature**: `GetMutualFundOrders(GetMutualFundOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `transaction_type` ← `TransactionType`, `page_number` ← `PageNumber`, `records` ← `Records`
- **Returns**: `GetMutualFundOrdersResponse`
- **Error**: `ApiException<GetMutualFundOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMutualFundOrdersRequest` | `src/Upstox/Requests/MutualFund/GetMutualFundOrdersRequest.cs` |
| `GetMutualFundOrdersResponse` | `src/Upstox/Models/GetMutualFundOrdersResponse.cs` |
| `GetMutualFundOrdersError` | `src/Upstox/Errors/GetMutualFundOrdersError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetMutualFundSips

- **Auth**: `options.Oauth2`
- **Signature**: `GetMutualFundSips(GetMutualFundSipsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page_number` ← `PageNumber`, `records` ← `Records`
- **Returns**: `GetMutualFundSipsResponse`
- **Error**: `ApiException<GetMutualFundSipsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMutualFundSipsRequest` | `src/Upstox/Requests/MutualFund/GetMutualFundSipsRequest.cs` |
| `GetMutualFundSipsResponse` | `src/Upstox/Models/GetMutualFundSipsResponse.cs` |
| `GetMutualFundSipsError` | `src/Upstox/Errors/GetMutualFundSipsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

