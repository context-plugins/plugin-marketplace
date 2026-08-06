# VoiceAgentVariables — operations

Accessor: `client.VoiceAgentVariables` · Source: `Api/VoiceAgentVariables.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Create2
- **HTTP**: `POST /v1/projects/{project_id}/agent-variables` (Default (agent))
- **Notes**: Creates a new template variable. Variables follow the `DG_&lt;VARIABLE_NAME&gt;` naming format and can substitute any JSON value in an agent configuration.
- **Signature**: `Create2(string projectId, CreateAgentVariableV1Request? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AgentVariableV1`
- **Error**: `SdkException<Create2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Delete2
- **HTTP**: `DELETE /v1/projects/{project_id}/agent-variables/{variable_id}` (Default (agent))
- **Notes**: Deletes the specified template variable
- **Signature**: `Delete2(string projectId, string variableId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<Delete2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Get2
- **HTTP**: `GET /v1/projects/{project_id}/agent-variables/{variable_id}` (Default (agent))
- **Notes**: Returns the specified template variable
- **Signature**: `Get2(string projectId, string variableId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AgentVariableV1`
- **Error**: `SdkException<Get2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List3
- **HTTP**: `GET /v1/projects/{project_id}/agent-variables` (Default (agent))
- **Notes**: Returns all template variables for the specified project
- **Signature**: `List3(string projectId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListAgentVariablesV1Response`
- **Error**: `SdkException<List3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Update2
- **HTTP**: `PATCH /v1/projects/{project_id}/agent-variables/{variable_id}` (Default (agent))
- **Notes**: Updates the value of an existing template variable
- **Signature**: `Update2(string projectId, string variableId, UpdateAgentVariableV1Request? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AgentVariableV1`
- **Error**: `SdkException<Update2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
