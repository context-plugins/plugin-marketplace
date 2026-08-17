# TransferRoutes — operations

Accessor: `client.TransferRoutes` · Source: `Api/TransferRoutes.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostTransferRoutesCalculate
- **HTTP**: `POST /transferRoutes/calculate` (Default13 (balanceplatform-api-test))
- **Notes**: Returns available transfer routes based on a combination of transfer `country`, `currency`, `counterparty`, and `priorities`. Use this endpoint to find optimal transfer priorities and associated requirements before you make a transfer .
- **Signature**: `PostTransferRoutesCalculate(TransferRouteRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransferRouteResponse`
- **Error**: `SdkException<PostTransferRoutesCalculateError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
