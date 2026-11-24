<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignalsApi — operations

Accessor: `client.signalsApi` · Source: `src/resources/signals-api.ts` · 13 operations · Request and error types: namespace `SignalsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompanySignalFilterValues

- **Signature**: `getCompanySignalFilterValues(request: SignalsApi.GetCompanySignalFilterValuesRequest, options?: RequestOptions): ApiPromise<FilterValuesResponse, SignalsApi.GetCompanySignalFilterValuesError>`
- **Wire**: `GET /v3/companies/signals/filters/{filterType}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FilterValuesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetCompanySignalFilterValuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalsApi.GetCompanySignalFilterValuesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filterType` | `path` | `FilterTypeLushaSignalsApi` | yes |
| `query` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FilterTypeLushaSignalsApi` | `filterTypeLushaSignalsApiSchema` | `src/models/filter-type-lusha-signals-api.ts` |
| `FilterValuesResponse` | `filterValuesResponseSchema` | `src/models/filter-values-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanySignalFilters

- **Signature**: `getCompanySignalFilters(options?: RequestOptions): ApiPromise<FilterTypesDiscoveryResponse, SignalsApi.GetCompanySignalFiltersError>`
- **Wire**: `GET /v3/companies/signals/filters`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FilterTypesDiscoveryResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetCompanySignalFiltersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `FilterTypesDiscoveryResponse` | `filterTypesDiscoveryResponseSchema` | `src/models/filter-types-discovery-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanySignalScores

- **Signature**: `getCompanySignalScores(request: SignalsApi.GetCompanySignalScoresRequest, options?: RequestOptions): ApiPromise<V3SignalScoreCompaniesResponse, SignalsApi.GetCompanySignalScoresError>`
- **Wire**: `POST /v3/companies/signal-score`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3SignalScoreCompaniesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetCompanySignalScoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalsApi.GetCompanySignalScoresRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3SignalScoreCompaniesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3SignalScoreCompaniesRequest` | `v3SignalScoreCompaniesRequestSchema` | `src/models/v3-signal-score-companies-request.ts` |
| `V3SignalScoreCompaniesResponse` | `v3SignalScoreCompaniesResponseSchema` | `src/models/v3-signal-score-companies-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanySignalTypes

- **Signature**: `getCompanySignalTypes(options?: RequestOptions): ApiPromise<CompanySignalTypesResponse, SignalsApi.GetCompanySignalTypesError>`
- **Wire**: `GET /v3/companies/signals/types`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanySignalTypesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetCompanySignalTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanySignalTypesResponse` | `companySignalTypesResponseSchema` | `src/models/company-signal-types-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanySignals

- **Signature**: `getCompanySignals(request: SignalsApi.GetCompanySignalsRequest, options?: RequestOptions): ApiPromise<V3CompanySignalsResponse, SignalsApi.GetCompanySignalsError>`
- **Wire**: `POST /v3/companies/signals`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3CompanySignalsResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetCompanySignalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalsApi.GetCompanySignalsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3CompanySignalsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3CompanySignalsRequest` | `v3CompanySignalsRequestSchema` | `src/models/v3-company-signals-request.ts` |
| `V3CompanySignalsResponse` | `v3CompanySignalsResponseSchema` | `src/models/v3-company-signals-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanySignalsById

- **Signature**: `getCompanySignalsById(request: SignalsApi.GetCompanySignalsByIdRequest, options?: RequestOptions): ApiPromise<CompanySignalsByIdResponse, SignalsApi.GetCompanySignalsByIdError>`
- **Wire**: `POST /api/signals/companies`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompanySignalsByIdResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetCompanySignalsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalsApi.GetCompanySignalsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompanySignalsByIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanySignalsByIdRequest` | `companySignalsByIdRequestSchema` | `src/models/company-signals-by-id-request.ts` |
| `CompanySignalsByIdResponse` | `companySignalsByIdResponseSchema` | `src/models/company-signals-by-id-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactSignalScores

