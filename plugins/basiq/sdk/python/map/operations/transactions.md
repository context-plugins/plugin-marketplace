<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.transactions` · Source: `basiq/apis/transactions.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.transactions.get_transaction

- **Route**: `GET /users/{userId}/transactions/{transactionId}`
- **Auth**: `services_token`
- **Signature**: `def get_transaction(user_id: str, transaction_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `transaction_id`
- **Params**: `user_id` — path `userId` · `transaction_id` — path `transactionId`
- **Returns (parsed)**: `UsersTransactionsResponse`
- **Returns (raw)**: `ApiResult[UsersTransactionsResponse, GetTransactionErrorBody]`
- **Error**: `GetTransactionErrorBody` — **Case A (typed)**
- **Error arms**: `UsersTransactions400Error1` [400] · `UsersTransactions403Error1` [403] · `UsersTransactions404Error1` [404] · `UsersTransactions500Error1` [500] · `UsersTransactions503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersTransactionsResponse` | `basiq/models/users_transactions_response.py` |
| `GetTransactionErrorBody` | `basiq/errors/get_transaction_error.py` |
| `UsersTransactions400Error1` | `basiq/models/users_transactions400_error1.py` |
| `UsersTransactions403Error1` | `basiq/models/users_transactions403_error1.py` |
| `UsersTransactions404Error1` | `basiq/models/users_transactions404_error1.py` |
| `UsersTransactions500Error1` | `basiq/models/users_transactions500_error1.py` |
| `UsersTransactions503Error1` | `basiq/models/users_transactions503_error1.py` |

### client.transactions.get_transactions

- **Route**: `GET /users/{userId}/transactions`
- **Auth**: `services_token`
- **Signature**: `def get_transactions(user_id: str, *, limit: int | None = 500, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `limit` — query · `filter_` — query `filter`
- **Returns (parsed)**: `TransactionsContainerObjectConnectTransactionsApi`
- **Returns (raw)**: `ApiResult[TransactionsContainerObjectConnectTransactionsApi, GetTransactionsErrorBody]`
- **Error**: `GetTransactionsErrorBody` — **Case A (typed)**
- **Error arms**: `UsersTransactions400Error1` [400] · `UsersTransactions403Error1` [403] · `UsersTransactions404Error1` [404] · `UsersTransactions500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransactionsContainerObjectConnectTransactionsApi` | `basiq/models/transactions_container_object_connect_transactions_api.py` |
| `GetTransactionsErrorBody` | `basiq/errors/get_transactions_error.py` |
| `UsersTransactions400Error1` | `basiq/models/users_transactions400_error1.py` |
| `UsersTransactions403Error1` | `basiq/models/users_transactions403_error1.py` |
| `UsersTransactions404Error1` | `basiq/models/users_transactions404_error1.py` |
| `UsersTransactions500Error1` | `basiq/models/users_transactions500_error1.py` |

