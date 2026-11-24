<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apps — operations

Accessor: `client.Apps` · Source: `src/Bitly/Api/Apps.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetOAuthApp

- **Auth**: `options.BearerAuth`
- **Signature**: `GetOAuthApp(GetOAuthAppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ClientId`
- **Returns**: `OAuthApp`
- **Error**: `ApiException<GetOAuthAppError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOAuthAppRequest` | `src/Bitly/Requests/Apps/GetOAuthAppRequest.cs` |
| `OAuthApp` | `src/Bitly/Models/OAuthApp.cs` |
| `GetOAuthAppError` | `src/Bitly/Errors/GetOAuthAppError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

