<!-- Generated file — do not edit; regenerated with the SDK. -->

# Billing — operations

Accessor: `client.billing` · Source: `src/resources/billing.ts` · 3 operations · Request and error types: namespace `Billing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### billingSuccessBillingSuccessGet

- **Signature**: `billingSuccessBillingSuccessGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /billing/success`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### billingWebhookBillingWebhookPost

- **Signature**: `billingWebhookBillingWebhookPost(request?: Billing.BillingWebhookBillingWebhookPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Billing.BillingWebhookBillingWebhookPostError>`
- **Wire**: `POST /billing/webhook`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Billing.BillingWebhookBillingWebhookPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.BillingWebhookBillingWebhookPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `stripeSignature` | `header` | `stripe-signature` | `StripeSignature` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StripeSignature` | `stripeSignatureSchema` | `src/models/unions/stripe-signature.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### checkoutBillingCheckoutPost

- **Signature**: `checkoutBillingCheckoutPost(request: Billing.CheckoutBillingCheckoutPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Billing.CheckoutBillingCheckoutPostError>`
- **Wire**: `POST /billing/checkout`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Billing.CheckoutBillingCheckoutPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.CheckoutBillingCheckoutPostRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `apiKey` | `query` | `api_key` | `string` | yes | — |
| `tier` | `query` | — | `string` | no | `"pro"` |
| `interval` | `query` | — | `string` | no | `"month"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

