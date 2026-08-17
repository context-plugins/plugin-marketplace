<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Event — operations

Accessor: `client.InsightsV1Event` · Source: `Api/InsightsV1Event.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListEvent2

- **Server group**: `Default14`
- **Signature**: `ListEvent2(string callSid, EventEnumTwilioEdge? edge, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`edge` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Edge` ← `edge`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEventResponse1`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EventEnumTwilioEdge` | `Models/Enums/EventEnumTwilioEdge.cs` |
| `ListEventResponse1` | `Models/ListEventResponse1.cs` |

