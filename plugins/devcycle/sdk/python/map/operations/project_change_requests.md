<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectChangeRequests — operations

Accessor: `client.project_change_requests` · Source: `dev_cycle/apis/project_change_requests.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.project_change_requests.project_change_requests_controller_get_feature_change_requests

- **Route**: `GET /v2/projects/{project}/change-requests`
- **Server**: `default`
- **Signature**: `def project_change_requests_controller_get_feature_change_requests(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, status: Status1DevCycleManagementProjectChangeRequestsApiOrStr | None = None, reviewer: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `created_by` — query `createdBy` · `status` — query · `reviewer` — query
- **Returns (parsed)**: `list[FeatureChangeRequestSummary]`
- **Returns (raw)**: `ApiResult[list[FeatureChangeRequestSummary], ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody]`
- **Error**: `ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [405, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `Status1DevCycleManagementProjectChangeRequestsApiOrStr` | `dev_cycle/models/enums/status1_dev_cycle_management_project_change_requests_api.py` |
| `FeatureChangeRequestSummary` | `dev_cycle/models/feature_change_request_summary.py` |
| `ProjectChangeRequestsControllerGetFeatureChangeRequestsErrorBody` | `dev_cycle/errors/project_change_requests_controller_get_feature_change_requests_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

