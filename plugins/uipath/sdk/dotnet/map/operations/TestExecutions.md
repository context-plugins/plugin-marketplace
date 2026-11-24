<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestExecutions — operations

Accessor: `client.TestExecutions` · Source: `src/UiPath/Api/TestExecutions.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListTestExecutions

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListTestExecutions(ListTestExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Query params (wire ← C#)**: `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `TestExecutionListResponse`
- **Error**: `ApiException<ListTestExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTestExecutionsRequest` | `src/UiPath/Requests/TestExecutions/ListTestExecutionsRequest.cs` |
| `TestExecutionListResponse` | `src/UiPath/Models/TestExecutionListResponse.cs` |
| `ListTestExecutionsError` | `src/UiPath/Errors/ListTestExecutionsError.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

