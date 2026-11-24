<!-- Generated file — do not edit; regenerated with the SDK. -->

# Annotations — operations

Accessor: `client.annotations` · Source: `src/resources/annotations.ts` · 1 operation · Request types: namespace `Annotations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAnnotations

- **Signature**: `listAnnotations(request: Annotations.ListAnnotationsRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /organizations/{org}/pipelines/{pipeline}/builds/{number}/annotations`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Annotations.ListAnnotationsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `pipeline` | `path` | `string` | yes |
| `number` | `path` | `number` | yes |

