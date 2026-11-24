<!-- Generated file — do not edit; regenerated with the SDK. -->

# Plans — operations

Accessor: `client.plans` · Source: `paid/apis/plans.py` · 15 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.plans.create_plan

- **Route**: `POST /plans/`
- **Server**: `default`
- **Signature**: `def create_plan(authorization: str, *, body: CreatePlanRequest | CreatePlanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Plan1`
- **Returns (raw)**: `ApiResult[Plan1, CreatePlanErrorBody]`
- **Error**: `CreatePlanErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreatePlanRequest` | `paid/models/create_plan_request.py` |
| `CreatePlanRequestDict` | `paid/models/create_plan_request.py` |
| `Plan1` | `paid/models/plan1.py` |
| `CreatePlanErrorBody` | `paid/errors/create_plan_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.plans.get_by_id

- **Route**: `GET /plans/{planId}`
- **Server**: `default`
- **Signature**: `def get_by_id(plan_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `plan_id`, `authorization`
- **Params**: `plan_id` — path `planId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Plan`
- **Returns (raw)**: `ApiResult[Plan, GetByIdErrorBody]`
- **Error**: `GetByIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Plan` | `paid/models/plan.py` |
| `GetByIdErrorBody` | `paid/errors/get_by_id_error.py` |
| `Error` | `paid/models/error.py` |

### client.plans.get_current

- **Route**: `GET /plans/current`
- **Server**: `default`
- **Signature**: `def get_current(customer_external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_external_id`, `authorization`
- **Params**: `customer_external_id` — query `customerExternalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `PlansGetCurrentResponse200`
- **Returns (raw)**: `ApiResult[PlansGetCurrentResponse200, GetCurrentErrorBody]`
- **Error**: `GetCurrentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlansGetCurrentResponse200` | `paid/models/plans_get_current_response200.py` |
| `GetCurrentErrorBody` | `paid/errors/get_current_error.py` |
| `Error` | `paid/models/error.py` |

### client.plans.get_group_by_id

- **Route**: `GET /plans/planGroup/{planGroupId}`
- **Server**: `default`
- **Signature**: `def get_group_by_id(plan_group_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `plan_group_id`, `authorization`
- **Params**: `plan_group_id` — path `planGroupId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `PlanGroup`
- **Returns (raw)**: `ApiResult[PlanGroup, GetGroupByIdErrorBody]`
- **Error**: `GetGroupByIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlanGroup` | `paid/models/plan_group.py` |
| `GetGroupByIdErrorBody` | `paid/errors/get_group_by_id_error.py` |
| `Error` | `paid/models/error.py` |

### client.plans.get_group_plans

- **Route**: `GET /plans/planGroup/{planGroupId}/plans`
- **Server**: `default`
- **Signature**: `def get_group_plans(plan_group_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `plan_group_id`, `authorization`
- **Params**: `plan_group_id` — path `planGroupId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `list[PlanWithFeatures]`
- **Returns (raw)**: `ApiResult[list[PlanWithFeatures], GetGroupPlansErrorBody]`
- **Error**: `GetGroupPlansErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlanWithFeatures` | `paid/models/plan_with_features.py` |
| `GetGroupPlansErrorBody` | `paid/errors/get_group_plans_error.py` |
| `Error` | `paid/models/error.py` |

### client.plans.get_plan_by_external_id

- **Route**: `GET /plans/external/{externalId}`
- **Server**: `default`
- **Signature**: `def get_plan_by_external_id(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Plan1`
- **Returns (raw)**: `ApiResult[Plan1, GetPlanByExternalIdErrorBody]`
- **Error**: `GetPlanByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Plan1` | `paid/models/plan1.py` |
| `GetPlanByExternalIdErrorBody` | `paid/errors/get_plan_by_external_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.plans.get_plan_by_id

- **Route**: `GET /plans/{id}`
- **Server**: `default`
- **Signature**: `def get_plan_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Plan1`
- **Returns (raw)**: `ApiResult[Plan1, GetPlanByIdErrorBody]`
- **Error**: `GetPlanByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Plan1` | `paid/models/plan1.py` |
| `GetPlanByIdErrorBody` | `paid/errors/get_plan_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.plans.get_usage

- **Route**: `GET /plans/{planId}/usage`
- **Server**: `default`
- **Signature**: `def get_usage(plan_id: UUID, external_id: str, authorization: str, *, limit: int | None = 100, offset: int | None = 0, start_time: RFC3339DateTime | None = None, end_time: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `plan_id`, `external_id`, `authorization`
- **Params**: `plan_id` — path `planId` · `external_id` — query `externalId` · `limit` — query · `offset` — query · `start_time` — query `startTime` · `end_time` — query `endTime` · `authorization` — header `Authorization`
- **Returns (parsed)**: `UsageSummariesResponse`
- **Returns (raw)**: `ApiResult[UsageSummariesResponse, GetUsageErrorBody]`
- **Error**: `GetUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsageSummariesResponse` | `paid/models/usage_summaries_response.py` |
| `GetUsageErrorBody` | `paid/errors/get_usage_error.py` |
| `Error` | `paid/models/error.py` |

### client.plans.list_plans

- **Route**: `GET /plans/`
- **Server**: `default`
- **Signature**: `def list_plans(authorization: str, *, limit: int | None = 10, offset: int | None = None, product_id: str | None = None, external_product_id: str | None = None, include_archived: bool | None = True, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `product_id` — query `productId` · `external_product_id` — query `externalProductId` · `include_archived` — query `includeArchived` · `authorization` — header `Authorization`
- **Returns (parsed)**: `PlanListResponse`
- **Returns (raw)**: `ApiResult[PlanListResponse, ListPlansErrorBody]`
- **Error**: `ListPlansErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlanListResponse` | `paid/models/plan_list_response.py` |
| `ListPlansErrorBody` | `paid/errors/list_plans_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.plans.subscribe

- **Route**: `POST /plans/{planId}/subscribe`
- **Server**: `default`
- **Signature**: `def subscribe(plan_id: UUID, customer_external_id: str, currency: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `plan_id`, `customer_external_id`, `currency`, `authorization`
- **Params**: `plan_id` — path `planId` · `customer_external_id` — query `customerExternalId` · `currency` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `Order`
- **Returns (raw)**: `ApiResult[Order, SubscribeErrorBody]`
- **Error**: `SubscribeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Order` | `paid/models/order.py` |
| `SubscribeErrorBody` | `paid/errors/subscribe_error.py` |
| `Error` | `paid/models/error.py` |

### client.plans.unsubscribe

- **Route**: `POST /plans/{planId}/unsubscribe`
- **Server**: `default`
- **Signature**: `def unsubscribe(plan_id: UUID, customer_external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `plan_id`, `customer_external_id`, `authorization`
- **Params**: `plan_id` — path `planId` · `customer_external_id` — query `customerExternalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CancelRenewalResponse`
- **Returns (raw)**: `ApiResult[CancelRenewalResponse, UnsubscribeErrorBody]`
- **Error**: `UnsubscribeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelRenewalResponse` | `paid/models/cancel_renewal_response.py` |
| `UnsubscribeErrorBody` | `paid/errors/unsubscribe_error.py` |
| `Error` | `paid/models/error.py` |

### client.plans.update_plan_by_external_id

- **Route**: `PUT /plans/external/{externalId}`
- **Server**: `default`
- **Signature**: `def update_plan_by_external_id(external_id: str, authorization: str, *, body: UpdatePlanRequest | UpdatePlanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Plan1`
- **Returns (raw)**: `ApiResult[Plan1, UpdatePlanByExternalIdErrorBody]`
- **Error**: `UpdatePlanByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdatePlanRequest` | `paid/models/update_plan_request.py` |
| `UpdatePlanRequestDict` | `paid/models/update_plan_request.py` |
| `Plan1` | `paid/models/plan1.py` |
| `UpdatePlanByExternalIdErrorBody` | `paid/errors/update_plan_by_external_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.plans.update_plan_by_id

- **Route**: `PUT /plans/{id}`
- **Server**: `default`
- **Signature**: `def update_plan_by_id(id_: str, authorization: str, *, body: UpdatePlanRequest | UpdatePlanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Plan1`
- **Returns (raw)**: `ApiResult[Plan1, UpdatePlanByIdErrorBody]`
- **Error**: `UpdatePlanByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdatePlanRequest` | `paid/models/update_plan_request.py` |
| `UpdatePlanRequestDict` | `paid/models/update_plan_request.py` |
| `Plan1` | `paid/models/plan1.py` |
| `UpdatePlanByIdErrorBody` | `paid/errors/update_plan_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.plans.update_plan_upgrade_path

- **Route**: `PUT /plans/upgrade-path`
- **Server**: `default`
- **Signature**: `def update_plan_upgrade_path(authorization: str, *, body: UpdatePlanUpgradePathRequest | UpdatePlanUpgradePathRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `PlanUpgradePathResponse`
- **Returns (raw)**: `ApiResult[PlanUpgradePathResponse, UpdatePlanUpgradePathErrorBody]`
- **Error**: `UpdatePlanUpgradePathErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdatePlanUpgradePathRequest` | `paid/models/update_plan_upgrade_path_request.py` |
| `UpdatePlanUpgradePathRequestDict` | `paid/models/update_plan_upgrade_path_request.py` |
| `PlanUpgradePathResponse` | `paid/models/plan_upgrade_path_response.py` |
| `UpdatePlanUpgradePathErrorBody` | `paid/errors/update_plan_upgrade_path_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.plans.upgrade

- **Route**: `POST /plans/upgrade`
- **Server**: `default`
- **Signature**: `def upgrade(customer_external_id: str, old_plan_id: UUID, new_plan_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_external_id`, `old_plan_id`, `new_plan_id`, `authorization`
- **Params**: `customer_external_id` — query `customerExternalId` · `old_plan_id` — query `oldPlanId` · `new_plan_id` — query `newPlanId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `ProrationUpgradeResponse`
- **Returns (raw)**: `ApiResult[ProrationUpgradeResponse, UpgradeErrorBody]`
- **Error**: `UpgradeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProrationUpgradeResponse` | `paid/models/proration_upgrade_response.py` |
| `UpgradeErrorBody` | `paid/errors/upgrade_error.py` |
| `Error` | `paid/models/error.py` |

