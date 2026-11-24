<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountTeam — operations

Accessor: `client.account_team` · Source: `doi_t/apis/account_team.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account_team.list_account_team

- **Route**: `GET /customers/v1/accountTeam`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_account_team(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `CustomersV1AccountTeamResponse`
- **Returns (raw)**: `ApiResult[CustomersV1AccountTeamResponse, ListAccountTeamErrorBody]`
- **Error**: `ListAccountTeamErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomersV1AccountTeamResponse` | `doi_t/models/customers_v1_account_team_response.py` |
| `ListAccountTeamErrorBody` | `doi_t/errors/list_account_team_error.py` |
| `Error` | `doi_t/models/error.py` |

