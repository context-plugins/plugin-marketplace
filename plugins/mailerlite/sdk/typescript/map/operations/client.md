<!-- Generated file — do not edit; regenerated with the SDK. -->

# MailerLiteClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 6 operations · Request and error types: namespace `MailerLiteClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `MailerLiteClient.CreateWebhookRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mailer-lite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebhook

- **Signature**: `createWebhook(request?: MailerLiteClient.CreateWebhookRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /webhooks`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MailerLiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MailerLiteClient.CreateWebhookRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `100` |
| `offset` | `query` | `number` | no | `0` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: MailerLiteClient.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<undefined, MailerLiteClient.DeleteWebhookError>`
- **Wire**: `DELETE /webhooks/{webhookId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MailerLiteError` with `kind: "api"`, an instance of `MailerLiteClient.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MailerLiteClient.DeleteWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `number` | yes |

### getCountOfWebhooks

- **Signature**: `getCountOfWebhooks(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /webhooks/count`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MailerLiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### postWebhooks

- **Signature**: `postWebhooks(request: MailerLiteClient.PostWebhooksRequest, options?: RequestOptions): ApiPromise<undefined, MailerLiteClient.PostWebhooksError>`
- **Wire**: `POST /webhooks`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MailerLiteError` with `kind: "api"`, an instance of `MailerLiteClient.PostWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MailerLiteClient.PostWebhooksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Webhook` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |

### showWebhookById

- **Signature**: `showWebhookById(request: MailerLiteClient.ShowWebhookByIdRequest, options?: RequestOptions): ApiPromise<Webhook, MailerLiteClient.ShowWebhookByIdError>`
- **Wire**: `GET /webhooks/{webhookId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Webhook`
- **Error**: `MailerLiteError` with `kind: "api"`, an instance of `MailerLiteClient.ShowWebhookByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MailerLiteClient.ShowWebhookByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |

### updateWebhook

- **Signature**: `updateWebhook(request: MailerLiteClient.UpdateWebhookRequest, options?: RequestOptions): ApiPromise<undefined, MailerLiteClient.UpdateWebhookError>`
- **Wire**: `PUT /webhooks/{webhookId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MailerLiteError` with `kind: "api"`, an instance of `MailerLiteClient.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MailerLiteClient.UpdateWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `number` | yes |

