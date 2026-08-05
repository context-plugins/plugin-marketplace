# SoftwareManagementSubscriptionsV2 — operations

Accessor: `client.SoftwareManagementSubscriptionsV2` · Source: `Api/SoftwareManagementSubscriptionsV2.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountSubscriptionStatus2
- **HTTP**: `GET /subscriptions/{account}` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint retrieves a FOTA subscription by account.
- **Signature**: `GetAccountSubscriptionStatus2(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV2Subscription`
- **Error**: `SdkException<GetAccountSubscriptionStatus2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
