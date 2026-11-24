<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataApi — operations

Accessor: `client.dataApi` · Source: `src/resources/data-api.ts` · 7 operations · Request and error types: namespace `DataApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `staying-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### availability

- **Signature**: `availability(request: DataApi.AvailabilityRequest, options?: RequestOptions): ApiPromise<AvailabilityResponse, DataApi.AvailabilityError>`
- **Wire**: `GET /availability`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AvailabilityResponse`
- **Error**: `StayingApiError` with `kind: "api"`, an instance of `DataApi.AvailabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [403] `ErrorEnvelope` · `"errorEnvelope5"` [429] `ErrorEnvelope` · `"errorEnvelope6"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataApi.AvailabilityRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `platform` | `query` | `Platform` | yes |
| `startDate` | `query` | `string` | yes |
| `endDate` | `query` | `string` | yes |
| `listingId` | `query` | `string` | no |
| `listingIds` | `query` | `string` | no |
| `url` | `query` | `string` | no |
| `onlyAvailable` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Platform` | `platformSchema` | `src/models/platform.ts` |
| `AvailabilityResponse` | `availabilityResponseSchema` | `src/models/availability-response.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### listing

- **Signature**: `listing(request: DataApi.ListingRequest, options?: RequestOptions): ApiPromise<ListingResponse, DataApi.ListingError>`
- **Wire**: `GET /listing/{platform}/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListingResponse`
- **Error**: `StayingApiError` with `kind: "api"`, an instance of `DataApi.ListingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [403] `ErrorEnvelope` · `"errorEnvelope5"` [429] `ErrorEnvelope` · `"errorEnvelope6"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataApi.ListingRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `platform` | `path` | `Platform` | yes |
| `id` | `path` | `string` | yes |
| `country` | `query` | `string` | no |
| `checkIn` | `query` | `string` | no |
| `checkOut` | `query` | `string` | no |
| `currency` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Platform` | `platformSchema` | `src/models/platform.ts` |
| `ListingResponse` | `listingResponseSchema` | `src/models/listing-response.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### price

- **Signature**: `price(request: DataApi.PriceRequest, options?: RequestOptions): ApiPromise<PriceResponse, DataApi.PriceError>`
- **Wire**: `GET /price`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PriceResponse`
- **Error**: `StayingApiError` with `kind: "api"`, an instance of `DataApi.PriceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [403] `ErrorEnvelope` · `"errorEnvelope5"` [429] `ErrorEnvelope` · `"errorEnvelope6"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataApi.PriceRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `platform` | `query` | `Platform` | yes |
| `listingId` | `query` | `string` | yes |
| `checkIn` | `query` | `string` | yes |
| `checkOut` | `query` | `string` | yes |
| `currency` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Platform` | `platformSchema` | `src/models/platform.ts` |
| `PriceResponse` | `priceResponseSchema` | `src/models/price-response.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### priceCompare

- **Signature**: `priceCompare(request: DataApi.PriceCompareRequest, options?: RequestOptions): ApiPromise<PriceCompareResponse, DataApi.PriceCompareError>`
- **Wire**: `GET /price-compare`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PriceCompareResponse`
- **Error**: `StayingApiError` with `kind: "api"`, an instance of `DataApi.PriceCompareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [403] `ErrorEnvelope` · `"errorEnvelope5"` [429] `ErrorEnvelope` · `"errorEnvelope6"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataApi.PriceCompareRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `checkIn` | `query` | `string` | yes |
| `checkOut` | `query` | `string` | yes |
| `listings` | `query` | `string` | no |
| `name` | `query` | `string` | no |
| `location` | `query` | `string` | no |
| `googleHotelId` | `query` | `string` | no |
| `adults` | `query` | `number` | no |
| `children` | `query` | `number` | no |
| `currency` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PriceCompareResponse` | `priceCompareResponseSchema` | `src/models/price-compare-response.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### reviews

- **Signature**: `reviews(request: DataApi.ReviewsRequest, options?: RequestOptions): ApiPromise<ReviewsResponse, DataApi.ReviewsError>`
- **Wire**: `GET /reviews`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReviewsResponse`
- **Error**: `StayingApiError` with `kind: "api"`, an instance of `DataApi.ReviewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [403] `ErrorEnvelope` · `"errorEnvelope5"` [429] `ErrorEnvelope` · `"errorEnvelope6"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataApi.ReviewsRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `platform` | `query` | `Platform` | yes |
| `listingId` | `query` | `string` | no |
| `url` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |
| `language` | `query` | `string` | no |
| `sort` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Platform` | `platformSchema` | `src/models/platform.ts` |
| `ReviewsResponse` | `reviewsResponseSchema` | `src/models/reviews-response.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### searchGet

- **Signature**: `searchGet(request: DataApi.SearchGetRequest, options?: RequestOptions): ApiPromise<SearchResponse, DataApi.SearchGetError>`
- **Wire**: `GET /search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchResponse`
- **Error**: `StayingApiError` with `kind: "api"`, an instance of `DataApi.SearchGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [403] `ErrorEnvelope` · `"errorEnvelope5"` [429] `ErrorEnvelope` · `"errorEnvelope6"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataApi.SearchGetRequest` (12):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `location` | `query` | `string` | yes |
| `checkIn` | `query` | `string` | no |
| `checkOut` | `query` | `string` | no |
| `platforms` | `query` | `string` | no |
| `platform` | `query` | `string` | no |
| `adults` | `query` | `number` | no |
| `children` | `query` | `number` | no |
| `rooms` | `query` | `number` | no |
| `currency` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |
| `sort` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchResponse` | `searchResponseSchema` | `src/models/search-response.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### searchPost

- **Signature**: `searchPost(request: DataApi.SearchPostRequest, options?: RequestOptions): ApiPromise<SearchResponse, DataApi.SearchPostError>`
- **Wire**: `POST /search`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResponse`
- **Error**: `StayingApiError` with `kind: "api"`, an instance of `DataApi.SearchPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [400] `ErrorEnvelope` · `"errorEnvelope2"` [401] `ErrorEnvelope` · `"errorEnvelope3"` [402] `ErrorEnvelope` · `"errorEnvelope4"` [403] `ErrorEnvelope` · `"errorEnvelope5"` [429] `ErrorEnvelope` · `"errorEnvelope6"` [503] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataApi.SearchPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchResponse` | `searchResponseSchema` | `src/models/search-response.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

