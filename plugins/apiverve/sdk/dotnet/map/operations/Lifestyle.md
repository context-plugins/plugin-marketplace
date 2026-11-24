<!-- Generated file — do not edit; regenerated with the SDK. -->

# Lifestyle — operations

Accessor: `client.Lifestyle` · Source: `src/ApiVerve/Api/Lifestyle.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Duedatecalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Duedatecalculator(DuedatecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LastPeriod`
- **Query params (wire ← C#)**: `last_period` ← `LastPeriod`
- **Returns**: `V1DuedatecalculatorResponse`
- **Error**: `ApiException<DuedatecalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DuedatecalculatorRequest` | `src/ApiVerve/Requests/Lifestyle/DuedatecalculatorRequest.cs` |
| `V1DuedatecalculatorResponse` | `src/ApiVerve/Models/V1DuedatecalculatorResponse.cs` |
| `DuedatecalculatorError` | `src/ApiVerve/Errors/DuedatecalculatorError.cs` |

### Menstrualcycle

- **Auth**: `options.ApiKey`
- **Signature**: `Menstrualcycle(MenstrualcycleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LastPeriod`
- **Query params (wire ← C#)**: `last_period` ← `LastPeriod`, `cycle_length` ← `CycleLength`, `period_length` ← `PeriodLength`, `cycles` ← `Cycles`
- **Returns**: `V1MenstrualcycleResponse`
- **Error**: `ApiException<MenstrualcycleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MenstrualcycleRequest` | `src/ApiVerve/Requests/Lifestyle/MenstrualcycleRequest.cs` |
| `V1MenstrualcycleResponse` | `src/ApiVerve/Models/V1MenstrualcycleResponse.cs` |
| `MenstrualcycleError` | `src/ApiVerve/Errors/MenstrualcycleError.cs` |

### Ovulationcalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Ovulationcalculator(OvulationcalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LastPeriod`
- **Query params (wire ← C#)**: `last_period` ← `LastPeriod`, `cycle_length` ← `CycleLength`
- **Returns**: `V1OvulationcalculatorResponse`
- **Error**: `ApiException<OvulationcalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OvulationcalculatorRequest` | `src/ApiVerve/Requests/Lifestyle/OvulationcalculatorRequest.cs` |
| `V1OvulationcalculatorResponse` | `src/ApiVerve/Models/V1OvulationcalculatorResponse.cs` |
| `OvulationcalculatorError` | `src/ApiVerve/Errors/OvulationcalculatorError.cs` |

