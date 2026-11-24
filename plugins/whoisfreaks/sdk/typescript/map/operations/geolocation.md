<!-- Generated file — do not edit; regenerated with the SDK. -->

# Geolocation — operations

Accessor: `client.geolocation` · Source: `src/resources/geolocation.ts` · 2 operations · Request and error types: namespace `Geolocation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkGeolocation

- **Signature**: `bulkGeolocation(request: Geolocation.BulkGeolocationRequest, options?: RequestOptions): ApiPromise<GeolocationResponse[], Geolocation.BulkGeolocationError>`
- **Wire**: `POST /v1.0/geolocation`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GeolocationResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Geolocation.BulkGeolocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geolocation.BulkGeolocationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V10GeolocationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V10GeolocationRequest` | `v10GeolocationRequestSchema` | `src/models/v10-geolocation-request.ts` |
| `GeolocationResponse` | `geolocationResponseSchema` | `src/models/geolocation-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### geolocation

- **Signature**: `geolocation(request: Geolocation.GeolocationRequest, options?: RequestOptions): ApiPromise<GeolocationResponse, Geolocation.GeolocationError>`
- **Wire**: `GET /v1.0/geolocation`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeolocationResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Geolocation.GeolocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geolocation.GeolocationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeolocationResponse` | `geolocationResponseSchema` | `src/models/geolocation-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

