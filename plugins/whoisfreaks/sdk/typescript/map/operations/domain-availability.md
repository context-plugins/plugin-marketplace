<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainAvailability — operations

Accessor: `client.domainAvailability` · Source: `src/resources/domain-availability.ts` · 2 operations · Request and error types: namespace `DomainAvailability`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkDomainAvailabilityV2

- **Signature**: `bulkDomainAvailabilityV2(request: DomainAvailability.BulkDomainAvailabilityV2Request, options?: RequestOptions): ApiPromise<BulkDomainAvailabilityResponse, DomainAvailability.BulkDomainAvailabilityV2Error>`
- **Wire**: `POST /v2.0/domain/availability`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkDomainAvailabilityResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DomainAvailability.BulkDomainAvailabilityV2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainAvailability.BulkDomainAvailabilityV2Request` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `domain` | `query` | `string` | no | — |
| `format` | `query` | `Format` | no | `Format.Json` |
| `body` | `body` | `BulkDomainAvailabilityRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BulkDomainAvailabilityRequest` | `bulkDomainAvailabilityRequestSchema` | `src/models/bulk-domain-availability-request.ts` |
| `BulkDomainAvailabilityResponse` | `bulkDomainAvailabilityResponseSchema` | `src/models/bulk-domain-availability-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### domainAvailabilityV2

- **Signature**: `domainAvailabilityV2(request: DomainAvailability.DomainAvailabilityV2Request, options?: RequestOptions): ApiPromise<DomainAvailabilityResponse, DomainAvailability.DomainAvailabilityV2Error>`
- **Wire**: `GET /v2.0/domain/availability`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DomainAvailabilityResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `DomainAvailability.DomainAvailabilityV2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DomainAvailability.DomainAvailabilityV2Request` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `domain` | `query` | `string` | yes | — |
| `sug` | `query` | `boolean` | no | `false` |
| `count` | `query` | `number` | no | `5` |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DomainAvailabilityResponse` | `domainAvailabilityResponseSchema` | `src/models/domain-availability-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

