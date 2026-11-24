<!-- Generated file — do not edit; regenerated with the SDK. -->

# XFundAccounts — operations

Accessor: `client.x_fund_accounts` · Source: `curlec/apis/x_fund_accounts.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.x_fund_accounts.activate_deactivate_fund_account

- **Route**: `PATCH /fund_accounts/{fund_account_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def activate_deactivate_fund_account(fund_account_id: str, body: FundAccountsRequest1 | FundAccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `fund_account_id`, `body`
- **Params**: `fund_account_id` — path · `body` — JSON body
- **Returns (parsed)**: `FundAccountRazorpayXFundAccountsApi`
- **Returns (raw)**: `ApiResult[FundAccountRazorpayXFundAccountsApi, ActivateDeactivateFundAccountErrorBody]`
- **Error**: `ActivateDeactivateFundAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FundAccountsRequest1` | `curlec/models/fund_accounts_request1.py` |
| `FundAccountsRequest1Dict` | `curlec/models/fund_accounts_request1.py` |
| `FundAccountRazorpayXFundAccountsApi` | `curlec/models/fund_account_razorpay_x_fund_accounts_api.py` |
| `ActivateDeactivateFundAccountErrorBody` | `curlec/errors/activate_deactivate_fund_account_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_fund_accounts.create_fund_account

- **Route**: `POST /fund_accounts`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_fund_account(body: FundAccountsRequest | FundAccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `FundAccountRazorpayXFundAccountsApi`
- **Returns (raw)**: `ApiResult[FundAccountRazorpayXFundAccountsApi, CreateFundAccountErrorBody]`
- **Error**: `CreateFundAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FundAccountsRequest` | `curlec/models/fund_accounts_request.py` |
| `FundAccountsRequestDict` | `curlec/models/fund_accounts_request.py` |
| `FundAccountRazorpayXFundAccountsApi` | `curlec/models/fund_account_razorpay_x_fund_accounts_api.py` |
| `CreateFundAccountErrorBody` | `curlec/errors/create_fund_account_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_fund_accounts.fetch_fund_account

- **Route**: `GET /fund_accounts/{fund_account_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_fund_account(fund_account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `fund_account_id`
- **Params**: `fund_account_id` — path
- **Returns (parsed)**: `FundAccountRazorpayXFundAccountsApi`
- **Returns (raw)**: `ApiResult[FundAccountRazorpayXFundAccountsApi, FetchFundAccountErrorBody]`
- **Error**: `FetchFundAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FundAccountRazorpayXFundAccountsApi` | `curlec/models/fund_account_razorpay_x_fund_accounts_api.py` |
| `FetchFundAccountErrorBody` | `curlec/errors/fetch_fund_account_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_fund_accounts.list_fund_accounts

- **Route**: `GET /fund_accounts`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_fund_accounts(*, contact_id: str | None = None, account_type: str | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `contact_id` — query · `account_type` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `FundAccountsResponse`
- **Returns (raw)**: `ApiResult[FundAccountsResponse, ListFundAccountsErrorBody]`
- **Error**: `ListFundAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FundAccountsResponse` | `curlec/models/fund_accounts_response.py` |
| `ListFundAccountsErrorBody` | `curlec/errors/list_fund_accounts_error.py` |
| `Error` | `curlec/models/error.py` |

