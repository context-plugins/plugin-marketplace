<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationApi — operations

Accessor: `client.AuthenticationApi` · Source: `src/Divvy/Api/AuthenticationApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSessionInfo

- **Signature**: `GetSessionInfo(GetSessionInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SessionInfoResponseDto`
- **Error**: `ApiException<GetSessionInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSessionInfoRequest` | `src/Divvy/Requests/AuthenticationApi/GetSessionInfoRequest.cs` |
| `SessionInfoResponseDto` | `src/Divvy/Models/SessionInfoResponseDto.cs` |
| `GetSessionInfoError` | `src/Divvy/Errors/GetSessionInfoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListAllOrganizations

- **Signature**: `ListAllOrganizations(ListAllOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`
- **Returns**: `ListAllResponseDtoAllOrganizationsResponseDto`
- **Error**: `ApiException<ListAllOrganizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAllOrganizationsRequest` | `src/Divvy/Requests/AuthenticationApi/ListAllOrganizationsRequest.cs` |
| `ListAllResponseDtoAllOrganizationsResponseDto` | `src/Divvy/Models/ListAllResponseDtoAllOrganizationsResponseDto.cs` |
| `ListAllOrganizationsError` | `src/Divvy/Errors/ListAllOrganizationsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### Login

- **Signature**: `Login(LoginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `LoginResponseDto`
- **Error**: `ApiException<LoginError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LoginRequest` | `src/Divvy/Requests/AuthenticationApi/LoginRequest.cs` |
| `LoginRequestDto` | `src/Divvy/Models/LoginRequestDto.cs` |
| `LoginResponseDto` | `src/Divvy/Models/LoginResponseDto.cs` |
| `LoginError` | `src/Divvy/Errors/LoginError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### Logout

- **Signature**: `Logout(LogoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<LogoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LogoutRequest` | `src/Divvy/Requests/AuthenticationApi/LogoutRequest.cs` |
| `LogoutError` | `src/Divvy/Errors/LogoutError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

