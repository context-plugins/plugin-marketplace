<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentLinks — operations

Accessor: `client.PaymentLinks` · Source: `Api/PaymentLinks.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPaymentLinksLinkId
- **Signature**: `GetPaymentLinksLinkId(string linkId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `PaymentLinkResponse`
- **Error**: `SdkException<GetPaymentLinksLinkIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentLinkResponse` | `Models/PaymentLinkResponse.cs` |
| `GetPaymentLinksLinkIdError` | `Errors/GetPaymentLinksLinkIdError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PatchPaymentLinksLinkId
- **Signature**: `PatchPaymentLinksLinkId(string linkId, UpdatePaymentLinkRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentLinkResponse`
- **Error**: `SdkException<PatchPaymentLinksLinkIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePaymentLinkRequest` | `Models/UpdatePaymentLinkRequest.cs` |
| `PaymentLinkResponse` | `Models/PaymentLinkResponse.cs` |
| `PatchPaymentLinksLinkIdError` | `Errors/PatchPaymentLinksLinkIdError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaymentLinks
- **Signature**: `PostPaymentLinks(string? idempotencyKey, PaymentLinkRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PaymentLinkResponse`
- **Error**: `SdkException<PostPaymentLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentLinkRequest` | `Models/PaymentLinkRequest.cs` |
| `PaymentLinkResponse` | `Models/PaymentLinkResponse.cs` |
| `PostPaymentLinksError` | `Errors/PostPaymentLinksError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

