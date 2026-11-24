<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationApi — operations

Accessor: `client.AuthenticationApi` · Source: `src/Basiq/Api/AuthenticationApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostToken

- **Auth**: `options.ApiKey`
- **Signature**: `PostToken(PostTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BasiqVersion`
- **Returns**: `TokenResponse`
- **Error**: `ApiException<PostTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetToken400Error1([NotNullWhen(true)] out Token400Error1? value)` [400] · `TryGetToken404Error1([NotNullWhen(true)] out Token404Error1? value)` [404] · `TryGetToken500Error1([NotNullWhen(true)] out Token500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostTokenRequest` | `src/Basiq/Requests/AuthenticationApi/PostTokenRequest.cs` |
| `TokenResponse` | `src/Basiq/Models/TokenResponse.cs` |
| `PostTokenError` | `src/Basiq/Errors/PostTokenError.cs` |
| `Token400Error1` | `src/Basiq/Models/Token400Error1.cs` |
| `Token404Error1` | `src/Basiq/Models/Token404Error1.cs` |
| `Token500Error1` | `src/Basiq/Models/Token500Error1.cs` |

