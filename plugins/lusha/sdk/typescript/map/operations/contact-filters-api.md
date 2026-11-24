<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactFiltersApi — operations

Accessor: `client.contactFiltersApi` · Source: `src/resources/contact-filters-api.ts` · 5 operations · Request and error types: namespace `ContactFiltersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getContactCountries

- **Signature**: `getContactCountries(options?: RequestOptions): ApiPromise<CountryFilter[], ContactFiltersApi.GetContactCountriesError>`
- **Wire**: `GET /prospecting/filters/contacts/all_countries`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountryFilter[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactFiltersApi.GetContactCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CountryFilter` | `countryFilterSchema` | `src/models/country-filter.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactDataPoints

- **Signature**: `getContactDataPoints(options?: RequestOptions): ApiPromise<string[], ContactFiltersApi.GetContactDataPointsError>`
- **Wire**: `GET /prospecting/filters/contacts/existing_data_points`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactFiltersApi.GetContactDataPointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactDepartments

- **Signature**: `getContactDepartments(options?: RequestOptions): ApiPromise<string[], ContactFiltersApi.GetContactDepartmentsError>`
- **Wire**: `GET /prospecting/filters/contacts/departments`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactFiltersApi.GetContactDepartmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactSeniority

- **Signature**: `getContactSeniority(options?: RequestOptions): ApiPromise<string[], ContactFiltersApi.GetContactSeniorityError>`
- **Wire**: `GET /prospecting/filters/contacts/seniority`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactFiltersApi.GetContactSeniorityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchContactLocations

- **Signature**: `searchContactLocations(request: ContactFiltersApi.SearchContactLocationsRequest, options?: RequestOptions): ApiPromise<LocationFilter[], ContactFiltersApi.SearchContactLocationsError>`
- **Wire**: `POST /prospecting/filters/contacts/locations`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LocationFilter[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `LushaError` with `kind: "api"`, an instance of `ContactFiltersApi.SearchContactLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactFiltersApi.SearchContactLocationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LocationSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LocationSearchRequest` | `locationSearchRequestSchema` | `src/models/location-search-request.ts` |
| `LocationFilter` | `locationFilterSchema` | `src/models/location-filter.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

