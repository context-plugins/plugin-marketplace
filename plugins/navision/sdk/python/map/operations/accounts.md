<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `microsoft_dynamics_nav/apis/accounts.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.accounts.get_account

- **Route**: `GET /companies({company_id})/accounts({account_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_account(company_id: UUID, account_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `account_id`
- **Params**: `company_id` — path · `account_id` — path
- **Returns (parsed)**: `Account`
- **Returns (raw)**: `ApiResult[Account, GetAccountErrorBody]`
- **Error**: `GetAccountErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Account` | `microsoft_dynamics_nav/models/account.py` |
| `GetAccountErrorBody` | `microsoft_dynamics_nav/errors/get_account_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.accounts.list_accounts

- **Route**: `GET /companies({company_id})/accounts`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_accounts(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `orderby` — query `$orderby` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiAccountsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiAccountsResponse, ListAccountsErrorBody]`
- **Error**: `ListAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiAccountsResponse` | `microsoft_dynamics_nav/models/companies_api_accounts_response.py` |
| `ListAccountsErrorBody` | `microsoft_dynamics_nav/errors/list_accounts_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.accounts.list_general_ledger_entries

- **Route**: `GET /companies({company_id})/generalLedgerEntries`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_general_ledger_entries(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `orderby` — query `$orderby` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiGeneralLedgerEntriesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiGeneralLedgerEntriesResponse, ListGeneralLedgerEntriesErrorBody]`
- **Error**: `ListGeneralLedgerEntriesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiGeneralLedgerEntriesResponse` | `microsoft_dynamics_nav/models/companies_api_general_ledger_entries_response.py` |
| `ListGeneralLedgerEntriesErrorBody` | `microsoft_dynamics_nav/errors/list_general_ledger_entries_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

