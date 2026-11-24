<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdAccounts — operations

Accessor: `client.AdAccounts` · Source: `src/FacebookBusinessManager/Api/AdAccounts.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAdAccount

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAdAccount(GetAdAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`
- **Query params (wire ← C#)**: `fields` ← `Fields`
- **Returns**: `AdAccount`
- **Error**: `ApiException<GetAdAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAdAccountRequest` | `src/FacebookBusinessManager/Requests/AdAccounts/GetAdAccountRequest.cs` |
| `AdAccount` | `src/FacebookBusinessManager/Models/AdAccount.cs` |
| `GetAdAccountError` | `src/FacebookBusinessManager/Errors/GetAdAccountError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

