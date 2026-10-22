<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhookSubscriptions — operations

Accessor: `client.webhookSubscriptions` · Source: `src/resources/webhook-subscriptions.ts` · 6 operations · Request and error types: namespace `WebhookSubscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhookSubscription

- **Signature**: `createWebhookSubscription(request: WebhookSubscriptions.CreateWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise<undefined, WebhookSubscriptions.CreateWebhookSubscriptionError>`
- **Wire**: `POST /webhook-subscriptions`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `WebhookSubscriptions.CreateWebhookSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookSubscriptions.CreateWebhookSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `WebhookSubscriptionsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `WebhookSubscriptionsRequest` | `webhookSubscriptionsRequestSchema` | `src/models/webhook-subscriptions-request.ts` |

### delete

- **Signature**: `delete(request: WebhookSubscriptions.DeleteRequest, options?: RequestOptions): ApiPromise<undefined, WebhookSubscriptions.DeleteError>`
- **Wire**: `DELETE /webhook-subscriptions/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `WebhookSubscriptions.DeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookSubscriptions.DeleteRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getWebhookSubscription

- **Signature**: `getWebhookSubscription(request: WebhookSubscriptions.GetWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise<undefined, WebhookSubscriptions.GetWebhookSubscriptionError>`
- **Wire**: `GET /webhook-subscriptions/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `WebhookSubscriptions.GetWebhookSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookSubscriptions.GetWebhookSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listWebhookSubscriptions

- **Signature**: `listWebhookSubscriptions(request: WebhookSubscriptions.ListWebhookSubscriptionsRequest, options?: RequestOptions): ApiPromise<undefined, WebhookSubscriptions.ListWebhookSubscriptionsError>`
- **Wire**: `GET /webhook-subscriptions`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `WebhookSubscriptions.ListWebhookSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookSubscriptions.ListWebhookSubscriptionsRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listWebhooks

- **Signature**: `listWebhooks(request: WebhookSubscriptions.ListWebhooksRequest, options?: RequestOptions): ApiPromise<undefined, WebhookSubscriptions.ListWebhooksError>`
- **Wire**: `GET /webhook-subscriptions/{id}/webhooks`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `WebhookSubscriptions.ListWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookSubscriptions.ListWebhooksRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `string` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `startDate` | `query` | — | `string` | no | — |
| `endDate` | `query` | — | `string` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### updateWebhookSubscription

- **Signature**: `updateWebhookSubscription(request: WebhookSubscriptions.UpdateWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise<undefined, WebhookSubscriptions.UpdateWebhookSubscriptionError>`
- **Wire**: `POST /webhook-subscriptions/{id}`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `WebhookSubscriptions.UpdateWebhookSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookSubscriptions.UpdateWebhookSubscriptionRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `WebhookSubscriptionsRequest1` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `WebhookSubscriptionsRequest1` | `webhookSubscriptionsRequest1Schema` | `src/models/webhook-subscriptions-request1.ts` |

