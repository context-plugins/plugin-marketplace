<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationApi — operations

Accessor: `client.AuthenticationApi` · Source: `src/Instacart/Api/AuthenticationApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GenerateAccessToken

- **Signature**: `GenerateAccessToken(GenerateAccessTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TokenResponse`
- **Error**: `ApiException<GenerateAccessTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateAccessTokenRequest` | `src/Instacart/Requests/AuthenticationApi/GenerateAccessTokenRequest.cs` |
| `TokenRequest` | `src/Instacart/Models/TokenRequest.cs` |
| `TokenResponse` | `src/Instacart/Models/TokenResponse.cs` |
| `GenerateAccessTokenError` | `src/Instacart/Errors/GenerateAccessTokenError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

