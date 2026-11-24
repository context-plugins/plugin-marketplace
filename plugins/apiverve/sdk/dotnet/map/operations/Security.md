<!-- Generated file — do not edit; regenerated with the SDK. -->

# Security — operations

Accessor: `client.Security` · Source: `src/ApiVerve/Api/Security.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Csrparser

- **Auth**: `options.ApiKey`
- **Signature**: `Csrparser(CsrparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1CsrparserResponse`
- **Error**: `ApiException<CsrparserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CsrparserRequest` | `src/ApiVerve/Requests/Security/CsrparserRequest.cs` |
| `V1CsrparserRequest` | `src/ApiVerve/Models/V1CsrparserRequest.cs` |
| `V1CsrparserResponse` | `src/ApiVerve/Models/V1CsrparserResponse.cs` |
| `CsrparserError` | `src/ApiVerve/Errors/CsrparserError.cs` |

### Danevalidator

- **Auth**: `options.ApiKey`
- **Signature**: `Danevalidator(DanevalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1DanevalidatorResponse`
- **Error**: `ApiException<DanevalidatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DanevalidatorRequest` | `src/ApiVerve/Requests/Security/DanevalidatorRequest.cs` |
| `V1DanevalidatorRequest` | `src/ApiVerve/Models/V1DanevalidatorRequest.cs` |
| `V1DanevalidatorResponse` | `src/ApiVerve/Models/V1DanevalidatorResponse.cs` |
| `DanevalidatorError` | `src/ApiVerve/Errors/DanevalidatorError.cs` |

### Hashgenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Hashgenerator(HashgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Text`
- **Query params (wire ← C#)**: `text` ← `Text`, `algorithms` ← `Algorithms`
- **Returns**: `V1HashgeneratorResponse`
- **Error**: `ApiException<HashgeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HashgeneratorRequest` | `src/ApiVerve/Requests/Security/HashgeneratorRequest.cs` |
| `V1HashgeneratorResponse` | `src/ApiVerve/Models/V1HashgeneratorResponse.cs` |
| `HashgeneratorError` | `src/ApiVerve/Errors/HashgeneratorError.cs` |

### Hmac

- **Auth**: `options.ApiKey`
- **Signature**: `Hmac(HmacRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1HmacResponse`
- **Error**: `ApiException<HmacError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HmacRequest` | `src/ApiVerve/Requests/Security/HmacRequest.cs` |
| `V1HmacRequest` | `src/ApiVerve/Models/V1HmacRequest.cs` |
| `V1HmacResponse` | `src/ApiVerve/Models/V1HmacResponse.cs` |
| `HmacError` | `src/ApiVerve/Errors/HmacError.cs` |

