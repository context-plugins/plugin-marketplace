# ManageV1Projects — operations

Accessor: `client.ManageV1Projects` · Source: `Api/ManageV1Projects.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Delete3
- **HTTP**: `DELETE /v1/projects/{project_id}` (Default (agent))
- **Notes**: Deletes the specified project
- **Signature**: `Delete3(string projectId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteProjectV1Response`
- **Error**: `SdkException<Delete3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Get3
- **HTTP**: `GET /v1/projects/{project_id}` (Default (agent))
- **Notes**: Retrieves information about the specified project
- **Signature**: `Get3(string projectId, double? page, double? limit = 10d, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 10d, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `GetProjectV1Response`
- **Error**: `SdkException<Get3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### Leave
- **HTTP**: `DELETE /v1/projects/{project_id}/leave` (Default (agent))
- **Notes**: Removes the authenticated account from the specific project
- **Signature**: `Leave(string projectId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LeaveProjectV1Response`
- **Error**: `SdkException<LeaveError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List4
- **HTTP**: `GET /v1/projects` (Default (agent))
- **Notes**: Retrieves basic information about the projects associated with the API key
- **Signature**: `List4(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListProjectsV1Response`
- **Error**: `SdkException<List4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Update3
- **HTTP**: `PATCH /v1/projects/{project_id}` (Default (agent))
- **Notes**: Updates the name or other properties of an existing project
- **Signature**: `Update3(string projectId, UpdateProjectV1Request? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UpdateProjectV1Response`
- **Error**: `SdkException<Update3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
