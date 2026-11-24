<!-- Generated file — do not edit; regenerated with the SDK. -->

# LienTheft — operations

Accessor: `client.LienTheft` · Source: `src/CarsXe/Api/LienTheft.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetLienTheft

- **Auth**: `options.ApiKeyQuery` OR `options.X402Payment` OR anonymous
- **Signature**: `GetLienTheft(GetLienTheftRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Vin`
- **Query params (wire ← C#)**: `vin` ← `Vin`
- **Returns**: `V1LienTheftResponse`
- **Error**: `ApiException<GetLienTheftError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetUsageLimitError([NotNullWhen(true)] out UsageLimitError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLienTheftRequest` | `src/CarsXe/Requests/LienTheft/GetLienTheftRequest.cs` |
| `V1LienTheftResponse` | `src/CarsXe/Models/V1LienTheftResponse.cs` |
| `GetLienTheftError` | `src/CarsXe/Errors/GetLienTheftError.cs` |
| `Error` | `src/CarsXe/Models/Error.cs` |
| `UsageLimitError` | `src/CarsXe/Models/UsageLimitError.cs` |

