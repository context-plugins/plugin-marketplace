<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataProcessing — operations

Accessor: `client.DataProcessing` · Source: `src/ApiVerve/Api/DataProcessing.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Counter

- **Auth**: `options.ApiKey`
- **Signature**: `Counter(CounterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `id` ← `Id`
- **Returns**: `V1CounterResponse`
- **Error**: `ApiException<CounterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CounterRequest` | `src/ApiVerve/Requests/DataProcessing/CounterRequest.cs` |
| `V1CounterResponse` | `src/ApiVerve/Models/V1CounterResponse.cs` |
| `CounterError` | `src/ApiVerve/Errors/CounterError.cs` |

### Htmltotext

- **Auth**: `options.ApiKey`
- **Signature**: `Htmltotext(HtmltotextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1HtmltotextResponse`
- **Error**: `ApiException<HtmltotextError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HtmltotextRequest` | `src/ApiVerve/Requests/DataProcessing/HtmltotextRequest.cs` |
| `V1HtmltotextRequest` | `src/ApiVerve/Models/V1HtmltotextRequest.cs` |
| `V1HtmltotextResponse` | `src/ApiVerve/Models/V1HtmltotextResponse.cs` |
| `HtmltotextError` | `src/ApiVerve/Errors/HtmltotextError.cs` |

### Metadataextractor

- **Auth**: `options.ApiKey`
- **Signature**: `Metadataextractor(MetadataextractorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1MetadataextractorResponse`
- **Error**: `ApiException<MetadataextractorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MetadataextractorRequest` | `src/ApiVerve/Requests/DataProcessing/MetadataextractorRequest.cs` |
| `V1MetadataextractorRequest` | `src/ApiVerve/Models/V1MetadataextractorRequest.cs` |
| `V1MetadataextractorResponse` | `src/ApiVerve/Models/V1MetadataextractorResponse.cs` |
| `MetadataextractorError` | `src/ApiVerve/Errors/MetadataextractorError.cs` |

### Morsecode

- **Auth**: `options.ApiKey`
- **Signature**: `Morsecode(MorsecodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1MorsecodeResponse`
- **Error**: `ApiException<MorsecodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MorsecodeRequest` | `src/ApiVerve/Requests/DataProcessing/MorsecodeRequest.cs` |
| `V1MorsecodeRequest` | `src/ApiVerve/Models/V1MorsecodeRequest.cs` |
| `V1MorsecodeResponse` | `src/ApiVerve/Models/V1MorsecodeResponse.cs` |
| `MorsecodeError` | `src/ApiVerve/Errors/MorsecodeError.cs` |

### Murmurhash

- **Auth**: `options.ApiKey`
- **Signature**: `Murmurhash(MurmurhashRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1MurmurhashResponse`
- **Error**: `ApiException<MurmurhashError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MurmurhashRequest` | `src/ApiVerve/Requests/DataProcessing/MurmurhashRequest.cs` |
| `V1MurmurhashRequest` | `src/ApiVerve/Models/V1MurmurhashRequest.cs` |
| `V1MurmurhashResponse` | `src/ApiVerve/Models/V1MurmurhashResponse.cs` |
| `MurmurhashError` | `src/ApiVerve/Errors/MurmurhashError.cs` |

### Sqlexplainer

- **Auth**: `options.ApiKey`
- **Signature**: `Sqlexplainer(SqlexplainerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SqlexplainerResponse`
- **Error**: `ApiException<SqlexplainerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SqlexplainerRequest` | `src/ApiVerve/Requests/DataProcessing/SqlexplainerRequest.cs` |
| `V1SqlexplainerRequest` | `src/ApiVerve/Models/V1SqlexplainerRequest.cs` |
| `V1SqlexplainerResponse` | `src/ApiVerve/Models/V1SqlexplainerResponse.cs` |
| `SqlexplainerError` | `src/ApiVerve/Errors/SqlexplainerError.cs` |

