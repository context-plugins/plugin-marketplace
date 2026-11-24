<!-- Generated file — do not edit; regenerated with the SDK. -->

# XTransactions — operations

Accessor: `client.x_transactions` · Source: `curlec/apis/x_transactions.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.x_transactions.fetch_transaction

- **Route**: `GET /transactions/{transaction_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_transaction(transaction_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction_id`
- **Params**: `transaction_id` — path
- **Returns (parsed)**: `XTransaction`
- **Returns (raw)**: `ApiResult[XTransaction, FetchTransactionErrorBody]`
- **Error**: `FetchTransactionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XTransaction` | `curlec/models/x_transaction.py` |
| `FetchTransactionErrorBody` | `curlec/errors/fetch_transaction_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_transactions.list_transactions

- **Route**: `GET /transactions`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_transactions(account_number: str, *, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_number`
- **Params**: `account_number` — query · `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `TransactionsResponse`
- **Returns (raw)**: `ApiResult[TransactionsResponse, ListTransactionsErrorBody]`
- **Error**: `ListTransactionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransactionsResponse` | `curlec/models/transactions_response.py` |
| `ListTransactionsErrorBody` | `curlec/errors/list_transactions_error.py` |
| `Error` | `curlec/models/error.py` |

