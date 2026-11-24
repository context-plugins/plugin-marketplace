<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringPlans — operations

Accessor: `client.recurring_plans` · Source: `givebutter/apis/recurring_plans.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.recurring_plans.plans_index

- **Route**: `GET /v1/plans`
- **Auth**: `http`
- **Signature**: `def plans_index(*, contacts: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `contacts` — query
- **Returns (parsed)**: `V1PlansResponse`
- **Returns (raw)**: `ApiResult[V1PlansResponse, PlansIndexErrorBody]`
- **Error**: `PlansIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1PlansResponse` | `givebutter/models/v1_plans_response.py` |
| `PlansIndexErrorBody` | `givebutter/errors/plans_index_error.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.recurring_plans.plans_show

- **Route**: `GET /v1/plans/{plan}`
- **Auth**: `http`
- **Signature**: `def plans_show(plan: str | None, *, first_name: str | None = None, last_name: str | None = None, email: str | None = None, amount: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `plan`
- **Params**: `plan` — path · `first_name` — query · `last_name` — query · `email` — query · `amount` — query
- **Returns (parsed)**: `RecurringPlanResource`
- **Returns (raw)**: `ApiResult[RecurringPlanResource, PlansShowErrorBody]`
- **Error**: `PlansShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringPlanResource` | `givebutter/models/recurring_plan_resource.py` |
| `PlansShowErrorBody` | `givebutter/errors/plans_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

