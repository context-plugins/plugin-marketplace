<!-- Generated file — do not edit; regenerated with the SDK. -->

# PurchaseOrder — operations

Accessor: `client.purchaseOrder` · Source: `src/resources/purchase-order.ts` · 9 operations · Request types: namespace `PurchaseOrder`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### purchaseOrderChangeStatusByKey

- **Signature**: `purchaseOrderChangeStatusByKey(request: PurchaseOrder.PurchaseOrderChangeStatusByKeyRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/purchase-orders/{documentId}/status-key/{statusKey}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PurchaseOrder.PurchaseOrderChangeStatusByKeyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `documentId` | `path` | `number` | yes |
| `statusKey` | `path` | `string` | yes |
| `culture` | `path` | `string` | yes |

### purchaseOrderCreate

- **Signature**: `purchaseOrderCreate(request: PurchaseOrder.PurchaseOrderCreateRequest, options?: RequestOptions): ApiPromise<MessageSent, ApiError>`
- **Wire**: `POST /{culture}/purchase-orders/simple-document`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageSent`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PurchaseOrder.PurchaseOrderCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `SimpleDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleDocument` | `simpleDocumentSchema` | `src/models/simple-document.ts` |
| `MessageSent` | `messageSentSchema` | `src/models/message-sent.ts` |

### purchaseOrderCreate2

- **Signature**: `purchaseOrderCreate2(request: PurchaseOrder.PurchaseOrderCreate2Request, options?: RequestOptions): ApiPromise<MessageSent, ApiError>`
- **Wire**: `POST /{culture}/purchase-orders/inline-document`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageSent`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PurchaseOrder.PurchaseOrderCreate2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `InlineDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InlineDocument` | `inlineDocumentSchema` | `src/models/inline-document.ts` |
| `MessageSent` | `messageSentSchema` | `src/models/message-sent.ts` |

### purchaseOrderDelete

- **Signature**: `purchaseOrderDelete(request: PurchaseOrder.PurchaseOrderDeleteRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /{culture}/purchase-orders/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PurchaseOrder.PurchaseOrderDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### purchaseOrderDetails

- **Signature**: `purchaseOrderDetails(request: PurchaseOrder.PurchaseOrderDetailsRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/purchase-orders/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PurchaseOrder.PurchaseOrderDetailsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### purchaseOrderEdit

- **Signature**: `purchaseOrderEdit(request: PurchaseOrder.PurchaseOrderEditRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/purchase-orders/simple-document/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PurchaseOrder.PurchaseOrderEditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `SimpleDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleDocument` | `simpleDocumentSchema` | `src/models/simple-document.ts` |

### purchaseOrderEdit2

- **Signature**: `purchaseOrderEdit2(request: PurchaseOrder.PurchaseOrderEdit2Request, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/purchase-orders/inline-document/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PurchaseOrder.PurchaseOrderEdit2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `InlineDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InlineDocument` | `inlineDocumentSchema` | `src/models/inline-document.ts` |

### purchaseOrderIndex

- **Signature**: `purchaseOrderIndex(request: PurchaseOrder.PurchaseOrderIndexRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/purchase-orders`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PurchaseOrder.PurchaseOrderIndexRequest` (12):

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

### purchaseOrderReceivePayment

- **Signature**: `purchaseOrderReceivePayment(request: PurchaseOrder.PurchaseOrderReceivePaymentRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/purchase-orders/{id}/payments`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PurchaseOrder.PurchaseOrderReceivePaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `PaymentModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentModel` | `paymentModelSchema` | `src/models/payment-model.ts` |

