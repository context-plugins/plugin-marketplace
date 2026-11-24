<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 4 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createFormWebhook

- **Signature**: `createFormWebhook(request: Webhooks.CreateFormWebhookRequest, options?: RequestOptions): ApiPromise<WebhookCreated, Webhooks.CreateFormWebhookError>`
- **Wire**: `POST /api/v1/manage/forms/{form}/webhooks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookCreated`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Webhooks.CreateFormWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.CreateFormWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageFormsWebhooksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsWebhooksRequest` | `apiV1ManageFormsWebhooksRequestSchema` | `src/models/api-v1-manage-forms-webhooks-request.ts` |
| `WebhookCreated` | `webhookCreatedSchema` | `src/models/webhook-created.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteFormWebhook

- **Signature**: `deleteFormWebhook(request: Webhooks.DeleteFormWebhookRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsWebhooksResponse2, Webhooks.DeleteFormWebhookError>`
- **Wire**: `DELETE /api/v1/manage/forms/{form}/webhooks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsWebhooksResponse2`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Webhooks.DeleteFormWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.DeleteFormWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsWebhooksResponse2` | `apiV1ManageFormsWebhooksResponse2Schema` | `src/models/api-v1-manage-forms-webhooks-response2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listFormWebhooks

- **Signature**: `listFormWebhooks(request: Webhooks.ListFormWebhooksRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsWebhooksResponse, Webhooks.ListFormWebhooksError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/webhooks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageFormsWebhooksResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Webhooks.ListFormWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.ListFormWebhooksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsWebhooksResponse` | `apiV1ManageFormsWebhooksResponseSchema` | `src/models/api-v1-manage-forms-webhooks-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateFormWebhook

- **Signature**: `updateFormWebhook(request: Webhooks.UpdateFormWebhookRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsWebhooksResponse1, Webhooks.UpdateFormWebhookError>`
- **Wire**: `PATCH /api/v1/manage/forms/{form}/webhooks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsWebhooksResponse1`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Webhooks.UpdateFormWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.UpdateFormWebhookRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageFormsWebhooksRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsWebhooksRequest1` | `apiV1ManageFormsWebhooksRequest1Schema` | `src/models/api-v1-manage-forms-webhooks-request1.ts` |
| `ApiV1ManageFormsWebhooksResponse1` | `apiV1ManageFormsWebhooksResponse1Schema` | `src/models/api-v1-manage-forms-webhooks-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

