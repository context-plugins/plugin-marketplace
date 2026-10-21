<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountsApi — operations

Accessor: `client.accountsApi` · Source: `src/resources/accounts-api.ts` · 4 operations · Request and error types: namespace `AccountsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBusinessAccount

- **Signature**: `getBusinessAccount(request: AccountsApi.GetBusinessAccountRequest, options?: RequestOptions): ApiPromise<undefined, AccountsApi.GetBusinessAccountError>`
- **Wire**: `GET /v2/business-accounts/accounts/{businessAccountId}`
- **Auth**: `oAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `AccountsApi.GetBusinessAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountsApi.GetBusinessAccountRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `businessAccountId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### getBusinessAccountTransaction

- **Signature**: `getBusinessAccountTransaction(request: AccountsApi.GetBusinessAccountTransactionRequest, options?: RequestOptions): ApiPromise<undefined, AccountsApi.GetBusinessAccountTransactionError>`
- **Wire**: `GET /v2/business-accounts/accounts/{businessAccountId}/transactions/{transactionId}`
- **Auth**: `oAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `AccountsApi.GetBusinessAccountTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountsApi.GetBusinessAccountTransactionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `businessAccountId` | `path` | — | `string` | yes |
| `transactionId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listBusinessAccountTransactions

- **Signature**: `listBusinessAccountTransactions(request: AccountsApi.ListBusinessAccountTransactionsRequest, options?: RequestOptions): ApiPromise<undefined, AccountsApi.ListBusinessAccountTransactionsError>`
- **Wire**: `GET /v2/business-accounts/accounts/{businessAccountId}/transactions`
- **Auth**: `oAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `AccountsApi.ListBusinessAccountTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountsApi.ListBusinessAccountTransactionsRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `businessAccountId` | `path` | — | `string` | yes |
| `creditDebitIndicator` | `query` | — | `CreditDebitIndicator` | no |
| `processedAfter` | `query` | — | `Date` (date-time) | no |
| `processedBefore` | `query` | — | `Date` (date-time) | no |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditDebitIndicator` | `creditDebitIndicatorSchema` | `src/models/credit-debit-indicator.ts` |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### listBusinessAccounts

- **Signature**: `listBusinessAccounts(request: AccountsApi.ListBusinessAccountsRequest, options?: RequestOptions): ApiPromise<undefined, AccountsApi.ListBusinessAccountsError>`
- **Wire**: `GET /v2/business-accounts/accounts`
- **Auth**: `oAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `AccountsApi.ListBusinessAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountsApi.ListBusinessAccountsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `iban` | `query` | — | `string` | no |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

