<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.Transactions` · Source: `src/Basiq/Api/Transactions.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTransaction

- **Auth**: `options.ServicesToken`
- **Signature**: `GetTransaction(GetTransactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `TransactionId`
- **Returns**: `UsersTransactionsResponse`
- **Error**: `ApiException<GetTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersTransactions400Error1([NotNullWhen(true)] out UsersTransactions400Error1? value)` [400] · `TryGetUsersTransactions403Error1([NotNullWhen(true)] out UsersTransactions403Error1? value)` [403] · `TryGetUsersTransactions404Error1([NotNullWhen(true)] out UsersTransactions404Error1? value)` [404] · `TryGetUsersTransactions500Error1([NotNullWhen(true)] out UsersTransactions500Error1? value)` [500] · `TryGetUsersTransactions503Error1([NotNullWhen(true)] out UsersTransactions503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTransactionRequest` | `src/Basiq/Requests/Transactions/GetTransactionRequest.cs` |
| `UsersTransactionsResponse` | `src/Basiq/Models/UsersTransactionsResponse.cs` |
| `GetTransactionError` | `src/Basiq/Errors/GetTransactionError.cs` |
| `UsersTransactions400Error1` | `src/Basiq/Models/UsersTransactions400Error1.cs` |
| `UsersTransactions403Error1` | `src/Basiq/Models/UsersTransactions403Error1.cs` |
| `UsersTransactions404Error1` | `src/Basiq/Models/UsersTransactions404Error1.cs` |
| `UsersTransactions500Error1` | `src/Basiq/Models/UsersTransactions500Error1.cs` |
| `UsersTransactions503Error1` | `src/Basiq/Models/UsersTransactions503Error1.cs` |

### GetTransactions

- **Auth**: `options.ServicesToken`
- **Signature**: `GetTransactions(GetTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `filter` ← `Filter`
- **Returns**: `TransactionsContainerObjectConnectTransactionsApi`
- **Error**: `ApiException<GetTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersTransactions400Error1([NotNullWhen(true)] out UsersTransactions400Error1? value)` [400] · `TryGetUsersTransactions403Error1([NotNullWhen(true)] out UsersTransactions403Error1? value)` [403] · `TryGetUsersTransactions404Error1([NotNullWhen(true)] out UsersTransactions404Error1? value)` [404] · `TryGetUsersTransactions500Error1([NotNullWhen(true)] out UsersTransactions500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTransactionsRequest` | `src/Basiq/Requests/Transactions/GetTransactionsRequest.cs` |
| `TransactionsContainerObjectConnectTransactionsApi` | `src/Basiq/Models/TransactionsContainerObjectConnectTransactionsApi.cs` |
| `GetTransactionsError` | `src/Basiq/Errors/GetTransactionsError.cs` |
| `UsersTransactions400Error1` | `src/Basiq/Models/UsersTransactions400Error1.cs` |
| `UsersTransactions403Error1` | `src/Basiq/Models/UsersTransactions403Error1.cs` |
| `UsersTransactions404Error1` | `src/Basiq/Models/UsersTransactions404Error1.cs` |
| `UsersTransactions500Error1` | `src/Basiq/Models/UsersTransactions500Error1.cs` |

