<!-- Generated file — do not edit; regenerated with the SDK. -->

# Science — operations

Accessor: `client.Science` · Source: `src/ApiVerve/Api/Science.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Julianday

- **Auth**: `options.ApiKey`
- **Signature**: `Julianday(JuliandayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Date`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `V1JuliandayResponse`
- **Error**: `ApiException<JuliandayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JuliandayRequest` | `src/ApiVerve/Requests/Science/JuliandayRequest.cs` |
| `V1JuliandayResponse` | `src/ApiVerve/Models/V1JuliandayResponse.cs` |
| `JuliandayError` | `src/ApiVerve/Errors/JuliandayError.cs` |

### Meteorites

- **Auth**: `options.ApiKey`
- **Signature**: `Meteorites(MeteoritesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`, `mass` ← `Mass`, `year` ← `Year`
- **Returns**: `V1MeteoritesResponse`
- **Error**: `ApiException<MeteoritesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MeteoritesRequest` | `src/ApiVerve/Requests/Science/MeteoritesRequest.cs` |
| `V1MeteoritesResponse` | `src/ApiVerve/Models/V1MeteoritesResponse.cs` |
| `MeteoritesError` | `src/ApiVerve/Errors/MeteoritesError.cs` |

### Periodictable

- **Auth**: `options.ApiKey`
- **Signature**: `Periodictable(PeriodictableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `V1PeriodictableResponse`
- **Error**: `ApiException<PeriodictableError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PeriodictableRequest` | `src/ApiVerve/Requests/Science/PeriodictableRequest.cs` |
| `V1PeriodictableResponse` | `src/ApiVerve/Models/V1PeriodictableResponse.cs` |
| `PeriodictableError` | `src/ApiVerve/Errors/PeriodictableError.cs` |

### Starslookup

- **Auth**: `options.ApiKey`
- **Signature**: `Starslookup(StarslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `V1StarslookupResponse`
- **Error**: `ApiException<StarslookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StarslookupRequest` | `src/ApiVerve/Requests/Science/StarslookupRequest.cs` |
| `V1StarslookupResponse` | `src/ApiVerve/Models/V1StarslookupResponse.cs` |
| `StarslookupError` | `src/ApiVerve/Errors/StarslookupError.cs` |

