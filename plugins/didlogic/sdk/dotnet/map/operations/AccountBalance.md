<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountBalance — operations

Accessor: `client.AccountBalance` · Source: `src/DidLogic/Api/AccountBalance.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BalanceShow

- **Auth**: `options.BearerAuth`
- **Signature**: `BalanceShow(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1BalanceResponse`
- **Error**: `ApiException<BalanceShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Balance403Error1([NotNullWhen(true)] out ApiV1Balance403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1BalanceResponse` | `src/DidLogic/Models/ApiV1BalanceResponse.cs` |
| `BalanceShowError` | `src/DidLogic/Errors/BalanceShowError.cs` |
| `ApiV1Balance403Error1` | `src/DidLogic/Models/ApiV1Balance403Error1.cs` |

