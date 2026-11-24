<!-- Generated file — do not edit; regenerated with the SDK. -->

# Grailed — operations

Accessor: `client.grailed` · Source: `comp_sniper/apis/grailed.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.grailed.get_v1_grailed_listings

- **Route**: `GET /v1/grailed/listings`
- **Auth**: `bearer_auth`
- **Signature**: `def get_v1_grailed_listings(keyword: str, *, department: DepartmentOrStr | None = Department.ANY, condition: ConditionOrStr | None = Condition.ANY, min_price: float | None = None, max_price: float | None = None, count: int | None = 40, page: int | None = 1, sort_by: SortBy1OrStr | None = SortBy1.DEFAULT, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`
- **Params**: `keyword` — query · `department` — query · `condition` — query · `min_price` — query `minPrice` · `max_price` — query `maxPrice` · `count` — query · `page` — query · `sort_by` — query `sortBy` · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1GrailedListingsResponse`
- **Returns (raw)**: `ApiResult[V1GrailedListingsResponse, GetV1GrailedListingsErrorBody]`
- **Error**: `GetV1GrailedListingsErrorBody` — **Case A (typed)**
- **Error arms**: `V1GrailedListings400Error1` [400] · `V1GrailedListings401Error1` [401] · `V1GrailedListings429Error1` [429] · `V1GrailedListings502Error1` [502] · `V1GrailedListings503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DepartmentOrStr` | `comp_sniper/models/enums/department.py` |
| `ConditionOrStr` | `comp_sniper/models/enums/condition.py` |
| `SortBy1OrStr` | `comp_sniper/models/enums/sort_by1.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1GrailedListingsResponse` | `comp_sniper/models/v1_grailed_listings_response.py` |
| `GetV1GrailedListingsErrorBody` | `comp_sniper/errors/get_v1_grailed_listings_error.py` |
| `V1GrailedListings400Error1` | `comp_sniper/models/v1_grailed_listings400_error1.py` |
| `V1GrailedListings401Error1` | `comp_sniper/models/v1_grailed_listings401_error1.py` |
| `V1GrailedListings429Error1` | `comp_sniper/models/v1_grailed_listings429_error1.py` |
| `V1GrailedListings502Error1` | `comp_sniper/models/v1_grailed_listings502_error1.py` |
| `V1GrailedListings503Error1` | `comp_sniper/models/v1_grailed_listings503_error1.py` |

### client.grailed.get_v1_grailed_sold

- **Route**: `GET /v1/grailed/sold`
- **Auth**: `bearer_auth`
- **Signature**: `def get_v1_grailed_sold(keyword: str, *, department: DepartmentOrStr | None = Department.ANY, condition: ConditionOrStr | None = Condition.ANY, min_price: float | None = None, max_price: float | None = None, count: int | None = 40, page: int | None = 1, sort_by: SortByOrStr | None = SortBy.RECENT, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`
- **Params**: `keyword` — query · `department` — query · `condition` — query · `min_price` — query `minPrice` · `max_price` — query `maxPrice` · `count` — query · `page` — query · `sort_by` — query `sortBy` · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1GrailedSoldResponse`
- **Returns (raw)**: `ApiResult[V1GrailedSoldResponse, GetV1GrailedSoldErrorBody]`
- **Error**: `GetV1GrailedSoldErrorBody` — **Case A (typed)**
- **Error arms**: `V1GrailedSold400Error1` [400] · `V1GrailedSold401Error1` [401] · `V1GrailedSold429Error1` [429] · `V1GrailedSold502Error1` [502] · `V1GrailedSold503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DepartmentOrStr` | `comp_sniper/models/enums/department.py` |
| `ConditionOrStr` | `comp_sniper/models/enums/condition.py` |
| `SortByOrStr` | `comp_sniper/models/enums/sort_by.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1GrailedSoldResponse` | `comp_sniper/models/v1_grailed_sold_response.py` |
| `GetV1GrailedSoldErrorBody` | `comp_sniper/errors/get_v1_grailed_sold_error.py` |
| `V1GrailedSold400Error1` | `comp_sniper/models/v1_grailed_sold400_error1.py` |
| `V1GrailedSold401Error1` | `comp_sniper/models/v1_grailed_sold401_error1.py` |
| `V1GrailedSold429Error1` | `comp_sniper/models/v1_grailed_sold429_error1.py` |
| `V1GrailedSold502Error1` | `comp_sniper/models/v1_grailed_sold502_error1.py` |
| `V1GrailedSold503Error1` | `comp_sniper/models/v1_grailed_sold503_error1.py` |

