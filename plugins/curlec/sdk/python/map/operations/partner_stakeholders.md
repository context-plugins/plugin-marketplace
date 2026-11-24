<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerStakeholders — operations

Accessor: `client.partner_stakeholders` · Source: `curlec/apis/partner_stakeholders.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.partner_stakeholders.create_stakeholder2

- **Route**: `POST /v2/accounts/{account_id}/stakeholders`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_stakeholder2(account_id: str, body: V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi | V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `body`
- **Params**: `account_id` — path · `body` — JSON body
- **Returns (parsed)**: `StakeholderRazorpayPartnerStakeholdersApi`
- **Returns (raw)**: `ApiResult[StakeholderRazorpayPartnerStakeholdersApi, CreateStakeholder2ErrorBody]`
- **Error**: `CreateStakeholder2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi` | `curlec/models/v2_accounts_stakeholders_request_razorpay_partner_stakeholders_api.py` |
| `V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict` | `curlec/models/v2_accounts_stakeholders_request_razorpay_partner_stakeholders_api.py` |
| `StakeholderRazorpayPartnerStakeholdersApi` | `curlec/models/stakeholder_razorpay_partner_stakeholders_api.py` |
| `CreateStakeholder2ErrorBody` | `curlec/errors/create_stakeholder2_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_stakeholders.fetch_all_stakeholders

- **Route**: `GET /v2/accounts/{account_id}/stakeholders`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def fetch_all_stakeholders(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path
- **Returns (parsed)**: `V2AccountsStakeholdersResponse`
- **Returns (raw)**: `ApiResult[V2AccountsStakeholdersResponse, FetchAllStakeholdersErrorBody]`
- **Error**: `FetchAllStakeholdersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsStakeholdersResponse` | `curlec/models/v2_accounts_stakeholders_response.py` |
| `FetchAllStakeholdersErrorBody` | `curlec/errors/fetch_all_stakeholders_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_stakeholders.update_stakeholder2

- **Route**: `PATCH /v2/accounts/{account_id}/stakeholders/{stakeholder_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_stakeholder2(account_id: str, stakeholder_id: str, body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `stakeholder_id`, `body`
- **Params**: `account_id` — path · `stakeholder_id` — path · `body` — JSON body
- **Returns (parsed)**: `StakeholderRazorpayPartnerStakeholdersApi`
- **Returns (raw)**: `ApiResult[StakeholderRazorpayPartnerStakeholdersApi, UpdateStakeholder2ErrorBody]`
- **Error**: `UpdateStakeholder2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsStakeholdersRequest1` | `curlec/models/v2_accounts_stakeholders_request1.py` |
| `V2AccountsStakeholdersRequest1Dict` | `curlec/models/v2_accounts_stakeholders_request1.py` |
| `StakeholderRazorpayPartnerStakeholdersApi` | `curlec/models/stakeholder_razorpay_partner_stakeholders_api.py` |
| `UpdateStakeholder2ErrorBody` | `curlec/errors/update_stakeholder2_error.py` |
| `Error` | `curlec/models/error.py` |

