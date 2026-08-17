<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Message — operations

Accessor: `client.Api20100401Message` · Source: `Api/Api20100401Message.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMessage

- **Signature**: `CreateMessage(string accountSid, string to, string? statusCallback, string? applicationSid, double? maxPrice, bool? provideFeedback, int? attempt, int? validityPeriod, bool? forceDelivery, MessageEnumContentRetention? contentRetention, MessageEnumAddressRetention? addressRetention, bool? smartEncoded, IReadOnlyList<string>? persistentAction, MessageEnumTrafficType? trafficType, bool? shortenUrls, MessageEnumScheduleType? scheduleType, DateTimeOffset? sendAt, bool? sendAsMms, string? contentVariables, MessageEnumRiskCheck? riskCheck, string? from, string? fallbackFrom, string? messagingServiceSid, string? body, IReadOnlyList<string>? mediaUrl, string? contentSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 24 params (`statusCallback` … `contentSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountMessage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessageEnumContentRetention` | `Models/Enums/MessageEnumContentRetention.cs` |
| `MessageEnumAddressRetention` | `Models/Enums/MessageEnumAddressRetention.cs` |
| `MessageEnumTrafficType` | `Models/Enums/MessageEnumTrafficType.cs` |
| `MessageEnumScheduleType` | `Models/Enums/MessageEnumScheduleType.cs` |
| `MessageEnumRiskCheck` | `Models/Enums/MessageEnumRiskCheck.cs` |
| `ApiV2010AccountMessage` | `Models/ApiV2010AccountMessage.cs` |

### DeleteMessage

- **Signature**: `DeleteMessage(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchMessage

- **Signature**: `FetchMessage(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountMessage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountMessage` | `Models/ApiV2010AccountMessage.cs` |

### ListMessage

- **Signature**: `ListMessage(string accountSid, string? to, string? from, DateTimeOffset? dateSent, DateTimeOffset? dateSentQuery, DateTimeOffset? dateSentQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`to` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `To` ← `to`, `From` ← `from`, `DateSent` ← `dateSent`, `DateSent<` ← `dateSentQuery`, `DateSent>` ← `dateSentQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListMessageResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListMessageResponse` | `Models/ListMessageResponse.cs` |

### UpdateMessage

- **Signature**: `UpdateMessage(string accountSid, string sid, string? body, MessageEnumUpdateStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountMessage`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessageEnumUpdateStatus` | `Models/Enums/MessageEnumUpdateStatus.cs` |
| `ApiV2010AccountMessage` | `Models/ApiV2010AccountMessage.cs` |

