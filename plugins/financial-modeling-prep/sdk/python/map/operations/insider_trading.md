<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsiderTrading — operations

Accessor: `client.insider_trading` · Source: `financial_modeling_prep/apis/insider_trading.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.insider_trading.get_insider_trading

- **Route**: `GET /insider-trading`
- **Auth**: `api_key_query`
- **Signature**: `def get_insider_trading(*, symbol: str | None = None, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `symbol` — query · `limit` — query
- **Returns (parsed)**: `list[Any]`
- **Returns (raw)**: `ApiResult[list[Any], RawError]`
- **Error**: `RawError` — **Case B**

