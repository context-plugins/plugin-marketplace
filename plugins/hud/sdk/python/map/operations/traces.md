<!-- Generated file — do not edit; regenerated with the SDK. -->

# Traces — operations

Accessor: `client.traces` · Source: `hud/apis/traces.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.traces.batch_validate_traces_v2_trace_batch_validate_post

- **Route**: `POST /v2/trace/batch-validate`
- **Signature**: `def batch_validate_traces_v2_trace_batch_validate_post(body: TraceBatchValidateRequest | TraceBatchValidateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TraceBatchValidateResponse`
- **Returns (raw)**: `ApiResult[TraceBatchValidateResponse, BatchValidateTracesV2TraceBatchValidatePostErrorBody]`
- **Error**: `BatchValidateTracesV2TraceBatchValidatePostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceBatchValidateRequest` | `hud/models/trace_batch_validate_request.py` |
| `TraceBatchValidateRequestDict` | `hud/models/trace_batch_validate_request.py` |
| `TraceBatchValidateResponse` | `hud/models/trace_batch_validate_response.py` |
| `BatchValidateTracesV2TraceBatchValidatePostErrorBody` | `hud/errors/batch_validate_traces_v2_trace_batch_validate_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.get_trace_analysis_context_v2_trace_trace_id_analysis_context_get

- **Route**: `GET /v2/trace/{trace_id}/analysis-context`
- **Signature**: `def get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(trace_id: UUID, *, include_spans: bool | None = True, include_env_logs: bool | None = True, include_worker_logs: bool | None = True, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path · `include_spans` — query · `include_env_logs` — query · `include_worker_logs` — query
- **Returns (parsed)**: `TraceAnalysisContextResponse`
- **Returns (raw)**: `ApiResult[TraceAnalysisContextResponse, GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody]`
- **Error**: `GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceAnalysisContextResponse` | `hud/models/trace_analysis_context_response.py` |
| `GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody` | `hud/errors/get_trace_analysis_context_v2_trace_trace_id_analysis_context_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get

- **Route**: `GET /v2/trace/{trace_id}/analysis-prompt`
- **Signature**: `def get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `TraceAnalysisPromptResponse`
- **Returns (raw)**: `ApiResult[TraceAnalysisPromptResponse, GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody]`
- **Error**: `GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceAnalysisPromptResponse` | `hud/models/trace_analysis_prompt_response.py` |
| `GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody` | `hud/errors/get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.get_trace_env_logs_v2_trace_trace_id_env_logs_get

- **Route**: `GET /v2/trace/{trace_id}/env-logs`
- **Signature**: `def get_trace_env_logs_v2_trace_trace_id_env_logs_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `EnvLogsResponse`
- **Returns (raw)**: `ApiResult[EnvLogsResponse, GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody]`
- **Error**: `GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvLogsResponse` | `hud/models/env_logs_response.py` |
| `GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody` | `hud/errors/get_trace_env_logs_v2_trace_trace_id_env_logs_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.get_trace_events_v2_trace_trace_id_events_get

- **Route**: `GET /v2/trace/{trace_id}/events`
- **Signature**: `def get_trace_events_v2_trace_trace_id_events_get(trace_id: UUID, *, since_seq: int | None = -1, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path · `since_seq` — query · `limit` — query
- **Returns (parsed)**: `TraceEventsResponse`
- **Returns (raw)**: `ApiResult[TraceEventsResponse, GetTraceEventsV2TraceTraceIdEventsGetErrorBody]`
- **Error**: `GetTraceEventsV2TraceTraceIdEventsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceEventsResponse` | `hud/models/trace_events_response.py` |
| `GetTraceEventsV2TraceTraceIdEventsGetErrorBody` | `hud/errors/get_trace_events_v2_trace_trace_id_events_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.get_trace_info_v2_trace_trace_id_info_get

- **Route**: `GET /v2/trace/{trace_id}/info`
- **Signature**: `def get_trace_info_v2_trace_trace_id_info_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `TraceInfoResponse`
- **Returns (raw)**: `ApiResult[TraceInfoResponse, GetTraceInfoV2TraceTraceIdInfoGetErrorBody]`
- **Error**: `GetTraceInfoV2TraceTraceIdInfoGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceInfoResponse` | `hud/models/trace_info_response.py` |
| `GetTraceInfoV2TraceTraceIdInfoGetErrorBody` | `hud/errors/get_trace_info_v2_trace_trace_id_info_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.get_trace_logs_v2_trace_trace_id_logs_get

- **Route**: `GET /v2/trace/{trace_id}/logs`
- **Signature**: `def get_trace_logs_v2_trace_trace_id_logs_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `TraceLogsResponse`
- **Returns (raw)**: `ApiResult[TraceLogsResponse, GetTraceLogsV2TraceTraceIdLogsGetErrorBody]`
- **Error**: `GetTraceLogsV2TraceTraceIdLogsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceLogsResponse` | `hud/models/trace_logs_response.py` |
| `GetTraceLogsV2TraceTraceIdLogsGetErrorBody` | `hud/errors/get_trace_logs_v2_trace_trace_id_logs_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.get_trace_usage_v2_trace_trace_id_usage_get

- **Route**: `GET /v2/trace/{trace_id}/usage`
- **Signature**: `def get_trace_usage_v2_trace_trace_id_usage_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `TraceUsageBreakdown`
- **Returns (raw)**: `ApiResult[TraceUsageBreakdown, GetTraceUsageV2TraceTraceIdUsageGetErrorBody]`
- **Error**: `GetTraceUsageV2TraceTraceIdUsageGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceUsageBreakdown` | `hud/models/trace_usage_breakdown.py` |
| `GetTraceUsageV2TraceTraceIdUsageGetErrorBody` | `hud/errors/get_trace_usage_v2_trace_trace_id_usage_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.get_trace_v2_trace_trace_id_get

- **Route**: `GET /v2/trace/{trace_id}`
- **Signature**: `def get_trace_v2_trace_trace_id_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `TraceDetailResponse`
- **Returns (raw)**: `ApiResult[TraceDetailResponse, GetTraceV2TraceTraceIdGetErrorBody]`
- **Error**: `GetTraceV2TraceTraceIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceDetailResponse` | `hud/models/trace_detail_response.py` |
| `GetTraceV2TraceTraceIdGetErrorBody` | `hud/errors/get_trace_v2_trace_trace_id_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.list_related_traces_v2_trace_trace_id_related_get

- **Route**: `GET /v2/trace/{trace_id}/related`
- **Signature**: `def list_related_traces_v2_trace_trace_id_related_get(trace_id: UUID, kind: RelatedKind1OrStr, *, limit: int | None = 50, scope_to_job: bool | None = False, status: str | None = None, order: RelatedOrder1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`, `kind`
- **Params**: `trace_id` — path · `kind` — query · `limit` — query · `scope_to_job` — query · `status` — query · `order` — query
- **Returns (parsed)**: `list[TraceThumbnail]`
- **Returns (raw)**: `ApiResult[list[TraceThumbnail], ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody]`
- **Error**: `ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RelatedKind1OrStr` | `hud/models/enums/related_kind1.py` |
| `RelatedOrder1OrStr` | `hud/models/enums/related_order1.py` |
| `TraceThumbnail` | `hud/models/trace_thumbnail.py` |
| `ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody` | `hud/errors/list_related_traces_v2_trace_trace_id_related_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.publish_trace_v2_trace_trace_id_publish_post

- **Route**: `POST /v2/trace/{trace_id}/publish`
- **Signature**: `def publish_trace_v2_trace_trace_id_publish_post(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `PublishTraceResponse`
- **Returns (raw)**: `ApiResult[PublishTraceResponse, PublishTraceV2TraceTraceIdPublishPostErrorBody]`
- **Error**: `PublishTraceV2TraceTraceIdPublishPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublishTraceResponse` | `hud/models/publish_trace_response.py` |
| `PublishTraceV2TraceTraceIdPublishPostErrorBody` | `hud/errors/publish_trace_v2_trace_trace_id_publish_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.unpublish_trace_v2_trace_trace_id_publish_delete

- **Route**: `DELETE /v2/trace/{trace_id}/publish`
- **Signature**: `def unpublish_trace_v2_trace_trace_id_publish_delete(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `StatusResponse`
- **Returns (raw)**: `ApiResult[StatusResponse, UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody]`
- **Error**: `UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusResponse` | `hud/models/status_response.py` |
| `UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody` | `hud/errors/unpublish_trace_v2_trace_trace_id_publish_delete_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.traces.update_trace_v2_trace_trace_id_patch

- **Route**: `PATCH /v2/trace/{trace_id}`
- **Signature**: `def update_trace_v2_trace_trace_id_patch(trace_id: UUID, body: TraceUpdateRequest | TraceUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`, `body`
- **Params**: `trace_id` — path · `body` — JSON body
- **Returns (parsed)**: `TraceInfoResponse`
- **Returns (raw)**: `ApiResult[TraceInfoResponse, UpdateTraceV2TraceTraceIdPatchErrorBody]`
- **Error**: `UpdateTraceV2TraceTraceIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceUpdateRequest` | `hud/models/trace_update_request.py` |
| `TraceUpdateRequestDict` | `hud/models/trace_update_request.py` |
| `TraceInfoResponse` | `hud/models/trace_info_response.py` |
| `UpdateTraceV2TraceTraceIdPatchErrorBody` | `hud/errors/update_trace_v2_trace_trace_id_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

