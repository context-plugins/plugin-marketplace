<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Trigger — operations

Accessor: `client.Api20100401Trigger` · Source: `Api/Api20100401Trigger.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateUsageTrigger

- **Signature**: `CreateUsageTrigger(string accountSid, string callbackUrl, string triggerValue, string usageCategory, CallbackMethod1? callbackMethod, string? friendlyName, UsageTriggerEnumRecurring? recurring, UsageTriggerEnumTriggerField? triggerBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`callbackMethod` … `triggerBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountUsageUsageTrigger`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CallbackMethod1` | `Models/Enums/CallbackMethod1.cs` |
| `UsageTriggerEnumRecurring` | `Models/Enums/UsageTriggerEnumRecurring.cs` |
| `UsageTriggerEnumTriggerField` | `Models/Enums/UsageTriggerEnumTriggerField.cs` |
| `ApiV2010AccountUsageUsageTrigger` | `Models/ApiV2010AccountUsageUsageTrigger.cs` |

### DeleteUsageTrigger

- **Signature**: `DeleteUsageTrigger(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchUsageTrigger

- **Signature**: `FetchUsageTrigger(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountUsageUsageTrigger`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountUsageUsageTrigger` | `Models/ApiV2010AccountUsageUsageTrigger.cs` |

### ListUsageTrigger

- **Signature**: `ListUsageTrigger(string accountSid, UsageTriggerEnumRecurring? recurring, UsageTriggerEnumTriggerField? triggerBy, string? usageCategory, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`recurring` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Recurring` ← `recurring`, `TriggerBy` ← `triggerBy`, `UsageCategory` ← `usageCategory`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListUsageTriggerResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UsageTriggerEnumRecurring` | `Models/Enums/UsageTriggerEnumRecurring.cs` |
| `UsageTriggerEnumTriggerField` | `Models/Enums/UsageTriggerEnumTriggerField.cs` |
| `ListUsageTriggerResponse` | `Models/ListUsageTriggerResponse.cs` |

### UpdateUsageTrigger

- **Signature**: `UpdateUsageTrigger(string accountSid, string sid, CallbackMethod1? callbackMethod, string? callbackUrl, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `callbackMethod` — nullable, no default → **must pass explicitly**
  - `callbackUrl` — nullable, no default → **must pass explicitly**
  - `friendlyName` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountUsageUsageTrigger`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CallbackMethod1` | `Models/Enums/CallbackMethod1.cs` |
| `ApiV2010AccountUsageUsageTrigger` | `Models/ApiV2010AccountUsageUsageTrigger.cs` |

