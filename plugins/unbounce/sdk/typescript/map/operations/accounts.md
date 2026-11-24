<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `src/resources/accounts.ts` · 4 operations · Request and error types: namespace `Accounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `unbounce`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccount

- **Signature**: `getAccount(request: Accounts.GetAccountRequest, options?: RequestOptions): ApiPromise<Account, Accounts.GetAccountError>`
- **Wire**: `GET /accounts/{account_id}`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Account`
- **Error**: `UnbounceError` with `kind: "api"`, an instance of `Accounts.GetAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.GetAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Account` | `accountSchema` | `src/models/account.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getSubAccount

- **Signature**: `getSubAccount(request: Accounts.GetSubAccountRequest, options?: RequestOptions): ApiPromise<SubAccount, ApiError>`
- **Wire**: `GET /sub_accounts/{sub_account_id}`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubAccount`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Accounts.GetSubAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subAccountId` | `path` | `sub_account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubAccount` | `subAccountSchema` | `src/models/sub-account.ts` |

### listAccounts

- **Signature**: `listAccounts(options?: RequestOptions): ApiPromise<AccountCollection, Accounts.ListAccountsError>`
- **Wire**: `GET /accounts`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountCollection`
- **Error**: `UnbounceError` with `kind: "api"`, an instance of `Accounts.ListAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountCollection` | `accountCollectionSchema` | `src/models/account-collection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listSubAccountsForAccount

- **Signature**: `listSubAccountsForAccount(request: Accounts.ListSubAccountsForAccountRequest, options?: RequestOptions): ApiPromise<AccountsSubAccountsResponse, ApiError>`
- **Wire**: `GET /accounts/{account_id}/sub_accounts`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountsSubAccountsResponse`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Accounts.ListSubAccountsForAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsSubAccountsResponse` | `accountsSubAccountsResponseSchema` | `src/models/accounts-sub-accounts-response.ts` |

