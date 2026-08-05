# MoneyMovement — operations

Accessor: `client.MoneyMovement` · Source: `Api/MoneyMovement.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountAssetTransferNetworks
- **HTTP**: `GET /accounts/{accountId}/asset-transfer-networks` (Core (financialdataexchange-prod))
- **Notes**: ...
- **Signature**: `GetAccountAssetTransferNetworks(string accountId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AssetTransferNetworkList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountPaymentNetworks
- **HTTP**: `GET /accounts/{accountId}/payment-networks` (Core (financialdataexchange-prod))
- **Notes**: Get payment networks supported by the account
- **Signature**: `GetAccountPaymentNetworks(string accountId, string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `ArrayOfAccountPaymentNetworks`
- **Error**: `SdkException<GetAccountPaymentNetworksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
