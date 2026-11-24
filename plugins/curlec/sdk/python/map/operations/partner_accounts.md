<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerAccounts — operations

Accessor: `client.partner_accounts` · Source: `curlec/apis/partner_accounts.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.partner_accounts.delete_partner_account

- **Route**: `DELETE /v2/accounts/{account_id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def delete_partner_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path
- **Returns (parsed)**: `V2AccountsResponse`
- **Returns (raw)**: `ApiResult[V2AccountsResponse, DeletePartnerAccountErrorBody]`
- **Error**: `DeletePartnerAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsResponse` | `curlec/models/v2_accounts_response.py` |
| `DeletePartnerAccountErrorBody` | `curlec/errors/delete_partner_account_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_accounts.fetch_linked_account2

- **Route**: `GET /v2/accounts/{account_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_linked_account2(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path
- **Returns (parsed)**: `LinkedAccount`
- **Returns (raw)**: `ApiResult[LinkedAccount, FetchLinkedAccount2ErrorBody]`
- **Error**: `FetchLinkedAccount2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LinkedAccount` | `curlec/models/linked_account.py` |
| `FetchLinkedAccount2ErrorBody` | `curlec/errors/fetch_linked_account2_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_accounts.update_linked_account2

- **Route**: `PATCH /v2/accounts/{account_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_linked_account2(account_id: str, body: V2AccountsRequestRazorpayPartnerAccountsApi | V2AccountsRequestRazorpayPartnerAccountsApiDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `body`
- **Params**: `account_id` — path · `body` — JSON body
- **Returns (parsed)**: `LinkedAccount`
- **Returns (raw)**: `ApiResult[LinkedAccount, UpdateLinkedAccount2ErrorBody]`
- **Error**: `UpdateLinkedAccount2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsRequestRazorpayPartnerAccountsApi` | `curlec/models/v2_accounts_request_razorpay_partner_accounts_api.py` |
| `V2AccountsRequestRazorpayPartnerAccountsApiDict` | `curlec/models/v2_accounts_request_razorpay_partner_accounts_api.py` |
| `LinkedAccount` | `curlec/models/linked_account.py` |
| `UpdateLinkedAccount2ErrorBody` | `curlec/errors/update_linked_account2_error.py` |
| `Error` | `curlec/models/error.py` |

