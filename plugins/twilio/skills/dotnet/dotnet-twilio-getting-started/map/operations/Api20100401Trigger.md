# Api20100401Trigger — operations

Accessor: `client.Api20100401Trigger` · Source: `Api/Api20100401Trigger.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateUsageTrigger
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json` (Default (api))
- **Notes**: Create a new UsageTrigger
- **Signature**: `CreateUsageTrigger(string accountSid, string callbackUrl, string triggerValue, string usageCategory, CallbackMethod1? callbackMethod, string? friendlyName, UsageTriggerEnumRecurring? recurring, UsageTriggerEnumTriggerField? triggerBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`callbackMethod` … `triggerBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CallbackUrl` ← `callbackUrl`, `TriggerValue` ← `triggerValue`, `UsageCategory` ← `usageCategory`, `CallbackMethod` ← `callbackMethod`, `FriendlyName` ← `friendlyName`, `Recurring` ← `recurring`, `TriggerBy` ← `triggerBy`
- **Returns**: `ApiV2010AccountUsageUsageTrigger`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteUsageTrigger
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json` (Default (api))
- **Signature**: `DeleteUsageTrigger(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchUsageTrigger
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json` (Default (api))
- **Notes**: Fetch and instance of a usage-trigger
- **Signature**: `FetchUsageTrigger(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountUsageUsageTrigger`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListUsageTrigger
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json` (Default (api))
- **Notes**: Retrieve a list of usage-triggers belonging to the account used to make the request
- **Signature**: `ListUsageTrigger(string accountSid, UsageTriggerEnumRecurring? recurring, UsageTriggerEnumTriggerField? triggerBy, string? usageCategory, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`recurring` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Recurring` ← `recurring`, `TriggerBy` ← `triggerBy`, `UsageCategory` ← `usageCategory`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUsageTriggerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateUsageTrigger
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json` (Default (api))
- **Notes**: Update an instance of a usage trigger
- **Signature**: `UpdateUsageTrigger(string accountSid, string sid, CallbackMethod1? callbackMethod, string? callbackUrl, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `callbackMethod` — nullable, no default → **must pass explicitly**
  - `callbackUrl` — nullable, no default → **must pass explicitly**
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CallbackMethod` ← `callbackMethod`, `CallbackUrl` ← `callbackUrl`, `FriendlyName` ← `friendlyName`
- **Returns**: `ApiV2010AccountUsageUsageTrigger`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
