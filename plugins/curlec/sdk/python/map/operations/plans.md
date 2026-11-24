<!-- Generated file — do not edit; regenerated with the SDK. -->

# Plans — operations

Accessor: `client.plans` · Source: `curlec/apis/plans.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.plans.create_plan

- **Route**: `POST /plans`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_plan(body: PlansRequest | PlansRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Plan`
- **Returns (raw)**: `ApiResult[Plan, CreatePlanErrorBody]`
- **Error**: `CreatePlanErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlansRequest` | `curlec/models/plans_request.py` |
| `PlansRequestDict` | `curlec/models/plans_request.py` |
| `Plan` | `curlec/models/plan.py` |
| `CreatePlanErrorBody` | `curlec/errors/create_plan_error.py` |
| `Error` | `curlec/models/error.py` |

### client.plans.fetch_plan

- **Route**: `GET /plans/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_plan(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Plan`
- **Returns (raw)**: `ApiResult[Plan, FetchPlanErrorBody]`
- **Error**: `FetchPlanErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Plan` | `curlec/models/plan.py` |
| `FetchPlanErrorBody` | `curlec/errors/fetch_plan_error.py` |
| `Error` | `curlec/models/error.py` |

### client.plans.list_plans

- **Route**: `GET /plans`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_plans(*, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `skip` — query
- **Returns (parsed)**: `PlansResponse`
- **Returns (raw)**: `ApiResult[PlansResponse, ListPlansErrorBody]`
- **Error**: `ListPlansErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlansResponse` | `curlec/models/plans_response.py` |
| `ListPlansErrorBody` | `curlec/errors/list_plans_error.py` |
| `Error` | `curlec/models/error.py` |

