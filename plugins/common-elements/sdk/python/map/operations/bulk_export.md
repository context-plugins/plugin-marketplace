<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkExport — operations

Accessor: `client.bulk_export` · Source: `common_elements/apis/bulk_export.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bulk_export.export

- **Route**: `GET /api/v1/export/{resource}`
- **Auth**: `bearer_auth`
- **Signature**: `def export(resource: str, *, format_: str | None = None, columns: str | None = None, state: str | None = None, q: str | None = None, county: str | None = None, subtype: str | None = None, category: str | None = None, unit_min_unit_max: float | None = None, year_min_year_max: float | None = None, is_claimed: bool | None = None, mgmt: str | None = None, chapter_topic: str | None = None, sirs_on_file_elevator_delinquent: bool | None = None, milestone_status_pool_last_result: str | None = None, has_sirs_has_elevator_cert: bool | None = None, fha_status: str | None = None, min_risk_max_risk: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource`
- **Params**: `resource` — path · `format_` — query `format` · `columns` — query · `state` — query · `q` — query · `county` — query · `subtype` — query · `category` — query · `unit_min_unit_max` — query `unit_min / unit_max` · `year_min_year_max` — query `year_min / year_max` · `is_claimed` — query · `mgmt` — query · `chapter_topic` — query `chapter / topic` · `sirs_on_file_elevator_delinquent` — query `sirs_on_file / elevator_delinquent` · `milestone_status_pool_last_result` — query `milestone_status / pool_last_result` · `has_sirs_has_elevator_cert` — query `has_sirs / has_elevator_cert` · `fha_status` — query · `min_risk_max_risk` — query `min_risk / max_risk`
- **Returns (parsed)**: `ApiV1ExportResponse`
- **Returns (raw)**: `ApiResult[ApiV1ExportResponse, ExportErrorBody]`
- **Error**: `ExportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ExportResponse` | `common_elements/models/api_v1_export_response.py` |
| `ExportErrorBody` | `common_elements/errors/export_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_export.export_changes

- **Route**: `GET /api/v1/export/changes`
- **Auth**: `bearer_auth`
- **Signature**: `def export_changes(*, format_: str | None = None, columns: str | None = None, kind: str | None = None, state: str | None = None, county: str | None = None, subtype: str | None = None, since: str | None = None, until: str | None = None, min_magnitude: float | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `format_` — query `format` · `columns` — query · `kind` — query · `state` — query · `county` — query · `subtype` — query · `since` — query · `until` — query · `min_magnitude` — query
- **Returns (parsed)**: `ApiV1ExportChangesResponse`
- **Returns (raw)**: `ApiResult[ApiV1ExportChangesResponse, ExportChangesErrorBody]`
- **Error**: `ExportChangesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ExportChangesResponse` | `common_elements/models/api_v1_export_changes_response.py` |
| `ExportChangesErrorBody` | `common_elements/errors/export_changes_error.py` |
| `Error` | `common_elements/models/error.py` |

