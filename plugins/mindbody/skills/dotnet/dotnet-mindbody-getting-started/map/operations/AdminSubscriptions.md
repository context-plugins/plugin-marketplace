# AdminSubscriptions — operations

Accessor: `client.AdminSubscriptions` · Source: `Api/AdminSubscriptions.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeactivateAdminSubscription
- **HTTP**: `DELETE /api/admin/subscriptions/{subscriptionId}` (Default (push-api))
- **Signature**: `DeactivateAdminSubscription(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PushApiResultAdminSubscription`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAdminSubscriptions
- **HTTP**: `GET /api/admin/subscriptions` (Default (push-api))
- **Signature**: `GetAdminSubscriptions(int? requestDeveloperId, string? requestSubscriptionStatus, string? requestStatusChangeUser, string? requestEventId, int? requestSubscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`requestDeveloperId` … `requestSubscriptionId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `request.developerId` ← `requestDeveloperId`, `request.subscriptionStatus` ← `requestSubscriptionStatus`, `request.statusChangeUser` ← `requestStatusChangeUser`, `request.eventId` ← `requestEventId`, `request.subscriptionId` ← `requestSubscriptionId`
- **Returns**: `PushApiResultAdminSubscription`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAdminSubscription
- **HTTP**: `PUT /api/admin/subscriptions` (Default (push-api))
- **Signature**: `UpdateAdminSubscription(AdminUpdateSubscriptionRequest updateSubscriptionRequest, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PushApiResultAdminSubscription`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
