<!-- Generated file — do not edit; regenerated with the SDK. -->

# LiliClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 11 operations · Request and error types: namespace `LiliClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `LiliClient.AddWebhookRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lili`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addWebhook

- **Signature**: `addWebhook(request: LiliClient.AddWebhookRequest, options?: RequestOptions): ApiPromise<WebhookCreateResponse, LiliClient.AddWebhookError>`
- **Wire**: `PUT /lili/api/v1/webhooks`
- **Auth**: `accessKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookCreateResponse`
- **Error**: `LiliError` with `kind: "api"`, an instance of `LiliClient.AddWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"jsonErrorResponse"` [400] `JsonErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiliClient.AddWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WebhookRequestModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookRequestModel` | `webhookRequestModelSchema` | `src/models/webhook-request-model.ts` |
| `WebhookCreateResponse` | `webhookCreateResponseSchema` | `src/models/webhook-create-response.ts` |
| `JsonErrorResponse` | `jsonErrorResponseSchema` | `src/models/json-error-response.ts` |

### createPaymentNotification

- **Signature**: `createPaymentNotification(request: LiliClient.CreatePaymentNotificationRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /lili/api/v1/{customerId}/bankLetter`
- **Auth**: `accessKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiliError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LiliClient.CreatePaymentNotificationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |

### deleteWebhook

- **Signature**: `deleteWebhook(request: LiliClient.DeleteWebhookRequest, options?: RequestOptions): ApiPromise<undefined, LiliClient.DeleteWebhookError>`
- **Wire**: `DELETE /lili/api/v1/webhooks/{webhookId}`
- **Auth**: `accessKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiliError` with `kind: "api"`, an instance of `LiliClient.DeleteWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"jsonErrorResponse"` [400] `JsonErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiliClient.DeleteWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JsonErrorResponse` | `jsonErrorResponseSchema` | `src/models/json-error-response.ts` |

### getAll

- **Signature**: `getAll(options?: RequestOptions): ApiPromise<WebhookListResponse, LiliClient.GetAllError>`
- **Wire**: `GET /lili/api/v1/webhooks`
- **Auth**: `accessKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookListResponse`
- **Error**: `LiliError` with `kind: "api"`, an instance of `LiliClient.GetAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"jsonErrorResponse"` [400] `JsonErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookListResponse` | `webhookListResponseSchema` | `src/models/webhook-list-response.ts` |
| `JsonErrorResponse` | `jsonErrorResponseSchema` | `src/models/json-error-response.ts` |

### getWebhook

- **Signature**: `getWebhook(request: LiliClient.GetWebhookRequest, options?: RequestOptions): ApiPromise<WebhookResponse, LiliClient.GetWebhookError>`
- **Wire**: `GET /lili/api/v1/webhooks/{webhookId}`
- **Auth**: `accessKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookResponse`
- **Error**: `LiliError` with `kind: "api"`, an instance of `LiliClient.GetWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"jsonErrorResponse"` [400] `JsonErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiliClient.GetWebhookRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookResponse` | `webhookResponseSchema` | `src/models/webhook-response.ts` |
| `JsonErrorResponse` | `jsonErrorResponseSchema` | `src/models/json-error-response.ts` |

### paymentList

- **Signature**: `paymentList(request?: LiliClient.PaymentListRequest, options?: RequestOptions): ApiPromise<PaymentListResponse, ApiError>`
- **Wire**: `GET /lili/api/v1/partner/payments`
- **Auth**: `accessKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentListResponse`
- **Error**: `LiliError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LiliClient.PaymentListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `query` | `string` | no |
| `receiverAccountNumber` | `query` | `string` | no |
| `startDate` | `query` | `Date` (date-time) | no |
| `endDate` | `query` | `Date` (date-time) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentListResponse` | `paymentListResponseSchema` | `src/models/payment-list-response.ts` |

### putLiliApiV1Payments

- **Signature**: `putLiliApiV1Payments(request?: LiliClient.PutLiliApiV1PaymentsRequest, options?: RequestOptions): ApiPromise<PaymentResponse, ApiError>`
- **Wire**: `PUT /lili/api/v1/payments`
- **Auth**: `accessKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentResponse`
- **Error**: `LiliError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LiliClient.PutLiliApiV1PaymentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRequest` | `paymentRequestSchema` | `src/models/payment-request.ts` |
| `PaymentResponse` | `paymentResponseSchema` | `src/models/payment-response.ts` |

### registerAccount

- **Signature**: `registerAccount(request?: LiliClient.RegisterAccountRequest, options?: RequestOptions): ApiPromise<LeadResponse, LiliClient.RegisterAccountError>`
- **Wire**: `PUT /lili/api/v1/lead`
- **Auth**: `accessKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LeadResponse`
- **Error**: `LiliError` with `kind: "api"`, an instance of `LiliClient.RegisterAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiliClient.RegisterAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LeadRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LeadRequest` | `leadRequestSchema` | `src/models/lead-request.ts` |
| `LeadResponse` | `leadResponseSchema` | `src/models/lead-response.ts` |

### updateLead

- **Signature**: `updateLead(request: LiliClient.UpdateLeadRequest, options?: RequestOptions): ApiPromise<undefined, LiliClient.UpdateLeadError>`
- **Wire**: `POST /lili/api/v1/lead/{customerId}`
- **Auth**: `accessKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiliError` with `kind: "api"`, an instance of `LiliClient.UpdateLeadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiliClient.UpdateLeadRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `body` | `body` | `LeadRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LeadRequest` | `leadRequestSchema` | `src/models/lead-request.ts` |

### updateWebhook

- **Signature**: `updateWebhook(request: LiliClient.UpdateWebhookRequest, options?: RequestOptions): ApiPromise<WebhookResponse, LiliClient.UpdateWebhookError>`
- **Wire**: `POST /lili/api/v1/webhooks/{webhookId}`
- **Auth**: `accessKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookResponse`
- **Error**: `LiliError` with `kind: "api"`, an instance of `LiliClient.UpdateWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"jsonErrorResponse"` [400] `JsonErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiliClient.UpdateWebhookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `webhookId` | `path` | `string` | yes |
| `body` | `body` | `WebhookRequestModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookRequestModel` | `webhookRequestModelSchema` | `src/models/webhook-request-model.ts` |
| `WebhookResponse` | `webhookResponseSchema` | `src/models/webhook-response.ts` |
| `JsonErrorResponse` | `jsonErrorResponseSchema` | `src/models/json-error-response.ts` |

### uploadAdditionalDoc

- **Signature**: `uploadAdditionalDoc(request: LiliClient.UploadAdditionalDocRequest, options?: RequestOptions): ApiPromise<undefined, LiliClient.UploadAdditionalDocError>`
- **Wire**: `PUT /lili/api/v1/lead/{customerId}/upload`
- **Auth**: `accessKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LiliError` with `kind: "api"`, an instance of `LiliClient.UploadAdditionalDocError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LiliClient.UploadAdditionalDocRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `body` | `body` | `LeadUpload` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LeadUpload` | `leadUploadSchema` | `src/models/lead-upload.ts` |

