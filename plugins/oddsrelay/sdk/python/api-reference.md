# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [OddsRelayClient](odds_relay/client.py)

## AccountApi

> Source: [AccountApi](odds_relay/apis/account_api.py)

<details>
<summary><code>def get_pricing(*, request_options: RequestOptionsOrDict | None = None) -> PriceTable</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The price table every call is priced from, byte for byte. Free. `ETag` is its SHA-256 (`-gz` on the gzip copy); 304 on a match. Gzip unless refused.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account_api.get_pricing()
    # TODO: Handle 'response' of type PriceTable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPricingErrorBody
```

**Async**

```python
try:
    response = await async_client.account_api.get_pricing()
    # TODO: Handle 'response' of type PriceTable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPricingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PriceTable](odds_relay/models/price_table.py)</code> -- The table.

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[GetPricingErrorBody](odds_relay/errors/get_pricing_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400](odds_relay/models/error400.py)</code> |
| 401 | <code>[Error401](odds_relay/models/error401.py)</code> |
| 403 | <code>[Error403](odds_relay/models/error403.py)</code> |
| 429 | <code>[Error429](odds_relay/models/error429.py)</code> |
| 500 | <code>[Error500](odds_relay/models/error500.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503](odds_relay/models/error503.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_usage(*, request_options: RequestOptionsOrDict | None = None) -> Usage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free, flood-capped, and answered for a SUSPENDED account too (it shows the reason). Plain JSON. `scope` and `scope_version` are your account's scope (both null when it has none); `key.products` is your key's products within it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account_api.get_usage()
    # TODO: Handle 'response' of type Usage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.account_api.get_usage()
    # TODO: Handle 'response' of type Usage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Usage](odds_relay/models/usage.py)</code> -- Usage.

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[GetUsageErrorBody](odds_relay/errors/get_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400](odds_relay/models/error400.py)</code> |
| 401 | <code>[Error401](odds_relay/models/error401.py)</code> |
| 403 | <code>[Error403](odds_relay/models/error403.py)</code> |
| 429 | <code>[Error429](odds_relay/models/error429.py)</code> |
| 500 | <code>[Error500](odds_relay/models/error500.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503](odds_relay/models/error503.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](odds_relay/apis/discovery.py)

<details>
<summary><code>def list_bookmakers(*, format_: FormatOrStr | None = Format.ENVELOPE, request_options: RequestOptionsOrDict | None = None) -> V2BookmakersResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every bookmaker and exchange key the API serves, with its display name, regions and kind. Free. Takes no `region`: a `region` parameter is 400.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.discovery.list_bookmakers()
    # TODO: Handle 'response' of type V2BookmakersResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBookmakersErrorBody
```

**Async**

```python
try:
    response = await async_client.discovery.list_bookmakers()
    # TODO: Handle 'response' of type V2BookmakersResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBookmakersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format_</code> | <code>[FormatOrStr](odds_relay/models/enums/format.py) \| None</code> | `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*` headers.<br>**Default**: <code>Format.ENVELOPE</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2BookmakersResponse1](odds_relay/models/unions/v2_bookmakers_response1.py)</code> -- The catalogue. Gzip unless refused (over 1 kB).

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[ListBookmakersErrorBody](odds_relay/errors/list_bookmakers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayDiscoveryApi](odds_relay/models/error400_odds_relay_discovery_api.py)</code> |
| 401 | <code>[Error401OddsRelayDiscoveryApi](odds_relay/models/error401_odds_relay_discovery_api.py)</code> |
| 403 | <code>[Error403OddsRelayDiscoveryApi](odds_relay/models/error403_odds_relay_discovery_api.py)</code> |
| 429 | <code>[Error429OddsRelayDiscoveryApi](odds_relay/models/error429_odds_relay_discovery_api.py)</code> |
| 500 | <code>[Error500OddsRelayDiscoveryApi](odds_relay/models/error500_odds_relay_discovery_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503OddsRelayDiscoveryApi](odds_relay/models/error503_odds_relay_discovery_api.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_events(sport: str, *, region: str | None = None, format_: FormatOrStr | None = Format.ENVELOPE, date_format: DateFormatOrStr | None = DateFormat.ISO, cursor: str | None = None, event_ids: str | None = None, commence_time_from: str | None = None, commence_time_to: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V2EventsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The events on the matched boards under one sport key or prefix, with the boards carrying each. Free. Paged 250 at a time in (kick-off, id) order; a cursor resumes strictly after the last event it saw, so an event whose kick-off moves across the cursor during a walk can appear twice or be missed: dedupe by `id` and take a missed event on the next walk. A cursor expires 300 s after it was issued. `region` missing means `uk`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.discovery.list_events(
        "tennis", region="uk", commence_time_from="2026-09-17T12:00:00Z", commence_time_to="2026-09-17T23:59:59Z"
    )
    # TODO: Handle 'response' of type V2EventsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEventsErrorBody
```

**Async**

```python
try:
    response = await async_client.discovery.list_events(
        "tennis", region="uk", commence_time_from="2026-09-17T12:00:00Z", commence_time_to="2026-09-17T23:59:59Z"
    )
    # TODO: Handle 'response' of type V2EventsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sport</code> | <code>str</code> | Required: a sport key or a prefix of one as `/v2/sports` lists them. Missing is 400 `missing_param`; unknown 400 `unknown_sport` with `valid`. |
| <code>region</code> | <code>str \| None</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](odds_relay/models/enums/format.py) \| None</code> | `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*` headers.<br>**Default**: <code>Format.ENVELOPE</code> |
| <code>date_format</code> | <code>[DateFormatOrStr](odds_relay/models/enums/date_format.py) \| None</code> | `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`, `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is 400.<br>**Default**: <code>DateFormat.ISO</code> |
| <code>cursor</code> | <code>str \| None</code> | The previous page's `meta.next_cursor` (or `X-Next-Cursor`). A cursor is bound to no account and expires 300 s after it was issued: 400 `cursor expired: start again from the first page`; any other shape 400 `cursor not recognised: start again from the first page`.<br>**Default**: <code>None</code> |
| <code>event_ids</code> | <code>str \| None</code> | Comma-separated, at most 50 event ids.<br>**Default**: <code>None</code> |
| <code>commence_time_from</code> | <code>str \| None</code> | Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.<br>**Default**: <code>None</code> |
| <code>commence_time_to</code> | <code>str \| None</code> | Events kicking off at or before this ISO-8601 instant (no offset = UTC).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2EventsResponse1](odds_relay/models/unions/v2_events_response1.py)</code> -- A page. Gzip unless refused (over 1 kB).

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[ListEventsErrorBody](odds_relay/errors/list_events_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayDiscoveryApi](odds_relay/models/error400_odds_relay_discovery_api.py)</code> |
| 401 | <code>[Error401OddsRelayDiscoveryApi](odds_relay/models/error401_odds_relay_discovery_api.py)</code> |
| 403 | <code>[Error403OddsRelayDiscoveryApi](odds_relay/models/error403_odds_relay_discovery_api.py)</code> |
| 404 | <code>[Error404](odds_relay/models/error404.py)</code> |
| 429 | <code>[Error429OddsRelayDiscoveryApi](odds_relay/models/error429_odds_relay_discovery_api.py)</code> |
| 500 | <code>[Error500OddsRelayDiscoveryApi](odds_relay/models/error500_odds_relay_discovery_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503OddsRelayDiscoveryApi](odds_relay/models/error503_odds_relay_discovery_api.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_regions(*, request_options: RequestOptionsOrDict | None = None) -> Regions</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The regions your key covers that have live bookmakers here, with each region's exchanges and coverage model. Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.discovery.list_regions()
    # TODO: Handle 'response' of type Regions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRegionsErrorBody
```

**Async**

```python
try:
    response = await async_client.discovery.list_regions()
    # TODO: Handle 'response' of type Regions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRegionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Regions](odds_relay/models/regions.py)</code> -- The regions. Gzip unless refused (over 1 kB).

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[ListRegionsErrorBody](odds_relay/errors/list_regions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayDiscoveryApi](odds_relay/models/error400_odds_relay_discovery_api.py)</code> |
| 401 | <code>[Error401OddsRelayDiscoveryApi](odds_relay/models/error401_odds_relay_discovery_api.py)</code> |
| 403 | <code>[Error403OddsRelayDiscoveryApi](odds_relay/models/error403_odds_relay_discovery_api.py)</code> |
| 429 | <code>[Error429OddsRelayDiscoveryApi](odds_relay/models/error429_odds_relay_discovery_api.py)</code> |
| 500 | <code>[Error500OddsRelayDiscoveryApi](odds_relay/models/error500_odds_relay_discovery_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503OddsRelayDiscoveryApi](odds_relay/models/error503_odds_relay_discovery_api.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sports(*, region: str | None = None, format_: FormatOrStr | None = Format.ENVELOPE, date_format: DateFormatOrStr | None = DateFormat.ISO, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V2SportsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every competition on the matched boards, grouped, with the market keys seen under each. Free. Paged 250 rows at a time in (group, key) order; a cursor expires 300 s after it was issued. `region` missing means `uk`; discovery is not scoped to your key's regions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.discovery.list_sports(region="uk")
    # TODO: Handle 'response' of type V2SportsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSportsErrorBody
```

**Async**

```python
try:
    response = await async_client.discovery.list_sports(region="uk")
    # TODO: Handle 'response' of type V2SportsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region</code> | <code>str \| None</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](odds_relay/models/enums/format.py) \| None</code> | `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*` headers.<br>**Default**: <code>Format.ENVELOPE</code> |
| <code>date_format</code> | <code>[DateFormatOrStr](odds_relay/models/enums/date_format.py) \| None</code> | `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`, `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is 400.<br>**Default**: <code>DateFormat.ISO</code> |
| <code>cursor</code> | <code>str \| None</code> | The previous page's `meta.next_cursor` (or `X-Next-Cursor`). A cursor is bound to no account and expires 300 s after it was issued: 400 `cursor expired: start again from the first page`; any other shape 400 `cursor not recognised: start again from the first page`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2SportsResponse1](odds_relay/models/unions/v2_sports_response1.py)</code> -- A page. Gzip unless refused (over 1 kB).

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[ListSportsErrorBody](odds_relay/errors/list_sports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayDiscoveryApi](odds_relay/models/error400_odds_relay_discovery_api.py)</code> |
| 401 | <code>[Error401OddsRelayDiscoveryApi](odds_relay/models/error401_odds_relay_discovery_api.py)</code> |
| 403 | <code>[Error403OddsRelayDiscoveryApi](odds_relay/models/error403_odds_relay_discovery_api.py)</code> |
| 404 | <code>[Error404](odds_relay/models/error404.py)</code> |
| 429 | <code>[Error429OddsRelayDiscoveryApi](odds_relay/models/error429_odds_relay_discovery_api.py)</code> |
| 500 | <code>[Error500OddsRelayDiscoveryApi](odds_relay/models/error500_odds_relay_discovery_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503OddsRelayDiscoveryApi](odds_relay/models/error503_odds_relay_discovery_api.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Odds

> Source: [Odds](odds_relay/apis/odds.py)

<details>
<summary><code>def get_matched_board(type_: Type1OrStr, accept_encoding: str, *, region: str | None = None, format_: FormatOrStr | None = Format.ENVELOPE, odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL, date_format: DateFormatOrStr | None = DateFormat.ISO, quote: str | None = None, sports: str | None = None, bookmakers: str | None = None, exchanges: str | None = None, markets: str | None = None, commence_time_from: str | None = None, commence_time_to: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V2OddsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The six matched boards: each event's bookmaker back prices beside the exchanges' lay prices (`dutching`: back legs that cover every outcome, grouped by `dutch_id`; `each-way` and `extra-place`: each-way terms against win and place lays).

**Checks, in this order** (each refusal is free): the per-address shield, the key, the account's flood cap, a suspended account, a browser key's website, the API version; then `type` (404 `unknown_type`), `region`, the region in the key (403 `region_not_in_scope`), the product in the key (403 `not_in_key_scope`), the product in the region (403 `product_not_in_region`: a region with no exchange serves only dutching and raw); then the parameters: each one this route reads, once; `format`, `oddsFormat` and `dateFormat` values; on `standard` and `dutching` decimal ISO only and gzip accepted (400 `add Accept-Encoding: gzip; with curl use --compressed`); then the filters (400 unknown values, 403 `bookmaker_not_in_region`, then your account's scope: 403 `sport_not_in_plan`, `market_not_in_plan`, `bookmaker_not_in_plan`, `exchange_not_in_plan`; and your plan's bookmaker list), then `quote=true`, the price (402), and the board (503 while it is not ready).

**Filters** cut the whole board's events in order: sport and kick-off, then markets, then back offers by bookmaker and lay offers by exchange; an outcome left with no back or no lay goes, then empty markets and events. `dutching` keeps a dutch only when every leg is a named venue. A filtered reply is priced on its filters (`/v2/pricing`); the kick-off window is never priced.

**Freshness**: `meta.processed_at` and `X-Processed-At` are the board time; `meta.last_seen` is each venue and sport's last read. The API drops no row for age; a venue not read within its own window (at most two minutes) is off the board until its next read.

**Conditional requests**: send the `ETag` back as `If-None-Match`; an unchanged body is a 304 with no body, free. A reply with no events is free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.odds.get_matched_board(
        Type1.STANDARD,
        "gzip",
        region="uk",
        quote="true",
        sports="tennis",
        bookmakers="william_hill",
        exchanges="betfair_exchange",
        markets="h2h",
        commence_time_from="2026-09-17T12:00:00Z",
        commence_time_to="2026-09-17T23:59:59Z",
    )
    # TODO: Handle 'response' of type V2OddsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMatchedBoardErrorBody
```

**Async**

```python
try:
    response = await async_client.odds.get_matched_board(
        Type1.STANDARD,
        "gzip",
        region="uk",
        quote="true",
        sports="tennis",
        bookmakers="william_hill",
        exchanges="betfair_exchange",
        markets="h2h",
        commence_time_from="2026-09-17T12:00:00Z",
        commence_time_to="2026-09-17T23:59:59Z",
    )
    # TODO: Handle 'response' of type V2OddsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMatchedBoardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>[Type1OrStr](odds_relay/models/enums/type1.py)</code> | A matched board: `standard`, `2up`, `dutching`, `each-way`, `extra-place` or `bog`. The aliases `two-up`, `each_way` and `extra_place` are accepted and served as their canonical slug. Anything else is 404 `unknown_type`. |
| <code>accept_encoding</code> | <code>str</code> | Send `gzip`; with curl, `--compressed` sends it and decompresses the reply. `standard` and `dutching` answer a request that refuses gzip (`identity` alone, as Python's `urllib` sends by default, or `gzip;q=0` or `*;q=0`) with 400 `bad_request`, message `add Accept-Encoding: gzip; with curl use --compressed`; the other four boards answer it plain. |
| <code>region</code> | <code>str \| None</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](odds_relay/models/enums/format.py) \| None</code> | `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*` headers.<br>**Default**: <code>Format.ENVELOPE</code> |
| <code>odds_format</code> | <code>[OddsFormatOrStr](odds_relay/models/enums/odds_format.py) \| None</code> | `decimal` (default) or `american` (a signed integer; null for a price at or below 1.0). `standard` and `dutching` serve decimal only: anything else is 400.<br>**Default**: <code>OddsFormat.DECIMAL</code> |
| <code>date_format</code> | <code>[DateFormatOrStr](odds_relay/models/enums/date_format.py) \| None</code> | `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`, `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is 400.<br>**Default**: <code>DateFormat.ISO</code> |
| <code>quote</code> | <code>str \| None</code> | `true` (also `1`, `yes`, `on`): price this exact request instead of serving it. 200 `{cost, remaining, rate_card}`, free, every check before the price still applies; any other value is an ordinary request.<br>**Default**: <code>None</code> |
| <code>sports</code> | <code>str \| None</code> | Comma-separated, at most 20: a sport key or a prefix of one as `/v2/sports` lists them (`soccer`, `soccer_epl`), lowercased. Unknown is 400 `unknown_sport` with `valid` (the sport key bases). A known value with nothing on the board is an empty 200, free. A value is inside your account's scope when it starts with a scope sport (`soccer_epl` under `soccer`); outside, 403 `sport_not_in_plan` with `valid`; left out, trimmed to the scope.<br>**Default**: <code>None</code> |
| <code>bookmakers</code> | <code>str \| None</code> | Comma-separated, at most 40: bookmaker keys as `/v2/bookmakers` lists them (a listed name is accepted too). Unknown is 400 `unknown_bookmaker` with `valid`; an exchange here is that 400 naming `exchanges` (on `dutching` both lists take venues of either kind); a venue outside the region is 403 `bookmaker_not_in_region`; one outside your plan's bookmaker list or your account's scope is 403 `bookmaker_not_in_plan` with `valid` (on `dutching`, an exchange outside the scope is 403 `exchange_not_in_plan`). A plan with a bookmaker list, or an account scope, trims a call naming none to that list.<br>**Default**: <code>None</code> |
| <code>exchanges</code> | <code>str \| None</code> | Comma-separated, at most 4: exchange keys as `/v2/bookmakers` lists them. Unknown is 400 `unknown_exchange` with `valid`; a bookmaker here is that 400 naming `bookmakers`. Outside your account's scope for this product: 403 `exchange_not_in_plan` with `valid`; left out, trimmed to the scope.<br>**Default**: <code>None</code> |
| <code>markets</code> | <code>str \| None</code> | Comma-separated, at most 20: market keys (`h2h`, `totals`, …; `/v2/sports` rows list the keys seen under each competition). Each product's keys: keyless `/v2/coverage`'s `markets`. Unknown is 400 `unknown_market` with `valid` (this product's keys) and, when another product carries it, `products`; another product's key may instead be accepted and match nothing. Outside your account's scope for this product: 403 `market_not_in_plan` with `valid`; left out, trimmed to the scope.<br>**Default**: <code>None</code> |
| <code>commence_time_from</code> | <code>str \| None</code> | Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.<br>**Default**: <code>None</code> |
| <code>commence_time_to</code> | <code>str \| None</code> | Events kicking off at or before this ISO-8601 instant (no offset = UTC).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2OddsResponse](odds_relay/models/unions/v2_odds_response.py)</code> -- The board (envelope, or the `data` array under `format=bare`), or under `quote=true` the price. Gzip unless refused.

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[GetMatchedBoardErrorBody](odds_relay/errors/get_matched_board_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayDiscoveryApi](odds_relay/models/error400_odds_relay_discovery_api.py)</code> |
| 401 | <code>[Error401OddsRelayDiscoveryApi](odds_relay/models/error401_odds_relay_discovery_api.py)</code> |
| 402 | <code>[Error402](odds_relay/models/error402.py)</code> |
| 403 | <code>[Error403OddsRelayDiscoveryApi](odds_relay/models/error403_odds_relay_discovery_api.py)</code> |
| 404 | <code>[Error404](odds_relay/models/error404.py)</code> |
| 429 | <code>[Error429OddsRelayDiscoveryApi](odds_relay/models/error429_odds_relay_discovery_api.py)</code> |
| 500 | <code>[Error500OddsRelayDiscoveryApi](odds_relay/models/error500_odds_relay_discovery_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503OddsRelayDiscoveryApi](odds_relay/models/error503_odds_relay_discovery_api.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_raw_board(accept_encoding: str, *, region: str | None = None, format_: FormatOrStr | None = Format.ENVELOPE, odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL, date_format: DateFormatOrStr | None = DateFormat.ISO, sports: str | None = None, sport: str | None = None, leagues: str | None = None, bookmakers: str | None = None, require_bookmakers: str | None = None, markets: str | None = None, event_ids: str | None = None, commence_time_from: str | None = None, commence_time_to: str | None = None, updated_since: str | None = None, exchanges_only: ExchangesOnlyOrStr | None = None, include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE, include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE, cursor: str | None = None, limit: int | None = None, quote: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V2OddsRawResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every venue's prices per event, one page at a time: bookmakers as `{name, price}`, exchanges quoting a lay side as `{name, back_price, lay_price, available}`. Served gzip only: a request refusing gzip is 400 `add Accept-Encoding: gzip; with curl use --compressed`.

**Checks, in this order**: the per-address shield, the key, the flood cap, a suspended account, a browser key's website, the API version; `region`, the region and `raw` in the key; the parameters (each one this route reads, once) and their values; the filters (400 unknown values, 403 `bookmaker_not_in_region`, 403 `bookmaker_not_in_plan`, then your account's scope: 403 `sport_not_in_plan`, `market_not_in_plan`, `bookmaker_not_in_plan`); `includeLinks` and `includeLiquidity`; `limit`; `cursor`; gzip; the raw board (503 `raw_not_enabled`); the page (503 while it cannot be cut); `quote=true`; the price (402).

**Paging**: pages are ordered by (kick-off, event id) and a cursor resumes strictly after the last event it saw, so an event that leaves the board between pages never restarts the walk. The accepted limit: an event whose kick-off moves across the cursor during a walk can appear twice or be missed. Dedupe by event `id`, and take a missed event on the next walk. A cursor expires 300 s after it was issued.

**Following changes**: walk with `updatedSince` set to the start of your previous walk; `last_update` is when a venue's market last moved (see the schema for what it is not).

**Price**: a page pays its share of the query's price (its prices over all the query's events' prices, at least 1; `eventIds` and `requireBookmakers` narrow the page, never the query), so a whole walk pays the query's price (narrowed by `eventIds` or `requireBookmakers`, only its kept events' share of it); a recent `updatedSince` pays a reduced share. `quote=true` prices this page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.odds.get_raw_board(
        "gzip",
        region="uk",
        sports="tennis",
        bookmakers="betfair_exchange",
        require_bookmakers="sky_bet,paddy_power,william_hill,ladbrokes,betfred,bet365",
        markets="h2h",
        commence_time_from="2026-09-17T12:00:00Z",
        commence_time_to="2026-09-17T23:59:59Z",
        updated_since="2026-09-17T02:20:00Z",
        quote="true",
    )
    # TODO: Handle 'response' of type V2OddsRawResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRawBoardErrorBody
```

**Async**

```python
try:
    response = await async_client.odds.get_raw_board(
        "gzip",
        region="uk",
        sports="tennis",
        bookmakers="betfair_exchange",
        require_bookmakers="sky_bet,paddy_power,william_hill,ladbrokes,betfred,bet365",
        markets="h2h",
        commence_time_from="2026-09-17T12:00:00Z",
        commence_time_to="2026-09-17T23:59:59Z",
        updated_since="2026-09-17T02:20:00Z",
        quote="true",
    )
    # TODO: Handle 'response' of type V2OddsRawResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRawBoardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accept_encoding</code> | <code>str</code> | Send `gzip`; with curl, `--compressed` sends it and decompresses the reply. The raw board answers a request that refuses gzip (`identity` alone, as Python's `urllib` sends by default, or `gzip;q=0` or `*;q=0`) with 400 `bad_request`, message `add Accept-Encoding: gzip; with curl use --compressed`. |
| <code>region</code> | <code>str \| None</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](odds_relay/models/enums/format.py) \| None</code> | `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*` headers.<br>**Default**: <code>Format.ENVELOPE</code> |
| <code>odds_format</code> | <code>[OddsFormatOrStr](odds_relay/models/enums/odds_format.py) \| None</code> | `decimal` (default) or `american` (a signed integer; null for a price at or below 1.0). `standard` and `dutching` serve decimal only: anything else is 400.<br>**Default**: <code>OddsFormat.DECIMAL</code> |
| <code>date_format</code> | <code>[DateFormatOrStr](odds_relay/models/enums/date_format.py) \| None</code> | `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`, `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is 400.<br>**Default**: <code>DateFormat.ISO</code> |
| <code>sports</code> | <code>str \| None</code> | Comma-separated, at most 20: a sport key, a prefix of one, or a sport name raw serves, lowercased. Unknown is 400 `unknown_sport` with `valid`. Inside your account's raw scope: a key or prefix starting with a scope sport, a sport name only when it equals one (send `soccer`, not `football`); outside, 403 `sport_not_in_plan` with `valid`; left out, trimmed to the scope.<br>**Default**: <code>None</code> |
| <code>sport</code> | <code>str \| None</code> | The same as `sports` (what `/v2/events` takes); ignored when `sports` is sent.<br>**Default**: <code>None</code> |
| <code>leagues</code> | <code>str \| None</code> | Comma-separated, at most 40: competition names (an event's league or `sport_title`), lowercased. Not checked against a catalogue.<br>**Default**: <code>None</code> |
| <code>bookmakers</code> | <code>str \| None</code> | Comma-separated, at most 40: venue keys of either kind, bookmakers and exchanges, as `/v2/bookmakers` lists them. Unknown is 400 `unknown_bookmaker` with `valid`; outside the region 403 `bookmaker_not_in_region`; outside your plan's bookmaker list or your account's raw scope 403 `bookmaker_not_in_plan` with `valid`. An account scope's raw list is the whole venue list, exchanges included: left out, trimmed to it (so `exchangesOnly=true` keeps only the exchanges it names).<br>**Default**: <code>None</code> |
| <code>require_bookmakers</code> | <code>str \| None</code> | Comma-separated, at most 40 venue keys, checked as `bookmakers` is (the same 400 and 403 codes). Keeps only the events where EVERY named venue quotes the call's `markets` (with several, at least one of them each), under `exchangesOnly` if set; a venue that lists the event but not the market does not count. `bookmakers` does not narrow this test and `updatedSince` is not part of it: with `updatedSince`, an event carrying every named venue is kept when any venue shown changed, and the page shows only the venues that changed. It narrows events, never venues: every venue the other filters keep is still shown, named or not. `meta.total` and `X-Count` count the events kept. Price: like `eventIds`, it narrows the page and not the query, so a page pays its share of the same call without `requireBookmakers`, and an empty page is free.<br>**Default**: <code>None</code> |
| <code>markets</code> | <code>str \| None</code> | Comma-separated, at most 20: market keys raw serves. Raw's keys: keyless `/v2/coverage`'s `markets.raw`. Unknown is 400 `unknown_market` with `valid` (raw's keys) and, when another product carries it, `products`. Keeps venues quoting one of them, and only those markets. Outside your account's scope for this product: 403 `market_not_in_plan` with `valid`; left out, trimmed to the scope.<br>**Default**: <code>None</code> |
| <code>event_ids</code> | <code>str \| None</code> | Comma-separated, at most 50 event ids. Narrows the page, not the query: a page pays its share of the same call without `eventIds`.<br>**Default**: <code>None</code> |
| <code>commence_time_from</code> | <code>str \| None</code> | Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.<br>**Default**: <code>None</code> |
| <code>commence_time_to</code> | <code>str \| None</code> | Events kicking off at or before this ISO-8601 instant (no offset = UTC).<br>**Default**: <code>None</code> |
| <code>updated_since</code> | <code>str \| None</code> | Exactly `YYYY-MM-DDTHH:MM:SSZ` (any other form is 400). Keeps venues whose `last_update` is at or after it, and the events holding one. The bulk way to follow raw: a recent `updatedSince` pays a reduced share (`/v2/pricing` `recent`).<br>**Default**: <code>None</code> |
| <code>exchanges_only</code> | <code>[ExchangesOnlyOrStr](odds_relay/models/enums/exchanges_only.py) \| None</code> | `true`: exchanges only. `true` or `false`, else 400.<br>**Default**: <code>None</code> |
| <code>include_links</code> | <code>[IncludeLinksOrStr](odds_relay/models/enums/include_links.py) \| None</code> | `true`: each venue's `link` (its primary event page; left out when it has none). Default `false`. `true` or `false`, else 400.<br>**Default**: <code>IncludeLinks.FALSE</code> |
| <code>include_liquidity</code> | <code>[IncludeLiquidityOrStr](odds_relay/models/enums/include_liquidity.py) \| None</code> | `false`: leave out `available` beside an exchange's `lay_price`. Default `true`. `true` or `false`, else 400.<br>**Default**: <code>IncludeLiquidity.TRUE</code> |
| <code>cursor</code> | <code>str \| None</code> | The previous page's `meta.next_cursor` (or `X-Next-Cursor`). A cursor is bound to no account and expires 300 s after it was issued: 400 `cursor expired: start again from the first page`; any other shape 400 `cursor not recognised: start again from the first page`.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Events per page, 1-250 (default and maximum 250). Anything else is 400.<br>**Default**: <code>None</code> |
| <code>quote</code> | <code>str \| None</code> | `true` (also `1`, `yes`, `on`): price this exact request instead of serving it. 200 `{cost, remaining, rate_card}`, free, every check before the price still applies; any other value is an ordinary request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2OddsRawResponse](odds_relay/models/unions/v2_odds_raw_response.py)</code> -- One page (envelope, or the `data` array under `format=bare`), or under `quote=true` its price. Gzip.

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[GetRawBoardErrorBody](odds_relay/errors/get_raw_board_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayDiscoveryApi](odds_relay/models/error400_odds_relay_discovery_api.py)</code> |
| 401 | <code>[Error401OddsRelayDiscoveryApi](odds_relay/models/error401_odds_relay_discovery_api.py)</code> |
| 402 | <code>[Error402](odds_relay/models/error402.py)</code> |
| 403 | <code>[Error403OddsRelayDiscoveryApi](odds_relay/models/error403_odds_relay_discovery_api.py)</code> |
| 404 | <code>[Error404](odds_relay/models/error404.py)</code> |
| 429 | <code>[Error429OddsRelayDiscoveryApi](odds_relay/models/error429_odds_relay_discovery_api.py)</code> |
| 500 | <code>[Error500OddsRelayDiscoveryApi](odds_relay/models/error500_odds_relay_discovery_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503OddsRelayDiscoveryApi](odds_relay/models/error503_odds_relay_discovery_api.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_raw_event(id_: str, *, region: str | None = None, odds_format: OddsFormatOrStr | None = OddsFormat.DECIMAL, date_format: DateFormatOrStr | None = DateFormat.ISO, include_links: IncludeLinksOrStr | None = IncludeLinks.FALSE, include_liquidity: IncludeLiquidityOrStr | None = IncludeLiquidity.TRUE, quote: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V2OddsEventResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One raw event by id, every venue (a plan with a bookmaker list sees those venues and the region's exchanges; an account scope sees its raw venue list and markets only, no exchange added). Checks: the key and scope as raw, the parameters and their values, the raw board (503 `raw_not_enabled`), the id (404 `unknown_event`), the event's sport in your account's raw scope (403 `sport_not_in_plan`), `quote=true`, the price (402). The price is the whole event's, whatever the scope cuts. Priced by the event's share of the region's raw prices. Gzip unless refused (over 1 kB).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.odds.get_raw_event("or_evt_da71d5873e85", region="uk", quote="true")
    # TODO: Handle 'response' of type V2OddsEventResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRawEventErrorBody
```

**Async**

```python
try:
    response = await async_client.odds.get_raw_event("or_evt_da71d5873e85", region="uk", quote="true")
    # TODO: Handle 'response' of type V2OddsEventResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRawEventErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | An event id (`or_evt_…`) from raw, a matched board or `/v2/events`. Not on the raw board now is 404 `unknown_event`. |
| <code>region</code> | <code>str \| None</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`.<br>**Default**: <code>None</code> |
| <code>odds_format</code> | <code>[OddsFormatOrStr](odds_relay/models/enums/odds_format.py) \| None</code> | `decimal` (default) or `american` (a signed integer; null for a price at or below 1.0). `standard` and `dutching` serve decimal only: anything else is 400.<br>**Default**: <code>OddsFormat.DECIMAL</code> |
| <code>date_format</code> | <code>[DateFormatOrStr](odds_relay/models/enums/date_format.py) \| None</code> | `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`, `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is 400.<br>**Default**: <code>DateFormat.ISO</code> |
| <code>include_links</code> | <code>[IncludeLinksOrStr](odds_relay/models/enums/include_links.py) \| None</code> | `true`: each venue's `link` (its primary event page; left out when it has none). Default `false`. `true` or `false`, else 400.<br>**Default**: <code>IncludeLinks.FALSE</code> |
| <code>include_liquidity</code> | <code>[IncludeLiquidityOrStr](odds_relay/models/enums/include_liquidity.py) \| None</code> | `false`: leave out `available` beside an exchange's `lay_price`. Default `true`. `true` or `false`, else 400.<br>**Default**: <code>IncludeLiquidity.TRUE</code> |
| <code>quote</code> | <code>str \| None</code> | `true` (also `1`, `yes`, `on`): price this exact request instead of serving it. 200 `{cost, remaining, rate_card}`, free, every check before the price still applies; any other value is an ordinary request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2OddsEventResponse](odds_relay/models/unions/v2_odds_event_response.py)</code> -- The event, or under `quote=true` its price.

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[GetRawEventErrorBody](odds_relay/errors/get_raw_event_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayDiscoveryApi](odds_relay/models/error400_odds_relay_discovery_api.py)</code> |
| 401 | <code>[Error401OddsRelayDiscoveryApi](odds_relay/models/error401_odds_relay_discovery_api.py)</code> |
| 402 | <code>[Error402](odds_relay/models/error402.py)</code> |
| 403 | <code>[Error403OddsRelayDiscoveryApi](odds_relay/models/error403_odds_relay_discovery_api.py)</code> |
| 404 | <code>[Error404](odds_relay/models/error404.py)</code> |
| 429 | <code>[Error429OddsRelayDiscoveryApi](odds_relay/models/error429_odds_relay_discovery_api.py)</code> |
| 500 | <code>[Error500OddsRelayDiscoveryApi](odds_relay/models/error500_odds_relay_discovery_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503OddsRelayDiscoveryApi](odds_relay/models/error503_odds_relay_discovery_api.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Service

> Source: [Service](odds_relay/apis/service.py)

<details>
<summary><code>def get_coverage(*, region: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V2CoverageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One document per region, in two views. **Keyless** (no `Authorization` and no `x-api-key` header): per product, each (venue, sport) `live` or `interrupted_24h`, no counts and no times, then `markets`: per product, the market keys it carries, each one a value its `markets` filter takes now; the per-address shield only; `Cache-Control: public, max-age=60` and `Vary: Authorization, X-Api-Key, Accept-Encoding` on a 200; `Access-Control-Allow-Origin: *` on every reply, refusals and errors included. **Keyed** (either header present, even empty: an invalid key is 401): your key's products the region serves, venues with rows now, their `events` and `last_seen`; on an account with a scope, only its products and, per product, the venues and sports it admits (markets are not applied: the document has no market grain; a scope that cannot be applied is 503 `temporarily_unavailable`); free; the flood cap applies. Both: `region` missing means `uk`, gzip over 1 kB unless refused, 503 until the first document is built.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service.get_coverage(region="uk")
    # TODO: Handle 'response' of type V2CoverageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCoverageErrorBody
```

**Async**

```python
try:
    response = await async_client.service.get_coverage(region="uk")
    # TODO: Handle 'response' of type V2CoverageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCoverageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region</code> | <code>str \| None</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2CoverageResponse](odds_relay/models/unions/v2_coverage_response.py)</code> -- The keyless summary, or the keyed document.

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[GetCoverageErrorBody](odds_relay/errors/get_coverage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayServiceApi](odds_relay/models/error400_odds_relay_service_api.py)</code> |
| 401 | <code>[Error401OddsRelayServiceApi](odds_relay/models/error401_odds_relay_service_api.py)</code> |
| 403 | <code>[Error403OddsRelayServiceApi](odds_relay/models/error403_odds_relay_service_api.py)</code> |
| 404 | <code>[Error404OddsRelayServiceApi](odds_relay/models/error404_odds_relay_service_api.py)</code> |
| 429 | <code>[Error429OddsRelayServiceApi](odds_relay/models/error429_odds_relay_service_api.py)</code> |
| 500 | <code>[Error500OddsRelayServiceApi](odds_relay/models/error500_odds_relay_service_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503OddsRelayServiceApi](odds_relay/models/error503_odds_relay_service_api.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_health(*, request_options: RequestOptionsOrDict | None = None) -> Health</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Each board's `processed_at`, odds age (`age_s`) and event `count`, and a verdict: `degraded` when a board is past the age bound or cannot be served. Always HTTP 200 whatever the verdict. Free. Plain JSON.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service.get_health()
    # TODO: Handle 'response' of type Health
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHealthErrorBody
```

**Async**

```python
try:
    response = await async_client.service.get_health()
    # TODO: Handle 'response' of type Health
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Health](odds_relay/models/health.py)</code> -- The boards.

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[GetHealthErrorBody](odds_relay/errors/get_health_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayServiceApi](odds_relay/models/error400_odds_relay_service_api.py)</code> |
| 401 | <code>[Error401OddsRelayServiceApi](odds_relay/models/error401_odds_relay_service_api.py)</code> |
| 403 | <code>[Error403OddsRelayServiceApi](odds_relay/models/error403_odds_relay_service_api.py)</code> |
| 429 | <code>[Error429OddsRelayServiceApi](odds_relay/models/error429_odds_relay_service_api.py)</code> |
| 500 | <code>[Error500OddsRelayServiceApi](odds_relay/models/error500_odds_relay_service_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503OddsRelayServiceApi](odds_relay/models/error503_odds_relay_service_api.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_liveness(*, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Is the service up. KEYLESS and before every other check. `text/plain`, `Cache-Control: no-store`: the first line is `ok` (200) or `warming` (503), then how many boards can be served and any that cannot. Liveness only: board freshness is `/v2/health` and `/v2/status`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service.get_liveness()
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLivenessErrorBody
```

**Async**

```python
try:
    response = await async_client.service.get_liveness()
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLivenessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Up.

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[GetLivenessErrorBody](odds_relay/errors/get_liveness_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>str</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_open_api(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This OpenAPI document. KEYLESS: the per-address shield only, a key header is ignored, no token is spent. `ETag` is its SHA-256 (`-gz` on the gzip copy); 304 on a match; gzip unless refused; `Cache-Control: public, max-age=300`; `Access-Control-Allow-Origin: *` on every reply, refusals and errors included. Takes no parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service.get_open_api()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOpenApiErrorBody
```

**Async**

```python
try:
    response = await async_client.service.get_open_api()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOpenApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- This document.

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[GetOpenApiErrorBody](odds_relay/errors/get_open_api_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayServiceApi](odds_relay/models/error400_odds_relay_service_api.py)</code> |
| 429 | <code>[Error429OddsRelayServiceApi](odds_relay/models/error429_odds_relay_service_api.py)</code> |
| 500 | <code>[Error500OddsRelayServiceApi](odds_relay/models/error500_odds_relay_service_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_status(*, region: str | None = None, request_options: RequestOptionsOrDict | None = None) -> StatusOddsRelayServiceApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per product the region serves: `ok`, `slow` or `stale`, judged on each board's odds age (not servable or not held is `stale`). While boards warm every product reads `stale` in a 200. KEYLESS: the per-address shield only, a key header is ignored, no token is spent. `Cache-Control: public, max-age=10` on a 200; `Access-Control-Allow-Origin: *` on every reply, refusals and errors included. Plain JSON (never gzip).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service.get_status(region="uk")
    # TODO: Handle 'response' of type StatusOddsRelayServiceApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.service.get_status(region="uk")
    # TODO: Handle 'response' of type StatusOddsRelayServiceApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region</code> | <code>str \| None</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](odds_relay/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusOddsRelayServiceApi](odds_relay/models/status_odds_relay_service_api.py)</code> -- The status.

**OnError**: <code>[ApiError](odds_relay/core/exceptions.py)&#91;[GetStatusErrorBody](odds_relay/errors/get_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400OddsRelayServiceApi](odds_relay/models/error400_odds_relay_service_api.py)</code> |
| 404 | <code>[Error404OddsRelayServiceApi](odds_relay/models/error404_odds_relay_service_api.py)</code> |
| 429 | <code>[Error429OddsRelayServiceApi](odds_relay/models/error429_odds_relay_service_api.py)</code> |
| 500 | <code>[Error500OddsRelayServiceApi](odds_relay/models/error500_odds_relay_service_api.py)</code> |
| 502 | <code>[RawError](odds_relay/core/results.py)</code> |
| 503 | <code>[Error503OddsRelayServiceApi](odds_relay/models/error503_odds_relay_service_api.py)</code> |
| anything unmapped | <code>[RawError](odds_relay/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

