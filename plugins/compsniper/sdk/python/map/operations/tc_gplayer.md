<!-- Generated file — do not edit; regenerated with the SDK. -->

# TcGplayer — operations

Accessor: `client.tc_gplayer` · Source: `comp_sniper/apis/tc_gplayer.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tc_gplayer.get_v1_tcgplayer_listings

- **Route**: `GET /v1/tcgplayer/listings`
- **Auth**: `bearer_auth`
- **Signature**: `def get_v1_tcgplayer_listings(*, keyword: str | None = None, product_id: int | None = None, page: int | None = 1, count: int | None = 25, condition: str | None = None, variant: str | None = None, language: str | None = None, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `keyword` — query · `product_id` — query `productId` · `page` — query · `count` — query · `condition` — query · `variant` — query · `language` — query · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1TcgplayerListingsResponse`
- **Returns (raw)**: `ApiResult[V1TcgplayerListingsResponse, GetV1TcgplayerListingsErrorBody]`
- **Error**: `GetV1TcgplayerListingsErrorBody` — **Case A (typed)**
- **Error arms**: `V1TcgplayerListings400Error1` [400] · `V1TcgplayerListings401Error1` [401] · `V1TcgplayerListings429Error1` [429] · `V1TcgplayerListings502Error1` [502] · `V1TcgplayerListings503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1TcgplayerListingsResponse` | `comp_sniper/models/v1_tcgplayer_listings_response.py` |
| `GetV1TcgplayerListingsErrorBody` | `comp_sniper/errors/get_v1_tcgplayer_listings_error.py` |
| `V1TcgplayerListings400Error1` | `comp_sniper/models/v1_tcgplayer_listings400_error1.py` |
| `V1TcgplayerListings401Error1` | `comp_sniper/models/v1_tcgplayer_listings401_error1.py` |
| `V1TcgplayerListings429Error1` | `comp_sniper/models/v1_tcgplayer_listings429_error1.py` |
| `V1TcgplayerListings502Error1` | `comp_sniper/models/v1_tcgplayer_listings502_error1.py` |
| `V1TcgplayerListings503Error1` | `comp_sniper/models/v1_tcgplayer_listings503_error1.py` |

### client.tc_gplayer.get_v1_tcgplayer_sold

- **Route**: `GET /v1/tcgplayer/sold`
- **Auth**: `bearer_auth`
- **Signature**: `def get_v1_tcgplayer_sold(*, keyword: str | None = None, product_id: int | None = None, count: int | None = 100, condition: str | None = None, variant: str | None = None, language: str | None = None, history: HistoryOrStr | None = History.NONE, sold_after: Date | None = None, sold_before: Date | None = None, fresh: bool | None = False, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `keyword` — query · `product_id` — query `productId` · `count` — query · `condition` — query · `variant` — query · `language` — query · `history` — query · `sold_after` — query `soldAfter` · `sold_before` — query `soldBefore` · `fresh` — query · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1TcgplayerSoldResponse`
- **Returns (raw)**: `ApiResult[V1TcgplayerSoldResponse, GetV1TcgplayerSoldErrorBody]`
- **Error**: `GetV1TcgplayerSoldErrorBody` — **Case A (typed)**
- **Error arms**: `V1TcgplayerSold400Error1` [400] · `V1TcgplayerSold401Error1` [401] · `V1TcgplayerSold429Error1` [429] · `V1TcgplayerSold502Error1` [502] · `V1TcgplayerSold503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HistoryOrStr` | `comp_sniper/models/enums/history.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1TcgplayerSoldResponse` | `comp_sniper/models/v1_tcgplayer_sold_response.py` |
| `GetV1TcgplayerSoldErrorBody` | `comp_sniper/errors/get_v1_tcgplayer_sold_error.py` |
| `V1TcgplayerSold400Error1` | `comp_sniper/models/v1_tcgplayer_sold400_error1.py` |
| `V1TcgplayerSold401Error1` | `comp_sniper/models/v1_tcgplayer_sold401_error1.py` |
| `V1TcgplayerSold429Error1` | `comp_sniper/models/v1_tcgplayer_sold429_error1.py` |
| `V1TcgplayerSold502Error1` | `comp_sniper/models/v1_tcgplayer_sold502_error1.py` |
| `V1TcgplayerSold503Error1` | `comp_sniper/models/v1_tcgplayer_sold503_error1.py` |

