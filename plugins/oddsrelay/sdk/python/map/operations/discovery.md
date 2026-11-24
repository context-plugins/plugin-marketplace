<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.discovery` · Source: `odds_relay/apis/discovery.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.discovery.list_bookmakers

- **Route**: `GET /v2/bookmakers`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def list_bookmakers(*, format_: FormatOrStr | None = Format.ENVELOPE, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `format_` — query `format`
- **Returns (parsed)**: `V2BookmakersResponse1`
- **Returns (raw)**: `ApiResult[V2BookmakersResponse1, ListBookmakersErrorBody]`
- **Error**: `ListBookmakersErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayDiscoveryApi` [400] · `Error401OddsRelayDiscoveryApi` [401] · `Error403OddsRelayDiscoveryApi` [403] · `Error429OddsRelayDiscoveryApi` [429] · `Error500OddsRelayDiscoveryApi` [500] · `Error503OddsRelayDiscoveryApi` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `odds_relay/models/enums/format.py` |
| `V2BookmakersResponse1` | `odds_relay/models/unions/v2_bookmakers_response1.py` |
| `ListBookmakersErrorBody` | `odds_relay/errors/list_bookmakers_error.py` |
| `Error400OddsRelayDiscoveryApi` | `odds_relay/models/error400_odds_relay_discovery_api.py` |
| `Error401OddsRelayDiscoveryApi` | `odds_relay/models/error401_odds_relay_discovery_api.py` |
| `Error403OddsRelayDiscoveryApi` | `odds_relay/models/error403_odds_relay_discovery_api.py` |
| `Error429OddsRelayDiscoveryApi` | `odds_relay/models/error429_odds_relay_discovery_api.py` |
| `Error500OddsRelayDiscoveryApi` | `odds_relay/models/error500_odds_relay_discovery_api.py` |
| `Error503OddsRelayDiscoveryApi` | `odds_relay/models/error503_odds_relay_discovery_api.py` |

### client.discovery.list_events

- **Route**: `GET /v2/events`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def list_events(sport: str, *, region: str | None = None, format_: FormatOrStr | None = Format.ENVELOPE, date_format: DateFormatOrStr | None = DateFormat.ISO, cursor: str | None = None, event_ids: str | None = None, commence_time_from: str | None = None, commence_time_to: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sport`
- **Params**: `sport` — query · `region` — query · `format_` — query `format` · `date_format` — query `dateFormat` · `cursor` — query · `event_ids` — query `eventIds` · `commence_time_from` — query `commenceTimeFrom` · `commence_time_to` — query `commenceTimeTo`
- **Returns (parsed)**: `V2EventsResponse1`
- **Returns (raw)**: `ApiResult[V2EventsResponse1, ListEventsErrorBody]`
- **Error**: `ListEventsErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayDiscoveryApi` [400] · `Error401OddsRelayDiscoveryApi` [401] · `Error403OddsRelayDiscoveryApi` [403] · `Error404` [404] · `Error429OddsRelayDiscoveryApi` [429] · `Error500OddsRelayDiscoveryApi` [500] · `Error503OddsRelayDiscoveryApi` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `odds_relay/models/enums/format.py` |
| `DateFormatOrStr` | `odds_relay/models/enums/date_format.py` |
| `V2EventsResponse1` | `odds_relay/models/unions/v2_events_response1.py` |
| `ListEventsErrorBody` | `odds_relay/errors/list_events_error.py` |
| `Error400OddsRelayDiscoveryApi` | `odds_relay/models/error400_odds_relay_discovery_api.py` |
| `Error401OddsRelayDiscoveryApi` | `odds_relay/models/error401_odds_relay_discovery_api.py` |
| `Error403OddsRelayDiscoveryApi` | `odds_relay/models/error403_odds_relay_discovery_api.py` |
| `Error404` | `odds_relay/models/error404.py` |
| `Error429OddsRelayDiscoveryApi` | `odds_relay/models/error429_odds_relay_discovery_api.py` |
| `Error500OddsRelayDiscoveryApi` | `odds_relay/models/error500_odds_relay_discovery_api.py` |
| `Error503OddsRelayDiscoveryApi` | `odds_relay/models/error503_odds_relay_discovery_api.py` |

### client.discovery.list_regions

- **Route**: `GET /v2/regions`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def list_regions(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Regions`
- **Returns (raw)**: `ApiResult[Regions, ListRegionsErrorBody]`
- **Error**: `ListRegionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayDiscoveryApi` [400] · `Error401OddsRelayDiscoveryApi` [401] · `Error403OddsRelayDiscoveryApi` [403] · `Error429OddsRelayDiscoveryApi` [429] · `Error500OddsRelayDiscoveryApi` [500] · `Error503OddsRelayDiscoveryApi` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `Regions` | `odds_relay/models/regions.py` |
| `ListRegionsErrorBody` | `odds_relay/errors/list_regions_error.py` |
| `Error400OddsRelayDiscoveryApi` | `odds_relay/models/error400_odds_relay_discovery_api.py` |
| `Error401OddsRelayDiscoveryApi` | `odds_relay/models/error401_odds_relay_discovery_api.py` |
| `Error403OddsRelayDiscoveryApi` | `odds_relay/models/error403_odds_relay_discovery_api.py` |
| `Error429OddsRelayDiscoveryApi` | `odds_relay/models/error429_odds_relay_discovery_api.py` |
| `Error500OddsRelayDiscoveryApi` | `odds_relay/models/error500_odds_relay_discovery_api.py` |
| `Error503OddsRelayDiscoveryApi` | `odds_relay/models/error503_odds_relay_discovery_api.py` |

### client.discovery.list_sports

- **Route**: `GET /v2/sports`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def list_sports(*, region: str | None = None, format_: FormatOrStr | None = Format.ENVELOPE, date_format: DateFormatOrStr | None = DateFormat.ISO, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `region` — query · `format_` — query `format` · `date_format` — query `dateFormat` · `cursor` — query
- **Returns (parsed)**: `V2SportsResponse1`
- **Returns (raw)**: `ApiResult[V2SportsResponse1, ListSportsErrorBody]`
- **Error**: `ListSportsErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayDiscoveryApi` [400] · `Error401OddsRelayDiscoveryApi` [401] · `Error403OddsRelayDiscoveryApi` [403] · `Error404` [404] · `Error429OddsRelayDiscoveryApi` [429] · `Error500OddsRelayDiscoveryApi` [500] · `Error503OddsRelayDiscoveryApi` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `odds_relay/models/enums/format.py` |
| `DateFormatOrStr` | `odds_relay/models/enums/date_format.py` |
| `V2SportsResponse1` | `odds_relay/models/unions/v2_sports_response1.py` |
| `ListSportsErrorBody` | `odds_relay/errors/list_sports_error.py` |
| `Error400OddsRelayDiscoveryApi` | `odds_relay/models/error400_odds_relay_discovery_api.py` |
| `Error401OddsRelayDiscoveryApi` | `odds_relay/models/error401_odds_relay_discovery_api.py` |
| `Error403OddsRelayDiscoveryApi` | `odds_relay/models/error403_odds_relay_discovery_api.py` |
| `Error404` | `odds_relay/models/error404.py` |
| `Error429OddsRelayDiscoveryApi` | `odds_relay/models/error429_odds_relay_discovery_api.py` |
| `Error500OddsRelayDiscoveryApi` | `odds_relay/models/error500_odds_relay_discovery_api.py` |
| `Error503OddsRelayDiscoveryApi` | `odds_relay/models/error503_odds_relay_discovery_api.py` |

