<!-- Generated file — do not edit; regenerated with the SDK. -->

# BestOfferPrices — operations

Accessor: `client.bestOfferPrices` · Source: `src/resources/best-offer-prices.ts` · 1 operation · Request and error types: namespace `BestOfferPrices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBestOfferPrices

- **Signature**: `getBestOfferPrices(request: BestOfferPrices.GetBestOfferPricesRequest, options?: RequestOptions): ApiPromise<V1BestOfferPricesResponse, BestOfferPrices.GetBestOfferPricesError>`
- **Wire**: `GET /v1/best-offer-prices`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BestOfferPricesResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `BestOfferPrices.GetBestOfferPricesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BestOfferPrices.GetBestOfferPricesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `itemIds` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BestOfferPricesResponse` | `v1BestOfferPricesResponseSchema` | `src/models/v1-best-offer-prices-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

