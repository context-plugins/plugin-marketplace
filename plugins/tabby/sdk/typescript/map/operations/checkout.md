<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checkout — operations

Accessor: `client.checkout` · Source: `src/resources/checkout.ts` · 2 operations · Request and error types: namespace `Checkout`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `tabby`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCheckoutSession

- **Signature**: `getCheckoutSession(request: Checkout.GetCheckoutSessionRequest, options?: RequestOptions): ApiPromise<CheckoutSession, Checkout.GetCheckoutSessionError>`
- **Wire**: `GET /api/v2/checkout/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckoutSession`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `Checkout.GetCheckoutSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401KeyDoesntExist"` [401] `Error401KeyDoesntExist` · `"error403"` [403] `Error403` · `"error404"` [404] `string` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checkout.GetCheckoutSessionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckoutSession` | `checkoutSessionSchema` | `src/models/checkout-session.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401KeyDoesntExist` | `error401KeyDoesntExistSchema` | `src/models/error401-key-doesnt-exist.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |

### postCheckoutSession

- **Signature**: `postCheckoutSession(request: Checkout.PostCheckoutSessionRequest, options?: RequestOptions): ApiPromise<CheckoutSession, Checkout.PostCheckoutSessionError>`
- **Wire**: `POST /api/v2/checkout`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CheckoutSession`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `Checkout.PostCheckoutSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400CheckoutPost"` [400] `Error400CheckoutPost` · `"error401MerchantNull"` [401] `Error401MerchantNull` · `"error403"` [403] `Error403` · `"error404"` [404] `string` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checkout.PostCheckoutSessionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV2CheckoutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2CheckoutRequest` | `apiV2CheckoutRequestSchema` | `src/models/api-v2-checkout-request.ts` |
| `CheckoutSession` | `checkoutSessionSchema` | `src/models/checkout-session.ts` |
| `Error400CheckoutPost` | `error400CheckoutPostSchema` | `src/models/error400-checkout-post.ts` |
| `Error401MerchantNull` | `error401MerchantNullSchema` | `src/models/error401-merchant-null.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |

