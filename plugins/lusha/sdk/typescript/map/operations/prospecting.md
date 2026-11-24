<!-- Generated file — do not edit; regenerated with the SDK. -->

# Prospecting — operations

Accessor: `client.prospecting` · Source: `src/resources/prospecting.ts` · 2 operations · Request and error types: namespace `Prospecting`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### prospectingCompanies

- **Signature**: `prospectingCompanies(request: Prospecting.ProspectingCompaniesRequest, options?: RequestOptions): ApiPromise<V3ProspectingCompaniesResponse, Prospecting.ProspectingCompaniesError>`
- **Wire**: `POST /v3/companies/prospecting`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ProspectingCompaniesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Prospecting.ProspectingCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prospecting.ProspectingCompaniesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3ProspectingCompaniesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ProspectingCompaniesRequest` | `v3ProspectingCompaniesRequestSchema` | `src/models/v3-prospecting-companies-request.ts` |
| `V3ProspectingCompaniesResponse` | `v3ProspectingCompaniesResponseSchema` | `src/models/v3-prospecting-companies-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### prospectingContacts

- **Signature**: `prospectingContacts(request: Prospecting.ProspectingContactsRequest, options?: RequestOptions): ApiPromise<V3ProspectingContactsResponse, Prospecting.ProspectingContactsError>`
- **Wire**: `POST /v3/contacts/prospecting`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ProspectingContactsResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Prospecting.ProspectingContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prospecting.ProspectingContactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3ProspectingContactsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ProspectingContactsRequest` | `v3ProspectingContactsRequestSchema` | `src/models/v3-prospecting-contacts-request.ts` |
| `V3ProspectingContactsResponse` | `v3ProspectingContactsResponseSchema` | `src/models/v3-prospecting-contacts-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

