<!-- Generated file — do not edit; regenerated with the SDK. -->

# Traces — operations

Accessor: `client.Traces` · Source: `src/Hud/Api/Traces.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchValidateTracesV2TraceBatchValidatePost

- **Signature**: `BatchValidateTracesV2TraceBatchValidatePost(BatchValidateTracesV2TraceBatchValidatePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TraceBatchValidateResponse`
- **Error**: `ApiException<BatchValidateTracesV2TraceBatchValidatePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchValidateTracesV2TraceBatchValidatePostRequest` | `src/Hud/Requests/Traces/BatchValidateTracesV2TraceBatchValidatePostRequest.cs` |
| `TraceBatchValidateRequest` | `src/Hud/Models/TraceBatchValidateRequest.cs` |
| `TraceBatchValidateResponse` | `src/Hud/Models/TraceBatchValidateResponse.cs` |
| `BatchValidateTracesV2TraceBatchValidatePostError` | `src/Hud/Errors/BatchValidateTracesV2TraceBatchValidatePostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGet

- **Signature**: `GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGet(GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Query params (wire ← C#)**: `include_spans` ← `IncludeSpans`, `include_env_logs` ← `IncludeEnvLogs`, `include_worker_logs` ← `IncludeWorkerLogs`
- **Returns**: `TraceAnalysisContextResponse`
- **Error**: `ApiException<GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest` | `src/Hud/Requests/Traces/GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest.cs` |
| `TraceAnalysisContextResponse` | `src/Hud/Models/TraceAnalysisContextResponse.cs` |
| `GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError` | `src/Hud/Errors/GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet

- **Signature**: `GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet(GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `TraceAnalysisPromptResponse`
- **Error**: `ApiException<GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest` | `src/Hud/Requests/Traces/GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest.cs` |
| `TraceAnalysisPromptResponse` | `src/Hud/Models/TraceAnalysisPromptResponse.cs` |
| `GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError` | `src/Hud/Errors/GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTraceEnvLogsV2TraceTraceIdEnvLogsGet

- **Signature**: `GetTraceEnvLogsV2TraceTraceIdEnvLogsGet(GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `EnvLogsResponse`
- **Error**: `ApiException<GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest` | `src/Hud/Requests/Traces/GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest.cs` |
| `EnvLogsResponse` | `src/Hud/Models/EnvLogsResponse.cs` |
| `GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError` | `src/Hud/Errors/GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTraceEventsV2TraceTraceIdEventsGet

- **Signature**: `GetTraceEventsV2TraceTraceIdEventsGet(GetTraceEventsV2TraceTraceIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Query params (wire ← C#)**: `since_seq` ← `SinceSeq`, `limit` ← `Limit`
- **Returns**: `TraceEventsResponse`
- **Error**: `ApiException<GetTraceEventsV2TraceTraceIdEventsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceEventsV2TraceTraceIdEventsGetRequest` | `src/Hud/Requests/Traces/GetTraceEventsV2TraceTraceIdEventsGetRequest.cs` |
| `TraceEventsResponse` | `src/Hud/Models/TraceEventsResponse.cs` |
| `GetTraceEventsV2TraceTraceIdEventsGetError` | `src/Hud/Errors/GetTraceEventsV2TraceTraceIdEventsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTraceInfoV2TraceTraceIdInfoGet

- **Signature**: `GetTraceInfoV2TraceTraceIdInfoGet(GetTraceInfoV2TraceTraceIdInfoGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `TraceInfoResponse`
- **Error**: `ApiException<GetTraceInfoV2TraceTraceIdInfoGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceInfoV2TraceTraceIdInfoGetRequest` | `src/Hud/Requests/Traces/GetTraceInfoV2TraceTraceIdInfoGetRequest.cs` |
| `TraceInfoResponse` | `src/Hud/Models/TraceInfoResponse.cs` |
| `GetTraceInfoV2TraceTraceIdInfoGetError` | `src/Hud/Errors/GetTraceInfoV2TraceTraceIdInfoGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTraceLogsV2TraceTraceIdLogsGet

- **Signature**: `GetTraceLogsV2TraceTraceIdLogsGet(GetTraceLogsV2TraceTraceIdLogsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `TraceLogsResponse`
- **Error**: `ApiException<GetTraceLogsV2TraceTraceIdLogsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceLogsV2TraceTraceIdLogsGetRequest` | `src/Hud/Requests/Traces/GetTraceLogsV2TraceTraceIdLogsGetRequest.cs` |
| `TraceLogsResponse` | `src/Hud/Models/TraceLogsResponse.cs` |
| `GetTraceLogsV2TraceTraceIdLogsGetError` | `src/Hud/Errors/GetTraceLogsV2TraceTraceIdLogsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTraceUsageV2TraceTraceIdUsageGet

- **Signature**: `GetTraceUsageV2TraceTraceIdUsageGet(GetTraceUsageV2TraceTraceIdUsageGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `TraceUsageBreakdown`
- **Error**: `ApiException<GetTraceUsageV2TraceTraceIdUsageGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceUsageV2TraceTraceIdUsageGetRequest` | `src/Hud/Requests/Traces/GetTraceUsageV2TraceTraceIdUsageGetRequest.cs` |
| `TraceUsageBreakdown` | `src/Hud/Models/TraceUsageBreakdown.cs` |
| `GetTraceUsageV2TraceTraceIdUsageGetError` | `src/Hud/Errors/GetTraceUsageV2TraceTraceIdUsageGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTraceV2TraceTraceIdGet

- **Signature**: `GetTraceV2TraceTraceIdGet(GetTraceV2TraceTraceIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `TraceDetailResponse`
- **Error**: `ApiException<GetTraceV2TraceTraceIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceV2TraceTraceIdGetRequest` | `src/Hud/Requests/Traces/GetTraceV2TraceTraceIdGetRequest.cs` |
| `TraceDetailResponse` | `src/Hud/Models/TraceDetailResponse.cs` |
| `GetTraceV2TraceTraceIdGetError` | `src/Hud/Errors/GetTraceV2TraceTraceIdGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListRelatedTracesV2TraceTraceIdRelatedGet

- **Signature**: `ListRelatedTracesV2TraceTraceIdRelatedGet(ListRelatedTracesV2TraceTraceIdRelatedGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`, `Kind`
- **Query params (wire ← C#)**: `kind` ← `Kind`, `limit` ← `Limit`, `scope_to_job` ← `ScopeToJob`, `status` ← `Status`, `order` ← `Order`
- **Returns**: `IReadOnlyList<TraceThumbnail>`
- **Error**: `ApiException<ListRelatedTracesV2TraceTraceIdRelatedGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRelatedTracesV2TraceTraceIdRelatedGetRequest` | `src/Hud/Requests/Traces/ListRelatedTracesV2TraceTraceIdRelatedGetRequest.cs` |
| `RelatedKind1` | `src/Hud/Models/Enums/RelatedKind1.cs` |
| `Status21` | `src/Hud/Models/AnyOf/Status21.cs` |
| `RelatedOrder1` | `src/Hud/Models/Enums/RelatedOrder1.cs` |
| `TraceThumbnail` | `src/Hud/Models/TraceThumbnail.cs` |
| `ListRelatedTracesV2TraceTraceIdRelatedGetError` | `src/Hud/Errors/ListRelatedTracesV2TraceTraceIdRelatedGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### PublishTraceV2TraceTraceIdPublishPost

- **Signature**: `PublishTraceV2TraceTraceIdPublishPost(PublishTraceV2TraceTraceIdPublishPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `PublishTraceResponse`
- **Error**: `ApiException<PublishTraceV2TraceTraceIdPublishPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublishTraceV2TraceTraceIdPublishPostRequest` | `src/Hud/Requests/Traces/PublishTraceV2TraceTraceIdPublishPostRequest.cs` |
| `PublishTraceResponse` | `src/Hud/Models/PublishTraceResponse.cs` |
| `PublishTraceV2TraceTraceIdPublishPostError` | `src/Hud/Errors/PublishTraceV2TraceTraceIdPublishPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UnpublishTraceV2TraceTraceIdPublishDelete

- **Signature**: `UnpublishTraceV2TraceTraceIdPublishDelete(UnpublishTraceV2TraceTraceIdPublishDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`
- **Returns**: `StatusResponse`
- **Error**: `ApiException<UnpublishTraceV2TraceTraceIdPublishDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnpublishTraceV2TraceTraceIdPublishDeleteRequest` | `src/Hud/Requests/Traces/UnpublishTraceV2TraceTraceIdPublishDeleteRequest.cs` |
| `StatusResponse` | `src/Hud/Models/StatusResponse.cs` |
| `UnpublishTraceV2TraceTraceIdPublishDeleteError` | `src/Hud/Errors/UnpublishTraceV2TraceTraceIdPublishDeleteError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UpdateTraceV2TraceTraceIdPatch

- **Signature**: `UpdateTraceV2TraceTraceIdPatch(UpdateTraceV2TraceTraceIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TraceId`, `Body`
- **Returns**: `TraceInfoResponse`
- **Error**: `ApiException<UpdateTraceV2TraceTraceIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTraceV2TraceTraceIdPatchRequest` | `src/Hud/Requests/Traces/UpdateTraceV2TraceTraceIdPatchRequest.cs` |
| `TraceUpdateRequest` | `src/Hud/Models/TraceUpdateRequest.cs` |
| `TraceInfoResponse` | `src/Hud/Models/TraceInfoResponse.cs` |
| `UpdateTraceV2TraceTraceIdPatchError` | `src/Hud/Errors/UpdateTraceV2TraceTraceIdPatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

