<!-- Generated file — do not edit; regenerated with the SDK. -->

# Lookalikes — operations

Accessor: `client.lookalikes` · Source: `src/resources/lookalikes.ts` · 4 operations · Request and error types: namespace `Lookalikes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompanyLookalikes

- **Signature**: `getCompanyLookalikes(request: Lookalikes.GetCompanyLookalikesRequest, options?: RequestOptions): ApiPromise<CompanyLookalikesResponse, Lookalikes.GetCompanyLookalikesError>`
- **Wire**: `POST /v3/companies/lookalike`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompanyLookalikesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Lookalikes.GetCompanyLookalikesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error402"` [402] no body · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [410] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lookalikes.GetCompanyLookalikesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompanyLookalikesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyLookalikesRequest` | `companyLookalikesRequestSchema` | `src/models/company-lookalikes-request.ts` |
| `CompanyLookalikesResponse` | `companyLookalikesResponseSchema` | `src/models/company-lookalikes-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactLookalikes

- **Signature**: `getContactLookalikes(request: Lookalikes.GetContactLookalikesRequest, options?: RequestOptions): ApiPromise<ContactLookalikesResponse, Lookalikes.GetContactLookalikesError>`
- **Wire**: `POST /v3/contacts/lookalike`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactLookalikesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Lookalikes.GetContactLookalikesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error402"` [402] no body · `"errorResponse2"` [403] `ErrorResponse` · `"dedupeSessionInvalidError"` [410] `DedupeSessionInvalidError` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lookalikes.GetContactLookalikesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContactLookalikesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactLookalikesRequest` | `contactLookalikesRequestSchema` | `src/models/contact-lookalikes-request.ts` |
| `ContactLookalikesResponse` | `contactLookalikesResponseSchema` | `src/models/contact-lookalikes-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `DedupeSessionInvalidError` | `dedupeSessionInvalidErrorSchema` | `src/models/dedupe-session-invalid-error.ts` |

### postV3LookalikeCompanies

- **Signature**: `postV3LookalikeCompanies(request: Lookalikes.PostV3LookalikeCompaniesRequest, options?: RequestOptions): ApiPromise<CompanyLookalikesResponse2, Lookalikes.PostV3LookalikeCompaniesError>`
- **Wire**: `POST /v3/lookalike/companies`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompanyLookalikesResponse2`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Lookalikes.PostV3LookalikeCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error402"` [402] no body · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [410] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lookalikes.PostV3LookalikeCompaniesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompanyLookalikesRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyLookalikesRequest2` | `companyLookalikesRequest2Schema` | `src/models/company-lookalikes-request2.ts` |
| `CompanyLookalikesResponse2` | `companyLookalikesResponse2Schema` | `src/models/company-lookalikes-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postV3LookalikeContacts

- **Signature**: `postV3LookalikeContacts(request: Lookalikes.PostV3LookalikeContactsRequest, options?: RequestOptions): ApiPromise<ContactLookalikesResponse2, Lookalikes.PostV3LookalikeContactsError>`
- **Wire**: `POST /v3/lookalike/contacts`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactLookalikesResponse2`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Lookalikes.PostV3LookalikeContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error402"` [402] no body · `"errorResponse2"` [403] `ErrorResponse` · `"dedupeSessionInvalidError"` [410] `DedupeSessionInvalidError` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lookalikes.PostV3LookalikeContactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContactLookalikesRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactLookalikesRequest2` | `contactLookalikesRequest2Schema` | `src/models/contact-lookalikes-request2.ts` |
| `ContactLookalikesResponse2` | `contactLookalikesResponse2Schema` | `src/models/contact-lookalikes-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `DedupeSessionInvalidError` | `dedupeSessionInvalidErrorSchema` | `src/models/dedupe-session-invalid-error.ts` |

