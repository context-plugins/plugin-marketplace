<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `basiq/apis/insights.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insights.create_insight

- **Route**: `POST /insights`
- **Auth**: `services_token`
- **Signature**: `def create_insight(body: PostInsightsRequest | PostInsightsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PostInsightsResponse`
- **Returns (raw)**: `ApiResult[PostInsightsResponse, CreateInsightErrorBody]`
- **Error**: `CreateInsightErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostInsightsRequest` | `basiq/models/post_insights_request.py` |
| `PostInsightsRequestDict` | `basiq/models/post_insights_request.py` |
| `PostInsightsResponse` | `basiq/models/post_insights_response.py` |
| `CreateInsightErrorBody` | `basiq/errors/create_insight_error.py` |
| `ErrorResponse` | `basiq/models/error_response.py` |

### client.insights.get_account_insights

- **Route**: `POST /users/{userId}/insights/account`
- **Auth**: `services_token`
- **Signature**: `def get_account_insights(user_id: UUID, body: UsersInsightsAccountRequest | UsersInsightsAccountRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `AccountInsightResponse`
- **Returns (raw)**: `ApiResult[AccountInsightResponse, GetAccountInsightsErrorBody]`
- **Error**: `GetAccountInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersInsightsAccountRequest` | `basiq/models/users_insights_account_request.py` |
| `UsersInsightsAccountRequestDict` | `basiq/models/users_insights_account_request.py` |
| `AccountInsightResponse` | `basiq/models/account_insight_response.py` |
| `GetAccountInsightsErrorBody` | `basiq/errors/get_account_insights_error.py` |
| `ErrorResponse` | `basiq/models/error_response.py` |

### client.insights.get_balance_insights

- **Route**: `POST /users/{userId}/insights/balance`
- **Auth**: `services_token`
- **Signature**: `def get_balance_insights(user_id: UUID, body: BalanceInsightRequest | BalanceInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `BalanceInsightResponse`
- **Returns (raw)**: `ApiResult[BalanceInsightResponse, GetBalanceInsightsErrorBody]`
- **Error**: `GetBalanceInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BalanceInsightRequest` | `basiq/models/balance_insight_request.py` |
| `BalanceInsightRequestDict` | `basiq/models/balance_insight_request.py` |
| `BalanceInsightResponse` | `basiq/models/balance_insight_response.py` |
| `GetBalanceInsightsErrorBody` | `basiq/errors/get_balance_insights_error.py` |
| `ErrorResponse` | `basiq/models/error_response.py` |

### client.insights.get_expense_ratio_insights

- **Route**: `POST /users/{userId}/insights/expense-ratio`
- **Auth**: `services_token`
- **Signature**: `def get_expense_ratio_insights(user_id: UUID, body: ExpenseRatioInsightRequest | ExpenseRatioInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `ExpenseRatioInsightResponse`
- **Returns (raw)**: `ApiResult[ExpenseRatioInsightResponse, GetExpenseRatioInsightsErrorBody]`
- **Error**: `GetExpenseRatioInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExpenseRatioInsightRequest` | `basiq/models/expense_ratio_insight_request.py` |
| `ExpenseRatioInsightRequestDict` | `basiq/models/expense_ratio_insight_request.py` |
| `ExpenseRatioInsightResponse` | `basiq/models/expense_ratio_insight_response.py` |
| `GetExpenseRatioInsightsErrorBody` | `basiq/errors/get_expense_ratio_insights_error.py` |
| `ErrorResponse` | `basiq/models/error_response.py` |

### client.insights.get_identity_insights

- **Route**: `POST /users/{userId}/insights/identity`
- **Auth**: `services_token`
- **Signature**: `def get_identity_insights(user_id: UUID, body: IdentityInsightRequest | IdentityInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `IdentityInsightResponse`
- **Returns (raw)**: `ApiResult[IdentityInsightResponse, GetIdentityInsightsErrorBody]`
- **Error**: `GetIdentityInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IdentityInsightRequest` | `basiq/models/identity_insight_request.py` |
| `IdentityInsightRequestDict` | `basiq/models/identity_insight_request.py` |
| `IdentityInsightResponse` | `basiq/models/identity_insight_response.py` |
| `GetIdentityInsightsErrorBody` | `basiq/errors/get_identity_insights_error.py` |
| `ErrorResponse` | `basiq/models/error_response.py` |

### client.insights.get_insight_by_id

- **Route**: `GET /users/{userId}/insights/{insightId}`
- **Auth**: `services_token`
- **Signature**: `def get_insight_by_id(user_id: UUID, insight_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `insight_id`
- **Params**: `user_id` — path `userId` · `insight_id` — path `insightId`
- **Returns (parsed)**: `Insight`
- **Returns (raw)**: `ApiResult[Insight, GetInsightByIdErrorBody]`
- **Error**: `GetInsightByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Insight` | `basiq/models/insight.py` |
| `GetInsightByIdErrorBody` | `basiq/errors/get_insight_by_id_error.py` |
| `ErrorResponse` | `basiq/models/error_response.py` |

### client.insights.get_insight_type

- **Route**: `GET /insights/types/{typeId}`
- **Auth**: `services_token`
- **Signature**: `def get_insight_type(type_id: TypeIdOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `type_id`
- **Params**: `type_id` — path `typeId`
- **Returns (parsed)**: `InsightTypeItem`
- **Returns (raw)**: `ApiResult[InsightTypeItem, GetInsightTypeErrorBody]`
- **Error**: `GetInsightTypeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeIdOrStr` | `basiq/models/enums/type_id.py` |
| `InsightTypeItem` | `basiq/models/insight_type_item.py` |
| `GetInsightTypeErrorBody` | `basiq/errors/get_insight_type_error.py` |
| `ErrorResponse` | `basiq/models/error_response.py` |

### client.insights.get_insight_types

- **Route**: `GET /insights/types`
- **Auth**: `services_token`
- **Signature**: `def get_insight_types(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `InsightTypesList`
- **Returns (raw)**: `ApiResult[InsightTypesList, GetInsightTypesErrorBody]`
- **Error**: `GetInsightTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightTypesList` | `basiq/models/insight_types_list.py` |
| `GetInsightTypesErrorBody` | `basiq/errors/get_insight_types_error.py` |
| `ErrorResponse` | `basiq/models/error_response.py` |

### client.insights.list_user_insights

- **Route**: `GET /users/{userId}/insights`
- **Auth**: `services_token`
- **Signature**: `def list_user_insights(user_id: UUID, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `filter_` — query `filter`
- **Returns (parsed)**: `InsightListResponse`
- **Returns (raw)**: `ApiResult[InsightListResponse, ListUserInsightsErrorBody]`
- **Error**: `ListUserInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightListResponse` | `basiq/models/insight_list_response.py` |
| `ListUserInsightsErrorBody` | `basiq/errors/list_user_insights_error.py` |
| `ErrorResponse` | `basiq/models/error_response.py` |

### client.insights.verify_income_insight

- **Route**: `POST /users/{userId}/insights/income`
- **Auth**: `services_token`
- **Signature**: `def verify_income_insight(user_id: UUID, body: IncomeInsightRequest | IncomeInsightRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `IncomeInsightResponse`
- **Returns (raw)**: `ApiResult[IncomeInsightResponse, VerifyIncomeInsightErrorBody]`
- **Error**: `VerifyIncomeInsightErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IncomeInsightRequest` | `basiq/models/income_insight_request.py` |
| `IncomeInsightRequestDict` | `basiq/models/income_insight_request.py` |
| `IncomeInsightResponse` | `basiq/models/income_insight_response.py` |
| `VerifyIncomeInsightErrorBody` | `basiq/errors/verify_income_insight_error.py` |
| `ErrorResponse` | `basiq/models/error_response.py` |

