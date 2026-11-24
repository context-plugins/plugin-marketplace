<!-- Generated file — do not edit; regenerated with the SDK. -->

# CrossAssociationCollections — operations

Accessor: `client.crossAssociationCollections` · Source: `src/resources/cross-association-collections.ts` · 5 operations · Request and error types: namespace `CrossAssociationCollections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### resourceCollectionComplaints

- **Signature**: `resourceCollectionComplaints(request?: CrossAssociationCollections.ResourceCollectionComplaintsRequest, options?: RequestOptions): ApiPromise<ApiV1ComplaintsResponse, CrossAssociationCollections.ResourceCollectionComplaintsError>`
- **Wire**: `GET /api/v1/complaints`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ComplaintsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `CrossAssociationCollections.ResourceCollectionComplaintsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CrossAssociationCollections.ResourceCollectionComplaintsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |
| `source` | `query` | — | `string` | no |
| `since` | `query` | — | `string` (date) | no |
| `until` | `query` | — | `string` (date) | no |
| `state` | `query` | — | `string` | no |
| `countyFips` | `query` | `county_fips` | `string` | no |
| `jurisdiction` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ComplaintsResponse` | `apiV1ComplaintsResponseSchema` | `src/models/api-v1-complaints-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceCollectionInsuranceCarriers

- **Signature**: `resourceCollectionInsuranceCarriers(request?: CrossAssociationCollections.ResourceCollectionInsuranceCarriersRequest, options?: RequestOptions): ApiPromise<ApiV1InsuranceCarriersResponse, CrossAssociationCollections.ResourceCollectionInsuranceCarriersError>`
- **Wire**: `GET /api/v1/insurance/carriers`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1InsuranceCarriersResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `CrossAssociationCollections.ResourceCollectionInsuranceCarriersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CrossAssociationCollections.ResourceCollectionInsuranceCarriersRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |
| `source` | `query` | — | `string` | no |
| `since` | `query` | — | `string` (date) | no |
| `until` | `query` | — | `string` (date) | no |
| `state` | `query` | — | `string` | no |
| `countyFips` | `query` | `county_fips` | `string` | no |
| `jurisdiction` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1InsuranceCarriersResponse` | `apiV1InsuranceCarriersResponseSchema` | `src/models/api-v1-insurance-carriers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceCollectionLegalCases

- **Signature**: `resourceCollectionLegalCases(request?: CrossAssociationCollections.ResourceCollectionLegalCasesRequest, options?: RequestOptions): ApiPromise<ApiV1LegalCasesResponse, CrossAssociationCollections.ResourceCollectionLegalCasesError>`
- **Wire**: `GET /api/v1/legal/cases`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1LegalCasesResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `CrossAssociationCollections.ResourceCollectionLegalCasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CrossAssociationCollections.ResourceCollectionLegalCasesRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |
| `source` | `query` | — | `string` | no |
| `since` | `query` | — | `string` (date) | no |
| `until` | `query` | — | `string` (date) | no |
| `state` | `query` | — | `string` | no |
| `countyFips` | `query` | `county_fips` | `string` | no |
| `jurisdiction` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1LegalCasesResponse` | `apiV1LegalCasesResponseSchema` | `src/models/api-v1-legal-cases-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceCollectionRateFilings

- **Signature**: `resourceCollectionRateFilings(request?: CrossAssociationCollections.ResourceCollectionRateFilingsRequest, options?: RequestOptions): ApiPromise<ApiV1InsuranceRateFilingsResponse, CrossAssociationCollections.ResourceCollectionRateFilingsError>`
- **Wire**: `GET /api/v1/insurance/rate-filings`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1InsuranceRateFilingsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `CrossAssociationCollections.ResourceCollectionRateFilingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CrossAssociationCollections.ResourceCollectionRateFilingsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |
| `source` | `query` | — | `string` | no |
| `since` | `query` | — | `string` (date) | no |
| `until` | `query` | — | `string` (date) | no |
| `state` | `query` | — | `string` | no |
| `countyFips` | `query` | `county_fips` | `string` | no |
| `jurisdiction` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1InsuranceRateFilingsResponse` | `apiV1InsuranceRateFilingsResponseSchema` | `src/models/api-v1-insurance-rate-filings-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceCollectionStormEvents

- **Signature**: `resourceCollectionStormEvents(request?: CrossAssociationCollections.ResourceCollectionStormEventsRequest, options?: RequestOptions): ApiPromise<ApiV1StormEventsResponse, CrossAssociationCollections.ResourceCollectionStormEventsError>`
- **Wire**: `GET /api/v1/storm-events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1StormEventsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `CrossAssociationCollections.ResourceCollectionStormEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CrossAssociationCollections.ResourceCollectionStormEventsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |
| `source` | `query` | — | `string` | no |
| `since` | `query` | — | `string` (date) | no |
| `until` | `query` | — | `string` (date) | no |
| `state` | `query` | — | `string` | no |
| `countyFips` | `query` | `county_fips` | `string` | no |
| `jurisdiction` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1StormEventsResponse` | `apiV1StormEventsResponseSchema` | `src/models/api-v1-storm-events-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

