<!-- Generated file — do not edit; regenerated with the SDK. -->

# Odds — operations

Accessor: `client.odds` · Source: `src/resources/odds.ts` · 3 operations · Request and error types: namespace `Odds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `odds-relay`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMatchedBoard

- **Signature**: `getMatchedBoard(request: Odds.GetMatchedBoardRequest, options?: RequestOptions): ApiPromise<V2OddsResponse, Odds.GetMatchedBoardError>`
- **Wire**: `GET /v2/odds/{type}`
- **Auth**: any of `bearerAuth`, `apiKeyHeader` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2OddsResponse`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Odds.GetMatchedBoardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"error400OddsRelayDiscoveryApi"` [400] `Error400OddsRelayDiscoveryApi` · `"error401OddsRelayDiscoveryApi"` [401] `Error401OddsRelayDiscoveryApi` · `"error402"` [402] `Error402` · `"error403OddsRelayDiscoveryApi"` [403] `Error403OddsRelayDiscoveryApi` · `"error404"` [404] `Error404` · `"error429OddsRelayDiscoveryApi"` [429] `Error429OddsRelayDiscoveryApi` · `"error500OddsRelayDiscoveryApi"` [500] `Error500OddsRelayDiscoveryApi` · `"error503OddsRelayDiscoveryApi"` [503] `Error503OddsRelayDiscoveryApi` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Odds.GetMatchedBoardRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `type` | `path` | — | `Type1` | yes | — |
| `region` | `query` | — | `string` | no | — |
| `format` | `query` | — | `Format` | no | `Format.Envelope` |
| `oddsFormat` | `query` | — | `OddsFormat` | no | `OddsFormat.Decimal` |
| `dateFormat` | `query` | — | `DateFormat` | no | `DateFormat.Iso` |
| `quote` | `query` | — | `string` | no | — |
| `sports` | `query` | — | `string` | no | — |
| `bookmakers` | `query` | — | `string` | no | — |
| `exchanges` | `query` | — | `string` | no | — |
| `markets` | `query` | — | `string` | no | — |
| `commenceTimeFrom` | `query` | — | `string` | no | — |
| `commenceTimeTo` | `query` | — | `string` | no | — |
| `acceptEncoding` | `header` | `Accept-Encoding` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type1` | `type1Schema` | `src/models/type1.ts` |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `OddsFormat` | `oddsFormatSchema` | `src/models/odds-format.ts` |
| `DateFormat` | `dateFormatSchema` | `src/models/date-format.ts` |
| `V2OddsResponse` | `v2OddsResponseSchema` | `src/models/unions/v2-odds-response.ts` |
| `Error400OddsRelayDiscoveryApi` | `error400OddsRelayDiscoveryApiSchema` | `src/models/error400-odds-relay-discovery-api.ts` |
| `Error401OddsRelayDiscoveryApi` | `error401OddsRelayDiscoveryApiSchema` | `src/models/error401-odds-relay-discovery-api.ts` |
| `Error402` | `error402Schema` | `src/models/error402.ts` |
| `Error403OddsRelayDiscoveryApi` | `error403OddsRelayDiscoveryApiSchema` | `src/models/error403-odds-relay-discovery-api.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error429OddsRelayDiscoveryApi` | `error429OddsRelayDiscoveryApiSchema` | `src/models/error429-odds-relay-discovery-api.ts` |
| `Error500OddsRelayDiscoveryApi` | `error500OddsRelayDiscoveryApiSchema` | `src/models/error500-odds-relay-discovery-api.ts` |
| `Error503OddsRelayDiscoveryApi` | `error503OddsRelayDiscoveryApiSchema` | `src/models/error503-odds-relay-discovery-api.ts` |

### getRawBoard

