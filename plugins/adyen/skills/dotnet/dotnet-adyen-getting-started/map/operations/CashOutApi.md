<!-- Generated file — do not edit; regenerated with the SDK. -->

# CashOutApi — operations

Accessor: `client.CashOutApi` · Source: `Api/CashOutApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostCashouts
- **Server group**: `Default14`
- **Signature**: `PostCashouts(CashOutInfo body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CashOut`
- **Error**: `SdkException<PostCashoutsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CashOutInfo` | `Models/CashOutInfo.cs` |
| `CashOut` | `Models/CashOut.cs` |
| `PostCashoutsError` | `Errors/PostCashoutsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

