<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `src/resources/analytics.ts` · 3 operations · Request types: namespace `Analytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPageviews

- **Signature**: `getPageviews(request?: Analytics.GetPageviewsRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /pageviews`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Analytics.GetPageviewsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `start` | `query` | `string` (date) | no |
| `end` | `query` | `string` (date) | no |

### getQuality

- **Signature**: `getQuality(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /quality`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### getSearch

- **Signature**: `getSearch(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /search`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

