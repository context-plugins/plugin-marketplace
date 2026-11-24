<!-- Generated file — do not edit; regenerated with the SDK. -->

# BsDs — operations

Accessor: `client.BsDs` · Source: `src/Bitly/Api/BsDs.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBsDs

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBsDs(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BsDsResponse`
- **Error**: `ApiException<GetBsDsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BsDsResponse` | `src/Bitly/Models/BsDsResponse.cs` |
| `GetBsDsError` | `src/Bitly/Errors/GetBsDsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

