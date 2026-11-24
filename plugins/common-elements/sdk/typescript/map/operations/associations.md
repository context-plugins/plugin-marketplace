<!-- Generated file — do not edit; regenerated with the SDK. -->

# Associations — operations

Accessor: `client.associations` · Source: `src/resources/associations.ts` · 11 operations · Request and error types: namespace `Associations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### associationsBuildingSafety

- **Signature**: `associationsBuildingSafety(request: Associations.AssociationsBuildingSafetyRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsBuildingSafetyResponse, Associations.AssociationsBuildingSafetyError>`
- **Wire**: `GET /api/v1/associations/{id}/building-safety`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsBuildingSafetyResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsBuildingSafetyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsBuildingSafetyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsBuildingSafetyResponse` | `apiV1AssociationsBuildingSafetyResponseSchema` | `src/models/api-v1-associations-building-safety-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### associationsBuildings

- **Signature**: `associationsBuildings(request: Associations.AssociationsBuildingsRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsBuildingsResponse, Associations.AssociationsBuildingsError>`
- **Wire**: `GET /api/v1/associations/{id}/buildings`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsBuildingsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsBuildingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsBuildingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsBuildingsResponse` | `apiV1AssociationsBuildingsResponseSchema` | `src/models/api-v1-associations-buildings-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### associationsByAddress

- **Signature**: `associationsByAddress(request: Associations.AssociationsByAddressRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsByAddressResponse, Associations.AssociationsByAddressError>`
- **Wire**: `GET /api/v1/associations/by-address`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsByAddressResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsByAddressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsByAddressRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `address` | `query` | `string` | yes |
| `zip` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsByAddressResponse` | `apiV1AssociationsByAddressResponseSchema` | `src/models/api-v1-associations-by-address-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### associationsDetail

- **Signature**: `associationsDetail(request: Associations.AssociationsDetailRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsResponse, Associations.AssociationsDetailError>`
- **Wire**: `GET /api/v1/associations/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsDetailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsDetailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsResponse` | `apiV1AssociationsResponseSchema` | `src/models/api-v1-associations-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### associationsLookup

- **Signature**: `associationsLookup(request?: Associations.AssociationsLookupRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsLookupResponse, Associations.AssociationsLookupError>`
- **Wire**: `GET /api/v1/associations/lookup`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsLookupResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsLookupRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `q` | `query` | — | `string` | no |
| `state` | `query` | — | `string` | no |
| `subtype` | `query` | — | `string` | no |
| `county` | `query` | — | `string` | no |
| `registrationNumber` | `query` | `registration_number` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsLookupResponse` | `apiV1AssociationsLookupResponseSchema` | `src/models/api-v1-associations-lookup-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### associationsManagement

- **Signature**: `associationsManagement(request: Associations.AssociationsManagementRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsManagementResponse, Associations.AssociationsManagementError>`
- **Wire**: `GET /api/v1/associations/{id}/management`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsManagementResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsManagementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsManagementRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsManagementResponse` | `apiV1AssociationsManagementResponseSchema` | `src/models/api-v1-associations-management-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### associationsMatch

- **Signature**: `associationsMatch(request: Associations.AssociationsMatchRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsMatchResponse, Associations.AssociationsMatchError>`
- **Wire**: `GET /api/v1/associations/match`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsMatchResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsMatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsMatchRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `q` | `query` | — | `string` | yes |
| `state` | `query` | — | `string` | yes |
| `county` | `query` | — | `string` | no |
| `minSimilarity` | `query` | `min_similarity` | `number` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsMatchResponse` | `apiV1AssociationsMatchResponseSchema` | `src/models/api-v1-associations-match-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### associationsNearby

- **Signature**: `associationsNearby(request: Associations.AssociationsNearbyRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsNearbyResponse, Associations.AssociationsNearbyError>`
- **Wire**: `GET /api/v1/associations/nearby`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsNearbyResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsNearbyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsNearbyRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `lat` | `query` | — | `number` | yes |
| `lng` | `query` | — | `number` | yes |
| `radiusKm` | `query` | `radius_km` | `number` | no |
| `subtype` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsNearbyResponse` | `apiV1AssociationsNearbyResponseSchema` | `src/models/api-v1-associations-nearby-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### associationsOfficers

- **Signature**: `associationsOfficers(request: Associations.AssociationsOfficersRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsOfficersResponse, Associations.AssociationsOfficersError>`
- **Wire**: `GET /api/v1/associations/{id}/officers`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsOfficersResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsOfficersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsOfficersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsOfficersResponse` | `apiV1AssociationsOfficersResponseSchema` | `src/models/api-v1-associations-officers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### associationsRisk

- **Signature**: `associationsRisk(request: Associations.AssociationsRiskRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsRiskResponse, Associations.AssociationsRiskError>`
- **Wire**: `GET /api/v1/associations/{id}/risk`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsRiskResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsRiskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsRiskRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsRiskResponse` | `apiV1AssociationsRiskResponseSchema` | `src/models/api-v1-associations-risk-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### associationsVendors

- **Signature**: `associationsVendors(request: Associations.AssociationsVendorsRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsVendorsResponse, Associations.AssociationsVendorsError>`
- **Wire**: `GET /api/v1/associations/{id}/vendors`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsVendorsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Associations.AssociationsVendorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Associations.AssociationsVendorsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsVendorsResponse` | `apiV1AssociationsVendorsResponseSchema` | `src/models/api-v1-associations-vendors-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

