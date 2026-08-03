# ManageV1ProjectsKeys — operations

Accessor: `client.ManageV1ProjectsKeys` · Source: `Api/ManageV1ProjectsKeys.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Create3
- **HTTP**: `POST /v1/projects/{project_id}/keys` (Default (agent))
- **Notes**: Creates a new API key with specified settings for the project
- **Signature**: `Create3(string projectId, string authorization, CreateKeyV1Request? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateKeyV1Response`
- **Error**: `SdkException<Create3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Delete4
- **HTTP**: `DELETE /v1/projects/{project_id}/keys/{key_id}` (Default (agent))
- **Notes**: Deletes an API key for a specific project
- **Signature**: `Delete4(string projectId, string keyId, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteProjectKeyV1Response`
- **Error**: `SdkException<Delete4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Get6
- **HTTP**: `GET /v1/projects/{project_id}/keys/{key_id}` (Default (agent))
- **Notes**: Retrieves information about a specified API key
- **Signature**: `Get6(string projectId, string keyId, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetProjectKeyV1Response`
- **Error**: `SdkException<Get6Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List7
- **HTTP**: `GET /v1/projects/{project_id}/keys` (Default (agent))
- **Notes**: Retrieves all API keys associated with the specified project
- **Signature**: `List7(string projectId, V1ProjectsProjectIdKeysGetParametersStatus? status, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`
- **Returns**: `ListProjectKeysV1Response`
- **Error**: `SdkException<List7Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
