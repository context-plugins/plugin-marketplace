<!-- Generated file — do not edit; regenerated with the SDK. -->

# Purchases — operations

Accessor: `client.Purchases` · Source: `src/DidLogic/Api/Purchases.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PurchasesIndex

- **Auth**: `options.BearerAuth`
- **Signature**: `PurchasesIndex(PurchasesIndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `per_page` ← `PerPage`
- **Returns**: `ApiV1PurchasesResponse`
- **Error**: `ApiException<PurchasesIndexError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Purchases403Error1([NotNullWhen(true)] out ApiV1Purchases403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PurchasesIndexRequest` | `src/DidLogic/Requests/Purchases/PurchasesIndexRequest.cs` |
| `ApiV1PurchasesResponse` | `src/DidLogic/Models/ApiV1PurchasesResponse.cs` |
| `PurchasesIndexError` | `src/DidLogic/Errors/PurchasesIndexError.cs` |
| `ApiV1Purchases403Error1` | `src/DidLogic/Models/ApiV1Purchases403Error1.cs` |

