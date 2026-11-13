<!-- Generated file — do not edit; regenerated with the SDK. -->

# Session — operations

Accessor: `client.session` · Source: `src/resources/session.ts` · 3 operations · Request and error types: namespace `Session`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getActiveSession

- **Signature**: `getActiveSession(options?: RequestOptions): ApiPromise<SessionAccessActiveResponse, ApiError>`
- **Wire**: `GET /session/access/active`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionAccessActiveResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionAccessActiveResponse` | `sessionAccessActiveResponseSchema` | `src/models/session-access-active-response.ts` |

### getAllSessions

- **Signature**: `getAllSessions(options?: RequestOptions): ApiPromise<SessionAccessAllResponse, ApiError>`
- **Wire**: `GET /session/access/all`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionAccessAllResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionAccessAllResponse` | `sessionAccessAllResponseSchema` | `src/models/session-access-all-response.ts` |

### setActiveUser

- **Signature**: `setActiveUser(request?: Session.SetActiveUserRequest, options?: RequestOptions): ApiPromise<SessionAccessActiveResponse1, Session.SetActiveUserError>`
- **Wire**: `POST /session/access/active`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionAccessActiveResponse1`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Session.SetActiveUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Session.SetActiveUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SessionAccessActiveRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionAccessActiveRequest` | `sessionAccessActiveRequestSchema` | `src/models/session-access-active-request.ts` |
| `SessionAccessActiveResponse1` | `sessionAccessActiveResponse1Schema` | `src/models/session-access-active-response1.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

