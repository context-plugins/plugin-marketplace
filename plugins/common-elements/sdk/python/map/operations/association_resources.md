<!-- Generated file — do not edit; regenerated with the SDK. -->

# AssociationResources — operations

Accessor: `client.association_resources` · Source: `common_elements/apis/association_resources.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.association_resources.resource_association_documents

- **Route**: `GET /api/v1/associations/{id}/documents`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_association_documents(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query
- **Returns (parsed)**: `ApiV1AssociationsDocumentsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsDocumentsResponse, ResourceAssociationDocumentsErrorBody]`
- **Error**: `ResourceAssociationDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsDocumentsResponse` | `common_elements/models/api_v1_associations_documents_response.py` |
| `ResourceAssociationDocumentsErrorBody` | `common_elements/errors/resource_association_documents_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.association_resources.resource_association_financials

- **Route**: `GET /api/v1/associations/{id}/financials`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_association_financials(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query
- **Returns (parsed)**: `ApiV1AssociationsFinancialsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsFinancialsResponse, ResourceAssociationFinancialsErrorBody]`
- **Error**: `ResourceAssociationFinancialsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsFinancialsResponse` | `common_elements/models/api_v1_associations_financials_response.py` |
| `ResourceAssociationFinancialsErrorBody` | `common_elements/errors/resource_association_financials_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.association_resources.resource_association_governance

- **Route**: `GET /api/v1/associations/{id}/governance`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_association_governance(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query
- **Returns (parsed)**: `ApiV1AssociationsGovernanceResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsGovernanceResponse, ResourceAssociationGovernanceErrorBody]`
- **Error**: `ResourceAssociationGovernanceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsGovernanceResponse` | `common_elements/models/api_v1_associations_governance_response.py` |
| `ResourceAssociationGovernanceErrorBody` | `common_elements/errors/resource_association_governance_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.association_resources.resource_association_hazards

- **Route**: `GET /api/v1/associations/{id}/hazards`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_association_hazards(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query
- **Returns (parsed)**: `ApiV1AssociationsHazardsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsHazardsResponse, ResourceAssociationHazardsErrorBody]`
- **Error**: `ResourceAssociationHazardsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsHazardsResponse` | `common_elements/models/api_v1_associations_hazards_response.py` |
| `ResourceAssociationHazardsErrorBody` | `common_elements/errors/resource_association_hazards_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.association_resources.resource_association_insurance

- **Route**: `GET /api/v1/associations/{id}/insurance`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_association_insurance(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query
- **Returns (parsed)**: `ApiV1AssociationsInsuranceResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsInsuranceResponse, ResourceAssociationInsuranceErrorBody]`
- **Error**: `ResourceAssociationInsuranceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsInsuranceResponse` | `common_elements/models/api_v1_associations_insurance_response.py` |
| `ResourceAssociationInsuranceErrorBody` | `common_elements/errors/resource_association_insurance_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.association_resources.resource_association_legal

- **Route**: `GET /api/v1/associations/{id}/legal`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_association_legal(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query
- **Returns (parsed)**: `ApiV1AssociationsLegalResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsLegalResponse, ResourceAssociationLegalErrorBody]`
- **Error**: `ResourceAssociationLegalErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsLegalResponse` | `common_elements/models/api_v1_associations_legal_response.py` |
| `ResourceAssociationLegalErrorBody` | `common_elements/errors/resource_association_legal_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.association_resources.resource_association_parcels

- **Route**: `GET /api/v1/associations/{id}/parcels`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_association_parcels(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query
- **Returns (parsed)**: `ApiV1AssociationsParcelsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsParcelsResponse, ResourceAssociationParcelsErrorBody]`
- **Error**: `ResourceAssociationParcelsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsParcelsResponse` | `common_elements/models/api_v1_associations_parcels_response.py` |
| `ResourceAssociationParcelsErrorBody` | `common_elements/errors/resource_association_parcels_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.association_resources.resource_association_permits

- **Route**: `GET /api/v1/associations/{id}/permits`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_association_permits(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query
- **Returns (parsed)**: `ApiV1AssociationsPermitsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsPermitsResponse, ResourceAssociationPermitsErrorBody]`
- **Error**: `ResourceAssociationPermitsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsPermitsResponse` | `common_elements/models/api_v1_associations_permits_response.py` |
| `ResourceAssociationPermitsErrorBody` | `common_elements/errors/resource_association_permits_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.association_resources.resource_association_structures

- **Route**: `GET /api/v1/associations/{id}/structures`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_association_structures(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query
- **Returns (parsed)**: `ApiV1AssociationsStructuresResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsStructuresResponse, ResourceAssociationStructuresErrorBody]`
- **Error**: `ResourceAssociationStructuresErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsStructuresResponse` | `common_elements/models/api_v1_associations_structures_response.py` |
| `ResourceAssociationStructuresErrorBody` | `common_elements/errors/resource_association_structures_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.association_resources.resource_association_violations

- **Route**: `GET /api/v1/associations/{id}/violations`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_association_violations(id_: UUID, *, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query
- **Returns (parsed)**: `ApiV1AssociationsViolationsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsViolationsResponse, ResourceAssociationViolationsErrorBody]`
- **Error**: `ResourceAssociationViolationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsViolationsResponse` | `common_elements/models/api_v1_associations_violations_response.py` |
| `ResourceAssociationViolationsErrorBody` | `common_elements/errors/resource_association_violations_error.py` |
| `Error` | `common_elements/models/error.py` |

