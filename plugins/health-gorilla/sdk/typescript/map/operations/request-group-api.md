<!-- Generated file — do not edit; regenerated with the SDK. -->

# RequestGroupApi — operations

Accessor: `client.requestGroupApi` · Source: `src/resources/request-group-api.ts` · 3 operations · Request types: namespace `RequestGroupApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `health-gorilla`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRequestGroup

- **Signature**: `createRequestGroup(request: RequestGroupApi.CreateRequestGroupRequest, options?: RequestOptions): ApiPromise<RequestGroup, ApiError>`
- **Wire**: `POST /RequestGroup`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RequestGroup`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RequestGroupApi.CreateRequestGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RequestGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequestGroup` | `requestGroupSchema` | `src/models/request-group.ts` |

### readRequestGroup

- **Signature**: `readRequestGroup(request: RequestGroupApi.ReadRequestGroupRequest, options?: RequestOptions): ApiPromise<RequestGroup, ApiError>`
- **Wire**: `GET /RequestGroup/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RequestGroup`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RequestGroupApi.ReadRequestGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequestGroup` | `requestGroupSchema` | `src/models/request-group.ts` |

### searchRequestGroups

- **Signature**: `searchRequestGroups(request?: RequestGroupApi.SearchRequestGroupsRequest, options?: RequestOptions): ApiPromise<Bundle, ApiError>`
- **Wire**: `GET /RequestGroup`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bundle`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RequestGroupApi.SearchRequestGroupsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `patient` | `query` | — | `string` | no |
| `count` | `query` | `_count` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bundle` | `bundleSchema` | `src/models/bundle.ts` |

