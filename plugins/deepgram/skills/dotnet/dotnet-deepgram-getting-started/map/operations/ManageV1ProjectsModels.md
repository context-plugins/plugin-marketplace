# ManageV1ProjectsModels — operations

Accessor: `client.ManageV1ProjectsModels` · Source: `Api/ManageV1ProjectsModels.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Get4
- **HTTP**: `GET /v1/projects/{project_id}/models/{model_id}` (Default (agent))
- **Notes**: Returns metadata for a specific model
- **Signature**: `Get4(string projectId, string modelId, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetModelV1Response`
- **Error**: `SdkException<Get4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List5
- **HTTP**: `GET /v1/projects/{project_id}/models` (Default (agent))
- **Notes**: Returns metadata on all the latest models that a specific project has access to, including non-public models
- **Signature**: `List5(string projectId, bool? includeOutdated, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeOutdated` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include_outdated` ← `includeOutdated`
- **Returns**: `ListModelsV1Response`
- **Error**: `SdkException<List5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
