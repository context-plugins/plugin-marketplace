<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transportation — operations

Accessor: `client.Transportation` · Source: `src/ApiVerve/Api/Transportation.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Airlinelookup

- **Auth**: `options.ApiKey`
- **Signature**: `Airlinelookup(AirlinelookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Iata`
- **Query params (wire ← C#)**: `iata` ← `Iata`
- **Returns**: `V1AirlinelookupResponse`
- **Error**: `ApiException<AirlinelookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AirlinelookupRequest` | `src/ApiVerve/Requests/Transportation/AirlinelookupRequest.cs` |
| `V1AirlinelookupResponse` | `src/ApiVerve/Models/V1AirlinelookupResponse.cs` |
| `AirlinelookupError` | `src/ApiVerve/Errors/AirlinelookupError.cs` |

### Airportcodeconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Airportcodeconverter(AirportcodeconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Code`
- **Query params (wire ← C#)**: `code` ← `Code`
- **Returns**: `V1AirportcodeconverterResponse`
- **Error**: `ApiException<AirportcodeconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AirportcodeconverterRequest` | `src/ApiVerve/Requests/Transportation/AirportcodeconverterRequest.cs` |
| `V1AirportcodeconverterResponse` | `src/ApiVerve/Models/V1AirportcodeconverterResponse.cs` |
| `AirportcodeconverterError` | `src/ApiVerve/Errors/AirportcodeconverterError.cs` |

### Airportdistance

- **Auth**: `options.ApiKey`
- **Signature**: `Airportdistance(AirportdistanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Iata1`, `Iata2`
- **Query params (wire ← C#)**: `iata1` ← `Iata1`, `iata2` ← `Iata2`
- **Returns**: `V1AirportdistanceResponse`
- **Error**: `ApiException<AirportdistanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AirportdistanceRequest` | `src/ApiVerve/Requests/Transportation/AirportdistanceRequest.cs` |
| `V1AirportdistanceResponse` | `src/ApiVerve/Models/V1AirportdistanceResponse.cs` |
| `AirportdistanceError` | `src/ApiVerve/Errors/AirportdistanceError.cs` |

### Airports

- **Auth**: `options.ApiKey`
- **Signature**: `Airports(AirportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Iata`
- **Query params (wire ← C#)**: `iata` ← `Iata`
- **Returns**: `V1AirportsResponse`
- **Error**: `ApiException<AirportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AirportsRequest` | `src/ApiVerve/Requests/Transportation/AirportsRequest.cs` |
| `V1AirportsResponse` | `src/ApiVerve/Models/V1AirportsResponse.cs` |
| `AirportsError` | `src/ApiVerve/Errors/AirportsError.cs` |

### Carmodels

- **Auth**: `options.ApiKey`
- **Signature**: `Carmodels(CarmodelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Make`
- **Query params (wire ← C#)**: `make` ← `Make`, `year` ← `Year`, `model` ← `Model`, `trim` ← `Trim`
- **Returns**: `V1CarmodelsResponse`
- **Error**: `ApiException<CarmodelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CarmodelsRequest` | `src/ApiVerve/Requests/Transportation/CarmodelsRequest.cs` |
| `V1CarmodelsResponse` | `src/ApiVerve/Models/V1CarmodelsResponse.cs` |
| `CarmodelsError` | `src/ApiVerve/Errors/CarmodelsError.cs` |

### Vindecoder

- **Auth**: `options.ApiKey`
- **Signature**: `Vindecoder(VindecoderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Vin`
- **Query params (wire ← C#)**: `vin` ← `Vin`
- **Returns**: `V1VindecoderResponse`
- **Error**: `ApiException<VindecoderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VindecoderRequest` | `src/ApiVerve/Requests/Transportation/VindecoderRequest.cs` |
| `V1VindecoderResponse` | `src/ApiVerve/Models/V1VindecoderResponse.cs` |
| `VindecoderError` | `src/ApiVerve/Errors/VindecoderError.cs` |

