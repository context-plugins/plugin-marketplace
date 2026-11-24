<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipeline — operations

Accessor: `client.Pipeline` · Source: `src/UiPath/Api/Pipeline.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAutomationPipeline

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetAutomationPipeline(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PipelineData`
- **Error**: `ApiException<GetAutomationPipelineError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PipelineData` | `src/UiPath/Models/PipelineData.cs` |
| `GetAutomationPipelineError` | `src/UiPath/Errors/GetAutomationPipelineError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

