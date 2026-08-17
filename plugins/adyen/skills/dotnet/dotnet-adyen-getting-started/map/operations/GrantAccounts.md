# GrantAccounts — operations

Accessor: `client.GrantAccounts` · Source: `Api/GrantAccounts.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetGrantAccountsId
- **HTTP**: `GET /grantAccounts/{id}` (Default13 (balanceplatform-api-test))
- **Notes**: Returns the details of the grant account .
- **Signature**: `GetGrantAccountsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CapitalGrantAccount`
- **Error**: `SdkException<GetGrantAccountsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGrantAccountsId1
- **HTTP**: `GET /grantAccounts/{id}` (Default15 (balanceplatform-api-test))
- **Notes**: Returns the details of the specified grant account. This account tracks existing grants in your marketplace or platform.
- **Signature**: `GetGrantAccountsId1(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GrantAccount`
- **Error**: `SdkException<GetGrantAccountsId1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
