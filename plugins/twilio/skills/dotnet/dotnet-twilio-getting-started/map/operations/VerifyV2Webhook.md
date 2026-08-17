<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Webhook — operations

Accessor: `client.VerifyV2Webhook` · Source: `Api/VerifyV2Webhook.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Server group**: `Default3`
- **Signature**: `CreateWebhook(string serviceSid, string friendlyName, IReadOnlyList<string> eventTypes, string webhookUrl, WebhookEnumStatus? status, WebhookEnumVersion? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `version` — nullable, no default → **must pass explicitly**
- **Returns**: `VerifyV2ServiceWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `WebhookEnumStatus` | `Models/Enums/WebhookEnumStatus.cs` |
| `WebhookEnumVersion` | `Models/Enums/WebhookEnumVersion.cs` |
| `VerifyV2ServiceWebhook` | `Models/VerifyV2ServiceWebhook.cs` |

### DeleteWebhook

- **Server group**: `Default3`
- **Signature**: `DeleteWebhook(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchWebhook

- **Server group**: `Default3`
- **Signature**: `FetchWebhook(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VerifyV2ServiceWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VerifyV2ServiceWebhook` | `Models/VerifyV2ServiceWebhook.cs` |

### ListWebhook

- **Server group**: `Default3`
- **Signature**: `ListWebhook(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWebhookResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListWebhookResponse` | `Models/ListWebhookResponse.cs` |

### UpdateWebhook

- **Server group**: `Default3`
- **Signature**: `UpdateWebhook(string serviceSid, string sid, string? friendlyName, IReadOnlyList<string>? eventTypes, string? webhookUrl, WebhookEnumStatus? status, WebhookEnumVersion? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`friendlyName` … `version`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VerifyV2ServiceWebhook`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `WebhookEnumStatus` | `Models/Enums/WebhookEnumStatus.cs` |
| `WebhookEnumVersion` | `Models/Enums/WebhookEnumVersion.cs` |
| `VerifyV2ServiceWebhook` | `Models/VerifyV2ServiceWebhook.cs` |

