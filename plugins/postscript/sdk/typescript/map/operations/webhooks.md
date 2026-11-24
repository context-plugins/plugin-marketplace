<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 8 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `postscript`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhookSubscription

- **Signature**: `createWebhookSubscription(request?: Webhooks.CreateWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise<unknown, Webhooks.CreateWebhookSubscriptionError>`
- **Wire**: `POST /api/v2/webhooks`
- **Auth**: `sec0`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Webhooks.CreateWebhookSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.CreateWebhookSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |
| `body` | `body` | — | `ApiV2WebhooksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2WebhooksRequest` | `apiV2WebhooksRequestSchema` | `src/models/api-v2-webhooks-request.ts` |

### deleteWebhookSubscription

- **Signature**: `deleteWebhookSubscription(request: Webhooks.DeleteWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Webhooks.DeleteWebhookSubscriptionError>`
- **Wire**: `DELETE /api/v2/webhooks/{id}`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Webhooks.DeleteWebhookSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.DeleteWebhookSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

### exampleEvent

- **Signature**: `exampleEvent(request?: Webhooks.ExampleEventRequest, options?: RequestOptions): ApiPromise<ApiV2WebhooksExampleResponse, Webhooks.ExampleEventError>`
- **Wire**: `GET /api/v2/webhooks/example`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2WebhooksExampleResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Webhooks.ExampleEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.ExampleEventRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `event` | `query` | — | `Event1` | no | `Event1.ShopTest` |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Event1` | `event1Schema` | `src/models/event1.ts` |
| `ApiV2WebhooksExampleResponse` | `apiV2WebhooksExampleResponseSchema` | `src/models/api-v2-webhooks-example-response.ts` |

### getWebhookSigningToken

- **Signature**: `getWebhookSigningToken(request?: Webhooks.GetWebhookSigningTokenRequest, options?: RequestOptions): ApiPromise<ApiV2WebhooksTokenResponse, Webhooks.GetWebhookSigningTokenError>`
- **Wire**: `GET /api/v2/webhooks/token`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2WebhooksTokenResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Webhooks.GetWebhookSigningTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhookSigningTokenRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2WebhooksTokenResponse` | `apiV2WebhooksTokenResponseSchema` | `src/models/api-v2-webhooks-token-response.ts` |

### getWebhookSubscription

- **Signature**: `getWebhookSubscription(request: Webhooks.GetWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise<unknown, Webhooks.GetWebhookSubscriptionError>`
- **Wire**: `GET /api/v2/webhooks/{id}`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Webhooks.GetWebhookSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhookSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

### listWebhookSubscriptions

- **Signature**: `listWebhookSubscriptions(request?: Webhooks.ListWebhookSubscriptionsRequest, options?: RequestOptions): ApiPromise<unknown, Webhooks.ListWebhookSubscriptionsError>`
- **Wire**: `GET /api/v2/webhooks`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Webhooks.ListWebhookSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.ListWebhookSubscriptionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

### testShopWebhook

- **Signature**: `testShopWebhook(request?: Webhooks.TestShopWebhookRequest, options?: RequestOptions): ApiPromise<ApiV2WebhooksTestResponse, Webhooks.TestShopWebhookError>`
- **Wire**: `POST /api/v2/webhooks/test`
- **Auth**: `sec0`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2WebhooksTestResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Webhooks.TestShopWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2WebhooksTest400Error1"` [400] `ApiV2WebhooksTest400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.TestShopWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |
| `body` | `body` | — | `ApiV2WebhooksTestRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2WebhooksTestRequest` | `apiV2WebhooksTestRequestSchema` | `src/models/api-v2-webhooks-test-request.ts` |
| `ApiV2WebhooksTestResponse` | `apiV2WebhooksTestResponseSchema` | `src/models/api-v2-webhooks-test-response.ts` |
| `ApiV2WebhooksTest400Error1` | `apiV2WebhooksTest400Error1Schema` | `src/models/api-v2-webhooks-test400-error1.ts` |

### updateWebhookSubscription

- **Signature**: `updateWebhookSubscription(request: Webhooks.UpdateWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise<unknown, Webhooks.UpdateWebhookSubscriptionError>`
- **Wire**: `PATCH /api/v2/webhooks/{id}`
- **Auth**: `sec0`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Webhooks.UpdateWebhookSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.UpdateWebhookSubscriptionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |
| `body` | `body` | — | `ApiV2WebhooksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2WebhooksRequest1` | `apiV2WebhooksRequest1Schema` | `src/models/api-v2-webhooks-request1.ts` |

