<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Notification — operations

Accessor: `client.VerifyV2Notification` · Source: `Api/VerifyV2Notification.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateNotification

- **Server group**: `Default3`
- **Signature**: `CreateNotification(string serviceSid, string identity, string challengeSid, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
- **Returns**: `VerifyV2ServiceEntityChallengeNotification`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceEntityChallengeNotification` | `Models/VerifyV2ServiceEntityChallengeNotification.cs` |

