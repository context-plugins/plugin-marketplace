# AccountSubscriptions — operations

Accessor: `client.AccountSubscriptions` · Source: `Api/AccountSubscriptions.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListAccountSubscriptions
- **HTTP**: `POST /v1/accounts/subscriptions/actions/list` (M2M (thingspace))
- **Notes**: Retrieves the total number of SIM-Secure for IoT subscription licenses purchased for your account by license type, and lists the number of licenses assigned and available for each license type.
- **Signature**: `ListAccountSubscriptions(string? xRequestId, SecuritySubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SecuritySubscriptionResult`
- **Error**: `SdkException<ListAccountSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetSecurityResult(out SecurityResult)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
