<!-- Generated file — do not edit; regenerated with the SDK. -->

# Geography — operations

Accessor: `client.Geography` · Source: `src/ApiVerve/Api/Geography.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Citieslookup

- **Auth**: `options.ApiKey`
- **Signature**: `Citieslookup(CitieslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `City`
- **Query params (wire ← C#)**: `city` ← `City`, `limit` ← `Limit`
- **Returns**: `V1CitieslookupResponse`
- **Error**: `ApiException<CitieslookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CitieslookupRequest` | `src/ApiVerve/Requests/Geography/CitieslookupRequest.cs` |
| `V1CitieslookupResponse` | `src/ApiVerve/Models/V1CitieslookupResponse.cs` |
| `CitieslookupError` | `src/ApiVerve/Errors/CitieslookupError.cs` |

### Coordinatesaresea

- **Auth**: `options.ApiKey`
- **Signature**: `Coordinatesaresea(CoordinatesareseaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`
- **Returns**: `V1CoordinatesareseaResponse`
- **Error**: `ApiException<CoordinatesareseaError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CoordinatesareseaRequest` | `src/ApiVerve/Requests/Geography/CoordinatesareseaRequest.cs` |
| `V1CoordinatesareseaResponse` | `src/ApiVerve/Models/V1CoordinatesareseaResponse.cs` |
| `CoordinatesareseaError` | `src/ApiVerve/Errors/CoordinatesareseaError.cs` |

### Countryborders

- **Auth**: `options.ApiKey`
- **Signature**: `Countryborders(CountrybordersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`
- **Returns**: `V1CountrybordersResponse`
- **Error**: `ApiException<CountrybordersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountrybordersRequest` | `src/ApiVerve/Requests/Geography/CountrybordersRequest.cs` |
| `V1CountrybordersResponse` | `src/ApiVerve/Models/V1CountrybordersResponse.cs` |
| `CountrybordersError` | `src/ApiVerve/Errors/CountrybordersError.cs` |

### Countryboundaries

- **Auth**: `options.ApiKey`
- **Signature**: `Countryboundaries(CountryboundariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`
- **Returns**: `V1CountryboundariesResponse`
- **Error**: `ApiException<CountryboundariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountryboundariesRequest` | `src/ApiVerve/Requests/Geography/CountryboundariesRequest.cs` |
| `V1CountryboundariesResponse` | `src/ApiVerve/Models/V1CountryboundariesResponse.cs` |
| `CountryboundariesError` | `src/ApiVerve/Errors/CountryboundariesError.cs` |

### Countryflags

- **Auth**: `options.ApiKey`
- **Signature**: `Countryflags(CountryflagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`, `Format`, `Shape`
- **Query params (wire ← C#)**: `country` ← `Country`, `format` ← `Format`, `shape` ← `Shape`
- **Returns**: `V1CountryflagsResponse`
- **Error**: `ApiException<CountryflagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountryflagsRequest` | `src/ApiVerve/Requests/Geography/CountryflagsRequest.cs` |
| `V1CountryflagsResponse` | `src/ApiVerve/Models/V1CountryflagsResponse.cs` |
| `CountryflagsError` | `src/ApiVerve/Errors/CountryflagsError.cs` |

### Countrylanguages

- **Auth**: `options.ApiKey`
- **Signature**: `Countrylanguages(CountrylanguagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`
- **Returns**: `V1CountrylanguagesResponse`
- **Error**: `ApiException<CountrylanguagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountrylanguagesRequest` | `src/ApiVerve/Requests/Geography/CountrylanguagesRequest.cs` |
| `V1CountrylanguagesResponse` | `src/ApiVerve/Models/V1CountrylanguagesResponse.cs` |
| `CountrylanguagesError` | `src/ApiVerve/Errors/CountrylanguagesError.cs` |

### Countrylookup

- **Auth**: `options.ApiKey`
- **Signature**: `Countrylookup(CountrylookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `majorcities` ← `Majorcities`
- **Returns**: `V1CountrylookupResponse`
- **Error**: `ApiException<CountrylookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountrylookupRequest` | `src/ApiVerve/Requests/Geography/CountrylookupRequest.cs` |
| `V1CountrylookupResponse` | `src/ApiVerve/Models/V1CountrylookupResponse.cs` |
| `CountrylookupError` | `src/ApiVerve/Errors/CountrylookupError.cs` |

### Countydata

- **Auth**: `options.ApiKey`
- **Signature**: `Countydata(CountydataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `State`, `County`
- **Query params (wire ← C#)**: `state` ← `State`, `county` ← `County`
- **Returns**: `V1CountydataResponse`
- **Error**: `ApiException<CountydataError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountydataRequest` | `src/ApiVerve/Requests/Geography/CountydataRequest.cs` |
| `V1CountydataResponse` | `src/ApiVerve/Models/V1CountydataResponse.cs` |
| `CountydataError` | `src/ApiVerve/Errors/CountydataError.cs` |

### Distancecalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Distancecalculator(DistancecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat1`, `Lon1`, `Lat2`, `Lon2`
- **Query params (wire ← C#)**: `lat1` ← `Lat1`, `lon1` ← `Lon1`, `lat2` ← `Lat2`, `lon2` ← `Lon2`
- **Returns**: `V1DistancecalculatorResponse`
- **Error**: `ApiException<DistancecalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DistancecalculatorRequest` | `src/ApiVerve/Requests/Geography/DistancecalculatorRequest.cs` |
| `V1DistancecalculatorResponse` | `src/ApiVerve/Models/V1DistancecalculatorResponse.cs` |
| `DistancecalculatorError` | `src/ApiVerve/Errors/DistancecalculatorError.cs` |

### Hardinesszone

- **Auth**: `options.ApiKey`
- **Signature**: `Hardinesszone(HardinesszoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zip`
- **Query params (wire ← C#)**: `zip` ← `Zip`
- **Returns**: `V1HardinesszoneResponse`
- **Error**: `ApiException<HardinesszoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HardinesszoneRequest` | `src/ApiVerve/Requests/Geography/HardinesszoneRequest.cs` |
| `V1HardinesszoneResponse` | `src/ApiVerve/Models/V1HardinesszoneResponse.cs` |
| `HardinesszoneError` | `src/ApiVerve/Errors/HardinesszoneError.cs` |

### Reversegeocode

- **Auth**: `options.ApiKey`
- **Signature**: `Reversegeocode(ReversegeocodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`
- **Returns**: `V1ReversegeocodeResponse`
- **Error**: `ApiException<ReversegeocodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReversegeocodeRequest` | `src/ApiVerve/Requests/Geography/ReversegeocodeRequest.cs` |
| `V1ReversegeocodeResponse` | `src/ApiVerve/Models/V1ReversegeocodeResponse.cs` |
| `ReversegeocodeError` | `src/ApiVerve/Errors/ReversegeocodeError.cs` |

### Stateboundaries

- **Auth**: `options.ApiKey`
- **Signature**: `Stateboundaries(StateboundariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `State`
- **Query params (wire ← C#)**: `state` ← `State`
- **Returns**: `V1StateboundariesResponse`
- **Error**: `ApiException<StateboundariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StateboundariesRequest` | `src/ApiVerve/Requests/Geography/StateboundariesRequest.cs` |
| `V1StateboundariesResponse` | `src/ApiVerve/Models/V1StateboundariesResponse.cs` |
| `StateboundariesError` | `src/ApiVerve/Errors/StateboundariesError.cs` |

### Zipcodes

- **Auth**: `options.ApiKey`
- **Signature**: `Zipcodes(ZipcodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zip`
- **Query params (wire ← C#)**: `zip` ← `Zip`
- **Returns**: `V1ZipcodesResponse`
- **Error**: `ApiException<ZipcodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ZipcodesRequest` | `src/ApiVerve/Requests/Geography/ZipcodesRequest.cs` |
| `V1ZipcodesResponse` | `src/ApiVerve/Models/V1ZipcodesResponse.cs` |
| `ZipcodesError` | `src/ApiVerve/Errors/ZipcodesError.cs` |

