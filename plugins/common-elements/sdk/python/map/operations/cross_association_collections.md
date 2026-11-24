<!-- Generated file — do not edit; regenerated with the SDK. -->

# CrossAssociationCollections — operations

Accessor: `client.cross_association_collections` · Source: `common_elements/apis/cross_association_collections.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cross_association_collections.resource_collection_complaints

- **Route**: `GET /api/v1/complaints`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_collection_complaints(*, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, state: str | None = None, county_fips: str | None = None, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query · `state` — query · `county_fips` — query · `jurisdiction` — query
- **Returns (parsed)**: `ApiV1ComplaintsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ComplaintsResponse, ResourceCollectionComplaintsErrorBody]`
- **Error**: `ResourceCollectionComplaintsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ComplaintsResponse` | `common_elements/models/api_v1_complaints_response.py` |
| `ResourceCollectionComplaintsErrorBody` | `common_elements/errors/resource_collection_complaints_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.cross_association_collections.resource_collection_insurance_carriers

- **Route**: `GET /api/v1/insurance/carriers`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_collection_insurance_carriers(*, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, state: str | None = None, county_fips: str | None = None, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query · `state` — query · `county_fips` — query · `jurisdiction` — query
- **Returns (parsed)**: `ApiV1InsuranceCarriersResponse`
- **Returns (raw)**: `ApiResult[ApiV1InsuranceCarriersResponse, ResourceCollectionInsuranceCarriersErrorBody]`
- **Error**: `ResourceCollectionInsuranceCarriersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1InsuranceCarriersResponse` | `common_elements/models/api_v1_insurance_carriers_response.py` |
| `ResourceCollectionInsuranceCarriersErrorBody` | `common_elements/errors/resource_collection_insurance_carriers_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.cross_association_collections.resource_collection_legal_cases

- **Route**: `GET /api/v1/legal/cases`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_collection_legal_cases(*, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, state: str | None = None, county_fips: str | None = None, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query · `state` — query · `county_fips` — query · `jurisdiction` — query
- **Returns (parsed)**: `ApiV1LegalCasesResponse`
- **Returns (raw)**: `ApiResult[ApiV1LegalCasesResponse, ResourceCollectionLegalCasesErrorBody]`
- **Error**: `ResourceCollectionLegalCasesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1LegalCasesResponse` | `common_elements/models/api_v1_legal_cases_response.py` |
| `ResourceCollectionLegalCasesErrorBody` | `common_elements/errors/resource_collection_legal_cases_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.cross_association_collections.resource_collection_rate_filings

- **Route**: `GET /api/v1/insurance/rate-filings`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_collection_rate_filings(*, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, state: str | None = None, county_fips: str | None = None, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query · `state` — query · `county_fips` — query · `jurisdiction` — query
- **Returns (parsed)**: `ApiV1InsuranceRateFilingsResponse`
- **Returns (raw)**: `ApiResult[ApiV1InsuranceRateFilingsResponse, ResourceCollectionRateFilingsErrorBody]`
- **Error**: `ResourceCollectionRateFilingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1InsuranceRateFilingsResponse` | `common_elements/models/api_v1_insurance_rate_filings_response.py` |
| `ResourceCollectionRateFilingsErrorBody` | `common_elements/errors/resource_collection_rate_filings_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.cross_association_collections.resource_collection_storm_events

- **Route**: `GET /api/v1/storm-events`
- **Auth**: `bearer_auth`
- **Signature**: `def resource_collection_storm_events(*, limit: float | None = None, offset: float | None = None, source: str | None = None, since: Date | None = None, until: Date | None = None, state: str | None = None, county_fips: str | None = None, jurisdiction: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `source` — query · `since` — query · `until` — query · `state` — query · `county_fips` — query · `jurisdiction` — query
- **Returns (parsed)**: `ApiV1StormEventsResponse`
- **Returns (raw)**: `ApiResult[ApiV1StormEventsResponse, ResourceCollectionStormEventsErrorBody]`
- **Error**: `ResourceCollectionStormEventsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1StormEventsResponse` | `common_elements/models/api_v1_storm_events_response.py` |
| `ResourceCollectionStormEventsErrorBody` | `common_elements/errors/resource_collection_storm_events_error.py` |
| `Error` | `common_elements/models/error.py` |

