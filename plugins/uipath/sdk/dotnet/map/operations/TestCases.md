<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestCases — operations

Accessor: `client.TestCases` · Source: `src/UiPath/Api/TestCases.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTestCase

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateTestCase(CreateTestCaseOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Body`
- **Returns**: `TestCase`
- **Error**: `ApiException<CreateTestCaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTestCaseOperationRequest` | `src/UiPath/Requests/TestCases/CreateTestCaseOperationRequest.cs` |
| `CreateTestCaseRequest` | `src/UiPath/Models/CreateTestCaseRequest.cs` |
| `TestCase` | `src/UiPath/Models/TestCase.cs` |
| `CreateTestCaseError` | `src/UiPath/Errors/CreateTestCaseError.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

### GetTestCase

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetTestCase(GetTestCaseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `TestCaseId`
- **Returns**: `TestCase`
- **Error**: `ApiException<GetTestCaseError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTestCaseRequest` | `src/UiPath/Requests/TestCases/GetTestCaseRequest.cs` |
| `TestCase` | `src/UiPath/Models/TestCase.cs` |
| `GetTestCaseError` | `src/UiPath/Errors/GetTestCaseError.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

### ListTestCases

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListTestCases(ListTestCasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Query params (wire ← C#)**: `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `TestCaseListResponse`
- **Error**: `ApiException<ListTestCasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTestCasesRequest` | `src/UiPath/Requests/TestCases/ListTestCasesRequest.cs` |
| `TestCaseListResponse` | `src/UiPath/Models/TestCaseListResponse.cs` |
| `ListTestCasesError` | `src/UiPath/Errors/ListTestCasesError.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

