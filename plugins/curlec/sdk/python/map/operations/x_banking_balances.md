<!-- Generated file — do not edit; regenerated with the SDK. -->

# XBankingBalances — operations

Accessor: `client.x_banking_balances` · Source: `curlec/apis/x_banking_balances.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.x_banking_balances.fetch_banking_balances

- **Route**: `GET /banking_balances`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_banking_balances(*, account_type: AccountType1OrStr | None = None, bank_code: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `account_type` — query · `bank_code` — query
- **Returns (parsed)**: `BankingBalancesResponse`
- **Returns (raw)**: `ApiResult[BankingBalancesResponse, FetchBankingBalancesErrorBody]`
- **Error**: `FetchBankingBalancesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountType1OrStr` | `curlec/models/enums/account_type1.py` |
| `BankingBalancesResponse` | `curlec/models/banking_balances_response.py` |
| `FetchBankingBalancesErrorBody` | `curlec/errors/fetch_banking_balances_error.py` |
| `Error` | `curlec/models/error.py` |

