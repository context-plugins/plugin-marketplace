<!-- Generated file — do not edit; regenerated with the SDK. -->

# Summary — operations

Accessor: `client.summary` · Source: `src/resources/summary.ts` · 1 operation · Request and error types: namespace `Summary`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPriceSummary

- **Signature**: `getPriceSummary(request: Summary.GetPriceSummaryRequest, options?: RequestOptions): ApiPromise<SummaryResponse, Summary.GetPriceSummaryError>`
- **Wire**: `GET /v1/summary`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummaryResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Summary.GetPriceSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [429] `ApiErrorModel` · `"apiErrorModel5"` [502] `ApiErrorModel` · `"apiErrorModel6"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Summary.GetPriceSummaryRequest` (18):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | yes | — |
| `count` | `query` | — | `number` | no | `240` |
| `page` | `query` | — | `number` | no | `1` |
| `ebaySite` | `query` | — | `EbaySite` | no | `EbaySite.EbayCom` |
| `categoryId` | `query` | — | `string` | no | — |
| `sortOrder` | `query` | — | `SortOrder` | no | — |
| `minPrice` | `query` | — | `number` | no | — |
| `maxPrice` | `query` | — | `number` | no | — |
| `itemCondition` | `query` | — | `ItemCondition` | no | — |
| `conditionId` | `query` | — | `number` | no | — |
| `buyingFormat` | `query` | — | `BuyingFormat` | no | — |
| `sellerType` | `query` | — | `SellerType` | no | — |
| `soldAfter` | `query` | — | `string` (date) | no | — |
| `soldBefore` | `query` | — | `string` (date) | no | — |
| `aspectFilter` | `query` | — | `string` | no | — |
| `exactMatch` | `query` | — | `boolean` | no | `false` |
| `relevance` | `query` | — | `boolean` | no | `true` |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EbaySite` | `ebaySiteSchema` | `src/models/ebay-site.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ItemCondition` | `itemConditionSchema` | `src/models/item-condition.ts` |
| `BuyingFormat` | `buyingFormatSchema` | `src/models/buying-format.ts` |
| `SellerType` | `sellerTypeSchema` | `src/models/seller-type.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `SummaryResponse` | `summaryResponseSchema` | `src/models/summary-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

