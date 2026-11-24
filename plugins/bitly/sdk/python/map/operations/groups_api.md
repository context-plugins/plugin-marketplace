<!-- Generated file — do not edit; regenerated with the SDK. -->

# GroupsApi — operations

Accessor: `client.groups_api` · Source: `bitly/apis/groups_api.py` · 28 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.groups_api.get_group_metrics_by_referrer

- **Route**: `GET /groups/{group_guid}/referrers`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_metrics_by_referrer(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetricsBitlyCustomBitlinksApi`
- **Returns (raw)**: `ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByReferrerErrorBody]`
- **Error**: `GetGroupMetricsByReferrerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetricsBitlyCustomBitlinksApi` | `bitly/models/click_metrics_bitly_custom_bitlinks_api.py` |
| `GetGroupMetricsByReferrerErrorBody` | `bitly/errors/get_group_metrics_by_referrer_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.get_group_metrics_by_referring_networks

- **Route**: `GET /groups/{group_guid}/referring_networks`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_metrics_by_referring_networks(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetricsBitlyCustomBitlinksApi`
- **Returns (raw)**: `ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByReferringNetworksErrorBody]`
- **Error**: `GetGroupMetricsByReferringNetworksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetricsBitlyCustomBitlinksApi` | `bitly/models/click_metrics_bitly_custom_bitlinks_api.py` |
| `GetGroupMetricsByReferringNetworksErrorBody` | `bitly/errors/get_group_metrics_by_referring_networks_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group

- **Route**: `GET /groups/{group_guid}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group(group_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path
- **Returns (parsed)**: `Group`
- **Returns (raw)**: `ApiResult[Group, GetGroupErrorBody]`
- **Error**: `GetGroupErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Group` | `bitly/models/group.py` |
| `GetGroupErrorBody` | `bitly/errors/get_group_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.get_group_clicks

- **Route**: `GET /groups/{group_guid}/clicks`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_clicks(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `GroupClicks`
- **Returns (raw)**: `ApiResult[GroupClicks, GetGroupClicksErrorBody]`
- **Error**: `GetGroupClicksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `GroupClicks` | `bitly/models/group_clicks.py` |
| `GetGroupClicksErrorBody` | `bitly/errors/get_group_clicks_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.get_group_code_scans_by_city

- **Route**: `GET /groups/{group_guid}/codes/scans/cities`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_code_scans_by_city(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `CityMetricsBitlyGroupsApi`
- **Returns (raw)**: `ApiResult[CityMetricsBitlyGroupsApi, GetGroupCodeScansByCityErrorBody]`
- **Error**: `GetGroupCodeScansByCityErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `CityMetricsBitlyGroupsApi` | `bitly/models/city_metrics_bitly_groups_api.py` |
| `GetGroupCodeScansByCityErrorBody` | `bitly/errors/get_group_code_scans_by_city_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_code_scans_by_country

- **Route**: `GET /groups/{group_guid}/codes/scans/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_code_scans_by_country(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetricsBitlyCustomBitlinksApi`
- **Returns (raw)**: `ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupCodeScansByCountryErrorBody]`
- **Error**: `GetGroupCodeScansByCountryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetricsBitlyCustomBitlinksApi` | `bitly/models/click_metrics_bitly_custom_bitlinks_api.py` |
| `GetGroupCodeScansByCountryErrorBody` | `bitly/errors/get_group_code_scans_by_country_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_code_scans_over_time

- **Route**: `GET /groups/{group_guid}/codes/scans/over_time`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_code_scans_over_time(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `GroupClicks`
- **Returns (raw)**: `ApiResult[GroupClicks, GetGroupCodeScansOverTimeErrorBody]`
- **Error**: `GetGroupCodeScansOverTimeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `GroupClicks` | `bitly/models/group_clicks.py` |
| `GetGroupCodeScansOverTimeErrorBody` | `bitly/errors/get_group_code_scans_over_time_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_feature_usage

- **Route**: `GET /groups/{group_guid}/feature_usage`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_feature_usage(group_guid: str, *, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `name` — query
- **Returns (parsed)**: `GroupFeatureUsage`
- **Returns (raw)**: `ApiResult[GroupFeatureUsage, GetGroupFeatureUsageErrorBody]`
- **Error**: `GetGroupFeatureUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GroupFeatureUsage` | `bitly/models/group_feature_usage.py` |
| `GetGroupFeatureUsageErrorBody` | `bitly/errors/get_group_feature_usage_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.get_group_historical_usage

- **Route**: `GET /groups/{group_guid}/historical_usage`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_historical_usage(group_guid: str, *, name: list[str] | None = None, start_date: str | None = None, end_date: str | None = None, unit: TimeUnitDwmOrStr | None = TimeUnitDwm.MONTH, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `name` — query · `start_date` — query · `end_date` — query · `unit` — query
- **Returns (parsed)**: `GroupHistoricalUsage`
- **Returns (raw)**: `ApiResult[GroupHistoricalUsage, GetGroupHistoricalUsageErrorBody]`
- **Error**: `GetGroupHistoricalUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitDwmOrStr` | `bitly/models/enums/time_unit_dwm.py` |
| `GroupHistoricalUsage` | `bitly/models/group_historical_usage.py` |
| `GetGroupHistoricalUsageErrorBody` | `bitly/errors/get_group_historical_usage_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.get_group_link_clicks_by_city

- **Route**: `GET /groups/{group_guid}/links/clicks/cities`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_link_clicks_by_city(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `CityMetricsBitlyGroupsApi`
- **Returns (raw)**: `ApiResult[CityMetricsBitlyGroupsApi, GetGroupLinkClicksByCityErrorBody]`
- **Error**: `GetGroupLinkClicksByCityErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `CityMetricsBitlyGroupsApi` | `bitly/models/city_metrics_bitly_groups_api.py` |
| `GetGroupLinkClicksByCityErrorBody` | `bitly/errors/get_group_link_clicks_by_city_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_link_clicks_by_country

- **Route**: `GET /groups/{group_guid}/links/clicks/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_link_clicks_by_country(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetricsBitlyCustomBitlinksApi`
- **Returns (raw)**: `ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupLinkClicksByCountryErrorBody]`
- **Error**: `GetGroupLinkClicksByCountryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetricsBitlyCustomBitlinksApi` | `bitly/models/click_metrics_bitly_custom_bitlinks_api.py` |
| `GetGroupLinkClicksByCountryErrorBody` | `bitly/errors/get_group_link_clicks_by_country_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_link_clicks_by_device

- **Route**: `GET /groups/{group_guid}/links/clicks/devices`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_link_clicks_by_device(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `GroupsLinksClicksDevicesResponse`
- **Returns (raw)**: `ApiResult[GroupsLinksClicksDevicesResponse, GetGroupLinkClicksByDeviceErrorBody]`
- **Error**: `GetGroupLinkClicksByDeviceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `GroupsLinksClicksDevicesResponse` | `bitly/models/groups_links_clicks_devices_response.py` |
| `GetGroupLinkClicksByDeviceErrorBody` | `bitly/errors/get_group_link_clicks_by_device_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_link_clicks_by_referrer

- **Route**: `GET /groups/{group_guid}/links/clicks/referrers`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_link_clicks_by_referrer(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetricsBitlyCustomBitlinksApi`
- **Returns (raw)**: `ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupLinkClicksByReferrerErrorBody]`
- **Error**: `GetGroupLinkClicksByReferrerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetricsBitlyCustomBitlinksApi` | `bitly/models/click_metrics_bitly_custom_bitlinks_api.py` |
| `GetGroupLinkClicksByReferrerErrorBody` | `bitly/errors/get_group_link_clicks_by_referrer_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_link_clicks_over_time

- **Route**: `GET /groups/{group_guid}/links/clicks/over_time`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_link_clicks_over_time(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `GroupClicks`
- **Returns (raw)**: `ApiResult[GroupClicks, GetGroupLinkClicksOverTimeErrorBody]`
- **Error**: `GetGroupLinkClicksOverTimeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `GroupClicks` | `bitly/models/group_clicks.py` |
| `GetGroupLinkClicksOverTimeErrorBody` | `bitly/errors/get_group_link_clicks_over_time_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_metrics_by_cities

- **Route**: `GET /groups/{group_guid}/cities`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_metrics_by_cities(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `CityMetricsBitlyGroupsApi`
- **Returns (raw)**: `ApiResult[CityMetricsBitlyGroupsApi, GetGroupMetricsByCitiesErrorBody]`
- **Error**: `GetGroupMetricsByCitiesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [402, 403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `CityMetricsBitlyGroupsApi` | `bitly/models/city_metrics_bitly_groups_api.py` |
| `GetGroupMetricsByCitiesErrorBody` | `bitly/errors/get_group_metrics_by_cities_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.get_group_metrics_by_countries

- **Route**: `GET /groups/{group_guid}/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_metrics_by_countries(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetricsBitlyCustomBitlinksApi`
- **Returns (raw)**: `ApiResult[ClickMetricsBitlyCustomBitlinksApi, GetGroupMetricsByCountriesErrorBody]`
- **Error**: `GetGroupMetricsByCountriesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetricsBitlyCustomBitlinksApi` | `bitly/models/click_metrics_bitly_custom_bitlinks_api.py` |
| `GetGroupMetricsByCountriesErrorBody` | `bitly/errors/get_group_metrics_by_countries_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.get_group_metrics_by_devices

- **Route**: `GET /groups/{group_guid}/devices`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_metrics_by_devices(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `DeviceMetricsBitlyGroupsApi`
- **Returns (raw)**: `ApiResult[DeviceMetricsBitlyGroupsApi, GetGroupMetricsByDevicesErrorBody]`
- **Error**: `GetGroupMetricsByDevicesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [402, 403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `DeviceMetricsBitlyGroupsApi` | `bitly/models/device_metrics_bitly_groups_api.py` |
| `GetGroupMetricsByDevicesErrorBody` | `bitly/errors/get_group_metrics_by_devices_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.get_group_metrics_over_time

- **Route**: `GET /groups/{group_guid}/engagements/over_time`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_metrics_over_time(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `GroupClicks`
- **Returns (raw)**: `ApiResult[GroupClicks, GetGroupMetricsOverTimeErrorBody]`
- **Error**: `GetGroupMetricsOverTimeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `GroupClicks` | `bitly/models/group_clicks.py` |
| `GetGroupMetricsOverTimeErrorBody` | `bitly/errors/get_group_metrics_over_time_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_preferences

- **Route**: `GET /groups/{group_guid}/preferences`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_preferences(group_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path
- **Returns (parsed)**: `GroupPreferences`
- **Returns (raw)**: `ApiResult[GroupPreferences, GetGroupPreferencesErrorBody]`
- **Error**: `GetGroupPreferencesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GroupPreferences` | `bitly/models/group_preferences.py` |
| `GetGroupPreferencesErrorBody` | `bitly/errors/get_group_preferences_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_shorten_counts

- **Route**: `GET /groups/{group_guid}/shorten_counts`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_shorten_counts(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `Metrics`
- **Returns (raw)**: `ApiResult[Metrics, GetGroupShortenCountsErrorBody]`
- **Error**: `GetGroupShortenCountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `Metrics` | `bitly/models/metrics.py` |
| `GetGroupShortenCountsErrorBody` | `bitly/errors/get_group_shorten_counts_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.get_group_tags

- **Route**: `GET /groups/{group_guid}/tags`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_tags(group_guid: str, *, type_: TypeOrStr | None = Type.BITLINK, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `type_` — query `type`
- **Returns (parsed)**: `Tags`
- **Returns (raw)**: `ApiResult[Tags, GetGroupTagsErrorBody]`
- **Error**: `GetGroupTagsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeOrStr` | `bitly/models/enums/type.py` |
| `Tags` | `bitly/models/tags.py` |
| `GetGroupTagsErrorBody` | `bitly/errors/get_group_tags_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.get_group_top_code_scans

- **Route**: `GET /groups/{group_guid}/codes/scans/top`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_top_code_scans(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, decoupled: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `unit_reference` — query · `decoupled` — query
- **Returns (parsed)**: `GroupsCodesScansTopResponse`
- **Returns (raw)**: `ApiResult[GroupsCodesScansTopResponse, GetGroupTopCodeScansErrorBody]`
- **Error**: `GetGroupTopCodeScansErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `GroupsCodesScansTopResponse` | `bitly/models/unions/groups_codes_scans_top_response.py` |
| `GetGroupTopCodeScansErrorBody` | `bitly/errors/get_group_top_code_scans_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_top_link_clicks

- **Route**: `GET /groups/{group_guid}/links/clicks/top`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_top_link_clicks(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `SortedLinks`
- **Returns (raw)**: `ApiResult[SortedLinks, GetGroupTopLinkClicksErrorBody]`
- **Error**: `GetGroupTopLinkClicksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `SortedLinks` | `bitly/models/sorted_links.py` |
| `GetGroupTopLinkClicksErrorBody` | `bitly/errors/get_group_top_link_clicks_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_group_top_metrics

- **Route**: `GET /groups/{group_guid}/engagements/top`
- **Auth**: `bearer_auth`
- **Signature**: `def get_group_top_metrics(group_guid: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `SortedLinks`
- **Returns (raw)**: `ApiResult[SortedLinks, GetGroupTopMetricsErrorBody]`
- **Error**: `GetGroupTopMetricsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `SortedLinks` | `bitly/models/sorted_links.py` |
| `GetGroupTopMetricsErrorBody` | `bitly/errors/get_group_top_metrics_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.get_groups

- **Route**: `GET /groups`
- **Auth**: `bearer_auth`
- **Signature**: `def get_groups(*, organization_guid: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `organization_guid` — query
- **Returns (parsed)**: `Groups`
- **Returns (raw)**: `ApiResult[Groups, GetGroupsErrorBody]`
- **Error**: `GetGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Groups` | `bitly/models/groups.py` |
| `GetGroupsErrorBody` | `bitly/errors/get_groups_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.groups_api.post_create_group_export

- **Route**: `POST /groups/{group_guid}/exports`
- **Auth**: `bearer_auth`
- **Signature**: `def post_create_group_export(group_guid: str, body: GroupExportRequestBody | GroupExportRequestBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`, `body`
- **Params**: `group_guid` — path · `body` — JSON body
- **Returns (parsed)**: `GroupExportResponse`
- **Returns (raw)**: `ApiResult[GroupExportResponse, PostCreateGroupExportErrorBody]`
- **Error**: `PostCreateGroupExportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 422, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GroupExportRequestBody` | `bitly/models/group_export_request_body.py` |
| `GroupExportRequestBodyDict` | `bitly/models/group_export_request_body.py` |
| `GroupExportResponse` | `bitly/models/group_export_response.py` |
| `PostCreateGroupExportErrorBody` | `bitly/errors/post_create_group_export_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.update_group

- **Route**: `PATCH /groups/{group_guid}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_group(group_guid: str, body: GroupUpdate | GroupUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`, `body`
- **Params**: `group_guid` — path · `body` — JSON body
- **Returns (parsed)**: `Group`
- **Returns (raw)**: `ApiResult[Group, UpdateGroupErrorBody]`
- **Error**: `UpdateGroupErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 422, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GroupUpdate` | `bitly/models/group_update.py` |
| `GroupUpdateDict` | `bitly/models/group_update.py` |
| `Group` | `bitly/models/group.py` |
| `UpdateGroupErrorBody` | `bitly/errors/update_group_error.py` |
| `Error` | `bitly/models/error.py` |

### client.groups_api.update_group_preferences

- **Route**: `PATCH /groups/{group_guid}/preferences`
- **Auth**: `bearer_auth`
- **Signature**: `def update_group_preferences(group_guid: str, body: GroupPreferences | GroupPreferencesDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`, `body`
- **Params**: `group_guid` — path · `body` — JSON body
- **Returns (parsed)**: `GroupPreferences`
- **Returns (raw)**: `ApiResult[GroupPreferences, UpdateGroupPreferencesErrorBody]`
- **Error**: `UpdateGroupPreferencesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GroupPreferences` | `bitly/models/group_preferences.py` |
| `GroupPreferencesDict` | `bitly/models/group_preferences.py` |
| `UpdateGroupPreferencesErrorBody` | `bitly/errors/update_group_preferences_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

