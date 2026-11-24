<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersInventory — operations

Accessor: `client.numbersInventory` · Source: `src/resources/numbers-inventory.ts` · 10 operations · Request and error types: namespace `NumbersInventory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### numbersCountriesCitiesDidsIndex

- **Signature**: `numbersCountriesCitiesDidsIndex(request: NumbersInventory.NumbersCountriesCitiesDidsIndexRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersCountriesCitiesDidsResponse, NumbersInventory.NumbersCountriesCitiesDidsIndexError>`
- **Wire**: `GET /api/v2/numbers/countries/{country_id}/cities/{city_id}/dids`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2NumbersCountriesCitiesDidsResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `NumbersInventory.NumbersCountriesCitiesDidsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersCountriesCitiesDids401Error1"` [401] `ApiV2NumbersCountriesCitiesDids401Error1` · `"apiV2NumbersCountriesCitiesDids403Error1"` [403] `ApiV2NumbersCountriesCitiesDids403Error1` · `"apiV2NumbersCountriesCitiesDids404Error1"` [404] `ApiV2NumbersCountriesCitiesDids404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersInventory.NumbersCountriesCitiesDidsIndexRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `countryId` | `path` | `country_id` | `number` | yes |
| `cityId` | `path` | `city_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersCountriesCitiesDidsResponse` | `apiV2NumbersCountriesCitiesDidsResponseSchema` | `src/models/api-v2-numbers-countries-cities-dids-response.ts` |
| `ApiV2NumbersCountriesCitiesDids401Error1` | `apiV2NumbersCountriesCitiesDids401Error1Schema` | `src/models/api-v2-numbers-countries-cities-dids401-error1.ts` |
| `ApiV2NumbersCountriesCitiesDids403Error1` | `apiV2NumbersCountriesCitiesDids403Error1Schema` | `src/models/api-v2-numbers-countries-cities-dids403-error1.ts` |
| `ApiV2NumbersCountriesCitiesDids404Error1` | `apiV2NumbersCountriesCitiesDids404Error1Schema` | `src/models/api-v2-numbers-countries-cities-dids404-error1.ts` |

### numbersCountriesCitiesIndex

- **Signature**: `numbersCountriesCitiesIndex(request: NumbersInventory.NumbersCountriesCitiesIndexRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersCountriesCitiesResponse, NumbersInventory.NumbersCountriesCitiesIndexError>`
- **Wire**: `GET /api/v2/numbers/countries/{country_id}/cities`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2NumbersCountriesCitiesResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `NumbersInventory.NumbersCountriesCitiesIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersCountriesCities401Error1"` [401] `ApiV2NumbersCountriesCities401Error1` · `"apiV2NumbersCountriesCities403Error1"` [403] `ApiV2NumbersCountriesCities403Error1` · `"apiV2NumbersCountriesCities404Error1"` [404] `ApiV2NumbersCountriesCities404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersInventory.NumbersCountriesCitiesIndexRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `countryId` | `path` | `country_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersCountriesCitiesResponse` | `apiV2NumbersCountriesCitiesResponseSchema` | `src/models/api-v2-numbers-countries-cities-response.ts` |
| `ApiV2NumbersCountriesCities401Error1` | `apiV2NumbersCountriesCities401Error1Schema` | `src/models/api-v2-numbers-countries-cities401-error1.ts` |
| `ApiV2NumbersCountriesCities403Error1` | `apiV2NumbersCountriesCities403Error1Schema` | `src/models/api-v2-numbers-countries-cities403-error1.ts` |
| `ApiV2NumbersCountriesCities404Error1` | `apiV2NumbersCountriesCities404Error1Schema` | `src/models/api-v2-numbers-countries-cities404-error1.ts` |

### numbersCountriesIndex

- **Signature**: `numbersCountriesIndex(options?: RequestOptions): ApiPromise<ApiV2NumbersCountriesResponse, NumbersInventory.NumbersCountriesIndexError>`
- **Wire**: `GET /api/v2/numbers/countries`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2NumbersCountriesResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `NumbersInventory.NumbersCountriesIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersCountries401Error1"` [401] `ApiV2NumbersCountries401Error1` · `"apiV2NumbersCountries403Error1"` [403] `ApiV2NumbersCountries403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersCountriesResponse` | `apiV2NumbersCountriesResponseSchema` | `src/models/api-v2-numbers-countries-response.ts` |
| `ApiV2NumbersCountries401Error1` | `apiV2NumbersCountries401Error1Schema` | `src/models/api-v2-numbers-countries401-error1.ts` |
| `ApiV2NumbersCountries403Error1` | `apiV2NumbersCountries403Error1Schema` | `src/models/api-v2-numbers-countries403-error1.ts` |

### numbersCountriesLocationsIndex

- **Signature**: `numbersCountriesLocationsIndex(request: NumbersInventory.NumbersCountriesLocationsIndexRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersCountriesLocationsResponse, NumbersInventory.NumbersCountriesLocationsIndexError>`
- **Wire**: `GET /api/v2/numbers/countries/{country_id}/locations`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2NumbersCountriesLocationsResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `NumbersInventory.NumbersCountriesLocationsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersCountriesLocations401Error1"` [401] `ApiV2NumbersCountriesLocations401Error1` · `"apiV2NumbersCountriesLocations403Error1"` [403] `ApiV2NumbersCountriesLocations403Error1` · `"apiV2NumbersCountriesLocations404Error1"` [404] `ApiV2NumbersCountriesLocations404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersInventory.NumbersCountriesLocationsIndexRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `countryId` | `path` | `country_id` | `number` | yes |
| `prefix` | `query` | — | `number` | yes |
| `smsEnabled` | `query` | `sms_enabled` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersCountriesLocationsResponse` | `apiV2NumbersCountriesLocationsResponseSchema` | `src/models/api-v2-numbers-countries-locations-response.ts` |
| `ApiV2NumbersCountriesLocations401Error1` | `apiV2NumbersCountriesLocations401Error1Schema` | `src/models/api-v2-numbers-countries-locations401-error1.ts` |
| `ApiV2NumbersCountriesLocations403Error1` | `apiV2NumbersCountriesLocations403Error1Schema` | `src/models/api-v2-numbers-countries-locations403-error1.ts` |
| `ApiV2NumbersCountriesLocations404Error1` | `apiV2NumbersCountriesLocations404Error1Schema` | `src/models/api-v2-numbers-countries-locations404-error1.ts` |

### numbersCountriesRegionsIndex

- **Signature**: `numbersCountriesRegionsIndex(request: NumbersInventory.NumbersCountriesRegionsIndexRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersCountriesRegionsResponse, NumbersInventory.NumbersCountriesRegionsIndexError>`
- **Wire**: `GET /api/v2/numbers/countries/{country_id}/regions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2NumbersCountriesRegionsResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `NumbersInventory.NumbersCountriesRegionsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersCountriesRegions401Error1"` [401] `ApiV2NumbersCountriesRegions401Error1` · `"apiV2NumbersCountriesRegions403Error1"` [403] `ApiV2NumbersCountriesRegions403Error1` · `"apiV2NumbersCountriesRegions404Error1"` [404] `ApiV2NumbersCountriesRegions404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersInventory.NumbersCountriesRegionsIndexRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `countryId` | `path` | `country_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersCountriesRegionsResponse` | `apiV2NumbersCountriesRegionsResponseSchema` | `src/models/api-v2-numbers-countries-regions-response.ts` |
| `ApiV2NumbersCountriesRegions401Error1` | `apiV2NumbersCountriesRegions401Error1Schema` | `src/models/api-v2-numbers-countries-regions401-error1.ts` |
| `ApiV2NumbersCountriesRegions403Error1` | `apiV2NumbersCountriesRegions403Error1Schema` | `src/models/api-v2-numbers-countries-regions403-error1.ts` |
| `ApiV2NumbersCountriesRegions404Error1` | `apiV2NumbersCountriesRegions404Error1Schema` | `src/models/api-v2-numbers-countries-regions404-error1.ts` |

### numbersIndex

- **Signature**: `numbersIndex(request?: NumbersInventory.NumbersIndexRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersResponse, NumbersInventory.NumbersIndexError>`
- **Wire**: `GET /api/v2/numbers`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2NumbersResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `NumbersInventory.NumbersIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Numbers401Error1"` [401] `ApiV2Numbers401Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersInventory.NumbersIndexRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `showAll` | `query` | `show_all` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersResponse` | `apiV2NumbersResponseSchema` | `src/models/api-v2-numbers-response.ts` |
| `ApiV2Numbers401Error1` | `apiV2Numbers401Error1Schema` | `src/models/api-v2-numbers401-error1.ts` |

### numbersPurchaseCreate

- **Signature**: `numbersPurchaseCreate(request: NumbersInventory.NumbersPurchaseCreateRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersPurchaseResponse, NumbersInventory.NumbersPurchaseCreateError>`
- **Wire**: `POST /api/v2/numbers/purchase`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2NumbersPurchaseResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `NumbersInventory.NumbersPurchaseCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersPurchase400Error1"` [400] `ApiV2NumbersPurchase400Error1` · `"apiV2NumbersPurchase401Error1"` [401] `ApiV2NumbersPurchase401Error1` · `"apiV2NumbersPurchaseResponse11"` [422] `ApiV2NumbersPurchaseResponse11` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersInventory.NumbersPurchaseCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV2NumbersPurchaseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersPurchaseRequest` | `apiV2NumbersPurchaseRequestSchema` | `src/models/api-v2-numbers-purchase-request.ts` |
| `ApiV2NumbersPurchaseResponse` | `apiV2NumbersPurchaseResponseSchema` | `src/models/api-v2-numbers-purchase-response.ts` |
| `ApiV2NumbersPurchase400Error1` | `apiV2NumbersPurchase400Error1Schema` | `src/models/api-v2-numbers-purchase400-error1.ts` |
| `ApiV2NumbersPurchase401Error1` | `apiV2NumbersPurchase401Error1Schema` | `src/models/api-v2-numbers-purchase401-error1.ts` |
| `ApiV2NumbersPurchaseResponse11` | `apiV2NumbersPurchaseResponse11Schema` | `src/models/unions/api-v2-numbers-purchase-response11.ts` |

### numbersPurchaseDestroy

- **Signature**: `numbersPurchaseDestroy(request?: NumbersInventory.NumbersPurchaseDestroyRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersPurchaseResponse3, NumbersInventory.NumbersPurchaseDestroyError>`
- **Wire**: `DELETE /api/v2/numbers/purchase`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2NumbersPurchaseResponse3`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `NumbersInventory.NumbersPurchaseDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersPurchase401Error1"` [401] `ApiV2NumbersPurchase401Error1` · `"apiV2NumbersPurchase403Error1"` [403] `ApiV2NumbersPurchase403Error1` · `"error"` [422] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersInventory.NumbersPurchaseDestroyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idIn` | `query` | `id_in[]` | `number[]` | no |
| `didNumbers` | `query` | `did_numbers[]` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersPurchaseResponse3` | `apiV2NumbersPurchaseResponse3Schema` | `src/models/api-v2-numbers-purchase-response3.ts` |
| `ApiV2NumbersPurchase401Error1` | `apiV2NumbersPurchase401Error1Schema` | `src/models/api-v2-numbers-purchase401-error1.ts` |
| `ApiV2NumbersPurchase403Error1` | `apiV2NumbersPurchase403Error1Schema` | `src/models/api-v2-numbers-purchase403-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### numbersPurchaseUpdate

- **Signature**: `numbersPurchaseUpdate(request: NumbersInventory.NumbersPurchaseUpdateRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersPurchaseResponse2, NumbersInventory.NumbersPurchaseUpdateError>`
- **Wire**: `PUT /api/v2/numbers/purchase`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2NumbersPurchaseResponse2`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `NumbersInventory.NumbersPurchaseUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersPurchase401Error1"` [401] `ApiV2NumbersPurchase401Error1` · `"error"` [422] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersInventory.NumbersPurchaseUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV2NumbersPurchaseRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersPurchaseRequest1` | `apiV2NumbersPurchaseRequest1Schema` | `src/models/api-v2-numbers-purchase-request1.ts` |
| `ApiV2NumbersPurchaseResponse2` | `apiV2NumbersPurchaseResponse2Schema` | `src/models/api-v2-numbers-purchase-response2.ts` |
| `ApiV2NumbersPurchase401Error1` | `apiV2NumbersPurchase401Error1Schema` | `src/models/api-v2-numbers-purchase401-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### numbersSearchShow

- **Signature**: `numbersSearchShow(request?: NumbersInventory.NumbersSearchShowRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersSearchResponse, NumbersInventory.NumbersSearchShowError>`
- **Wire**: `GET /api/v2/numbers/search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2NumbersSearchResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `NumbersInventory.NumbersSearchShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersSearch401Error1"` [401] `ApiV2NumbersSearch401Error1` · `"apiV2NumbersSearch403Error1"` [403] `ApiV2NumbersSearch403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersInventory.NumbersSearchShowRequest` (18):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `idIn` | `query` | `id_in` | `number` | no | — |
| `numberIn` | `query` | `number_in` | `string` | no | — |
| `numberContains` | `query` | `number_contains` | `number` | no | — |
| `beginsWith` | `query` | `begins_with` | `number` | no | — |
| `endsWith` | `query` | `ends_with` | `number` | no | — |
| `cityNameContains` | `query` | `city_name_contains` | `string` | no | — |
| `countryNameContains` | `query` | `country_name_contains` | `string` | no | — |
| `stateNameContains` | `query` | `state_name_contains` | `string` | no | — |
| `smsEnabled` | `query` | `sms_enabled` | `string` | no | — |
| `noLocalCli` | `query` | `no_local_cli` | `string` | no | — |
| `vendorId` | `query` | `vendor_id` | `number` | no | — |
| `cityId` | `query` | `city_id` | `number` | no | — |
| `regionId` | `query` | `region_id` | `number` | no | — |
| `requireDocs` | `query` | `require_docs` | `number` | no | — |
| `commitmentMonths` | `query` | `commitment_months` | `number` | no | — |
| `cheapSorting` | `query` | `cheap_sorting` | `string` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `25` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersSearchResponse` | `apiV2NumbersSearchResponseSchema` | `src/models/api-v2-numbers-search-response.ts` |
| `ApiV2NumbersSearch401Error1` | `apiV2NumbersSearch401Error1Schema` | `src/models/api-v2-numbers-search401-error1.ts` |
| `ApiV2NumbersSearch403Error1` | `apiV2NumbersSearch403Error1Schema` | `src/models/api-v2-numbers-search403-error1.ts` |

