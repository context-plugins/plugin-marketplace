<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReceivableInvoiceApi — operations

Accessor: `client.receivableInvoiceApi` · Source: `src/resources/receivable-invoice-api.ts` · 9 operations · Request types: namespace `ReceivableInvoiceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### receivableInvoiceChangeStatusByKey

- **Signature**: `receivableInvoiceChangeStatusByKey(request: ReceivableInvoiceApi.ReceivableInvoiceChangeStatusByKeyRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/receivable-invoices/{documentId}/status-key/{statusKey}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReceivableInvoiceApi.ReceivableInvoiceChangeStatusByKeyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `documentId` | `path` | `number` | yes |
| `statusKey` | `path` | `string` | yes |
| `culture` | `path` | `string` | yes |

### receivableInvoiceCreate

- **Signature**: `receivableInvoiceCreate(request: ReceivableInvoiceApi.ReceivableInvoiceCreateRequest, options?: RequestOptions): ApiPromise<MessageSent, ApiError>`
- **Wire**: `POST /{culture}/receivable-invoices/simple-document`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageSent`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReceivableInvoiceApi.ReceivableInvoiceCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `SimpleDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleDocument` | `simpleDocumentSchema` | `src/models/simple-document.ts` |
| `MessageSent` | `messageSentSchema` | `src/models/message-sent.ts` |

### receivableInvoiceCreate2

- **Signature**: `receivableInvoiceCreate2(request: ReceivableInvoiceApi.ReceivableInvoiceCreate2Request, options?: RequestOptions): ApiPromise<MessageSent, ApiError>`
- **Wire**: `POST /{culture}/receivable-invoices/inline-document`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageSent`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReceivableInvoiceApi.ReceivableInvoiceCreate2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `InlineDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InlineDocument` | `inlineDocumentSchema` | `src/models/inline-document.ts` |
| `MessageSent` | `messageSentSchema` | `src/models/message-sent.ts` |

### receivableInvoiceDelete

- **Signature**: `receivableInvoiceDelete(request: ReceivableInvoiceApi.ReceivableInvoiceDeleteRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /{culture}/receivable-invoices/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReceivableInvoiceApi.ReceivableInvoiceDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### receivableInvoiceDetails

- **Signature**: `receivableInvoiceDetails(request: ReceivableInvoiceApi.ReceivableInvoiceDetailsRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/receivable-invoices/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReceivableInvoiceApi.ReceivableInvoiceDetailsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### receivableInvoiceEdit

- **Signature**: `receivableInvoiceEdit(request: ReceivableInvoiceApi.ReceivableInvoiceEditRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/receivable-invoices/simple-document/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReceivableInvoiceApi.ReceivableInvoiceEditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `SimpleDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleDocument` | `simpleDocumentSchema` | `src/models/simple-document.ts` |

### receivableInvoiceEdit2

- **Signature**: `receivableInvoiceEdit2(request: ReceivableInvoiceApi.ReceivableInvoiceEdit2Request, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/receivable-invoices/inline-document/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReceivableInvoiceApi.ReceivableInvoiceEdit2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `InlineDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InlineDocument` | `inlineDocumentSchema` | `src/models/inline-document.ts` |

### receivableInvoiceIndex

- **Signature**: `receivableInvoiceIndex(request: ReceivableInvoiceApi.ReceivableInvoiceIndexRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/receivable-invoices`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReceivableInvoiceApi.ReceivableInvoiceIndexRequest` (12):

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

### receivableInvoiceReceivePayment

- **Signature**: `receivableInvoiceReceivePayment(request: ReceivableInvoiceApi.ReceivableInvoiceReceivePaymentRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/receivable-invoices/{id}/payments`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReceivableInvoiceApi.ReceivableInvoiceReceivePaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `PaymentModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentModel` | `paymentModelSchema` | `src/models/payment-model.ts` |

