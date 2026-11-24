<!-- Generated file — do not edit; regenerated with the SDK. -->

# Budgets — operations

Accessor: `client.budgets` · Source: `divvy/apis/budgets.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.budgets.create_budget

- **Route**: `POST /v3/spend/budgets`
- **Server**: `default`
- **Signature**: `def create_budget(body: BudgetCreateDto | BudgetCreateDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `BudgetResponseDto`
- **Returns (raw)**: `ApiResult[BudgetResponseDto, CreateBudgetErrorBody]`
- **Error**: `CreateBudgetErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetCreateDto` | `divvy/models/budget_create_dto.py` |
| `BudgetCreateDtoDict` | `divvy/models/budget_create_dto.py` |
| `BudgetResponseDto` | `divvy/models/budget_response_dto.py` |
| `CreateBudgetErrorBody` | `divvy/errors/create_budget_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.budgets.delete_budget

- **Route**: `DELETE /v3/spend/budgets/{budgetId}`
- **Server**: `default`
- **Signature**: `def delete_budget(budget_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `budget_id`
- **Params**: `budget_id` — path `budgetId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteBudgetErrorBody]`
- **Error**: `DeleteBudgetErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBudgetErrorBody` | `divvy/errors/delete_budget_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.budgets.delete_budget_member

- **Route**: `DELETE /v3/spend/budgets/{budgetId}/members/{userId}`
- **Server**: `default`
- **Signature**: `def delete_budget_member(budget_id: str, user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `budget_id`, `user_id`
- **Params**: `budget_id` — path `budgetId` · `user_id` — path `userId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteBudgetMemberErrorBody]`
- **Error**: `DeleteBudgetMemberErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBudgetMemberErrorBody` | `divvy/errors/delete_budget_member_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.budgets.get_budget

- **Route**: `GET /v3/spend/budgets/{budgetId}`
- **Server**: `default`
- **Signature**: `def get_budget(budget_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `budget_id`
- **Params**: `budget_id` — path `budgetId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `BudgetResponseDto`
- **Returns (raw)**: `ApiResult[BudgetResponseDto, GetBudgetErrorBody]`
- **Error**: `GetBudgetErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetResponseDto` | `divvy/models/budget_response_dto.py` |
| `GetBudgetErrorBody` | `divvy/errors/get_budget_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.budgets.get_budget_member

- **Route**: `GET /v3/spend/budgets/{budgetId}/members/{userId}`
- **Server**: `default`
- **Signature**: `def get_budget_member(budget_id: str, user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `budget_id`, `user_id`
- **Params**: `budget_id` — path `budgetId` · `user_id` — path `userId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `BudgetMemberResponseDto`
- **Returns (raw)**: `ApiResult[BudgetMemberResponseDto, GetBudgetMemberErrorBody]`
- **Error**: `GetBudgetMemberErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetMemberResponseDto` | `divvy/models/budget_member_response_dto.py` |
| `GetBudgetMemberErrorBody` | `divvy/errors/get_budget_member_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.budgets.list_budget_members

- **Route**: `GET /v3/spend/budgets/{budgetId}/members`
- **Server**: `default`
- **Signature**: `def list_budget_members(budget_id: str, *, max_: int | None = None, next_page: str | None = None, prev_page: str | None = None, sort: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `budget_id`
- **Params**: `budget_id` — path `budgetId` · `max_` — query `max` · `next_page` — query `nextPage` · `prev_page` — query `prevPage` · `sort` — query · `filters` — query · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationResponseDtoBudgetMemberResponseDto`
- **Returns (raw)**: `ApiResult[PaginationResponseDtoBudgetMemberResponseDto, ListBudgetMembersErrorBody]`
- **Error**: `ListBudgetMembersErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginationResponseDtoBudgetMemberResponseDto` | `divvy/models/pagination_response_dto_budget_member_response_dto.py` |
| `ListBudgetMembersErrorBody` | `divvy/errors/list_budget_members_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.budgets.list_budgets

- **Route**: `GET /v3/spend/budgets`
- **Server**: `default`
- **Signature**: `def list_budgets(*, next_page: str | None = None, prev_page: str | None = None, max_: int | None = None, sort: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `next_page` — query `nextPage` · `prev_page` — query `prevPage` · `max_` — query `max` · `sort` — query · `filters` — query · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationResponseDtoBudgetResponseDto`
- **Returns (raw)**: `ApiResult[PaginationResponseDtoBudgetResponseDto, ListBudgetsErrorBody]`
- **Error**: `ListBudgetsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginationResponseDtoBudgetResponseDto` | `divvy/models/pagination_response_dto_budget_response_dto.py` |
| `ListBudgetsErrorBody` | `divvy/errors/list_budgets_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.budgets.update_budget

- **Route**: `PATCH /v3/spend/budgets/{budgetId}`
- **Server**: `default`
- **Signature**: `def update_budget(budget_id: str, body: BudgetUpdateDto | BudgetUpdateDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `budget_id`, `body`
- **Params**: `budget_id` — path `budgetId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `BudgetResponseDto`
- **Returns (raw)**: `ApiResult[BudgetResponseDto, UpdateBudgetErrorBody]`
- **Error**: `UpdateBudgetErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetUpdateDto` | `divvy/models/budget_update_dto.py` |
| `BudgetUpdateDtoDict` | `divvy/models/budget_update_dto.py` |
| `BudgetResponseDto` | `divvy/models/budget_response_dto.py` |
| `UpdateBudgetErrorBody` | `divvy/errors/update_budget_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.budgets.upsert_budget_member

- **Route**: `PUT /v3/spend/budgets/{budgetId}/members/{userId}`
- **Server**: `default`
- **Signature**: `def upsert_budget_member(budget_id: str, user_id: str, body: BudgetMemberUpsertRequestDto | BudgetMemberUpsertRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `budget_id`, `user_id`, `body`
- **Params**: `budget_id` — path `budgetId` · `user_id` — path `userId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `BudgetMemberResponseDto`
- **Returns (raw)**: `ApiResult[BudgetMemberResponseDto, UpsertBudgetMemberErrorBody]`
- **Error**: `UpsertBudgetMemberErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetMemberUpsertRequestDto` | `divvy/models/budget_member_upsert_request_dto.py` |
| `BudgetMemberUpsertRequestDtoDict` | `divvy/models/budget_member_upsert_request_dto.py` |
| `BudgetMemberResponseDto` | `divvy/models/budget_member_response_dto.py` |
| `UpsertBudgetMemberErrorBody` | `divvy/errors/upsert_budget_member_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.budgets.upsert_bulk_budget_users

- **Route**: `PUT /v3/spend/budgets/{budgetId}/members/bulk`
- **Server**: `default`
- **Signature**: `def upsert_bulk_budget_users(budget_id: str, body: BudgetMemberBulkUpsertRequestDto | BudgetMemberBulkUpsertRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `budget_id`, `body`
- **Params**: `budget_id` — path `budgetId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `SpendStatusDto`
- **Returns (raw)**: `ApiResult[SpendStatusDto, UpsertBulkBudgetUsersErrorBody]`
- **Error**: `UpsertBulkBudgetUsersErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetMemberBulkUpsertRequestDto` | `divvy/models/budget_member_bulk_upsert_request_dto.py` |
| `BudgetMemberBulkUpsertRequestDtoDict` | `divvy/models/budget_member_bulk_upsert_request_dto.py` |
| `SpendStatusDto` | `divvy/models/spend_status_dto.py` |
| `UpsertBulkBudgetUsersErrorBody` | `divvy/errors/upsert_bulk_budget_users_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

