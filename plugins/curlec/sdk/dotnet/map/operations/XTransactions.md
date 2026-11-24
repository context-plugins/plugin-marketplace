<!-- Generated file — do not edit; regenerated with the SDK. -->

# XTransactions — operations

Accessor: `client.XTransactions` · Source: `src/Curlec/Api/XTransactions.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchTransaction

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchTransaction(FetchTransactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`
- **Returns**: `XTransaction`
- **Error**: `ApiException<FetchTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchTransactionRequest` | `src/Curlec/Requests/XTransactions/FetchTransactionRequest.cs` |
| `XTransaction` | `src/Curlec/Models/XTransaction.cs` |
| `FetchTransactionError` | `src/Curlec/Errors/FetchTransactionError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListTransactions

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListTransactions(ListTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AccountNumber`
- **Query params (wire ← C#)**: `account_number` ← `AccountNumber`, `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `TransactionsResponse`
- **Error**: `ApiException<ListTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransactionsRequest` | `src/Curlec/Requests/XTransactions/ListTransactionsRequest.cs` |
| `TransactionsResponse` | `src/Curlec/Models/TransactionsResponse.cs` |
| `ListTransactionsError` | `src/Curlec/Errors/ListTransactionsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

