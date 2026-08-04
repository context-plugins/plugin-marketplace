# AccountActivity — operations

Accessor: `client.AccountActivity` · Source: `Api/AccountActivity.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAccountActivitySubscription
- **HTTP**: `POST /2/account_activity/webhooks/{webhook_id}/subscriptions/all` (Default (api))
- **Notes**: Creates an Account Activity subscription for the user and the given webhook.
- **Signature**: `CreateAccountActivitySubscription(string webhookId, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateAccountActivitySubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAccountActivitySubscription
- **HTTP**: `DELETE /2/account_activity/webhooks/{webhook_id}/subscriptions/{user_id}/all` (Default (api))
- **Notes**: Deletes an Account Activity subscription for the given webhook and user ID.
- **Signature**: `DeleteAccountActivitySubscription(string webhookId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteAccountActivitySubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountActivitySubscriptionCount
- **HTTP**: `GET /2/account_activity/subscriptions/count` (Default (api))
- **Signature**: `GetAccountActivitySubscriptionCount(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetAccountActivitySubscriptionCountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountActivitySubscriptions
- **HTTP**: `GET /2/account_activity/webhooks/{webhook_id}/subscriptions/all/list` (Default (api))
- **Signature**: `GetAccountActivitySubscriptions(string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetAccountActivitySubscriptionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ValidateAccountActivitySubscription
- **HTTP**: `GET /2/account_activity/webhooks/{webhook_id}/subscriptions/all` (Default (api))
- **Signature**: `ValidateAccountActivitySubscription(string webhookId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ValidateAccountActivitySubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
