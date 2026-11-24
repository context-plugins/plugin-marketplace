<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tenders — operations

Accessor: `client.tenders` · Source: `compabase/apis/tenders.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tenders.get_tenders

- **Route**: `GET /tenders`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_tenders(*, status: StatusOrStr | None = None, industry: str | None = None, source: SourceOrStr | None = None, region: str | None = None, city: str | None = None, postal: str | None = None, kind: KindOrStr | None = None, value_min: float | None = None, value_max: float | None = None, currency: CurrencyOrStr | None = None, limit: LimitOrInt | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `industry` — query · `source` — query · `region` — query · `city` — query · `postal` — query · `kind` — query · `value_min` — query · `value_max` — query · `currency` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetTendersErrorBody]`
- **Error**: `GetTendersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusOrStr` | `compabase/models/enums/status.py` |
| `SourceOrStr` | `compabase/models/enums/source.py` |
| `KindOrStr` | `compabase/models/enums/kind.py` |
| `CurrencyOrStr` | `compabase/models/enums/currency.py` |
| `LimitOrInt` | `compabase/models/enums/limit.py` |
| `GetTendersErrorBody` | `compabase/errors/get_tenders_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.tenders.get_tenders_awards

- **Route**: `GET /tenders/awards`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_tenders_awards(*, industry: IndustryOrStr | None = None, min_: MinOrInt | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `industry` — query · `min_` — query `min`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetTendersAwardsErrorBody]`
- **Error**: `GetTendersAwardsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IndustryOrStr` | `compabase/models/enums/industry.py` |
| `MinOrInt` | `compabase/models/enums/min.py` |
| `GetTendersAwardsErrorBody` | `compabase/errors/get_tenders_awards_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

