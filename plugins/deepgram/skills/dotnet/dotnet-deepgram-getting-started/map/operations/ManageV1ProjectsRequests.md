# ManageV1ProjectsRequests — operations

Accessor: `client.ManageV1ProjectsRequests` · Source: `Api/ManageV1ProjectsRequests.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Get7
- **HTTP**: `GET /v1/projects/{project_id}/requests/{request_id}` (Default (agent))
- **Notes**: Retrieves a specific request for a specific project
- **Signature**: `Get7(string projectId, string requestId, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetProjectRequestV1Response`
- **Error**: `SdkException<Get7Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List11
- **HTTP**: `GET /v1/projects/{project_id}/requests` (Default (agent))
- **Notes**: Generates a list of requests for a specific project
- **Signature**: `List11(string projectId, DateTimeOffset? start, DateTimeOffset? end, double? page, string? accessor, string? requestId, V1ProjectsProjectIdRequestsGetParametersDeployment? deployment, V1ProjectsProjectIdRequestsGetParametersEndpoint? endpoint, V1ProjectsProjectIdRequestsGetParametersMethod? method, V1ProjectsProjectIdRequestsGetParametersStatus? status, string authorization, double? limit = 10d, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`start` … `status`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 10d, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `limit` ← `limit`, `page` ← `page`, `accessor` ← `accessor`, `request_id` ← `requestId`, `deployment` ← `deployment`, `endpoint` ← `endpoint`, `method` ← `method`, `status` ← `status`
- **Returns**: `ListProjectRequestsV1Response`
- **Error**: `SdkException<List11Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
