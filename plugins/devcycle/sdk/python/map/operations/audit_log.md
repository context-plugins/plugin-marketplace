<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLog — operations

Accessor: `client.audit_log` · Source: `dev_cycle/apis/audit_log.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.audit_log.audit_log_controller_find_all

- **Route**: `GET /v1/projects/{project}/features/{feature}/audit`
- **Server**: `default`
- **Signature**: `def audit_log_controller_find_all(feature: str, project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, environment: str | None = None, a0_user: str | None = None, start_date: RFC3339DateTime | None = None, end_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `environment` — query · `a0_user` — query · `start_date` — query `startDate` · `end_date` — query `endDate`
- **Returns (parsed)**: `list[AuditLogEntity]`
- **Returns (raw)**: `ApiResult[list[AuditLogEntity], AuditLogControllerFindAllErrorBody]`
- **Error**: `AuditLogControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `AuditLogEntity` | `dev_cycle/models/audit_log_entity.py` |
| `AuditLogControllerFindAllErrorBody` | `dev_cycle/errors/audit_log_controller_find_all_error.py` |

