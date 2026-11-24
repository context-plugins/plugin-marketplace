<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApIs — operations

Accessor: `client.apIs` · Source: `src/resources/ap-is.ts` · 5 operations · Request and error types: namespace `ApIs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `read-me`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBranchesByBranchApisById

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBranchesByBranchApisById(request: ApIs.DeleteBranchesByBranchApisByIdRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /branches/{branch}/apis/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ApIs.DeleteBranchesByBranchApisByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

### getBranchesByBranchApis

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBranchesByBranchApis(request: ApIs.GetBranchesByBranchApisRequest, options?: RequestOptions): ApiPromise<undefined, ApIs.GetBranchesByBranchApisError>`
- **Wire**: `GET /branches/{branch}/apis`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"`, an instance of `ApIs.GetBranchesByBranchApisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApIs.GetBranchesByBranchApisRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `branch` | `path` | `string` | yes | — |
| `perPage` | `query` | `number` | no | `10` |
| `page` | `query` | `number` | no | `1` |

### getBranchesByBranchApisById

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBranchesByBranchApisById(request: ApIs.GetBranchesByBranchApisByIdRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /branches/{branch}/apis/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ApIs.GetBranchesByBranchApisByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

### postBranchesByBranchApis

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBranchesByBranchApis(request: ApIs.PostBranchesByBranchApisRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /branches/{branch}/apis`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ApIs.PostBranchesByBranchApisRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |

### putBranchesByBranchApisById

- **Server**: `defaultReadMeApiKeysApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putBranchesByBranchApisById(request: ApIs.PutBranchesByBranchApisByIdRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /branches/{branch}/apis/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ReadMeError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ApIs.PutBranchesByBranchApisByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `branch` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

