<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checks — operations

Accessor: `client.checks` · Source: `hud/apis/checks.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.checks.create_team_qc_pipeline_v2_checks_pipelines_post

- **Route**: `POST /v2/checks/pipelines`
- **Signature**: `def create_team_qc_pipeline_v2_checks_pipelines_post(body: QcPipelineCreateRequest | QcPipelineCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `QcPipelineRegistrationResponse`
- **Returns (raw)**: `ApiResult[QcPipelineRegistrationResponse, CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody]`
- **Error**: `CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QcPipelineCreateRequest` | `hud/models/qc_pipeline_create_request.py` |
| `QcPipelineCreateRequestDict` | `hud/models/qc_pipeline_create_request.py` |
| `QcPipelineRegistrationResponse` | `hud/models/qc_pipeline_registration_response.py` |
| `CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody` | `hud/errors/create_team_qc_pipeline_v2_checks_pipelines_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.checks.list_platform_check_runs_v2_checks_runs_get

- **Route**: `GET /v2/checks/runs`
- **Signature**: `def list_platform_check_runs_v2_checks_runs_get(subject_type: CheckSubjectTypeOrStr, subject_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subject_type`, `subject_id`
- **Params**: `subject_type` — query · `subject_id` — query · `limit` — query
- **Returns (parsed)**: `list[CheckRunResponse]`
- **Returns (raw)**: `ApiResult[list[CheckRunResponse], ListPlatformCheckRunsV2ChecksRunsGetErrorBody]`
- **Error**: `ListPlatformCheckRunsV2ChecksRunsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckSubjectTypeOrStr` | `hud/models/enums/check_subject_type.py` |
| `CheckRunResponse` | `hud/models/check_run_response.py` |
| `ListPlatformCheckRunsV2ChecksRunsGetErrorBody` | `hud/errors/list_platform_check_runs_v2_checks_runs_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.checks.list_platform_checks_v2_checks_get

- **Route**: `GET /v2/checks`
- **Signature**: `def list_platform_checks_v2_checks_get(*, subject_type: CheckSubjectTypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `subject_type` — query
- **Returns (parsed)**: `list[CheckDefinitionResponse]`
- **Returns (raw)**: `ApiResult[list[CheckDefinitionResponse], ListPlatformChecksV2ChecksGetErrorBody]`
- **Error**: `ListPlatformChecksV2ChecksGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckSubjectTypeOrStr` | `hud/models/enums/check_subject_type.py` |
| `CheckDefinitionResponse` | `hud/models/check_definition_response.py` |
| `ListPlatformChecksV2ChecksGetErrorBody` | `hud/errors/list_platform_checks_v2_checks_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.checks.list_team_qc_pipelines_v2_checks_pipelines_get

- **Route**: `GET /v2/checks/pipelines`
- **Signature**: `def list_team_qc_pipelines_v2_checks_pipelines_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[QcPipelineRegistrationResponse]`
- **Returns (raw)**: `ApiResult[list[QcPipelineRegistrationResponse], ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody]`
- **Error**: `ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QcPipelineRegistrationResponse` | `hud/models/qc_pipeline_registration_response.py` |
| `ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody` | `hud/errors/list_team_qc_pipelines_v2_checks_pipelines_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.checks.run_platform_check_v2_checks_check_key_runs_post

- **Route**: `POST /v2/checks/{check_key}/runs`
- **Signature**: `def run_platform_check_v2_checks_check_key_runs_post(check_key: str, body: CheckRunRequest | CheckRunRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `check_key`, `body`
- **Params**: `check_key` — path · `body` — JSON body
- **Returns (parsed)**: `CheckRunResponse`
- **Returns (raw)**: `ApiResult[CheckRunResponse, RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody]`
- **Error**: `RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckRunRequest` | `hud/models/check_run_request.py` |
| `CheckRunRequestDict` | `hud/models/check_run_request.py` |
| `CheckRunResponse` | `hud/models/check_run_response.py` |
| `RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody` | `hud/errors/run_platform_check_v2_checks_check_key_runs_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

