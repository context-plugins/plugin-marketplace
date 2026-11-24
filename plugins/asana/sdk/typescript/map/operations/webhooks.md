<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 5 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Signature**: `createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise<WebhooksResponse1, Webhooks.CreateWebhookError>`
- **Wire**: `POST /webhooks`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhooksResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Webhooks.CreateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.CreateWebhookRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `WebhooksRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksRequest` | `webhooksRequestSchema` | `src/models/webhooks-request.ts` |
| `WebhooksResponse1` | `webhooksResponse1Schema` | `src/models/webhooks-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<WebhooksResponse4, Webhooks.DeleteWebhookError>`
- **Wire**: `DELETE /webhooks/{webhook_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhooksResponse4`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Webhooks.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.DeleteWebhookRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `webhookGid` | `path` | `webhook_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksResponse4` | `webhooksResponse4Schema` | `src/models/webhooks-response4.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWebhook

- **Signature**: `getWebhook(request: Webhooks.GetWebhookRequest, options?: RequestOptions): ApiPromise<WebhooksResponse1, Webhooks.GetWebhookError>`
- **Wire**: `GET /webhooks/{webhook_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhooksResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Webhooks.GetWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhookRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `webhookGid` | `path` | `webhook_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksResponse1` | `webhooksResponse1Schema` | `src/models/webhooks-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWebhooks

- **Signature**: `getWebhooks(request: Webhooks.GetWebhooksRequest, options?: RequestOptions): ApiPromise<WebhooksResponse, Webhooks.GetWebhooksError>`
- **Wire**: `GET /webhooks`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhooksResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Webhooks.GetWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhooksRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspace` | `query` | — | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `resource` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksResponse` | `webhooksResponseSchema` | `src/models/webhooks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateWebhook

- **Signature**: `updateWebhook(request: Webhooks.UpdateWebhookRequest, options?: RequestOptions): ApiPromise<WebhooksResponse1, Webhooks.UpdateWebhookError>`
- **Wire**: `PUT /webhooks/{webhook_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhooksResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Webhooks.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.UpdateWebhookRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `webhookGid` | `path` | `webhook_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `WebhooksRequest1` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksRequest1` | `webhooksRequest1Schema` | `src/models/webhooks-request1.ts` |
| `WebhooksResponse1` | `webhooksResponse1Schema` | `src/models/webhooks-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

