<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaxInvoice — operations

Accessor: `client.taxInvoice` · Source: `src/resources/tax-invoice.ts` · 10 operations · Request types: namespace `TaxInvoice`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### taxInvoiceChangeStatusByKey

- **Signature**: `taxInvoiceChangeStatusByKey(request: TaxInvoice.TaxInvoiceChangeStatusByKeyRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/tax-invoices/{documentId}/status-key/{statusKey}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaxInvoice.TaxInvoiceChangeStatusByKeyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `documentId` | `path` | `number` | yes |
| `statusKey` | `path` | `string` | yes |
| `culture` | `path` | `string` | yes |

### taxInvoiceCreate

- **Signature**: `taxInvoiceCreate(request: TaxInvoice.TaxInvoiceCreateRequest, options?: RequestOptions): ApiPromise<MessageSent, ApiError>`
- **Wire**: `POST /{culture}/tax-invoices/simple-document`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageSent`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaxInvoice.TaxInvoiceCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `SimpleDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleDocument` | `simpleDocumentSchema` | `src/models/simple-document.ts` |
| `MessageSent` | `messageSentSchema` | `src/models/message-sent.ts` |

### taxInvoiceCreate2

- **Signature**: `taxInvoiceCreate2(request: TaxInvoice.TaxInvoiceCreate2Request, options?: RequestOptions): ApiPromise<MessageSent, ApiError>`
- **Wire**: `POST /{culture}/tax-invoices/inline-document`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageSent`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaxInvoice.TaxInvoiceCreate2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `InlineDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InlineDocument` | `inlineDocumentSchema` | `src/models/inline-document.ts` |
| `MessageSent` | `messageSentSchema` | `src/models/message-sent.ts` |

### taxInvoiceDelete

- **Signature**: `taxInvoiceDelete(request: TaxInvoice.TaxInvoiceDeleteRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /{culture}/tax-invoices/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaxInvoice.TaxInvoiceDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### taxInvoiceDetails

- **Signature**: `taxInvoiceDetails(request: TaxInvoice.TaxInvoiceDetailsRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/tax-invoices/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaxInvoice.TaxInvoiceDetailsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### taxInvoiceEdit

- **Signature**: `taxInvoiceEdit(request: TaxInvoice.TaxInvoiceEditRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/tax-invoices/simple-document/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaxInvoice.TaxInvoiceEditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `SimpleDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleDocument` | `simpleDocumentSchema` | `src/models/simple-document.ts` |

### taxInvoiceEdit2

- **Signature**: `taxInvoiceEdit2(request: TaxInvoice.TaxInvoiceEdit2Request, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/tax-invoices/inline-document/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaxInvoice.TaxInvoiceEdit2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `InlineDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InlineDocument` | `inlineDocumentSchema` | `src/models/inline-document.ts` |

### taxInvoiceGetCumulativeDocumentReferenceList

- **Signature**: `taxInvoiceGetCumulativeDocumentReferenceList(request: TaxInvoice.TaxInvoiceGetCumulativeDocumentReferenceListRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/tax-invoices/cumulative-references`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaxInvoice.TaxInvoiceGetCumulativeDocumentReferenceListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `ids` | `query` | `string` | no |

### taxInvoiceIndex

- **Signature**: `taxInvoiceIndex(request: TaxInvoice.TaxInvoiceIndexRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/tax-invoices`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaxInvoice.TaxInvoiceIndexRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `culture` | `path` | — | `string` | yes |
| `sortBy` | `query` | `SortBy` | `string` | no |
| `currentPage` | `query` | `CurrentPage` | `string` | no |
| `pageSize` | `query` | `PageSize` | `string` | no |
| `filter` | `query` | `Filter` | `string` | no |
| `searchString` | `query` | `SearchString` | `string` | no |
| `customDocumentModels` | `query` | `CustomDocumentModels` | `string` | no |
| `range` | `query` | `Range` | `string` | no |
| `month` | `query` | `Month` | `string` | no |
| `year` | `query` | `Year` | `string` | no |
| `startDate` | `query` | `StartDate` | `string` | no |
| `endDate` | `query` | `EndDate` | `string` | no |

### taxInvoiceReceivePayment

- **Signature**: `taxInvoiceReceivePayment(request: TaxInvoice.TaxInvoiceReceivePaymentRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/tax-invoices/{id}/payments`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaxInvoice.TaxInvoiceReceivePaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `PaymentModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentModel` | `paymentModelSchema` | `src/models/payment-model.ts` |

