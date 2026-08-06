# VoiceAgentConfigurations — operations

Accessor: `client.VoiceAgentConfigurations` · Source: `Api/VoiceAgentConfigurations.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Create
- **HTTP**: `POST /v1/projects/{project_id}/agents` (Default (agent))
- **Notes**: Creates a new reusable agent configuration. The `config` field must be a valid JSON string representing the `agent` block of a Settings message. The returned `agent_id` can be passed in place of the full `agent` object in future Settings messages.
- **Signature**: `Create(string projectId, CreateAgentConfigurationV1Request? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateAgentConfigurationV1Response`
- **Error**: `SdkException<CreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Delete
- **HTTP**: `DELETE /v1/projects/{project_id}/agents/{agent_id}` (Default (agent))
- **Notes**: Deletes the specified agent configuration. Deleting an agent configuration can cause a production outage if your service references this agent UUID. Migrate all active sessions to a new configuration before deleting.
- **Signature**: `Delete(string projectId, string agentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<DeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Get
- **HTTP**: `GET /v1/projects/{project_id}/agents/{agent_id}` (Default (agent))
- **Notes**: Returns the specified agent configuration in its uninterpolated form
- **Signature**: `Get(string projectId, string agentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AgentConfigurationV1`
- **Error**: `SdkException<GetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List2
- **HTTP**: `GET /v1/projects/{project_id}/agents` (Default (agent))
- **Notes**: Returns all agent configurations for the specified project. Configurations are returned in their uninterpolated form—template variable placeholders appear as-is rather than with their substituted values.
- **Signature**: `List2(string projectId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListAgentConfigurationsV1Response`
- **Error**: `SdkException<List2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Update
- **HTTP**: `PUT /v1/projects/{project_id}/agents/{agent_id}` (Default (agent))
- **Notes**: Updates the metadata associated with an agent configuration. The config itself is immutable—to change the configuration, delete the existing agent and create a new one.
- **Signature**: `Update(string projectId, string agentId, UpdateAgentMetadataV1Request? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AgentConfigurationV1`
- **Error**: `SdkException<UpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
