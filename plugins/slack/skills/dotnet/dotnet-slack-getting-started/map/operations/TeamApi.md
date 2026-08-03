# TeamApi — operations

Accessor: `client.TeamApi` · Source: `Api/TeamApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TeamAccessLogs
- **HTTP**: `GET /team.accessLogs` (Default (slack))
- **Notes**: Gets the access logs for the current team.
- **Signature**: `TeamAccessLogs(string token, string? before, string? count, string? page, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `before` — nullable, no default → **must pass explicitly**
  - `count` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `before` ← `before`, `count` ← `count`, `page` ← `page`
- **Returns**: `TeamAccessLogsschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TeamBillableInfo
- **HTTP**: `GET /team.billableInfo` (Default (slack))
- **Notes**: Gets billable users information for the current team.
- **Signature**: `TeamBillableInfo(string token, string? user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `user` ← `user`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TeamInfo
- **HTTP**: `GET /team.info` (Default (slack))
- **Notes**: Gets information about the current team.
- **Signature**: `TeamInfo(string token, string? team, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `team` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `team` ← `team`
- **Returns**: `TeamInfoschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TeamIntegrationLogs
- **HTTP**: `GET /team.integrationLogs` (Default (slack))
- **Notes**: Gets the integration logs for the current team.
- **Signature**: `TeamIntegrationLogs(string token, string? appId, string? changeType, string? count, string? page, string? serviceId, string? user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`appId` … `user`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `app_id` ← `appId`, `change_type` ← `changeType`, `count` ← `count`, `page` ← `page`, `service_id` ← `serviceId`, `user` ← `user`
- **Returns**: `TeamIntegrationLogsschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TeamProfileGet
- **HTTP**: `GET /team.profile.get` (Default (slack))
- **Notes**: Retrieve a team's profile.
- **Signature**: `TeamProfileGet(string token, string? visibility, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `visibility` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `visibility` ← `visibility`
- **Returns**: `TeamProfileGetsuccessschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
