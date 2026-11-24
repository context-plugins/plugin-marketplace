<!-- Generated file — do not edit; regenerated with the SDK. -->

# ValidationApi — operations

Accessor: `client.ValidationApi` · Source: `src/UiPath/Api/ValidationApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ValidateDocumentAsync

- **Server group**: `DefaultUiPathDocumentUnderstandingClassificationApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ValidateDocumentAsync(ValidateDocumentAsyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Body`
- **Query params (wire ← C#)**: `api-version` ← `ApiVersion`
- **Returns**: `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi`
- **Error**: `ApiException<ValidateDocumentAsyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ValidateDocumentAsyncRequest` | `src/UiPath/Requests/ValidationApi/ValidateDocumentAsyncRequest.cs` |
| `ValidationRequest` | `src/UiPath/Models/ValidationRequest.cs` |
| `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi` | `src/UiPath/Models/AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi.cs` |
| `ValidateDocumentAsyncError` | `src/UiPath/Errors/ValidateDocumentAsyncError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

