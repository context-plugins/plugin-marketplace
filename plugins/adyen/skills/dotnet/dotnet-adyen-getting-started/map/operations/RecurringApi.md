<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringApi — operations

Accessor: `client.RecurringApi` · Source: `Api/RecurringApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteStoredPaymentMethodsStoredPaymentMethodId
- **Signature**: `DeleteStoredPaymentMethodsStoredPaymentMethodId(string storedPaymentMethodId, string shopperReference, string merchantAccount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `shopperReference` ← `shopperReference`, `merchantAccount` ← `merchantAccount`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### GetStoredPaymentMethods
- **Signature**: `GetStoredPaymentMethods(string? shopperReference, string? merchantAccount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `shopperReference` — nullable, no default → **must pass explicitly**
  - `merchantAccount` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `shopperReference` ← `shopperReference`, `merchantAccount` ← `merchantAccount`
- **Returns**: `ListStoredPaymentMethodsResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListStoredPaymentMethodsResponse` | `Models/ListStoredPaymentMethodsResponse.cs` |

### PostForward
- **Signature**: `PostForward(string? idempotencyKey, CheckoutForwardRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CheckoutForwardResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CheckoutForwardRequest` | `Models/CheckoutForwardRequest.cs` |
| `CheckoutForwardResponse` | `Models/CheckoutForwardResponse.cs` |

### PostStoredPaymentMethods
- **Signature**: `PostStoredPaymentMethods(string? idempotencyKey, StoredPaymentMethodRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StoredPaymentMethodResource`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StoredPaymentMethodRequest` | `Models/StoredPaymentMethodRequest.cs` |
| `StoredPaymentMethodResource` | `Models/StoredPaymentMethodResource.cs` |

