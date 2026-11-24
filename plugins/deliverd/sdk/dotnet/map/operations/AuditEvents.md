<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditEvents — operations

Accessor: `client.AuditEvents` · Source: `src/Deliverd/Api/AuditEvents.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1AuditEvents

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1AuditEvents(GetApiV1AuditEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `since` ← `Since`, `until` ← `Until`, `eventType` ← `EventType`, `actorId` ← `ActorId`, `actorType` ← `ActorType`, `resourceType` ← `ResourceType`, `resourceId` ← `ResourceId`, `flowId` ← `FlowId`, `afterSeq` ← `AfterSeq`
- **Returns**: `ApiV1AuditEventsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1AuditEventsRequest` | `src/Deliverd/Requests/AuditEvents/GetApiV1AuditEventsRequest.cs` |
| `ActorType` | `src/Deliverd/Models/Enums/ActorType.cs` |
| `ApiV1AuditEventsResponse` | `src/Deliverd/Models/ApiV1AuditEventsResponse.cs` |

