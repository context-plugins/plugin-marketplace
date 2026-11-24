<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.transactions` · Source: `src/resources/transactions.ts` · 2 operations · Request and error types: namespace `Transactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTransaction

- **Signature**: `getTransaction(request: Transactions.GetTransactionRequest, options?: RequestOptions): ApiPromise<UsersTransactionsResponse, Transactions.GetTransactionError>`
- **Wire**: `GET /users/{userId}/transactions/{transactionId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersTransactionsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Transactions.GetTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersTransactions400Error1"` [400] `UsersTransactions400Error1` · `"usersTransactions403Error1"` [403] `UsersTransactions403Error1` · `"usersTransactions404Error1"` [404] `UsersTransactions404Error1` · `"usersTransactions500Error1"` [500] `UsersTransactions500Error1` · `"usersTransactions503Error1"` [503] `UsersTransactions503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.GetTransactionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `transactionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersTransactionsResponse` | `usersTransactionsResponseSchema` | `src/models/users-transactions-response.ts` |
| `UsersTransactions400Error1` | `usersTransactions400Error1Schema` | `src/models/users-transactions400-error1.ts` |
| `UsersTransactions403Error1` | `usersTransactions403Error1Schema` | `src/models/users-transactions403-error1.ts` |
| `UsersTransactions404Error1` | `usersTransactions404Error1Schema` | `src/models/users-transactions404-error1.ts` |
| `UsersTransactions500Error1` | `usersTransactions500Error1Schema` | `src/models/users-transactions500-error1.ts` |
| `UsersTransactions503Error1` | `usersTransactions503Error1Schema` | `src/models/users-transactions503-error1.ts` |

### getTransactions

- **Signature**: `getTransactions(request: Transactions.GetTransactionsRequest, options?: RequestOptions): ApiPromise<TransactionsContainerObjectConnectTransactionsApi, Transactions.GetTransactionsError>`
- **Wire**: `GET /users/{userId}/transactions`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionsContainerObjectConnectTransactionsApi`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Transactions.GetTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersTransactions400Error1"` [400] `UsersTransactions400Error1` · `"usersTransactions403Error1"` [403] `UsersTransactions403Error1` · `"usersTransactions404Error1"` [404] `UsersTransactions404Error1` · `"usersTransactions500Error1"` [500] `UsersTransactions500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.GetTransactionsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `string` | yes | — |
| `limit` | `query` | `number` | no | `500` |
| `filter` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsContainerObjectConnectTransactionsApi` | `transactionsContainerObjectConnectTransactionsApiSchema` | `src/models/transactions-container-object-connect-transactions-api.ts` |
| `UsersTransactions400Error1` | `usersTransactions400Error1Schema` | `src/models/users-transactions400-error1.ts` |
| `UsersTransactions403Error1` | `usersTransactions403Error1Schema` | `src/models/users-transactions403-error1.ts` |
| `UsersTransactions404Error1` | `usersTransactions404Error1Schema` | `src/models/users-transactions404-error1.ts` |
| `UsersTransactions500Error1` | `usersTransactions500Error1Schema` | `src/models/users-transactions500-error1.ts` |

