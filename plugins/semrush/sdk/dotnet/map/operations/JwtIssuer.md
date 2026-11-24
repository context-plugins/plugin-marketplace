<!-- Generated file — do not edit; regenerated with the SDK. -->

# JwtIssuer — operations

Accessor: `client.JwtIssuer` · Source: `src/Semrush/Api/JwtIssuer.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostAppCenterApiV2JwtToken

- **Signature**: `PostAppCenterApiV2JwtToken(PostAppCenterApiV2JwtTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IssuerJwtResponse`
- **Error**: `ApiException<PostAppCenterApiV2JwtTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostAppCenterApiV2JwtTokenRequest` | `src/Semrush/Requests/JwtIssuer/PostAppCenterApiV2JwtTokenRequest.cs` |
| `IssuerJwtRequest` | `src/Semrush/Models/IssuerJwtRequest.cs` |
| `IssuerJwtResponse` | `src/Semrush/Models/IssuerJwtResponse.cs` |
| `PostAppCenterApiV2JwtTokenError` | `src/Semrush/Errors/PostAppCenterApiV2JwtTokenError.cs` |

