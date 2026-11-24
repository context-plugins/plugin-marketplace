<!-- Generated file — do not edit; regenerated with the SDK. -->

# OauthUsers — operations

Accessor: `client.OauthUsers` · Source: `src/Beehiiv/Api/OauthUsers.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Identify

- **Signature**: `Identify(IdentifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `UserIdentifyResponse`
- **Error**: `ApiException<IdentifyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IdentifyRequest` | `src/Beehiiv/Requests/OauthUsers/IdentifyRequest.cs` |
| `UserIdentifyResponse` | `src/Beehiiv/Models/UserIdentifyResponse.cs` |
| `IdentifyError` | `src/Beehiiv/Errors/IdentifyError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

