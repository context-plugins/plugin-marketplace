<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.transactions` · Source: `givebutter/apis/transactions.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.transactions.transactions_index

- **Route**: `GET /v1/transactions`
- **Auth**: `http`
- **Signature**: `def transactions_index(*, transacted_after: RFC3339DateTime | None = None, transacted_before: RFC3339DateTime | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, updated_after: RFC3339DateTime | None = None, updated_before: RFC3339DateTime | None = None, check_deposited_after: RFC3339DateTime | None = None, check_deposited_before: RFC3339DateTime | None = None, contacts: str | None = None, method: str | None = None, scope: ScopeGivebutterApiDocumentationTransactionsApiOrStr | None = None, sort_by: SortByGivebutterApiDocumentationTransactionsApiOrStr | None = None, sort_by_desc: SortByDescGivebutterApiDocumentationTransactionsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `transacted_after` — query `transactedAfter` · `transacted_before` — query `transactedBefore` · `created_after` — query `createdAfter` · `created_before` — query `createdBefore` · `updated_after` — query `updatedAfter` · `updated_before` — query `updatedBefore` · `check_deposited_after` — query `checkDepositedAfter` · `check_deposited_before` — query `checkDepositedBefore` · `contacts` — query · `method` — query · `scope` — query · `sort_by` — query `sortBy` · `sort_by_desc` — query `sortByDesc`
- **Returns (parsed)**: `V1TransactionsResponse`
- **Returns (raw)**: `ApiResult[V1TransactionsResponse, TransactionsIndexErrorBody]`
- **Error**: `TransactionsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScopeGivebutterApiDocumentationTransactionsApiOrStr` | `givebutter/models/enums/scope_givebutter_api_documentation_transactions_api.py` |
| `SortByGivebutterApiDocumentationTransactionsApiOrStr` | `givebutter/models/enums/sort_by_givebutter_api_documentation_transactions_api.py` |
| `SortByDescGivebutterApiDocumentationTransactionsApiOrStr` | `givebutter/models/enums/sort_by_desc_givebutter_api_documentation_transactions_api.py` |
| `V1TransactionsResponse` | `givebutter/models/v1_transactions_response.py` |
| `TransactionsIndexErrorBody` | `givebutter/errors/transactions_index_error.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.transactions.transactions_show

- **Route**: `GET /v1/transactions/{transaction}`
- **Auth**: `http`
- **Signature**: `def transactions_show(transaction: str | None, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction`
- **Params**: `transaction` — path
- **Returns (parsed)**: `TransactionResource2`
- **Returns (raw)**: `ApiResult[TransactionResource2, TransactionsShowErrorBody]`
- **Error**: `TransactionsShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransactionResource2` | `givebutter/models/unions/transaction_resource2.py` |
| `TransactionsShowErrorBody` | `givebutter/errors/transactions_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.transactions.transactions_store

- **Route**: `POST /v1/transactions`
- **Auth**: `http`
- **Signature**: `def transactions_store(body: StoreTransactionRequest | StoreTransactionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TransactionResource2`
- **Returns (raw)**: `ApiResult[TransactionResource2, TransactionsStoreErrorBody]`
- **Error**: `TransactionsStoreErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `NotFoundHttpException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoreTransactionRequest` | `givebutter/models/store_transaction_request.py` |
| `StoreTransactionRequestDict` | `givebutter/models/store_transaction_request.py` |
| `TransactionResource2` | `givebutter/models/unions/transaction_resource2.py` |
| `TransactionsStoreErrorBody` | `givebutter/errors/transactions_store_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `NotFoundHttpException1` | `givebutter/models/not_found_http_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.transactions.transactions_update

- **Route**: `PUT /v1/transactions/{transaction}`
- **Auth**: `http`
- **Signature**: `def transactions_update(transaction: str | None, *, body: UpdateTransactionRequest | UpdateTransactionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction`
- **Params**: `transaction` — path · `body` — JSON body
- **Returns (parsed)**: `TransactionResource2`
- **Returns (raw)**: `ApiResult[TransactionResource2, TransactionsUpdateErrorBody]`
- **Error**: `TransactionsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateTransactionRequest` | `givebutter/models/update_transaction_request.py` |
| `UpdateTransactionRequestDict` | `givebutter/models/update_transaction_request.py` |
| `TransactionResource2` | `givebutter/models/unions/transaction_resource2.py` |
| `TransactionsUpdateErrorBody` | `givebutter/errors/transactions_update_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

