<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationsApi — operations

Accessor: `client.organizations_api` · Source: `bitly/apis/organizations_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organizations_api.get_organization

- **Route**: `GET /organizations/{organization_guid}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_organization(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_guid`
- **Params**: `organization_guid` — path
- **Returns (parsed)**: `Organization`
- **Returns (raw)**: `ApiResult[Organization, GetOrganizationErrorBody]`
- **Error**: `GetOrganizationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Organization` | `bitly/models/organization.py` |
| `GetOrganizationErrorBody` | `bitly/errors/get_organization_error.py` |
| `Error` | `bitly/models/error.py` |

### client.organizations_api.get_organization_shorten_counts

- **Route**: `GET /organizations/{organization_guid}/shorten_counts`
- **Auth**: `bearer_auth`
- **Signature**: `def get_organization_shorten_counts(organization_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_guid`
- **Params**: `organization_guid` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `Metrics`
- **Returns (raw)**: `ApiResult[Metrics, GetOrganizationShortenCountsErrorBody]`
- **Error**: `GetOrganizationShortenCountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `Metrics` | `bitly/models/metrics.py` |
| `GetOrganizationShortenCountsErrorBody` | `bitly/errors/get_organization_shorten_counts_error.py` |
| `Error` | `bitly/models/error.py` |

### client.organizations_api.get_organization_shorten_counts_by_group

- **Route**: `GET /organizations/{organization_guid}/shorten_counts_by_group`
- **Auth**: `bearer_auth`
- **Signature**: `def get_organization_shorten_counts_by_group(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_guid`
- **Params**: `organization_guid` — path
- **Returns (parsed)**: `Metrics`
- **Returns (raw)**: `ApiResult[Metrics, GetOrganizationShortenCountsByGroupErrorBody]`
- **Error**: `GetOrganizationShortenCountsByGroupErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Metrics` | `bitly/models/metrics.py` |
| `GetOrganizationShortenCountsByGroupErrorBody` | `bitly/errors/get_organization_shorten_counts_by_group_error.py` |
| `Error` | `bitly/models/error.py` |

### client.organizations_api.get_organizations

- **Route**: `GET /organizations`
- **Auth**: `bearer_auth`
- **Signature**: `def get_organizations(*, include_all: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `include_all` — query
- **Returns (parsed)**: `Organizations`
- **Returns (raw)**: `ApiResult[Organizations, GetOrganizationsErrorBody]`
- **Error**: `GetOrganizationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Organizations` | `bitly/models/organizations.py` |
| `GetOrganizationsErrorBody` | `bitly/errors/get_organizations_error.py` |
| `Error` | `bitly/models/error.py` |

### client.organizations_api.get_plan_limits

- **Route**: `GET /organizations/{organization_guid}/plan_limits`
- **Auth**: `bearer_auth`
- **Signature**: `def get_plan_limits(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_guid`
- **Params**: `organization_guid` — path
- **Returns (parsed)**: `PlanLimits`
- **Returns (raw)**: `ApiResult[PlanLimits, GetPlanLimitsErrorBody]`
- **Error**: `GetPlanLimitsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlanLimits` | `bitly/models/plan_limits.py` |
| `GetPlanLimitsErrorBody` | `bitly/errors/get_plan_limits_error.py` |
| `Error` | `bitly/models/error.py` |

