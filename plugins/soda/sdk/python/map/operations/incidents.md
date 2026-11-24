<!-- Generated file — do not edit; regenerated with the SDK. -->

# Incidents — operations

Accessor: `client.incidents` · Source: `soda/apis/incidents.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.incidents.get_api_v1_incidents

- **Route**: `GET /api/v1/incidents`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_incidents(*, dataset_id: str | None = None, from_: RFC3339DateTime | None = None, incident_ids: str | None = None, lead_id: str | None = None, page: int | None = None, severity: str | None = None, size: int | None = None, status: str | None = None, to: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `dataset_id` — query `datasetId` · `from_` — query `from` · `incident_ids` — query `incidentIds` · `lead_id` — query `leadId` · `page` — query · `severity` — query · `size` — query · `status` — query · `to` — query
- **Returns (parsed)**: `PublicApiIncidentsResponse`
- **Returns (raw)**: `ApiResult[PublicApiIncidentsResponse, GetApiV1IncidentsErrorBody]`
- **Error**: `GetApiV1IncidentsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiIncidentsResponse` | `soda/models/public_api_incidents_response.py` |
| `GetApiV1IncidentsErrorBody` | `soda/errors/get_api_v1_incidents_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.incidents.get_api_v1_incidents_incident_id_rca_report

- **Route**: `GET /api/v1/incidents/{incidentId}/rcaReport`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_incidents_incident_id_rca_report(incident_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `incident_id`
- **Params**: `incident_id` — path `incidentId`
- **Returns (parsed)**: `PublicApiRcaReportContentDto`
- **Returns (raw)**: `ApiResult[PublicApiRcaReportContentDto, GetApiV1IncidentsIncidentIdRcaReportErrorBody]`
- **Error**: `GetApiV1IncidentsIncidentIdRcaReportErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiRcaReportContentDto` | `soda/models/public_api_rca_report_content_dto.py` |
| `GetApiV1IncidentsIncidentIdRcaReportErrorBody` | `soda/errors/get_api_v1_incidents_incident_id_rca_report_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.incidents.post_api_v1_incidents

- **Route**: `POST /api/v1/incidents`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_incidents(body: PublicApiCreateIncidentDto | PublicApiCreateIncidentDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `IncidentContentDto`
- **Returns (raw)**: `ApiResult[IncidentContentDto, PostApiV1IncidentsErrorBody]`
- **Error**: `PostApiV1IncidentsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateIncidentDto` | `soda/models/public_api_create_incident_dto.py` |
| `PublicApiCreateIncidentDtoDict` | `soda/models/public_api_create_incident_dto.py` |
| `IncidentContentDto` | `soda/models/incident_content_dto.py` |
| `PostApiV1IncidentsErrorBody` | `soda/errors/post_api_v1_incidents_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.incidents.post_api_v1_incidents_incident_id

- **Route**: `POST /api/v1/incidents/{incidentId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_incidents_incident_id(incident_id: str, body: PublicApiUpdateIncidentDto | PublicApiUpdateIncidentDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `incident_id`, `body`
- **Params**: `incident_id` — path `incidentId` · `body` — JSON body
- **Returns (parsed)**: `IncidentContentDto`
- **Returns (raw)**: `ApiResult[IncidentContentDto, PostApiV1IncidentsIncidentIdErrorBody]`
- **Error**: `PostApiV1IncidentsIncidentIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateIncidentDto` | `soda/models/public_api_update_incident_dto.py` |
| `PublicApiUpdateIncidentDtoDict` | `soda/models/public_api_update_incident_dto.py` |
| `IncidentContentDto` | `soda/models/incident_content_dto.py` |
| `PostApiV1IncidentsIncidentIdErrorBody` | `soda/errors/post_api_v1_incidents_incident_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.incidents.post_api_v1_incidents_incident_id_rca_report

- **Route**: `POST /api/v1/incidents/{incidentId}/rcaReport`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_incidents_incident_id_rca_report(incident_id: str, body: PublicApiRcaReportDto | PublicApiRcaReportDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `incident_id`, `body`
- **Params**: `incident_id` — path `incidentId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiRcaReportContentDto`
- **Returns (raw)**: `ApiResult[PublicApiRcaReportContentDto, PostApiV1IncidentsIncidentIdRcaReportErrorBody]`
- **Error**: `PostApiV1IncidentsIncidentIdRcaReportErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiRcaReportDto` | `soda/models/public_api_rca_report_dto.py` |
| `PublicApiRcaReportDtoDict` | `soda/models/public_api_rca_report_dto.py` |
| `PublicApiRcaReportContentDto` | `soda/models/public_api_rca_report_content_dto.py` |
| `PostApiV1IncidentsIncidentIdRcaReportErrorBody` | `soda/errors/post_api_v1_incidents_incident_id_rca_report_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

