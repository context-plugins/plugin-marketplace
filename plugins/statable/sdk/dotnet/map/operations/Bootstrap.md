<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bootstrap — operations

Accessor: `client.Bootstrap` · Source: `src/Statable/Api/Bootstrap.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BootstrapSendOtp

- **Signature**: `BootstrapSendOtp(BootstrapSendOtpOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BootstrapSendOtpResponse`
- **Error**: `ApiException<BootstrapSendOtpError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BootstrapSendOtpOperationRequest` | `src/Statable/Requests/Bootstrap/BootstrapSendOtpOperationRequest.cs` |
| `BootstrapSendOtpRequest` | `src/Statable/Models/BootstrapSendOtpRequest.cs` |
| `BootstrapSendOtpResponse` | `src/Statable/Models/BootstrapSendOtpResponse.cs` |
| `BootstrapSendOtpError` | `src/Statable/Errors/BootstrapSendOtpError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

### BootstrapVerifyOtp

- **Signature**: `BootstrapVerifyOtp(BootstrapVerifyOtpOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BootstrapVerifyOtpResponse`
- **Error**: `ApiException<BootstrapVerifyOtpError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BootstrapVerifyOtpOperationRequest` | `src/Statable/Requests/Bootstrap/BootstrapVerifyOtpOperationRequest.cs` |
| `BootstrapVerifyOtpRequest` | `src/Statable/Models/BootstrapVerifyOtpRequest.cs` |
| `BootstrapVerifyOtpResponse` | `src/Statable/Models/BootstrapVerifyOtpResponse.cs` |
| `BootstrapVerifyOtpError` | `src/Statable/Errors/BootstrapVerifyOtpError.cs` |
| `Error` | `src/Statable/Models/Error.cs` |

