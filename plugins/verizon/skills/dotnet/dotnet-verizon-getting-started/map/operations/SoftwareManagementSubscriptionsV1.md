# SoftwareManagementSubscriptionsV1 — operations

Accessor: `client.SoftwareManagementSubscriptionsV1` · Source: `Api/SoftwareManagementSubscriptionsV1.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountLicenseStatus
- **HTTP**: `GET /licenses/{account}/index/{startIndex}` (SoftwareManagementV1 (thingspace))
- **Notes**: Returns information about an account's Software Management Services licenses and a list of licensed devices.
- **Signature**: `GetAccountLicenseStatus(string account, string startIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountLicenseInfo`
- **Error**: `SdkException<GetAccountLicenseStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountSubscriptionStatus
- **HTTP**: `GET /subscriptions/{account}` (SoftwareManagementV1 (thingspace))
- **Notes**: This subscriptions endpoint retrieves an account's current Software Management Service subscription status.
- **Signature**: `GetAccountSubscriptionStatus(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1AccountSubscription`
- **Error**: `SdkException<GetAccountSubscriptionStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
