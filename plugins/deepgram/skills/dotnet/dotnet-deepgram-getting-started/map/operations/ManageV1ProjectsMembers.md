# ManageV1ProjectsMembers — operations

Accessor: `client.ManageV1ProjectsMembers` · Source: `Api/ManageV1ProjectsMembers.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Delete5
- **HTTP**: `DELETE /v1/projects/{project_id}/members/{member_id}` (Default (agent))
- **Notes**: Removes a member from the project using their unique member ID
- **Signature**: `Delete5(string projectId, string memberId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteProjectMemberV1Response`
- **Error**: `SdkException<Delete5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List8
- **HTTP**: `GET /v1/projects/{project_id}/members` (Default (agent))
- **Notes**: Retrieves a list of members for a given project
- **Signature**: `List8(string projectId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListProjectMembersV1Response`
- **Error**: `SdkException<List8Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
