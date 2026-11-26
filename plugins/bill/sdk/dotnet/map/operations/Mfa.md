<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mfa — operations

Accessor: `client.Mfa` · Source: `src/Bill/Api/Mfa.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GenerateChallenge

- **Signature**: `GenerateChallenge(GenerateChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MfaChallengeResponseDto`
- **Error**: `ApiException<GenerateChallengeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateChallengeRequest` | `src/Bill/Requests/Mfa/GenerateChallengeRequest.cs` |
| `MfaChallengeRequestDto` | `src/Bill/Models/MfaChallengeRequestDto.cs` |
| `MfaChallengeResponseDto` | `src/Bill/Models/MfaChallengeResponseDto.cs` |
| `GenerateChallengeError` | `src/Bill/Errors/GenerateChallengeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListMfaPhones

- **Signature**: `ListMfaPhones(ListMfaPhonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListMfaPhoneResponseDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListMfaPhonesRequest` | `src/Bill/Requests/Mfa/ListMfaPhonesRequest.cs` |
| `ListMfaPhoneResponseDto` | `src/Bill/Models/ListMfaPhoneResponseDto.cs` |

### Setup

- **Signature**: `Setup(SetupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MfaSetupResponseDto`
- **Error**: `ApiException<SetupError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetupRequest` | `src/Bill/Requests/Mfa/SetupRequest.cs` |
| `MfaSetupRequestDto` | `src/Bill/Models/MfaSetupRequestDto.cs` |
| `MfaSetupResponseDto` | `src/Bill/Models/MfaSetupResponseDto.cs` |
| `SetupError` | `src/Bill/Errors/SetupError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### StepUpSession

- **Signature**: `StepUpSession(StepUpSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MfaStepUpResponseDto`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StepUpSessionRequest` | `src/Bill/Requests/Mfa/StepUpSessionRequest.cs` |
| `MfaStepUpRequestDto` | `src/Bill/Models/MfaStepUpRequestDto.cs` |
| `MfaStepUpResponseDto` | `src/Bill/Models/MfaStepUpResponseDto.cs` |

### Validate

- **Signature**: `Validate(ValidateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StatusDto`
- **Error**: `ApiException<ValidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ValidateRequest` | `src/Bill/Requests/Mfa/ValidateRequest.cs` |
| `MfaSetupValidateRequestDto` | `src/Bill/Models/MfaSetupValidateRequestDto.cs` |
| `StatusDto` | `src/Bill/Models/StatusDto.cs` |
| `ValidateError` | `src/Bill/Errors/ValidateError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ValidateChallenge

- **Signature**: `ValidateChallenge(ValidateChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `MfaChallengeValidateResponseDto`
- **Error**: `ApiException<ValidateChallengeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ValidateChallengeRequest` | `src/Bill/Requests/Mfa/ValidateChallengeRequest.cs` |
| `MfaChallengeValidateRequestDto` | `src/Bill/Models/MfaChallengeValidateRequestDto.cs` |
| `MfaChallengeValidateResponseDto` | `src/Bill/Models/MfaChallengeValidateResponseDto.cs` |
| `ValidateChallengeError` | `src/Bill/Errors/ValidateChallengeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

