<!-- Generated file — do not edit; regenerated with the SDK. -->

# Psa — operations

Accessor: `client.psa` · Source: `comp_sniper/apis/psa.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.psa.get_psa_card

- **Route**: `GET /v1/psa/card`
- **Auth**: `bearer_auth`
- **Signature**: `def get_psa_card(*, spec_id: str | None = None, keyword: str | None = None, count: int | None = 10, time_range: int | None = 0, grade: str | None = None, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `spec_id` — query `specId` · `keyword` — query · `count` — query · `time_range` — query `timeRange` · `grade` — query · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1PsaCardResponse`
- **Returns (raw)**: `ApiResult[V1PsaCardResponse, GetPsaCardErrorBody]`
- **Error**: `GetPsaCardErrorBody` — **Case A (typed)**
- **Error arms**: `V1PsaCard400Error1` [400] · `V1PsaCard401Error1` [401] · `V1PsaCard404Error1` [404] · `V1PsaCard429Error1` [429] · `V1PsaCard502Error1` [502] · `V1PsaCard503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1PsaCardResponse` | `comp_sniper/models/v1_psa_card_response.py` |
| `GetPsaCardErrorBody` | `comp_sniper/errors/get_psa_card_error.py` |
| `V1PsaCard400Error1` | `comp_sniper/models/v1_psa_card400_error1.py` |
| `V1PsaCard401Error1` | `comp_sniper/models/v1_psa_card401_error1.py` |
| `V1PsaCard404Error1` | `comp_sniper/models/v1_psa_card404_error1.py` |
| `V1PsaCard429Error1` | `comp_sniper/models/v1_psa_card429_error1.py` |
| `V1PsaCard502Error1` | `comp_sniper/models/v1_psa_card502_error1.py` |
| `V1PsaCard503Error1` | `comp_sniper/models/v1_psa_card503_error1.py` |

### client.psa.get_psa_set_population

- **Route**: `GET /v1/psa/set`
- **Auth**: `bearer_auth`
- **Signature**: `def get_psa_set_population(*, heading_id: str | None = None, url: str | None = None, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `heading_id` — query `headingId` · `url` — query · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1PsaSetResponse`
- **Returns (raw)**: `ApiResult[V1PsaSetResponse, GetPsaSetPopulationErrorBody]`
- **Error**: `GetPsaSetPopulationErrorBody` — **Case A (typed)**
- **Error arms**: `V1PsaSet400Error1` [400] · `V1PsaSet401Error1` [401] · `V1PsaSet429Error1` [429] · `V1PsaSet502Error1` [502] · `V1PsaSet503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1PsaSetResponse` | `comp_sniper/models/v1_psa_set_response.py` |
| `GetPsaSetPopulationErrorBody` | `comp_sniper/errors/get_psa_set_population_error.py` |
| `V1PsaSet400Error1` | `comp_sniper/models/v1_psa_set400_error1.py` |
| `V1PsaSet401Error1` | `comp_sniper/models/v1_psa_set401_error1.py` |
| `V1PsaSet429Error1` | `comp_sniper/models/v1_psa_set429_error1.py` |
| `V1PsaSet502Error1` | `comp_sniper/models/v1_psa_set502_error1.py` |
| `V1PsaSet503Error1` | `comp_sniper/models/v1_psa_set503_error1.py` |

### client.psa.list_psa_sets

- **Route**: `GET /v1/psa/sets`
- **Auth**: `bearer_auth`
- **Signature**: `def list_psa_sets(*, game: GameOrStr | None = None, keyword: str | None = None, year: str | None = None, count: int | None = 25, page: int | None = 1, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `game` — query · `keyword` — query · `year` — query · `count` — query · `page` — query · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1PsaSetsResponse`
- **Returns (raw)**: `ApiResult[V1PsaSetsResponse, ListPsaSetsErrorBody]`
- **Error**: `ListPsaSetsErrorBody` — **Case A (typed)**
- **Error arms**: `V1PsaSets400Error1` [400] · `V1PsaSets401Error1` [401] · `V1PsaSets429Error1` [429] · `V1PsaSets502Error1` [502] · `V1PsaSets503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GameOrStr` | `comp_sniper/models/enums/game.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1PsaSetsResponse` | `comp_sniper/models/v1_psa_sets_response.py` |
| `ListPsaSetsErrorBody` | `comp_sniper/errors/list_psa_sets_error.py` |
| `V1PsaSets400Error1` | `comp_sniper/models/v1_psa_sets400_error1.py` |
| `V1PsaSets401Error1` | `comp_sniper/models/v1_psa_sets401_error1.py` |
| `V1PsaSets429Error1` | `comp_sniper/models/v1_psa_sets429_error1.py` |
| `V1PsaSets502Error1` | `comp_sniper/models/v1_psa_sets502_error1.py` |
| `V1PsaSets503Error1` | `comp_sniper/models/v1_psa_sets503_error1.py` |

### client.psa.search_psa_cards

- **Route**: `GET /v1/psa/search`
- **Auth**: `bearer_auth`
- **Signature**: `def search_psa_cards(keyword: str, *, count: int | None = 10, page: int | None = 1, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`
- **Params**: `keyword` — query · `count` — query · `page` — query · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1PsaSearchResponse`
- **Returns (raw)**: `ApiResult[V1PsaSearchResponse, SearchPsaCardsErrorBody]`
- **Error**: `SearchPsaCardsErrorBody` — **Case A (typed)**
- **Error arms**: `V1PsaSearch400Error1` [400] · `V1PsaSearch401Error1` [401] · `V1PsaSearch429Error1` [429] · `V1PsaSearch502Error1` [502] · `V1PsaSearch503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1PsaSearchResponse` | `comp_sniper/models/v1_psa_search_response.py` |
| `SearchPsaCardsErrorBody` | `comp_sniper/errors/search_psa_cards_error.py` |
| `V1PsaSearch400Error1` | `comp_sniper/models/v1_psa_search400_error1.py` |
| `V1PsaSearch401Error1` | `comp_sniper/models/v1_psa_search401_error1.py` |
| `V1PsaSearch429Error1` | `comp_sniper/models/v1_psa_search429_error1.py` |
| `V1PsaSearch502Error1` | `comp_sniper/models/v1_psa_search502_error1.py` |
| `V1PsaSearch503Error1` | `comp_sniper/models/v1_psa_search503_error1.py` |

