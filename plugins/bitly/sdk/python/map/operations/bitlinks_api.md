<!-- Generated file — do not edit; regenerated with the SDK. -->

# BitlinksApi — operations

Accessor: `client.bitlinks_api` · Source: `bitly/apis/bitlinks_api.py` · 21 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bitlinks_api.create_bitlink

- **Route**: `POST /shorten`
- **Auth**: `bearer_auth`
- **Signature**: `def create_bitlink(body: Shorten | ShortenDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ShortenBitlinkBody`
- **Returns (raw)**: `ApiResult[ShortenBitlinkBody, CreateBitlinkErrorBody]`
- **Error**: `CreateBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 417, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Shorten` | `bitly/models/shorten.py` |
| `ShortenDict` | `bitly/models/shorten.py` |
| `ShortenBitlinkBody` | `bitly/models/shorten_bitlink_body.py` |
| `CreateBitlinkErrorBody` | `bitly/errors/create_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.create_full_bitlink

- **Route**: `POST /bitlinks`
- **Auth**: `bearer_auth`
- **Signature**: `def create_full_bitlink(body: FullShorten | FullShortenDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BitlinkBody`
- **Returns (raw)**: `ApiResult[BitlinkBody, CreateFullBitlinkErrorBody]`
- **Error**: `CreateFullBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 417, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FullShorten` | `bitly/models/full_shorten.py` |
| `FullShortenDict` | `bitly/models/full_shorten.py` |
| `BitlinkBody` | `bitly/models/bitlink_body.py` |
| `CreateFullBitlinkErrorBody` | `bitly/errors/create_full_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.delete_bitlink

- **Route**: `DELETE /bitlinks/{bitlink}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_bitlink(bitlink: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path
- **Returns (parsed)**: `LinkDeletionResponse`
- **Returns (raw)**: `ApiResult[LinkDeletionResponse, DeleteBitlinkErrorBody]`
- **Error**: `DeleteBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LinkDeletionResponse` | `bitly/models/link_deletion_response.py` |
| `DeleteBitlinkErrorBody` | `bitly/errors/delete_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.expand_bitlink

- **Route**: `POST /expand`
- **Auth**: `bearer_auth`
- **Signature**: `def expand_bitlink(body: ExpandBitlink | ExpandBitlinkDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ExpandedBitlink`
- **Returns (raw)**: `ApiResult[ExpandedBitlink, ExpandBitlinkErrorBody]`
- **Error**: `ExpandBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404, 410, 422, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExpandBitlink` | `bitly/models/expand_bitlink.py` |
| `ExpandBitlinkDict` | `bitly/models/expand_bitlink.py` |
| `ExpandedBitlink` | `bitly/models/expanded_bitlink.py` |
| `ExpandBitlinkErrorBody` | `bitly/errors/expand_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |

### client.bitlinks_api.get_bitlink

- **Route**: `GET /bitlinks/{bitlink}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_bitlink(bitlink: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path
- **Returns (parsed)**: `BitlinkBody`
- **Returns (raw)**: `ApiResult[BitlinkBody, GetBitlinkErrorBody]`
- **Error**: `GetBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 410, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BitlinkBody` | `bitly/models/bitlink_body.py` |
| `GetBitlinkErrorBody` | `bitly/errors/get_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.get_bitlinks_by_group

- **Route**: `GET /groups/{group_guid}/bitlinks`
- **Auth**: `bearer_auth`
- **Signature**: `def get_bitlinks_by_group(group_guid: str, *, size: int | None = 50, search_after: str | None = None, query: str | None = None, hostname_path_query: str | None = None, created_before: int | None = None, created_after: int | None = None, archived: ArchivedOrStr | None = Archived.OFF, deeplinks: DeeplinksOrStr | None = Deeplinks.BOTH, domain_deeplinks: DomainDeeplinksOrStr | None = DomainDeeplinks.BOTH, campaign_guid: str | None = None, channel_guid: str | None = None, custom_bitlink: CustomBitlinkOrStr | None = CustomBitlink.BOTH, has_qr_codes: HasQrCodesOrStr | None = HasQrCodes.BOTH, is_expired: IsExpiredOrStr | None = IsExpired.BOTH, has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH, has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH, tags: list[str] | None = None, launchpad_ids: list[str] | None = None, encoding_login: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `size` — query · `search_after` — query · `query` — query · `hostname_path_query` — query · `created_before` — query · `created_after` — query · `archived` — query · `deeplinks` — query · `domain_deeplinks` — query · `campaign_guid` — query · `channel_guid` — query · `custom_bitlink` — query · `has_qr_codes` — query · `is_expired` — query · `has_expiration` — query · `has_dynamic_routing` — query · `tags` — query · `launchpad_ids` — query · `encoding_login` — query
- **Returns (parsed)**: `Bitlinks`
- **Returns (raw)**: `ApiResult[Bitlinks, GetBitlinksByGroupErrorBody]`
- **Error**: `GetBitlinksByGroupErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ArchivedOrStr` | `bitly/models/enums/archived.py` |
| `DeeplinksOrStr` | `bitly/models/enums/deeplinks.py` |
| `DomainDeeplinksOrStr` | `bitly/models/enums/domain_deeplinks.py` |
| `CustomBitlinkOrStr` | `bitly/models/enums/custom_bitlink.py` |
| `HasQrCodesOrStr` | `bitly/models/enums/has_qr_codes.py` |
| `IsExpiredOrStr` | `bitly/models/enums/is_expired.py` |
| `HasExpirationOrStr` | `bitly/models/enums/has_expiration.py` |
| `HasDynamicRoutingOrStr` | `bitly/models/enums/has_dynamic_routing.py` |
| `Bitlinks` | `bitly/models/bitlinks.py` |
| `GetBitlinksByGroupErrorBody` | `bitly/errors/get_bitlinks_by_group_error.py` |
| `Error` | `bitly/models/error.py` |

### client.bitlinks_api.get_clicks_for_bitlink

- **Route**: `GET /bitlinks/{bitlink}/clicks`
- **Auth**: `bearer_auth`
- **Signature**: `def get_clicks_for_bitlink(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `Clicks`
- **Returns (raw)**: `ApiResult[Clicks, GetClicksForBitlinkErrorBody]`
- **Error**: `GetClicksForBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `Clicks` | `bitly/models/clicks.py` |
| `GetClicksForBitlinkErrorBody` | `bitly/errors/get_clicks_for_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.get_clicks_summary_for_bitlink

- **Route**: `GET /bitlinks/{bitlink}/clicks/summary`
- **Auth**: `bearer_auth`
- **Signature**: `def get_clicks_summary_for_bitlink(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `ClicksSummary`
- **Returns (raw)**: `ApiResult[ClicksSummary, GetClicksSummaryForBitlinkErrorBody]`
- **Error**: `GetClicksSummaryForBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClicksSummary` | `bitly/models/clicks_summary.py` |
| `GetClicksSummaryForBitlinkErrorBody` | `bitly/errors/get_clicks_summary_for_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.get_engagements

- **Route**: `GET /bitlinks/{bitlink}/engagements`
- **Auth**: `bearer_auth`
- **Signature**: `def get_engagements(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `TotalEngagements`
- **Returns (raw)**: `ApiResult[TotalEngagements, GetEngagementsErrorBody]`
- **Error**: `GetEngagementsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `TotalEngagements` | `bitly/models/total_engagements.py` |
| `GetEngagementsErrorBody` | `bitly/errors/get_engagements_error.py` |
| `Error` | `bitly/models/error.py` |

### client.bitlinks_api.get_engagements_summary

- **Route**: `GET /bitlinks/{bitlink}/engagements/summary`
- **Auth**: `bearer_auth`
- **Signature**: `def get_engagements_summary(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `TotalEngagementsSummary`
- **Returns (raw)**: `ApiResult[TotalEngagementsSummary, GetEngagementsSummaryErrorBody]`
- **Error**: `GetEngagementsSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `TotalEngagementsSummary` | `bitly/models/total_engagements_summary.py` |
| `GetEngagementsSummaryErrorBody` | `bitly/errors/get_engagements_summary_error.py` |
| `Error` | `bitly/models/error.py` |

### client.bitlinks_api.get_metrics_for_bitlink_by_cities

- **Route**: `GET /bitlinks/{bitlink}/cities`
- **Auth**: `bearer_auth`
- **Signature**: `def get_metrics_for_bitlink_by_cities(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `CityMetrics`
- **Returns (raw)**: `ApiResult[CityMetrics, GetMetricsForBitlinkByCitiesErrorBody]`
- **Error**: `GetMetricsForBitlinkByCitiesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 410, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `CityMetrics` | `bitly/models/city_metrics.py` |
| `GetMetricsForBitlinkByCitiesErrorBody` | `bitly/errors/get_metrics_for_bitlink_by_cities_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.get_metrics_for_bitlink_by_countries

- **Route**: `GET /bitlinks/{bitlink}/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def get_metrics_for_bitlink_by_countries(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetrics`
- **Returns (raw)**: `ApiResult[ClickMetrics, GetMetricsForBitlinkByCountriesErrorBody]`
- **Error**: `GetMetricsForBitlinkByCountriesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetrics` | `bitly/models/click_metrics.py` |
| `GetMetricsForBitlinkByCountriesErrorBody` | `bitly/errors/get_metrics_for_bitlink_by_countries_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.get_metrics_for_bitlink_by_devices

- **Route**: `GET /bitlinks/{bitlink}/devices`
- **Auth**: `bearer_auth`
- **Signature**: `def get_metrics_for_bitlink_by_devices(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `DeviceMetrics`
- **Returns (raw)**: `ApiResult[DeviceMetrics, GetMetricsForBitlinkByDevicesErrorBody]`
- **Error**: `GetMetricsForBitlinkByDevicesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 410, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `DeviceMetrics` | `bitly/models/device_metrics.py` |
| `GetMetricsForBitlinkByDevicesErrorBody` | `bitly/errors/get_metrics_for_bitlink_by_devices_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.get_metrics_for_bitlink_by_referrer_name

- **Route**: `GET /bitlinks/{bitlink}/referrer_name`
- **Auth**: `bearer_auth`
- **Signature**: `def get_metrics_for_bitlink_by_referrer_name(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetrics`
- **Returns (raw)**: `ApiResult[ClickMetrics, GetMetricsForBitlinkByReferrerNameErrorBody]`
- **Error**: `GetMetricsForBitlinkByReferrerNameErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetrics` | `bitly/models/click_metrics.py` |
| `GetMetricsForBitlinkByReferrerNameErrorBody` | `bitly/errors/get_metrics_for_bitlink_by_referrer_name_error.py` |
| `Error` | `bitly/models/error.py` |

### client.bitlinks_api.get_metrics_for_bitlink_by_referrers

- **Route**: `GET /bitlinks/{bitlink}/referrers`
- **Auth**: `bearer_auth`
- **Signature**: `def get_metrics_for_bitlink_by_referrers(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetrics`
- **Returns (raw)**: `ApiResult[ClickMetrics, GetMetricsForBitlinkByReferrersErrorBody]`
- **Error**: `GetMetricsForBitlinkByReferrersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetrics` | `bitly/models/click_metrics.py` |
| `GetMetricsForBitlinkByReferrersErrorBody` | `bitly/errors/get_metrics_for_bitlink_by_referrers_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.get_metrics_for_bitlink_by_referrers_by_domains

- **Route**: `GET /bitlinks/{bitlink}/referrers_by_domains`
- **Auth**: `bearer_auth`
- **Signature**: `def get_metrics_for_bitlink_by_referrers_by_domains(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ReferrersByDomains`
- **Returns (raw)**: `ApiResult[ReferrersByDomains, GetMetricsForBitlinkByReferrersByDomainsErrorBody]`
- **Error**: `GetMetricsForBitlinkByReferrersByDomainsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ReferrersByDomains` | `bitly/models/referrers_by_domains.py` |
| `GetMetricsForBitlinkByReferrersByDomainsErrorBody` | `bitly/errors/get_metrics_for_bitlink_by_referrers_by_domains_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.get_metrics_for_bitlink_by_referring_domains

- **Route**: `GET /bitlinks/{bitlink}/referring_domains`
- **Auth**: `bearer_auth`
- **Signature**: `def get_metrics_for_bitlink_by_referring_domains(bitlink: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`
- **Params**: `bitlink` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ClickMetrics`
- **Returns (raw)**: `ApiResult[ClickMetrics, GetMetricsForBitlinkByReferringDomainsErrorBody]`
- **Error**: `GetMetricsForBitlinkByReferringDomainsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ClickMetrics` | `bitly/models/click_metrics.py` |
| `GetMetricsForBitlinkByReferringDomainsErrorBody` | `bitly/errors/get_metrics_for_bitlink_by_referring_domains_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.get_sorted_bitlinks

- **Route**: `GET /groups/{group_guid}/bitlinks/{sort}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_sorted_bitlinks(group_guid: str, sort: SortOrStr, *, unit: TimeUnitOrStr | None = TimeUnit.DAY, units: int | None = -1, unit_reference: str | None = None, size: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`, `sort`
- **Params**: `group_guid` — path · `sort` — path · `unit` — query · `units` — query · `unit_reference` — query · `size` — query
- **Returns (parsed)**: `SortedLinks`
- **Returns (raw)**: `ApiResult[SortedLinks, GetSortedBitlinksErrorBody]`
- **Error**: `GetSortedBitlinksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrStr` | `bitly/models/enums/sort.py` |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `SortedLinks` | `bitly/models/sorted_links.py` |
| `GetSortedBitlinksErrorBody` | `bitly/errors/get_sorted_bitlinks_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.get_top_links_and_qr_codes_by_engagements

- **Route**: `GET /groups/{group_guid}/engagements/sorted/top`
- **Auth**: `bearer_auth`
- **Signature**: `def get_top_links_and_qr_codes_by_engagements(group_guid: str, *, unit: TimeUnitOrStr | None = TimeUnit.DAY, units: int | None = -1, unit_reference: str | None = None, size: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `unit` — query · `units` — query · `unit_reference` — query · `size` — query
- **Returns (parsed)**: `TopLinksAndQrCodes`
- **Returns (raw)**: `ApiResult[TopLinksAndQrCodes, GetTopLinksAndQrCodesByEngagementsErrorBody]`
- **Error**: `GetTopLinksAndQrCodesByEngagementsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `TopLinksAndQrCodes` | `bitly/models/top_links_and_qr_codes.py` |
| `GetTopLinksAndQrCodesByEngagementsErrorBody` | `bitly/errors/get_top_links_and_qr_codes_by_engagements_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.update_bitlink

- **Route**: `PATCH /bitlinks/{bitlink}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_bitlink(bitlink: str, body: BitlinkUpdateBody | BitlinkUpdateBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bitlink`, `body`
- **Params**: `bitlink` — path · `body` — JSON body
- **Returns (parsed)**: `BitlinkBody`
- **Returns (raw)**: `ApiResult[BitlinkBody, UpdateBitlinkErrorBody]`
- **Error**: `UpdateBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 409, 410, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BitlinkUpdateBody` | `bitly/models/bitlink_update_body.py` |
| `BitlinkUpdateBodyDict` | `bitly/models/bitlink_update_body.py` |
| `BitlinkBody` | `bitly/models/bitlink_body.py` |
| `UpdateBitlinkErrorBody` | `bitly/errors/update_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.bitlinks_api.update_bitlinks_by_group

- **Route**: `PATCH /groups/{group_guid}/bitlinks`
- **Auth**: `bearer_auth`
- **Signature**: `def update_bitlinks_by_group(group_guid: str, body: BulkUpdateRequest | BulkUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`, `body`
- **Params**: `group_guid` — path · `body` — JSON body
- **Returns (parsed)**: `BulkUpdate`
- **Returns (raw)**: `ApiResult[BulkUpdate, UpdateBitlinksByGroupErrorBody]`
- **Error**: `UpdateBitlinksByGroupErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 422, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkUpdateRequest` | `bitly/models/bulk_update_request.py` |
| `BulkUpdateRequestDict` | `bitly/models/bulk_update_request.py` |
| `BulkUpdate` | `bitly/models/bulk_update.py` |
| `UpdateBitlinksByGroupErrorBody` | `bitly/errors/update_bitlinks_by_group_error.py` |
| `Error` | `bitly/models/error.py` |

