# ManageV1ProjectsMembersScopes — operations

Accessor: `client.ManageV1ProjectsMembersScopes` · Source: `Api/ManageV1ProjectsMembersScopes.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### List9
- **HTTP**: `GET /v1/projects/{project_id}/members/{member_id}/scopes` (Default (agent))
- **Notes**: Retrieves a list of scopes for a specific member
- **Signature**: `List9(string projectId, string memberId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListProjectMemberScopesV1Response`
- **Error**: `SdkException<List9Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Update4
- **HTTP**: `PUT /v1/projects/{project_id}/members/{member_id}/scopes` (Default (agent))
- **Notes**: Updates the scopes for a specific member
- **Signature**: `Update4(string projectId, string memberId, UpdateProjectMemberScopesV1Request? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UpdateProjectMemberScopesV1Response`
- **Error**: `SdkException<Update4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
