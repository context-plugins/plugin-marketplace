<!-- Generated file — do not edit; regenerated with the SDK. -->

# Classification — operations

Accessor: `client.Classification` · Source: `src/UiPath/Api/Classification.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ClassifyDocumentAsync

- **Server group**: `DefaultUiPathDocumentUnderstandingClassificationApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ClassifyDocumentAsync(ClassifyDocumentAsyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Body`
- **Query params (wire ← C#)**: `api-version` ← `ApiVersion`
- **Returns**: `AsyncJobStartResponse`
- **Error**: `ApiException<ClassifyDocumentAsyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClassifyDocumentAsyncRequest` | `src/UiPath/Requests/Classification/ClassifyDocumentAsyncRequest.cs` |
| `ClassificationRequest` | `src/UiPath/Models/ClassificationRequest.cs` |
| `AsyncJobStartResponse` | `src/UiPath/Models/AsyncJobStartResponse.cs` |
| `ClassifyDocumentAsyncError` | `src/UiPath/Errors/ClassifyDocumentAsyncError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### GetClassificationResult

- **Server group**: `DefaultUiPathDocumentUnderstandingClassificationApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetClassificationResult(GetClassificationResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `RequestId`
- **Query params (wire ← C#)**: `api-version` ← `ApiVersion`
- **Returns**: `ClassificationResult`
- **Error**: `ApiException<GetClassificationResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationResultRequest` | `src/UiPath/Requests/Classification/GetClassificationResultRequest.cs` |
| `ClassificationResult` | `src/UiPath/Models/ClassificationResult.cs` |
| `GetClassificationResultError` | `src/UiPath/Errors/GetClassificationResultError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

