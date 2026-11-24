<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoldHistory — operations

Accessor: `client.soldHistory` · Source: `src/resources/sold-history.ts` · 1 operation · Request and error types: namespace `SoldHistory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getV1ResearchSold

- **Signature**: `getV1ResearchSold(request: SoldHistory.GetV1ResearchSoldRequest, options?: RequestOptions): ApiPromise<V1ResearchSoldResponse, SoldHistory.GetV1ResearchSoldError>`
- **Wire**: `GET /v1/research/sold`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ResearchSoldResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `SoldHistory.GetV1ResearchSoldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1ResearchSold400Error1"` [400] `V1ResearchSold400Error1` · `"v1ResearchSold401Error1"` [401] `V1ResearchSold401Error1` · `"v1ResearchSold429Error1"` [429] `V1ResearchSold429Error1` · `"v1ResearchSold502Error1"` [502] `V1ResearchSold502Error1` · `"v1ResearchSold503Error1"` [503] `V1ResearchSold503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoldHistory.GetV1ResearchSoldRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | yes | — |
| `startDate` | `query` | — | `string` (date) | yes | — |
| `endDate` | `query` | — | `string` (date) | yes | — |
| `ebaySite` | `query` | — | `EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi` | no | `EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EbayCom` |
| `sort` | `query` | — | `Sort` | no | `Sort.QuantityAscending` |
| `limit` | `query` | — | `Limit` | no | `Limit._50` |
| `page` | `query` | — | `number` | no | `1` |
| `singleUnitOnly` | `query` | — | `boolean` | no | `false` |
| `allListingSites` | `query` | — | `boolean` | no | `false` |
| `relevance` | `query` | — | `boolean` | no | `false` |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi` | `ebaySiteCompSniperMarketplaceAndShippingSoldHistoryApiSchema` | `src/models/ebay-site-comp-sniper-marketplace-and-shipping-sold-history-api.ts` |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `Limit` | `limitSchema` | `src/models/limit.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1ResearchSoldResponse` | `v1ResearchSoldResponseSchema` | `src/models/v1-research-sold-response.ts` |
| `V1ResearchSold400Error1` | `v1ResearchSold400Error1Schema` | `src/models/v1-research-sold400-error1.ts` |
| `V1ResearchSold401Error1` | `v1ResearchSold401Error1Schema` | `src/models/v1-research-sold401-error1.ts` |
| `V1ResearchSold429Error1` | `v1ResearchSold429Error1Schema` | `src/models/v1-research-sold429-error1.ts` |
| `V1ResearchSold502Error1` | `v1ResearchSold502Error1Schema` | `src/models/v1-research-sold502-error1.ts` |
| `V1ResearchSold503Error1` | `v1ResearchSold503Error1Schema` | `src/models/v1-research-sold503-error1.ts` |

