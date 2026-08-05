# AccountServiceController — operations

Accessor: `client.AccountServiceController` · Source: `Api/AccountServiceController.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountInformationUsingGet
- **HTTP**: `GET /v1/accounts/{accountName}` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns aaccount information associated with a specified account.
- **Signature**: `GetAccountInformationUsingGet(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetAccountInformationResponseforplanner`
- **Error**: `SdkException<GetAccountInformationUsingGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponseforplanner(out RestErrorResponseforplanner)` [400, 403, 404, 406, 429] · `TryGetAuthRestErrorResponseforplanner(out AuthRestErrorResponseforplanner)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
