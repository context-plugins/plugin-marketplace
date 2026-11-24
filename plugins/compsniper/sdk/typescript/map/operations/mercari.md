<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mercari — operations

Accessor: `client.mercari` · Source: `src/resources/mercari.ts` · 1 operation · Request and error types: namespace `Mercari`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchMercariListings

- **Signature**: `searchMercariListings(request: Mercari.SearchMercariListingsRequest, options?: RequestOptions): ApiPromise<V1MercariResponse, Mercari.SearchMercariListingsError>`
- **Wire**: `GET /v1/mercari`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MercariResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Mercari.SearchMercariListingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1Mercari400Error1"` [400] `V1Mercari400Error1` · `"v1Mercari401Error1"` [401] `V1Mercari401Error1` · `"v1MercariResponse12"` [429] `V1MercariResponse12` · `"v1Mercari500Error1"` [500] `V1Mercari500Error1` · `"v1Mercari502Error1"` [502] `V1Mercari502Error1` · `"apiErrorModel"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Mercari.SearchMercariListingsRequest` (12):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | yes | — |
| `page` | `query` | — | `number` | no | `1` |
| `count` | `query` | — | `number` | no | `100` |
| `sortOrder` | `query` | — | `SortOrderCompSniperMarketplaceAndShippingMercariApi` | no | `SortOrderCompSniperMarketplaceAndShippingMercariApi.BestMatch` |
| `minPrice` | `query` | — | `number` | no | — |
| `maxPrice` | `query` | — | `number` | no | — |
| `itemCondition` | `query` | — | `ItemConditionCompSniperMarketplaceAndShippingMercariApi` | no | `ItemConditionCompSniperMarketplaceAndShippingMercariApi.Any` |
| `categoryId` | `query` | — | `string` | no | — |
| `brandId` | `query` | — | `string` | no | — |
| `sold` | `query` | — | `Sold` | no | `Sold.True` |
| `includeListedAt` | `query` | — | `IncludeListedAt` | no | `IncludeListedAt.False` |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrderCompSniperMarketplaceAndShippingMercariApi` | `sortOrderCompSniperMarketplaceAndShippingMercariApiSchema` | `src/models/sort-order-comp-sniper-marketplace-and-shipping-mercari-api.ts` |
| `ItemConditionCompSniperMarketplaceAndShippingMercariApi` | `itemConditionCompSniperMarketplaceAndShippingMercariApiSchema` | `src/models/item-condition-comp-sniper-marketplace-and-shipping-mercari-api.ts` |
| `Sold` | `soldSchema` | `src/models/sold.ts` |
| `IncludeListedAt` | `includeListedAtSchema` | `src/models/include-listed-at.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `V1MercariResponse` | `v1MercariResponseSchema` | `src/models/v1-mercari-response.ts` |
| `V1Mercari400Error1` | `v1Mercari400Error1Schema` | `src/models/v1-mercari400-error1.ts` |
| `V1Mercari401Error1` | `v1Mercari401Error1Schema` | `src/models/v1-mercari401-error1.ts` |
| `V1MercariResponse12` | `v1MercariResponse12Schema` | `src/models/unions/v1-mercari-response12.ts` |
| `V1Mercari500Error1` | `v1Mercari500Error1Schema` | `src/models/v1-mercari500-error1.ts` |
| `V1Mercari502Error1` | `v1Mercari502Error1Schema` | `src/models/v1-mercari502-error1.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

