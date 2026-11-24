<!-- Generated file — do not edit; regenerated with the SDK. -->

# User — operations

Accessor: `client.User` · Source: `src/Skribble/Api/User.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetUserSignatureQualities

- **Server group**: `DefaultSkribbleUserApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetUserSignatureQualities(GetUserSignatureQualitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `username` ← `Username`
- **Returns**: `UserSignatureQualitiesResponse`
- **Error**: `ApiException<GetUserSignatureQualitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserSignatureQualitiesRequest` | `src/Skribble/Requests/User/GetUserSignatureQualitiesRequest.cs` |
| `UserSignatureQualitiesResponse` | `src/Skribble/Models/UserSignatureQualitiesResponse.cs` |
| `GetUserSignatureQualitiesError` | `src/Skribble/Errors/GetUserSignatureQualitiesError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

