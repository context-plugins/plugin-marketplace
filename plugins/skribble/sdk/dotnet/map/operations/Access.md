<!-- Generated file — do not edit; regenerated with the SDK. -->

# Access — operations

Accessor: `client.Access` · Source: `src/Skribble/Api/Access.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AccessLogin

- **Signature**: `AccessLogin(AccessLoginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Username`, `ApiKey`
- **Returns**: `string`
- **Error**: `ApiException<AccessLoginError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 403, 406, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AccessLoginRequest` | `src/Skribble/Requests/Access/AccessLoginRequest.cs` |
| `AccessLoginError` | `src/Skribble/Errors/AccessLoginError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

