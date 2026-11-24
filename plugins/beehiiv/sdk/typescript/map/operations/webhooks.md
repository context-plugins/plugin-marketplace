<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 5 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create13

- **Signature**: `create13(request: Webhooks.Create13Request, options?: RequestOptions): ApiPromise<WebhookResponse, Webhooks.Create13Error>`
- **Wire**: `POST /publications/{publicationId}/webhooks`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Webhooks.Create13Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.Create13Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsWebhooksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsWebhooksRequest` | `publicationsWebhooksRequestSchema` | `src/models/publications-webhooks-request.ts` |
| `WebhookResponse` | `webhookResponseSchema` | `src/models/webhook-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### delete6

- **Signature**: `delete6(request: Webhooks.Delete6Request, options?: RequestOptions): ApiPromise<WebhooksDeleteResponse, Webhooks.Delete6Error>`
- **Wire**: `DELETE /publications/{publicationId}/webhooks/{endpointId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhooksDeleteResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Webhooks.Delete6Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.Delete6Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `endpointId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksDeleteResponse` | `webhooksDeleteResponseSchema` | `src/models/webhooks-delete-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index22

- **Signature**: `index22(request: Webhooks.Index22Request, options?: RequestOptions): ApiPromise<IndexWebhooksResponse, Webhooks.Index22Error>`
- **Wire**: `GET /publications/{publicationId}/webhooks`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IndexWebhooksResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Webhooks.Index22Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.Index22Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IndexWebhooksResponse` | `indexWebhooksResponseSchema` | `src/models/index-webhooks-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show17

- **Signature**: `show17(request: Webhooks.Show17Request, options?: RequestOptions): ApiPromise<WebhookResponse, Webhooks.Show17Error>`
- **Wire**: `GET /publications/{publicationId}/webhooks/{endpointId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Webhooks.Show17Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.Show17Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `endpointId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookResponse` | `webhookResponseSchema` | `src/models/webhook-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### update4

- **Signature**: `update4(request: Webhooks.Update4Request, options?: RequestOptions): ApiPromise<WebhookResponse, Webhooks.Update4Error>`
- **Wire**: `PATCH /publications/{publicationId}/webhooks/{endpointId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Webhooks.Update4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.Update4Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `endpointId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsWebhooksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsWebhooksRequest1` | `publicationsWebhooksRequest1Schema` | `src/models/publications-webhooks-request1.ts` |
| `WebhookResponse` | `webhookResponseSchema` | `src/models/webhook-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

