<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `src/resources/accounts.ts` · 3 operations · Request and error types: namespace `Accounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccount

- **Signature**: `getAccount(request: Accounts.GetAccountRequest, options?: RequestOptions): ApiPromise<Account, Accounts.GetAccountError>`
- **Wire**: `GET /companies({company_id})/accounts({account_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Account`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Accounts.GetAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.GetAccountRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Account` | `accountSchema` | `src/models/account.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listAccounts

- **Signature**: `listAccounts(request: Accounts.ListAccountsRequest, options?: RequestOptions): ApiPromise<CompaniesApiAccountsResponse, Accounts.ListAccountsError>`
- **Wire**: `GET /companies({company_id})/accounts`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiAccountsResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Accounts.ListAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.ListAccountsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiAccountsResponse` | `companiesApiAccountsResponseSchema` | `src/models/companies-api-accounts-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listGeneralLedgerEntries

- **Signature**: `listGeneralLedgerEntries(request: Accounts.ListGeneralLedgerEntriesRequest, options?: RequestOptions): ApiPromise<CompaniesApiGeneralLedgerEntriesResponse, Accounts.ListGeneralLedgerEntriesError>`
- **Wire**: `GET /companies({company_id})/generalLedgerEntries`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiGeneralLedgerEntriesResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Accounts.ListGeneralLedgerEntriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.ListGeneralLedgerEntriesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiGeneralLedgerEntriesResponse` | `companiesApiGeneralLedgerEntriesResponseSchema` | `src/models/companies-api-general-ledger-entries-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

