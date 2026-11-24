<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestSets — operations

Accessor: `client.TestSets` · Source: `src/UiPath/Api/TestSets.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTestSet

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateTestSet(CreateTestSetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Body`
- **Returns**: `TestSet`
- **Error**: `ApiException<CreateTestSetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTestSetOperationRequest` | `src/UiPath/Requests/TestSets/CreateTestSetOperationRequest.cs` |
| `CreateTestSetRequest` | `src/UiPath/Models/CreateTestSetRequest.cs` |
| `TestSet` | `src/UiPath/Models/TestSet.cs` |
| `CreateTestSetError` | `src/UiPath/Errors/CreateTestSetError.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

### ListTestSets

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListTestSets(ListTestSetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Query params (wire ← C#)**: `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `TestSetListResponse`
- **Error**: `ApiException<ListTestSetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTestSetsRequest` | `src/UiPath/Requests/TestSets/ListTestSetsRequest.cs` |
| `TestSetListResponse` | `src/UiPath/Models/TestSetListResponse.cs` |
| `ListTestSetsError` | `src/UiPath/Errors/ListTestSetsError.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

