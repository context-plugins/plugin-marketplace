# PaymentMethods — operations

Accessor: `client.PaymentMethods` · Source: `Api/PaymentMethods.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### OrdersGetPaymentMethods
- **HTTP**: `GET /payments/v1/orders/{orderId}/payment-methods` (Default (payments))
- **Notes**: Gets the payment methods available for a given order id.
- **Signature**: `OrdersGetPaymentMethods(string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentMethodsForOrderGet200Response`
- **Error**: `SdkException<OrdersGetPaymentMethodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrdersSearchVouchers
- **HTTP**: `POST /payments/v1/search-vouchers` (Default (payments))
- **Notes**: Returns a list of available vouchers matching the search criteria.
- **Signature**: `OrdersSearchVouchers(SearchVouchersRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentMethodsSearchVouchersPost200Response`
- **Error**: `SdkException<OrdersSearchVouchersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
