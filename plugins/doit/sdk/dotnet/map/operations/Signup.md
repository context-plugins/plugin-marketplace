<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signup — operations

Accessor: `client.Signup` · Source: `src/DoiT/Api/Signup.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSignupRequest

- **Signature**: `CreateSignupRequest(CreateSignupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdempotencyKey`, `Body`
- **Returns**: `SignupRequest`
- **Error**: `ApiException<CreateSignupRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetSignupProblem([NotNullWhen(true)] out SignupProblem? value)` [400, 403, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSignupRequest` | `src/DoiT/Requests/Signup/CreateSignupRequest.cs` |
| `SignupRequestCreate` | `src/DoiT/Models/SignupRequestCreate.cs` |
| `SignupRequest` | `src/DoiT/Models/SignupRequest.cs` |
| `CreateSignupRequestError` | `src/DoiT/Errors/CreateSignupRequestError.cs` |
| `SignupProblem` | `src/DoiT/Models/SignupProblem.cs` |

### CreateSignupSession

- **Signature**: `CreateSignupSession(CreateSignupSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SignupRequestId`, `Body`
- **Returns**: `SignupSession`
- **Error**: `ApiException<CreateSignupSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetSignupProblem([NotNullWhen(true)] out SignupProblem? value)` [400, 404, 409, 410] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSignupSessionRequest` | `src/DoiT/Requests/Signup/CreateSignupSessionRequest.cs` |
| `SignupSessionRequest` | `src/DoiT/Models/SignupSessionRequest.cs` |
| `SignupSession` | `src/DoiT/Models/SignupSession.cs` |
| `CreateSignupSessionError` | `src/DoiT/Errors/CreateSignupSessionError.cs` |
| `SignupProblem` | `src/DoiT/Models/SignupProblem.cs` |

### GetSignupRequest

- **Signature**: `GetSignupRequest(GetSignupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SignupRequestId`
- **Returns**: `SignupRequest`
- **Error**: `ApiException<GetSignupRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetSignupProblem([NotNullWhen(true)] out SignupProblem? value)` [404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignupRequest` | `src/DoiT/Requests/Signup/GetSignupRequest.cs` |
| `SignupRequest` | `src/DoiT/Models/SignupRequest.cs` |
| `GetSignupRequestError` | `src/DoiT/Errors/GetSignupRequestError.cs` |
| `SignupProblem` | `src/DoiT/Models/SignupProblem.cs` |

### ResendSignupVerification

- **Signature**: `ResendSignupVerification(ResendSignupVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SignupRequestId`
- **Returns**: `SignupRequest`
- **Error**: `ApiException<ResendSignupVerificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetSignupProblem([NotNullWhen(true)] out SignupProblem? value)` [404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResendSignupVerificationRequest` | `src/DoiT/Requests/Signup/ResendSignupVerificationRequest.cs` |
| `SignupRequest` | `src/DoiT/Models/SignupRequest.cs` |
| `ResendSignupVerificationError` | `src/DoiT/Errors/ResendSignupVerificationError.cs` |
| `SignupProblem` | `src/DoiT/Models/SignupProblem.cs` |

### VerifySignupRequest

- **Signature**: `VerifySignupRequest(VerifySignupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SignupRequestId`, `Body`
- **Returns**: `SignupRequest`
- **Error**: `ApiException<VerifySignupRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetSignupProblem([NotNullWhen(true)] out SignupProblem? value)` [400, 404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VerifySignupRequest` | `src/DoiT/Requests/Signup/VerifySignupRequest.cs` |
| `SignupVerificationCode` | `src/DoiT/Models/SignupVerificationCode.cs` |
| `SignupRequest` | `src/DoiT/Models/SignupRequest.cs` |
| `VerifySignupRequestError` | `src/DoiT/Errors/VerifySignupRequestError.cs` |
| `SignupProblem` | `src/DoiT/Models/SignupProblem.cs` |

