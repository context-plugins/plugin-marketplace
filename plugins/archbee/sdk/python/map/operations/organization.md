<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organization — operations

Accessor: `client.organization` · Source: `archbee/apis/organization.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organization.organization_display_rules

- **Route**: `GET /team/display-rules`
- **Auth**: `bearer_auth`
- **Signature**: `def organization_display_rules(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `TeamDisplayRulesResponse`
- **Returns (raw)**: `ApiResult[TeamDisplayRulesResponse, OrganizationDisplayRulesErrorBody]`
- **Error**: `OrganizationDisplayRulesErrorBody` — **Case A (typed)**
- **Error arms**: `TeamDisplayRules400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TeamDisplayRulesResponse` | `archbee/models/team_display_rules_response.py` |
| `OrganizationDisplayRulesErrorBody` | `archbee/errors/organization_display_rules_error.py` |
| `TeamDisplayRules400Error1` | `archbee/models/team_display_rules400_error1.py` |

### client.organization.organization_export

- **Route**: `GET /team/export`
- **Auth**: `bearer_auth`
- **Signature**: `def organization_export(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, OrganizationExportErrorBody]`
- **Error**: `OrganizationExportErrorBody` — **Case A (typed)**
- **Error arms**: `TeamExport400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationExportErrorBody` | `archbee/errors/organization_export_error.py` |
| `TeamExport400Error1` | `archbee/models/team_export400_error1.py` |

