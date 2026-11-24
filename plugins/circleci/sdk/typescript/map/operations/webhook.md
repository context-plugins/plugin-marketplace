<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhook — operations

Accessor: `client.webhook` · Source: `src/resources/webhook.ts` · 5 operations · Request and error types: namespace `Webhook`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createWebhook(request: Webhook.CreateWebhookRequestParams, options?: RequestOptions): ApiPromise<WebhookInfo, Webhook.CreateWebhookError>`
- **Wire**: `POST /webhook`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookInfo`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `Webhook.CreateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhook.CreateWebhookRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateWebhookRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateWebhookRequest` | `createWebhookRequestSchema` | `src/models/create-webhook-request.ts` |
| `WebhookInfo` | `webhookInfoSchema` | `src/models/webhook-info.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteWebhook

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteWebhook(request: Webhook.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<MessageResponse, Webhook.DeleteWebhookError>`
- **Wire**: `DELETE /webhook/{webhook-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `Webhook.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhook.DeleteWebhookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookId` | `path` | `webhook-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWebhook

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getWebhook(request: Webhook.GetWebhookRequest, options?: RequestOptions): ApiPromise<WebhookInfo, Webhook.GetWebhookError>`
- **Wire**: `GET /webhook/{webhook-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookInfo`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `Webhook.GetWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhook.GetWebhookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookId` | `path` | `webhook-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookInfo` | `webhookInfoSchema` | `src/models/webhook-info.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listWebhooks

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listWebhooks(request: Webhook.ListWebhooksRequest, options?: RequestOptions): ApiPromise<WebhookList, Webhook.ListWebhooksError>`
- **Wire**: `GET /webhook`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookList`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `Webhook.ListWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhook.ListWebhooksRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `scopeId` | `query` | `scope-id` | `string` | yes |
| `scopeType` | `query` | `scope-type` | `ScopeType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScopeType` | `scopeTypeSchema` | `src/models/scope-type.ts` |
| `WebhookList` | `webhookListSchema` | `src/models/webhook-list.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateWebhook

- **Server**: `defaultCircleCiRestApiV2ContextApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateWebhook(request: Webhook.UpdateWebhookRequestParams, options?: RequestOptions): ApiPromise<WebhookInfo, Webhook.UpdateWebhookError>`
- **Wire**: `PUT /webhook/{webhook-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookInfo`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `Webhook.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhook.UpdateWebhookRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookId` | `path` | `webhook-id` | `string` | yes |
| `body` | `body` | — | `UpdateWebhookRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateWebhookRequest` | `updateWebhookRequestSchema` | `src/models/update-webhook-request.ts` |
| `WebhookInfo` | `webhookInfoSchema` | `src/models/webhook-info.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

