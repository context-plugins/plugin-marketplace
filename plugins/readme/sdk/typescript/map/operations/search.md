<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 1 operation · Request types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSearch2

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSearch2(request: Search.GetSearch2Request, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Search.GetSearch2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | yes |

