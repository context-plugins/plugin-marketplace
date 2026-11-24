<!-- Generated file — do not edit; regenerated with the SDK. -->

# Expenses — operations

Accessor: `client.expenses` · Source: `basiq/apis/expenses.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.expenses.get_expenses

- **Route**: `GET /users/{userId}/expenses/{snapshotId}`
- **Auth**: `services_token`
- **Signature**: `def get_expenses(user_id: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `snapshot_id`
- **Params**: `user_id` — path `userId` · `snapshot_id` — path `snapshotId`
- **Returns (parsed)**: `ExpensesResponse`
- **Returns (raw)**: `ApiResult[ExpensesResponse, GetExpensesErrorBody]`
- **Error**: `GetExpensesErrorBody` — **Case A (typed)**
- **Error arms**: `UsersExpenses400Error1` [400] · `UsersExpenses403Error1` [403] · `UsersExpenses404Error1` [404] · `UsersExpenses500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExpensesResponse` | `basiq/models/expenses_response.py` |
| `GetExpensesErrorBody` | `basiq/errors/get_expenses_error.py` |
| `UsersExpenses400Error1` | `basiq/models/users_expenses400_error1.py` |
| `UsersExpenses403Error1` | `basiq/models/users_expenses403_error1.py` |
| `UsersExpenses404Error1` | `basiq/models/users_expenses404_error1.py` |
| `UsersExpenses500Error1` | `basiq/models/users_expenses500_error1.py` |

### client.expenses.post_expenses

- **Route**: `POST /users/{userId}/expenses`
- **Auth**: `services_token`
- **Signature**: `def post_expenses(user_id: str, *, body: UsersExpensesRequest | UsersExpensesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `ExpensesResponse`
- **Returns (raw)**: `ApiResult[ExpensesResponse, PostExpensesErrorBody]`
- **Error**: `PostExpensesErrorBody` — **Case A (typed)**
- **Error arms**: `UsersExpenses400Error1` [400] · `UsersExpenses403Error1` [403] · `UsersExpenses404Error1` [404] · `UsersExpenses500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersExpensesRequest` | `basiq/models/users_expenses_request.py` |
| `UsersExpensesRequestDict` | `basiq/models/users_expenses_request.py` |
| `ExpensesResponse` | `basiq/models/expenses_response.py` |
| `PostExpensesErrorBody` | `basiq/errors/post_expenses_error.py` |
| `UsersExpenses400Error1` | `basiq/models/users_expenses400_error1.py` |
| `UsersExpenses403Error1` | `basiq/models/users_expenses403_error1.py` |
| `UsersExpenses404Error1` | `basiq/models/users_expenses404_error1.py` |
| `UsersExpenses500Error1` | `basiq/models/users_expenses500_error1.py` |

