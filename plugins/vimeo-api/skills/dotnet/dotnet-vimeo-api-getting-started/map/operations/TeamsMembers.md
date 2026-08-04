# TeamsMembers — operations

Accessor: `client.TeamsMembers` · Source: `Api/TeamsMembers.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetTeamInformation
- **HTTP**: `GET /teammembers/{code}` (Default (api))
- **Notes**: This method returns information about the membership of the specified team. Usage is currently limited to the team join forms.
- **Signature**: `GetTeamInformation(string code, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTeamInformation2
- **HTTP**: `GET /users/{user_id}/team_users/{team_user_id}` (Default (api))
- **Notes**: This method returns information about the membership of the specified team. Usage is currently limited to the team join forms.
- **Signature**: `GetTeamInformation2(double teamUserId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTeamRoleInformation
- **HTTP**: `GET /users/{user_id}/team/role` (Default (api))
- **Notes**: This method returns information about the authenticated user's role on the specified team owner's team.
- **Signature**: `GetTeamRoleInformation(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
