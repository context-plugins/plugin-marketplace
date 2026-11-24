<!-- Generated file — do not edit; regenerated with the SDK. -->

# Incidents — operations

Accessor: `client.incidents` · Source: `src/resources/incidents.ts` · 9 operations · Request types: namespace `Incidents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `better-stack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acknowledgeIncident

- **Signature**: `acknowledgeIncident(request: Incidents.AcknowledgeIncidentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /incidents/{id}/acknowledge`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Incidents.AcknowledgeIncidentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### createIncident

- **Signature**: `createIncident(request: Incidents.CreateIncidentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /incidents`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Incidents.CreateIncidentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IncidentCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncidentCreate` | `incidentCreateSchema` | `src/models/incident-create.ts` |

### deleteIncident

- **Signature**: `deleteIncident(request: Incidents.DeleteIncidentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /incidents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Incidents.DeleteIncidentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### escalateIncident

- **Signature**: `escalateIncident(request: Incidents.EscalateIncidentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /incidents/{id}/escalate`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Incidents.EscalateIncidentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getIncident

- **Signature**: `getIncident(request: Incidents.GetIncidentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /incidents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Incidents.GetIncidentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getIncidentTimeline

- **Signature**: `getIncidentTimeline(request: Incidents.GetIncidentTimelineRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /incidents/{id}/timeline`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Incidents.GetIncidentTimelineRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### listIncidents

- **Signature**: `listIncidents(request?: Incidents.ListIncidentsRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /incidents`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Incidents.ListIncidentsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `perPage` | `query` | `per_page` | `number` | no |
| `page` | `query` | — | `number` | no |

### reopenIncident

- **Signature**: `reopenIncident(request: Incidents.ReopenIncidentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /incidents/{id}/reopen`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Incidents.ReopenIncidentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### resolveIncident

- **Signature**: `resolveIncident(request: Incidents.ResolveIncidentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /incidents/{id}/resolve`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Incidents.ResolveIncidentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

