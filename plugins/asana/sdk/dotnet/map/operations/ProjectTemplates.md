<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectTemplates — operations

Accessor: `client.ProjectTemplates` · Source: `src/Asana/Api/ProjectTemplates.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetProjectTemplate

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectTemplate(GetProjectTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectTemplateGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectTemplatesResponse`
- **Error**: `ApiException<GetProjectTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectTemplateRequest` | `src/Asana/Requests/ProjectTemplates/GetProjectTemplateRequest.cs` |
| `ProjectTemplatesResponse` | `src/Asana/Models/ProjectTemplatesResponse.cs` |
| `GetProjectTemplateError` | `src/Asana/Errors/GetProjectTemplateError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProjectTemplates

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectTemplates(GetProjectTemplatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `workspace` ← `Workspace`, `team` ← `Team`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ProjectTemplatesResponse1`
- **Error**: `ApiException<GetProjectTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectTemplatesRequest` | `src/Asana/Requests/ProjectTemplates/GetProjectTemplatesRequest.cs` |
| `ProjectTemplatesResponse1` | `src/Asana/Models/ProjectTemplatesResponse1.cs` |
| `GetProjectTemplatesError` | `src/Asana/Errors/GetProjectTemplatesError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProjectTemplatesForTeam

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectTemplatesForTeam(GetProjectTemplatesForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TeamsProjectTemplatesResponse`
- **Error**: `ApiException<GetProjectTemplatesForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectTemplatesForTeamRequest` | `src/Asana/Requests/ProjectTemplates/GetProjectTemplatesForTeamRequest.cs` |
| `TeamsProjectTemplatesResponse` | `src/Asana/Models/TeamsProjectTemplatesResponse.cs` |
| `GetProjectTemplatesForTeamError` | `src/Asana/Errors/GetProjectTemplatesForTeamError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### InstantiateProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `InstantiateProject(InstantiateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectTemplateGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectTemplatesInstantiateProjectResponse`
- **Error**: `ApiException<InstantiateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InstantiateProjectRequest` | `src/Asana/Requests/ProjectTemplates/InstantiateProjectRequest.cs` |
| `ProjectTemplatesInstantiateProjectRequest` | `src/Asana/Models/ProjectTemplatesInstantiateProjectRequest.cs` |
| `ProjectTemplatesInstantiateProjectResponse` | `src/Asana/Models/ProjectTemplatesInstantiateProjectResponse.cs` |
| `InstantiateProjectError` | `src/Asana/Errors/InstantiateProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

