<!-- Generated file — do not edit; regenerated with the SDK. -->

# Emojis — operations

Accessor: `client.emojis` · Source: `src/resources/emojis.ts` · 1 operation · Request types: namespace `Emojis`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `buildkite`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listEmojis

- **Signature**: `listEmojis(request: Emojis.ListEmojisRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /organizations/{org}/emojis`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BuildkiteError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Emojis.ListEmojisRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |

