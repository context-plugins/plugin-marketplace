<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerWebhooks — operations

Accessor: `client.partnerWebhooks` · Source: `src/resources/partner-webhooks.ts` · 5 operations · Request and error types: namespace `PartnerWebhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPartnerWebhook

- **Signature**: `createPartnerWebhook(request: PartnerWebhooks.CreatePartnerWebhookRequest, options?: RequestOptions): ApiPromise<PartnerWebhook, PartnerWebhooks.CreatePartnerWebhookError>`
- **Wire**: `POST /v2/accounts/{account_id}/webhooks`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PartnerWebhook`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerWebhooks.CreatePartnerWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerWebhooks.CreatePartnerWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `body` | `body` | — | `V2AccountsWebhooksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsWebhooksRequest` | `v2AccountsWebhooksRequestSchema` | `src/models/v2-accounts-webhooks-request.ts` |
| `PartnerWebhook` | `partnerWebhookSchema` | `src/models/partner-webhook.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deletePartnerWebhook

- **Signature**: `deletePartnerWebhook(request: PartnerWebhooks.DeletePartnerWebhookRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, PartnerWebhooks.DeletePartnerWebhookError>`
- **Wire**: `DELETE /v2/accounts/{account_id}/webhooks/{webhook_id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerWebhooks.DeletePartnerWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerWebhooks.DeletePartnerWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `webhookId` | `path` | `webhook_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchPartnerWebhook

- **Signature**: `fetchPartnerWebhook(request: PartnerWebhooks.FetchPartnerWebhookRequest, options?: RequestOptions): ApiPromise<PartnerWebhook, PartnerWebhooks.FetchPartnerWebhookError>`
- **Wire**: `GET /v2/accounts/{account_id}/webhooks/{webhook_id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PartnerWebhook`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerWebhooks.FetchPartnerWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerWebhooks.FetchPartnerWebhookRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `webhookId` | `path` | `webhook_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerWebhook` | `partnerWebhookSchema` | `src/models/partner-webhook.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listPartnerWebhooks

- **Signature**: `listPartnerWebhooks(request: PartnerWebhooks.ListPartnerWebhooksRequest, options?: RequestOptions): ApiPromise<V2AccountsWebhooksResponse, PartnerWebhooks.ListPartnerWebhooksError>`
- **Wire**: `GET /v2/accounts/{account_id}/webhooks`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2AccountsWebhooksResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerWebhooks.ListPartnerWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerWebhooks.ListPartnerWebhooksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountsWebhooksResponse` | `v2AccountsWebhooksResponseSchema` | `src/models/v2-accounts-webhooks-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updatePartnerWebhook

- **Signature**: `updatePartnerWebhook(request: PartnerWebhooks.UpdatePartnerWebhookRequest, options?: RequestOptions): ApiPromise<PartnerWebhook, PartnerWebhooks.UpdatePartnerWebhookError>`
- **Wire**: `PATCH /v2/accounts/{account_id}/webhooks/{webhook_id}`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PartnerWebhook`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `PartnerWebhooks.UpdatePartnerWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerWebhooks.UpdatePartnerWebhookRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `webhookId` | `path` | `webhook_id` | `string` | yes |
| `body` | `body` | — | `PartnerWebhook` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerWebhook` | `partnerWebhookSchema` | `src/models/partner-webhook.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

