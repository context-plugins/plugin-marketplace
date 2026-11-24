<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorizations — operations

Accessor: `client.Authorizations` · Source: `src/Beehiiv/Api/Authorizations.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Authorize

- **Server group**: `DefaultOAuth2AuthorizationsApi`
- **Signature**: `Authorize(AuthorizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ClientId`, `RedirectUri`, `ResponseType`
- **Query params (wire ← C#)**: `client_id` ← `ClientId`, `redirect_uri` ← `RedirectUri`, `response_type` ← `ResponseType`, `scope` ← `Scope`, `state` ← `State`, `code_challenge` ← `CodeChallenge`, `code_challenge_method` ← `CodeChallengeMethod`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AuthorizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetOAuthError([NotNullWhen(true)] out OAuthError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AuthorizeRequest` | `src/Beehiiv/Requests/Authorizations/AuthorizeRequest.cs` |
| `CodeChallengeMethod` | `src/Beehiiv/Models/Enums/CodeChallengeMethod.cs` |
| `AuthorizeError` | `src/Beehiiv/Errors/AuthorizeError.cs` |
| `OAuthError` | `src/Beehiiv/Models/OAuthError.cs` |

