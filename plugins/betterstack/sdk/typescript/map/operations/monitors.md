<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitors — operations

Accessor: `client.monitors` · Source: `src/resources/monitors.ts` · 7 operations · Request types: namespace `Monitors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `better-stack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMonitor

- **Signature**: `createMonitor(request: Monitors.CreateMonitorRequest, options?: RequestOptions): ApiPromise<MonitorResource, ApiError>`
- **Wire**: `POST /monitors`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MonitorResource`
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Monitors.CreateMonitorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MonitorCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitorCreate` | `monitorCreateSchema` | `src/models/monitor-create.ts` |
| `MonitorResource` | `monitorResourceSchema` | `src/models/monitor-resource.ts` |

### deleteMonitor

- **Signature**: `deleteMonitor(request: Monitors.DeleteMonitorRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /monitors/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Monitors.DeleteMonitorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getMonitor

- **Signature**: `getMonitor(request: Monitors.GetMonitorRequest, options?: RequestOptions): ApiPromise<MonitorResource, ApiError>`
- **Wire**: `GET /monitors/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MonitorResource`
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Monitors.GetMonitorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitorResource` | `monitorResourceSchema` | `src/models/monitor-resource.ts` |

### getMonitorAvailability

- **Signature**: `getMonitorAvailability(request: Monitors.GetMonitorAvailabilityRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /monitors/{id}/availability`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Monitors.GetMonitorAvailabilityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getMonitorResponseTimes

- **Signature**: `getMonitorResponseTimes(request: Monitors.GetMonitorResponseTimesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /monitors/{id}/response-times`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Monitors.GetMonitorResponseTimesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### listMonitors

- **Signature**: `listMonitors(request?: Monitors.ListMonitorsRequest, options?: RequestOptions): ApiPromise<MonitorList, ApiError>`
- **Wire**: `GET /monitors`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MonitorList`
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Monitors.ListMonitorsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `perPage` | `query` | `per_page` | `number` | no |
| `page` | `query` | — | `number` | no |
| `url` | `query` | — | `string` | no |
| `pronounceableName` | `query` | `pronounceable_name` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitorList` | `monitorListSchema` | `src/models/monitor-list.ts` |

### updateMonitor

- **Signature**: `updateMonitor(request: Monitors.UpdateMonitorRequest, options?: RequestOptions): ApiPromise<MonitorResource, ApiError>`
- **Wire**: `PATCH /monitors/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MonitorResource`
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Monitors.UpdateMonitorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `MonitorCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MonitorCreate` | `monitorCreateSchema` | `src/models/monitor-create.ts` |
| `MonitorResource` | `monitorResourceSchema` | `src/models/monitor-resource.ts` |

