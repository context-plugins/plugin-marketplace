<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 5 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `tabby`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteWebhook

- **Signature**: `deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<WebhookDelete, Webhooks.DeleteWebhookError>`
- **Wire**: `DELETE /api/v1/webhooks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookDelete`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `Webhooks.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401InvalidSecretKey"` [401] `Error401InvalidSecretKey` · `"error404NoSuchWebhook"` [404] `Error404NoSuchWebhook` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.DeleteWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xMerchantCode` | `header` | `X-Merchant-Code` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookDelete` | `webhookDeleteSchema` | `src/models/webhook-delete.ts` |
| `Error401InvalidSecretKey` | `error401InvalidSecretKeySchema` | `src/models/error401-invalid-secret-key.ts` |
| `Error404NoSuchWebhook` | `error404NoSuchWebhookSchema` | `src/models/error404-no-such-webhook.ts` |

### getWebhook

- **Signature**: `getWebhook(request: Webhooks.GetWebhookRequest, options?: RequestOptions): ApiPromise<Webhook, Webhooks.GetWebhookError>`
- **Wire**: `GET /api/v1/webhooks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Webhook`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `Webhooks.GetWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401InvalidSecretKey"` [401] `Error401InvalidSecretKey` · `"error404NoSuchWebhook"` [404] `Error404NoSuchWebhook` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xMerchantCode` | `header` | `X-Merchant-Code` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `Error401InvalidSecretKey` | `error401InvalidSecretKeySchema` | `src/models/error401-invalid-secret-key.ts` |
| `Error404NoSuchWebhook` | `error404NoSuchWebhookSchema` | `src/models/error404-no-such-webhook.ts` |

### getWebhooks

- **Signature**: `getWebhooks(request: Webhooks.GetWebhooksRequest, options?: RequestOptions): ApiPromise<WebhookResponseAll, Webhooks.GetWebhooksError>`
- **Wire**: `GET /api/v1/webhooks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookResponseAll`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `Webhooks.GetWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401Authorization"` [401] `Error401Authorization` · `"error404"` [404] `string` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhooksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xMerchantCode` | `header` | `X-Merchant-Code` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookResponseAll` | `webhookResponseAllSchema` | `src/models/unions/webhook-response-all.ts` |
| `Error401Authorization` | `error401AuthorizationSchema` | `src/models/error401-authorization.ts` |

### postWebhook

- **Signature**: `postWebhook(request: Webhooks.PostWebhookRequest, options?: RequestOptions): ApiPromise<WebhookRegistrationResponse, Webhooks.PostWebhookError>`
- **Wire**: `POST /api/v1/webhooks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookRegistrationResponse`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `Webhooks.PostWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401InvalidSecretKey"` [400] `Error401InvalidSecretKey` · `"error401Authorization"` [401] `Error401Authorization` · `"error404"` [404] `string` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.PostWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xMerchantCode` | `header` | `X-Merchant-Code` | `string` | yes |
| `body` | `body` | — | `WebhookRegistration` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookRegistration` | `webhookRegistrationSchema` | `src/models/webhook-registration.ts` |
| `WebhookRegistrationResponse` | `webhookRegistrationResponseSchema` | `src/models/webhook-registration-response.ts` |
| `Error401InvalidSecretKey` | `error401InvalidSecretKeySchema` | `src/models/error401-invalid-secret-key.ts` |
| `Error401Authorization` | `error401AuthorizationSchema` | `src/models/error401-authorization.ts` |

### putWebhook

- **Signature**: `putWebhook(request: Webhooks.PutWebhookRequest, options?: RequestOptions): ApiPromise<WebhookUpdate, Webhooks.PutWebhookError>`
- **Wire**: `PUT /api/v1/webhooks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookUpdate`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `Webhooks.PutWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401InvalidSecretKey"` [400] `Error401InvalidSecretKey` · `"error401Authorization"` [401] `Error401Authorization` · `"error403"` [403] `Error403` · `"error404NoSuchWebhook"` [404] `Error404NoSuchWebhook` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.PutWebhookRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xMerchantCode` | `header` | `X-Merchant-Code` | `string` | yes |
| `body` | `body` | — | `WebhookUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookUpdate` | `webhookUpdateSchema` | `src/models/webhook-update.ts` |
| `Error401InvalidSecretKey` | `error401InvalidSecretKeySchema` | `src/models/error401-invalid-secret-key.ts` |
| `Error401Authorization` | `error401AuthorizationSchema` | `src/models/error401-authorization.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404NoSuchWebhook` | `error404NoSuchWebhookSchema` | `src/models/error404-no-such-webhook.ts` |

