<!-- Generated file — do not edit; regenerated with the SDK. -->

# Attachments — operations

Accessor: `client.attachments` · Source: `src/resources/attachments.ts` · 8 operations · Request and error types: namespace `Attachments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomerAttachment

- **Signature**: `createCustomerAttachment(request: Attachments.CreateCustomerAttachmentRequest, options?: RequestOptions): ApiPromise<AttachmentResponseDto, Attachments.CreateCustomerAttachmentError>`
- **Wire**: `POST /v3/attachments/customers/{customerId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AttachmentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Attachments.CreateCustomerAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.CreateCustomerAttachmentRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `name` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentResponseDto` | `attachmentResponseDtoSchema` | `src/models/attachment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createInvoiceAttachment

- **Signature**: `createInvoiceAttachment(request: Attachments.CreateInvoiceAttachmentRequest, options?: RequestOptions): ApiPromise<AttachmentResponseDto, Attachments.CreateInvoiceAttachmentError>`
- **Wire**: `POST /v3/attachments/invoices/{invoiceId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AttachmentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Attachments.CreateInvoiceAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.CreateInvoiceAttachmentRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `invoiceId` | `path` | `string` | yes |
| `name` | `query` | `string` | yes |
| `replaceInvoicePdf` | `query` | `boolean` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentResponseDto` | `attachmentResponseDtoSchema` | `src/models/attachment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createVendorAttachment

- **Signature**: `createVendorAttachment(request: Attachments.CreateVendorAttachmentRequest, options?: RequestOptions): ApiPromise<AttachmentResponseDto, Attachments.CreateVendorAttachmentError>`
- **Wire**: `POST /v3/attachments/vendors/{vendorId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AttachmentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Attachments.CreateVendorAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.CreateVendorAttachmentRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `name` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentResponseDto` | `attachmentResponseDtoSchema` | `src/models/attachment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteAttachment

- **Signature**: `deleteAttachment(request: Attachments.DeleteAttachmentRequest, options?: RequestOptions): ApiPromise<StatusDto, Attachments.DeleteAttachmentError>`
- **Wire**: `DELETE /v3/attachments/{attachmentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Attachments.DeleteAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.DeleteAttachmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `attachmentId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusDto` | `statusDtoSchema` | `src/models/status-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getAttachment

- **Signature**: `getAttachment(request: Attachments.GetAttachmentRequest, options?: RequestOptions): ApiPromise<AttachmentResponseDto, Attachments.GetAttachmentError>`
- **Wire**: `GET /v3/attachments/{attachmentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AttachmentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Attachments.GetAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.GetAttachmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `attachmentId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AttachmentResponseDto` | `attachmentResponseDtoSchema` | `src/models/attachment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listCustomerAttachments

- **Signature**: `listCustomerAttachments(request: Attachments.ListCustomerAttachmentsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoAttachmentResponseDto, Attachments.ListCustomerAttachmentsError>`
- **Wire**: `GET /v3/attachments/customers/{customerId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoAttachmentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Attachments.ListCustomerAttachmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.ListCustomerAttachmentsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoAttachmentResponseDto` | `listResponseDtoAttachmentResponseDtoSchema` | `src/models/list-response-dto-attachment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listInvoiceAttachments

- **Signature**: `listInvoiceAttachments(request: Attachments.ListInvoiceAttachmentsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoAttachmentResponseDto, Attachments.ListInvoiceAttachmentsError>`
- **Wire**: `GET /v3/attachments/invoices/{invoiceId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoAttachmentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Attachments.ListInvoiceAttachmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.ListInvoiceAttachmentsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `invoiceId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoAttachmentResponseDto` | `listResponseDtoAttachmentResponseDtoSchema` | `src/models/list-response-dto-attachment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listVendorAttachments

- **Signature**: `listVendorAttachments(request: Attachments.ListVendorAttachmentsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoAttachmentResponseDto, Attachments.ListVendorAttachmentsError>`
- **Wire**: `GET /v3/attachments/vendors/{vendorId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoAttachmentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Attachments.ListVendorAttachmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Attachments.ListVendorAttachmentsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoAttachmentResponseDto` | `listResponseDtoAttachmentResponseDtoSchema` | `src/models/list-response-dto-attachment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

