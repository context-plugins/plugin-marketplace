<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mfa — operations

Accessor: `client.Mfa` · Source: `src/Divvy/Api/Mfa.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GenerateChallenge

- **Signature**: `GenerateChallenge(GenerateChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MfaChallengeResponseDto`
- **Error**: `ApiException<GenerateChallengeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateChallengeRequest` | `src/Divvy/Requests/Mfa/GenerateChallengeRequest.cs` |
| `MfaChallengeRequestDto` | `src/Divvy/Models/MfaChallengeRequestDto.cs` |
| `MfaChallengeResponseDto` | `src/Divvy/Models/MfaChallengeResponseDto.cs` |
| `GenerateChallengeError` | `src/Divvy/Errors/GenerateChallengeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListMfaPhones

- **Signature**: `ListMfaPhones(ListMfaPhonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListMfaPhoneResponseDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListMfaPhonesRequest` | `src/Divvy/Requests/Mfa/ListMfaPhonesRequest.cs` |
| `ListMfaPhoneResponseDto` | `src/Divvy/Models/ListMfaPhoneResponseDto.cs` |

### Setup

- **Signature**: `Setup(SetupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MfaSetupResponseDto`
- **Error**: `ApiException<SetupError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetupRequest` | `src/Divvy/Requests/Mfa/SetupRequest.cs` |
| `MfaSetupRequestDto` | `src/Divvy/Models/MfaSetupRequestDto.cs` |
| `MfaSetupResponseDto` | `src/Divvy/Models/MfaSetupResponseDto.cs` |
| `SetupError` | `src/Divvy/Errors/SetupError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### StepUpSession

- **Signature**: `StepUpSession(StepUpSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MfaStepUpResponseDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StepUpSessionRequest` | `src/Divvy/Requests/Mfa/StepUpSessionRequest.cs` |
| `MfaStepUpRequestDto` | `src/Divvy/Models/MfaStepUpRequestDto.cs` |
| `MfaStepUpResponseDto` | `src/Divvy/Models/MfaStepUpResponseDto.cs` |

### Validate

- **Signature**: `Validate(ValidateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StatusDto`
- **Error**: `ApiException<ValidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ValidateRequest` | `src/Divvy/Requests/Mfa/ValidateRequest.cs` |
| `MfaSetupValidateRequestDto` | `src/Divvy/Models/MfaSetupValidateRequestDto.cs` |
| `StatusDto` | `src/Divvy/Models/StatusDto.cs` |
| `ValidateError` | `src/Divvy/Errors/ValidateError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ValidateChallenge

- **Signature**: `ValidateChallenge(ValidateChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MfaChallengeValidateResponseDto`
- **Error**: `ApiException<ValidateChallengeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ValidateChallengeRequest` | `src/Divvy/Requests/Mfa/ValidateChallengeRequest.cs` |
| `MfaChallengeValidateRequestDto` | `src/Divvy/Models/MfaChallengeValidateRequestDto.cs` |
| `MfaChallengeValidateResponseDto` | `src/Divvy/Models/MfaChallengeValidateResponseDto.cs` |
| `ValidateChallengeError` | `src/Divvy/Errors/ValidateChallengeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

