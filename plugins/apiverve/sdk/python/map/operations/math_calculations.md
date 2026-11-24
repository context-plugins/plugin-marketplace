<!-- Generated file — do not edit; regenerated with the SDK. -->

# MathCalculations — operations

Accessor: `client.math_calculations` · Source: `api_verve/apis/math_calculations.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.math_calculations.colorsimilarity

- **Route**: `GET /v1/colorsimilarity`
- **Auth**: `api_key`
- **Signature**: `def colorsimilarity(color1: str, color2: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `color1`, `color2`
- **Params**: `color1` — query · `color2` — query
- **Returns (parsed)**: `V1ColorsimilarityResponse`
- **Returns (raw)**: `ApiResult[V1ColorsimilarityResponse, ColorsimilarityErrorBody]`
- **Error**: `ColorsimilarityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ColorsimilarityResponse` | `api_verve/models/v1_colorsimilarity_response.py` |
| `ColorsimilarityErrorBody` | `api_verve/errors/colorsimilarity_error.py` |

### client.math_calculations.daylightduration

- **Route**: `GET /v1/daylightduration`
- **Auth**: `api_key`
- **Signature**: `def daylightduration(latitude: float, longitude: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `latitude`, `longitude`
- **Params**: `latitude` — query · `longitude` — query · `date` — query
- **Returns (parsed)**: `V1DaylightdurationResponse`
- **Returns (raw)**: `ApiResult[V1DaylightdurationResponse, DaylightdurationErrorBody]`
- **Error**: `DaylightdurationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DaylightdurationResponse` | `api_verve/models/v1_daylightduration_response.py` |
| `DaylightdurationErrorBody` | `api_verve/errors/daylightduration_error.py` |

### client.math_calculations.fibonaccigenerator

- **Route**: `GET /v1/fibonaccigenerator`
- **Auth**: `api_key`
- **Signature**: `def fibonaccigenerator(count: int, *, startfrom: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `count`
- **Params**: `count` — query · `startfrom` — query
- **Returns (parsed)**: `V1FibonaccigeneratorResponse`
- **Returns (raw)**: `ApiResult[V1FibonaccigeneratorResponse, FibonaccigeneratorErrorBody]`
- **Error**: `FibonaccigeneratorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1FibonaccigeneratorResponse` | `api_verve/models/v1_fibonaccigenerator_response.py` |
| `FibonaccigeneratorErrorBody` | `api_verve/errors/fibonaccigenerator_error.py` |

### client.math_calculations.permutationcombination

- **Route**: `GET /v1/permutationcombination`
- **Auth**: `api_key`
- **Signature**: `def permutationcombination(n: int, r: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `n`, `r`
- **Params**: `n` — query · `r` — query
- **Returns (parsed)**: `V1PermutationcombinationResponse`
- **Returns (raw)**: `ApiResult[V1PermutationcombinationResponse, PermutationcombinationErrorBody]`
- **Error**: `PermutationcombinationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PermutationcombinationResponse` | `api_verve/models/v1_permutationcombination_response.py` |
| `PermutationcombinationErrorBody` | `api_verve/errors/permutationcombination_error.py` |

### client.math_calculations.romannumeralmath

- **Route**: `GET /v1/romannumeralmath`
- **Auth**: `api_key`
- **Signature**: `def romannumeralmath(roman1: str, roman2: str, *, operation: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `roman1`, `roman2`
- **Params**: `roman1` — query · `roman2` — query · `operation` — query
- **Returns (parsed)**: `V1RomannumeralmathResponse`
- **Returns (raw)**: `ApiResult[V1RomannumeralmathResponse, RomannumeralmathErrorBody]`
- **Error**: `RomannumeralmathErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RomannumeralmathResponse` | `api_verve/models/v1_romannumeralmath_response.py` |
| `RomannumeralmathErrorBody` | `api_verve/errors/romannumeralmath_error.py` |

### client.math_calculations.tipcalculator

- **Route**: `GET /v1/tipcalculator`
- **Auth**: `api_key`
- **Signature**: `def tipcalculator(amount: float, *, percentage: float | None = None, people: int | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `amount`
- **Params**: `amount` — query · `percentage` — query · `people` — query · `currency` — query
- **Returns (parsed)**: `V1TipcalculatorResponse`
- **Returns (raw)**: `ApiResult[V1TipcalculatorResponse, TipcalculatorErrorBody]`
- **Error**: `TipcalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TipcalculatorResponse` | `api_verve/models/v1_tipcalculator_response.py` |
| `TipcalculatorErrorBody` | `api_verve/errors/tipcalculator_error.py` |

### client.math_calculations.truthtable

- **Route**: `GET /v1/truthtable`
- **Auth**: `api_key`
- **Signature**: `def truthtable(expression: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `expression`
- **Params**: `expression` — query
- **Returns (parsed)**: `V1TruthtableResponse`
- **Returns (raw)**: `ApiResult[V1TruthtableResponse, TruthtableErrorBody]`
- **Error**: `TruthtableErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TruthtableResponse` | `api_verve/models/v1_truthtable_response.py` |
| `TruthtableErrorBody` | `api_verve/errors/truthtable_error.py` |

### client.math_calculations.utmconverter

- **Route**: `GET /v1/utmconverter`
- **Auth**: `api_key`
- **Signature**: `def utmconverter(latitude: float, longitude: float, *, direction: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `latitude`, `longitude`
- **Params**: `latitude` — query · `longitude` — query · `direction` — query
- **Returns (parsed)**: `V1UtmconverterResponse`
- **Returns (raw)**: `ApiResult[V1UtmconverterResponse, UtmconverterErrorBody]`
- **Error**: `UtmconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UtmconverterResponse` | `api_verve/models/v1_utmconverter_response.py` |
| `UtmconverterErrorBody` | `api_verve/errors/utmconverter_error.py` |

