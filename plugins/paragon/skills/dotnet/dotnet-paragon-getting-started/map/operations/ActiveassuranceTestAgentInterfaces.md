# ActiveassuranceTestAgentInterfaces — operations

Accessor: `client.ActiveassuranceTestAgentInterfaces` · Source: `Api/ActiveassuranceTestAgentInterfaces.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TestAgentServiceCancelTestAgentInterfaceCommit
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/interface_commits:cancel` (Default)
- **Signature**: `TestAgentServiceCancelTestAgentInterfaceCommit(string orgId, string testAgentId, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceCreateTestAgentInterface
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/interfaces` (Default)
- **Signature**: `TestAgentServiceCreateTestAgentInterface(string orgId, string testAgentId, bool? validateOnly, TestAgentInterface1 testAgentInterface, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validate_only` ← `validateOnly`
- **Returns**: `TestAgentInterface1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceCreateTestAgentInterfaceCommit
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/interface_commits` (Default)
- **Signature**: `TestAgentServiceCreateTestAgentInterfaceCommit(string orgId, string testAgentId, bool? validateOnly, TestAgentInterfaceCommit testAgentInterfaceCommit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validate_only` ← `validateOnly`
- **Returns**: `TestAgentInterfaceCommit`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceDiscardTestAgentPendingChanges
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}:discardPendingChanges` (Default)
- **Signature**: `TestAgentServiceDiscardTestAgentPendingChanges(string orgId, string testAgentId, DiscardTestAgentPendingChangesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceGetTestAgentGlobalConfig
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/global_config` (Default)
- **Signature**: `TestAgentServiceGetTestAgentGlobalConfig(string orgId, string testAgentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TestAgentGlobalConfig`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceGetTestAgentInterfaceCommit
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/interface_commits/{commit_id}` (Default)
- **Signature**: `TestAgentServiceGetTestAgentInterfaceCommit(string orgId, string testAgentId, string commitId, View? view, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `view` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `view` ← `view`
- **Returns**: `TestAgentInterfaceCommit`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceGetTestAgentSshconfigCommit
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/ssh_config_commits/{commit_id}` (Default)
- **Signature**: `TestAgentServiceGetTestAgentSshconfigCommit(string orgId, string testAgentId, string commitId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TestAgentSshconfigCommit`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceListNtpstats
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/ntp_stats` (Default)
- **Signature**: `TestAgentServiceListNtpstats(string orgId, string testAgentId, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `ListNtpstatsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TestAgentServiceListTestAgentInterfaceCommits
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/interface_commits` (Default)
- **Signature**: `TestAgentServiceListTestAgentInterfaceCommits(string orgId, string testAgentId, int? page, int? limit, string? filter, string? orderBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `orderBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`
- **Returns**: `ListTestAgentInterfaceCommitsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TestAgentServiceUpdateTestAgentGlobalConfig
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/global_config` (Default)
- **Signature**: `TestAgentServiceUpdateTestAgentGlobalConfig(string orgId, string testAgentId, string? updateMask, bool? validateOnly, TestAgentGlobalConfig testAgentGlobalConfig, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `validate_only` ← `validateOnly`
- **Returns**: `TestAgentGlobalConfig`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
