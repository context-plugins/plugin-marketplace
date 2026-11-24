<!-- Generated file — do not edit; regenerated with the SDK. -->

# MathCalculations — operations

Accessor: `client.MathCalculations` · Source: `src/ApiVerve/Api/MathCalculations.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Colorsimilarity

- **Auth**: `options.ApiKey`
- **Signature**: `Colorsimilarity(ColorsimilarityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Color1`, `Color2`
- **Query params (wire ← C#)**: `color1` ← `Color1`, `color2` ← `Color2`
- **Returns**: `V1ColorsimilarityResponse`
- **Error**: `ApiException<ColorsimilarityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ColorsimilarityRequest` | `src/ApiVerve/Requests/MathCalculations/ColorsimilarityRequest.cs` |
| `V1ColorsimilarityResponse` | `src/ApiVerve/Models/V1ColorsimilarityResponse.cs` |
| `ColorsimilarityError` | `src/ApiVerve/Errors/ColorsimilarityError.cs` |

### Daylightduration

- **Auth**: `options.ApiKey`
- **Signature**: `Daylightduration(DaylightdurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Latitude`, `Longitude`
- **Query params (wire ← C#)**: `latitude` ← `Latitude`, `longitude` ← `Longitude`, `date` ← `Date`
- **Returns**: `V1DaylightdurationResponse`
- **Error**: `ApiException<DaylightdurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DaylightdurationRequest` | `src/ApiVerve/Requests/MathCalculations/DaylightdurationRequest.cs` |
| `V1DaylightdurationResponse` | `src/ApiVerve/Models/V1DaylightdurationResponse.cs` |
| `DaylightdurationError` | `src/ApiVerve/Errors/DaylightdurationError.cs` |

### Fibonaccigenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Fibonaccigenerator(FibonaccigeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Count`
- **Query params (wire ← C#)**: `count` ← `Count`, `startfrom` ← `Startfrom`
- **Returns**: `V1FibonaccigeneratorResponse`
- **Error**: `ApiException<FibonaccigeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FibonaccigeneratorRequest` | `src/ApiVerve/Requests/MathCalculations/FibonaccigeneratorRequest.cs` |
| `V1FibonaccigeneratorResponse` | `src/ApiVerve/Models/V1FibonaccigeneratorResponse.cs` |
| `FibonaccigeneratorError` | `src/ApiVerve/Errors/FibonaccigeneratorError.cs` |

### Permutationcombination

- **Auth**: `options.ApiKey`
- **Signature**: `Permutationcombination(PermutationcombinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `N`, `R`
- **Query params (wire ← C#)**: `n` ← `N`, `r` ← `R`
- **Returns**: `V1PermutationcombinationResponse`
- **Error**: `ApiException<PermutationcombinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PermutationcombinationRequest` | `src/ApiVerve/Requests/MathCalculations/PermutationcombinationRequest.cs` |
| `V1PermutationcombinationResponse` | `src/ApiVerve/Models/V1PermutationcombinationResponse.cs` |
| `PermutationcombinationError` | `src/ApiVerve/Errors/PermutationcombinationError.cs` |

### Romannumeralmath

- **Auth**: `options.ApiKey`
- **Signature**: `Romannumeralmath(RomannumeralmathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Roman1`, `Roman2`
- **Query params (wire ← C#)**: `roman1` ← `Roman1`, `roman2` ← `Roman2`, `operation` ← `Operation`
- **Returns**: `V1RomannumeralmathResponse`
- **Error**: `ApiException<RomannumeralmathError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RomannumeralmathRequest` | `src/ApiVerve/Requests/MathCalculations/RomannumeralmathRequest.cs` |
| `V1RomannumeralmathResponse` | `src/ApiVerve/Models/V1RomannumeralmathResponse.cs` |
| `RomannumeralmathError` | `src/ApiVerve/Errors/RomannumeralmathError.cs` |

### Tipcalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Tipcalculator(TipcalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Amount`
- **Query params (wire ← C#)**: `amount` ← `Amount`, `percentage` ← `Percentage`, `people` ← `People`, `currency` ← `Currency`
- **Returns**: `V1TipcalculatorResponse`
- **Error**: `ApiException<TipcalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TipcalculatorRequest` | `src/ApiVerve/Requests/MathCalculations/TipcalculatorRequest.cs` |
| `V1TipcalculatorResponse` | `src/ApiVerve/Models/V1TipcalculatorResponse.cs` |
| `TipcalculatorError` | `src/ApiVerve/Errors/TipcalculatorError.cs` |

### Truthtable

- **Auth**: `options.ApiKey`
- **Signature**: `Truthtable(TruthtableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Expression`
- **Query params (wire ← C#)**: `expression` ← `Expression`
- **Returns**: `V1TruthtableResponse`
- **Error**: `ApiException<TruthtableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TruthtableRequest` | `src/ApiVerve/Requests/MathCalculations/TruthtableRequest.cs` |
| `V1TruthtableResponse` | `src/ApiVerve/Models/V1TruthtableResponse.cs` |
| `TruthtableError` | `src/ApiVerve/Errors/TruthtableError.cs` |

### Utmconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Utmconverter(UtmconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Latitude`, `Longitude`
- **Query params (wire ← C#)**: `latitude` ← `Latitude`, `longitude` ← `Longitude`, `direction` ← `Direction`
- **Returns**: `V1UtmconverterResponse`
- **Error**: `ApiException<UtmconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UtmconverterRequest` | `src/ApiVerve/Requests/MathCalculations/UtmconverterRequest.cs` |
| `V1UtmconverterResponse` | `src/ApiVerve/Models/V1UtmconverterResponse.cs` |
| `UtmconverterError` | `src/ApiVerve/Errors/UtmconverterError.cs` |

