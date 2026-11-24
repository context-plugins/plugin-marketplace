<!-- Generated file — do not edit; regenerated with the SDK. -->

# OAuth — operations

Accessor: `client.OAuth` · Source: `src/Hud/Api/OAuth.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### JoinOauthAppTeamV2OauthJoinPost

- **Signature**: `JoinOauthAppTeamV2OauthJoinPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `OAuthJoinResponse`
- **Error**: `ApiException<JoinOauthAppTeamV2OauthJoinPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OAuthJoinResponse` | `src/Hud/Models/OAuthJoinResponse.cs` |
| `JoinOauthAppTeamV2OauthJoinPostError` | `src/Hud/Errors/JoinOauthAppTeamV2OauthJoinPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

