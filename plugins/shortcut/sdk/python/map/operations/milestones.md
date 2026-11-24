<!-- Generated file — do not edit; regenerated with the SDK. -->

# Milestones — operations

Accessor: `client.milestones` · Source: `shortcut/apis/milestones.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.milestones.create_milestone

- **Route**: `POST /api/v3/milestones`
- **Auth**: `api_token`
- **Signature**: `def create_milestone(body: CreateMilestone | CreateMilestoneDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Milestone`
- **Returns (raw)**: `ApiResult[Milestone, CreateMilestoneErrorBody]`
- **Error**: `CreateMilestoneErrorBody` — **Case A (typed)**
- **Error arms**: `UnusableEntitlementError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateMilestone` | `shortcut/models/create_milestone.py` |
| `CreateMilestoneDict` | `shortcut/models/create_milestone.py` |
| `Milestone` | `shortcut/models/milestone.py` |
| `CreateMilestoneErrorBody` | `shortcut/errors/create_milestone_error.py` |
| `UnusableEntitlementError` | `shortcut/models/unusable_entitlement_error.py` |

### client.milestones.delete_milestone

- **Route**: `DELETE /api/v3/milestones/{milestone-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_milestone(milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `milestone_public_id`
- **Params**: `milestone_public_id` — path `milestone-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteMilestoneErrorBody]`
- **Error**: `DeleteMilestoneErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteMilestoneErrorBody` | `shortcut/errors/delete_milestone_error.py` |

### client.milestones.get_milestone

- **Route**: `GET /api/v3/milestones/{milestone-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_milestone(milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `milestone_public_id`
- **Params**: `milestone_public_id` — path `milestone-public-id`
- **Returns (parsed)**: `Milestone`
- **Returns (raw)**: `ApiResult[Milestone, GetMilestoneErrorBody]`
- **Error**: `GetMilestoneErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Milestone` | `shortcut/models/milestone.py` |
| `GetMilestoneErrorBody` | `shortcut/errors/get_milestone_error.py` |

### client.milestones.list_milestone_epics

- **Route**: `GET /api/v3/milestones/{milestone-public-id}/epics`
- **Auth**: `api_token`
- **Signature**: `def list_milestone_epics(milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `milestone_public_id`
- **Params**: `milestone_public_id` — path `milestone-public-id`
- **Returns (parsed)**: `list[EpicSlim]`
- **Returns (raw)**: `ApiResult[list[EpicSlim], ListMilestoneEpicsErrorBody]`
- **Error**: `ListMilestoneEpicsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `EpicSlim` | `shortcut/models/epic_slim.py` |
| `ListMilestoneEpicsErrorBody` | `shortcut/errors/list_milestone_epics_error.py` |

### client.milestones.list_milestones

- **Route**: `GET /api/v3/milestones`
- **Auth**: `api_token`
- **Signature**: `def list_milestones(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[Milestone]`
- **Returns (raw)**: `ApiResult[list[Milestone], ListMilestonesErrorBody]`
- **Error**: `ListMilestonesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Milestone` | `shortcut/models/milestone.py` |
| `ListMilestonesErrorBody` | `shortcut/errors/list_milestones_error.py` |

### client.milestones.update_milestone

- **Route**: `PUT /api/v3/milestones/{milestone-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_milestone(milestone_public_id: int, body: UpdateMilestone | UpdateMilestoneDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `milestone_public_id`, `body`
- **Params**: `milestone_public_id` — path `milestone-public-id` · `body` — JSON body
- **Returns (parsed)**: `Milestone`
- **Returns (raw)**: `ApiResult[Milestone, UpdateMilestoneErrorBody]`
- **Error**: `UpdateMilestoneErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateMilestone` | `shortcut/models/update_milestone.py` |
| `UpdateMilestoneDict` | `shortcut/models/update_milestone.py` |
| `Milestone` | `shortcut/models/milestone.py` |
| `UpdateMilestoneErrorBody` | `shortcut/errors/update_milestone_error.py` |

