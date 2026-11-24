<!-- Generated file — do not edit; regenerated with the SDK. -->

# Astrology — operations

Accessor: `client.Astrology` · Source: `src/ApiVerve/Api/Astrology.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Chinesezodiac

- **Auth**: `options.ApiKey`
- **Signature**: `Chinesezodiac(ChinesezodiacRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Date`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `V1ChinesezodiacResponse`
- **Error**: `ApiException<ChinesezodiacError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChinesezodiacRequest` | `src/ApiVerve/Requests/Astrology/ChinesezodiacRequest.cs` |
| `V1ChinesezodiacResponse` | `src/ApiVerve/Models/V1ChinesezodiacResponse.cs` |
| `ChinesezodiacError` | `src/ApiVerve/Errors/ChinesezodiacError.cs` |

### Horoscope

- **Auth**: `options.ApiKey`
- **Signature**: `Horoscope(HoroscopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Sign`
- **Query params (wire ← C#)**: `sign` ← `Sign`
- **Returns**: `V1HoroscopeResponse`
- **Error**: `ApiException<HoroscopeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HoroscopeRequest` | `src/ApiVerve/Requests/Astrology/HoroscopeRequest.cs` |
| `V1HoroscopeResponse` | `src/ApiVerve/Models/V1HoroscopeResponse.cs` |
| `HoroscopeError` | `src/ApiVerve/Errors/HoroscopeError.cs` |

### Moonphases

- **Auth**: `options.ApiKey`
- **Signature**: `Moonphases(MoonphasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `today` ← `Today`
- **Returns**: `V1MoonphasesResponse`
- **Error**: `ApiException<MoonphasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MoonphasesRequest` | `src/ApiVerve/Requests/Astrology/MoonphasesRequest.cs` |
| `V1MoonphasesResponse` | `src/ApiVerve/Models/V1MoonphasesResponse.cs` |
| `MoonphasesError` | `src/ApiVerve/Errors/MoonphasesError.cs` |

### Moonposition

- **Auth**: `options.ApiKey`
- **Signature**: `Moonposition(MoonpositionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`, `date` ← `Date`, `time` ← `Time`, `timezone` ← `Timezone`
- **Returns**: `V1MoonpositionResponse`
- **Error**: `ApiException<MoonpositionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MoonpositionRequest` | `src/ApiVerve/Requests/Astrology/MoonpositionRequest.cs` |
| `V1MoonpositionResponse` | `src/ApiVerve/Models/V1MoonpositionResponse.cs` |
| `MoonpositionError` | `src/ApiVerve/Errors/MoonpositionError.cs` |

### Planetpositions

- **Auth**: `options.ApiKey`
- **Signature**: `Planetpositions(PlanetpositionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1PlanetpositionsResponse`
- **Error**: `ApiException<PlanetpositionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PlanetpositionsRequest` | `src/ApiVerve/Requests/Astrology/PlanetpositionsRequest.cs` |
| `V1PlanetpositionsRequest` | `src/ApiVerve/Models/V1PlanetpositionsRequest.cs` |
| `V1PlanetpositionsResponse` | `src/ApiVerve/Models/V1PlanetpositionsResponse.cs` |
| `PlanetpositionsError` | `src/ApiVerve/Errors/PlanetpositionsError.cs` |

### Sunposition

- **Auth**: `options.ApiKey`
- **Signature**: `Sunposition(SunpositionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`, `date` ← `Date`, `time` ← `Time`, `timezone` ← `Timezone`
- **Returns**: `V1SunpositionResponse`
- **Error**: `ApiException<SunpositionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SunpositionRequest` | `src/ApiVerve/Requests/Astrology/SunpositionRequest.cs` |
| `V1SunpositionResponse` | `src/ApiVerve/Models/V1SunpositionResponse.cs` |
| `SunpositionError` | `src/ApiVerve/Errors/SunpositionError.cs` |

