<!-- Generated file — do not edit; regenerated with the SDK. -->

# Poshmark — operations

Accessor: `client.poshmark` · Source: `comp_sniper/apis/poshmark.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.poshmark.search_poshmark_sold

- **Route**: `GET /v1/poshmark/sold`
- **Auth**: `bearer_auth`
- **Signature**: `def search_poshmark_sold(keyword: str, *, page: int | None = 1, min_price: float | None = None, max_price: float | None = None, department: DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None = DepartmentCompSniperMarketplaceAndShippingPoshmarkApi.ALL, condition: ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None = ConditionCompSniperMarketplaceAndShippingPoshmarkApi.ALL, brand: str | None = None, sort_by: SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr | None = SortByCompSniperMarketplaceAndShippingPoshmarkApi.SOLD_RECENTLY, enrich: EnrichOrStr | None = Enrich.FALSE, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`
- **Params**: `keyword` — query · `page` — query · `min_price` — query `minPrice` · `max_price` — query `maxPrice` · `department` — query · `condition` — query · `brand` — query · `sort_by` — query `sortBy` · `enrich` — query · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1PoshmarkSoldResponse`
- **Returns (raw)**: `ApiResult[V1PoshmarkSoldResponse, SearchPoshmarkSoldErrorBody]`
- **Error**: `SearchPoshmarkSoldErrorBody` — **Case A (typed)**
- **Error arms**: `V1PoshmarkSold400Error1` [400] · `V1PoshmarkSold401Error1` [401] · `V1PoshmarkSoldResponse12` [429] · `V1PoshmarkSold500Error1` [500] · `V1PoshmarkSold502Error1` [502] · `V1PoshmarkSold503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DepartmentCompSniperMarketplaceAndShippingPoshmarkApiOrStr` | `comp_sniper/models/enums/department_comp_sniper_marketplace_and_shipping_poshmark_api.py` |
| `ConditionCompSniperMarketplaceAndShippingPoshmarkApiOrStr` | `comp_sniper/models/enums/condition_comp_sniper_marketplace_and_shipping_poshmark_api.py` |
| `SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr` | `comp_sniper/models/enums/sort_by_comp_sniper_marketplace_and_shipping_poshmark_api.py` |
| `EnrichOrStr` | `comp_sniper/models/enums/enrich.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1PoshmarkSoldResponse` | `comp_sniper/models/v1_poshmark_sold_response.py` |
| `SearchPoshmarkSoldErrorBody` | `comp_sniper/errors/search_poshmark_sold_error.py` |
| `V1PoshmarkSold400Error1` | `comp_sniper/models/v1_poshmark_sold400_error1.py` |
| `V1PoshmarkSold401Error1` | `comp_sniper/models/v1_poshmark_sold401_error1.py` |
| `V1PoshmarkSoldResponse12` | `comp_sniper/models/unions/v1_poshmark_sold_response12.py` |
| `V1PoshmarkSold500Error1` | `comp_sniper/models/v1_poshmark_sold500_error1.py` |
| `V1PoshmarkSold502Error1` | `comp_sniper/models/v1_poshmark_sold502_error1.py` |
| `V1PoshmarkSold503Error1` | `comp_sniper/models/v1_poshmark_sold503_error1.py` |

