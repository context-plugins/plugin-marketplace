<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 5 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### webhooksControllerCreate

- **Signature**: `webhooksControllerCreate(request: Webhooks.WebhooksControllerCreateRequest, options?: RequestOptions): ApiPromise<Webhook, Webhooks.WebhooksControllerCreateError>`
- **Wire**: `POST /v1/projects/{project}/webhooks`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Webhook`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Webhooks.WebhooksControllerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.WebhooksControllerCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `CreateWebhookDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateWebhookDto` | `createWebhookDtoSchema` | `src/models/create-webhook-dto.ts` |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |

### webhooksControllerFindAll

- **Signature**: `webhooksControllerFindAll(request: Webhooks.WebhooksControllerFindAllRequest, options?: RequestOptions): ApiPromise<Webhook[], Webhooks.WebhooksControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/webhooks`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Webhook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Webhooks.WebhooksControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.WebhooksControllerFindAllRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `project` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `perPage` | `query` | `number` | no | `100` |
| `sortBy` | `query` | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `createdBy` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |

### webhooksControllerFindOne

- **Signature**: `webhooksControllerFindOne(request: Webhooks.WebhooksControllerFindOneRequest, options?: RequestOptions): ApiPromise<Webhook, Webhooks.WebhooksControllerFindOneError>`
- **Wire**: `GET /v1/projects/{project}/webhooks/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Webhook`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Webhooks.WebhooksControllerFindOneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.WebhooksControllerFindOneRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |

### webhooksControllerRemove

- **Signature**: `webhooksControllerRemove(request: Webhooks.WebhooksControllerRemoveRequest, options?: RequestOptions): ApiPromise<Webhook, Webhooks.WebhooksControllerRemoveError>`
- **Wire**: `DELETE /v1/projects/{project}/webhooks/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Webhook`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Webhooks.WebhooksControllerRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.WebhooksControllerRemoveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |

### webhooksControllerUpdate

- **Signature**: `webhooksControllerUpdate(request: Webhooks.WebhooksControllerUpdateRequest, options?: RequestOptions): ApiPromise<Webhook, Webhooks.WebhooksControllerUpdateError>`
- **Wire**: `PATCH /v1/projects/{project}/webhooks/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Webhook`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Webhooks.WebhooksControllerUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.WebhooksControllerUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateWebhookDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateWebhookDto` | `updateWebhookDtoSchema` | `src/models/update-webhook-dto.ts` |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |

