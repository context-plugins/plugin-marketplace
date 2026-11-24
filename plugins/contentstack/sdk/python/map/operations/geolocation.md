<!-- Generated file — do not edit; regenerated with the SDK. -->

# Geolocation — operations

Accessor: `client.geolocation` · Source: `contentstack/apis/geolocation.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.geolocation.get_geo_cities

- **Route**: `GET /geolocation/cities`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def get_geo_cities(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`
- **Params**: `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `GeoList`
- **Returns (raw)**: `ApiResult[GeoList, GetGeoCitiesErrorBody]`
- **Error**: `GetGeoCitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GeoList` | `contentstack/models/geo_list.py` |
| `GetGeoCitiesErrorBody` | `contentstack/errors/get_geo_cities_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.geolocation.get_geo_countries

- **Route**: `GET /geolocation/countries`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def get_geo_countries(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`
- **Params**: `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `GeoList`
- **Returns (raw)**: `ApiResult[GeoList, GetGeoCountriesErrorBody]`
- **Error**: `GetGeoCountriesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GeoList` | `contentstack/models/geo_list.py` |
| `GetGeoCountriesErrorBody` | `contentstack/errors/get_geo_countries_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.geolocation.get_geo_regions

- **Route**: `GET /geolocation/regions`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def get_geo_regions(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`
- **Params**: `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `GeoList`
- **Returns (raw)**: `ApiResult[GeoList, GetGeoRegionsErrorBody]`
- **Error**: `GetGeoRegionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GeoList` | `contentstack/models/geo_list.py` |
| `GetGeoRegionsErrorBody` | `contentstack/errors/get_geo_regions_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

