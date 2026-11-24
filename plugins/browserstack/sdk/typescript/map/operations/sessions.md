<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sessions — operations

Accessor: `client.sessions` · Source: `src/resources/sessions.ts` · 7 operations · Request types: namespace `Sessions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-stack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteSession

- **Signature**: `deleteSession(request: Sessions.DeleteSessionRequest, options?: RequestOptions): ApiPromise<StatusMessage, ApiError>`
- **Wire**: `DELETE /automate/sessions/{sessionId}.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusMessage`
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Sessions.DeleteSessionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusMessage` | `statusMessageSchema` | `src/models/status-message.ts` |

### getSession

- **Signature**: `getSession(request: Sessions.GetSessionRequest, options?: RequestOptions): ApiPromise<Session, ApiError>`
- **Wire**: `GET /automate/sessions/{sessionId}.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Session`
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Sessions.GetSessionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Session` | `sessionSchema` | `src/models/session.ts` |

### getSessionConsoleLogs

- **Signature**: `getSessionConsoleLogs(request: Sessions.GetSessionConsoleLogsRequest, options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `GET /automate/sessions/{sessionId}/consolelogs`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Sessions.GetSessionConsoleLogsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `path` | `string` | yes |

### getSessionLogs

- **Signature**: `getSessionLogs(request: Sessions.GetSessionLogsRequest, options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `GET /automate/sessions/{sessionId}/logs`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Sessions.GetSessionLogsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `path` | `string` | yes |

### getSessionNetworkLogs

- **Signature**: `getSessionNetworkLogs(request: Sessions.GetSessionNetworkLogsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /automate/sessions/{sessionId}/networklogs`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Sessions.GetSessionNetworkLogsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `path` | `string` | yes |

### listBuildSessions

- **Signature**: `listBuildSessions(request: Sessions.ListBuildSessionsRequest, options?: RequestOptions): ApiPromise<Session[], ApiError>`
- **Wire**: `GET /automate/builds/{buildId}/sessions.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Session[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Sessions.ListBuildSessionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `buildId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Session` | `sessionSchema` | `src/models/session.ts` |

### updateSession

- **Signature**: `updateSession(request: Sessions.UpdateSessionRequest, options?: RequestOptions): ApiPromise<Session, ApiError>`
- **Wire**: `PUT /automate/sessions/{sessionId}.json`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Session`
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Sessions.UpdateSessionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `path` | `string` | yes |
| `body` | `body` | `AutomateSessionsJsonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomateSessionsJsonRequest` | `automateSessionsJsonRequestSchema` | `src/models/automate-sessions-json-request.ts` |
| `Session` | `sessionSchema` | `src/models/session.ts` |

