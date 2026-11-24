<!-- Generated file — do not edit; regenerated with the SDK. -->

# Properties — operations

Accessor: `client.properties` · Source: `zillapi/apis/properties.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.properties.create_batch_property_job

- **Route**: `POST /v1/properties/batch`
- **Auth**: `bearer_auth`
- **Signature**: `def create_batch_property_job(body: BatchPropertyRequest | BatchPropertyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `JobAccepted`
- **Returns (raw)**: `ApiResult[JobAccepted, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `BatchPropertyRequest` | `zillapi/models/batch_property_request.py` |
| `BatchPropertyRequestDict` | `zillapi/models/batch_property_request.py` |
| `JobAccepted` | `zillapi/models/job_accepted.py` |

### client.properties.get_property_agent

- **Route**: `GET /v1/properties/{zpid}/agent`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_agent(zpid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zpid`
- **Params**: `zpid` — path
- **Returns (parsed)**: `AgentOk`
- **Returns (raw)**: `ApiResult[AgentOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AgentOk` | `zillapi/models/agent_ok.py` |

### client.properties.get_property_by_address

- **Route**: `GET /v1/properties/by-address`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_by_address(address: str, *, status: StatusZillapiZillowPropertyDataPropertiesApiOrStr | None = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `address`
- **Params**: `address` — query · `status` — query · `fields` — query
- **Returns (parsed)**: `PropertyOk`
- **Returns (raw)**: `ApiResult[PropertyOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusZillapiZillowPropertyDataPropertiesApiOrStr` | `zillapi/models/enums/status_zillapi_zillow_property_data_properties_api.py` |
| `PropertyOk` | `zillapi/models/property_ok.py` |

### client.properties.get_property_by_url

- **Route**: `GET /v1/properties/by-url`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_by_url(url: str, *, status: StatusZillapiZillowPropertyDataPropertiesApiOrStr | None = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE, extract_units: ExtractUnitsOrStr | None = ExtractUnits.DISABLED, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `url`
- **Params**: `url` — query · `status` — query · `extract_units` — query · `fields` — query
- **Returns (parsed)**: `PropertyOk`
- **Returns (raw)**: `ApiResult[PropertyOk, GetPropertyByUrlErrorBody]`
- **Error**: `GetPropertyByUrlErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 404, 429, 502, 504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusZillapiZillowPropertyDataPropertiesApiOrStr` | `zillapi/models/enums/status_zillapi_zillow_property_data_properties_api.py` |
| `ExtractUnitsOrStr` | `zillapi/models/enums/extract_units.py` |
| `PropertyOk` | `zillapi/models/property_ok.py` |
| `GetPropertyByUrlErrorBody` | `zillapi/errors/get_property_by_url_error.py` |
| `ApiErrorModel` | `zillapi/models/api_error_model.py` |

### client.properties.get_property_by_zpid

- **Route**: `GET /v1/properties/{zpid}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_by_zpid(zpid: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zpid`
- **Params**: `zpid` — path · `fields` — query
- **Returns (parsed)**: `PropertyCachedOk`
- **Returns (raw)**: `ApiResult[PropertyCachedOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PropertyCachedOk` | `zillapi/models/property_cached_ok.py` |

### client.properties.get_property_facts

- **Route**: `GET /v1/properties/{zpid}/facts`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_facts(zpid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zpid`
- **Params**: `zpid` — path
- **Returns (parsed)**: `FactsOk`
- **Returns (raw)**: `ApiResult[FactsOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `FactsOk` | `zillapi/models/facts_ok.py` |

### client.properties.get_property_nearby

- **Route**: `GET /v1/properties/{zpid}/nearby`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_nearby(zpid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zpid`
- **Params**: `zpid` — path
- **Returns (parsed)**: `NearbyOk`
- **Returns (raw)**: `ApiResult[NearbyOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `NearbyOk` | `zillapi/models/nearby_ok.py` |

### client.properties.get_property_open_houses

- **Route**: `GET /v1/properties/{zpid}/open-houses`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_open_houses(zpid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zpid`
- **Params**: `zpid` — path
- **Returns (parsed)**: `OpenHousesOk`
- **Returns (raw)**: `ApiResult[OpenHousesOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `OpenHousesOk` | `zillapi/models/open_houses_ok.py` |

### client.properties.get_property_photos

- **Route**: `GET /v1/properties/{zpid}/photos`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_photos(zpid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zpid`
- **Params**: `zpid` — path
- **Returns (parsed)**: `PhotosOk`
- **Returns (raw)**: `ApiResult[PhotosOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PhotosOk` | `zillapi/models/photos_ok.py` |

### client.properties.get_property_price_history

- **Route**: `GET /v1/properties/{zpid}/price-history`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_price_history(zpid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zpid`
- **Params**: `zpid` — path
- **Returns (parsed)**: `PriceHistoryOk`
- **Returns (raw)**: `ApiResult[PriceHistoryOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PriceHistoryOk` | `zillapi/models/price_history_ok.py` |

### client.properties.get_property_schools

- **Route**: `GET /v1/properties/{zpid}/schools`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_schools(zpid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zpid`
- **Params**: `zpid` — path
- **Returns (parsed)**: `SchoolsOk`
- **Returns (raw)**: `ApiResult[SchoolsOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SchoolsOk` | `zillapi/models/schools_ok.py` |

### client.properties.get_property_tax_history

- **Route**: `GET /v1/properties/{zpid}/tax-history`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_tax_history(zpid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zpid`
- **Params**: `zpid` — path
- **Returns (parsed)**: `TaxHistoryOk`
- **Returns (raw)**: `ApiResult[TaxHistoryOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `TaxHistoryOk` | `zillapi/models/tax_history_ok.py` |

### client.properties.get_property_zestimate

- **Route**: `GET /v1/properties/{zpid}/zestimate`
- **Auth**: `bearer_auth`
- **Signature**: `def get_property_zestimate(zpid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zpid`
- **Params**: `zpid` — path
- **Returns (parsed)**: `ZestimateOk`
- **Returns (raw)**: `ApiResult[ZestimateOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ZestimateOk` | `zillapi/models/zestimate_ok.py` |

