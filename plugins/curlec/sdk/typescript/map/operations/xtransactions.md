<!-- Generated file — do not edit; regenerated with the SDK. -->

# XTransactions — operations

Accessor: `client.xTransactions` · Source: `src/resources/xtransactions.ts` · 2 operations · Request and error types: namespace `XTransactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchTransaction

- **Signature**: `fetchTransaction(request: XTransactions.FetchTransactionRequest, options?: RequestOptions): ApiPromise<XTransaction, XTransactions.FetchTransactionError>`
- **Wire**: `GET /transactions/{transaction_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `XTransaction`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XTransactions.FetchTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XTransactions.FetchTransactionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XTransaction` | `xTransactionSchema` | `src/models/xtransaction.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listTransactions

- **Signature**: `listTransactions(request: XTransactions.ListTransactionsRequest, options?: RequestOptions): ApiPromise<TransactionsResponse, XTransactions.ListTransactionsError>`
- **Wire**: `GET /transactions`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XTransactions.ListTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XTransactions.ListTransactionsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountNumber` | `query` | `account_number` | `string` | yes | — |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsResponse` | `transactionsResponseSchema` | `src/models/transactions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

