<!-- Generated file — do not edit; regenerated with the SDK. -->

# CoverageApi — operations

Accessor: `client.coverageApi` · Source: `src/resources/coverage-api.ts` · 2 operations · Request types: namespace `CoverageApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `health-gorilla`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### readCoverage

- **Signature**: `readCoverage(request: CoverageApi.ReadCoverageRequest, options?: RequestOptions): ApiPromise<Coverage, ApiError>`
- **Wire**: `GET /Coverage/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Coverage`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CoverageApi.ReadCoverageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Coverage` | `coverageSchema` | `src/models/coverage.ts` |

### searchCoverage

- **Signature**: `searchCoverage(request?: CoverageApi.SearchCoverageRequest, options?: RequestOptions): ApiPromise<Bundle, ApiError>`
- **Wire**: `GET /Coverage`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bundle`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CoverageApi.SearchCoverageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `patient` | `query` | — | `string` | no |
| `count` | `query` | `_count` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bundle` | `bundleSchema` | `src/models/bundle.ts` |

