<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.transactions` · Source: `src/resources/transactions.ts` · 4 operations · Request and error types: namespace `Transactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### transactionsIndex

- **Signature**: `transactionsIndex(request?: Transactions.TransactionsIndexRequest, options?: RequestOptions): ApiPromise<V1TransactionsResponse, Transactions.TransactionsIndexError>`
- **Wire**: `GET /v1/transactions`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TransactionsResponse`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Transactions.TransactionsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.TransactionsIndexRequest` (13):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactedAfter` | `query` | `Date` (date-time) | no |
| `transactedBefore` | `query` | `Date` (date-time) | no |
| `createdAfter` | `query` | `Date` (date-time) | no |
| `createdBefore` | `query` | `Date` (date-time) | no |
| `updatedAfter` | `query` | `Date` (date-time) | no |
| `updatedBefore` | `query` | `Date` (date-time) | no |
| `checkDepositedAfter` | `query` | `Date` (date-time) | no |
| `checkDepositedBefore` | `query` | `Date` (date-time) | no |
| `contacts` | `query` | `string` | no |
| `method` | `query` | `string` | no |
| `scope` | `query` | `ScopeGivebutterApiDocumentationTransactionsApi` | no |
| `sortBy` | `query` | `SortByGivebutterApiDocumentationTransactionsApi` | no |
| `sortByDesc` | `query` | `SortByDescGivebutterApiDocumentationTransactionsApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScopeGivebutterApiDocumentationTransactionsApi` | `scopeGivebutterApiDocumentationTransactionsApiSchema` | `src/models/scope-givebutter-api-documentation-transactions-api.ts` |
| `SortByGivebutterApiDocumentationTransactionsApi` | `sortByGivebutterApiDocumentationTransactionsApiSchema` | `src/models/sort-by-givebutter-api-documentation-transactions-api.ts` |
| `SortByDescGivebutterApiDocumentationTransactionsApi` | `sortByDescGivebutterApiDocumentationTransactionsApiSchema` | `src/models/sort-by-desc-givebutter-api-documentation-transactions-api.ts` |
| `V1TransactionsResponse` | `v1TransactionsResponseSchema` | `src/models/v1-transactions-response.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

### transactionsShow

- **Signature**: `transactionsShow(request: Transactions.TransactionsShowRequest, options?: RequestOptions): ApiPromise<TransactionResource2, Transactions.TransactionsShowError>`
- **Wire**: `GET /v1/transactions/{transaction}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionResource2`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Transactions.TransactionsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.TransactionsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transaction` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionResource2` | `transactionResource2Schema` | `src/models/unions/transaction-resource2.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### transactionsStore

- **Signature**: `transactionsStore(request: Transactions.TransactionsStoreRequest, options?: RequestOptions): ApiPromise<TransactionResource2, Transactions.TransactionsStoreError>`
- **Wire**: `POST /v1/transactions`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionResource2`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Transactions.TransactionsStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"authorizationException1"` [403] `AuthorizationException1` · `"notFoundHttpException1"` [404] `NotFoundHttpException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.TransactionsStoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoreTransactionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreTransactionRequest` | `storeTransactionRequestSchema` | `src/models/store-transaction-request.ts` |
| `TransactionResource2` | `transactionResource2Schema` | `src/models/unions/transaction-resource2.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `NotFoundHttpException1` | `notFoundHttpException1Schema` | `src/models/not-found-http-exception1.ts` |

### transactionsUpdate

- **Signature**: `transactionsUpdate(request: Transactions.TransactionsUpdateRequest, options?: RequestOptions): ApiPromise<TransactionResource2, Transactions.TransactionsUpdateError>`
- **Wire**: `PUT /v1/transactions/{transaction}`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionResource2`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Transactions.TransactionsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.TransactionsUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transaction` | `path` | `string` | yes |
| `body` | `body` | `UpdateTransactionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTransactionRequest` | `updateTransactionRequestSchema` | `src/models/update-transaction-request.ts` |
| `TransactionResource2` | `transactionResource2Schema` | `src/models/unions/transaction-resource2.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

