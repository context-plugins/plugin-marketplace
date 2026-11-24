<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditEvents — operations

Accessor: `client.auditEvents` · Source: `src/resources/audit-events.ts` · 1 operation · Request types: namespace `AuditEvents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1AuditEvents

- **Signature**: `getApiV1AuditEvents(request?: AuditEvents.GetApiV1AuditEventsRequest, options?: RequestOptions): ApiPromise<ApiV1AuditEventsResponse, ApiError>`
- **Wire**: `GET /api/v1/audit-events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AuditEventsResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AuditEvents.GetApiV1AuditEventsRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |
| `since` | `query` | `Date` (date-time) | no |
| `until` | `query` | `Date` (date-time) | no |
| `eventType` | `query` | `string` | no |
| `actorId` | `query` | `string` | no |
| `actorType` | `query` | `ActorType` | no |
| `resourceType` | `query` | `string` | no |
| `resourceId` | `query` | `string` | no |
| `flowId` | `query` | `string` | no |
| `afterSeq` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActorType` | `actorTypeSchema` | `src/models/actor-type.ts` |
| `ApiV1AuditEventsResponse` | `apiV1AuditEventsResponseSchema` | `src/models/api-v1-audit-events-response.ts` |

