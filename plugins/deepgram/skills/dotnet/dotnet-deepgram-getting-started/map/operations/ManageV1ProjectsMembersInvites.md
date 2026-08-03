# ManageV1ProjectsMembersInvites — operations

Accessor: `client.ManageV1ProjectsMembersInvites` · Source: `Api/ManageV1ProjectsMembersInvites.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Create4
- **HTTP**: `POST /v1/projects/{project_id}/invites` (Default (agent))
- **Notes**: Generates an invite for a specific project
- **Signature**: `Create4(string projectId, string authorization, CreateProjectInviteV1Request? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateProjectInviteV1Response`
- **Error**: `SdkException<Create4Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Delete6
- **HTTP**: `DELETE /v1/projects/{project_id}/invites/{email}` (Default (agent))
- **Notes**: Deletes an invite for a specific project
- **Signature**: `Delete6(string projectId, string email, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteProjectInviteV1Response`
- **Error**: `SdkException<Delete6Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### List10
- **HTTP**: `GET /v1/projects/{project_id}/invites` (Default (agent))
- **Notes**: Generates a list of invites for a specific project
- **Signature**: `List10(string projectId, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ListProjectInvitesV1Response`
- **Error**: `SdkException<List10Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
