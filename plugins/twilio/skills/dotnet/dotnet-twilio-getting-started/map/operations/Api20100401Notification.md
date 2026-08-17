<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Notification — operations

Accessor: `client.Api20100401Notification` · Source: `Api/Api20100401Notification.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchNotification

- **Signature**: `FetchNotification(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountNotificationInstance`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountNotificationInstance` | `Models/ApiV2010AccountNotificationInstance.cs` |

### ListNotification

- **Signature**: `ListNotification(string accountSid, int? log, DateTimeOffset? messageDate, DateTimeOffset? messageDateQuery, DateTimeOffset? messageDateQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`log` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Log` ← `log`, `MessageDate` ← `messageDate`, `MessageDate<` ← `messageDateQuery`, `MessageDate>` ← `messageDateQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListNotificationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListNotificationResponse` | `Models/ListNotificationResponse.cs` |

