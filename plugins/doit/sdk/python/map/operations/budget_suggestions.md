<!-- Generated file — do not edit; regenerated with the SDK. -->

# BudgetSuggestions — operations

Accessor: `client.budget_suggestions` · Source: `doi_t/apis/budget_suggestions.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.budget_suggestions.accept_budget_suggestion

- **Route**: `POST /analytics/v1/budget-suggestions/{id}/actions/accept`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def accept_budget_suggestion(id_: str, body: BudgetSuggestionAcceptRequest | BudgetSuggestionAcceptRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `AnalyticsV1BudgetSuggestionsActionsAcceptResponse`
- **Returns (raw)**: `ApiResult[AnalyticsV1BudgetSuggestionsActionsAcceptResponse, AcceptBudgetSuggestionErrorBody]`
- **Error**: `AcceptBudgetSuggestionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetSuggestionAcceptRequest` | `doi_t/models/budget_suggestion_accept_request.py` |
| `BudgetSuggestionAcceptRequestDict` | `doi_t/models/budget_suggestion_accept_request.py` |
| `AnalyticsV1BudgetSuggestionsActionsAcceptResponse` | `doi_t/models/analytics_v1_budget_suggestions_actions_accept_response.py` |
| `AcceptBudgetSuggestionErrorBody` | `doi_t/errors/accept_budget_suggestion_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.budget_suggestions.dismiss_budget_suggestion

- **Route**: `POST /analytics/v1/budget-suggestions/{id}/actions/dismiss`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def dismiss_budget_suggestion(id_: str, *, body: BudgetSuggestionDismissRequest | BudgetSuggestionDismissRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `AnalyticsV1BudgetSuggestionsActionsDismissResponse`
- **Returns (raw)**: `ApiResult[AnalyticsV1BudgetSuggestionsActionsDismissResponse, DismissBudgetSuggestionErrorBody]`
- **Error**: `DismissBudgetSuggestionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BudgetSuggestionDismissRequest` | `doi_t/models/budget_suggestion_dismiss_request.py` |
| `BudgetSuggestionDismissRequestDict` | `doi_t/models/budget_suggestion_dismiss_request.py` |
| `AnalyticsV1BudgetSuggestionsActionsDismissResponse` | `doi_t/models/analytics_v1_budget_suggestions_actions_dismiss_response.py` |
| `DismissBudgetSuggestionErrorBody` | `doi_t/errors/dismiss_budget_suggestion_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.budget_suggestions.list_budget_suggestions

- **Route**: `GET /analytics/v1/budget-suggestions`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_budget_suggestions(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AnalyticsV1BudgetSuggestionsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsV1BudgetSuggestionsResponse, ListBudgetSuggestionsErrorBody]`
- **Error**: `ListBudgetSuggestionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsV1BudgetSuggestionsResponse` | `doi_t/models/analytics_v1_budget_suggestions_response.py` |
| `ListBudgetSuggestionsErrorBody` | `doi_t/errors/list_budget_suggestions_error.py` |
| `Error` | `doi_t/models/error.py` |

