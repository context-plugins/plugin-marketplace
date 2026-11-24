<!-- Generated file — do not edit; regenerated with the SDK. -->

# RiskVerifications — operations

Accessor: `client.RiskVerifications` · Source: `src/Divvy/Api/RiskVerifications.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRiskVerificationPhone

- **Signature**: `CreateRiskVerificationPhone(CreateRiskVerificationPhoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateRiskVerificationPhoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRiskVerificationPhoneRequest` | `src/Divvy/Requests/RiskVerifications/CreateRiskVerificationPhoneRequest.cs` |
| `PhoneVerificationRequestDto` | `src/Divvy/Models/PhoneVerificationRequestDto.cs` |
| `CreateRiskVerificationPhoneError` | `src/Divvy/Errors/CreateRiskVerificationPhoneError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetRiskVerificationPhone

- **Signature**: `GetRiskVerificationPhone(GetRiskVerificationPhoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetPhoneStatusResponseDto`
- **Error**: `ApiException<GetRiskVerificationPhoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRiskVerificationPhoneRequest` | `src/Divvy/Requests/RiskVerifications/GetRiskVerificationPhoneRequest.cs` |
| `GetPhoneStatusResponseDto` | `src/Divvy/Models/GetPhoneStatusResponseDto.cs` |
| `GetRiskVerificationPhoneError` | `src/Divvy/Errors/GetRiskVerificationPhoneError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetRiskVerifications

- **Signature**: `GetRiskVerifications(GetRiskVerificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `VerificationResponseDto`
- **Error**: `ApiException<GetRiskVerificationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRiskVerificationsRequest` | `src/Divvy/Requests/RiskVerifications/GetRiskVerificationsRequest.cs` |
| `VerificationResponseDto` | `src/Divvy/Models/VerificationResponseDto.cs` |
| `GetRiskVerificationsError` | `src/Divvy/Errors/GetRiskVerificationsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### InitiateRiskVerifications

- **Signature**: `InitiateRiskVerifications(InitiateRiskVerificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `VerificationResponseDto`
- **Error**: `ApiException<InitiateRiskVerificationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InitiateRiskVerificationsRequest` | `src/Divvy/Requests/RiskVerifications/InitiateRiskVerificationsRequest.cs` |
| `VerificationResponseDto` | `src/Divvy/Models/VerificationResponseDto.cs` |
| `InitiateRiskVerificationsError` | `src/Divvy/Errors/InitiateRiskVerificationsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

