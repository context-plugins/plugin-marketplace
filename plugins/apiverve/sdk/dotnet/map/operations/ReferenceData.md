<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReferenceData — operations

Accessor: `client.ReferenceData` · Source: `src/ApiVerve/Api/ReferenceData.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Birthstones

- **Auth**: `options.ApiKey`
- **Signature**: `Birthstones(BirthstonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Month`
- **Query params (wire ← C#)**: `month` ← `Month`
- **Returns**: `V1BirthstonesResponse`
- **Error**: `ApiException<BirthstonesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BirthstonesRequest` | `src/ApiVerve/Requests/ReferenceData/BirthstonesRequest.cs` |
| `V1BirthstonesResponse` | `src/ApiVerve/Models/V1BirthstonesResponse.cs` |
| `BirthstonesError` | `src/ApiVerve/Errors/BirthstonesError.cs` |

### Caaparser

- **Auth**: `options.ApiKey`
- **Signature**: `Caaparser(CaaparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1CaaparserResponse`
- **Error**: `ApiException<CaaparserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CaaparserRequest` | `src/ApiVerve/Requests/ReferenceData/CaaparserRequest.cs` |
| `V1CaaparserRequest` | `src/ApiVerve/Models/V1CaaparserRequest.cs` |
| `V1CaaparserResponse` | `src/ApiVerve/Models/V1CaaparserResponse.cs` |
| `CaaparserError` | `src/ApiVerve/Errors/CaaparserError.cs` |

### Colorbrightness

- **Auth**: `options.ApiKey`
- **Signature**: `Colorbrightness(ColorbrightnessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Hex`
- **Query params (wire ← C#)**: `hex` ← `Hex`
- **Returns**: `V1ColorbrightnessResponse`
- **Error**: `ApiException<ColorbrightnessError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ColorbrightnessRequest` | `src/ApiVerve/Requests/ReferenceData/ColorbrightnessRequest.cs` |
| `V1ColorbrightnessResponse` | `src/ApiVerve/Models/V1ColorbrightnessResponse.cs` |
| `ColorbrightnessError` | `src/ApiVerve/Errors/ColorbrightnessError.cs` |

### Colornamefinder

- **Auth**: `options.ApiKey`
- **Signature**: `Colornamefinder(ColornamefinderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Hex`
- **Query params (wire ← C#)**: `hex` ← `Hex`, `closest` ← `Closest`
- **Returns**: `V1ColornamefinderResponse`
- **Error**: `ApiException<ColornamefinderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ColornamefinderRequest` | `src/ApiVerve/Requests/ReferenceData/ColornamefinderRequest.cs` |
| `V1ColornamefinderResponse` | `src/ApiVerve/Models/V1ColornamefinderResponse.cs` |
| `ColornamefinderError` | `src/ApiVerve/Errors/ColornamefinderError.cs` |

### Httpstatuslookup

- **Auth**: `options.ApiKey`
- **Signature**: `Httpstatuslookup(HttpstatuslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Code`
- **Query params (wire ← C#)**: `code` ← `Code`
- **Returns**: `V1HttpstatuslookupResponse`
- **Error**: `ApiException<HttpstatuslookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HttpstatuslookupRequest` | `src/ApiVerve/Requests/ReferenceData/HttpstatuslookupRequest.cs` |
| `V1HttpstatuslookupResponse` | `src/ApiVerve/Models/V1HttpstatuslookupResponse.cs` |
| `HttpstatuslookupError` | `src/ApiVerve/Errors/HttpstatuslookupError.cs` |

### Mayancalendar

- **Auth**: `options.ApiKey`
- **Signature**: `Mayancalendar(MayancalendarRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Date`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `V1MayancalendarResponse`
- **Error**: `ApiException<MayancalendarError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MayancalendarRequest` | `src/ApiVerve/Requests/ReferenceData/MayancalendarRequest.cs` |
| `V1MayancalendarResponse` | `src/ApiVerve/Models/V1MayancalendarResponse.cs` |
| `MayancalendarError` | `src/ApiVerve/Errors/MayancalendarError.cs` |

### Mimetypelookup

- **Auth**: `options.ApiKey`
- **Signature**: `Mimetypelookup(MimetypelookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Extension`
- **Query params (wire ← C#)**: `extension` ← `Extension`
- **Returns**: `V1MimetypelookupResponse`
- **Error**: `ApiException<MimetypelookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MimetypelookupRequest` | `src/ApiVerve/Requests/ReferenceData/MimetypelookupRequest.cs` |
| `V1MimetypelookupResponse` | `src/ApiVerve/Models/V1MimetypelookupResponse.cs` |
| `MimetypelookupError` | `src/ApiVerve/Errors/MimetypelookupError.cs` |

### Portnumberlookup

- **Auth**: `options.ApiKey`
- **Signature**: `Portnumberlookup(PortnumberlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Port`
- **Query params (wire ← C#)**: `port` ← `Port`
- **Returns**: `V1PortnumberlookupResponse`
- **Error**: `ApiException<PortnumberlookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PortnumberlookupRequest` | `src/ApiVerve/Requests/ReferenceData/PortnumberlookupRequest.cs` |
| `V1PortnumberlookupResponse` | `src/ApiVerve/Models/V1PortnumberlookupResponse.cs` |
| `PortnumberlookupError` | `src/ApiVerve/Errors/PortnumberlookupError.cs` |

### Ringsizeconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Ringsizeconverter(RingsizeconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Size`, `From`
- **Query params (wire ← C#)**: `size` ← `Size`, `from` ← `From`
- **Returns**: `V1RingsizeconverterResponse`
- **Error**: `ApiException<RingsizeconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RingsizeconverterRequest` | `src/ApiVerve/Requests/ReferenceData/RingsizeconverterRequest.cs` |
| `V1RingsizeconverterResponse` | `src/ApiVerve/Models/V1RingsizeconverterResponse.cs` |
| `RingsizeconverterError` | `src/ApiVerve/Errors/RingsizeconverterError.cs` |

### Shoesizeconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Shoesizeconverter(ShoesizeconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Size`, `From`
- **Query params (wire ← C#)**: `size` ← `Size`, `from` ← `From`, `gender` ← `Gender`
- **Returns**: `V1ShoesizeconverterResponse`
- **Error**: `ApiException<ShoesizeconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ShoesizeconverterRequest` | `src/ApiVerve/Requests/ReferenceData/ShoesizeconverterRequest.cs` |
| `V1ShoesizeconverterResponse` | `src/ApiVerve/Models/V1ShoesizeconverterResponse.cs` |
| `ShoesizeconverterError` | `src/ApiVerve/Errors/ShoesizeconverterError.cs` |

### Srvparser

- **Auth**: `options.ApiKey`
- **Signature**: `Srvparser(SrvparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SrvparserResponse`
- **Error**: `ApiException<SrvparserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SrvparserRequest` | `src/ApiVerve/Requests/ReferenceData/SrvparserRequest.cs` |
| `V1SrvparserRequest` | `src/ApiVerve/Models/V1SrvparserRequest.cs` |
| `V1SrvparserResponse` | `src/ApiVerve/Models/V1SrvparserResponse.cs` |
| `SrvparserError` | `src/ApiVerve/Errors/SrvparserError.cs` |

