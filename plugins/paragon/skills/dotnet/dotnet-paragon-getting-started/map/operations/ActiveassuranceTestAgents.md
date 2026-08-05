# ActiveassuranceTestAgents — operations

Accessor: `client.ActiveassuranceTestAgents` · Source: `Api/ActiveassuranceTestAgents.cs` · 15 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TestAgentServiceBatchGetTestAgents
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents:batchGet` (Default)
- **Signature**: `TestAgentServiceBatchGetTestAgents(string orgId, BatchGetTestAgentsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchGetTestAgentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceCreateTestAgent
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents` (Default)
- **Signature**: `TestAgentServiceCreateTestAgent(string orgId, bool? validateOnly, TestAgent testAgent, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validate_only` ← `validateOnly`
- **Returns**: `TestAgent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceDeleteTestAgent
- **HTTP**: `DELETE /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}` (Default)
- **Signature**: `TestAgentServiceDeleteTestAgent(string orgId, string testAgentId, bool? force, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `force` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `force` ← `force`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceDeleteTestAgentInterface
- **HTTP**: `DELETE /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/interfaces/{interface_name}` (Default)
- **Signature**: `TestAgentServiceDeleteTestAgentInterface(string orgId, string testAgentId, string interfaceName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceDownloadFile
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agent_files:download/{file_path}` (Default)
- **Signature**: `TestAgentServiceDownloadFile(string orgId, string filePath, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceGenerateSecret
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}:generateSecret` (Default)
- **Signature**: `TestAgentServiceGenerateSecret(string orgId, string testAgentId, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenerateSecretResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceGetTestAgent
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}` (Default)
- **Signature**: `TestAgentServiceGetTestAgent(string orgId, string testAgentId, string? readMask, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `readMask` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `read_mask` ← `readMask`
- **Returns**: `TestAgent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceGetTestAgentInterface
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/interfaces/{interface_name}` (Default)
- **Signature**: `TestAgentServiceGetTestAgentInterface(string orgId, string testAgentId, string interfaceName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TestAgentInterface1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceListTestAgentInterfaces
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/interfaces` (Default)
- **Signature**: `TestAgentServiceListTestAgentInterfaces(string orgId, string testAgentId, int? page, int? limit, string? filter, string? orderBy, bool? showTestAgents, View1? view, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`page` … `view`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`, `show_test_agents` ← `showTestAgents`, `view` ← `view`
- **Returns**: `ListTestAgentInterfacesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TestAgentServiceListTestAgents
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/test_agents` (Default)
- **Signature**: `TestAgentServiceListTestAgents(string orgId, int? page, int? limit, string? filter, string? orderBy, bool? showDeleted, string? readMask, DateTimeOffset? healthWindowStartTime, DateTimeOffset? healthWindowEndTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`page` … `healthWindowEndTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`, `show_deleted` ← `showDeleted`, `read_mask` ← `readMask`, `health_window_start_time` ← `healthWindowStartTime`, `health_window_end_time` ← `healthWindowEndTime`
- **Returns**: `ListTestAgentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TestAgentServiceRebootTestAgents
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents:reboot` (Default)
- **Signature**: `TestAgentServiceRebootTestAgents(string orgId, RebootTestAgentsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RebootTestAgentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceUndeleteTestAgent
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}:undelete` (Default)
- **Signature**: `TestAgentServiceUndeleteTestAgent(string orgId, string testAgentId, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TestAgent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceUpdateTestAgent
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}` (Default)
- **Signature**: `TestAgentServiceUpdateTestAgent(string orgId, string testAgentId, string? updateMask, bool? validateOnly, TestAgent testAgent, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `validate_only` ← `validateOnly`
- **Returns**: `TestAgent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceUpdateTestAgentInterface
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/test_agents/{test_agent_id}/interfaces/{interface_name}` (Default)
- **Signature**: `TestAgentServiceUpdateTestAgentInterface(string orgId, string testAgentId, string interfaceName, string? updateMask, bool? validateOnly, TestAgentInterface1 testAgentInterface, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `validateOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `validate_only` ← `validateOnly`
- **Returns**: `TestAgentInterface1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TestAgentServiceUpgradeTestAgentsVersion
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/test_agents:upgrade` (Default)
- **Signature**: `TestAgentServiceUpgradeTestAgentsVersion(string orgId, UpgradeTestAgentsVersionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpgradeTestAgentsVersionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
