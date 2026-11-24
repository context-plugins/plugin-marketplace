<!-- Generated file — do not edit; regenerated with the SDK. -->

# Digitization — operations

Accessor: `client.Digitization` · Source: `src/UiPath/Api/Digitization.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DigitizeDocument

- **Server group**: `DefaultUiPathDocumentUnderstandingClassificationApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `DigitizeDocument(DigitizeDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Body`
- **Query params (wire ← C#)**: `api-version` ← `ApiVersion`
- **Returns**: `DigitizationResult`
- **Error**: `ApiException<DigitizeDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DigitizeDocumentRequest` | `src/UiPath/Requests/Digitization/DigitizeDocumentRequest.cs` |
| `DigitizationRequest` | `src/UiPath/Models/DigitizationRequest.cs` |
| `DigitizationResult` | `src/UiPath/Models/DigitizationResult.cs` |
| `DigitizeDocumentError` | `src/UiPath/Errors/DigitizeDocumentError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

