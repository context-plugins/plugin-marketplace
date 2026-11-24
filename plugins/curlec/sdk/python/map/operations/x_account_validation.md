<!-- Generated file — do not edit; regenerated with the SDK. -->

# XAccountValidation — operations

Accessor: `client.x_account_validation` · Source: `curlec/apis/x_account_validation.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.x_account_validation.fetch_fund_account_validation

- **Route**: `GET /fund_accounts/validations/{validation_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_fund_account_validation(validation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `validation_id`
- **Params**: `validation_id` — path
- **Returns (parsed)**: `FundAccountValidation`
- **Returns (raw)**: `ApiResult[FundAccountValidation, FetchFundAccountValidationErrorBody]`
- **Error**: `FetchFundAccountValidationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FundAccountValidation` | `curlec/models/fund_account_validation.py` |
| `FetchFundAccountValidationErrorBody` | `curlec/errors/fetch_fund_account_validation_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_account_validation.list_fund_account_validations

- **Route**: `GET /fund_accounts/validations`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_fund_account_validations(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `FundAccountsValidationsResponse`
- **Returns (raw)**: `ApiResult[FundAccountsValidationsResponse, ListFundAccountValidationsErrorBody]`
- **Error**: `ListFundAccountValidationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FundAccountsValidationsResponse` | `curlec/models/fund_accounts_validations_response.py` |
| `ListFundAccountValidationsErrorBody` | `curlec/errors/list_fund_account_validations_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_account_validation.validate_fund_account

- **Route**: `POST /fund_accounts/validations`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def validate_fund_account(body: FundAccountsValidationsRequest | FundAccountsValidationsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `FundAccountValidation`
- **Returns (raw)**: `ApiResult[FundAccountValidation, ValidateFundAccountErrorBody]`
- **Error**: `ValidateFundAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FundAccountsValidationsRequest` | `curlec/models/fund_accounts_validations_request.py` |
| `FundAccountsValidationsRequestDict` | `curlec/models/fund_accounts_validations_request.py` |
| `FundAccountValidation` | `curlec/models/fund_account_validation.py` |
| `ValidateFundAccountErrorBody` | `curlec/errors/validate_fund_account_error.py` |
| `Error` | `curlec/models/error.py` |

