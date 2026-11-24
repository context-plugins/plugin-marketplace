<!-- Generated file — do not edit; regenerated with the SDK. -->

# Auth — operations

Accessor: `client.Auth` · Source: `src/DoiT/Api/Auth.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Validate

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `Validate(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ValidateResponse`
- **Error**: `ApiException<ValidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ValidateResponse` | `src/DoiT/Models/ValidateResponse.cs` |
| `ValidateError` | `src/DoiT/Errors/ValidateError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

