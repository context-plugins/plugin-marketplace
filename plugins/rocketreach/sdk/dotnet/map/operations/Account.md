<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/RocketReach/Api/Account.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateNewApiKey

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `CreateNewApiKey(CreateNewApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiKeyModel`
- **Error**: `ApiException<CreateNewApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateNewApiKeyRequest` | `src/RocketReach/Requests/Account/CreateNewApiKeyRequest.cs` |
| `ApiKeyModel` | `src/RocketReach/Models/ApiKeyModel.cs` |
| `CreateNewApiKeyError` | `src/RocketReach/Errors/CreateNewApiKeyError.cs` |

### GetAccount

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `GetAccount(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UserModel`
- **Error**: `ApiException<GetAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UserModel` | `src/RocketReach/Models/UserModel.cs` |
| `GetAccountError` | `src/RocketReach/Errors/GetAccountError.cs` |

### GetUniversalAccount

- **Auth**: `options.RocketReachApiKey`
- **Signature**: `GetUniversalAccount(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UniversalCreditsUserModelWithExtraAttributes`
- **Error**: `ApiException<GetUniversalAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UniversalCreditsUserModelWithExtraAttributes` | `src/RocketReach/Models/UniversalCreditsUserModelWithExtraAttributes.cs` |
| `GetUniversalAccountError` | `src/RocketReach/Errors/GetUniversalAccountError.cs` |

