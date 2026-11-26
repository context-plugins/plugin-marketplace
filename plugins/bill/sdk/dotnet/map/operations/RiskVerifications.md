<!-- Generated file — do not edit; regenerated with the SDK. -->

# RiskVerifications — operations

Accessor: `client.RiskVerifications` · Source: `src/Bill/Api/RiskVerifications.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRiskVerificationPhone

- **Signature**: `CreateRiskVerificationPhone(CreateRiskVerificationPhoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateRiskVerificationPhoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRiskVerificationPhoneRequest` | `src/Bill/Requests/RiskVerifications/CreateRiskVerificationPhoneRequest.cs` |
| `PhoneVerificationRequestDto` | `src/Bill/Models/PhoneVerificationRequestDto.cs` |
| `CreateRiskVerificationPhoneError` | `src/Bill/Errors/CreateRiskVerificationPhoneError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetRiskVerificationPhone

- **Signature**: `GetRiskVerificationPhone(GetRiskVerificationPhoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetPhoneStatusResponseDto`
- **Error**: `ApiException<GetRiskVerificationPhoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRiskVerificationPhoneRequest` | `src/Bill/Requests/RiskVerifications/GetRiskVerificationPhoneRequest.cs` |
| `GetPhoneStatusResponseDto` | `src/Bill/Models/GetPhoneStatusResponseDto.cs` |
| `GetRiskVerificationPhoneError` | `src/Bill/Errors/GetRiskVerificationPhoneError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetRiskVerifications

- **Signature**: `GetRiskVerifications(GetRiskVerificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `VerificationResponseDto`
- **Error**: `ApiException<GetRiskVerificationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRiskVerificationsRequest` | `src/Bill/Requests/RiskVerifications/GetRiskVerificationsRequest.cs` |
| `VerificationResponseDto` | `src/Bill/Models/VerificationResponseDto.cs` |
| `GetRiskVerificationsError` | `src/Bill/Errors/GetRiskVerificationsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### InitiateRiskVerifications

- **Signature**: `InitiateRiskVerifications(InitiateRiskVerificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `VerificationResponseDto`
- **Error**: `ApiException<InitiateRiskVerificationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InitiateRiskVerificationsRequest` | `src/Bill/Requests/RiskVerifications/InitiateRiskVerificationsRequest.cs` |
| `VerificationResponseDto` | `src/Bill/Models/VerificationResponseDto.cs` |
| `InitiateRiskVerificationsError` | `src/Bill/Errors/InitiateRiskVerificationsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

