<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 5 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airtable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Signature**: `createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise<WebhookCreateResponse, Webhooks.CreateWebhookError>`
- **Wire**: `POST /bases/{baseId}/webhooks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookCreateResponse`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Webhooks.CreateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.CreateWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `body` | `body` | `WebhookCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookCreateRequest` | `webhookCreateRequestSchema` | `src/models/webhook-create-request.ts` |
| `WebhookCreateResponse` | `webhookCreateResponseSchema` | `src/models/webhook-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Webhooks.DeleteWebhookError>`
- **Wire**: `DELETE /bases/{baseId}/webhooks/{webhookId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Webhooks.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.DeleteWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listWebhookPayloads

- **Signature**: `listWebhookPayloads(request: Webhooks.ListWebhookPayloadsRequest, options?: RequestOptions): ApiPromise<WebhookPayloadList, Webhooks.ListWebhookPayloadsError>`
- **Wire**: `GET /bases/{baseId}/webhooks/{webhookId}/payloads`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookPayloadList`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Webhooks.ListWebhookPayloadsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.ListWebhookPayloadsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookPayloadList` | `webhookPayloadListSchema` | `src/models/webhook-payload-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listWebhooks

- **Signature**: `listWebhooks(request: Webhooks.ListWebhooksRequest, options?: RequestOptions): ApiPromise<BasesWebhooksResponse, Webhooks.ListWebhooksError>`
- **Wire**: `GET /bases/{baseId}/webhooks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BasesWebhooksResponse`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Webhooks.ListWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.ListWebhooksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BasesWebhooksResponse` | `basesWebhooksResponseSchema` | `src/models/bases-webhooks-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### refreshWebhook

- **Signature**: `refreshWebhook(request: Webhooks.RefreshWebhookRequest, options?: RequestOptions): ApiPromise<BasesWebhooksRefreshResponse, Webhooks.RefreshWebhookError>`
- **Wire**: `POST /bases/{baseId}/webhooks/{webhookId}/refresh`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BasesWebhooksRefreshResponse`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Webhooks.RefreshWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.RefreshWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `baseId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BasesWebhooksRefreshResponse` | `basesWebhooksRefreshResponseSchema` | `src/models/bases-webhooks-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

