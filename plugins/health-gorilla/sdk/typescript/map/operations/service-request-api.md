<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceRequestApi — operations

Accessor: `client.serviceRequestApi` · Source: `src/resources/service-request-api.ts` · 3 operations · Request types: namespace `ServiceRequestApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `health-gorilla`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createServiceRequest

- **Signature**: `createServiceRequest(request: ServiceRequestApi.CreateServiceRequestRequest, options?: RequestOptions): ApiPromise<ServiceRequest, ApiError>`
- **Wire**: `POST /ServiceRequest`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServiceRequest`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ServiceRequestApi.CreateServiceRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ServiceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceRequest` | `serviceRequestSchema` | `src/models/service-request.ts` |

### readServiceRequest

- **Signature**: `readServiceRequest(request: ServiceRequestApi.ReadServiceRequestRequest, options?: RequestOptions): ApiPromise<ServiceRequest, ApiError>`
- **Wire**: `GET /ServiceRequest/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceRequest`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ServiceRequestApi.ReadServiceRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceRequest` | `serviceRequestSchema` | `src/models/service-request.ts` |

### searchServiceRequests

- **Signature**: `searchServiceRequests(request?: ServiceRequestApi.SearchServiceRequestsRequest, options?: RequestOptions): ApiPromise<Bundle, ApiError>`
- **Wire**: `GET /ServiceRequest`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bundle`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ServiceRequestApi.SearchServiceRequestsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `patient` | `query` | — | `string` | no |
| `status` | `query` | — | `string` | no |
| `count` | `query` | `_count` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bundle` | `bundleSchema` | `src/models/bundle.ts` |

