<!-- Generated file — do not edit; regenerated with the SDK. -->

# Budgets — operations

Accessor: `client.budgets` · Source: `doi_t/apis/budgets.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.budgets.create_budget

- **Route**: `POST /analytics/v1/budgets`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_budget(*, body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BudgetApi`
- **Returns (raw)**: `ApiResult[BudgetApi, CreateBudgetErrorBody]`
- **Error**: `CreateBudgetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetCreateUpdateRequest` | `doi_t/models/budget_create_update_request.py` |
| `BudgetCreateUpdateRequestDict` | `doi_t/models/budget_create_update_request.py` |
| `BudgetApi` | `doi_t/models/budget_api.py` |
| `CreateBudgetErrorBody` | `doi_t/errors/create_budget_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.budgets.delete_budget

- **Route**: `DELETE /analytics/v1/budgets/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_budget(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteBudgetErrorBody]`
- **Error**: `DeleteBudgetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBudgetErrorBody` | `doi_t/errors/delete_budget_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.budgets.get_budget

- **Route**: `GET /analytics/v1/budgets/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_budget(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `BudgetApi`
- **Returns (raw)**: `ApiResult[BudgetApi, GetBudgetErrorBody]`
- **Error**: `GetBudgetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetApi` | `doi_t/models/budget_api.py` |
| `GetBudgetErrorBody` | `doi_t/errors/get_budget_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.budgets.list_budgets

- **Route**: `GET /analytics/v1/budgets`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_budgets(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter` · `name_contains` — query `nameContains` · `min_creation_time` — query `minCreationTime` · `max_creation_time` — query `maxCreationTime`
- **Returns (parsed)**: `AnalyticsV1BudgetsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsV1BudgetsResponse, ListBudgetsErrorBody]`
- **Error**: `ListBudgetsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsV1BudgetsResponse` | `doi_t/models/analytics_v1_budgets_response.py` |
| `ListBudgetsErrorBody` | `doi_t/errors/list_budgets_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.budgets.update_budget

- **Route**: `PATCH /analytics/v1/budgets/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_budget(id_: str, *, body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `BudgetApi`
- **Returns (raw)**: `ApiResult[BudgetApi, UpdateBudgetErrorBody]`
- **Error**: `UpdateBudgetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetCreateUpdateRequest` | `doi_t/models/budget_create_update_request.py` |
| `BudgetCreateUpdateRequestDict` | `doi_t/models/budget_create_update_request.py` |
| `BudgetApi` | `doi_t/models/budget_api.py` |
| `UpdateBudgetErrorBody` | `doi_t/errors/update_budget_error.py` |
| `Error` | `doi_t/models/error.py` |

