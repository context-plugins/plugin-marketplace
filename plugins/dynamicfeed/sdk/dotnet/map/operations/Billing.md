<!-- Generated file — do not edit; regenerated with the SDK. -->

# Billing — operations

Accessor: `client.Billing` · Source: `src/DynamicFeed/Api/Billing.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BillingSuccessBillingSuccessGet

- **Signature**: `BillingSuccessBillingSuccessGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### BillingWebhookBillingWebhookPost

- **Signature**: `BillingWebhookBillingWebhookPost(BillingWebhookBillingWebhookPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<BillingWebhookBillingWebhookPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BillingWebhookBillingWebhookPostRequest` | `src/DynamicFeed/Requests/Billing/BillingWebhookBillingWebhookPostRequest.cs` |
| `StripeSignature` | `src/DynamicFeed/Models/AnyOf/StripeSignature.cs` |
| `BillingWebhookBillingWebhookPostError` | `src/DynamicFeed/Errors/BillingWebhookBillingWebhookPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### CheckoutBillingCheckoutPost

- **Signature**: `CheckoutBillingCheckoutPost(CheckoutBillingCheckoutPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`
- **Query params (wire ← C#)**: `api_key` ← `ApiKey`, `tier` ← `Tier`, `interval` ← `Interval`
- **Returns**: `object`
- **Error**: `ApiException<CheckoutBillingCheckoutPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CheckoutBillingCheckoutPostRequest` | `src/DynamicFeed/Requests/Billing/CheckoutBillingCheckoutPostRequest.cs` |
| `CheckoutBillingCheckoutPostError` | `src/DynamicFeed/Errors/CheckoutBillingCheckoutPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

