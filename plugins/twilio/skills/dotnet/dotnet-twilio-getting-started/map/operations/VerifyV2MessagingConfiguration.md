<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2MessagingConfiguration — operations

Accessor: `client.VerifyV2MessagingConfiguration` · Source: `Api/VerifyV2MessagingConfiguration.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMessagingConfiguration

- **Server group**: `Default3`
- **Signature**: `CreateMessagingConfiguration(string serviceSid, string country, string messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceMessagingConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceMessagingConfiguration` | `Models/VerifyV2ServiceMessagingConfiguration.cs` |

### DeleteMessagingConfiguration

- **Server group**: `Default3`
- **Signature**: `DeleteMessagingConfiguration(string serviceSid, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchMessagingConfiguration

- **Server group**: `Default3`
- **Signature**: `FetchMessagingConfiguration(string serviceSid, string country, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceMessagingConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceMessagingConfiguration` | `Models/VerifyV2ServiceMessagingConfiguration.cs` |

### ListMessagingConfiguration

- **Server group**: `Default3`
- **Signature**: `ListMessagingConfiguration(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListMessagingConfigurationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListMessagingConfigurationResponse` | `Models/ListMessagingConfigurationResponse.cs` |

### UpdateMessagingConfiguration

- **Server group**: `Default3`
- **Signature**: `UpdateMessagingConfiguration(string serviceSid, string country, string messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceMessagingConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceMessagingConfiguration` | `Models/VerifyV2ServiceMessagingConfiguration.cs` |

