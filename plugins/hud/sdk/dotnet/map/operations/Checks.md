<!-- Generated file — do not edit; regenerated with the SDK. -->

# Checks — operations

Accessor: `client.Checks` · Source: `src/Hud/Api/Checks.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTeamQcPipelineV2ChecksPipelinesPost

- **Signature**: `CreateTeamQcPipelineV2ChecksPipelinesPost(CreateTeamQcPipelineV2ChecksPipelinesPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `QcPipelineRegistrationResponse`
- **Error**: `ApiException<CreateTeamQcPipelineV2ChecksPipelinesPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTeamQcPipelineV2ChecksPipelinesPostRequest` | `src/Hud/Requests/Checks/CreateTeamQcPipelineV2ChecksPipelinesPostRequest.cs` |
| `QcPipelineCreateRequest` | `src/Hud/Models/QcPipelineCreateRequest.cs` |
| `QcPipelineRegistrationResponse` | `src/Hud/Models/QcPipelineRegistrationResponse.cs` |
| `CreateTeamQcPipelineV2ChecksPipelinesPostError` | `src/Hud/Errors/CreateTeamQcPipelineV2ChecksPipelinesPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListPlatformCheckRunsV2ChecksRunsGet

- **Signature**: `ListPlatformCheckRunsV2ChecksRunsGet(ListPlatformCheckRunsV2ChecksRunsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubjectType`, `SubjectId`
- **Query params (wire ← C#)**: `subject_type` ← `SubjectType`, `subject_id` ← `SubjectId`, `limit` ← `Limit`
- **Returns**: `IReadOnlyList<CheckRunResponse>`
- **Error**: `ApiException<ListPlatformCheckRunsV2ChecksRunsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPlatformCheckRunsV2ChecksRunsGetRequest` | `src/Hud/Requests/Checks/ListPlatformCheckRunsV2ChecksRunsGetRequest.cs` |
| `CheckSubjectType` | `src/Hud/Models/Enums/CheckSubjectType.cs` |
| `CheckRunResponse` | `src/Hud/Models/CheckRunResponse.cs` |
| `ListPlatformCheckRunsV2ChecksRunsGetError` | `src/Hud/Errors/ListPlatformCheckRunsV2ChecksRunsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListPlatformChecksV2ChecksGet

- **Signature**: `ListPlatformChecksV2ChecksGet(ListPlatformChecksV2ChecksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `subject_type` ← `SubjectType`
- **Returns**: `IReadOnlyList<CheckDefinitionResponse>`
- **Error**: `ApiException<ListPlatformChecksV2ChecksGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPlatformChecksV2ChecksGetRequest` | `src/Hud/Requests/Checks/ListPlatformChecksV2ChecksGetRequest.cs` |
| `SubjectType` | `src/Hud/Models/AnyOf/SubjectType.cs` |
| `CheckDefinitionResponse` | `src/Hud/Models/CheckDefinitionResponse.cs` |
| `ListPlatformChecksV2ChecksGetError` | `src/Hud/Errors/ListPlatformChecksV2ChecksGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListTeamQcPipelinesV2ChecksPipelinesGet

- **Signature**: `ListTeamQcPipelinesV2ChecksPipelinesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<QcPipelineRegistrationResponse>`
- **Error**: `ApiException<ListTeamQcPipelinesV2ChecksPipelinesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QcPipelineRegistrationResponse` | `src/Hud/Models/QcPipelineRegistrationResponse.cs` |
| `ListTeamQcPipelinesV2ChecksPipelinesGetError` | `src/Hud/Errors/ListTeamQcPipelinesV2ChecksPipelinesGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### RunPlatformCheckV2ChecksCheckKeyRunsPost

- **Signature**: `RunPlatformCheckV2ChecksCheckKeyRunsPost(RunPlatformCheckV2ChecksCheckKeyRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CheckKey`, `Body`
- **Returns**: `CheckRunResponse`
- **Error**: `ApiException<RunPlatformCheckV2ChecksCheckKeyRunsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunPlatformCheckV2ChecksCheckKeyRunsPostRequest` | `src/Hud/Requests/Checks/RunPlatformCheckV2ChecksCheckKeyRunsPostRequest.cs` |
| `CheckRunRequest` | `src/Hud/Models/CheckRunRequest.cs` |
| `CheckRunResponse` | `src/Hud/Models/CheckRunResponse.cs` |
| `RunPlatformCheckV2ChecksCheckKeyRunsPostError` | `src/Hud/Errors/RunPlatformCheckV2ChecksCheckKeyRunsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

