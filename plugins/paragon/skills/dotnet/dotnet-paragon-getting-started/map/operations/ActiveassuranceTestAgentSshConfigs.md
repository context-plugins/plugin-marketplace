# ActiveassuranceTestAgentSshConfigs — operations

Accessor: `client.ActiveassuranceTestAgentSshConfigs` · Source: `Api/ActiveassuranceTestAgentSshConfigs.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TestAgentServiceCreateTestAgentSshconfigCommit
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/ssh_config_commits` (Default)
- **Signature**: `TestAgentServiceCreateTestAgentSshconfigCommit(string orgId, string testAgentId, bool? validateOnly, TestAgentSshconfigCommit testAgentSshConfigCommit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validate_only` ← `validateOnly`
- **Returns**: `TestAgentSshconfigCommit`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceGetTestAgentSshconfig
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/ssh_config` (Default)
- **Signature**: `TestAgentServiceGetTestAgentSshconfig(string orgId, string testAgentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TestAgentSshconfig`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceListTestAgentSshconfigCommits
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/ssh_config_commits` (Default)
- **Signature**: `TestAgentServiceListTestAgentSshconfigCommits(string orgId, string testAgentId, int? page, int? limit, string? filter, string? orderBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `orderBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`
- **Returns**: `ListTestAgentSshconfigCommitsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TestAgentServiceUpdateTestAgentSshconfig
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/ssh_config` (Default)
- **Signature**: `TestAgentServiceUpdateTestAgentSshconfig(string orgId, string testAgentId, string? updateMask, bool? validateOnly, TestAgentSshconfig testAgentSshConfig, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `validate_only` ← `validateOnly`
- **Returns**: `TestAgentSshconfig`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
