<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401CallNotification — operations

Accessor: `client.Api20100401CallNotification` · Source: `Api/Api20100401CallNotification.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchCallNotification

- **Signature**: `FetchCallNotification(string accountSid, string callSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountCallCallNotificationInstance`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountCallCallNotificationInstance` | `Models/ApiV2010AccountCallCallNotificationInstance.cs` |

### ListCallNotification

- **Signature**: `ListCallNotification(string accountSid, string callSid, int? log, DateTimeOffset? messageDate, DateTimeOffset? messageDateQuery, DateTimeOffset? messageDateQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`log` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Log` ← `log`, `MessageDate` ← `messageDate`, `MessageDate<` ← `messageDateQuery`, `MessageDate>` ← `messageDateQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCallNotificationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListCallNotificationResponse` | `Models/ListCallNotificationResponse.cs` |

