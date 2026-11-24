<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhooks — operations

Accessor: `client.webhooks` · Source: `src/resources/webhooks.ts` · 9 operations · Request and error types: namespace `Webhooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addWebhook

- **Signature**: `addWebhook(request?: Webhooks.AddWebhookRequest, options?: RequestOptions): ApiPromise<NotificationsWebhooksResponse, Webhooks.AddWebhookError>`
- **Wire**: `POST /notifications/webhooks`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotificationsWebhooksResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Webhooks.AddWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [409] `Error` · `"error5"` [429] `Error` · `"error500"` [500] no body · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.AddWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NotificationsWebhooksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsWebhooksRequest` | `notificationsWebhooksRequestSchema` | `src/models/notifications-webhooks-request.ts` |
| `NotificationsWebhooksResponse` | `notificationsWebhooksResponseSchema` | `src/models/notifications-webhooks-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteWebhook

- **Signature**: `deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<undefined, Webhooks.DeleteWebhookError>`
- **Wire**: `DELETE /notifications/webhooks/{webhookId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Webhooks.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.DeleteWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getWebhook

- **Signature**: `getWebhook(request: Webhooks.GetWebhookRequest, options?: RequestOptions): ApiPromise<NotificationsWebhooksResponse, Webhooks.GetWebhookError>`
- **Wire**: `GET /notifications/webhooks/{webhookId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationsWebhooksResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Webhooks.GetWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error500"` [500] no body · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsWebhooksResponse` | `notificationsWebhooksResponseSchema` | `src/models/notifications-webhooks-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getWebhookMessage

- **Signature**: `getWebhookMessage(request: Webhooks.GetWebhookMessageRequest, options?: RequestOptions): ApiPromise<NotificationsWebhooksMessagesResponse1, Webhooks.GetWebhookMessageError>`
- **Wire**: `GET /notifications/webhooks/{webhookId}/messages/{messageId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationsWebhooksMessagesResponse1`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Webhooks.GetWebhookMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error500"` [500] no body · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhookMessageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsWebhooksMessagesResponse1` | `notificationsWebhooksMessagesResponse1Schema` | `src/models/notifications-webhooks-messages-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getWebhookStats

- **Signature**: `getWebhookStats(request: Webhooks.GetWebhookStatsRequest, options?: RequestOptions): ApiPromise<WebhookStats, Webhooks.GetWebhookStatsError>`
- **Wire**: `GET /notifications/webhooks/{webhookId}/stats`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookStats`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Webhooks.GetWebhookStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.GetWebhookStatsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookStats` | `webhookStatsSchema` | `src/models/webhook-stats.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAppWebhooks

- **Signature**: `listAppWebhooks(options?: RequestOptions): ApiPromise<NotificationsWebhooksResponse1, Webhooks.ListAppWebhooksError>`
- **Wire**: `GET /notifications/webhooks`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationsWebhooksResponse1`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Webhooks.ListAppWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"error500"` [500] no body · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsWebhooksResponse1` | `notificationsWebhooksResponse1Schema` | `src/models/notifications-webhooks-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listMessages

- **Signature**: `listMessages(request: Webhooks.ListMessagesRequest, options?: RequestOptions): ApiPromise<NotificationsWebhooksMessagesResponse, Webhooks.ListMessagesError>`
- **Wire**: `GET /notifications/webhooks/{webhookId}/messages`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationsWebhooksMessagesResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Webhooks.ListMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error500"` [500] no body · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.ListMessagesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsWebhooksMessagesResponse` | `notificationsWebhooksMessagesResponseSchema` | `src/models/notifications-webhooks-messages-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### testMessage

- **Signature**: `testMessage(request?: Webhooks.TestMessageRequest, options?: RequestOptions): ApiPromise<undefined, Webhooks.TestMessageError>`
- **Wire**: `POST /notifications/messages/test`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Webhooks.TestMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error500"` [500] no body · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.TestMessageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NotificationsMessagesTestRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsMessagesTestRequest` | `notificationsMessagesTestRequestSchema` | `src/models/notifications-messages-test-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateWebhook

- **Signature**: `updateWebhook(request: Webhooks.UpdateWebhookRequest, options?: RequestOptions): ApiPromise<NotificationsWebhooksResponse, Webhooks.UpdateWebhookError>`
- **Wire**: `POST /notifications/webhooks/{webhookId}`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotificationsWebhooksResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Webhooks.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"error500"` [500] no body · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Webhooks.UpdateWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `string` | yes |
| `body` | `body` | `NotificationsWebhooksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsWebhooksRequest` | `notificationsWebhooksRequestSchema` | `src/models/notifications-webhooks-request.ts` |
| `NotificationsWebhooksResponse` | `notificationsWebhooksResponseSchema` | `src/models/notifications-webhooks-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

