<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLogApi — operations

Accessor: `client.auditLogApi` · Source: `src/resources/audit-log-api.ts` · 1 operation · Request and error types: namespace `AuditLogApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAuditLogEvents

- **Signature**: `getAuditLogEvents(request: AuditLogApi.GetAuditLogEventsRequest, options?: RequestOptions): ApiPromise<WorkspacesAuditLogEventsResponse, AuditLogApi.GetAuditLogEventsError>`
- **Wire**: `GET /workspaces/{workspace_gid}/audit_log_events`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesAuditLogEventsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `AuditLogApi.GetAuditLogEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLogApi.GetAuditLogEventsRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes |
| `startAt` | `query` | `start_at` | `Date` (date-time) | no |
| `endAt` | `query` | `end_at` | `Date` (date-time) | no |
| `eventType` | `query` | `event_type` | `string` | no |
| `actorType` | `query` | `actor_type` | `ActorType1` | no |
| `actorGid` | `query` | `actor_gid` | `string` | no |
| `resourceGid` | `query` | `resource_gid` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActorType1` | `actorType1Schema` | `src/models/actor-type1.ts` |
| `WorkspacesAuditLogEventsResponse` | `workspacesAuditLogEventsResponseSchema` | `src/models/workspaces-audit-log-events-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

