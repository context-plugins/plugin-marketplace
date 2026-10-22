<!-- Generated file — do not edit; regenerated with the SDK. -->

# SubscriptionsApi — operations

Accessor: `client.subscriptionsApi` · Source: `src/resources/subscriptions-api.ts` · 7 operations · Request and error types: namespace `SubscriptionsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelSubscription

- **Signature**: `cancelSubscription(request: SubscriptionsApi.CancelSubscriptionRequest, options?: RequestOptions): ApiPromise<undefined, SubscriptionsApi.CancelSubscriptionError>`
- **Wire**: `DELETE /v2/customers/{customerId}/subscriptions/{subscriptionId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SubscriptionsApi.CancelSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionsApi.CancelSubscriptionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `subscriptionId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `DeleteValuesSalesInvoice` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteValuesSalesInvoice` | `deleteValuesSalesInvoiceSchema` | `src/models/delete-values-sales-invoice.ts` |

### createSubscription

- **Signature**: `createSubscription(request: SubscriptionsApi.CreateSubscriptionRequest, options?: RequestOptions): ApiPromise<undefined, SubscriptionsApi.CreateSubscriptionError>`
- **Wire**: `POST /v2/customers/{customerId}/subscriptions`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SubscriptionsApi.CreateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionsApi.CreateSubscriptionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `SubscriptionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionRequest` | `subscriptionRequestSchema` | `src/models/subscription-request.ts` |

### getSubscription

- **Signature**: `getSubscription(request: SubscriptionsApi.GetSubscriptionRequest, options?: RequestOptions): ApiPromise<undefined, SubscriptionsApi.GetSubscriptionError>`
- **Wire**: `GET /v2/customers/{customerId}/subscriptions/{subscriptionId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SubscriptionsApi.GetSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionsApi.GetSubscriptionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `subscriptionId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listAllSubscriptions

- **Signature**: `listAllSubscriptions(request: SubscriptionsApi.ListAllSubscriptionsRequest, options?: RequestOptions): ApiPromise<undefined, SubscriptionsApi.ListAllSubscriptionsError>`
- **Wire**: `GET /v2/subscriptions`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SubscriptionsApi.ListAllSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionsApi.ListAllSubscriptionsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `profileId` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listSubscriptionPayments

- **Signature**: `listSubscriptionPayments(request: SubscriptionsApi.ListSubscriptionPaymentsRequest, options?: RequestOptions): ApiPromise<undefined, SubscriptionsApi.ListSubscriptionPaymentsError>`
- **Wire**: `GET /v2/customers/{customerId}/subscriptions/{subscriptionId}/payments`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SubscriptionsApi.ListSubscriptionPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionsApi.ListSubscriptionPaymentsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `subscriptionId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `profileId` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### listSubscriptions

- **Signature**: `listSubscriptions(request: SubscriptionsApi.ListSubscriptionsRequest, options?: RequestOptions): ApiPromise<undefined, SubscriptionsApi.ListSubscriptionsError>`
- **Wire**: `GET /v2/customers/{customerId}/subscriptions`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SubscriptionsApi.ListSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionsApi.ListSubscriptionsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### updateSubscription

- **Signature**: `updateSubscription(request: SubscriptionsApi.UpdateSubscriptionRequest, options?: RequestOptions): ApiPromise<undefined, SubscriptionsApi.UpdateSubscriptionError>`
- **Wire**: `PATCH /v2/customers/{customerId}/subscriptions/{subscriptionId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `SubscriptionsApi.UpdateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionsApi.UpdateSubscriptionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `subscriptionId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2CustomersSubscriptionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2CustomersSubscriptionsRequest` | `v2CustomersSubscriptionsRequestSchema` | `src/models/v2-customers-subscriptions-request.ts` |

