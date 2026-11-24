<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checkouts — operations

Accessor: `client.checkouts` · Source: `src/resources/checkouts.ts` · 4 operations · Request and error types: namespace `Checkouts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveCheckout

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `archiveCheckout(request: Checkouts.ArchiveCheckoutRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Checkouts.ArchiveCheckoutError>`
- **Wire**: `DELETE /checkouts/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"`, an instance of `Checkouts.ArchiveCheckoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checkouts.ArchiveCheckoutRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createCheckout

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCheckout(request: Checkouts.CreateCheckoutRequestParams, options?: RequestOptions): ApiPromise<Checkout, Checkouts.CreateCheckoutError>`
- **Wire**: `POST /checkouts/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Checkout`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Checkouts.CreateCheckoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checkouts.CreateCheckoutRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreateCheckoutRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCheckoutRequest` | `createCheckoutRequestSchema` | `src/models/create-checkout-request.ts` |
| `Checkout` | `checkoutSchema` | `src/models/checkout.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCheckout

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCheckout(request: Checkouts.GetCheckoutRequest, options?: RequestOptions): ApiPromise<CheckoutDetails, Checkouts.GetCheckoutError>`
- **Wire**: `GET /checkouts/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckoutDetails`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Checkouts.GetCheckoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checkouts.GetCheckoutRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckoutDetails` | `checkoutDetailsSchema` | `src/models/checkout-details.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCheckouts

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCheckouts(request: Checkouts.ListCheckoutsRequest, options?: RequestOptions): ApiPromise<CheckoutListResponse, Checkouts.ListCheckoutsError>`
- **Wire**: `GET /checkouts/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckoutListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Checkouts.ListCheckoutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Checkouts.ListCheckoutsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `status` | `query` | — | `CheckoutsGetParametersStatus` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckoutsGetParametersStatus` | `checkoutsGetParametersStatusSchema` | `src/models/checkouts-get-parameters-status.ts` |
| `CheckoutListResponse` | `checkoutListResponseSchema` | `src/models/checkout-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

