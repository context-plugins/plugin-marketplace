<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `contentstack/apis/accounts.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.accounts.get_all_accounts

- **Route**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/accounts`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_automate_management_accounts_api`
- **Signature**: `def get_all_accounts(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`
- **Params**: `organization_uid` — path · `project_uid` — path
- **Returns (parsed)**: `AccountList`
- **Returns (raw)**: `ApiResult[AccountList, GetAllAccountsErrorBody]`
- **Error**: `GetAllAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountList` | `contentstack/models/account_list.py` |
| `GetAllAccountsErrorBody` | `contentstack/errors/get_all_accounts_error.py` |
| `Error` | `contentstack/models/error.py` |

