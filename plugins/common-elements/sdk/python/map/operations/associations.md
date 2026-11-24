<!-- Generated file — do not edit; regenerated with the SDK. -->

# Associations — operations

Accessor: `client.associations` · Source: `common_elements/apis/associations.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.associations.associations_building_safety

- **Route**: `GET /api/v1/associations/{id}/building-safety`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_building_safety(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AssociationsBuildingSafetyResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsBuildingSafetyResponse, AssociationsBuildingSafetyErrorBody]`
- **Error**: `AssociationsBuildingSafetyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsBuildingSafetyResponse` | `common_elements/models/api_v1_associations_building_safety_response.py` |
| `AssociationsBuildingSafetyErrorBody` | `common_elements/errors/associations_building_safety_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.associations.associations_buildings

- **Route**: `GET /api/v1/associations/{id}/buildings`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_buildings(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AssociationsBuildingsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsBuildingsResponse, AssociationsBuildingsErrorBody]`
- **Error**: `AssociationsBuildingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsBuildingsResponse` | `common_elements/models/api_v1_associations_buildings_response.py` |
| `AssociationsBuildingsErrorBody` | `common_elements/errors/associations_buildings_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.associations.associations_by_address

- **Route**: `GET /api/v1/associations/by-address`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_by_address(address: str, zip_: str, *, limit: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `address`, `zip_`
- **Params**: `address` — query · `zip_` — query `zip` · `limit` — query
- **Returns (parsed)**: `ApiV1AssociationsByAddressResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsByAddressResponse, AssociationsByAddressErrorBody]`
- **Error**: `AssociationsByAddressErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsByAddressResponse` | `common_elements/models/api_v1_associations_by_address_response.py` |
| `AssociationsByAddressErrorBody` | `common_elements/errors/associations_by_address_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.associations.associations_detail

- **Route**: `GET /api/v1/associations/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_detail(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AssociationsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsResponse, AssociationsDetailErrorBody]`
- **Error**: `AssociationsDetailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsResponse` | `common_elements/models/api_v1_associations_response.py` |
| `AssociationsDetailErrorBody` | `common_elements/errors/associations_detail_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.associations.associations_lookup

- **Route**: `GET /api/v1/associations/lookup`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_lookup(*, q: str | None = None, state: str | None = None, subtype: str | None = None, county: str | None = None, registration_number: str | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `state` — query · `subtype` — query · `county` — query · `registration_number` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `ApiV1AssociationsLookupResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsLookupResponse, AssociationsLookupErrorBody]`
- **Error**: `AssociationsLookupErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsLookupResponse` | `common_elements/models/api_v1_associations_lookup_response.py` |
| `AssociationsLookupErrorBody` | `common_elements/errors/associations_lookup_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.associations.associations_management

- **Route**: `GET /api/v1/associations/{id}/management`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_management(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AssociationsManagementResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsManagementResponse, AssociationsManagementErrorBody]`
- **Error**: `AssociationsManagementErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsManagementResponse` | `common_elements/models/api_v1_associations_management_response.py` |
| `AssociationsManagementErrorBody` | `common_elements/errors/associations_management_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.associations.associations_match

- **Route**: `GET /api/v1/associations/match`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_match(q: str, state: str, *, county: str | None = None, min_similarity: float | None = None, limit: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`, `state`
- **Params**: `q` — query · `state` — query · `county` — query · `min_similarity` — query · `limit` — query
- **Returns (parsed)**: `ApiV1AssociationsMatchResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsMatchResponse, AssociationsMatchErrorBody]`
- **Error**: `AssociationsMatchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsMatchResponse` | `common_elements/models/api_v1_associations_match_response.py` |
| `AssociationsMatchErrorBody` | `common_elements/errors/associations_match_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.associations.associations_nearby

- **Route**: `GET /api/v1/associations/nearby`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_nearby(lat: float, lng: float, *, radius_km: float | None = None, subtype: str | None = None, limit: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lng`
- **Params**: `lat` — query · `lng` — query · `radius_km` — query · `subtype` — query · `limit` — query
- **Returns (parsed)**: `ApiV1AssociationsNearbyResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsNearbyResponse, AssociationsNearbyErrorBody]`
- **Error**: `AssociationsNearbyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsNearbyResponse` | `common_elements/models/api_v1_associations_nearby_response.py` |
| `AssociationsNearbyErrorBody` | `common_elements/errors/associations_nearby_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.associations.associations_officers

- **Route**: `GET /api/v1/associations/{id}/officers`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_officers(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AssociationsOfficersResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsOfficersResponse, AssociationsOfficersErrorBody]`
- **Error**: `AssociationsOfficersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsOfficersResponse` | `common_elements/models/api_v1_associations_officers_response.py` |
| `AssociationsOfficersErrorBody` | `common_elements/errors/associations_officers_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.associations.associations_risk

- **Route**: `GET /api/v1/associations/{id}/risk`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_risk(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AssociationsRiskResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsRiskResponse, AssociationsRiskErrorBody]`
- **Error**: `AssociationsRiskErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsRiskResponse` | `common_elements/models/api_v1_associations_risk_response.py` |
| `AssociationsRiskErrorBody` | `common_elements/errors/associations_risk_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.associations.associations_vendors

- **Route**: `GET /api/v1/associations/{id}/vendors`
- **Auth**: `bearer_auth`
- **Signature**: `def associations_vendors(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AssociationsVendorsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsVendorsResponse, AssociationsVendorsErrorBody]`
- **Error**: `AssociationsVendorsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsVendorsResponse` | `common_elements/models/api_v1_associations_vendors_response.py` |
| `AssociationsVendorsErrorBody` | `common_elements/errors/associations_vendors_error.py` |
| `Error` | `common_elements/models/error.py` |

