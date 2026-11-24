<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentIntents — operations

Accessor: `client.PaymentIntents` · Source: `src/Airwallex/Api/PaymentIntents.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelPaymentIntent

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `CancelPaymentIntent(CancelPaymentIntentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CancelPaymentIntentRequest` | `src/Airwallex/Requests/PaymentIntents/CancelPaymentIntentRequest.cs` |

### CapturePaymentIntent

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `CapturePaymentIntent(CapturePaymentIntentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CapturePaymentIntentRequest` | `src/Airwallex/Requests/PaymentIntents/CapturePaymentIntentRequest.cs` |

### ConfirmPaymentIntent

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `ConfirmPaymentIntent(ConfirmPaymentIntentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConfirmPaymentIntentRequest` | `src/Airwallex/Requests/PaymentIntents/ConfirmPaymentIntentRequest.cs` |

### CreatePaymentIntent

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `CreatePaymentIntent(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### GetPaymentIntent

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `GetPaymentIntent(GetPaymentIntentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPaymentIntentRequest` | `src/Airwallex/Requests/PaymentIntents/GetPaymentIntentRequest.cs` |

