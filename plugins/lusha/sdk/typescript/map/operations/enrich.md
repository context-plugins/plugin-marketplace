<!-- Generated file — do not edit; regenerated with the SDK. -->

# Enrich — operations

Accessor: `client.enrich` · Source: `src/resources/enrich.ts` · 2 operations · Request and error types: namespace `Enrich`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### enrichCompanies

- **Signature**: `enrichCompanies(request: Enrich.EnrichCompaniesRequest, options?: RequestOptions): ApiPromise<V3CompaniesEnrichResponse, Enrich.EnrichCompaniesError>`
- **Wire**: `POST /v3/companies/enrich`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3CompaniesEnrichResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Enrich.EnrichCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Enrich.EnrichCompaniesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3CompaniesEnrichRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3CompaniesEnrichRequest` | `v3CompaniesEnrichRequestSchema` | `src/models/v3-companies-enrich-request.ts` |
| `V3CompaniesEnrichResponse` | `v3CompaniesEnrichResponseSchema` | `src/models/v3-companies-enrich-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### enrichContacts

- **Signature**: `enrichContacts(request: Enrich.EnrichContactsRequest, options?: RequestOptions): ApiPromise<V3ContactsEnrichResponse, Enrich.EnrichContactsError>`
- **Wire**: `POST /v3/contacts/enrich`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ContactsEnrichResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Enrich.EnrichContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Enrich.EnrichContactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3ContactsEnrichRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ContactsEnrichRequest` | `v3ContactsEnrichRequestSchema` | `src/models/v3-contacts-enrich-request.ts` |
| `V3ContactsEnrichResponse` | `v3ContactsEnrichResponseSchema` | `src/models/v3-contacts-enrich-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

