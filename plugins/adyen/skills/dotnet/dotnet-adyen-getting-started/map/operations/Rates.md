<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rates — operations

Accessor: `client.Rates` · Source: `Api/Rates.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostRatesCalculate
- **Server group**: `Default7`
- **Signature**: `PostRatesCalculate(CalculateRateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CalculateRateResponse`
- **Error**: `SdkException<PostRatesCalculateError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CalculateRateRequest` | `Models/CalculateRateRequest.cs` |
| `CalculateRateResponse` | `Models/CalculateRateResponse.cs` |
| `PostRatesCalculateError` | `Errors/PostRatesCalculateError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

