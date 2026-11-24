<!-- Generated file — do not edit; regenerated with the SDK. -->

# Objectives — operations

Accessor: `client.objectives` · Source: `shortcut/apis/objectives.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.objectives.create_objective

- **Route**: `POST /api/v3/objectives`
- **Auth**: `api_token`
- **Signature**: `def create_objective(body: CreateObjective | CreateObjectiveDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Objective`
- **Returns (raw)**: `ApiResult[Objective, CreateObjectiveErrorBody]`
- **Error**: `CreateObjectiveErrorBody` — **Case A (typed)**
- **Error arms**: `UnusableEntitlementError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateObjective` | `shortcut/models/create_objective.py` |
| `CreateObjectiveDict` | `shortcut/models/create_objective.py` |
| `Objective` | `shortcut/models/objective.py` |
| `CreateObjectiveErrorBody` | `shortcut/errors/create_objective_error.py` |
| `UnusableEntitlementError` | `shortcut/models/unusable_entitlement_error.py` |

### client.objectives.create_objective_health

- **Route**: `POST /api/v3/objectives/{objective-public-id}/health`
- **Auth**: `api_token`
- **Signature**: `def create_objective_health(objective_public_id: int, body: CreateObjectiveHealth | CreateObjectiveHealthDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `objective_public_id`, `body`
- **Params**: `objective_public_id` — path `objective-public-id` · `body` — JSON body
- **Returns (parsed)**: `Health`
- **Returns (raw)**: `ApiResult[Health, CreateObjectiveHealthErrorBody]`
- **Error**: `CreateObjectiveHealthErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateObjectiveHealth` | `shortcut/models/create_objective_health.py` |
| `CreateObjectiveHealthDict` | `shortcut/models/create_objective_health.py` |
| `Health` | `shortcut/models/health.py` |
| `CreateObjectiveHealthErrorBody` | `shortcut/errors/create_objective_health_error.py` |

### client.objectives.delete_objective

- **Route**: `DELETE /api/v3/objectives/{objective-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_objective(objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `objective_public_id`
- **Params**: `objective_public_id` — path `objective-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteObjectiveErrorBody]`
- **Error**: `DeleteObjectiveErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteObjectiveErrorBody` | `shortcut/errors/delete_objective_error.py` |

### client.objectives.get_objective

- **Route**: `GET /api/v3/objectives/{objective-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_objective(objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `objective_public_id`
- **Params**: `objective_public_id` — path `objective-public-id`
- **Returns (parsed)**: `Objective`
- **Returns (raw)**: `ApiResult[Objective, GetObjectiveErrorBody]`
- **Error**: `GetObjectiveErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Objective` | `shortcut/models/objective.py` |
| `GetObjectiveErrorBody` | `shortcut/errors/get_objective_error.py` |

### client.objectives.get_objective_health

- **Route**: `GET /api/v3/objectives/{objective-public-id}/health`
- **Auth**: `api_token`
- **Signature**: `def get_objective_health(objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `objective_public_id`
- **Params**: `objective_public_id` — path `objective-public-id`
- **Returns (parsed)**: `Health`
- **Returns (raw)**: `ApiResult[Health, GetObjectiveHealthErrorBody]`
- **Error**: `GetObjectiveHealthErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Health` | `shortcut/models/health.py` |
| `GetObjectiveHealthErrorBody` | `shortcut/errors/get_objective_health_error.py` |

### client.objectives.list_objective_epics

- **Route**: `GET /api/v3/objectives/{objective-public-id}/epics`
- **Auth**: `api_token`
- **Signature**: `def list_objective_epics(objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `objective_public_id`
- **Params**: `objective_public_id` — path `objective-public-id`
- **Returns (parsed)**: `list[EpicSlim]`
- **Returns (raw)**: `ApiResult[list[EpicSlim], ListObjectiveEpicsErrorBody]`
- **Error**: `ListObjectiveEpicsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EpicSlim` | `shortcut/models/epic_slim.py` |
| `ListObjectiveEpicsErrorBody` | `shortcut/errors/list_objective_epics_error.py` |

### client.objectives.list_objective_healths

- **Route**: `GET /api/v3/objectives/{objective-public-id}/health-history`
- **Auth**: `api_token`
- **Signature**: `def list_objective_healths(objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `objective_public_id`
- **Params**: `objective_public_id` — path `objective-public-id`
- **Returns (parsed)**: `list[Health]`
- **Returns (raw)**: `ApiResult[list[Health], ListObjectiveHealthsErrorBody]`
- **Error**: `ListObjectiveHealthsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Health` | `shortcut/models/health.py` |
| `ListObjectiveHealthsErrorBody` | `shortcut/errors/list_objective_healths_error.py` |

### client.objectives.list_objectives

- **Route**: `GET /api/v3/objectives`
- **Auth**: `api_token`
- **Signature**: `def list_objectives(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[Objective]`
- **Returns (raw)**: `ApiResult[list[Objective], ListObjectivesErrorBody]`
- **Error**: `ListObjectivesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Objective` | `shortcut/models/objective.py` |
| `ListObjectivesErrorBody` | `shortcut/errors/list_objectives_error.py` |

### client.objectives.update_objective

- **Route**: `PUT /api/v3/objectives/{objective-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_objective(objective_public_id: int, body: UpdateObjective | UpdateObjectiveDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `objective_public_id`, `body`
- **Params**: `objective_public_id` — path `objective-public-id` · `body` — JSON body
- **Returns (parsed)**: `Objective`
- **Returns (raw)**: `ApiResult[Objective, UpdateObjectiveErrorBody]`
- **Error**: `UpdateObjectiveErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateObjective` | `shortcut/models/update_objective.py` |
| `UpdateObjectiveDict` | `shortcut/models/update_objective.py` |
| `Objective` | `shortcut/models/objective.py` |
| `UpdateObjectiveErrorBody` | `shortcut/errors/update_objective_error.py` |

