<!-- Generated file — do not edit; regenerated with the SDK. -->

# ArtifactApi — operations

Accessor: `client.artifactApi` · Source: `src/resources/artifact-api.ts` · 2 operations · Request and error types: namespace `ArtifactApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listBuildArtifacts

- **Signature**: `listBuildArtifacts(request: ArtifactApi.ListBuildArtifactsRequest, options?: RequestOptions): ApiPromise<Artifact[], ArtifactApi.ListBuildArtifactsError>`
- **Wire**: `GET /project/{vcs-type}/{username}/{project}/{build_num}/artifacts`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Artifact[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ArtifactApi.ListBuildArtifactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ArtifactApi.ListBuildArtifactsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `buildNum` | `path` | `build_num` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `Artifact` | `artifactSchema` | `src/models/artifact.ts` |

### listLatestArtifacts

- **Signature**: `listLatestArtifacts(request: ArtifactApi.ListLatestArtifactsRequest, options?: RequestOptions): ApiPromise<Artifact[], ArtifactApi.ListLatestArtifactsError>`
- **Wire**: `GET /project/{vcs-type}/{username}/{project}/latest/artifacts`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Artifact[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ArtifactApi.ListLatestArtifactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ArtifactApi.ListLatestArtifactsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `branch` | `query` | — | `string` | no |
| `filter` | `query` | — | `Filter` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `Filter` | `filterSchema` | `src/models/filter.ts` |
| `Artifact` | `artifactSchema` | `src/models/artifact.ts` |

