# Reference

> Source: [OddsRelayClient](src/client.ts)

## AccountApi

> Source: [AccountApi](src/resources/account-api.ts)

<details>
<summary><code>getPricing(options?: RequestOptions): ApiPromise&lt;PriceTable, AccountApi.GetPricingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The price table every call is priced from, byte for byte. Free. `ETag` is its SHA-256 (`-gz` on the gzip copy); 304 on a match. Gzip unless refused.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountApi.getPricing();
  // TODO: Handle 'response' of type PriceTable
} catch (err) {
  // TODO: Handle 'err' of type AccountApi.GetPricingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountApi.getPricing().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PriceTable
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountApi.getPricing()`

- **OnSuccess**: <code>[PriceTable](src/models/price-table.ts)</code>
- **OnError**: throws <code>[AccountApi.GetPricingError](src/resources/account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountApi.getPricing().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PriceTable, AccountApi.GetPricingError&gt;</code>, with `result.value` of type <code>[PriceTable](src/models/price-table.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsage(options?: RequestOptions): ApiPromise&lt;Usage, AccountApi.GetUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free, flood-capped, and answered for a SUSPENDED account too (it shows the reason). Plain JSON. `scope` and `scope_version` are your account's scope (both null when it has none); `key.products` is your key's products within it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountApi.getUsage();
  // TODO: Handle 'response' of type Usage
} catch (err) {
  // TODO: Handle 'err' of type AccountApi.GetUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountApi.getUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Usage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountApi.getUsage()`

- **OnSuccess**: <code>[Usage](src/models/usage.ts)</code>
- **OnError**: throws <code>[AccountApi.GetUsageError](src/resources/account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountApi.getUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Usage, AccountApi.GetUsageError&gt;</code>, with `result.value` of type <code>[Usage](src/models/usage.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](src/resources/discovery.ts)

<details>
<summary><code>listBookmakers(request?: Discovery.ListBookmakersRequest, options?: RequestOptions): ApiPromise&lt;V2BookmakersResponse1, Discovery.ListBookmakersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every bookmaker and exchange key the API serves, with its display name, regions and kind. Free. Takes no `region`: a `region` parameter is 400.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discovery.listBookmakers();
  // TODO: Handle 'response' of type V2BookmakersResponse1
} catch (err) {
  // TODO: Handle 'err' of type Discovery.ListBookmakersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discovery.listBookmakers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2BookmakersResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*` headers.<br>**Default**: "envelope" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discovery.listBookmakers(request)`

- **OnSuccess**: <code>[V2BookmakersResponse1](src/models/unions/v2-bookmakers-response1.ts)</code>
- **OnError**: throws <code>[Discovery.ListBookmakersError](src/resources/discovery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discovery.listBookmakers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2BookmakersResponse1, Discovery.ListBookmakersError&gt;</code>, with `result.value` of type <code>[V2BookmakersResponse1](src/models/unions/v2-bookmakers-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEvents(request: Discovery.ListEventsRequest, options?: RequestOptions): ApiPromise&lt;V2EventsResponse1, Discovery.ListEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The events on the matched boards under one sport key or prefix, with the boards carrying each. Free. Paged 250 at a time in (kick-off, id) order; a cursor resumes strictly after the last event it saw, so an event whose kick-off moves across the cursor during a walk can appear twice or be missed: dedupe by `id` and take a missed event on the next walk. A cursor expires 300 s after it was issued. `region` missing means `uk`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discovery.listEvents({
    sport: "tennis",
    region: "uk",
    commenceTimeFrom: "2026-09-17T12:00:00Z",
    commenceTimeTo: "2026-09-17T23:59:59Z",
  });
  // TODO: Handle 'response' of type V2EventsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Discovery.ListEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discovery
  .listEvents({
    sport: "tennis",
    region: "uk",
    commenceTimeFrom: "2026-09-17T12:00:00Z",
    commenceTimeTo: "2026-09-17T23:59:59Z",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2EventsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sport</code> | <code>string</code> | Required: a sport key or a prefix of one as `/v2/sports` lists them. Missing is 400 `missing_param`; unknown 400 `unknown_sport` with `valid`. |
| <code>region?</code> | <code>string</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*` headers.<br>**Default**: "envelope" |
| <code>dateFormat?</code> | <code>[DateFormat](src/models/date-format.ts)</code> | `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`, `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is 400.<br>**Default**: "iso" |
| <code>cursor?</code> | <code>string</code> | The previous page's `meta.next_cursor` (or `X-Next-Cursor`). A cursor is bound to no account and expires 300 s after it was issued: 400 `cursor expired: start again from the first page`; any other shape 400 `cursor not recognised: start again from the first page`. |
| <code>eventIds?</code> | <code>string</code> | Comma-separated, at most 50 event ids. |
| <code>commenceTimeFrom?</code> | <code>string</code> | Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400. |
| <code>commenceTimeTo?</code> | <code>string</code> | Events kicking off at or before this ISO-8601 instant (no offset = UTC). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discovery.listEvents(request)`

- **OnSuccess**: <code>[V2EventsResponse1](src/models/unions/v2-events-response1.ts)</code>
- **OnError**: throws <code>[Discovery.ListEventsError](src/resources/discovery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discovery.listEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2EventsResponse1, Discovery.ListEventsError&gt;</code>, with `result.value` of type <code>[V2EventsResponse1](src/models/unions/v2-events-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRegions(options?: RequestOptions): ApiPromise&lt;Regions, Discovery.ListRegionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The regions your key covers that have live bookmakers here, with each region's exchanges and coverage model. Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discovery.listRegions();
  // TODO: Handle 'response' of type Regions
} catch (err) {
  // TODO: Handle 'err' of type Discovery.ListRegionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discovery.listRegions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Regions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discovery.listRegions()`

- **OnSuccess**: <code>[Regions](src/models/regions.ts)</code>
- **OnError**: throws <code>[Discovery.ListRegionsError](src/resources/discovery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discovery.listRegions().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Regions, Discovery.ListRegionsError&gt;</code>, with `result.value` of type <code>[Regions](src/models/regions.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSports(request?: Discovery.ListSportsRequest, options?: RequestOptions): ApiPromise&lt;V2SportsResponse1, Discovery.ListSportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every competition on the matched boards, grouped, with the market keys seen under each. Free. Paged 250 rows at a time in (group, key) order; a cursor expires 300 s after it was issued. `region` missing means `uk`; discovery is not scoped to your key's regions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discovery.listSports({ region: "uk" });
  // TODO: Handle 'response' of type V2SportsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Discovery.ListSportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discovery.listSports({ region: "uk" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2SportsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region?</code> | <code>string</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*` headers.<br>**Default**: "envelope" |
| <code>dateFormat?</code> | <code>[DateFormat](src/models/date-format.ts)</code> | `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`, `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is 400.<br>**Default**: "iso" |
| <code>cursor?</code> | <code>string</code> | The previous page's `meta.next_cursor` (or `X-Next-Cursor`). A cursor is bound to no account and expires 300 s after it was issued: 400 `cursor expired: start again from the first page`; any other shape 400 `cursor not recognised: start again from the first page`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discovery.listSports(request)`

- **OnSuccess**: <code>[V2SportsResponse1](src/models/unions/v2-sports-response1.ts)</code>
- **OnError**: throws <code>[Discovery.ListSportsError](src/resources/discovery.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.discovery.listSports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2SportsResponse1, Discovery.ListSportsError&gt;</code>, with `result.value` of type <code>[V2SportsResponse1](src/models/unions/v2-sports-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Odds

> Source: [Odds](src/resources/odds.ts)

<details>
<summary><code>getMatchedBoard(request: Odds.GetMatchedBoardRequest, options?: RequestOptions): ApiPromise&lt;V2OddsResponse, Odds.GetMatchedBoardError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.odds.getMatchedBoard({
    type: Type1.Standard,
    region: "uk",
    quote: "true",
    sports: "tennis",
    bookmakers: "william_hill",
    exchanges: "betfair_exchange",
    markets: "h2h",
    commenceTimeFrom: "2026-09-17T12:00:00Z",
    commenceTimeTo: "2026-09-17T23:59:59Z",
    acceptEncoding: "gzip",
  });
  // TODO: Handle 'response' of type V2OddsResponse
} catch (err) {
  // TODO: Handle 'err' of type Odds.GetMatchedBoardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.odds
  .getMatchedBoard({
    type: Type1.Standard,
    region: "uk",
    quote: "true",
    sports: "tennis",
    bookmakers: "william_hill",
    exchanges: "betfair_exchange",
    markets: "h2h",
    commenceTimeFrom: "2026-09-17T12:00:00Z",
    commenceTimeTo: "2026-09-17T23:59:59Z",
    acceptEncoding: "gzip",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2OddsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[Type1](src/models/type1.ts)</code> | A matched board: `standard`, `2up`, `dutching`, `each-way`, `extra-place` or `bog`. The aliases `two-up`, `each_way` and `extra_place` are accepted and served as their canonical slug. Anything else is 404 `unknown_type`. |
| <code>region?</code> | <code>string</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*` headers.<br>**Default**: "envelope" |
| <code>oddsFormat?</code> | <code>[OddsFormat](src/models/odds-format.ts)</code> | `decimal` (default) or `american` (a signed integer; null for a price at or below 1.0). `standard` and `dutching` serve decimal only: anything else is 400.<br>**Default**: "decimal" |
| <code>dateFormat?</code> | <code>[DateFormat](src/models/date-format.ts)</code> | `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`, `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is 400.<br>**Default**: "iso" |
| <code>quote?</code> | <code>string</code> | `true` (also `1`, `yes`, `on`): price this exact request instead of serving it. 200 `{cost, remaining, rate_card}`, free, every check before the price still applies; any other value is an ordinary request. |
| <code>sports?</code> | <code>string</code> | Comma-separated, at most 20: a sport key or a prefix of one as `/v2/sports` lists them (`soccer`, `soccer_epl`), lowercased. Unknown is 400 `unknown_sport` with `valid` (the sport key bases). A known value with nothing on the board is an empty 200, free. A value is inside your account's scope when it starts with a scope sport (`soccer_epl` under `soccer`); outside, 403 `sport_not_in_plan` with `valid`; left out, trimmed to the scope. |
| <code>bookmakers?</code> | <code>string</code> | Comma-separated, at most 40: bookmaker keys as `/v2/bookmakers` lists them (a listed name is accepted too). Unknown is 400 `unknown_bookmaker` with `valid`; an exchange here is that 400 naming `exchanges` (on `dutching` both lists take venues of either kind); a venue outside the region is 403 `bookmaker_not_in_region`; one outside your plan's bookmaker list or your account's scope is 403 `bookmaker_not_in_plan` with `valid` (on `dutching`, an exchange outside the scope is 403 `exchange_not_in_plan`). A plan with a bookmaker list, or an account scope, trims a call naming none to that list. |
| <code>exchanges?</code> | <code>string</code> | Comma-separated, at most 4: exchange keys as `/v2/bookmakers` lists them. Unknown is 400 `unknown_exchange` with `valid`; a bookmaker here is that 400 naming `bookmakers`. Outside your account's scope for this product: 403 `exchange_not_in_plan` with `valid`; left out, trimmed to the scope. |
| <code>markets?</code> | <code>string</code> | Comma-separated, at most 20: market keys (`h2h`, `totals`, …; `/v2/sports` rows list the keys seen under each competition). Each product's keys: keyless `/v2/coverage`'s `markets`. Unknown is 400 `unknown_market` with `valid` (this product's keys) and, when another product carries it, `products`; another product's key may instead be accepted and match nothing. Outside your account's scope for this product: 403 `market_not_in_plan` with `valid`; left out, trimmed to the scope. |
| <code>commenceTimeFrom?</code> | <code>string</code> | Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400. |
| <code>commenceTimeTo?</code> | <code>string</code> | Events kicking off at or before this ISO-8601 instant (no offset = UTC). |
| <code>acceptEncoding</code> | <code>string</code> | Send `gzip`; with curl, `--compressed` sends it and decompresses the reply. `standard` and `dutching` answer a request that refuses gzip (`identity` alone, as Python's `urllib` sends by default, or `gzip;q=0` or `*;q=0`) with 400 `bad_request`, message `add Accept-Encoding: gzip; with curl use --compressed`; the other four boards answer it plain. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.odds.getMatchedBoard(request)`

- **OnSuccess**: <code>[V2OddsResponse](src/models/unions/v2-odds-response.ts)</code>
- **OnError**: throws <code>[Odds.GetMatchedBoardError](src/resources/odds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.odds.getMatchedBoard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2OddsResponse, Odds.GetMatchedBoardError&gt;</code>, with `result.value` of type <code>[V2OddsResponse](src/models/unions/v2-odds-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRawBoard(request: Odds.GetRawBoardRequest, options?: RequestOptions): ApiPromise&lt;V2OddsRawResponse, Odds.GetRawBoardError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.odds.getRawBoard({
    region: "uk",
    sports: "tennis",
    bookmakers: "betfair_exchange",
    requireBookmakers: "sky_bet,paddy_power,william_hill,ladbrokes,betfred,bet365",
    markets: "h2h",
    commenceTimeFrom: "2026-09-17T12:00:00Z",
    commenceTimeTo: "2026-09-17T23:59:59Z",
    updatedSince: "2026-09-17T02:20:00Z",
    quote: "true",
    acceptEncoding: "gzip",
  });
  // TODO: Handle 'response' of type V2OddsRawResponse
} catch (err) {
  // TODO: Handle 'err' of type Odds.GetRawBoardError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.odds
  .getRawBoard({
    region: "uk",
    sports: "tennis",
    bookmakers: "betfair_exchange",
    requireBookmakers: "sky_bet,paddy_power,william_hill,ladbrokes,betfred,bet365",
    markets: "h2h",
    commenceTimeFrom: "2026-09-17T12:00:00Z",
    commenceTimeTo: "2026-09-17T23:59:59Z",
    updatedSince: "2026-09-17T02:20:00Z",
    quote: "true",
    acceptEncoding: "gzip",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2OddsRawResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region?</code> | <code>string</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | `envelope` (default): `{meta, data}`. `bare`: the `data` array alone, `meta` moved to `X-*` headers.<br>**Default**: "envelope" |
| <code>oddsFormat?</code> | <code>[OddsFormat](src/models/odds-format.ts)</code> | `decimal` (default) or `american` (a signed integer; null for a price at or below 1.0). `standard` and `dutching` serve decimal only: anything else is 400.<br>**Default**: "decimal" |
| <code>dateFormat?</code> | <code>[DateFormat](src/models/date-format.ts)</code> | `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`, `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is 400.<br>**Default**: "iso" |
| <code>sports?</code> | <code>string</code> | Comma-separated, at most 20: a sport key, a prefix of one, or a sport name raw serves, lowercased. Unknown is 400 `unknown_sport` with `valid`. Inside your account's raw scope: a key or prefix starting with a scope sport, a sport name only when it equals one (send `soccer`, not `football`); outside, 403 `sport_not_in_plan` with `valid`; left out, trimmed to the scope. |
| <code>sport?</code> | <code>string</code> | The same as `sports` (what `/v2/events` takes); ignored when `sports` is sent. |
| <code>leagues?</code> | <code>string</code> | Comma-separated, at most 40: competition names (an event's league or `sport_title`), lowercased. Not checked against a catalogue. |
| <code>bookmakers?</code> | <code>string</code> | Comma-separated, at most 40: venue keys of either kind, bookmakers and exchanges, as `/v2/bookmakers` lists them. Unknown is 400 `unknown_bookmaker` with `valid`; outside the region 403 `bookmaker_not_in_region`; outside your plan's bookmaker list or your account's raw scope 403 `bookmaker_not_in_plan` with `valid`. An account scope's raw list is the whole venue list, exchanges included: left out, trimmed to it (so `exchangesOnly=true` keeps only the exchanges it names). |
| <code>requireBookmakers?</code> | <code>string</code> | Comma-separated, at most 40 venue keys, checked as `bookmakers` is (the same 400 and 403 codes). Keeps only the events where EVERY named venue quotes the call's `markets` (with several, at least one of them each), under `exchangesOnly` if set; a venue that lists the event but not the market does not count. `bookmakers` does not narrow this test and `updatedSince` is not part of it: with `updatedSince`, an event carrying every named venue is kept when any venue shown changed, and the page shows only the venues that changed. It narrows events, never venues: every venue the other filters keep is still shown, named or not. `meta.total` and `X-Count` count the events kept. Price: like `eventIds`, it narrows the page and not the query, so a page pays its share of the same call without `requireBookmakers`, and an empty page is free. |
| <code>markets?</code> | <code>string</code> | Comma-separated, at most 20: market keys raw serves. Raw's keys: keyless `/v2/coverage`'s `markets.raw`. Unknown is 400 `unknown_market` with `valid` (raw's keys) and, when another product carries it, `products`. Keeps venues quoting one of them, and only those markets. Outside your account's scope for this product: 403 `market_not_in_plan` with `valid`; left out, trimmed to the scope. |
| <code>eventIds?</code> | <code>string</code> | Comma-separated, at most 50 event ids. Narrows the page, not the query: a page pays its share of the same call without `eventIds`. |
| <code>commenceTimeFrom?</code> | <code>string</code> | Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400. |
| <code>commenceTimeTo?</code> | <code>string</code> | Events kicking off at or before this ISO-8601 instant (no offset = UTC). |
| <code>updatedSince?</code> | <code>string</code> | Exactly `YYYY-MM-DDTHH:MM:SSZ` (any other form is 400). Keeps venues whose `last_update` is at or after it, and the events holding one. The bulk way to follow raw: a recent `updatedSince` pays a reduced share (`/v2/pricing` `recent`). |
| <code>exchangesOnly?</code> | <code>[ExchangesOnly](src/models/exchanges-only.ts)</code> | `true`: exchanges only. `true` or `false`, else 400. |
| <code>includeLinks?</code> | <code>[IncludeLinks](src/models/include-links.ts)</code> | `true`: each venue's `link` (its primary event page; left out when it has none). Default `false`. `true` or `false`, else 400.<br>**Default**: "false" |
| <code>includeLiquidity?</code> | <code>[IncludeLiquidity](src/models/include-liquidity.ts)</code> | `false`: leave out `available` beside an exchange's `lay_price`. Default `true`. `true` or `false`, else 400.<br>**Default**: "true" |
| <code>cursor?</code> | <code>string</code> | The previous page's `meta.next_cursor` (or `X-Next-Cursor`). A cursor is bound to no account and expires 300 s after it was issued: 400 `cursor expired: start again from the first page`; any other shape 400 `cursor not recognised: start again from the first page`. |
| <code>limit?</code> | <code>number</code> | Events per page, 1-250 (default and maximum 250). Anything else is 400. |
| <code>quote?</code> | <code>string</code> | `true` (also `1`, `yes`, `on`): price this exact request instead of serving it. 200 `{cost, remaining, rate_card}`, free, every check before the price still applies; any other value is an ordinary request. |
| <code>acceptEncoding</code> | <code>string</code> | Send `gzip`; with curl, `--compressed` sends it and decompresses the reply. The raw board answers a request that refuses gzip (`identity` alone, as Python's `urllib` sends by default, or `gzip;q=0` or `*;q=0`) with 400 `bad_request`, message `add Accept-Encoding: gzip; with curl use --compressed`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.odds.getRawBoard(request)`

- **OnSuccess**: <code>[V2OddsRawResponse](src/models/unions/v2-odds-raw-response.ts)</code>
- **OnError**: throws <code>[Odds.GetRawBoardError](src/resources/odds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.odds.getRawBoard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2OddsRawResponse, Odds.GetRawBoardError&gt;</code>, with `result.value` of type <code>[V2OddsRawResponse](src/models/unions/v2-odds-raw-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRawEvent(request: Odds.GetRawEventRequest, options?: RequestOptions): ApiPromise&lt;V2OddsEventResponse, Odds.GetRawEventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One raw event by id, every venue (a plan with a bookmaker list sees those venues and the region's exchanges; an account scope sees its raw venue list and markets only, no exchange added). Checks: the key and scope as raw, the parameters and their values, the raw board (503 `raw_not_enabled`), the id (404 `unknown_event`), the event's sport in your account's raw scope (403 `sport_not_in_plan`), `quote=true`, the price (402). The price is the whole event's, whatever the scope cuts. Priced by the event's share of the region's raw prices. Gzip unless refused (over 1 kB).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.odds.getRawEvent({ id: "or_evt_da71d5873e85", region: "uk", quote: "true" });
  // TODO: Handle 'response' of type V2OddsEventResponse
} catch (err) {
  // TODO: Handle 'err' of type Odds.GetRawEventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.odds
  .getRawEvent({ id: "or_evt_da71d5873e85", region: "uk", quote: "true" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2OddsEventResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | An event id (`or_evt_…`) from raw, a matched board or `/v2/events`. Not on the raw board now is 404 `unknown_event`. |
| <code>region?</code> | <code>string</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`. |
| <code>oddsFormat?</code> | <code>[OddsFormat](src/models/odds-format.ts)</code> | `decimal` (default) or `american` (a signed integer; null for a price at or below 1.0). `standard` and `dutching` serve decimal only: anything else is 400.<br>**Default**: "decimal" |
| <code>dateFormat?</code> | <code>[DateFormat](src/models/date-format.ts)</code> | `iso` (default, ISO-8601 UTC) or `unix` (integer epoch seconds) for `commence_time`, `processed_at` and `last_update`. `standard` and `dutching` serve iso only: anything else is 400.<br>**Default**: "iso" |
| <code>includeLinks?</code> | <code>[IncludeLinks](src/models/include-links.ts)</code> | `true`: each venue's `link` (its primary event page; left out when it has none). Default `false`. `true` or `false`, else 400.<br>**Default**: "false" |
| <code>includeLiquidity?</code> | <code>[IncludeLiquidity](src/models/include-liquidity.ts)</code> | `false`: leave out `available` beside an exchange's `lay_price`. Default `true`. `true` or `false`, else 400.<br>**Default**: "true" |
| <code>quote?</code> | <code>string</code> | `true` (also `1`, `yes`, `on`): price this exact request instead of serving it. 200 `{cost, remaining, rate_card}`, free, every check before the price still applies; any other value is an ordinary request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.odds.getRawEvent(request)`

- **OnSuccess**: <code>[V2OddsEventResponse](src/models/unions/v2-odds-event-response.ts)</code>
- **OnError**: throws <code>[Odds.GetRawEventError](src/resources/odds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.odds.getRawEvent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2OddsEventResponse, Odds.GetRawEventError&gt;</code>, with `result.value` of type <code>[V2OddsEventResponse](src/models/unions/v2-odds-event-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Service

> Source: [Service](src/resources/service.ts)

<details>
<summary><code>getCoverage(request?: Service.GetCoverageRequest, options?: RequestOptions): ApiPromise&lt;V2CoverageResponse, Service.GetCoverageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One document per region, in two views. **Keyless** (no `Authorization` and no `x-api-key` header): per product, each (venue, sport) `live` or `interrupted_24h`, no counts and no times, then `markets`: per product, the market keys it carries, each one a value its `markets` filter takes now; the per-address shield only; `Cache-Control: public, max-age=60` and `Vary: Authorization, X-Api-Key, Accept-Encoding` on a 200; `Access-Control-Allow-Origin: *` on every reply, refusals and errors included. **Keyed** (either header present, even empty: an invalid key is 401): your key's products the region serves, venues with rows now, their `events` and `last_seen`; on an account with a scope, only its products and, per product, the venues and sports it admits (markets are not applied: the document has no market grain; a scope that cannot be applied is 503 `temporarily_unavailable`); free; the flood cap applies. Both: `region` missing means `uk`, gzip over 1 kB unless refused, 503 until the first document is built.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.service.getCoverage({ region: "uk" });
  // TODO: Handle 'response' of type V2CoverageResponse
} catch (err) {
  // TODO: Handle 'err' of type Service.GetCoverageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.service.getCoverage({ region: "uk" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2CoverageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region?</code> | <code>string</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.service.getCoverage(request)`

- **OnSuccess**: <code>[V2CoverageResponse](src/models/unions/v2-coverage-response.ts)</code>
- **OnError**: throws <code>[Service.GetCoverageError](src/resources/service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.service.getCoverage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2CoverageResponse, Service.GetCoverageError&gt;</code>, with `result.value` of type <code>[V2CoverageResponse](src/models/unions/v2-coverage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getHealth(options?: RequestOptions): ApiPromise&lt;Health, Service.GetHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Each board's `processed_at`, odds age (`age_s`) and event `count`, and a verdict: `degraded` when a board is past the age bound or cannot be served. Always HTTP 200 whatever the verdict. Free. Plain JSON.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.service.getHealth();
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type Service.GetHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.service.getHealth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.service.getHealth()`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[Service.GetHealthError](src/resources/service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.service.getHealth().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, Service.GetHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveness(options?: RequestOptions): ApiPromise&lt;string, Service.GetLivenessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Is the service up. KEYLESS and before every other check. `text/plain`, `Cache-Control: no-store`: the first line is `ok` (200) or `warming` (503), then how many boards can be served and any that cannot. Liveness only: board freshness is `/v2/health` and `/v2/status`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.service.getLiveness();
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Service.GetLivenessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.service.getLiveness().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.service.getLiveness()`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Service.GetLivenessError](src/resources/service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.service.getLiveness().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Service.GetLivenessError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOpenApi(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Service.GetOpenApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This OpenAPI document. KEYLESS: the per-address shield only, a key header is ignored, no token is spent. `ETag` is its SHA-256 (`-gz` on the gzip copy); 304 on a match; gzip unless refused; `Cache-Control: public, max-age=300`; `Access-Control-Allow-Origin: *` on every reply, refusals and errors included. Takes no parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.service.getOpenApi();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Service.GetOpenApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.service.getOpenApi().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.service.getOpenApi()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Service.GetOpenApiError](src/resources/service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.service.getOpenApi().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Service.GetOpenApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStatus(request?: Service.GetStatusRequest, options?: RequestOptions): ApiPromise&lt;StatusOddsRelayServiceApi, Service.GetStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per product the region serves: `ok`, `slow` or `stale`, judged on each board's odds age (not servable or not held is `stale`). While boards warm every product reads `stale` in a 200. KEYLESS: the per-address shield only, a key header is ignored, no token is spent. `Cache-Control: public, max-age=10` on a 200; `Access-Control-Allow-Origin: *` on every reply, refusals and errors included. Plain JSON (never gzip).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.service.getStatus({ region: "uk" });
  // TODO: Handle 'response' of type StatusOddsRelayServiceApi
} catch (err) {
  // TODO: Handle 'err' of type Service.GetStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.service.getStatus({ region: "uk" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusOddsRelayServiceApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>region?</code> | <code>string</code> | ONE lowercase region code (`/v2/regions` lists yours). Missing means `uk`: on a data route only when your key covers `uk`, else 400 `region_required` naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 `bad_request`; an unknown code, or one with no live bookmaker here, is 404 `unknown_region`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.service.getStatus(request)`

- **OnSuccess**: <code>[StatusOddsRelayServiceApi](src/models/status-odds-relay-service-api.ts)</code>
- **OnError**: throws <code>[Service.GetStatusError](src/resources/service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.service.getStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusOddsRelayServiceApi, Service.GetStatusError&gt;</code>, with `result.value` of type <code>[StatusOddsRelayServiceApi](src/models/status-odds-relay-service-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[OddsRelayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

