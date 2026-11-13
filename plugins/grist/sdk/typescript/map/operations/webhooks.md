<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 6 operations · Request types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### clearWebhookQueue

- **Signature**: `clearWebhookQueue(request: Webhooks.ClearWebhookQueueRequest, options?: RequestOptions): ApiPromise<DocsWebhooksQueueResponse1, ApiError>`
- **Wire**: `DELETE /docs/{docId}/webhooks/queue`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsWebhooksQueueResponse1`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.ClearWebhookQueueRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsWebhooksQueueResponse1` | `docsWebhooksQueueResponse1Schema` | `src/models/unions/docs-webhooks-queue-response1.ts` |

### clearWebhookQueueForWebhook

- **Signature**: `clearWebhookQueueForWebhook(request: Webhooks.ClearWebhookQueueForWebhookRequest, options?: RequestOptions): ApiPromise<DocsWebhooksQueueResponse, ApiError>`
- **Wire**: `DELETE /docs/{docId}/webhooks/queue/{webhookId}`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsWebhooksQueueResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.ClearWebhookQueueForWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsWebhooksQueueResponse` | `docsWebhooksQueueResponseSchema` | `src/models/docs-webhooks-queue-response.ts` |

### createWebhooks

- **Signature**: `createWebhooks(request: Webhooks.CreateWebhooksRequest, options?: RequestOptions): ApiPromise<DocsWebhooksResponse1, ApiError>`
- **Wire**: `POST /docs/{docId}/webhooks`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsWebhooksResponse1`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.CreateWebhooksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `body` | `body` | `DocsWebhooksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsWebhooksRequest` | `docsWebhooksRequestSchema` | `src/models/docs-webhooks-request.ts` |
| `DocsWebhooksResponse1` | `docsWebhooksResponse1Schema` | `src/models/docs-webhooks-response1.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<DocsWebhooksResponse2, ApiError>`
- **Wire**: `DELETE /docs/{docId}/webhooks/{webhookId}`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsWebhooksResponse2`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.DeleteWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsWebhooksResponse2` | `docsWebhooksResponse2Schema` | `src/models/docs-webhooks-response2.ts` |

### listWebhooks

- **Signature**: `listWebhooks(request: Webhooks.ListWebhooksRequest, options?: RequestOptions): ApiPromise<DocsWebhooksResponse, ApiError>`
- **Wire**: `GET /docs/{docId}/webhooks`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocsWebhooksResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.ListWebhooksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsWebhooksResponse` | `docsWebhooksResponseSchema` | `src/models/docs-webhooks-response.ts` |

### modifyWebhook

- **Signature**: `modifyWebhook(request: Webhooks.ModifyWebhookRequest, options?: RequestOptions): ApiPromise<DocsWebhooksResponse21, ApiError>`
- **Wire**: `PATCH /docs/{docId}/webhooks/{webhookId}`
- **Auth**: any of `apiKey`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsWebhooksResponse21`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.ModifyWebhookRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `docId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |
| `body` | `body` | `WebhookPartialFields` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookPartialFields` | `webhookPartialFieldsSchema` | `src/models/webhook-partial-fields.ts` |
| `DocsWebhooksResponse21` | `docsWebhooksResponse21Schema` | `src/models/unions/docs-webhooks-response21.ts` |

