<!-- Generated file — do not edit; regenerated with the SDK. -->

# Odds — operations

Accessor: `client.odds` · Source: `odds_relay/apis/odds.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.odds.get_matched_board

- **Route**: `GET /v2/odds/{type}`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def get_matched_board(type_: Type1OrStr, accept_encoding: str, *, region: str | None = None, format_: FormatOrStr | None = Format.ENVELOPE, odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL, date_format: DateFormatOrStr | None = DateFormat.ISO, quote: str | None = None, sports: str | None = None, bookmakers: str | None = None, exchanges: str | None = None, markets: str | None = None, commence_time_from: str | None = None, commence_time_to: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `type_`, `accept_encoding`
- **Params**: `type_` — path `type` · `region` — query · `format_` — query `format` · `odds_format` — query `oddsFormat` · `date_format` — query `dateFormat` · `quote` — query · `sports` — query · `bookmakers` — query · `exchanges` — query · `markets` — query · `commence_time_from` — query `commenceTimeFrom` · `commence_time_to` — query `commenceTimeTo` · `accept_encoding` — header `Accept-Encoding`
- **Returns (parsed)**: `V2OddsResponse`
- **Returns (raw)**: `ApiResult[V2OddsResponse, GetMatchedBoardErrorBody]`
- **Error**: `GetMatchedBoardErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayDiscoveryApi` [400] · `Error401OddsRelayDiscoveryApi` [401] · `Error402` [402] · `Error403OddsRelayDiscoveryApi` [403] · `Error404` [404] · `Error429OddsRelayDiscoveryApi` [429] · `Error500OddsRelayDiscoveryApi` [500] · `Error503OddsRelayDiscoveryApi` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `Type1OrStr` | `odds_relay/models/enums/type1.py` |
| `FormatOrStr` | `odds_relay/models/enums/format.py` |
| `OddsFormatOrStr` | `odds_relay/models/enums/odds_format.py` |
| `DateFormatOrStr` | `odds_relay/models/enums/date_format.py` |
| `V2OddsResponse` | `odds_relay/models/unions/v2_odds_response.py` |
| `GetMatchedBoardErrorBody` | `odds_relay/errors/get_matched_board_error.py` |
| `Error400OddsRelayDiscoveryApi` | `odds_relay/models/error400_odds_relay_discovery_api.py` |
| `Error401OddsRelayDiscoveryApi` | `odds_relay/models/error401_odds_relay_discovery_api.py` |
| `Error402` | `odds_relay/models/error402.py` |
| `Error403OddsRelayDiscoveryApi` | `odds_relay/models/error403_odds_relay_discovery_api.py` |
| `Error404` | `odds_relay/models/error404.py` |
| `Error429OddsRelayDiscoveryApi` | `odds_relay/models/error429_odds_relay_discovery_api.py` |
| `Error500OddsRelayDiscoveryApi` | `odds_relay/models/error500_odds_relay_discovery_api.py` |
| `Error503OddsRelayDiscoveryApi` | `odds_relay/models/error503_odds_relay_discovery_api.py` |

### client.odds.get_raw_board

- **Route**: `GET /v2/odds/raw`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def get_raw_board(accept_encoding: str, *, region: str | None = None, format_: FormatOrStr | None = Format.ENVELOPE, odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL, date_format: DateFormatOrStr | None = DateFormat.ISO, sports: str | None = None, sport: str | None = None, leagues: str | None = None, bookmakers: str | None = None, require_bookmakers: str | None = None, markets: str | None = None, event_ids: str | None = None, commence_time_from: str | None = None, commence_time_to: str | None = None, updated_since: str | None = None, exchanges_only: ExchangesOnlyOrStr | None = None, include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE, include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE, cursor: str | None = None, limit: int | None = None, quote: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `accept_encoding`
- **Params**: `region` — query · `format_` — query `format` · `odds_format` — query `oddsFormat` · `date_format` — query `dateFormat` · `sports` — query · `sport` — query · `leagues` — query · `bookmakers` — query · `require_bookmakers` — query `requireBookmakers` · `markets` — query · `event_ids` — query `eventIds` · `commence_time_from` — query `commenceTimeFrom` · `commence_time_to` — query `commenceTimeTo` · `updated_since` — query `updatedSince` · `exchanges_only` — query `exchangesOnly` · `include_links` — query `includeLinks` · `include_liquidity` — query `includeLiquidity` · `cursor` — query · `limit` — query · `quote` — query · `accept_encoding` — header `Accept-Encoding`
- **Returns (parsed)**: `V2OddsRawResponse`
- **Returns (raw)**: `ApiResult[V2OddsRawResponse, GetRawBoardErrorBody]`
- **Error**: `GetRawBoardErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayDiscoveryApi` [400] · `Error401OddsRelayDiscoveryApi` [401] · `Error402` [402] · `Error403OddsRelayDiscoveryApi` [403] · `Error404` [404] · `Error429OddsRelayDiscoveryApi` [429] · `Error500OddsRelayDiscoveryApi` [500] · `Error503OddsRelayDiscoveryApi` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `odds_relay/models/enums/format.py` |
| `OddsFormatOrStr` | `odds_relay/models/enums/odds_format.py` |
| `DateFormatOrStr` | `odds_relay/models/enums/date_format.py` |
| `ExchangesOnlyOrStr` | `odds_relay/models/enums/exchanges_only.py` |
| `IncludeLinksOrStr` | `odds_relay/models/enums/include_links.py` |
| `IncludeLiquidityOrStr` | `odds_relay/models/enums/include_liquidity.py` |
| `V2OddsRawResponse` | `odds_relay/models/unions/v2_odds_raw_response.py` |
| `GetRawBoardErrorBody` | `odds_relay/errors/get_raw_board_error.py` |
| `Error400OddsRelayDiscoveryApi` | `odds_relay/models/error400_odds_relay_discovery_api.py` |
| `Error401OddsRelayDiscoveryApi` | `odds_relay/models/error401_odds_relay_discovery_api.py` |
| `Error402` | `odds_relay/models/error402.py` |
| `Error403OddsRelayDiscoveryApi` | `odds_relay/models/error403_odds_relay_discovery_api.py` |
| `Error404` | `odds_relay/models/error404.py` |
| `Error429OddsRelayDiscoveryApi` | `odds_relay/models/error429_odds_relay_discovery_api.py` |
| `Error500OddsRelayDiscoveryApi` | `odds_relay/models/error500_odds_relay_discovery_api.py` |
| `Error503OddsRelayDiscoveryApi` | `odds_relay/models/error503_odds_relay_discovery_api.py` |

### client.odds.get_raw_event

- **Route**: `GET /v2/odds/event/{id}`
- **Auth**: `bearer_auth` OR `api_key_header`
- **Signature**: `def get_raw_event(id_: str, *, region: str | None = None, odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL, date_format: DateFormatOrStr | None = DateFormat.ISO, include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE, include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE, quote: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `region` — query · `odds_format` — query `oddsFormat` · `date_format` — query `dateFormat` · `include_links` — query `includeLinks` · `include_liquidity` — query `includeLiquidity` · `quote` — query
- **Returns (parsed)**: `V2OddsEventResponse`
- **Returns (raw)**: `ApiResult[V2OddsEventResponse, GetRawEventErrorBody]`
- **Error**: `GetRawEventErrorBody` — **Case A (typed)**
- **Error arms**: `Error400OddsRelayDiscoveryApi` [400] · `Error401OddsRelayDiscoveryApi` [401] · `Error402` [402] · `Error403OddsRelayDiscoveryApi` [403] · `Error404` [404] · `Error429OddsRelayDiscoveryApi` [429] · `Error500OddsRelayDiscoveryApi` [500] · `Error503OddsRelayDiscoveryApi` [503] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `OddsFormatOrStr` | `odds_relay/models/enums/odds_format.py` |
| `DateFormatOrStr` | `odds_relay/models/enums/date_format.py` |
| `IncludeLinksOrStr` | `odds_relay/models/enums/include_links.py` |
| `IncludeLiquidityOrStr` | `odds_relay/models/enums/include_liquidity.py` |
| `V2OddsEventResponse` | `odds_relay/models/unions/v2_odds_event_response.py` |
| `GetRawEventErrorBody` | `odds_relay/errors/get_raw_event_error.py` |
| `Error400OddsRelayDiscoveryApi` | `odds_relay/models/error400_odds_relay_discovery_api.py` |
| `Error401OddsRelayDiscoveryApi` | `odds_relay/models/error401_odds_relay_discovery_api.py` |
| `Error402` | `odds_relay/models/error402.py` |
| `Error403OddsRelayDiscoveryApi` | `odds_relay/models/error403_odds_relay_discovery_api.py` |
| `Error404` | `odds_relay/models/error404.py` |
| `Error429OddsRelayDiscoveryApi` | `odds_relay/models/error429_odds_relay_discovery_api.py` |
| `Error500OddsRelayDiscoveryApi` | `odds_relay/models/error500_odds_relay_discovery_api.py` |
| `Error503OddsRelayDiscoveryApi` | `odds_relay/models/error503_odds_relay_discovery_api.py` |

