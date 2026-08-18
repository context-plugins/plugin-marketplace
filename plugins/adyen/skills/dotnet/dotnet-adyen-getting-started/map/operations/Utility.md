<!-- Generated file — do not edit; regenerated with the SDK. -->

# Utility — operations

Accessor: `client.Utility` · Source: `Api/Utility.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostApplePaySessions
- **Signature**: `PostApplePaySessions(string? idempotencyKey, ApplePaySessionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ApplePaySessionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApplePaySessionRequest` | `Models/ApplePaySessionRequest.cs` |
| `ApplePaySessionResponse` | `Models/ApplePaySessionResponse.cs` |

### PostOriginKeys
- **Signature**: `PostOriginKeys(string? idempotencyKey, UtilityRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `UtilityResponse`
- **Error**: `SdkException<PostOriginKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UtilityRequest` | `Models/UtilityRequest.cs` |
| `UtilityResponse` | `Models/UtilityResponse.cs` |
| `PostOriginKeysError` | `Errors/PostOriginKeysError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaypalUpdateOrder
- **Signature**: `PostPaypalUpdateOrder(string? idempotencyKey, PaypalUpdateOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaypalUpdateOrderResponse`
- **Error**: `SdkException<PostPaypalUpdateOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaypalUpdateOrderRequest` | `Models/PaypalUpdateOrderRequest.cs` |
| `PaypalUpdateOrderResponse` | `Models/PaypalUpdateOrderResponse.cs` |
| `PostPaypalUpdateOrderError` | `Errors/PostPaypalUpdateOrderError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostValidateShopperId
- **Signature**: `PostValidateShopperId(ValidateShopperIdRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ValidateShopperIdResponse`
- **Error**: `SdkException<PostValidateShopperIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetCheckoutErrorResponseEntity(out CheckoutErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ValidateShopperIdRequest` | `Models/ValidateShopperIdRequest.cs` |
| `ValidateShopperIdResponse` | `Models/ValidateShopperIdResponse.cs` |
| `PostValidateShopperIdError` | `Errors/PostValidateShopperIdError.cs` |
| `CheckoutErrorResponseEntity` | `Models/CheckoutErrorResponseEntity.cs` |

