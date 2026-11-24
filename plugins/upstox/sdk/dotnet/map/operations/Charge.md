<!-- Generated file — do not edit; regenerated with the SDK. -->

# Charge — operations

Accessor: `client.Charge` · Source: `src/Upstox/Api/Charge.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBrokerage

- **Auth**: `options.Oauth2`
- **Signature**: `GetBrokerage(GetBrokerageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentToken`, `Quantity`, `Product`, `TransactionType`, `Price`
- **Query params (wire ← C#)**: `instrument_token` ← `InstrumentToken`, `quantity` ← `Quantity`, `product` ← `Product`, `transaction_type` ← `TransactionType`, `price` ← `Price`
- **Returns**: `GetBrokerageResponse`
- **Error**: `ApiException<GetBrokerageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBrokerageRequest` | `src/Upstox/Requests/Charge/GetBrokerageRequest.cs` |
| `GetBrokerageResponse` | `src/Upstox/Models/GetBrokerageResponse.cs` |
| `GetBrokerageError` | `src/Upstox/Errors/GetBrokerageError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### PostMargin

- **Auth**: `options.Oauth2`
- **Signature**: `PostMargin(PostMarginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PostMarginResponse`
- **Error**: `ApiException<PostMarginError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostMarginRequest` | `src/Upstox/Requests/Charge/PostMarginRequest.cs` |
| `MarginRequest` | `src/Upstox/Models/MarginRequest.cs` |
| `PostMarginResponse` | `src/Upstox/Models/PostMarginResponse.cs` |
| `PostMarginError` | `src/Upstox/Errors/PostMarginError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

