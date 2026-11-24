<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.builds` · Source: `src/resources/builds.ts` · 5 operations · Request types: namespace `Builds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelBuild

- **Signature**: `cancelBuild(request: Builds.CancelBuildRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /organizations/{org}/pipelines/{pipeline}/builds/{number}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Builds.CancelBuildRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |
| `number` | `path` | `number` | yes |

### createBuild

- **Signature**: `createBuild(request: Builds.CreateBuildRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /organizations/{org}/pipelines/{pipeline}/builds`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Builds.CreateBuildRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |

### getBuild

- **Signature**: `getBuild(request: Builds.GetBuildRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /organizations/{org}/pipelines/{pipeline}/builds/{number}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Builds.GetBuildRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |
| `number` | `path` | `number` | yes |

### listBuilds

- **Signature**: `listBuilds(request: Builds.ListBuildsRequest, options?: RequestOptions): ApiPromise<Build[], ApiError>`
- **Wire**: `GET /organizations/{org}/pipelines/{pipeline}/builds`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Build[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Builds.ListBuildsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Build` | `buildSchema` | `src/models/build.ts` |

### rebuildBuild

- **Signature**: `rebuildBuild(request: Builds.RebuildBuildRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /organizations/{org}/pipelines/{pipeline}/builds/{number}/rebuild`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Builds.RebuildBuildRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |
| `number` | `path` | `number` | yes |

