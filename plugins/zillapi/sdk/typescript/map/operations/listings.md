<!-- Generated file — do not edit; regenerated with the SDK. -->

# Listings — operations

Accessor: `client.listings` · Source: `src/resources/listings.ts` · 4 operations · Request and error types: namespace `Listings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `zillapi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listingsBbox

- **Signature**: `listingsBbox(request: Listings.ListingsBboxRequest, options?: RequestOptions): ApiPromise<SearchResultsOk, Listings.ListingsBboxError>`
- **Wire**: `GET /v1/listings`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchResultsOk`
- **Error**: `ZillapiError` with `kind: "api"`, an instance of `Listings.ListingsBboxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Listings.ListingsBboxRequest` (17):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bbox` | `query` | — | `string` | yes | — |
| `status` | `query` | — | `Status1` | no | `Status1.ForSale` |
| `priceMin` | `query` | `price_min` | `number` | no | — |
| `priceMax` | `query` | `price_max` | `number` | no | — |
| `bedsMin` | `query` | `beds_min` | `number` | no | — |
| `bedsMax` | `query` | `beds_max` | `number` | no | — |
| `bathsMin` | `query` | `baths_min` | `number` | no | — |
| `bathsMax` | `query` | `baths_max` | `number` | no | — |
| `sqftMin` | `query` | `sqft_min` | `number` | no | — |
| `sqftMax` | `query` | `sqft_max` | `number` | no | — |
| `yearBuiltMin` | `query` | `year_built_min` | `number` | no | — |
| `yearBuiltMax` | `query` | `year_built_max` | `number` | no | — |
| `homeTypes` | `query` | `home_types` | `string` | no | — |
| `daysOnZillow` | `query` | `days_on_zillow` | `DaysOnZillow1` | no | — |
| `maxItems` | `query` | `max_items` | `number` | no | `50` |
| `format` | `query` | — | `Format` | no | `Format.Json` |
| `location` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status1` | `status1Schema` | `src/models/status1.ts` |
| `DaysOnZillow1` | `daysOnZillow1Schema` | `src/models/days-on-zillow1.ts` |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `SearchResultsOk` | `searchResultsOkSchema` | `src/models/search-results-ok.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listingsForRent

- **Signature**: `listingsForRent(request: Listings.ListingsForRentRequest, options?: RequestOptions): ApiPromise<SearchResultsOk, ApiError>`
- **Wire**: `POST /v1/listings/for-rent`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResultsOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Listings.ListingsForRentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRequest2` | `searchRequest2Schema` | `src/models/unions/search-request2.ts` |
| `SearchResultsOk` | `searchResultsOkSchema` | `src/models/search-results-ok.ts` |

### listingsForSale

- **Signature**: `listingsForSale(request: Listings.ListingsForSaleRequest, options?: RequestOptions): ApiPromise<SearchResultsOk, ApiError>`
- **Wire**: `POST /v1/listings/for-sale`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResultsOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Listings.ListingsForSaleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRequest2` | `searchRequest2Schema` | `src/models/unions/search-request2.ts` |
| `SearchResultsOk` | `searchResultsOkSchema` | `src/models/search-results-ok.ts` |

### listingsSold

- **Signature**: `listingsSold(request: Listings.ListingsSoldRequest, options?: RequestOptions): ApiPromise<SearchResultsOk, ApiError>`
- **Wire**: `POST /v1/listings/sold`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResultsOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Listings.ListingsSoldRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRequest2` | `searchRequest2Schema` | `src/models/unions/search-request2.ts` |
| `SearchResultsOk` | `searchResultsOkSchema` | `src/models/search-results-ok.ts` |

