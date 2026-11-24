<!-- Generated file — do not edit; regenerated with the SDK. -->

# Parsers — operations

Accessor: `client.Parsers` · Source: `src/ApiVerve/Api/Parsers.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Humannameparser

- **Auth**: `options.ApiKey`
- **Signature**: `Humannameparser(HumannameparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `V1HumannameparserResponse`
- **Error**: `ApiException<HumannameparserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HumannameparserRequest` | `src/ApiVerve/Requests/Parsers/HumannameparserRequest.cs` |
| `V1HumannameparserResponse` | `src/ApiVerve/Models/V1HumannameparserResponse.cs` |
| `HumannameparserError` | `src/ApiVerve/Errors/HumannameparserError.cs` |

### Rsstojson

- **Auth**: `options.ApiKey`
- **Signature**: `Rsstojson(RsstojsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1RsstojsonResponse`
- **Error**: `ApiException<RsstojsonError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RsstojsonRequest` | `src/ApiVerve/Requests/Parsers/RsstojsonRequest.cs` |
| `V1RsstojsonRequest` | `src/ApiVerve/Models/V1RsstojsonRequest.cs` |
| `V1RsstojsonResponse` | `src/ApiVerve/Models/V1RsstojsonResponse.cs` |
| `RsstojsonError` | `src/ApiVerve/Errors/RsstojsonError.cs` |

### Streetaddressparser

- **Auth**: `options.ApiKey`
- **Signature**: `Streetaddressparser(StreetaddressparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Address`
- **Query params (wire ← C#)**: `address` ← `Address`
- **Returns**: `V1StreetaddressparserResponse`
- **Error**: `ApiException<StreetaddressparserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StreetaddressparserRequest` | `src/ApiVerve/Requests/Parsers/StreetaddressparserRequest.cs` |
| `V1StreetaddressparserResponse` | `src/ApiVerve/Models/V1StreetaddressparserResponse.cs` |
| `StreetaddressparserError` | `src/ApiVerve/Errors/StreetaddressparserError.cs` |

### Useragentparser

- **Auth**: `options.ApiKey`
- **Signature**: `Useragentparser(UseragentparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1UseragentparserResponse`
- **Error**: `ApiException<UseragentparserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UseragentparserRequest` | `src/ApiVerve/Requests/Parsers/UseragentparserRequest.cs` |
| `V1UseragentparserRequest` | `src/ApiVerve/Models/V1UseragentparserRequest.cs` |
| `V1UseragentparserResponse` | `src/ApiVerve/Models/V1UseragentparserResponse.cs` |
| `UseragentparserError` | `src/ApiVerve/Errors/UseragentparserError.cs` |

