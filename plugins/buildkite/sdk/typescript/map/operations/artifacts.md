<!-- Generated file — do not edit; regenerated with the SDK. -->

# Artifacts — operations

Accessor: `client.artifacts` · Source: `src/resources/artifacts.ts` · 1 operation · Request types: namespace `Artifacts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listArtifactsForBuild

- **Signature**: `listArtifactsForBuild(request: Artifacts.ListArtifactsForBuildRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /organizations/{org}/pipelines/{pipeline}/builds/{number}/artifacts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Artifacts.ListArtifactsForBuildRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |
| `number` | `path` | `number` | yes |

