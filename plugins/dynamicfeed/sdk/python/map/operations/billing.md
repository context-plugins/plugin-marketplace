<!-- Generated file — do not edit; regenerated with the SDK. -->

# Billing — operations

Accessor: `client.billing` · Source: `dynamic_feed/apis/billing.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.billing.billing_success_billing_success_get

- **Route**: `GET /billing/success`
- **Signature**: `def billing_success_billing_success_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.billing.billing_webhook_billing_webhook_post

- **Route**: `POST /billing/webhook`
- **Signature**: `def billing_webhook_billing_webhook_post(*, stripe_signature: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `stripe_signature` — header `stripe-signature`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, BillingWebhookBillingWebhookPostErrorBody]`
- **Error**: `BillingWebhookBillingWebhookPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillingWebhookBillingWebhookPostErrorBody` | `dynamic_feed/errors/billing_webhook_billing_webhook_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.billing.checkout_billing_checkout_post

- **Route**: `POST /billing/checkout`
- **Signature**: `def checkout_billing_checkout_post(api_key: str, *, tier: str | None = "pro", interval: str | None = "month", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`
- **Params**: `api_key` — query · `tier` — query · `interval` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, CheckoutBillingCheckoutPostErrorBody]`
- **Error**: `CheckoutBillingCheckoutPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckoutBillingCheckoutPostErrorBody` | `dynamic_feed/errors/checkout_billing_checkout_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

