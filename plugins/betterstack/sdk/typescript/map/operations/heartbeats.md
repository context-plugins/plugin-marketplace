<!-- Generated file — do not edit; regenerated with the SDK. -->

# Heartbeats — operations

Accessor: `client.heartbeats` · Source: `src/resources/heartbeats.ts` · 6 operations · Request types: namespace `Heartbeats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `better-stack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createHeartbeat

- **Signature**: `createHeartbeat(request: Heartbeats.CreateHeartbeatRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /heartbeats`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Heartbeats.CreateHeartbeatRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `HeartbeatCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HeartbeatCreate` | `heartbeatCreateSchema` | `src/models/heartbeat-create.ts` |

### deleteHeartbeat

- **Signature**: `deleteHeartbeat(request: Heartbeats.DeleteHeartbeatRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /heartbeats/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Heartbeats.DeleteHeartbeatRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getHeartbeat

- **Signature**: `getHeartbeat(request: Heartbeats.GetHeartbeatRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /heartbeats/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Heartbeats.GetHeartbeatRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getHeartbeatAvailability

- **Signature**: `getHeartbeatAvailability(request: Heartbeats.GetHeartbeatAvailabilityRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /heartbeats/{id}/availability`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Heartbeats.GetHeartbeatAvailabilityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### listHeartbeats

- **Signature**: `listHeartbeats(request?: Heartbeats.ListHeartbeatsRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /heartbeats`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Heartbeats.ListHeartbeatsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `perPage` | `query` | `per_page` | `number` | no |
| `page` | `query` | — | `number` | no |

### updateHeartbeat

- **Signature**: `updateHeartbeat(request: Heartbeats.UpdateHeartbeatRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PATCH /heartbeats/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Heartbeats.UpdateHeartbeatRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `HeartbeatCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HeartbeatCreate` | `heartbeatCreateSchema` | `src/models/heartbeat-create.ts` |

