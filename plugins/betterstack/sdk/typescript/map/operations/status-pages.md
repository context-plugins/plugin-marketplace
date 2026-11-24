<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatusPages — operations

Accessor: `client.statusPages` · Source: `src/resources/status-pages.ts` · 6 operations · Request types: namespace `StatusPages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `better-stack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStatusPage

- **Signature**: `createStatusPage(request: StatusPages.CreateStatusPageRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /status-pages`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StatusPages.CreateStatusPageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StatusPageCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusPageCreate` | `statusPageCreateSchema` | `src/models/status-page-create.ts` |

### deleteStatusPage

- **Signature**: `deleteStatusPage(request: StatusPages.DeleteStatusPageRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /status-pages/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StatusPages.DeleteStatusPageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getStatusPage

- **Signature**: `getStatusPage(request: StatusPages.GetStatusPageRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /status-pages/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StatusPages.GetStatusPageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### listStatusPages

- **Signature**: `listStatusPages(request?: StatusPages.ListStatusPagesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /status-pages`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StatusPages.ListStatusPagesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `perPage` | `query` | `per_page` | `number` | no |
| `page` | `query` | — | `number` | no |

### listStatusPagesInGroup

- **Signature**: `listStatusPagesInGroup(request: StatusPages.ListStatusPagesInGroupRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /status-pages/group/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StatusPages.ListStatusPagesInGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### updateStatusPage

- **Signature**: `updateStatusPage(request: StatusPages.UpdateStatusPageRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PATCH /status-pages/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BetterStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StatusPages.UpdateStatusPageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `StatusPageCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusPageCreate` | `statusPageCreateSchema` | `src/models/status-page-create.ts` |

