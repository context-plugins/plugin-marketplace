<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignTeams — operations

Accessor: `client.campaign_teams` · Source: `givebutter/apis/campaign_teams.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.campaign_teams.campaigns_teams_destroy

- **Route**: `DELETE /v1/campaigns/{campaign}/teams/{team}`
- **Auth**: `http`
- **Signature**: `def campaigns_teams_destroy(campaign: int, team: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`, `team`
- **Params**: `campaign` — path · `team` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CampaignsTeamsDestroyErrorBody]`
- **Error**: `CampaignsTeamsDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignsTeamsDestroyErrorBody` | `givebutter/errors/campaigns_teams_destroy_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.campaign_teams.campaigns_teams_index

- **Route**: `GET /v1/campaigns/{campaign}/teams`
- **Auth**: `http`
- **Signature**: `def campaigns_teams_index(campaign: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`
- **Params**: `campaign` — path
- **Returns (parsed)**: `V1CampaignsTeamsResponse`
- **Returns (raw)**: `ApiResult[V1CampaignsTeamsResponse, CampaignsTeamsIndexErrorBody]`
- **Error**: `CampaignsTeamsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1CampaignsTeamsResponse` | `givebutter/models/v1_campaigns_teams_response.py` |
| `CampaignsTeamsIndexErrorBody` | `givebutter/errors/campaigns_teams_index_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.campaign_teams.campaigns_teams_show

- **Route**: `GET /v1/campaigns/{campaign}/teams/{team}`
- **Auth**: `http`
- **Signature**: `def campaigns_teams_show(campaign: int, team: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`, `team`
- **Params**: `campaign` — path · `team` — path
- **Returns (parsed)**: `CampaignTeamResource`
- **Returns (raw)**: `ApiResult[CampaignTeamResource, CampaignsTeamsShowErrorBody]`
- **Error**: `CampaignsTeamsShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignTeamResource` | `givebutter/models/campaign_team_resource.py` |
| `CampaignsTeamsShowErrorBody` | `givebutter/errors/campaigns_teams_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

