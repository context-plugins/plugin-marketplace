<!-- Generated file — do not edit; regenerated with the SDK. -->

# AssociationResources — operations

Accessor: `client.associationResources` · Source: `src/resources/association-resources.ts` · 10 operations · Request and error types: namespace `AssociationResources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### resourceAssociationDocuments

- **Signature**: `resourceAssociationDocuments(request: AssociationResources.ResourceAssociationDocumentsRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsDocumentsResponse, AssociationResources.ResourceAssociationDocumentsError>`
- **Wire**: `GET /api/v1/associations/{id}/documents`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsDocumentsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AssociationResources.ResourceAssociationDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssociationResources.ResourceAssociationDocumentsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `source` | `query` | `string` | no |
| `since` | `query` | `string` (date) | no |
| `until` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsDocumentsResponse` | `apiV1AssociationsDocumentsResponseSchema` | `src/models/api-v1-associations-documents-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceAssociationFinancials

- **Signature**: `resourceAssociationFinancials(request: AssociationResources.ResourceAssociationFinancialsRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsFinancialsResponse, AssociationResources.ResourceAssociationFinancialsError>`
- **Wire**: `GET /api/v1/associations/{id}/financials`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsFinancialsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AssociationResources.ResourceAssociationFinancialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssociationResources.ResourceAssociationFinancialsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `source` | `query` | `string` | no |
| `since` | `query` | `string` (date) | no |
| `until` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsFinancialsResponse` | `apiV1AssociationsFinancialsResponseSchema` | `src/models/api-v1-associations-financials-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceAssociationGovernance

- **Signature**: `resourceAssociationGovernance(request: AssociationResources.ResourceAssociationGovernanceRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsGovernanceResponse, AssociationResources.ResourceAssociationGovernanceError>`
- **Wire**: `GET /api/v1/associations/{id}/governance`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsGovernanceResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AssociationResources.ResourceAssociationGovernanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssociationResources.ResourceAssociationGovernanceRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `source` | `query` | `string` | no |
| `since` | `query` | `string` (date) | no |
| `until` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsGovernanceResponse` | `apiV1AssociationsGovernanceResponseSchema` | `src/models/api-v1-associations-governance-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceAssociationHazards

- **Signature**: `resourceAssociationHazards(request: AssociationResources.ResourceAssociationHazardsRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsHazardsResponse, AssociationResources.ResourceAssociationHazardsError>`
- **Wire**: `GET /api/v1/associations/{id}/hazards`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsHazardsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AssociationResources.ResourceAssociationHazardsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssociationResources.ResourceAssociationHazardsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `source` | `query` | `string` | no |
| `since` | `query` | `string` (date) | no |
| `until` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsHazardsResponse` | `apiV1AssociationsHazardsResponseSchema` | `src/models/api-v1-associations-hazards-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceAssociationInsurance

- **Signature**: `resourceAssociationInsurance(request: AssociationResources.ResourceAssociationInsuranceRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsInsuranceResponse, AssociationResources.ResourceAssociationInsuranceError>`
- **Wire**: `GET /api/v1/associations/{id}/insurance`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsInsuranceResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AssociationResources.ResourceAssociationInsuranceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssociationResources.ResourceAssociationInsuranceRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `source` | `query` | `string` | no |
| `since` | `query` | `string` (date) | no |
| `until` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsInsuranceResponse` | `apiV1AssociationsInsuranceResponseSchema` | `src/models/api-v1-associations-insurance-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceAssociationLegal

- **Signature**: `resourceAssociationLegal(request: AssociationResources.ResourceAssociationLegalRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsLegalResponse, AssociationResources.ResourceAssociationLegalError>`
- **Wire**: `GET /api/v1/associations/{id}/legal`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsLegalResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AssociationResources.ResourceAssociationLegalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssociationResources.ResourceAssociationLegalRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `source` | `query` | `string` | no |
| `since` | `query` | `string` (date) | no |
| `until` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsLegalResponse` | `apiV1AssociationsLegalResponseSchema` | `src/models/api-v1-associations-legal-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceAssociationParcels

- **Signature**: `resourceAssociationParcels(request: AssociationResources.ResourceAssociationParcelsRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsParcelsResponse, AssociationResources.ResourceAssociationParcelsError>`
- **Wire**: `GET /api/v1/associations/{id}/parcels`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsParcelsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AssociationResources.ResourceAssociationParcelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssociationResources.ResourceAssociationParcelsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `source` | `query` | `string` | no |
| `since` | `query` | `string` (date) | no |
| `until` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsParcelsResponse` | `apiV1AssociationsParcelsResponseSchema` | `src/models/api-v1-associations-parcels-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceAssociationPermits

- **Signature**: `resourceAssociationPermits(request: AssociationResources.ResourceAssociationPermitsRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsPermitsResponse, AssociationResources.ResourceAssociationPermitsError>`
- **Wire**: `GET /api/v1/associations/{id}/permits`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsPermitsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AssociationResources.ResourceAssociationPermitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssociationResources.ResourceAssociationPermitsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `source` | `query` | `string` | no |
| `since` | `query` | `string` (date) | no |
| `until` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsPermitsResponse` | `apiV1AssociationsPermitsResponseSchema` | `src/models/api-v1-associations-permits-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceAssociationStructures

- **Signature**: `resourceAssociationStructures(request: AssociationResources.ResourceAssociationStructuresRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsStructuresResponse, AssociationResources.ResourceAssociationStructuresError>`
- **Wire**: `GET /api/v1/associations/{id}/structures`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsStructuresResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AssociationResources.ResourceAssociationStructuresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssociationResources.ResourceAssociationStructuresRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `source` | `query` | `string` | no |
| `since` | `query` | `string` (date) | no |
| `until` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsStructuresResponse` | `apiV1AssociationsStructuresResponseSchema` | `src/models/api-v1-associations-structures-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resourceAssociationViolations

- **Signature**: `resourceAssociationViolations(request: AssociationResources.ResourceAssociationViolationsRequest, options?: RequestOptions): ApiPromise<ApiV1AssociationsViolationsResponse, AssociationResources.ResourceAssociationViolationsError>`
- **Wire**: `GET /api/v1/associations/{id}/violations`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AssociationsViolationsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AssociationResources.ResourceAssociationViolationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssociationResources.ResourceAssociationViolationsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `source` | `query` | `string` | no |
| `since` | `query` | `string` (date) | no |
| `until` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AssociationsViolationsResponse` | `apiV1AssociationsViolationsResponseSchema` | `src/models/api-v1-associations-violations-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

