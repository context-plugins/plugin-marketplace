<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1AddressConfiguration — operations

Accessor: `client.ConversationsV1AddressConfiguration` · Source: `Api/ConversationsV1AddressConfiguration.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConfigurationAddress

- **Server group**: `Default7`
- **Signature**: `CreateConfigurationAddress(ConfigurationAddressEnumType type, string address, string? friendlyName, bool? autoCreationEnabled, ConfigurationAddressEnumAutoCreationType? autoCreationType, string? autoCreationConversationServiceSid, string? autoCreationWebhookUrl, ConfigurationAddressEnumMethod? autoCreationWebhookMethod, IReadOnlyList<string>? autoCreationWebhookFilters, string? autoCreationStudioFlowSid, int? autoCreationStudioRetryCount, string? addressCountry, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`friendlyName` … `addressCountry`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ConfigurationAddress`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConfigurationAddressEnumType` | `Models/Enums/ConfigurationAddressEnumType.cs` |
| `ConfigurationAddressEnumAutoCreationType` | `Models/Enums/ConfigurationAddressEnumAutoCreationType.cs` |
| `ConfigurationAddressEnumMethod` | `Models/Enums/ConfigurationAddressEnumMethod.cs` |
| `ConversationsV1ConfigurationAddress` | `Models/ConversationsV1ConfigurationAddress.cs` |

### DeleteConfigurationAddress

- **Server group**: `Default7`
- **Signature**: `DeleteConfigurationAddress(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchConfigurationAddress

- **Server group**: `Default7`
- **Signature**: `FetchConfigurationAddress(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ConfigurationAddress`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ConfigurationAddress` | `Models/ConversationsV1ConfigurationAddress.cs` |

### ListConfigurationAddress

- **Server group**: `Default7`
- **Signature**: `ListConfigurationAddress(string? type, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`type` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Type` ← `type`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConfigurationAddressResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListConfigurationAddressResponse` | `Models/ListConfigurationAddressResponse.cs` |

### UpdateConfigurationAddress

- **Server group**: `Default7`
- **Signature**: `UpdateConfigurationAddress(string sid, string? friendlyName, bool? autoCreationEnabled, ConfigurationAddressEnumAutoCreationType? autoCreationType, string? autoCreationConversationServiceSid, string? autoCreationWebhookUrl, ConfigurationAddressEnumMethod? autoCreationWebhookMethod, IReadOnlyList<string>? autoCreationWebhookFilters, string? autoCreationStudioFlowSid, int? autoCreationStudioRetryCount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`friendlyName` … `autoCreationStudioRetryCount`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ConfigurationAddress`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConfigurationAddressEnumAutoCreationType` | `Models/Enums/ConfigurationAddressEnumAutoCreationType.cs` |
| `ConfigurationAddressEnumMethod` | `Models/Enums/ConfigurationAddressEnumMethod.cs` |
| `ConversationsV1ConfigurationAddress` | `Models/ConversationsV1ConfigurationAddress.cs` |

