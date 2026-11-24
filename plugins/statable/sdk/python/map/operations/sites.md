<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sites — operations

Accessor: `client.sites` · Source: `statable/apis/sites.py` · 21 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sites.create_funnel

- **Route**: `POST /sites/{id}/funnels`
- **Auth**: `bearer_auth`
- **Signature**: `def create_funnel(id_: int, body: FunnelRequest | FunnelRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `FunnelDefinition`
- **Returns (raw)**: `ApiResult[FunnelDefinition, CreateFunnelErrorBody]`
- **Error**: `CreateFunnelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FunnelRequest` | `statable/models/funnel_request.py` |
| `FunnelRequestDict` | `statable/models/funnel_request.py` |
| `FunnelDefinition` | `statable/models/funnel_definition.py` |
| `CreateFunnelErrorBody` | `statable/errors/create_funnel_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.create_goal

- **Route**: `POST /sites/{id}/goals`
- **Auth**: `bearer_auth`
- **Signature**: `def create_goal(id_: int, body: GoalRequest | GoalRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Goal`
- **Returns (raw)**: `ApiResult[Goal, CreateGoalErrorBody]`
- **Error**: `CreateGoalErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoalRequest` | `statable/models/goal_request.py` |
| `GoalRequestDict` | `statable/models/goal_request.py` |
| `Goal` | `statable/models/goal.py` |
| `CreateGoalErrorBody` | `statable/errors/create_goal_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.create_site

- **Route**: `POST /sites`
- **Auth**: `bearer_auth`
- **Signature**: `def create_site(body: CreateSiteRequest | CreateSiteRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `SiteDetail`
- **Returns (raw)**: `ApiResult[SiteDetail, CreateSiteErrorBody]`
- **Error**: `CreateSiteErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSiteRequest` | `statable/models/create_site_request.py` |
| `CreateSiteRequestDict` | `statable/models/create_site_request.py` |
| `SiteDetail` | `statable/models/site_detail.py` |
| `CreateSiteErrorBody` | `statable/errors/create_site_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.delete_funnel

- **Route**: `DELETE /sites/{id}/funnels/{funnelId}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_funnel(id_: int, funnel_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `funnel_id`
- **Params**: `id_` — path `id` · `funnel_id` — path `funnelId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteFunnelErrorBody]`
- **Error**: `DeleteFunnelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteFunnelErrorBody` | `statable/errors/delete_funnel_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.delete_goal

- **Route**: `DELETE /sites/{id}/goals/{goalId}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_goal(id_: int, goal_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `goal_id`
- **Params**: `id_` — path `id` · `goal_id` — path `goalId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteGoalErrorBody]`
- **Error**: `DeleteGoalErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteGoalErrorBody` | `statable/errors/delete_goal_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.delete_site

- **Route**: `DELETE /sites/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_site(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSiteErrorBody]`
- **Error**: `DeleteSiteErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSiteErrorBody` | `statable/errors/delete_site_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.get_blocked_ips

- **Route**: `GET /sites/{id}/settings/blocked-ips`
- **Auth**: `bearer_auth`
- **Signature**: `def get_blocked_ips(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SitesSettingsBlockedIpsResponse`
- **Returns (raw)**: `ApiResult[SitesSettingsBlockedIpsResponse, GetBlockedIPsErrorBody]`
- **Error**: `GetBlockedIPsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SitesSettingsBlockedIpsResponse` | `statable/models/sites_settings_blocked_ips_response.py` |
| `GetBlockedIPsErrorBody` | `statable/errors/get_blocked_ips_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.get_country_settings

- **Route**: `GET /sites/{id}/settings/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def get_country_settings(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `CountryList`
- **Returns (raw)**: `ApiResult[CountryList, GetCountrySettingsErrorBody]`
- **Error**: `GetCountrySettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CountryList` | `statable/models/country_list.py` |
| `GetCountrySettingsErrorBody` | `statable/errors/get_country_settings_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.get_hostname_settings

- **Route**: `GET /sites/{id}/settings/hostnames`
- **Auth**: `bearer_auth`
- **Signature**: `def get_hostname_settings(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `HostnameList`
- **Returns (raw)**: `ApiResult[HostnameList, GetHostnameSettingsErrorBody]`
- **Error**: `GetHostnameSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HostnameList` | `statable/models/hostname_list.py` |
| `GetHostnameSettingsErrorBody` | `statable/errors/get_hostname_settings_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.get_public_dashboard

- **Route**: `GET /sites/{id}/settings/public-dashboard`
- **Auth**: `bearer_auth`
- **Signature**: `def get_public_dashboard(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PublicDashboard`
- **Returns (raw)**: `ApiResult[PublicDashboard, GetPublicDashboardErrorBody]`
- **Error**: `GetPublicDashboardErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicDashboard` | `statable/models/public_dashboard.py` |
| `GetPublicDashboardErrorBody` | `statable/errors/get_public_dashboard_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.get_site_snippet

- **Route**: `GET /sites/{id}/snippet`
- **Auth**: `bearer_auth`
- **Signature**: `def get_site_snippet(id_: str, *, type_: TypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `type_` — query `type`
- **Returns (parsed)**: `SiteSnippet`
- **Returns (raw)**: `ApiResult[SiteSnippet, GetSiteSnippetErrorBody]`
- **Error**: `GetSiteSnippetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeOrStr` | `statable/models/enums/type.py` |
| `SiteSnippet` | `statable/models/site_snippet.py` |
| `GetSiteSnippetErrorBody` | `statable/errors/get_site_snippet_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.get_tracking_settings

- **Route**: `GET /sites/{id}/settings/tracking`
- **Auth**: `bearer_auth`
- **Signature**: `def get_tracking_settings(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `TrackingSettings`
- **Returns (raw)**: `ApiResult[TrackingSettings, GetTrackingSettingsErrorBody]`
- **Error**: `GetTrackingSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TrackingSettings` | `statable/models/tracking_settings.py` |
| `GetTrackingSettingsErrorBody` | `statable/errors/get_tracking_settings_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.list_site_goals

- **Route**: `GET /sites/{id}/goals`
- **Auth**: `bearer_auth`
- **Signature**: `def list_site_goals(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SitesGoalsResponse`
- **Returns (raw)**: `ApiResult[SitesGoalsResponse, ListSiteGoalsErrorBody]`
- **Error**: `ListSiteGoalsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SitesGoalsResponse` | `statable/models/sites_goals_response.py` |
| `ListSiteGoalsErrorBody` | `statable/errors/list_site_goals_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.set_blocked_ips

- **Route**: `PUT /sites/{id}/settings/blocked-ips`
- **Auth**: `bearer_auth`
- **Signature**: `def set_blocked_ips(id_: int, body: list[str], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `SettingsCount`
- **Returns (raw)**: `ApiResult[SettingsCount, SetBlockedIPsErrorBody]`
- **Error**: `SetBlockedIPsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SettingsCount` | `statable/models/settings_count.py` |
| `SetBlockedIPsErrorBody` | `statable/errors/set_blocked_ips_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.set_country_settings

- **Route**: `PUT /sites/{id}/settings/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def set_country_settings(id_: int, body: CountryListRequest | CountryListRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `SettingsCount`
- **Returns (raw)**: `ApiResult[SettingsCount, SetCountrySettingsErrorBody]`
- **Error**: `SetCountrySettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CountryListRequest` | `statable/models/country_list_request.py` |
| `CountryListRequestDict` | `statable/models/country_list_request.py` |
| `SettingsCount` | `statable/models/settings_count.py` |
| `SetCountrySettingsErrorBody` | `statable/errors/set_country_settings_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.set_hostname_settings

- **Route**: `PUT /sites/{id}/settings/hostnames`
- **Auth**: `bearer_auth`
- **Signature**: `def set_hostname_settings(id_: int, body: HostnameListRequest | HostnameListRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `SettingsCount`
- **Returns (raw)**: `ApiResult[SettingsCount, SetHostnameSettingsErrorBody]`
- **Error**: `SetHostnameSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HostnameListRequest` | `statable/models/hostname_list_request.py` |
| `HostnameListRequestDict` | `statable/models/hostname_list_request.py` |
| `SettingsCount` | `statable/models/settings_count.py` |
| `SetHostnameSettingsErrorBody` | `statable/errors/set_hostname_settings_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.set_public_dashboard

- **Route**: `PUT /sites/{id}/settings/public-dashboard`
- **Auth**: `bearer_auth`
- **Signature**: `def set_public_dashboard(id_: int, body: PublicDashboard | PublicDashboardDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `PublicDashboard`
- **Returns (raw)**: `ApiResult[PublicDashboard, SetPublicDashboardErrorBody]`
- **Error**: `SetPublicDashboardErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicDashboard` | `statable/models/public_dashboard.py` |
| `PublicDashboardDict` | `statable/models/public_dashboard.py` |
| `SetPublicDashboardErrorBody` | `statable/errors/set_public_dashboard_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.set_tracking_settings

- **Route**: `PUT /sites/{id}/settings/tracking`
- **Auth**: `bearer_auth`
- **Signature**: `def set_tracking_settings(id_: int, body: TrackingSettingsRequest | TrackingSettingsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `TrackingSettings`
- **Returns (raw)**: `ApiResult[TrackingSettings, SetTrackingSettingsErrorBody]`
- **Error**: `SetTrackingSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TrackingSettingsRequest` | `statable/models/tracking_settings_request.py` |
| `TrackingSettingsRequestDict` | `statable/models/tracking_settings_request.py` |
| `TrackingSettings` | `statable/models/tracking_settings.py` |
| `SetTrackingSettingsErrorBody` | `statable/errors/set_tracking_settings_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.update_funnel

- **Route**: `PUT /sites/{id}/funnels/{funnelId}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_funnel(id_: int, funnel_id: int, body: FunnelRequest | FunnelRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `funnel_id`, `body`
- **Params**: `id_` — path `id` · `funnel_id` — path `funnelId` · `body` — JSON body
- **Returns (parsed)**: `FunnelDefinition`
- **Returns (raw)**: `ApiResult[FunnelDefinition, UpdateFunnelErrorBody]`
- **Error**: `UpdateFunnelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FunnelRequest` | `statable/models/funnel_request.py` |
| `FunnelRequestDict` | `statable/models/funnel_request.py` |
| `FunnelDefinition` | `statable/models/funnel_definition.py` |
| `UpdateFunnelErrorBody` | `statable/errors/update_funnel_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.update_goal

- **Route**: `PUT /sites/{id}/goals/{goalId}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_goal(id_: int, goal_id: int, body: GoalRequest | GoalRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `goal_id`, `body`
- **Params**: `id_` — path `id` · `goal_id` — path `goalId` · `body` — JSON body
- **Returns (parsed)**: `Goal`
- **Returns (raw)**: `ApiResult[Goal, UpdateGoalErrorBody]`
- **Error**: `UpdateGoalErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoalRequest` | `statable/models/goal_request.py` |
| `GoalRequestDict` | `statable/models/goal_request.py` |
| `Goal` | `statable/models/goal.py` |
| `UpdateGoalErrorBody` | `statable/errors/update_goal_error.py` |
| `Error` | `statable/models/error.py` |

### client.sites.update_site

- **Route**: `PATCH /sites/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_site(id_: int, body: UpdateSiteRequest | UpdateSiteRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `SiteDetail`
- **Returns (raw)**: `ApiResult[SiteDetail, UpdateSiteErrorBody]`
- **Error**: `UpdateSiteErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateSiteRequest` | `statable/models/update_site_request.py` |
| `UpdateSiteRequestDict` | `statable/models/update_site_request.py` |
| `SiteDetail` | `statable/models/site_detail.py` |
| `UpdateSiteErrorBody` | `statable/errors/update_site_error.py` |
| `Error` | `statable/models/error.py` |

