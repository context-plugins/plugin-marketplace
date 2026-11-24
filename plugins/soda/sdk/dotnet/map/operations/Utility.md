<!-- Generated file — do not edit; regenerated with the SDK. -->

# Utility — operations

Accessor: `client.Utility` · Source: `src/Soda/Api/Utility.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1TestLogin

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1TestLogin(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PublicApiTestLoginResponse`
- **Error**: `ApiException<GetApiV1TestLoginError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublicApiTestLoginResponse` | `src/Soda/Models/PublicApiTestLoginResponse.cs` |
| `GetApiV1TestLoginError` | `src/Soda/Errors/GetApiV1TestLoginError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

