<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1ParticipantConversationApi — operations

Accessor: `client.ConversationsV1ParticipantConversationApi` · Source: `Api/ConversationsV1ParticipantConversationApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListParticipantConversation

- **Server group**: `Default7`
- **Signature**: `ListParticipantConversation(string? identity, string? address, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`identity` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Identity` ← `identity`, `Address` ← `address`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListParticipantConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListParticipantConversationResponse` | `Models/ListParticipantConversationResponse.cs` |

### ListServiceParticipantConversation

- **Server group**: `Default7`
- **Signature**: `ListServiceParticipantConversation(string chatServiceSid, string? identity, string? address, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`identity` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Identity` ← `identity`, `Address` ← `address`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListServiceParticipantConversationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListServiceParticipantConversationResponse` | `Models/ListServiceParticipantConversationResponse.cs` |

