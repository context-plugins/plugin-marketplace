<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 5 operations · Request types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fellow`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appsDeveloperApiApiCreateWebhook

- **Signature**: `appsDeveloperApiApiCreateWebhook(request: Webhooks.AppsDeveloperApiApiCreateWebhookRequest, options?: RequestOptions): ApiPromise<WebhookCreateResponse, ApiError>`
- **Wire**: `POST /api/v1/webhook`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookCreateResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.AppsDeveloperApiApiCreateWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateWebhookRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateWebhookRequest` | `createWebhookRequestSchema` | `src/models/create-webhook-request.ts` |
| `WebhookCreateResponse` | `webhookCreateResponseSchema` | `src/models/webhook-create-response.ts` |

### appsDeveloperApiApiDeleteWebhook

- **Signature**: `appsDeveloperApiApiDeleteWebhook(request: Webhooks.AppsDeveloperApiApiDeleteWebhookRequest, options?: RequestOptions): ApiPromise<WebhookDeleteResponse, ApiError>`
- **Wire**: `DELETE /api/v1/webhook/{webhook_id}`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookDeleteResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.AppsDeveloperApiApiDeleteWebhookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookId` | `path` | `webhook_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookDeleteResponse` | `webhookDeleteResponseSchema` | `src/models/webhook-delete-response.ts` |

### appsDeveloperApiApiGetWebhookById

- **Signature**: `appsDeveloperApiApiGetWebhookById(request: Webhooks.AppsDeveloperApiApiGetWebhookByIdRequest, options?: RequestOptions): ApiPromise<WebhookResponse, ApiError>`
- **Wire**: `GET /api/v1/webhook/{webhook_id}`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.AppsDeveloperApiApiGetWebhookByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookId` | `path` | `webhook_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookResponse` | `webhookResponseSchema` | `src/models/webhook-response.ts` |

### appsDeveloperApiApiListWebhooks

- **Signature**: `appsDeveloperApiApiListWebhooks(request?: Webhooks.AppsDeveloperApiApiListWebhooksRequest, options?: RequestOptions): ApiPromise<WebhooksListResponse, ApiError>`
- **Wire**: `GET /api/v1/webhooks`
- **Auth**: `developerApiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhooksListResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.AppsDeveloperApiApiListWebhooksRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `page_size` | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `filters` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksListResponse` | `webhooksListResponseSchema` | `src/models/webhooks-list-response.ts` |

### appsDeveloperApiApiUpdateWebhook

- **Signature**: `appsDeveloperApiApiUpdateWebhook(request: Webhooks.AppsDeveloperApiApiUpdateWebhookRequest, options?: RequestOptions): ApiPromise<WebhookResponse, ApiError>`
- **Wire**: `PATCH /api/v1/webhook/{webhook_id}`
- **Auth**: `developerApiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookResponse`
- **Error**: `FellowError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.AppsDeveloperApiApiUpdateWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookId` | `path` | `webhook_id` | `string` | yes |
| `body` | `body` | — | `UpdateWebhookRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateWebhookRequest` | `updateWebhookRequestSchema` | `src/models/update-webhook-request.ts` |
| `WebhookResponse` | `webhookResponseSchema` | `src/models/webhook-response.ts` |

