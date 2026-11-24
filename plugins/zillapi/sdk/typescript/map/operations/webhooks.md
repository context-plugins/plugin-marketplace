<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 4 operations · Request types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `zillapi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Signature**: `createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise<V1WebhooksResponse1, ApiError>`
- **Wire**: `POST /v1/webhooks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WebhooksResponse1`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.CreateWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WebhookCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookCreate` | `webhookCreateSchema` | `src/models/webhook-create.ts` |
| `V1WebhooksResponse1` | `v1WebhooksResponse1Schema` | `src/models/v1-webhooks-response1.ts` |

### listWebhookDeliveries

- **Signature**: `listWebhookDeliveries(request: Webhooks.ListWebhookDeliveriesRequest, options?: RequestOptions): ApiPromise<V1WebhooksDeliveriesResponse, ApiError>`
- **Wire**: `GET /v1/webhooks/{id}/deliveries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WebhooksDeliveriesResponse`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.ListWebhookDeliveriesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebhooksDeliveriesResponse` | `v1WebhooksDeliveriesResponseSchema` | `src/models/v1-webhooks-deliveries-response.ts` |

### listWebhooks

- **Signature**: `listWebhooks(options?: RequestOptions): ApiPromise<V1WebhooksResponse, ApiError>`
- **Wire**: `GET /v1/webhooks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WebhooksResponse`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebhooksResponse` | `v1WebhooksResponseSchema` | `src/models/v1-webhooks-response.ts` |

### revokeWebhook

- **Signature**: `revokeWebhook(request: Webhooks.RevokeWebhookRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/webhooks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Webhooks.RevokeWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

