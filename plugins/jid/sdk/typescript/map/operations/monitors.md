<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitors — operations

Accessor: `client.monitors` · Source: `src/resources/monitors.ts` · 3 operations · Request and error types: namespace `Monitors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `jid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMonitor

- **Signature**: `createMonitor(request: Monitors.CreateMonitorRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Monitors.CreateMonitorError>`
- **Wire**: `POST /v1/monitors`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `JidError` with `kind: "api"`, an instance of `Monitors.CreateMonitorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.CreateMonitorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MonitorsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MonitorsRequest` | `v1MonitorsRequestSchema` | `src/models/v1-monitors-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteMonitor

- **Signature**: `deleteMonitor(request: Monitors.DeleteMonitorRequest, options?: RequestOptions): ApiPromise<undefined, Monitors.DeleteMonitorError>`
- **Wire**: `DELETE /v1/monitors`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `JidError` with `kind: "api"`, an instance of `Monitors.DeleteMonitorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Monitors.DeleteMonitorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listMonitors

- **Signature**: `listMonitors(options?: RequestOptions): ApiPromise<Record<string, unknown>, Monitors.ListMonitorsError>`
- **Wire**: `GET /v1/monitors`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `JidError` with `kind: "api"`, an instance of `Monitors.ListMonitorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

