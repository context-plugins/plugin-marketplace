<!-- Generated file — do not edit; regenerated with the SDK. -->

# Observation — operations

Accessor: `client.observation` · Source: `src/resources/observation.ts` · 1 operation · Request types: namespace `Observation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `health-gorilla`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchObservations

- **Signature**: `searchObservations(request?: Observation.SearchObservationsRequest, options?: RequestOptions): ApiPromise<Bundle, ApiError>`
- **Wire**: `GET /Observation`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bundle`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Observation.SearchObservationsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `patient` | `query` | — | `string` | no |
| `code` | `query` | — | `string` | no |
| `count` | `query` | `_count` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bundle` | `bundleSchema` | `src/models/bundle.ts` |

