<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scrape — operations

Accessor: `client.scrape` · Source: `src/resources/scrape.ts` · 6 operations · Request and error types: namespace `Scrape`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### browseSoldListingsByCategory

- **Signature**: `browseSoldListingsByCategory(request: Scrape.BrowseSoldListingsByCategoryRequest, options?: RequestOptions): ApiPromise<ScrapeResponse, Scrape.BrowseSoldListingsByCategoryError>`
- **Wire**: `GET /v1/scrape/category`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScrapeResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Scrape.BrowseSoldListingsByCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [429] `ApiErrorModel` · `"apiErrorModel4"` [502] `ApiErrorModel` · `"apiErrorModel5"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scrape.BrowseSoldListingsByCategoryRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `categoryId` | `query` | — | `string` | yes | — |
| `count` | `query` | — | `number` | no | `240` |
| `page` | `query` | — | `number` | no | `1` |
| `ebaySite` | `query` | — | `EbaySite` | no | `EbaySite.EbayCom` |
| `sortOrder` | `query` | — | `SortOrder` | no | — |
| `itemCondition` | `query` | — | `ItemCondition` | no | — |
| `conditionId` | `query` | — | `number` | no | — |
| `buyingFormat` | `query` | — | `BuyingFormat` | no | — |
| `sellerType` | `query` | — | `SellerType` | no | — |
| `minPrice` | `query` | — | `number` | no | — |
| `maxPrice` | `query` | — | `number` | no | — |
| `aspectFilter` | `query` | — | `string` | no | — |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EbaySite` | `ebaySiteSchema` | `src/models/ebay-site.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ItemCondition` | `itemConditionSchema` | `src/models/item-condition.ts` |
| `BuyingFormat` | `buyingFormatSchema` | `src/models/buying-format.ts` |
| `SellerType` | `sellerTypeSchema` | `src/models/seller-type.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `ScrapeResponse` | `scrapeResponseSchema` | `src/models/scrape-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### cancelMaxSearch

- **Signature**: `cancelMaxSearch(request: Scrape.CancelMaxSearchRequest, options?: RequestOptions): ApiPromise<MaxCancelResponse, Scrape.CancelMaxSearchError>`
- **Wire**: `DELETE /v1/scrape/max/{jobId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MaxCancelResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Scrape.CancelMaxSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scrape.CancelMaxSearchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MaxCancelResponse` | `maxCancelResponseSchema` | `src/models/max-cancel-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### downloadMaxSearchCsv

- **Signature**: `downloadMaxSearchCsv(request: Scrape.DownloadMaxSearchCsvRequest, options?: RequestOptions): ApiPromise<string, Scrape.DownloadMaxSearchCsvError>`
- **Wire**: `GET /v1/scrape/max/{jobId}/download.csv`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Scrape.DownloadMaxSearchCsvError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scrape.DownloadMaxSearchCsvRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |
| `token` | `query` | `string` | yes |

### getMaxSearchResults

- **Signature**: `getMaxSearchResults(request: Scrape.GetMaxSearchResultsRequest, options?: RequestOptions): ApiPromise<MaxJob, Scrape.GetMaxSearchResultsError>`
- **Wire**: `GET /v1/scrape/max/results/{jobId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MaxJob`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Scrape.GetMaxSearchResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scrape.GetMaxSearchResultsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MaxJob` | `maxJobSchema` | `src/models/max-job.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### searchSoldListings

- **Signature**: `searchSoldListings(request: Scrape.SearchSoldListingsRequest, options?: RequestOptions): ApiPromise<ScrapeResponse, Scrape.SearchSoldListingsError>`
- **Wire**: `GET /v1/scrape`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScrapeResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Scrape.SearchSoldListingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [429] `ApiErrorModel` · `"apiErrorModel4"` [502] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scrape.SearchSoldListingsRequest` (22):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `keyword` | `query` | — | `string` | yes | — |
| `count` | `query` | — | `number` | no | `240` |
| `page` | `query` | — | `number` | no | `1` |
| `ebaySite` | `query` | — | `EbaySite` | no | `EbaySite.EbayCom` |
| `categoryId` | `query` | — | `string` | no | `"0"` |
| `sortOrder` | `query` | — | `SortOrder1` | no | — |
| `itemLocation` | `query` | — | `ItemLocation` | no | `ItemLocation.Default` |
| `itemCondition` | `query` | — | `ItemCondition` | no | — |
| `conditionId` | `query` | — | `number` | no | — |
| `buyingFormat` | `query` | — | `BuyingFormat` | no | `BuyingFormat.All` |
| `sellerType` | `query` | — | `SellerType` | no | — |
| `minPrice` | `query` | — | `number` | no | — |
| `maxPrice` | `query` | — | `number` | no | — |
| `includeCompleteListing` | `query` | — | `boolean` | no | `true` |
| `sold` | `query` | — | `boolean` | no | `true` |
| `soldAfter` | `query` | — | `string` (date) | no | — |
| `soldBefore` | `query` | — | `string` (date) | no | — |
| `aspectFilter` | `query` | — | `string` | no | — |
| `exactMatch` | `query` | — | `boolean` | no | `false` |
| `relevance` | `query` | — | `boolean` | no | `true` |
| `bestOfferPrice` | `query` | — | `boolean` | no | `false` |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EbaySite` | `ebaySiteSchema` | `src/models/ebay-site.ts` |
| `SortOrder1` | `sortOrder1Schema` | `src/models/sort-order1.ts` |
| `ItemLocation` | `itemLocationSchema` | `src/models/item-location.ts` |
| `ItemCondition` | `itemConditionSchema` | `src/models/item-condition.ts` |
| `BuyingFormat` | `buyingFormatSchema` | `src/models/buying-format.ts` |
| `SellerType` | `sellerTypeSchema` | `src/models/seller-type.ts` |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `ScrapeResponse` | `scrapeResponseSchema` | `src/models/scrape-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### startMaxSearch

- **Signature**: `startMaxSearch(request: Scrape.StartMaxSearchRequest, options?: RequestOptions): ApiPromise<MaxJobAccepted, Scrape.StartMaxSearchError>`
- **Wire**: `POST /v1/scrape/max`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `MaxJobAccepted`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Scrape.StartMaxSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [409] `ApiErrorModel` · `"apiErrorModel5"` [429] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scrape.StartMaxSearchRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `MaxSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `MaxSearchRequest` | `maxSearchRequestSchema` | `src/models/max-search-request.ts` |
| `MaxJobAccepted` | `maxJobAcceptedSchema` | `src/models/max-job-accepted.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

