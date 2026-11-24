<!-- Generated file — do not edit; regenerated with the SDK. -->

# Options — operations

Accessor: `client.options` · Source: `upstox/apis/options.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.options.get_option_contracts

- **Route**: `GET /v2/option/contract`
- **Auth**: `oauth2`
- **Signature**: `def get_option_contracts(instrument_key: str, *, expiry_date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`
- **Params**: `instrument_key` — query · `expiry_date` — query
- **Returns (parsed)**: `GetOptionContractResponse`
- **Returns (raw)**: `ApiResult[GetOptionContractResponse, GetOptionContractsErrorBody]`
- **Error**: `GetOptionContractsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetOptionContractResponse` | `upstox/models/get_option_contract_response.py` |
| `GetOptionContractsErrorBody` | `upstox/errors/get_option_contracts_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.options.get_put_call_option_chain

- **Route**: `GET /v2/option/chain`
- **Auth**: `oauth2`
- **Signature**: `def get_put_call_option_chain(instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`, `expiry_date`
- **Params**: `instrument_key` — query · `expiry_date` — query
- **Returns (parsed)**: `GetOptionChainResponse`
- **Returns (raw)**: `ApiResult[GetOptionChainResponse, GetPutCallOptionChainErrorBody]`
- **Error**: `GetPutCallOptionChainErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetOptionChainResponse` | `upstox/models/get_option_chain_response.py` |
| `GetPutCallOptionChainErrorBody` | `upstox/errors/get_put_call_option_chain_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

