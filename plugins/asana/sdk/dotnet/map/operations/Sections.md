<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sections — operations

Accessor: `client.Sections` · Source: `src/Asana/Api/Sections.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddTaskForSection

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddTaskForSection(AddTaskForSectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SectionGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `SectionsAddTaskResponse`
- **Error**: `ApiException<AddTaskForSectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddTaskForSectionRequest` | `src/Asana/Requests/Sections/AddTaskForSectionRequest.cs` |
| `SectionsAddTaskRequest` | `src/Asana/Models/SectionsAddTaskRequest.cs` |
| `SectionsAddTaskResponse` | `src/Asana/Models/SectionsAddTaskResponse.cs` |
| `AddTaskForSectionError` | `src/Asana/Errors/AddTaskForSectionError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateSectionForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateSectionForProject(CreateSectionForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsSectionsResponse1`
- **Error**: `ApiException<CreateSectionForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSectionForProjectRequest` | `src/Asana/Requests/Sections/CreateSectionForProjectRequest.cs` |
| `ProjectsSectionsRequest` | `src/Asana/Models/ProjectsSectionsRequest.cs` |
| `ProjectsSectionsResponse1` | `src/Asana/Models/ProjectsSectionsResponse1.cs` |
| `CreateSectionForProjectError` | `src/Asana/Errors/CreateSectionForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteSection

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteSection(DeleteSectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SectionGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `SectionsResponse2`
- **Error**: `ApiException<DeleteSectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSectionRequest` | `src/Asana/Requests/Sections/DeleteSectionRequest.cs` |
| `SectionsResponse2` | `src/Asana/Models/SectionsResponse2.cs` |
| `DeleteSectionError` | `src/Asana/Errors/DeleteSectionError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetSection

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetSection(GetSectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SectionGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `SectionsResponse`
- **Error**: `ApiException<GetSectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSectionRequest` | `src/Asana/Requests/Sections/GetSectionRequest.cs` |
| `SectionsResponse` | `src/Asana/Models/SectionsResponse.cs` |
| `GetSectionError` | `src/Asana/Errors/GetSectionError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetSectionsForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetSectionsForProject(GetSectionsForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ProjectsSectionsResponse`
- **Error**: `ApiException<GetSectionsForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSectionsForProjectRequest` | `src/Asana/Requests/Sections/GetSectionsForProjectRequest.cs` |
| `ProjectsSectionsResponse` | `src/Asana/Models/ProjectsSectionsResponse.cs` |
| `GetSectionsForProjectError` | `src/Asana/Errors/GetSectionsForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### InsertSectionForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `InsertSectionForProject(InsertSectionForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsSectionsInsertResponse`
- **Error**: `ApiException<InsertSectionForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InsertSectionForProjectRequest` | `src/Asana/Requests/Sections/InsertSectionForProjectRequest.cs` |
| `ProjectsSectionsInsertRequest` | `src/Asana/Models/ProjectsSectionsInsertRequest.cs` |
| `ProjectsSectionsInsertResponse` | `src/Asana/Models/ProjectsSectionsInsertResponse.cs` |
| `InsertSectionForProjectError` | `src/Asana/Errors/InsertSectionForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateSection

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateSection(UpdateSectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SectionGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `SectionsResponse`
- **Error**: `ApiException<UpdateSectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSectionRequest` | `src/Asana/Requests/Sections/UpdateSectionRequest.cs` |
| `SectionsRequest` | `src/Asana/Models/SectionsRequest.cs` |
| `SectionsResponse` | `src/Asana/Models/SectionsResponse.cs` |
| `UpdateSectionError` | `src/Asana/Errors/UpdateSectionError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

