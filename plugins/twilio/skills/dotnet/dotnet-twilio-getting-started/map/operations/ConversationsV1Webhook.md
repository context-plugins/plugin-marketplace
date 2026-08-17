<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1Webhook — operations

Accessor: `client.ConversationsV1Webhook` · Source: `Api/ConversationsV1Webhook.cs` · 14 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConversationScopedWebhook

- **Server group**: `Default7`
- **Signature**: `CreateConversationScopedWebhook(string conversationSid, ConversationScopedWebhookEnumTarget target, string? configurationUrl, ConversationScopedWebhookEnumMethod? configurationMethod, IReadOnlyList<string>? configurationFilters, IReadOnlyList<string>? configurationTriggers, string? configurationFlowSid, int? configurationReplayAfter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`configurationUrl` … `configurationReplayAfter`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ConversationConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationScopedWebhookEnumTarget` | `Models/Enums/ConversationScopedWebhookEnumTarget.cs` |
| `ConversationScopedWebhookEnumMethod` | `Models/Enums/ConversationScopedWebhookEnumMethod.cs` |
| `ConversationsV1ConversationConversationScopedWebhook` | `Models/ConversationsV1ConversationConversationScopedWebhook.cs` |

### CreateServiceConversationScopedWebhook

- **Server group**: `Default7`
- **Signature**: `CreateServiceConversationScopedWebhook(string chatServiceSid, string conversationSid, ServiceConversationScopedWebhookEnumTarget target, string? configurationUrl, ServiceConversationScopedWebhookEnumMethod? configurationMethod, IReadOnlyList<string>? configurationFilters, IReadOnlyList<string>? configurationTriggers, string? configurationFlowSid, int? configurationReplayAfter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`configurationUrl` … `configurationReplayAfter`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceConversationScopedWebhookEnumTarget` | `Models/Enums/ServiceConversationScopedWebhookEnumTarget.cs` |
| `ServiceConversationScopedWebhookEnumMethod` | `Models/Enums/ServiceConversationScopedWebhookEnumMethod.cs` |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `Models/ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook.cs` |

### DeleteConversationScopedWebhook

- **Server group**: `Default7`
- **Signature**: `DeleteConversationScopedWebhook(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### DeleteServiceConversationScopedWebhook

- **Server group**: `Default7`
- **Signature**: `DeleteServiceConversationScopedWebhook(string chatServiceSid, string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchConfigurationWebhook

- **Server group**: `Default7`
- **Signature**: `FetchConfigurationWebhook(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ConfigurationConfigurationWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ConfigurationConfigurationWebhook` | `Models/ConversationsV1ConfigurationConfigurationWebhook.cs` |

### FetchConversationScopedWebhook

- **Server group**: `Default7`
- **Signature**: `FetchConversationScopedWebhook(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ConversationConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ConversationConversationScopedWebhook` | `Models/ConversationsV1ConversationConversationScopedWebhook.cs` |

### FetchServiceConversationScopedWebhook

- **Server group**: `Default7`
- **Signature**: `FetchServiceConversationScopedWebhook(string chatServiceSid, string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `Models/ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook.cs` |

### FetchServiceWebhookConfiguration

- **Server group**: `Default7`
- **Signature**: `FetchServiceWebhookConfiguration(string chatServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration` | `Models/ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.cs` |

### ListConversationScopedWebhook

- **Server group**: `Default7`
- **Signature**: `ListConversationScopedWebhook(string conversationSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConversationScopedWebhookResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListConversationScopedWebhookResponse` | `Models/ListConversationScopedWebhookResponse.cs` |

### ListServiceConversationScopedWebhook

- **Server group**: `Default7`
- **Signature**: `ListServiceConversationScopedWebhook(string chatServiceSid, string conversationSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceConversationScopedWebhookResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceConversationScopedWebhookResponse` | `Models/ListServiceConversationScopedWebhookResponse.cs` |

### UpdateConfigurationWebhook

- **Server group**: `Default7`
- **Signature**: `UpdateConfigurationWebhook(string? method, IReadOnlyList<string>? filters, string? preWebhookUrl, string? postWebhookUrl, ConfigurationWebhookEnumTarget? target, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`method` … `target`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ConfigurationConfigurationWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConfigurationWebhookEnumTarget` | `Models/Enums/ConfigurationWebhookEnumTarget.cs` |
| `ConversationsV1ConfigurationConfigurationWebhook` | `Models/ConversationsV1ConfigurationConfigurationWebhook.cs` |

### UpdateConversationScopedWebhook

- **Server group**: `Default7`
- **Signature**: `UpdateConversationScopedWebhook(string conversationSid, string sid, string? configurationUrl, ConversationScopedWebhookEnumMethod? configurationMethod, IReadOnlyList<string>? configurationFilters, IReadOnlyList<string>? configurationTriggers, string? configurationFlowSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`configurationUrl` … `configurationFlowSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ConversationConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationScopedWebhookEnumMethod` | `Models/Enums/ConversationScopedWebhookEnumMethod.cs` |
| `ConversationsV1ConversationConversationScopedWebhook` | `Models/ConversationsV1ConversationConversationScopedWebhook.cs` |

### UpdateServiceConversationScopedWebhook

- **Server group**: `Default7`
- **Signature**: `UpdateServiceConversationScopedWebhook(string chatServiceSid, string conversationSid, string sid, string? configurationUrl, ServiceConversationScopedWebhookEnumMethod? configurationMethod, IReadOnlyList<string>? configurationFilters, IReadOnlyList<string>? configurationTriggers, string? configurationFlowSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`configurationUrl` … `configurationFlowSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceConversationScopedWebhookEnumMethod` | `Models/Enums/ServiceConversationScopedWebhookEnumMethod.cs` |
| `ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook` | `Models/ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook.cs` |

### UpdateServiceWebhookConfiguration

- **Server group**: `Default7`
- **Signature**: `UpdateServiceWebhookConfiguration(string chatServiceSid, string? preWebhookUrl, string? postWebhookUrl, IReadOnlyList<string>? filters, string? method, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`preWebhookUrl` … `method`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration` | `Models/ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.cs` |

