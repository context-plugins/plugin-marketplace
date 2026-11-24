<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditEvents — operations

Accessor: `client.audit_events` · Source: `deliverd/apis/audit_events.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.audit_events.get_api_v1_audit_events

- **Route**: `GET /api/v1/audit-events`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_audit_events(*, limit: int | None = None, cursor: str | None = None, since: RFC3339DateTime | None = None, until: RFC3339DateTime | None = None, event_type: str | None = None, actor_id: UUID | None = None, actor_type: ActorTypeOrStr | None = None, resource_type: str | None = None, resource_id: str | None = None, flow_id: UUID | None = None, after_seq: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `since` — query · `until` — query · `event_type` — query `eventType` · `actor_id` — query `actorId` · `actor_type` — query `actorType` · `resource_type` — query `resourceType` · `resource_id` — query `resourceId` · `flow_id` — query `flowId` · `after_seq` — query `afterSeq`
- **Returns (parsed)**: `ApiV1AuditEventsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AuditEventsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ActorTypeOrStr` | `deliverd/models/enums/actor_type.py` |
| `ApiV1AuditEventsResponse` | `deliverd/models/api_v1_audit_events_response.py` |

