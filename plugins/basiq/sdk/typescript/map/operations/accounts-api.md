<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountsApi — operations

Accessor: `client.accountsApi` · Source: `src/resources/accounts-api.ts` · 2 operations · Request and error types: namespace `AccountsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccount

- **Signature**: `getAccount(request: AccountsApi.GetAccountRequest, options?: RequestOptions): ApiPromise<AccountResponseResource1, AccountsApi.GetAccountError>`
- **Wire**: `GET /users/{userId}/accounts/{accountId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountResponseResource1`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `AccountsApi.GetAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersAccounts400Error1"` [400] `UsersAccounts400Error1` · `"usersAccounts403Error1"` [403] `UsersAccounts403Error1` · `"usersAccounts404Error1"` [404] `UsersAccounts404Error1` · `"usersAccounts500Error1"` [500] `UsersAccounts500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountsApi.GetAccountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `accountId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountResponseResource1` | `accountResponseResource1Schema` | `src/models/account-response-resource1.ts` |
| `UsersAccounts400Error1` | `usersAccounts400Error1Schema` | `src/models/users-accounts400-error1.ts` |
| `UsersAccounts403Error1` | `usersAccounts403Error1Schema` | `src/models/users-accounts403-error1.ts` |
| `UsersAccounts404Error1` | `usersAccounts404Error1Schema` | `src/models/users-accounts404-error1.ts` |
| `UsersAccounts500Error1` | `usersAccounts500Error1Schema` | `src/models/users-accounts500-error1.ts` |

### getAccounts

- **Signature**: `getAccounts(request: AccountsApi.GetAccountsRequest, options?: RequestOptions): ApiPromise<UsersAccountsResponse, AccountsApi.GetAccountsError>`
- **Wire**: `GET /users/{userId}/accounts`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersAccountsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `AccountsApi.GetAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersAccounts400Error1"` [400] `UsersAccounts400Error1` · `"usersAccounts403Error1"` [403] `UsersAccounts403Error1` · `"usersAccounts404Error1"` [404] `UsersAccounts404Error1` · `"usersAccounts500Error1"` [500] `UsersAccounts500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountsApi.GetAccountsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersAccountsResponse` | `usersAccountsResponseSchema` | `src/models/users-accounts-response.ts` |
| `UsersAccounts400Error1` | `usersAccounts400Error1Schema` | `src/models/users-accounts400-error1.ts` |
| `UsersAccounts403Error1` | `usersAccounts403Error1Schema` | `src/models/users-accounts403-error1.ts` |
| `UsersAccounts404Error1` | `usersAccounts404Error1Schema` | `src/models/users-accounts404-error1.ts` |
| `UsersAccounts500Error1` | `usersAccounts500Error1Schema` | `src/models/users-accounts500-error1.ts` |

