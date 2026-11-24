<!-- Generated file — do not edit; regenerated with the SDK. -->

# GovernanceApi — operations

Accessor: `client.governance_api` · Source: `deliverd/apis/governance_api.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.governance_api.get_api_v1_governance_frameworks

- **Route**: `GET /api/v1/governance/frameworks`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_governance_frameworks(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

### client.governance_api.get_api_v1_governance_frameworks_mapping

- **Route**: `GET /api/v1/governance/frameworks/mapping`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_governance_frameworks_mapping(*, task_id: UUID | None = None, framework: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `task_id` — query `taskId` · `framework` — query
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

### client.governance_api.get_api_v1_governance_ict_register

- **Route**: `GET /api/v1/governance/ict-register`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_governance_ict_register(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

### client.governance_api.get_api_v1_governance_ict_register_export

- **Route**: `GET /api/v1/governance/ict-register/export`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_governance_ict_register_export(*, format_: FormatOrStr | None = None, template: TemplateOrStr | None = None, as_of: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `format_` — query `format` · `template` — query · `as_of` — query `asOf`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], GetApiV1GovernanceIctRegisterExportErrorBody]`
- **Error**: `GetApiV1GovernanceIctRegisterExportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `deliverd/models/enums/format.py` |
| `TemplateOrStr` | `deliverd/models/enums/template.py` |
| `GetApiV1GovernanceIctRegisterExportErrorBody` | `deliverd/errors/get_api_v1_governance_ict_register_export_error.py` |

### client.governance_api.get_api_v1_governance_incidents

- **Route**: `GET /api/v1/governance/incidents`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_governance_incidents(*, status: StatusDeliverdDevGovernanceApiOrStr | None = None, ai_system_id: UUID | None = None, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `ai_system_id` — query `aiSystemId` · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1GovernanceIncidentsResponse`
- **Returns (raw)**: `ApiResult[ApiV1GovernanceIncidentsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusDeliverdDevGovernanceApiOrStr` | `deliverd/models/enums/status_deliverd_dev_governance_api.py` |
| `ApiV1GovernanceIncidentsResponse` | `deliverd/models/api_v1_governance_incidents_response.py` |

### client.governance_api.get_api_v1_governance_incidents_by_id

- **Route**: `GET /api/v1/governance/incidents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_governance_incidents_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], GetApiV1GovernanceIncidentsByIdErrorBody]`
- **Error**: `GetApiV1GovernanceIncidentsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `GetApiV1GovernanceIncidentsByIdErrorBody` | `deliverd/errors/get_api_v1_governance_incidents_by_id_error.py` |

### client.governance_api.get_api_v1_governance_policies

- **Route**: `GET /api/v1/governance/policies`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_governance_policies(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

### client.governance_api.get_api_v1_governance_summary

- **Route**: `GET /api/v1/governance/summary`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_governance_summary(*, ai_system_id: UUID | None = None, risk: RiskOrStr | None = None, owner: str | None = None, provider: str | None = None, data_classification: str | None = None, jurisdiction: str | None = None, framework: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `ai_system_id` — query `aiSystemId` · `risk` — query · `owner` — query · `provider` — query · `data_classification` — query `dataClassification` · `jurisdiction` — query · `framework` — query
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], GetApiV1GovernanceSummaryErrorBody]`
- **Error**: `GetApiV1GovernanceSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `RiskOrStr` | `deliverd/models/enums/risk.py` |
| `GetApiV1GovernanceSummaryErrorBody` | `deliverd/errors/get_api_v1_governance_summary_error.py` |

### client.governance_api.post_api_v1_governance_authority_evaluate

- **Route**: `POST /api/v1/governance/authority/evaluate`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_governance_authority_evaluate(*, body: ApiV1GovernanceAuthorityEvaluateRequest | ApiV1GovernanceAuthorityEvaluateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1GovernanceAuthorityEvaluateErrorBody]`
- **Error**: `PostApiV1GovernanceAuthorityEvaluateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1GovernanceAuthorityEvaluateRequest` | `deliverd/models/api_v1_governance_authority_evaluate_request.py` |
| `ApiV1GovernanceAuthorityEvaluateRequestDict` | `deliverd/models/api_v1_governance_authority_evaluate_request.py` |
| `PostApiV1GovernanceAuthorityEvaluateErrorBody` | `deliverd/errors/post_api_v1_governance_authority_evaluate_error.py` |

### client.governance_api.post_api_v1_governance_frameworks

- **Route**: `POST /api/v1/governance/frameworks`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_governance_frameworks(*, body: ApiV1GovernanceFrameworksRequest | ApiV1GovernanceFrameworksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1GovernanceFrameworksErrorBody]`
- **Error**: `PostApiV1GovernanceFrameworksErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1GovernanceFrameworksRequest` | `deliverd/models/api_v1_governance_frameworks_request.py` |
| `ApiV1GovernanceFrameworksRequestDict` | `deliverd/models/api_v1_governance_frameworks_request.py` |
| `PostApiV1GovernanceFrameworksErrorBody` | `deliverd/errors/post_api_v1_governance_frameworks_error.py` |

### client.governance_api.post_api_v1_governance_incidents

- **Route**: `POST /api/v1/governance/incidents`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_governance_incidents(*, body: ApiV1GovernanceIncidentsRequest | ApiV1GovernanceIncidentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1GovernanceIncidentsErrorBody]`
- **Error**: `PostApiV1GovernanceIncidentsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1GovernanceIncidentsRequest` | `deliverd/models/api_v1_governance_incidents_request.py` |
| `ApiV1GovernanceIncidentsRequestDict` | `deliverd/models/api_v1_governance_incidents_request.py` |
| `PostApiV1GovernanceIncidentsErrorBody` | `deliverd/errors/post_api_v1_governance_incidents_error.py` |

### client.governance_api.post_api_v1_governance_incidents_by_id_reports

- **Route**: `POST /api/v1/governance/incidents/{id}/reports`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_governance_incidents_by_id_reports(id_: UUID, *, body: ApiV1GovernanceIncidentsReportsRequest | ApiV1GovernanceIncidentsReportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1GovernanceIncidentsByIdReportsErrorBody]`
- **Error**: `PostApiV1GovernanceIncidentsByIdReportsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1GovernanceIncidentsReportsRequest` | `deliverd/models/api_v1_governance_incidents_reports_request.py` |
| `ApiV1GovernanceIncidentsReportsRequestDict` | `deliverd/models/api_v1_governance_incidents_reports_request.py` |
| `PostApiV1GovernanceIncidentsByIdReportsErrorBody` | `deliverd/errors/post_api_v1_governance_incidents_by_id_reports_error.py` |

