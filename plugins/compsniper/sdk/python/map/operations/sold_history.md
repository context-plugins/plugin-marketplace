<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoldHistory — operations

Accessor: `client.sold_history` · Source: `comp_sniper/apis/sold_history.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sold_history.get_v1_research_sold

- **Route**: `GET /v1/research/sold`
- **Auth**: `bearer_auth`
- **Signature**: `def get_v1_research_sold(keyword: str, start_date: Date, end_date: Date, *, ebay_site: EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr | None = EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi.EBAY_COM, sort: SortOrStr | None = Sort.QUANTITY_ASCENDING, limit: LimitOrInt | None = Limit.VALUE_50, page: int | None = 1, single_unit_only: bool | None = False, all_listing_sites: bool | None = False, relevance: bool | None = False, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`, `start_date`, `end_date`
- **Params**: `keyword` — query · `start_date` — query `startDate` · `end_date` — query `endDate` · `ebay_site` — query `ebaySite` · `sort` — query · `limit` — query · `page` — query · `single_unit_only` — query `singleUnitOnly` · `all_listing_sites` — query `allListingSites` · `relevance` — query · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1ResearchSoldResponse`
- **Returns (raw)**: `ApiResult[V1ResearchSoldResponse, GetV1ResearchSoldErrorBody]`
- **Error**: `GetV1ResearchSoldErrorBody` — **Case A (typed)**
- **Error arms**: `V1ResearchSold400Error1` [400] · `V1ResearchSold401Error1` [401] · `V1ResearchSold429Error1` [429] · `V1ResearchSold502Error1` [502] · `V1ResearchSold503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr` | `comp_sniper/models/enums/ebay_site_comp_sniper_marketplace_and_shipping_sold_history_api.py` |
| `SortOrStr` | `comp_sniper/models/enums/sort.py` |
| `LimitOrInt` | `comp_sniper/models/enums/limit.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1ResearchSoldResponse` | `comp_sniper/models/v1_research_sold_response.py` |
| `GetV1ResearchSoldErrorBody` | `comp_sniper/errors/get_v1_research_sold_error.py` |
| `V1ResearchSold400Error1` | `comp_sniper/models/v1_research_sold400_error1.py` |
| `V1ResearchSold401Error1` | `comp_sniper/models/v1_research_sold401_error1.py` |
| `V1ResearchSold429Error1` | `comp_sniper/models/v1_research_sold429_error1.py` |
| `V1ResearchSold502Error1` | `comp_sniper/models/v1_research_sold502_error1.py` |
| `V1ResearchSold503Error1` | `comp_sniper/models/v1_research_sold503_error1.py` |

