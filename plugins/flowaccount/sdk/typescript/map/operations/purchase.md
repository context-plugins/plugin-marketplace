<!-- Generated file — do not edit; regenerated with the SDK. -->

# Purchase — operations

Accessor: `client.purchase` · Source: `src/resources/purchase.ts` · 9 operations · Request types: namespace `Purchase`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### purchaseChangeStatusByKey

- **Signature**: `purchaseChangeStatusByKey(request: Purchase.PurchaseChangeStatusByKeyRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/purchases/{documentId}/status-key/{statusKey}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Purchase.PurchaseChangeStatusByKeyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `documentId` | `path` | `number` | yes |
| `statusKey` | `path` | `string` | yes |
| `culture` | `path` | `string` | yes |

### purchaseCreate

- **Signature**: `purchaseCreate(request: Purchase.PurchaseCreateRequest, options?: RequestOptions): ApiPromise<MessageSent, ApiError>`
- **Wire**: `POST /{culture}/purchases/simple-document`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageSent`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Purchase.PurchaseCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `SimpleDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleDocument` | `simpleDocumentSchema` | `src/models/simple-document.ts` |
| `MessageSent` | `messageSentSchema` | `src/models/message-sent.ts` |

### purchaseCreate2

- **Signature**: `purchaseCreate2(request: Purchase.PurchaseCreate2Request, options?: RequestOptions): ApiPromise<MessageSent, ApiError>`
- **Wire**: `POST /{culture}/purchases/inline-document`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageSent`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Purchase.PurchaseCreate2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `InlineDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InlineDocument` | `inlineDocumentSchema` | `src/models/inline-document.ts` |
| `MessageSent` | `messageSentSchema` | `src/models/message-sent.ts` |

### purchaseDelete

- **Signature**: `purchaseDelete(request: Purchase.PurchaseDeleteRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /{culture}/purchases/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Purchase.PurchaseDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### purchaseDetails

- **Signature**: `purchaseDetails(request: Purchase.PurchaseDetailsRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/purchases/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Purchase.PurchaseDetailsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### purchaseEdit

- **Signature**: `purchaseEdit(request: Purchase.PurchaseEditRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/purchases/simple-document/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Purchase.PurchaseEditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `SimpleDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleDocument` | `simpleDocumentSchema` | `src/models/simple-document.ts` |

### purchaseEdit2

- **Signature**: `purchaseEdit2(request: Purchase.PurchaseEdit2Request, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/purchases/inline-document/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Purchase.PurchaseEdit2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `InlineDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InlineDocument` | `inlineDocumentSchema` | `src/models/inline-document.ts` |

### purchaseIndex

- **Signature**: `purchaseIndex(request: Purchase.PurchaseIndexRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/purchases`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Purchase.PurchaseIndexRequest` (12):

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

### purchaseReceivePayment

- **Signature**: `purchaseReceivePayment(request: Purchase.PurchaseReceivePaymentRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/purchases/{id}/payments`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Purchase.PurchaseReceivePaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `PaymentModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentModel` | `paymentModelSchema` | `src/models/payment-model.ts` |

