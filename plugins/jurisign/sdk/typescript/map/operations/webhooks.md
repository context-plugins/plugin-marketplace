<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 6 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `juri-sign`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Signature**: `createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise<WebhooksResponse1, Webhooks.CreateWebhookError>`
- **Wire**: `POST /webhooks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhooksResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Webhooks.CreateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"validationError1"` [422] `ValidationError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.CreateWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WebhooksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksRequest` | `webhooksRequestSchema` | `src/models/webhooks-request.ts` |
| `WebhooksResponse1` | `webhooksResponse1Schema` | `src/models/webhooks-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ValidationError1` | `validationError1Schema` | `src/models/validation-error1.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<MessageResponse, Webhooks.DeleteWebhookError>`
- **Wire**: `DELETE /webhooks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Webhooks.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [403] `MessageResponse` · `"messageResponse3"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.DeleteWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### getWebhookLogs

- **Signature**: `getWebhookLogs(request: Webhooks.GetWebhookLogsRequest, options?: RequestOptions): ApiPromise<WebhooksLogsResponse, Webhooks.GetWebhookLogsError>`
- **Wire**: `GET /webhooks/{id}/logs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhooksLogsResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Webhooks.GetWebhookLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [403] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhookLogsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `number` | yes | — |
| `perPage` | `query` | `per_page` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksLogsResponse` | `webhooksLogsResponseSchema` | `src/models/webhooks-logs-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### listWebhooks

- **Signature**: `listWebhooks(options?: RequestOptions): ApiPromise<WebhooksResponse, Webhooks.ListWebhooksError>`
- **Wire**: `GET /webhooks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhooksResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Webhooks.ListWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksResponse` | `webhooksResponseSchema` | `src/models/webhooks-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### regenerateWebhookSecret

- **Signature**: `regenerateWebhookSecret(request: Webhooks.RegenerateWebhookSecretRequest, options?: RequestOptions): ApiPromise<WebhooksRegenerateSecretResponse, Webhooks.RegenerateWebhookSecretError>`
- **Wire**: `POST /webhooks/{id}/regenerate-secret`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhooksRegenerateSecretResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Webhooks.RegenerateWebhookSecretError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [403] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.RegenerateWebhookSecretRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksRegenerateSecretResponse` | `webhooksRegenerateSecretResponseSchema` | `src/models/webhooks-regenerate-secret-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### updateWebhook

- **Signature**: `updateWebhook(request: Webhooks.UpdateWebhookRequest, options?: RequestOptions): ApiPromise<WebhooksResponse2, Webhooks.UpdateWebhookError>`
- **Wire**: `PUT /webhooks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhooksResponse2`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Webhooks.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [403] `MessageResponse` · `"messageResponse3"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.UpdateWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `WebhooksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksRequest1` | `webhooksRequest1Schema` | `src/models/webhooks-request1.ts` |
| `WebhooksResponse2` | `webhooksResponse2Schema` | `src/models/webhooks-response2.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

