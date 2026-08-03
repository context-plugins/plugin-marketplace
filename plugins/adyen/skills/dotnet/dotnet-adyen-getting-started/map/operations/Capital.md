# Capital — operations

Accessor: `client.Capital` · Source: `Api/Capital.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetGrantsId
- **HTTP**: `GET /grants/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of a capital account specified in the path.
- **Signature**: `GetGrantsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CapitalGrant`
- **Error**: `SdkException<GetGrantsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