- **Signature**: `getContactSignalScores(request: SignalsApi.GetContactSignalScoresRequest, options?: RequestOptions): ApiPromise<V3SignalScoreContactsResponse, SignalsApi.GetContactSignalScoresError>`
- **Wire**: `POST /v3/contacts/signal-score`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3SignalScoreContactsResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetContactSignalScoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [502] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalsApi.GetContactSignalScoresRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3SignalScoreContactsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3SignalScoreContactsRequest` | `v3SignalScoreContactsRequestSchema` | `src/models/v3-signal-score-contacts-request.ts` |
| `V3SignalScoreContactsResponse` | `v3SignalScoreContactsResponseSchema` | `src/models/v3-signal-score-contacts-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactSignalTypes

- **Signature**: `getContactSignalTypes(options?: RequestOptions): ApiPromise<ContactSignalTypesResponse, SignalsApi.GetContactSignalTypesError>`
- **Wire**: `GET /v3/contacts/signals/types`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactSignalTypesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetContactSignalTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactSignalTypesResponse` | `contactSignalTypesResponseSchema` | `src/models/contact-signal-types-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactSignals

- **Signature**: `getContactSignals(request: SignalsApi.GetContactSignalsRequest, options?: RequestOptions): ApiPromise<V3ContactSignalsResponse, SignalsApi.GetContactSignalsError>`
- **Wire**: `POST /v3/contacts/signals`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ContactSignalsResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetContactSignalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalsApi.GetContactSignalsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V3ContactSignalsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ContactSignalsRequest` | `v3ContactSignalsRequestSchema` | `src/models/v3-contact-signals-request.ts` |
| `V3ContactSignalsResponse` | `v3ContactSignalsResponseSchema` | `src/models/v3-contact-signals-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactSignalsById

- **Signature**: `getContactSignalsById(request: SignalsApi.GetContactSignalsByIdRequest, options?: RequestOptions): ApiPromise<ContactSignalsByIdResponse, SignalsApi.GetContactSignalsByIdError>`
- **Wire**: `POST /api/signals/contacts`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactSignalsByIdResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetContactSignalsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalsApi.GetContactSignalsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContactSignalsByIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactSignalsByIdRequest` | `contactSignalsByIdRequestSchema` | `src/models/contact-signals-by-id-request.ts` |
| `ContactSignalsByIdResponse` | `contactSignalsByIdResponseSchema` | `src/models/contact-signals-by-id-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSignalOptions

- **Signature**: `getSignalOptions(request: SignalsApi.GetSignalOptionsRequest, options?: RequestOptions): ApiPromise<ApiSignalsFiltersResponse, SignalsApi.GetSignalOptionsError>`
- **Wire**: `GET /api/signals/filters/{objectType}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiSignalsFiltersResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.GetSignalOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalsApi.GetSignalOptionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `objectType` | `path` | `ObjectType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObjectType` | `objectTypeSchema` | `src/models/object-type.ts` |
| `ApiSignalsFiltersResponse` | `apiSignalsFiltersResponseSchema` | `src/models/api-signals-filters-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchCompanySignals

- **Signature**: `searchCompanySignals(request: SignalsApi.SearchCompanySignalsRequest, options?: RequestOptions): ApiPromise<CompanySignalsByIdResponse, SignalsApi.SearchCompanySignalsError>`
- **Wire**: `POST /api/signals/companies/search`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompanySignalsByIdResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.SearchCompanySignalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalsApi.SearchCompanySignalsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompanySignalsSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanySignalsSearchRequest` | `companySignalsSearchRequestSchema` | `src/models/company-signals-search-request.ts` |
| `CompanySignalsByIdResponse` | `companySignalsByIdResponseSchema` | `src/models/company-signals-by-id-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchContactSignals

- **Signature**: `searchContactSignals(request: SignalsApi.SearchContactSignalsRequest, options?: RequestOptions): ApiPromise<ContactSignalsSearchResponse, SignalsApi.SearchContactSignalsError>`
- **Wire**: `POST /api/signals/contacts/search`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactSignalsSearchResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `SignalsApi.SearchContactSignalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SignalsApi.SearchContactSignalsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContactSignalsSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactSignalsSearchRequest` | `contactSignalsSearchRequestSchema` | `src/models/contact-signals-search-request.ts` |
| `ContactSignalsSearchResponse` | `contactSignalsSearchResponseSchema` | `src/models/contact-signals-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

