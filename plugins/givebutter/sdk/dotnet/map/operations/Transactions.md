<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.Transactions` · Source: `src/Givebutter/Api/Transactions.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TransactionsIndex

- **Auth**: `options.Http`
- **Signature**: `TransactionsIndex(TransactionsIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `transactedAfter` ← `TransactedAfter`, `transactedBefore` ← `TransactedBefore`, `createdAfter` ← `CreatedAfter`, `createdBefore` ← `CreatedBefore`, `updatedAfter` ← `UpdatedAfter`, `updatedBefore` ← `UpdatedBefore`, `checkDepositedAfter` ← `CheckDepositedAfter`, `checkDepositedBefore` ← `CheckDepositedBefore`, `contacts` ← `Contacts`, `method` ← `Method`, `scope` ← `Scope`, `sortBy` ← `SortBy`, `sortByDesc` ← `SortByDesc`
- **Returns**: `V1TransactionsResponse`
- **Error**: `ApiException<TransactionsIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionsIndexRequest` | `src/Givebutter/Requests/Transactions/TransactionsIndexRequest.cs` |
| `ScopeGivebutterApiDocumentationTransactionsApi` | `src/Givebutter/Models/Enums/ScopeGivebutterApiDocumentationTransactionsApi.cs` |
| `SortByGivebutterApiDocumentationTransactionsApi` | `src/Givebutter/Models/Enums/SortByGivebutterApiDocumentationTransactionsApi.cs` |
| `SortByDescGivebutterApiDocumentationTransactionsApi` | `src/Givebutter/Models/Enums/SortByDescGivebutterApiDocumentationTransactionsApi.cs` |
| `V1TransactionsResponse` | `src/Givebutter/Models/V1TransactionsResponse.cs` |
| `TransactionsIndexError` | `src/Givebutter/Errors/TransactionsIndexError.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### TransactionsShow

- **Auth**: `options.Http`
- **Signature**: `TransactionsShow(TransactionsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Transaction`
- **Returns**: `TransactionResource2`
- **Error**: `ApiException<TransactionsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionsShowRequest` | `src/Givebutter/Requests/Transactions/TransactionsShowRequest.cs` |
| `TransactionResource2` | `src/Givebutter/Models/AnyOf/TransactionResource2.cs` |
| `TransactionsShowError` | `src/Givebutter/Errors/TransactionsShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### TransactionsStore

- **Auth**: `options.Http`
- **Signature**: `TransactionsStore(TransactionsStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TransactionResource2`
- **Error**: `ApiException<TransactionsStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetNotFoundHttpException1([NotNullWhen(true)] out NotFoundHttpException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionsStoreRequest` | `src/Givebutter/Requests/Transactions/TransactionsStoreRequest.cs` |
| `StoreTransactionRequest` | `src/Givebutter/Models/StoreTransactionRequest.cs` |
| `TransactionResource2` | `src/Givebutter/Models/AnyOf/TransactionResource2.cs` |
| `TransactionsStoreError` | `src/Givebutter/Errors/TransactionsStoreError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `NotFoundHttpException1` | `src/Givebutter/Models/NotFoundHttpException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### TransactionsUpdate

- **Auth**: `options.Http`
- **Signature**: `TransactionsUpdate(TransactionsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Transaction`
- **Returns**: `TransactionResource2`
- **Error**: `ApiException<TransactionsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionsUpdateRequest` | `src/Givebutter/Requests/Transactions/TransactionsUpdateRequest.cs` |
| `UpdateTransactionRequest` | `src/Givebutter/Models/UpdateTransactionRequest.cs` |
| `TransactionResource2` | `src/Givebutter/Models/AnyOf/TransactionResource2.cs` |
| `TransactionsUpdateError` | `src/Givebutter/Errors/TransactionsUpdateError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

