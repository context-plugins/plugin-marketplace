<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooksApi` · Source: `src/resources/webhooks-api.ts` · 6 operations · Request and error types: namespace `WebhooksApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Signature**: `createWebhook(request: WebhooksApi.CreateWebhookRequest, options?: RequestOptions): ApiPromise<undefined, WebhooksApi.CreateWebhookError>`
- **Wire**: `POST /v2/webhooks`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `WebhooksApi.CreateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.CreateWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2WebhooksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2WebhooksRequest` | `v2WebhooksRequestSchema` | `src/models/v2-webhooks-request.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: WebhooksApi.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<undefined, WebhooksApi.DeleteWebhookError>`
- **Wire**: `DELETE /v2/webhooks/{webhookId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `WebhooksApi.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.DeleteWebhookRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2WebhooksRequest2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2WebhooksRequest2` | `v2WebhooksRequest2Schema` | `src/models/v2-webhooks-request2.ts` |

### getWebhook

- **Signature**: `getWebhook(request: WebhooksApi.GetWebhookRequest, options?: RequestOptions): ApiPromise<undefined, WebhooksApi.GetWebhookError>`
- **Wire**: `GET /v2/webhooks/{webhookId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `WebhooksApi.GetWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.GetWebhookRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listWebhooks

- **Signature**: `listWebhooks(request: WebhooksApi.ListWebhooksRequest, options?: RequestOptions): ApiPromise<undefined, WebhooksApi.ListWebhooksError>`
- **Wire**: `GET /v2/webhooks`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `WebhooksApi.ListWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.ListWebhooksRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `eventTypes` | `query` | — | `WebhookEventTypes` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |
| `WebhookEventTypes` | `webhookEventTypesSchema` | `src/models/webhook-event-types.ts` |

### testWebhook

- **Signature**: `testWebhook(request: WebhooksApi.TestWebhookRequest, options?: RequestOptions): ApiPromise<undefined, WebhooksApi.TestWebhookError>`
- **Wire**: `POST /v2/webhooks/{webhookId}/ping`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `WebhooksApi.TestWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.TestWebhookRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2WebhooksPingRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2WebhooksPingRequest` | `v2WebhooksPingRequestSchema` | `src/models/v2-webhooks-ping-request.ts` |

### updateWebhook

- **Signature**: `updateWebhook(request: WebhooksApi.UpdateWebhookRequest, options?: RequestOptions): ApiPromise<undefined, WebhooksApi.UpdateWebhookError>`
- **Wire**: `PATCH /v2/webhooks/{webhookId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `WebhooksApi.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.UpdateWebhookRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2WebhooksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2WebhooksRequest1` | `v2WebhooksRequest1Schema` | `src/models/v2-webhooks-request1.ts` |

