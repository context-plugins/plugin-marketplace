<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.Discovery` · Source: `src/UiPath/Api/Discovery.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListClassifiers

- **Server group**: `DefaultUiPathDocumentUnderstandingClassificationApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListClassifiers(ListClassifiersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Query params (wire ← C#)**: `api-version` ← `ApiVersion`
- **Returns**: `ProjectsClassifiersResponse`
- **Error**: `ApiException<ListClassifiersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassifiersRequest` | `src/UiPath/Requests/Discovery/ListClassifiersRequest.cs` |
| `ProjectsClassifiersResponse` | `src/UiPath/Models/ProjectsClassifiersResponse.cs` |
| `ListClassifiersError` | `src/UiPath/Errors/ListClassifiersError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### ListExtractors

- **Server group**: `DefaultUiPathDocumentUnderstandingClassificationApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListExtractors(ListExtractorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Query params (wire ← C#)**: `api-version` ← `ApiVersion`
- **Returns**: `ProjectsExtractorsResponse`
- **Error**: `ApiException<ListExtractorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExtractorsRequest` | `src/UiPath/Requests/Discovery/ListExtractorsRequest.cs` |
| `ProjectsExtractorsResponse` | `src/UiPath/Models/ProjectsExtractorsResponse.cs` |
| `ListExtractorsError` | `src/UiPath/Errors/ListExtractorsError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### ListProjects

- **Server group**: `DefaultUiPathDocumentUnderstandingClassificationApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListProjects(ListProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `api-version` ← `ApiVersion`
- **Returns**: `ProjectsResponse`
- **Error**: `ApiException<ListProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProjectsRequest` | `src/UiPath/Requests/Discovery/ListProjectsRequest.cs` |
| `ProjectsResponse` | `src/UiPath/Models/ProjectsResponse.cs` |
| `ListProjectsError` | `src/UiPath/Errors/ListProjectsError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

