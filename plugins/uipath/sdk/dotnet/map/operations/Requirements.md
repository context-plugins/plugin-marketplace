<!-- Generated file — do not edit; regenerated with the SDK. -->

# Requirements — operations

Accessor: `client.Requirements` · Source: `src/UiPath/Api/Requirements.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRequirement

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateRequirement(CreateRequirementOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Body`
- **Returns**: `Requirement`
- **Error**: `ApiException<CreateRequirementError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRequirementOperationRequest` | `src/UiPath/Requests/Requirements/CreateRequirementOperationRequest.cs` |
| `CreateRequirementRequest` | `src/UiPath/Models/CreateRequirementRequest.cs` |
| `Requirement` | `src/UiPath/Models/Requirement.cs` |
| `CreateRequirementError` | `src/UiPath/Errors/CreateRequirementError.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

### ListRequirements

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListRequirements(ListRequirementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Query params (wire ← C#)**: `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `RequirementListResponse`
- **Error**: `ApiException<ListRequirementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRequirementsRequest` | `src/UiPath/Requests/Requirements/ListRequirementsRequest.cs` |
| `RequirementListResponse` | `src/UiPath/Models/RequirementListResponse.cs` |
| `ListRequirementsError` | `src/UiPath/Errors/ListRequirementsError.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

