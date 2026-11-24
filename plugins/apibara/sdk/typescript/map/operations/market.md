<!-- Generated file — do not edit; regenerated with the SDK. -->

# Market — operations

Accessor: `client.market` · Source: `src/resources/market.ts` · 1 operation · Request and error types: namespace `Market`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### marketSoldPriceStats

- **Signature**: `marketSoldPriceStats(request: Market.MarketSoldPriceStatsRequest, options?: RequestOptions): ApiPromise<MarketSoldPriceStatsResponse, Market.MarketSoldPriceStatsError>`
- **Wire**: `GET /market/sold-prices`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarketSoldPriceStatsResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `Market.MarketSoldPriceStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Market.MarketSoldPriceStatsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `make` | `query` | — | `string` | yes |
| `model` | `query` | — | `string` | no |
| `year` | `query` | — | `number` | no |
| `damage` | `query` | — | `string` | no |
| `auction` | `query` | — | `Auction` | no |
| `saleDateFrom` | `query` | `sale_date_from` | `string` (date) | no |
| `saleDateTo` | `query` | `sale_date_to` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Auction` | `auctionSchema` | `src/models/auction.ts` |
| `MarketSoldPriceStatsResponse` | `marketSoldPriceStatsResponseSchema` | `src/models/market-sold-price-stats-response.ts` |

