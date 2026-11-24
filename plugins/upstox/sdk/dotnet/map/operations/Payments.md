<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.Payments` · Source: `src/Upstox/Api/Payments.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelPayout

- **Auth**: `options.Oauth2`
- **Signature**: `CancelPayout(CancelPayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`
- **Returns**: `PayoutDetailsResponse`
- **Error**: `ApiException<CancelPayoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelPayoutRequest` | `src/Upstox/Requests/Payments/CancelPayoutRequest.cs` |
| `PayoutDetailsResponse` | `src/Upstox/Models/PayoutDetailsResponse.cs` |
| `CancelPayoutError` | `src/Upstox/Errors/CancelPayoutError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetPayinHistory

- **Auth**: `options.Oauth2`
- **Signature**: `GetPayinHistory(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PaymentHistoryResponse`
- **Error**: `ApiException<GetPayinHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentHistoryResponse` | `src/Upstox/Models/PaymentHistoryResponse.cs` |
| `GetPayinHistoryError` | `src/Upstox/Errors/GetPayinHistoryError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetPayoutHistory

- **Auth**: `options.Oauth2`
- **Signature**: `GetPayoutHistory(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PaymentHistoryResponse`
- **Error**: `ApiException<GetPayoutHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentHistoryResponse` | `src/Upstox/Models/PaymentHistoryResponse.cs` |
| `GetPayoutHistoryError` | `src/Upstox/Errors/GetPayoutHistoryError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetPayoutModes

- **Auth**: `options.Oauth2`
- **Signature**: `GetPayoutModes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PayoutModesResponse`
- **Error**: `ApiException<GetPayoutModesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PayoutModesResponse` | `src/Upstox/Models/PayoutModesResponse.cs` |
| `GetPayoutModesError` | `src/Upstox/Errors/GetPayoutModesError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### InitiatePayout

- **Auth**: `options.Oauth2`
- **Signature**: `InitiatePayout(InitiatePayoutOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PayoutDetailsResponse`
- **Error**: `ApiException<InitiatePayoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InitiatePayoutOperationRequest` | `src/Upstox/Requests/Payments/InitiatePayoutOperationRequest.cs` |
| `InitiatePayoutRequest` | `src/Upstox/Models/InitiatePayoutRequest.cs` |
| `PayoutDetailsResponse` | `src/Upstox/Models/PayoutDetailsResponse.cs` |
| `InitiatePayoutError` | `src/Upstox/Errors/InitiatePayoutError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### ModifyPayout

- **Auth**: `options.Oauth2`
- **Signature**: `ModifyPayout(ModifyPayoutOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `Body`
- **Returns**: `PayoutDetailsResponse`
- **Error**: `ApiException<ModifyPayoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ModifyPayoutOperationRequest` | `src/Upstox/Requests/Payments/ModifyPayoutOperationRequest.cs` |
| `ModifyPayoutRequest` | `src/Upstox/Models/ModifyPayoutRequest.cs` |
| `PayoutDetailsResponse` | `src/Upstox/Models/PayoutDetailsResponse.cs` |
| `ModifyPayoutError` | `src/Upstox/Errors/ModifyPayoutError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

