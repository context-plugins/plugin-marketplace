# LlmconnectorModels — operations

Accessor: `client.LlmconnectorModels` · Source: `Api/LlmconnectorModels.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### LlmApiCreateChatLlmConfig
- **HTTP**: `POST /llm-connector/api/v1/orgs/{org_id}/models` (Default)
- **Signature**: `LlmApiCreateChatLlmConfig(Guid orgId, ChatLlmmodelSchema body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChatLlmmodelResponseSchema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiDeleteChatLlmConfig
- **HTTP**: `DELETE /llm-connector/api/v1/orgs/{org_id}/models/{llm_model_id}` (Default)
- **Signature**: `LlmApiDeleteChatLlmConfig(Guid orgId, Guid llmModelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiGetChatAllLlmConfig
- **HTTP**: `GET /llm-connector/api/v1/orgs/{org_id}/models` (Default)
- **Signature**: `LlmApiGetChatAllLlmConfig(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChatLlmmodelListSchema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiGetChatLlmConfig
- **HTTP**: `GET /llm-connector/api/v1/orgs/{org_id}/models/{llm_model_id}` (Default)
- **Signature**: `LlmApiGetChatLlmConfig(Guid orgId, Guid llmModelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChatLlmmodelResponseSchema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiPatchChatLlmConfig
- **HTTP**: `PATCH /llm-connector/api/v1/orgs/{org_id}/models/{llm_model_id}` (Default)
- **Signature**: `LlmApiPatchChatLlmConfig(Guid orgId, Guid llmModelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChatLlmmodelResponseSchema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiPutChatLlmConfig
- **HTTP**: `PUT /llm-connector/api/v1/orgs/{org_id}/models/{llm_model_id}` (Default)
- **Signature**: `LlmApiPutChatLlmConfig(Guid orgId, Guid llmModelId, ChatLlmmodelSchema body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChatLlmmodelResponseSchema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
