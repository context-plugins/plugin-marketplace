<!-- Generated file — do not edit; regenerated with the SDK. -->

# Properties — operations

Accessor: `client.properties` · Source: `src/resources/properties.ts` · 13 operations · Request and error types: namespace `Properties`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `zillapi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBatchPropertyJob

- **Signature**: `createBatchPropertyJob(request: Properties.CreateBatchPropertyJobRequest, options?: RequestOptions): ApiPromise<JobAccepted, ApiError>`
- **Wire**: `POST /v1/properties/batch`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JobAccepted`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.CreateBatchPropertyJobRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchPropertyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchPropertyRequest` | `batchPropertyRequestSchema` | `src/models/batch-property-request.ts` |
| `JobAccepted` | `jobAcceptedSchema` | `src/models/job-accepted.ts` |

### getPropertyAgent

- **Signature**: `getPropertyAgent(request: Properties.GetPropertyAgentRequest, options?: RequestOptions): ApiPromise<AgentOk, ApiError>`
- **Wire**: `GET /v1/properties/{zpid}/agent`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertyAgentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zpid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentOk` | `agentOkSchema` | `src/models/agent-ok.ts` |

### getPropertyByAddress

- **Signature**: `getPropertyByAddress(request: Properties.GetPropertyByAddressRequest, options?: RequestOptions): ApiPromise<PropertyOk, ApiError>`
- **Wire**: `GET /v1/properties/by-address`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PropertyOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertyByAddressRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `address` | `query` | `string` | yes | — |
| `status` | `query` | `StatusZillapiZillowPropertyDataPropertiesApi` | no | `StatusZillapiZillowPropertyDataPropertiesApi.ForSale` |
| `fields` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusZillapiZillowPropertyDataPropertiesApi` | `statusZillapiZillowPropertyDataPropertiesApiSchema` | `src/models/status-zillapi-zillow-property-data-properties-api.ts` |
| `PropertyOk` | `propertyOkSchema` | `src/models/property-ok.ts` |

### getPropertyByUrl

- **Signature**: `getPropertyByUrl(request: Properties.GetPropertyByUrlRequest, options?: RequestOptions): ApiPromise<PropertyOk, Properties.GetPropertyByUrlError>`
- **Wire**: `GET /v1/properties/by-url`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PropertyOk`
- **Error**: `ZillapiError` with `kind: "api"`, an instance of `Properties.GetPropertyByUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"apiErrorModel4"` [429] `ApiErrorModel` · `"apiErrorModel5"` [502] `ApiErrorModel` · `"apiErrorModel6"` [504] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Properties.GetPropertyByUrlRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `url` | `query` | — | `string` | yes | — |
| `status` | `query` | — | `StatusZillapiZillowPropertyDataPropertiesApi` | no | `StatusZillapiZillowPropertyDataPropertiesApi.ForSale` |
| `extractUnits` | `query` | `extract_units` | `ExtractUnits` | no | `ExtractUnits.Disabled` |
| `fields` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusZillapiZillowPropertyDataPropertiesApi` | `statusZillapiZillowPropertyDataPropertiesApiSchema` | `src/models/status-zillapi-zillow-property-data-properties-api.ts` |
| `ExtractUnits` | `extractUnitsSchema` | `src/models/extract-units.ts` |
| `PropertyOk` | `propertyOkSchema` | `src/models/property-ok.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getPropertyByZpid

- **Signature**: `getPropertyByZpid(request: Properties.GetPropertyByZpidRequest, options?: RequestOptions): ApiPromise<PropertyCachedOk, ApiError>`
- **Wire**: `GET /v1/properties/{zpid}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PropertyCachedOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertyByZpidRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zpid` | `path` | `string` | yes |
| `fields` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PropertyCachedOk` | `propertyCachedOkSchema` | `src/models/property-cached-ok.ts` |

### getPropertyFacts

- **Signature**: `getPropertyFacts(request: Properties.GetPropertyFactsRequest, options?: RequestOptions): ApiPromise<FactsOk, ApiError>`
- **Wire**: `GET /v1/properties/{zpid}/facts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FactsOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertyFactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zpid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FactsOk` | `factsOkSchema` | `src/models/facts-ok.ts` |

### getPropertyNearby

- **Signature**: `getPropertyNearby(request: Properties.GetPropertyNearbyRequest, options?: RequestOptions): ApiPromise<NearbyOk, ApiError>`
- **Wire**: `GET /v1/properties/{zpid}/nearby`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NearbyOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertyNearbyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zpid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NearbyOk` | `nearbyOkSchema` | `src/models/nearby-ok.ts` |

### getPropertyOpenHouses

- **Signature**: `getPropertyOpenHouses(request: Properties.GetPropertyOpenHousesRequest, options?: RequestOptions): ApiPromise<OpenHousesOk, ApiError>`
- **Wire**: `GET /v1/properties/{zpid}/open-houses`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OpenHousesOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertyOpenHousesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zpid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OpenHousesOk` | `openHousesOkSchema` | `src/models/open-houses-ok.ts` |

### getPropertyPhotos

- **Signature**: `getPropertyPhotos(request: Properties.GetPropertyPhotosRequest, options?: RequestOptions): ApiPromise<PhotosOk, ApiError>`
- **Wire**: `GET /v1/properties/{zpid}/photos`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PhotosOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertyPhotosRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zpid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PhotosOk` | `photosOkSchema` | `src/models/photos-ok.ts` |

### getPropertyPriceHistory

- **Signature**: `getPropertyPriceHistory(request: Properties.GetPropertyPriceHistoryRequest, options?: RequestOptions): ApiPromise<PriceHistoryOk, ApiError>`
- **Wire**: `GET /v1/properties/{zpid}/price-history`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PriceHistoryOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertyPriceHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zpid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PriceHistoryOk` | `priceHistoryOkSchema` | `src/models/price-history-ok.ts` |

### getPropertySchools

- **Signature**: `getPropertySchools(request: Properties.GetPropertySchoolsRequest, options?: RequestOptions): ApiPromise<SchoolsOk, ApiError>`
- **Wire**: `GET /v1/properties/{zpid}/schools`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SchoolsOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertySchoolsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zpid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SchoolsOk` | `schoolsOkSchema` | `src/models/schools-ok.ts` |

### getPropertyTaxHistory

- **Signature**: `getPropertyTaxHistory(request: Properties.GetPropertyTaxHistoryRequest, options?: RequestOptions): ApiPromise<TaxHistoryOk, ApiError>`
- **Wire**: `GET /v1/properties/{zpid}/tax-history`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaxHistoryOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertyTaxHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zpid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaxHistoryOk` | `taxHistoryOkSchema` | `src/models/tax-history-ok.ts` |

### getPropertyZestimate

- **Signature**: `getPropertyZestimate(request: Properties.GetPropertyZestimateRequest, options?: RequestOptions): ApiPromise<ZestimateOk, ApiError>`
- **Wire**: `GET /v1/properties/{zpid}/zestimate`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ZestimateOk`
- **Error**: `ZillapiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Properties.GetPropertyZestimateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zpid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ZestimateOk` | `zestimateOkSchema` | `src/models/zestimate-ok.ts` |