- **Signature**: `getRawBoard(request: Odds.GetRawBoardRequest, options?: RequestOptions): ApiPromise<V2OddsRawResponse, Odds.GetRawBoardError>`
- **Wire**: `GET /v2/odds/raw`
- **Auth**: any of `bearerAuth`, `apiKeyHeader` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2OddsRawResponse`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Odds.GetRawBoardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"error400OddsRelayDiscoveryApi"` [400] `Error400OddsRelayDiscoveryApi` · `"error401OddsRelayDiscoveryApi"` [401] `Error401OddsRelayDiscoveryApi` · `"error402"` [402] `Error402` · `"error403OddsRelayDiscoveryApi"` [403] `Error403OddsRelayDiscoveryApi` · `"error404"` [404] `Error404` · `"error429OddsRelayDiscoveryApi"` [429] `Error429OddsRelayDiscoveryApi` · `"error500OddsRelayDiscoveryApi"` [500] `Error500OddsRelayDiscoveryApi` · `"error503OddsRelayDiscoveryApi"` [503] `Error503OddsRelayDiscoveryApi` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Odds.GetRawBoardRequest` (21):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `region` | `query` | — | `string` | no | — |
| `format` | `query` | — | `Format` | no | `Format.Envelope` |
| `oddsFormat` | `query` | — | `OddsFormat` | no | `OddsFormat.Decimal` |
| `dateFormat` | `query` | — | `DateFormat` | no | `DateFormat.Iso` |
| `sports` | `query` | — | `string` | no | — |
| `sport` | `query` | — | `string` | no | — |
| `leagues` | `query` | — | `string` | no | — |
| `bookmakers` | `query` | — | `string` | no | — |
| `requireBookmakers` | `query` | — | `string` | no | — |
| `markets` | `query` | — | `string` | no | — |
| `eventIds` | `query` | — | `string` | no | — |
| `commenceTimeFrom` | `query` | — | `string` | no | — |
| `commenceTimeTo` | `query` | — | `string` | no | — |
| `updatedSince` | `query` | — | `string` | no | — |
| `exchangesOnly` | `query` | — | `ExchangesOnly` | no | — |
| `includeLinks` | `query` | — | `IncludeLinks` | no | `IncludeLinks.False` |
| `includeLiquidity` | `query` | — | `IncludeLiquidity` | no | `IncludeLiquidity.True` |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `quote` | `query` | — | `string` | no | — |
| `acceptEncoding` | `header` | `Accept-Encoding` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `OddsFormat` | `oddsFormatSchema` | `src/models/odds-format.ts` |
| `DateFormat` | `dateFormatSchema` | `src/models/date-format.ts` |
| `ExchangesOnly` | `exchangesOnlySchema` | `src/models/exchanges-only.ts` |
| `IncludeLinks` | `includeLinksSchema` | `src/models/include-links.ts` |
| `IncludeLiquidity` | `includeLiquiditySchema` | `src/models/include-liquidity.ts` |
| `V2OddsRawResponse` | `v2OddsRawResponseSchema` | `src/models/unions/v2-odds-raw-response.ts` |
| `Error400OddsRelayDiscoveryApi` | `error400OddsRelayDiscoveryApiSchema` | `src/models/error400-odds-relay-discovery-api.ts` |
| `Error401OddsRelayDiscoveryApi` | `error401OddsRelayDiscoveryApiSchema` | `src/models/error401-odds-relay-discovery-api.ts` |
| `Error402` | `error402Schema` | `src/models/error402.ts` |
| `Error403OddsRelayDiscoveryApi` | `error403OddsRelayDiscoveryApiSchema` | `src/models/error403-odds-relay-discovery-api.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error429OddsRelayDiscoveryApi` | `error429OddsRelayDiscoveryApiSchema` | `src/models/error429-odds-relay-discovery-api.ts` |
| `Error500OddsRelayDiscoveryApi` | `error500OddsRelayDiscoveryApiSchema` | `src/models/error500-odds-relay-discovery-api.ts` |
| `Error503OddsRelayDiscoveryApi` | `error503OddsRelayDiscoveryApiSchema` | `src/models/error503-odds-relay-discovery-api.ts` |

### getRawEvent

- **Signature**: `getRawEvent(request: Odds.GetRawEventRequest, options?: RequestOptions): ApiPromise<V2OddsEventResponse, Odds.GetRawEventError>`
- **Wire**: `GET /v2/odds/event/{id}`
- **Auth**: any of `bearerAuth`, `apiKeyHeader` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2OddsEventResponse`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Odds.GetRawEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"error400OddsRelayDiscoveryApi"` [400] `Error400OddsRelayDiscoveryApi` · `"error401OddsRelayDiscoveryApi"` [401] `Error401OddsRelayDiscoveryApi` · `"error402"` [402] `Error402` · `"error403OddsRelayDiscoveryApi"` [403] `Error403OddsRelayDiscoveryApi` · `"error404"` [404] `Error404` · `"error429OddsRelayDiscoveryApi"` [429] `Error429OddsRelayDiscoveryApi` · `"error500OddsRelayDiscoveryApi"` [500] `Error500OddsRelayDiscoveryApi` · `"error503OddsRelayDiscoveryApi"` [503] `Error503OddsRelayDiscoveryApi` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Odds.GetRawEventRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `region` | `query` | `string` | no | — |
| `oddsFormat` | `query` | `OddsFormat` | no | `OddsFormat.Decimal` |
| `dateFormat` | `query` | `DateFormat` | no | `DateFormat.Iso` |
| `includeLinks` | `query` | `IncludeLinks` | no | `IncludeLinks.False` |
| `includeLiquidity` | `query` | `IncludeLiquidity` | no | `IncludeLiquidity.True` |
| `quote` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OddsFormat` | `oddsFormatSchema` | `src/models/odds-format.ts` |
| `DateFormat` | `dateFormatSchema` | `src/models/date-format.ts` |
| `IncludeLinks` | `includeLinksSchema` | `src/models/include-links.ts` |
| `IncludeLiquidity` | `includeLiquiditySchema` | `src/models/include-liquidity.ts` |
| `V2OddsEventResponse` | `v2OddsEventResponseSchema` | `src/models/unions/v2-odds-event-response.ts` |
| `Error400OddsRelayDiscoveryApi` | `error400OddsRelayDiscoveryApiSchema` | `src/models/error400-odds-relay-discovery-api.ts` |
| `Error401OddsRelayDiscoveryApi` | `error401OddsRelayDiscoveryApiSchema` | `src/models/error401-odds-relay-discovery-api.ts` |
| `Error402` | `error402Schema` | `src/models/error402.ts` |
| `Error403OddsRelayDiscoveryApi` | `error403OddsRelayDiscoveryApiSchema` | `src/models/error403-odds-relay-discovery-api.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error429OddsRelayDiscoveryApi` | `error429OddsRelayDiscoveryApiSchema` | `src/models/error429-odds-relay-discovery-api.ts` |
| `Error500OddsRelayDiscoveryApi` | `error500OddsRelayDiscoveryApiSchema` | `src/models/error500-odds-relay-discovery-api.ts` |
| `Error503OddsRelayDiscoveryApi` | `error503OddsRelayDiscoveryApiSchema` | `src/models/error503-odds-relay-discovery-api.ts` |

