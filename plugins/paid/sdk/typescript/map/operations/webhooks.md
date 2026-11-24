<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 4 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listWebhooks

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listWebhooks(request: Webhooks.ListWebhooksRequest, options?: RequestOptions): ApiPromise<WebhookListResponse, Webhooks.ListWebhooksError>`
- **Wire**: `GET /webhooks/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Webhooks.ListWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.ListWebhooksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookListResponse` | `webhookListResponseSchema` | `src/models/webhook-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### rotateWebhookSecret

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `rotateWebhookSecret(request: Webhooks.RotateWebhookSecretRequest, options?: RequestOptions): ApiPromise<RotateWebhookSecretResponse, Webhooks.RotateWebhookSecretError>`
- **Wire**: `POST /webhooks/rotate-secret`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RotateWebhookSecretResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Webhooks.RotateWebhookSecretError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.RotateWebhookSecretRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RotateWebhookSecretResponse` | `rotateWebhookSecretResponseSchema` | `src/models/rotate-webhook-secret-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### testWebhook

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `testWebhook(request: Webhooks.TestWebhookRequest, options?: RequestOptions): ApiPromise<WebhookTestResponse, Webhooks.TestWebhookError>`
- **Wire**: `POST /webhooks/{webhookName}/test`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookTestResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Webhooks.TestWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.TestWebhookRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookName` | `path` | — | `WebhooksWebhookNameTestPostParametersWebhookName` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksWebhookNameTestPostParametersWebhookName` | `webhooksWebhookNameTestPostParametersWebhookNameSchema` | `src/models/webhooks-webhook-name-test-post-parameters-webhook-name.ts` |
| `WebhookTestResponse` | `webhookTestResponseSchema` | `src/models/webhook-test-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateWebhook

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateWebhook(request: Webhooks.UpdateWebhookRequestParams, options?: RequestOptions): ApiPromise<WebhookUpdateResponse, Webhooks.UpdateWebhookError>`
- **Wire**: `PATCH /webhooks/{webhookName}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookUpdateResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Webhooks.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.UpdateWebhookRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookName` | `path` | — | `WebhooksWebhookNamePatchParametersWebhookName` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateWebhookRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhooksWebhookNamePatchParametersWebhookName` | `webhooksWebhookNamePatchParametersWebhookNameSchema` | `src/models/webhooks-webhook-name-patch-parameters-webhook-name.ts` |
| `UpdateWebhookRequest` | `updateWebhookRequestSchema` | `src/models/update-webhook-request.ts` |
| `WebhookUpdateResponse` | `webhookUpdateResponseSchema` | `src/models/webhook-update-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

