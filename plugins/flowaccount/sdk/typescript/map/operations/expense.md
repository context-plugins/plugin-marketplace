<!-- Generated file — do not edit; regenerated with the SDK. -->

# Expense — operations

Accessor: `client.expense` · Source: `src/resources/expense.ts` · 13 operations · Request types: namespace `Expense`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### expenseChangeStatusByKey

- **Signature**: `expenseChangeStatusByKey(request: Expense.ExpenseChangeStatusByKeyRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/expenses/{documentId}/status-key/{statusKey}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseChangeStatusByKeyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `documentId` | `path` | `number` | yes |
| `statusKey` | `path` | `string` | yes |
| `culture` | `path` | `string` | yes |

### expenseCreate

- **Signature**: `expenseCreate(request: Expense.ExpenseCreateRequest, options?: RequestOptions): ApiPromise<MessageSent, ApiError>`
- **Wire**: `POST /{culture}/expenses/simple-document`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageSent`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `SimpleDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleDocument` | `simpleDocumentSchema` | `src/models/simple-document.ts` |
| `MessageSent` | `messageSentSchema` | `src/models/message-sent.ts` |

### expenseCreate2

- **Signature**: `expenseCreate2(request: Expense.ExpenseCreate2Request, options?: RequestOptions): ApiPromise<MessageSent, ApiError>`
- **Wire**: `POST /{culture}/expenses/inline-document`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageSent`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseCreate2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `InlineDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InlineDocument` | `inlineDocumentSchema` | `src/models/inline-document.ts` |
| `MessageSent` | `messageSentSchema` | `src/models/message-sent.ts` |

### expenseDelete

- **Signature**: `expenseDelete(request: Expense.ExpenseDeleteRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /{culture}/expenses/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### expenseDetails

- **Signature**: `expenseDetails(request: Expense.ExpenseDetailsRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/expenses/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseDetailsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### expenseEdit

- **Signature**: `expenseEdit(request: Expense.ExpenseEditRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/expenses/simple-document/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseEditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `SimpleDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleDocument` | `simpleDocumentSchema` | `src/models/simple-document.ts` |

### expenseEdit2

- **Signature**: `expenseEdit2(request: Expense.ExpenseEdit2Request, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /{culture}/expenses/inline-document/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseEdit2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `InlineDocument` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InlineDocument` | `inlineDocumentSchema` | `src/models/inline-document.ts` |

### expenseGetBusinessCategories

- **Signature**: `expenseGetBusinessCategories(request: Expense.ExpenseGetBusinessCategoriesRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/expenses/categories/business`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseGetBusinessCategoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |

### expenseGetBusinessCategoriesWithoutAsset

- **Signature**: `expenseGetBusinessCategoriesWithoutAsset(request: Expense.ExpenseGetBusinessCategoriesWithoutAssetRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/expenses/categories/business-without-asset`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseGetBusinessCategoriesWithoutAssetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |

### expenseGetChartOfAccounts

- **Signature**: `expenseGetChartOfAccounts(request: Expense.ExpenseGetChartOfAccountsRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/expenses/categories/accounting`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseGetChartOfAccountsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |

### expenseGetChartOfAccountsWithoutAsset

- **Signature**: `expenseGetChartOfAccountsWithoutAsset(request: Expense.ExpenseGetChartOfAccountsWithoutAssetRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/expenses/categories/accounting-without-asset`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseGetChartOfAccountsWithoutAssetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |

### expenseIndex

- **Signature**: `expenseIndex(request: Expense.ExpenseIndexRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/expenses`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseIndexRequest` (12):

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

### expenseReceivePayment

- **Signature**: `expenseReceivePayment(request: Expense.ExpenseReceivePaymentRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/expenses/{id}/payments`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Expense.ExpenseReceivePaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `PaymentModel` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentModel` | `paymentModelSchema` | `src/models/payment-model.ts` |

