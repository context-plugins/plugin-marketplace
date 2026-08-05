# RoutingobservabilityJri — operations

Accessor: `client.RoutingobservabilityJri` · Source: `Api/RoutingobservabilityJri.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetJriAllUniqueExceptionList
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/jri/unique-exceptions` (Default)
- **Signature**: `GetJriAllUniqueExceptionList(string orgId, int startTime, int endTime, string? xFields, string? deviceMac = "*", string? exceptionCode = "*", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xFields` — nullable, no default → **must pass explicitly**
  - defaults: `deviceMac` = "*", `exceptionCode` = "*", `requestOptions` = null
- **Query params (wire ← C#)**: `start_time` ← `startTime`, `end_time` ← `endTime`, `device_mac` ← `deviceMac`, `exception_code` ← `exceptionCode`
- **Returns**: `ConsolidatedExceptionList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetJriForwardingExceptions
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/jri/forwarding-exceptions` (Default)
- **Signature**: `GetJriForwardingExceptions(string orgId, int startTime, int endTime, string? xFields, string? deviceId = "*", string? exceptionCode = "*", bool? flowInformation = false, int? pageNo = 1, int? perPage = 10, string? etherType = "*", bool? aggregate = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xFields` — nullable, no default → **must pass explicitly**
  - defaults: `deviceId` = "*", `exceptionCode` = "*", `flowInformation` = false, `pageNo` = 1, `perPage` = 10, `etherType` = "*", `aggregate` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `start_time` ← `startTime`, `end_time` ← `endTime`, `device_id` ← `deviceId`, `exception_code` ← `exceptionCode`, `flow_information` ← `flowInformation`, `page_no` ← `pageNo`, `per_page` ← `perPage`, `ether_type` ← `etherType`, `aggregate` ← `aggregate`
- **Returns**: `IReadOnlyList<JriForwardingExceptions>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetJriRoutingExceptions
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/jri/routing-exceptions` (Default)
- **Signature**: `GetJriRoutingExceptions(string orgId, int startTime, int endTime, string? xFields, string? deviceId = "*", string? exceptionCode = "*", bool? flowInformation = false, int? pageNo = 1, int? perPage = 10, string? etherType = "*", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xFields` — nullable, no default → **must pass explicitly**
  - defaults: `deviceId` = "*", `exceptionCode` = "*", `flowInformation` = false, `pageNo` = 1, `perPage` = 10, `etherType` = "*", `requestOptions` = null
- **Query params (wire ← C#)**: `start_time` ← `startTime`, `end_time` ← `endTime`, `device_id` ← `deviceId`, `exception_code` ← `exceptionCode`, `flow_information` ← `flowInformation`, `page_no` ← `pageNo`, `per_page` ← `perPage`, `ether_type` ← `etherType`
- **Returns**: `IReadOnlyList<JriRoutingExceptions>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetJriosExceptions
- **HTTP**: `GET /routingbot/api/v1/orgs/{org_id}/jri/os-exceptions` (Default)
- **Signature**: `GetJriosExceptions(string orgId, int startTime, int endTime, string? xFields, string? deviceId = "*", string? exceptionCode = "*", bool? flowInformation = false, int? pageNo = 1, int? perPage = 10, string? etherType = "*", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xFields` — nullable, no default → **must pass explicitly**
  - defaults: `deviceId` = "*", `exceptionCode` = "*", `flowInformation` = false, `pageNo` = 1, `perPage` = 10, `etherType` = "*", `requestOptions` = null
- **Query params (wire ← C#)**: `start_time` ← `startTime`, `end_time` ← `endTime`, `device_id` ← `deviceId`, `exception_code` ← `exceptionCode`, `flow_information` ← `flowInformation`, `page_no` ← `pageNo`, `per_page` ← `perPage`, `ether_type` ← `etherType`
- **Returns**: `IReadOnlyList<JriOsexceptions>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
