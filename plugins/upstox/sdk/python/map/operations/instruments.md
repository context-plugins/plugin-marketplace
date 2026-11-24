<!-- Generated file — do not edit; regenerated with the SDK. -->

# Instruments — operations

Accessor: `client.instruments` · Source: `upstox/apis/instruments.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.instruments.search_instrument

- **Route**: `GET /v2/instruments/search`
- **Auth**: `oauth2`
- **Signature**: `def search_instrument(query: str, *, exchanges: str | None = None, segments: str | None = None, instrument_types: str | None = None, expiry: str | None = None, atm_offset: int | None = None, page_number: int | None = 1, records: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `query`
- **Params**: `query` — query · `exchanges` — query · `segments` — query · `instrument_types` — query · `expiry` — query · `atm_offset` — query · `page_number` — query · `records` — query
- **Returns (parsed)**: `SearchInstrumentResponse`
- **Returns (raw)**: `ApiResult[SearchInstrumentResponse, SearchInstrumentErrorBody]`
- **Error**: `SearchInstrumentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchInstrumentResponse` | `upstox/models/search_instrument_response.py` |
| `SearchInstrumentErrorBody` | `upstox/errors/search_instrument_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

