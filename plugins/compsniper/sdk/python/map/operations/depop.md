<!-- Generated file — do not edit; regenerated with the SDK. -->

# Depop — operations

Accessor: `client.depop` · Source: `comp_sniper/apis/depop.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.depop.get_v1_depop_listings

- **Route**: `GET /v1/depop/listings`
- **Auth**: `bearer_auth`
- **Signature**: `def get_v1_depop_listings(keyword: str, *, country: CountryOrStr | None = Country.US, count: int | None = 24, cursor: str | None = None, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`
- **Params**: `keyword` — query · `country` — query · `count` — query · `cursor` — query · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1DepopListingsResponse`
- **Returns (raw)**: `ApiResult[V1DepopListingsResponse, GetV1DepopListingsErrorBody]`
- **Error**: `GetV1DepopListingsErrorBody` — **Case A (typed)**
- **Error arms**: `V1DepopListings400Error1` [400] · `V1DepopListings401Error1` [401] · `V1DepopListings429Error1` [429] · `V1DepopListings502Error1` [502] · `V1DepopListings503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CountryOrStr` | `comp_sniper/models/enums/country.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1DepopListingsResponse` | `comp_sniper/models/v1_depop_listings_response.py` |
| `GetV1DepopListingsErrorBody` | `comp_sniper/errors/get_v1_depop_listings_error.py` |
| `V1DepopListings400Error1` | `comp_sniper/models/v1_depop_listings400_error1.py` |
| `V1DepopListings401Error1` | `comp_sniper/models/v1_depop_listings401_error1.py` |
| `V1DepopListings429Error1` | `comp_sniper/models/v1_depop_listings429_error1.py` |
| `V1DepopListings502Error1` | `comp_sniper/models/v1_depop_listings502_error1.py` |
| `V1DepopListings503Error1` | `comp_sniper/models/v1_depop_listings503_error1.py` |

