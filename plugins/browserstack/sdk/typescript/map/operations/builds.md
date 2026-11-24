<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.builds` · Source: `src/resources/builds.ts` · 3 operations · Request types: namespace `Builds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-stack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBuild

- **Signature**: `deleteBuild(request: Builds.DeleteBuildRequest, options?: RequestOptions): ApiPromise<StatusMessage, ApiError>`
- **Wire**: `DELETE /automate/builds/{buildId}.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusMessage`
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Builds.DeleteBuildRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `buildId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusMessage` | `statusMessageSchema` | `src/models/status-message.ts` |

### listBuilds

- **Signature**: `listBuilds(request?: Builds.ListBuildsRequest, options?: RequestOptions): ApiPromise<Build[], ApiError>`
- **Wire**: `GET /automate/builds.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Build[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Builds.ListBuildsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `status` | `query` | `Status` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `Build` | `buildSchema` | `src/models/build.ts` |

### updateBuild

- **Signature**: `updateBuild(request: Builds.UpdateBuildRequest, options?: RequestOptions): ApiPromise<Build, ApiError>`
- **Wire**: `PUT /automate/builds/{buildId}.json`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Build`
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Builds.UpdateBuildRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `buildId` | `path` | `string` | yes |
| `body` | `body` | `AutomateBuildsJsonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomateBuildsJsonRequest` | `automateBuildsJsonRequestSchema` | `src/models/automate-builds-json-request.ts` |
| `Build` | `buildSchema` | `src/models/build.ts` |

