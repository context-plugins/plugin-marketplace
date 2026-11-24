<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `zillapi/apis/jobs.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.jobs.get_job

- **Route**: `GET /v1/jobs/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_job(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `V1JobsResponse1`
- **Returns (raw)**: `ApiResult[V1JobsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1JobsResponse1` | `zillapi/models/v1_jobs_response1.py` |

### client.jobs.get_job_results

- **Route**: `GET /v1/jobs/{id}/results`
- **Auth**: `bearer_auth`
- **Signature**: `def get_job_results(id_: UUID, *, limit: int | None = 100, offset: int | None = 0, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `format_` — query `format`
- **Returns (parsed)**: `V1JobsResultsResponse`
- **Returns (raw)**: `ApiResult[V1JobsResultsResponse, GetJobResultsErrorBody]`
- **Error**: `GetJobResultsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `zillapi/models/enums/format.py` |
| `V1JobsResultsResponse` | `zillapi/models/v1_jobs_results_response.py` |
| `GetJobResultsErrorBody` | `zillapi/errors/get_job_results_error.py` |
| `ApiErrorModel` | `zillapi/models/api_error_model.py` |

### client.jobs.list_jobs

- **Route**: `GET /v1/jobs`
- **Auth**: `bearer_auth`
- **Signature**: `def list_jobs(*, status: StatusZillapiZillowPropertyDataJobsApiOrStr | None = None, type_: TypeOrStr | None = None, since: RFC3339DateTime | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `type_` — query `type` · `since` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `V1JobsResponse`
- **Returns (raw)**: `ApiResult[V1JobsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusZillapiZillowPropertyDataJobsApiOrStr` | `zillapi/models/enums/status_zillapi_zillow_property_data_jobs_api.py` |
| `TypeOrStr` | `zillapi/models/enums/type.py` |
| `V1JobsResponse` | `zillapi/models/v1_jobs_response.py` |

