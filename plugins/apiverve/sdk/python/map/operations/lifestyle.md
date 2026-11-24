<!-- Generated file — do not edit; regenerated with the SDK. -->

# Lifestyle — operations

Accessor: `client.lifestyle` · Source: `api_verve/apis/lifestyle.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.lifestyle.duedatecalculator

- **Route**: `GET /v1/duedatecalculator`
- **Auth**: `api_key`
- **Signature**: `def duedatecalculator(last_period: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `last_period`
- **Params**: `last_period` — query
- **Returns (parsed)**: `V1DuedatecalculatorResponse`
- **Returns (raw)**: `ApiResult[V1DuedatecalculatorResponse, DuedatecalculatorErrorBody]`
- **Error**: `DuedatecalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DuedatecalculatorResponse` | `api_verve/models/v1_duedatecalculator_response.py` |
| `DuedatecalculatorErrorBody` | `api_verve/errors/duedatecalculator_error.py` |

### client.lifestyle.menstrualcycle

- **Route**: `GET /v1/menstrualcycle`
- **Auth**: `api_key`
- **Signature**: `def menstrualcycle(last_period: str, *, cycle_length: int | None = None, period_length: int | None = None, cycles: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `last_period`
- **Params**: `last_period` — query · `cycle_length` — query · `period_length` — query · `cycles` — query
- **Returns (parsed)**: `V1MenstrualcycleResponse`
- **Returns (raw)**: `ApiResult[V1MenstrualcycleResponse, MenstrualcycleErrorBody]`
- **Error**: `MenstrualcycleErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MenstrualcycleResponse` | `api_verve/models/v1_menstrualcycle_response.py` |
| `MenstrualcycleErrorBody` | `api_verve/errors/menstrualcycle_error.py` |

### client.lifestyle.ovulationcalculator

- **Route**: `GET /v1/ovulationcalculator`
- **Auth**: `api_key`
- **Signature**: `def ovulationcalculator(last_period: str, *, cycle_length: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `last_period`
- **Params**: `last_period` — query · `cycle_length` — query
- **Returns (parsed)**: `V1OvulationcalculatorResponse`
- **Returns (raw)**: `ApiResult[V1OvulationcalculatorResponse, OvulationcalculatorErrorBody]`
- **Error**: `OvulationcalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OvulationcalculatorResponse` | `api_verve/models/v1_ovulationcalculator_response.py` |
| `OvulationcalculatorErrorBody` | `api_verve/errors/ovulationcalculator_error.py` |

