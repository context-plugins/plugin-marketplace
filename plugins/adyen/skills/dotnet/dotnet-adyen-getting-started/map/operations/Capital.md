# Capital — operations

Accessor: `client.Capital` · Source: `Api/Capital.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetGrants
- **HTTP**: `GET /grants` (Default14 (balanceplatform-api-test))
- **Notes**: Returns a list of grants with status and outstanding balances.
- **Signature**: `GetGrants(string? counterpartyAccountHolderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `counterpartyAccountHolderId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `counterpartyAccountHolderId` ← `counterpartyAccountHolderId`
- **Returns**: `CapitalGrants`
- **Error**: `SdkException<GetGrantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGrantsId
- **HTTP**: `GET /grants/{id}` (Default14 (balanceplatform-api-test))
- **Notes**: Returns the details of a capital account specified in the path.
- **Signature**: `GetGrantsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CapitalGrant`
- **Error**: `SdkException<GetGrantsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGrants
- **HTTP**: `POST /grants` (Default14 (balanceplatform-api-test))
- **Notes**: Requests the payout of the selected grant offer.
- **Signature**: `PostGrants(string? idempotencyKey, CapitalGrantInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CapitalGrant`
- **Error**: `SdkException<PostGrantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
