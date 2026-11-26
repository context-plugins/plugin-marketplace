<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationApi — operations

Accessor: `client.AuthenticationApi` · Source: `src/Bill/Api/AuthenticationApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSessionInfo

- **Signature**: `GetSessionInfo(GetSessionInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SessionInfoResponseDto`
- **Error**: `ApiException<GetSessionInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSessionInfoRequest` | `src/Bill/Requests/AuthenticationApi/GetSessionInfoRequest.cs` |
| `SessionInfoResponseDto` | `src/Bill/Models/SessionInfoResponseDto.cs` |
| `GetSessionInfoError` | `src/Bill/Errors/GetSessionInfoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListAllOrganizations

- **Signature**: `ListAllOrganizations(ListAllOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`
- **Returns**: `ListAllResponseDtoAllOrganizationsResponseDto`
- **Error**: `ApiException<ListAllOrganizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAllOrganizationsRequest` | `src/Bill/Requests/AuthenticationApi/ListAllOrganizationsRequest.cs` |
| `ListAllResponseDtoAllOrganizationsResponseDto` | `src/Bill/Models/ListAllResponseDtoAllOrganizationsResponseDto.cs` |
| `ListAllOrganizationsError` | `src/Bill/Errors/ListAllOrganizationsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### Login

- **Signature**: `Login(LoginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `LoginResponseDto`
- **Error**: `ApiException<LoginError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LoginRequest` | `src/Bill/Requests/AuthenticationApi/LoginRequest.cs` |
| `LoginRequestDto` | `src/Bill/Models/LoginRequestDto.cs` |
| `LoginResponseDto` | `src/Bill/Models/LoginResponseDto.cs` |
| `LoginError` | `src/Bill/Errors/LoginError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### Logout

- **Signature**: `Logout(LogoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<LogoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LogoutRequest` | `src/Bill/Requests/AuthenticationApi/LogoutRequest.cs` |
| `LogoutError` | `src/Bill/Errors/LogoutError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

