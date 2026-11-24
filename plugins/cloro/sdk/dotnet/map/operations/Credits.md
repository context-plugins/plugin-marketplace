<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credits — operations

Accessor: `client.Credits` · Source: `src/Cloro/Api/Credits.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCredits

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCredits(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreditsResponse`
- **Error**: `ApiException<GetCreditsError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthenticationErrorCloroDevCreditsApi([NotNullWhen(true)] out AuthenticationErrorCloroDevCreditsApi? value)` [401] · `TryGetRateLimitErrorCloroDevCreditsApi([NotNullWhen(true)] out RateLimitErrorCloroDevCreditsApi? value)` [429] · `TryGetInternalErrorCloroDevCreditsApi([NotNullWhen(true)] out InternalErrorCloroDevCreditsApi? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreditsResponse` | `src/Cloro/Models/CreditsResponse.cs` |
| `GetCreditsError` | `src/Cloro/Errors/GetCreditsError.cs` |
| `AuthenticationErrorCloroDevCreditsApi` | `src/Cloro/Models/AuthenticationErrorCloroDevCreditsApi.cs` |
| `RateLimitErrorCloroDevCreditsApi` | `src/Cloro/Models/RateLimitErrorCloroDevCreditsApi.cs` |
| `InternalErrorCloroDevCreditsApi` | `src/Cloro/Models/InternalErrorCloroDevCreditsApi.cs` |

