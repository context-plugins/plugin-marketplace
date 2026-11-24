<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLogApi — operations

Accessor: `client.AuditLogApi` · Source: `src/Asana/Api/AuditLogApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAuditLogEvents

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetAuditLogEvents(GetAuditLogEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`
- **Query params (wire ← C#)**: `start_at` ← `StartAt`, `end_at` ← `EndAt`, `event_type` ← `EventType`, `actor_type` ← `ActorType`, `actor_gid` ← `ActorGid`, `resource_gid` ← `ResourceGid`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `WorkspacesAuditLogEventsResponse`
- **Error**: `ApiException<GetAuditLogEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAuditLogEventsRequest` | `src/Asana/Requests/AuditLogApi/GetAuditLogEventsRequest.cs` |
| `ActorType1` | `src/Asana/Models/Enums/ActorType1.cs` |
| `WorkspacesAuditLogEventsResponse` | `src/Asana/Models/WorkspacesAuditLogEventsResponse.cs` |
| `GetAuditLogEventsError` | `src/Asana/Errors/GetAuditLogEventsError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

