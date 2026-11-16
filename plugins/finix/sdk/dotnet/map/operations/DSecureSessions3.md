<!-- Generated file — do not edit; regenerated with the SDK. -->

# DSecureSessions3 — operations

Accessor: `client.DSecureSessions3` · Source: `src/FinixApiReference/Api/DSecureSessions3.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create3DSecureSession

- **Auth**: `options.BasicAuth`
- **Signature**: `Create3DSecureSession(Create3DSecureSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DSecureSession3`
- **Error**: `ApiException<Create3DSecureSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create3DSecureSessionRequest` | `src/FinixApiReference/Requests/DSecureSessions3/Create3DSecureSessionRequest.cs` |
| `DSecureSessionsRequest3` | `src/FinixApiReference/Models/AnyOf/DSecureSessionsRequest3.cs` |
| `DSecureSession3` | `src/FinixApiReference/Models/DSecureSession3.cs` |
| `Create3DSecureSessionError` | `src/FinixApiReference/Errors/Create3DSecureSessionError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### Get3DSecureSession

- **Auth**: `options.BasicAuth`
- **Signature**: `Get3DSecureSession(Get3DSecureSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DSecureSessionId3`
- **Returns**: `DSecureSession3`
- **Error**: `ApiException<Get3DSecureSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Get3DSecureSessionRequest` | `src/FinixApiReference/Requests/DSecureSessions3/Get3DSecureSessionRequest.cs` |
| `DSecureSession3` | `src/FinixApiReference/Models/DSecureSession3.cs` |
| `Get3DSecureSessionError` | `src/FinixApiReference/Errors/Get3DSecureSessionError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

