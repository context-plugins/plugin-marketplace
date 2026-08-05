# SoftwareManagementSubscriptionsV3 — operations

Accessor: `client.SoftwareManagementSubscriptionsV3` · Source: `Api/SoftwareManagementSubscriptionsV3.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountSubscriptionStatus3
- **HTTP**: `GET /subscriptions/{acc}` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint retrieves a FOTA subscription by account.
- **Signature**: `GetAccountSubscriptionStatus3(string acc, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV3Subscription`
- **Error**: `SdkException<GetAccountSubscriptionStatus3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
