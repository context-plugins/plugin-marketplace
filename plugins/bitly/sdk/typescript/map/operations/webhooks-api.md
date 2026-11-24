<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooksApi` · Source: `src/resources/webhooks-api.ts` · 6 operations · Request and error types: namespace `WebhooksApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bitly`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Signature**: `createWebhook(request: WebhooksApi.CreateWebhookRequest, options?: RequestOptions): ApiPromise<Webhook, WebhooksApi.CreateWebhookError>`
- **Wire**: `POST /webhooks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Webhook`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `WebhooksApi.CreateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.CreateWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WebhookCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookCreate` | `webhookCreateSchema` | `src/models/webhook-create.ts` |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: WebhooksApi.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<undefined, WebhooksApi.DeleteWebhookError>`
- **Wire**: `DELETE /webhooks/{webhook_guid}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BitlyError` with `kind: "api"`, an instance of `WebhooksApi.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.DeleteWebhookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookGuid` | `path` | `webhook_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getWebhook

- **Signature**: `getWebhook(request: WebhooksApi.GetWebhookRequest, options?: RequestOptions): ApiPromise<Webhook, WebhooksApi.GetWebhookError>`
- **Wire**: `GET /webhooks/{webhook_guid}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Webhook`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `WebhooksApi.GetWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.GetWebhookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookGuid` | `path` | `webhook_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getWebhooks

- **Signature**: `getWebhooks(request: WebhooksApi.GetWebhooksRequest, options?: RequestOptions): ApiPromise<Webhooks, WebhooksApi.GetWebhooksError>`
- **Wire**: `GET /organizations/{organization_guid}/webhooks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Webhooks`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `WebhooksApi.GetWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [402] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.GetWebhooksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationGuid` | `path` | `organization_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhooks` | `webhooksSchema` | `src/models/webhooks.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### updateWebhook

- **Signature**: `updateWebhook(request: WebhooksApi.UpdateWebhookRequest, options?: RequestOptions): ApiPromise<Webhook, WebhooksApi.UpdateWebhookError>`
- **Wire**: `PATCH /webhooks/{webhook_guid}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Webhook`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `WebhooksApi.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.UpdateWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookGuid` | `path` | `webhook_guid` | `string` | yes |
| `body` | `body` | — | `WebhookUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookUpdate` | `webhookUpdateSchema` | `src/models/webhook-update.ts` |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### verifyWebhook

- **Signature**: `verifyWebhook(request: WebhooksApi.VerifyWebhookRequest, options?: RequestOptions): ApiPromise<Webhook, WebhooksApi.VerifyWebhookError>`
- **Wire**: `POST /webhooks/{webhook_guid}/verify`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Webhook`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `WebhooksApi.VerifyWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksApi.VerifyWebhookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookGuid` | `path` | `webhook_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

