<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.Account` · Source: `src/Rendex/Api/Account.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccount

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAccount(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1AccountResponse`
- **Error**: `ApiException<GetAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1AccountResponse` | `src/Rendex/Models/V1AccountResponse.cs` |
| `GetAccountError` | `src/Rendex/Errors/GetAccountError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

