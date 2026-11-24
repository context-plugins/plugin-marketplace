<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `src/resources/invoices.ts` · 8 operations · Request and error types: namespace `Invoices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelInvoice

- **Signature**: `cancelInvoice(request: Invoices.CancelInvoiceRequest, options?: RequestOptions): ApiPromise<Invoice, Invoices.CancelInvoiceError>`
- **Wire**: `POST /invoices/{id}/cancel`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Invoice`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Invoices.CancelInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.CancelInvoiceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createInvoice

- **Signature**: `createInvoice(request: Invoices.CreateInvoiceRequest, options?: RequestOptions): ApiPromise<Invoice, Invoices.CreateInvoiceError>`
- **Wire**: `POST /invoices`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Invoice`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Invoices.CreateInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.CreateInvoiceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InvoicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoicesRequest` | `invoicesRequestSchema` | `src/models/invoices-request.ts` |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteInvoice

- **Signature**: `deleteInvoice(request: Invoices.DeleteInvoiceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Invoices.DeleteInvoiceError>`
- **Wire**: `DELETE /invoices/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Invoices.DeleteInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.DeleteInvoiceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchInvoice

- **Signature**: `fetchInvoice(request: Invoices.FetchInvoiceRequest, options?: RequestOptions): ApiPromise<Invoice, Invoices.FetchInvoiceError>`
- **Wire**: `GET /invoices/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Invoice`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Invoices.FetchInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.FetchInvoiceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### issueInvoice

- **Signature**: `issueInvoice(request: Invoices.IssueInvoiceRequest, options?: RequestOptions): ApiPromise<Invoice, Invoices.IssueInvoiceError>`
- **Wire**: `POST /invoices/{id}/issue`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Invoice`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Invoices.IssueInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.IssueInvoiceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listInvoices

- **Signature**: `listInvoices(request?: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise<InvoicesResponse, Invoices.ListInvoicesError>`
- **Wire**: `GET /invoices`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoicesResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Invoices.ListInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.ListInvoicesRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `type` | `query` | — | `Type3` | no | — |
| `paymentId` | `query` | `payment_id` | `string` | no | — |
| `customerId` | `query` | `customer_id` | `string` | no | — |
| `subscriptionId` | `query` | `subscription_id` | `string` | no | — |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type3` | `type3Schema` | `src/models/type3.ts` |
| `InvoicesResponse` | `invoicesResponseSchema` | `src/models/invoices-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sendInvoiceNotification

- **Signature**: `sendInvoiceNotification(request: Invoices.SendInvoiceNotificationRequest, options?: RequestOptions): ApiPromise<InvoicesNotifyByResponse, Invoices.SendInvoiceNotificationError>`
- **Wire**: `POST /invoices/{id}/notify_by/{medium}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoicesNotifyByResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Invoices.SendInvoiceNotificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.SendInvoiceNotificationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `medium` | `path` | `Medium` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Medium` | `mediumSchema` | `src/models/medium.ts` |
| `InvoicesNotifyByResponse` | `invoicesNotifyByResponseSchema` | `src/models/invoices-notify-by-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateInvoice

- **Signature**: `updateInvoice(request: Invoices.UpdateInvoiceRequest, options?: RequestOptions): ApiPromise<Invoice, Invoices.UpdateInvoiceError>`
- **Wire**: `PATCH /invoices/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Invoice`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Invoices.UpdateInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.UpdateInvoiceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `InvoicesRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoicesRequest1` | `invoicesRequest1Schema` | `src/models/invoices-request1.ts` |
| `Invoice` | `invoiceSchema` | `src/models/invoice.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

