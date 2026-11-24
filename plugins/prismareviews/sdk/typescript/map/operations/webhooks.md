<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 3 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `prisma-reviews`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Signature**: `createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise<WebhookCreated, Webhooks.CreateWebhookError>`
- **Wire**: `POST /v1/webhooks`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookCreated`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Webhooks.CreateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [422] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.CreateWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1WebhooksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebhooksRequest` | `v1WebhooksRequestSchema` | `src/models/v1-webhooks-request.ts` |
| `WebhookCreated` | `webhookCreatedSchema` | `src/models/webhook-created.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<WebhookDeleted, Webhooks.DeleteWebhookError>`
- **Wire**: `DELETE /v1/webhooks/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookDeleted`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Webhooks.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.DeleteWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookDeleted` | `webhookDeletedSchema` | `src/models/webhook-deleted.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listWebhooks

- **Signature**: `listWebhooks(options?: RequestOptions): ApiPromise<WebhookList, Webhooks.ListWebhooksError>`
- **Wire**: `GET /v1/webhooks`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookList`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Webhooks.ListWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookList` | `webhookListSchema` | `src/models/webhook-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

