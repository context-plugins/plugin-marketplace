<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignMembers — operations

Accessor: `client.campaign_members` · Source: `givebutter/apis/campaign_members.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.campaign_members.campaigns_members_destroy

- **Route**: `DELETE /v1/campaigns/{campaign}/members/{member}`
- **Auth**: `http`
- **Signature**: `def campaigns_members_destroy(campaign: int, member: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`, `member`
- **Params**: `campaign` — path · `member` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, CampaignsMembersDestroyErrorBody]`
- **Error**: `CampaignsMembersDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignsMembersDestroyErrorBody` | `givebutter/errors/campaigns_members_destroy_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.campaign_members.campaigns_members_index

- **Route**: `GET /v1/campaigns/{campaign}/members`
- **Auth**: `http`
- **Signature**: `def campaigns_members_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`
- **Params**: `campaign` — path
- **Returns (parsed)**: `V1CampaignsMembersResponse`
- **Returns (raw)**: `ApiResult[V1CampaignsMembersResponse, CampaignsMembersIndexErrorBody]`
- **Error**: `CampaignsMembersIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1CampaignsMembersResponse` | `givebutter/models/v1_campaigns_members_response.py` |
| `CampaignsMembersIndexErrorBody` | `givebutter/errors/campaigns_members_index_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.campaign_members.campaigns_members_show

- **Route**: `GET /v1/campaigns/{campaign}/members/{member}`
- **Auth**: `http`
- **Signature**: `def campaigns_members_show(campaign: int, member: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`, `member`
- **Params**: `campaign` — path · `member` — path
- **Returns (parsed)**: `CampaignMemberResource`
- **Returns (raw)**: `ApiResult[CampaignMemberResource, CampaignsMembersShowErrorBody]`
- **Error**: `CampaignsMembersShowErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignMemberResource` | `givebutter/models/campaign_member_resource.py` |
| `CampaignsMembersShowErrorBody` | `givebutter/errors/campaigns_members_show_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

