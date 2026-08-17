<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1LinkshorteningMessagingServiceApi — operations

Accessor: `client.MessagingV1LinkshorteningMessagingServiceApi` · Source: `Api/MessagingV1LinkshorteningMessagingServiceApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateLinkshorteningMessagingService

- **Server group**: `Default1`
- **Signature**: `CreateLinkshorteningMessagingService(string domainSid, string messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1LinkshorteningMessagingService`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1LinkshorteningMessagingService` | `Models/MessagingV1LinkshorteningMessagingService.cs` |

### DeleteLinkshorteningMessagingService

- **Server group**: `Default1`
- **Signature**: `DeleteLinkshorteningMessagingService(string domainSid, string messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

