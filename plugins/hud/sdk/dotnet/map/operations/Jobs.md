<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.Jobs` · Source: `src/Hud/Api/Jobs.cs` · 21 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EnrichJobsV2JobsEnrichPost

- **Signature**: `EnrichJobsV2JobsEnrichPost(EnrichJobsV2JobsEnrichPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EnrichJobsResponse`
- **Error**: `ApiException<EnrichJobsV2JobsEnrichPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnrichJobsV2JobsEnrichPostRequest` | `src/Hud/Requests/Jobs/EnrichJobsV2JobsEnrichPostRequest.cs` |
| `EnrichJobsResponse` | `src/Hud/Models/EnrichJobsResponse.cs` |
| `EnrichJobsV2JobsEnrichPostError` | `src/Hud/Errors/EnrichJobsV2JobsEnrichPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### FinishImportedJobV2JobsImportJobIdFinishPost

- **Signature**: `FinishImportedJobV2JobsImportJobIdFinishPost(FinishImportedJobV2JobsImportJobIdFinishPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `JobImportFinishResponse`
- **Error**: `ApiException<FinishImportedJobV2JobsImportJobIdFinishPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FinishImportedJobV2JobsImportJobIdFinishPostRequest` | `src/Hud/Requests/Jobs/FinishImportedJobV2JobsImportJobIdFinishPostRequest.cs` |
| `JobImportFinishResponse` | `src/Hud/Models/JobImportFinishResponse.cs` |
| `FinishImportedJobV2JobsImportJobIdFinishPostError` | `src/Hud/Errors/FinishImportedJobV2JobsImportJobIdFinishPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost

- **Signature**: `FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost(FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`, `TraceId`, `Body`
- **Returns**: `JobImportTraceResultResponse`
- **Error**: `ApiException<FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest` | `src/Hud/Requests/Jobs/FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest.cs` |
| `JobImportTraceResult` | `src/Hud/Models/JobImportTraceResult.cs` |
| `JobImportTraceResultResponse` | `src/Hud/Models/JobImportTraceResultResponse.cs` |
| `FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError` | `src/Hud/Errors/FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetJobChartDataV2JobsJobIdChartDataGet

- **Signature**: `GetJobChartDataV2JobsJobIdChartDataGet(GetJobChartDataV2JobsJobIdChartDataGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Query params (wire ← C#)**: `limit` ← `Limit`
- **Returns**: `ChartDataResponse`
- **Error**: `ApiException<GetJobChartDataV2JobsJobIdChartDataGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobChartDataV2JobsJobIdChartDataGetRequest` | `src/Hud/Requests/Jobs/GetJobChartDataV2JobsJobIdChartDataGetRequest.cs` |
| `ChartDataResponse` | `src/Hud/Models/ChartDataResponse.cs` |
| `GetJobChartDataV2JobsJobIdChartDataGetError` | `src/Hud/Errors/GetJobChartDataV2JobsJobIdChartDataGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetJobEntityLinksV2JobsJobIdEntityLinksGet

- **Signature**: `GetJobEntityLinksV2JobsJobIdEntityLinksGet(GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `JobEntityLinksResponse`
- **Error**: `ApiException<GetJobEntityLinksV2JobsJobIdEntityLinksGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest` | `src/Hud/Requests/Jobs/GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest.cs` |
| `JobEntityLinksResponse` | `src/Hud/Models/JobEntityLinksResponse.cs` |
| `GetJobEntityLinksV2JobsJobIdEntityLinksGetError` | `src/Hud/Errors/GetJobEntityLinksV2JobsJobIdEntityLinksGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGet

- **Signature**: `GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGet(GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `TasksetCoverageResponse`
- **Error**: `ApiException<GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest` | `src/Hud/Requests/Jobs/GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest.cs` |
| `TasksetCoverageResponse` | `src/Hud/Models/TasksetCoverageResponse.cs` |
| `GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError` | `src/Hud/Errors/GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetJobUsageV2JobsJobIdUsageGet

- **Signature**: `GetJobUsageV2JobsJobIdUsageGet(GetJobUsageV2JobsJobIdUsageGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `JobUsageResponse`
- **Error**: `ApiException<GetJobUsageV2JobsJobIdUsageGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobUsageV2JobsJobIdUsageGetRequest` | `src/Hud/Requests/Jobs/GetJobUsageV2JobsJobIdUsageGetRequest.cs` |
| `JobUsageResponse` | `src/Hud/Models/JobUsageResponse.cs` |
| `GetJobUsageV2JobsJobIdUsageGetError` | `src/Hud/Errors/GetJobUsageV2JobsJobIdUsageGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetJobV2JobsJobIdGet

- **Signature**: `GetJobV2JobsJobIdGet(GetJobV2JobsJobIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `JobResponse`
- **Error**: `ApiException<GetJobV2JobsJobIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobV2JobsJobIdGetRequest` | `src/Hud/Requests/Jobs/GetJobV2JobsJobIdGetRequest.cs` |
| `JobResponse` | `src/Hud/Models/JobResponse.cs` |
| `GetJobV2JobsJobIdGetError` | `src/Hud/Errors/GetJobV2JobsJobIdGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ImportJobV2JobsImportPost

- **Signature**: `ImportJobV2JobsImportPost(ImportJobV2JobsImportPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `JobImportResponse`
- **Error**: `ApiException<ImportJobV2JobsImportPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImportJobV2JobsImportPostRequest` | `src/Hud/Requests/Jobs/ImportJobV2JobsImportPostRequest.cs` |
| `JobImportRequest` | `src/Hud/Models/JobImportRequest.cs` |
| `JobImportResponse` | `src/Hud/Models/JobImportResponse.cs` |
| `ImportJobV2JobsImportPostError` | `src/Hud/Errors/ImportJobV2JobsImportPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### InvalidateJobV2JobsJobIdInvalidatePost

- **Signature**: `InvalidateJobV2JobsJobIdInvalidatePost(InvalidateJobV2JobsJobIdInvalidatePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `BatchValidateResponse`
- **Error**: `ApiException<InvalidateJobV2JobsJobIdInvalidatePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InvalidateJobV2JobsJobIdInvalidatePostRequest` | `src/Hud/Requests/Jobs/InvalidateJobV2JobsJobIdInvalidatePostRequest.cs` |
| `BatchValidateResponse` | `src/Hud/Models/BatchValidateResponse.cs` |
| `InvalidateJobV2JobsJobIdInvalidatePostError` | `src/Hud/Errors/InvalidateJobV2JobsJobIdInvalidatePostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### JobSummaryV2JobsJobIdSummaryGet

- **Signature**: `JobSummaryV2JobsJobIdSummaryGet(JobSummaryV2JobsJobIdSummaryGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `JobSummary`
- **Error**: `ApiException<JobSummaryV2JobsJobIdSummaryGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobSummaryV2JobsJobIdSummaryGetRequest` | `src/Hud/Requests/Jobs/JobSummaryV2JobsJobIdSummaryGetRequest.cs` |
| `JobSummary` | `src/Hud/Models/JobSummary.cs` |
| `JobSummaryV2JobsJobIdSummaryGetError` | `src/Hud/Errors/JobSummaryV2JobsJobIdSummaryGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListActiveJobsV2JobsActiveGet

- **Signature**: `ListActiveJobsV2JobsActiveGet(ListActiveJobsV2JobsActiveGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `IReadOnlyList<JobResponse>`
- **Error**: `ApiException<ListActiveJobsV2JobsActiveGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListActiveJobsV2JobsActiveGetRequest` | `src/Hud/Requests/Jobs/ListActiveJobsV2JobsActiveGetRequest.cs` |
| `JobResponse` | `src/Hud/Models/JobResponse.cs` |
| `ListActiveJobsV2JobsActiveGetError` | `src/Hud/Errors/ListActiveJobsV2JobsActiveGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListEnrichedJobsV2JobsEnrichedGet

- **Signature**: `ListEnrichedJobsV2JobsEnrichedGet(ListEnrichedJobsV2JobsEnrichedGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TasksetId`
- **Query params (wire ← C#)**: `taskset_id` ← `TasksetId`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TasksetJobsEnrichedResponse`
- **Error**: `ApiException<ListEnrichedJobsV2JobsEnrichedGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEnrichedJobsV2JobsEnrichedGetRequest` | `src/Hud/Requests/Jobs/ListEnrichedJobsV2JobsEnrichedGetRequest.cs` |
| `TasksetJobsEnrichedResponse` | `src/Hud/Models/TasksetJobsEnrichedResponse.cs` |
| `ListEnrichedJobsV2JobsEnrichedGetError` | `src/Hud/Errors/ListEnrichedJobsV2JobsEnrichedGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListJobThumbnailsV2JobsJobIdThumbnailsGet

- **Signature**: `ListJobThumbnailsV2JobsJobIdThumbnailsGet(ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `status` ← `Status`
- **Returns**: `JobThumbnailsResponse`
- **Error**: `ApiException<ListJobThumbnailsV2JobsJobIdThumbnailsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest` | `src/Hud/Requests/Jobs/ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest.cs` |
| `Status11` | `src/Hud/Models/AnyOf/Status11.cs` |
| `JobThumbnailsResponse` | `src/Hud/Models/JobThumbnailsResponse.cs` |
| `ListJobThumbnailsV2JobsJobIdThumbnailsGetError` | `src/Hud/Errors/ListJobThumbnailsV2JobsJobIdThumbnailsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListJobTracesV2JobsJobIdTracesGet

- **Signature**: `ListJobTracesV2JobsJobIdTracesGet(ListJobTracesV2JobsJobIdTracesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PaginatedResponseTraceResponse`
- **Error**: `ApiException<ListJobTracesV2JobsJobIdTracesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListJobTracesV2JobsJobIdTracesGetRequest` | `src/Hud/Requests/Jobs/ListJobTracesV2JobsJobIdTracesGetRequest.cs` |
| `PaginatedResponseTraceResponse` | `src/Hud/Models/PaginatedResponseTraceResponse.cs` |
| `ListJobTracesV2JobsJobIdTracesGetError` | `src/Hud/Errors/ListJobTracesV2JobsJobIdTracesGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListJobsV2JobsGet

- **Signature**: `ListJobsV2JobsGet(ListJobsV2JobsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `taskset_id` ← `TasksetId`, `project_id` ← `ProjectId`
- **Returns**: `PaginatedResponseJobResponse`
- **Error**: `ApiException<ListJobsV2JobsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListJobsV2JobsGetRequest` | `src/Hud/Requests/Jobs/ListJobsV2JobsGetRequest.cs` |
| `TasksetId` | `src/Hud/Models/AnyOf/TasksetId.cs` |
| `ProjectId1` | `src/Hud/Models/AnyOf/ProjectId1.cs` |
| `PaginatedResponseJobResponse` | `src/Hud/Models/PaginatedResponseJobResponse.cs` |
| `ListJobsV2JobsGetError` | `src/Hud/Errors/ListJobsV2JobsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### PublishJobV2JobsJobIdPublishPost

- **Signature**: `PublishJobV2JobsJobIdPublishPost(PublishJobV2JobsJobIdPublishPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `PublishJobResponse`
- **Error**: `ApiException<PublishJobV2JobsJobIdPublishPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublishJobV2JobsJobIdPublishPostRequest` | `src/Hud/Requests/Jobs/PublishJobV2JobsJobIdPublishPostRequest.cs` |
| `PublishJobResponse` | `src/Hud/Models/PublishJobResponse.cs` |
| `PublishJobV2JobsJobIdPublishPostError` | `src/Hud/Errors/PublishJobV2JobsJobIdPublishPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### RevalidateJobV2JobsJobIdRevalidatePost

- **Signature**: `RevalidateJobV2JobsJobIdRevalidatePost(RevalidateJobV2JobsJobIdRevalidatePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `BatchValidateResponse`
- **Error**: `ApiException<RevalidateJobV2JobsJobIdRevalidatePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevalidateJobV2JobsJobIdRevalidatePostRequest` | `src/Hud/Requests/Jobs/RevalidateJobV2JobsJobIdRevalidatePostRequest.cs` |
| `BatchValidateResponse` | `src/Hud/Models/BatchValidateResponse.cs` |
| `RevalidateJobV2JobsJobIdRevalidatePostError` | `src/Hud/Errors/RevalidateJobV2JobsJobIdRevalidatePostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UnpublishJobV2JobsJobIdPublishDelete

- **Signature**: `UnpublishJobV2JobsJobIdPublishDelete(UnpublishJobV2JobsJobIdPublishDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `StatusResponse`
- **Error**: `ApiException<UnpublishJobV2JobsJobIdPublishDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnpublishJobV2JobsJobIdPublishDeleteRequest` | `src/Hud/Requests/Jobs/UnpublishJobV2JobsJobIdPublishDeleteRequest.cs` |
| `StatusResponse` | `src/Hud/Models/StatusResponse.cs` |
| `UnpublishJobV2JobsJobIdPublishDeleteError` | `src/Hud/Errors/UnpublishJobV2JobsJobIdPublishDeleteError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UpdateJobV2JobsJobIdPatch

- **Signature**: `UpdateJobV2JobsJobIdPatch(UpdateJobV2JobsJobIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`, `Body`
- **Returns**: `JobResponse`
- **Error**: `ApiException<UpdateJobV2JobsJobIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateJobV2JobsJobIdPatchRequest` | `src/Hud/Requests/Jobs/UpdateJobV2JobsJobIdPatchRequest.cs` |
| `JobUpdateRequest` | `src/Hud/Models/JobUpdateRequest.cs` |
| `JobResponse` | `src/Hud/Models/JobResponse.cs` |
| `UpdateJobV2JobsJobIdPatchError` | `src/Hud/Errors/UpdateJobV2JobsJobIdPatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost

- **Signature**: `UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost(UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`, `TraceId`, `Body`
- **Returns**: `JobImportTrajectoryResponse`
- **Error**: `ApiException<UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 413, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest` | `src/Hud/Requests/Jobs/UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest.cs` |
| `AtifTrajectory` | `src/Hud/Models/AtifTrajectory.cs` |
| `JobImportTrajectoryResponse` | `src/Hud/Models/JobImportTrajectoryResponse.cs` |
| `UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError` | `src/Hud/Errors/UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

