<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1ServiceApi — operations

Accessor: `client.MessagingV1ServiceApi` · Source: `Api/MessagingV1ServiceApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateService

- **Server group**: `Default1`
- **Signature**: `CreateService(string friendlyName, string? inboundRequestUrl, AmdStatusCallbackMethod? inboundMethod, string? fallbackUrl, AmdStatusCallbackMethod? fallbackMethod, string? statusCallback, bool? stickySender, bool? mmsConverter, bool? smartEncoding, ServiceEnumScanMessageContent? scanMessageContent, bool? fallbackToLongCode, bool? areaCodeGeomatch, int? validityPeriod, bool? synchronousValidation, string? usecase, bool? useInboundWebhookOnNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`inboundRequestUrl` … `useInboundWebhookOnNumber`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `MessagingV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `ServiceEnumScanMessageContent` | `Models/Enums/ServiceEnumScanMessageContent.cs` |
| `MessagingV1Service` | `Models/MessagingV1Service.cs` |

### DeleteService

- **Server group**: `Default1`
- **Signature**: `DeleteService(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchService

- **Server group**: `Default1`
- **Signature**: `FetchService(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1Service` | `Models/MessagingV1Service.cs` |

### ListService

- **Server group**: `Default1`
- **Signature**: `ListService(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceResponse` | `Models/ListServiceResponse.cs` |

### UpdateService

- **Server group**: `Default1`
- **Signature**: `UpdateService(string sid, string? friendlyName, string? inboundRequestUrl, AmdStatusCallbackMethod? inboundMethod, string? fallbackUrl, AmdStatusCallbackMethod? fallbackMethod, string? statusCallback, bool? stickySender, bool? mmsConverter, bool? smartEncoding, ServiceEnumScanMessageContent? scanMessageContent, bool? fallbackToLongCode, bool? areaCodeGeomatch, int? validityPeriod, bool? synchronousValidation, string? usecase, bool? useInboundWebhookOnNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`friendlyName` … `useInboundWebhookOnNumber`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `MessagingV1Service`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `ServiceEnumScanMessageContent` | `Models/Enums/ServiceEnumScanMessageContent.cs` |
| `MessagingV1Service` | `Models/MessagingV1Service.cs` |

