<!-- Generated file — do not edit; regenerated with the SDK. -->

# FindAll — operations

Accessor: `client.find_all` · Source: `parallel/apis/find_all.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.find_all.cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post

- **Route**: `POST /v1beta/findall/runs/{findall_id}/cancel`
- **Auth**: `api_key_auth`
- **Signature**: `def cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `findall_id`
- **Params**: `findall_id` — path · `parallel_beta` — header `parallel-beta`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody]`
- **Error**: `CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 409] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody` | `parallel/errors/cancel_findall_run_v1_beta_findall_runs_findall_id_cancel_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.find_all.enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post

- **Route**: `POST /v1beta/findall/runs/{findall_id}/enrich`
- **Auth**: `api_key_auth`
- **Signature**: `def enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(findall_id: str, body: FindAllEnrichInput | FindAllEnrichInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `findall_id`, `body`
- **Params**: `findall_id` — path · `parallel_beta` — header `parallel-beta` · `body` — JSON body
- **Returns (parsed)**: `FindAllSchema`
- **Returns (raw)**: `ApiResult[FindAllSchema, EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody]`
- **Error**: `EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindAllEnrichInput` | `parallel/models/find_all_enrich_input.py` |
| `FindAllEnrichInputDict` | `parallel/models/find_all_enrich_input.py` |
| `FindAllSchema` | `parallel/models/find_all_schema.py` |
| `EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody` | `parallel/errors/enrich_findall_run_v1_beta_findall_runs_findall_id_enrich_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.find_all.extend_findall_run_v1beta_findall_runs_findall_id_extend_post

- **Route**: `POST /v1beta/findall/runs/{findall_id}/extend`
- **Auth**: `api_key_auth`
- **Signature**: `def extend_findall_run_v1beta_findall_runs_findall_id_extend_post(findall_id: str, body: FindAllExtendInput | FindAllExtendInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `findall_id`, `body`
- **Params**: `findall_id` — path · `parallel_beta` — header `parallel-beta` · `body` — JSON body
- **Returns (parsed)**: `FindAllSchema`
- **Returns (raw)**: `ApiResult[FindAllSchema, ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody]`
- **Error**: `ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindAllExtendInput` | `parallel/models/find_all_extend_input.py` |
| `FindAllExtendInputDict` | `parallel/models/find_all_extend_input.py` |
| `FindAllSchema` | `parallel/models/find_all_schema.py` |
| `ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody` | `parallel/errors/extend_findall_run_v1_beta_findall_runs_findall_id_extend_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.find_all.findall_entity_search_v1beta_findall_entity_search_post

- **Route**: `POST /v1beta/findall/entity-search`
- **Auth**: `api_key_auth`
- **Signature**: `def findall_entity_search_v1beta_findall_entity_search_post(body: FindAllEntitySearchRequest | FindAllEntitySearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `FindAllEntitySearchResponse`
- **Returns (raw)**: `ApiResult[FindAllEntitySearchResponse, FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody]`
- **Error**: `FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindAllEntitySearchRequest` | `parallel/models/find_all_entity_search_request.py` |
| `FindAllEntitySearchRequestDict` | `parallel/models/find_all_entity_search_request.py` |
| `FindAllEntitySearchResponse` | `parallel/models/find_all_entity_search_response.py` |
| `FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody` | `parallel/errors/findall_entity_search_v1_beta_findall_entity_search_post_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.find_all.findall_runs_v1_get_v1beta_findall_runs_findall_id_get

- **Route**: `GET /v1beta/findall/runs/{findall_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def findall_runs_v1_get_v1beta_findall_runs_findall_id_get(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `findall_id`
- **Params**: `findall_id` — path · `parallel_beta` — header `parallel-beta`
- **Returns (parsed)**: `FindAllRun`
- **Returns (raw)**: `ApiResult[FindAllRun, FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody]`
- **Error**: `FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindAllRun` | `parallel/models/find_all_run.py` |
| `FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody` | `parallel/errors/findall_runs_v1_get_v1_beta_findall_runs_findall_id_get_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.find_all.findall_runs_v1_v1beta_findall_runs_post

