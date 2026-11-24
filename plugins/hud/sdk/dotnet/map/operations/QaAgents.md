<!-- Generated file — do not edit; regenerated with the SDK. -->

# QaAgents — operations

Accessor: `client.QaAgents` · Source: `src/Hud/Api/QaAgents.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet

- **Signature**: `GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet(GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResultId`
- **Query params (wire ← C#)**: `since_seq` ← `SinceSeq`, `limit` ← `Limit`
- **Returns**: `TraceEventsResponse`
- **Error**: `ApiException<GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest` | `src/Hud/Requests/QaAgents/GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest.cs` |
| `TraceEventsResponse` | `src/Hud/Models/TraceEventsResponse.cs` |
| `GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError` | `src/Hud/Errors/GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetQaAgentV2QaAgentsAgentIdGet

- **Signature**: `GetQaAgentV2QaAgentsAgentIdGet(GetQaAgentV2QaAgentsAgentIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AgentId`
- **Returns**: `QaAgentResponse`
- **Error**: `ApiException<GetQaAgentV2QaAgentsAgentIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetQaAgentV2QaAgentsAgentIdGetRequest` | `src/Hud/Requests/QaAgents/GetQaAgentV2QaAgentsAgentIdGetRequest.cs` |
| `QaAgentResponse` | `src/Hud/Models/QaAgentResponse.cs` |
| `GetQaAgentV2QaAgentsAgentIdGetError` | `src/Hud/Errors/GetQaAgentV2QaAgentsAgentIdGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListQaAgentsV2QaAgentsGet

- **Signature**: `ListQaAgentsV2QaAgentsGet(ListQaAgentsV2QaAgentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `subject_type` ← `SubjectType`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PaginatedResponseQaAgentResponse`
- **Error**: `ApiException<ListQaAgentsV2QaAgentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListQaAgentsV2QaAgentsGetRequest` | `src/Hud/Requests/QaAgents/ListQaAgentsV2QaAgentsGetRequest.cs` |
| `QaAgentSubjectType` | `src/Hud/Models/Enums/QaAgentSubjectType.cs` |
| `PaginatedResponseQaAgentResponse` | `src/Hud/Models/PaginatedResponseQaAgentResponse.cs` |
| `ListQaAgentsV2QaAgentsGetError` | `src/Hud/Errors/ListQaAgentsV2QaAgentsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListResourceQaAgentResultsV2QaAgentsResultsResourcesGet

- **Signature**: `ListResourceQaAgentResultsV2QaAgentsResultsResourcesGet(ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `subject_type` ← `SubjectType`, `subject_ids` ← `SubjectIds`, `result_ids` ← `ResultIds`
- **Returns**: `IReadOnlyList<QaAgentResourceResultDetail>`
- **Error**: `ApiException<ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest` | `src/Hud/Requests/QaAgents/ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest.cs` |
| `SubjectType` | `src/Hud/Models/AnyOf/SubjectType.cs` |
| `SubjectIds` | `src/Hud/Models/AnyOf/SubjectIds.cs` |
| `ResultIds` | `src/Hud/Models/AnyOf/ResultIds.cs` |
| `QaAgentResourceResultDetail` | `src/Hud/Models/QaAgentResourceResultDetail.cs` |
| `ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError` | `src/Hud/Errors/ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPost

- **Signature**: `RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPost(RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AgentId`, `Body`
- **Returns**: `IReadOnlyList<QaAgentResultResponse>`
- **Error**: `ApiException<RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest` | `src/Hud/Requests/QaAgents/RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest.cs` |
| `QaAgentResourceRunRequest` | `src/Hud/Models/QaAgentResourceRunRequest.cs` |
| `QaAgentResultResponse` | `src/Hud/Models/QaAgentResultResponse.cs` |
| `RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError` | `src/Hud/Errors/RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

