<!-- Generated file — do not edit; regenerated with the SDK. -->

# PractitionerApi — operations

Accessor: `client.practitionerApi` · Source: `src/resources/practitioner-api.ts` · 2 operations · Request types: namespace `PractitionerApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `health-gorilla`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### readPractitioner

- **Signature**: `readPractitioner(request: PractitionerApi.ReadPractitionerRequest, options?: RequestOptions): ApiPromise<Practitioner, ApiError>`
- **Wire**: `GET /Practitioner/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Practitioner`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PractitionerApi.ReadPractitionerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Practitioner` | `practitionerSchema` | `src/models/practitioner.ts` |

### searchPractitioners

- **Signature**: `searchPractitioners(request?: PractitionerApi.SearchPractitionersRequest, options?: RequestOptions): ApiPromise<Bundle, ApiError>`
- **Wire**: `GET /Practitioner`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bundle`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PractitionerApi.SearchPractitionersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `query` | — | `string` | no |
| `name` | `query` | — | `string` | no |
| `count` | `query` | `_count` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bundle` | `bundleSchema` | `src/models/bundle.ts` |

