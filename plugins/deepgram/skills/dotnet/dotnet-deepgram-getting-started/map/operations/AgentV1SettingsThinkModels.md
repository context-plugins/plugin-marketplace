# AgentV1SettingsThinkModels — operations

Accessor: `client.AgentV1SettingsThinkModels` · Source: `Api/AgentV1SettingsThinkModels.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### List
- **HTTP**: `GET /v1/agent/settings/think/models` (Default (agent))
- **Notes**: Retrieves the available think models that can be used for AI agent processing
- **Signature**: `List(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AgentThinkModelsV1Response`
- **Error**: `SdkException<ListError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
