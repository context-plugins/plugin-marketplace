<!-- Generated file — do not edit; regenerated with the SDK. -->

# Results — operations

Accessor: `client.results` · Source: `dev_cycle/apis/results.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.results.results_controller_get_evaluations_per_hour_by_project

- **Route**: `GET /v1/projects/{project}/results/evaluations`
- **Server**: `default`
- **Signature**: `def results_controller_get_evaluations_per_hour_by_project(project: str, *, start_date: float | None = None, end_date: float | None = None, environment: str | None = None, period: PeriodOrStr | None = None, sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `start_date` — query `startDate` · `end_date` — query `endDate` · `environment` — query · `period` — query · `sdk_type` — query `sdkType`
- **Returns (parsed)**: `ResultProjectEvaluationsByHourDto`
- **Returns (raw)**: `ApiResult[ResultProjectEvaluationsByHourDto, ResultsControllerGetEvaluationsPerHourByProjectErrorBody]`
- **Error**: `ResultsControllerGetEvaluationsPerHourByProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `PeriodOrStr` | `dev_cycle/models/enums/period.py` |
| `SdkTypeDevCycleManagementResultsApiOrStr` | `dev_cycle/models/enums/sdk_type_dev_cycle_management_results_api.py` |
| `ResultProjectEvaluationsByHourDto` | `dev_cycle/models/result_project_evaluations_by_hour_dto.py` |
| `ResultsControllerGetEvaluationsPerHourByProjectErrorBody` | `dev_cycle/errors/results_controller_get_evaluations_per_hour_by_project_error.py` |

### client.results.results_controller_get_total_evaluations_per_hour_by_feature

- **Route**: `GET /v1/projects/{project}/features/{feature}/results/total-evaluations`
- **Server**: `default`
- **Signature**: `def results_controller_get_total_evaluations_per_hour_by_feature(feature: str, project: str, *, start_date: float | None = None, end_date: float | None = None, platform: str | None = None, variable: str | None = None, environment: str | None = None, period: PeriodOrStr | None = None, sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path · `start_date` — query `startDate` · `end_date` — query `endDate` · `platform` — query · `variable` — query · `environment` — query · `period` — query · `sdk_type` — query `sdkType`
- **Returns (parsed)**: `ResultEvaluationsByHourDto`
- **Returns (raw)**: `ApiResult[ResultEvaluationsByHourDto, ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody]`
- **Error**: `ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `PeriodOrStr` | `dev_cycle/models/enums/period.py` |
| `SdkTypeDevCycleManagementResultsApiOrStr` | `dev_cycle/models/enums/sdk_type_dev_cycle_management_results_api.py` |
| `ResultEvaluationsByHourDto` | `dev_cycle/models/result_evaluations_by_hour_dto.py` |
| `ResultsControllerGetTotalEvaluationsPerHourByFeatureErrorBody` | `dev_cycle/errors/results_controller_get_total_evaluations_per_hour_by_feature_error.py` |

### client.results.results_controller_get_total_evaluations_per_hour_by_project

- **Route**: `GET /v1/projects/{project}/results/total-evaluations`
- **Server**: `default`
- **Signature**: `def results_controller_get_total_evaluations_per_hour_by_project(project: str, *, start_date: float | None = None, end_date: float | None = None, environment: str | None = None, period: PeriodOrStr | None = None, sdk_type: SdkTypeDevCycleManagementResultsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `start_date` — query `startDate` · `end_date` — query `endDate` · `environment` — query · `period` — query · `sdk_type` — query `sdkType`
- **Returns (parsed)**: `ResultProjectEvaluationsByHourDto`
- **Returns (raw)**: `ApiResult[ResultProjectEvaluationsByHourDto, ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody]`
- **Error**: `ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `PeriodOrStr` | `dev_cycle/models/enums/period.py` |
| `SdkTypeDevCycleManagementResultsApiOrStr` | `dev_cycle/models/enums/sdk_type_dev_cycle_management_results_api.py` |
| `ResultProjectEvaluationsByHourDto` | `dev_cycle/models/result_project_evaluations_by_hour_dto.py` |
| `ResultsControllerGetTotalEvaluationsPerHourByProjectErrorBody` | `dev_cycle/errors/results_controller_get_total_evaluations_per_hour_by_project_error.py` |