- **Route**: `POST /v1beta/findall/runs`
- **Auth**: `api_key_auth`
- **Signature**: `def findall_runs_v1_v1beta_findall_runs_post(body: FindAllRunInput | FindAllRunInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `parallel_beta` — header `parallel-beta` · `body` — JSON body
- **Returns (parsed)**: `FindAllRun`
- **Returns (raw)**: `ApiResult[FindAllRun, FindallRunsV1V1BetaFindallRunsPostErrorBody]`
- **Error**: `FindallRunsV1V1BetaFindallRunsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [402, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindAllRunInput` | `parallel/models/find_all_run_input.py` |
| `FindAllRunInputDict` | `parallel/models/find_all_run_input.py` |
| `FindAllRun` | `parallel/models/find_all_run.py` |
| `FindallRunsV1V1BetaFindallRunsPostErrorBody` | `parallel/errors/findall_runs_v1_v1_beta_findall_runs_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.find_all.get_findall_events_v1beta_findall_runs_findall_id_events_get

- **Route**: `GET /v1beta/findall/runs/{findall_id}/events`
- **Auth**: `api_key_auth`
- **Signature**: `def get_findall_events_v1beta_findall_runs_findall_id_events_get(findall_id: str, *, last_event_id: str | None = None, timeout: float | None = None, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `findall_id`
- **Params**: `findall_id` — path · `last_event_id` — query · `timeout` — query · `parallel_beta` — header `parallel-beta`
- **Returns (parsed)**: `EventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet]`
- **Returns (raw)**: `ApiResult[EventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet], GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody]`
- **Error**: `GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet` | `parallel/models/unions/response200_get_findall_events_v1_beta_findall_runs_findall_id_events_get.py` |
| `GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody` | `parallel/errors/get_findall_events_v1_beta_findall_runs_findall_id_events_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.find_all.get_findall_result_v1beta_findall_runs_findall_id_result_get

- **Route**: `GET /v1beta/findall/runs/{findall_id}/result`
- **Auth**: `api_key_auth`
- **Signature**: `def get_findall_result_v1beta_findall_runs_findall_id_result_get(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `findall_id`
- **Params**: `findall_id` — path · `parallel_beta` — header `parallel-beta`
- **Returns (parsed)**: `FindAllRunResult`
- **Returns (raw)**: `ApiResult[FindAllRunResult, GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody]`
- **Error**: `GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindAllRunResult` | `parallel/models/find_all_run_result.py` |
| `GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody` | `parallel/errors/get_findall_result_v1_beta_findall_runs_findall_id_result_get_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.find_all.get_findall_schema_v1beta_findall_runs_findall_id_schema_get

- **Route**: `GET /v1beta/findall/runs/{findall_id}/schema`
- **Auth**: `api_key_auth`
- **Signature**: `def get_findall_schema_v1beta_findall_runs_findall_id_schema_get(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `findall_id`
- **Params**: `findall_id` — path · `parallel_beta` — header `parallel-beta`
- **Returns (parsed)**: `FindAllSchema`
- **Returns (raw)**: `ApiResult[FindAllSchema, GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody]`
- **Error**: `GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindAllSchema` | `parallel/models/find_all_schema.py` |
| `GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody` | `parallel/errors/get_findall_schema_v1_beta_findall_runs_findall_id_schema_get_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.find_all.ingest_findall_run_v1beta_findall_ingest_post

- **Route**: `POST /v1beta/findall/ingest`
- **Auth**: `api_key_auth`
- **Signature**: `def ingest_findall_run_v1beta_findall_ingest_post(body: IngestInput | IngestInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `parallel_beta` — header `parallel-beta` · `body` — JSON body
- **Returns (parsed)**: `FindAllSchema`
- **Returns (raw)**: `ApiResult[FindAllSchema, IngestFindallRunV1BetaFindallIngestPostErrorBody]`
- **Error**: `IngestFindallRunV1BetaFindallIngestPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IngestInput` | `parallel/models/ingest_input.py` |
| `IngestInputDict` | `parallel/models/ingest_input.py` |
| `FindAllSchema` | `parallel/models/find_all_schema.py` |
| `IngestFindallRunV1BetaFindallIngestPostErrorBody` | `parallel/errors/ingest_findall_run_v1_beta_findall_ingest_post_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

