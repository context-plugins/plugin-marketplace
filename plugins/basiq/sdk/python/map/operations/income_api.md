<!-- Generated file — do not edit; regenerated with the SDK. -->

# IncomeApi — operations

Accessor: `client.income_api` · Source: `basiq/apis/income_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.income_api.get_income

- **Route**: `GET /users/{userId}/income/{snapshotId}`
- **Auth**: `services_token`
- **Signature**: `def get_income(user_id: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `snapshot_id`
- **Params**: `user_id` — path `userId` · `snapshot_id` — path `snapshotId`
- **Returns (parsed)**: `IncomeResponse`
- **Returns (raw)**: `ApiResult[IncomeResponse, GetIncomeErrorBody]`
- **Error**: `GetIncomeErrorBody` — **Case A (typed)**
- **Error arms**: `UsersIncome400Error1` [400] · `UsersIncome403Error1` [403] · `UsersIncome404Error1` [404] · `UsersIncome500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IncomeResponse` | `basiq/models/income_response.py` |
| `GetIncomeErrorBody` | `basiq/errors/get_income_error.py` |
| `UsersIncome400Error1` | `basiq/models/users_income400_error1.py` |
| `UsersIncome403Error1` | `basiq/models/users_income403_error1.py` |
| `UsersIncome404Error1` | `basiq/models/users_income404_error1.py` |
| `UsersIncome500Error1` | `basiq/models/users_income500_error1.py` |

### client.income_api.post_income

- **Route**: `POST /users/{userId}/income`
- **Auth**: `services_token`
- **Signature**: `def post_income(user_id: str, *, body: UsersIncomeRequest | UsersIncomeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `IncomeResponse`
- **Returns (raw)**: `ApiResult[IncomeResponse, PostIncomeErrorBody]`
- **Error**: `PostIncomeErrorBody` — **Case A (typed)**
- **Error arms**: `UsersIncome400Error1` [400] · `UsersIncome403Error1` [403] · `UsersIncome404Error1` [404] · `UsersIncome500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersIncomeRequest` | `basiq/models/users_income_request.py` |
| `UsersIncomeRequestDict` | `basiq/models/users_income_request.py` |
| `IncomeResponse` | `basiq/models/income_response.py` |
| `PostIncomeErrorBody` | `basiq/errors/post_income_error.py` |
| `UsersIncome400Error1` | `basiq/models/users_income400_error1.py` |
| `UsersIncome403Error1` | `basiq/models/users_income403_error1.py` |
| `UsersIncome404Error1` | `basiq/models/users_income404_error1.py` |
| `UsersIncome500Error1` | `basiq/models/users_income500_error1.py` |

