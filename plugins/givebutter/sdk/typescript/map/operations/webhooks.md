<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 5 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### webhooksDestroy

- **Signature**: `webhooksDestroy(request: Webhooks.WebhooksDestroyRequest, options?: RequestOptions): ApiPromise<undefined, Webhooks.WebhooksDestroyError>`
- **Wire**: `DELETE /v1/webhooks/{webhook}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Webhooks.WebhooksDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.WebhooksDestroyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhook` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### webhooksIndex

- **Signature**: `webhooksIndex(options?: RequestOptions): ApiPromise<V1WebhooksResponse, ApiError>`
- **Wire**: `GET /v1/webhooks`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WebhooksResponse`
- **Error**: `GivebutterError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebhooksResponse` | `v1WebhooksResponseSchema` | `src/models/v1-webhooks-response.ts` |

### webhooksShow

- **Signature**: `webhooksShow(request: Webhooks.WebhooksShowRequest, options?: RequestOptions): ApiPromise<WebhookResource, Webhooks.WebhooksShowError>`
- **Wire**: `GET /v1/webhooks/{webhook}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Webhooks.WebhooksShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.WebhooksShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhook` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookResource` | `webhookResourceSchema` | `src/models/webhook-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### webhooksStore

- **Signature**: `webhooksStore(request: Webhooks.WebhooksStoreRequest, options?: RequestOptions): ApiPromise<WebhookResource, Webhooks.WebhooksStoreError>`
- **Wire**: `POST /v1/webhooks`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Webhooks.WebhooksStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.WebhooksStoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1WebhooksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebhooksRequest` | `v1WebhooksRequestSchema` | `src/models/v1-webhooks-request.ts` |
| `WebhookResource` | `webhookResourceSchema` | `src/models/webhook-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

### webhooksUpdate

- **Signature**: `webhooksUpdate(request: Webhooks.WebhooksUpdateRequest, options?: RequestOptions): ApiPromise<WebhookResource, Webhooks.WebhooksUpdateError>`
- **Wire**: `PUT /v1/webhooks/{webhook}`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Webhooks.WebhooksUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.WebhooksUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhook` | `path` | `string` | yes |
| `body` | `body` | `V1WebhooksRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebhooksRequest1` | `v1WebhooksRequest1Schema` | `src/models/v1-webhooks-request1.ts` |
| `WebhookResource` | `webhookResourceSchema` | `src/models/webhook-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

