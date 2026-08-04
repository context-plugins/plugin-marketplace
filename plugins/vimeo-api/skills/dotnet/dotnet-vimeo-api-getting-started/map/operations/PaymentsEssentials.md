# PaymentsEssentials — operations

Accessor: `client.PaymentsEssentials` · Source: `Api/PaymentsEssentials.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeletePaymentMethod
- **HTTP**: `DELETE /me/payment_methods/{payment_method_id}` (Default (api))
- **Notes**: This method deletes the specified Vimeo payments service payment method.
- **Signature**: `DeletePaymentMethod(string paymentMethodId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeletePaymentMethodError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentMethodInfo
- **HTTP**: `GET /me/payment_methods/{payment_method_id}` (Default (api))
- **Notes**: This method returns information about the specified Vimeo payments service payment method.
- **Signature**: `GetPaymentMethodInfo(string paymentMethodId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentMethod`
- **Error**: `SdkException<GetPaymentMethodInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSubscriptionInfo
- **HTTP**: `GET /users/{user_id}/subscriptions/{subscription_id}` (Default (api))
- **Notes**: This method returns information about the specified Vimeo payments service subscription.
- **Signature**: `GetSubscriptionInfo(string subscriptionId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListPaymentMethods
- **HTTP**: `GET /me/payment_methods` (Default (api))
- **Notes**: This method returns a list of all Vimeo payments service payment methods that are available to the authenticated user.
- **Signature**: `ListPaymentMethods(string? cardmemberName, double? page, double? perPage, bool? showDisabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`cardmemberName` … `showDisabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cardmember_name` ← `cardmemberName`, `page` ← `page`, `per_page` ← `perPage`, `show_disabled` ← `showDisabled`
- **Returns**: `PaymentMethodConnection`
- **Error**: `SdkException<ListPaymentMethodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
