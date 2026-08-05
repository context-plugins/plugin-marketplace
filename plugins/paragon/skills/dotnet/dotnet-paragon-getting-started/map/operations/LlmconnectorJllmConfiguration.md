# LlmconnectorJllmConfiguration — operations

Accessor: `client.LlmconnectorJllmConfiguration` · Source: `Api/LlmconnectorJllmConfiguration.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### LlmApiCreateJllmConfig
- **HTTP**: `POST /llm-connector/api/v1/orgs/{org_id}/jllm/config` (Default)
- **Notes**: Create a new JLLM configuration and store it for the organization.
- **Signature**: `LlmApiCreateJllmConfig(Guid orgId, JllmconfigSchema body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `JllmconfigResponseSchema`
- **Error**: `SdkException<LlmApiCreateJllmConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonElement(out JsonElement)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiDeleteJllmConfig
- **HTTP**: `DELETE /llm-connector/api/v1/orgs/{org_id}/jllm/config` (Default)
- **Notes**: Delete the JLLM configuration for the organization.
- **Signature**: `LlmApiDeleteJllmConfig(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<LlmApiDeleteJllmConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonElement(out JsonElement)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiGetJllmConfig
- **HTTP**: `GET /llm-connector/api/v1/orgs/{org_id}/jllm/config` (Default)
- **Notes**: Retrieve the existing JLLM configuration details for the organization.
- **Signature**: `LlmApiGetJllmConfig(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `JllmconfigResponseSchema`
- **Error**: `SdkException<LlmApiGetJllmConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonElement(out JsonElement)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiPatchJllmConfig
- **HTTP**: `PATCH /llm-connector/api/v1/orgs/{org_id}/jllm/config` (Default)
- **Notes**: Patch selected fields of the existing JLLM configuration for the organization.
- **Signature**: `LlmApiPatchJllmConfig(Guid orgId, JllmconfigSchema body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `JllmconfigResponseSchema`
- **Error**: `SdkException<LlmApiPatchJllmConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonElement(out JsonElement)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiUpdateJllmConfig
- **HTTP**: `PUT /llm-connector/api/v1/orgs/{org_id}/jllm/config` (Default)
- **Notes**: Update the existing JLLM configuration for the organization.
- **Signature**: `LlmApiUpdateJllmConfig(Guid orgId, JllmconfigSchema body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `JllmconfigResponseSchema`
- **Error**: `SdkException<LlmApiUpdateJllmConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonElement(out JsonElement)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiValidateJllmConfig
- **HTTP**: `POST /llm-connector/api/v1/orgs/{org_id}/jllm/config/validate` (Default)
- **Notes**: Validate the stored JLLM configuration against the JLLM service.
- **Signature**: `LlmApiValidateJllmConfig(Guid orgId, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `JllmconfigValidateResponseSchema`
- **Error**: `SdkException<LlmApiValidateJllmConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonElement(out JsonElement)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
