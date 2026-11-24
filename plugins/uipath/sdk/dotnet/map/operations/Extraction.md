<!-- Generated file — do not edit; regenerated with the SDK. -->

# Extraction — operations

Accessor: `client.Extraction` · Source: `src/UiPath/Api/Extraction.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ExtractDocumentAsync

- **Server group**: `DefaultUiPathDocumentUnderstandingClassificationApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ExtractDocumentAsync(ExtractDocumentAsyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Body`
- **Query params (wire ← C#)**: `api-version` ← `ApiVersion`
- **Returns**: `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi`
- **Error**: `ApiException<ExtractDocumentAsyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExtractDocumentAsyncRequest` | `src/UiPath/Requests/Extraction/ExtractDocumentAsyncRequest.cs` |
| `ExtractionRequest` | `src/UiPath/Models/ExtractionRequest.cs` |
| `AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi` | `src/UiPath/Models/AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi.cs` |
| `ExtractDocumentAsyncError` | `src/UiPath/Errors/ExtractDocumentAsyncError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### GetExtractionResult

- **Server group**: `DefaultUiPathDocumentUnderstandingClassificationApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetExtractionResult(GetExtractionResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `RequestId`
- **Query params (wire ← C#)**: `api-version` ← `ApiVersion`
- **Returns**: `ExtractionResult`
- **Error**: `ApiException<GetExtractionResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExtractionResultRequest` | `src/UiPath/Requests/Extraction/GetExtractionResultRequest.cs` |
| `ExtractionResult` | `src/UiPath/Models/ExtractionResult.cs` |
| `GetExtractionResultError` | `src/UiPath/Errors/GetExtractionResultError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

