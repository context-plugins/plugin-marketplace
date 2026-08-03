# Orders — operations

Accessor: `client.Orders` · Source: `Api/Orders.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AuthorizeOrder
- **HTTP**: `POST /v2/checkout/orders/{id}/authorize` (Default (api-m))
- **Notes**: Authorizes payment for an order. To successfully authorize payment for an order, the buyer must first approve the order or a valid payment_source must be provided in the request. A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response. Note: For error handling and troubleshooting, see Orders v2 errors.
- **Signature**: `AuthorizeOrder(string id, string? payPalMockResponse, string? payPalRequestId, string? payPalClientMetadataId, string? payPalAuthAssertion, OrderAuthorizeRequest? body, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`payPalMockResponse` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `OrderAuthorizeResponse`
- **Error**: `SdkException<AuthorizeOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CaptureOrder
- **HTTP**: `POST /v2/checkout/orders/{id}/capture` (Default (api-m))
- **Notes**: Captures payment for an order. To successfully capture payment for an order, the buyer must first approve the order or a valid payment_source must be provided in the request. A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response. Note: For error handling and troubleshooting, see Orders v2 errors.
- **Signature**: `CaptureOrder(string id, string? payPalMockResponse, string? payPalRequestId, string? payPalClientMetadataId, string? payPalAuthAssertion, OrderCaptureRequest? body, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`payPalMockResponse` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `Order`
- **Error**: `SdkException<CaptureOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ConfirmOrder
- **HTTP**: `POST /v2/checkout/orders/{id}/confirm-payment-source` (Default (api-m))
- **Notes**: Payer confirms their intent to pay for the the Order with the given payment source.
- **Signature**: `ConfirmOrder(string id, string? payPalClientMetadataId, string? payPalAuthAssertion, ConfirmOrderRequest? body, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalClientMetadataId` — nullable, no default → **must pass explicitly**
  - `payPalAuthAssertion` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `Order`
- **Error**: `SdkException<ConfirmOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrder
- **HTTP**: `POST /v2/checkout/orders` (Default (api-m))
- **Notes**: Creates an order. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see checkout or multiparty checkout. Note: For error handling and troubleshooting, see Orders v2 errors.
- **Signature**: `CreateOrder(string? payPalMockResponse, string? payPalRequestId, string? payPalPartnerAttributionId, string? payPalClientMetadataId, string? payPalAuthAssertion, OrderRequest body, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`payPalMockResponse` … `payPalAuthAssertion`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `Order`
- **Error**: `SdkException<CreateOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrderTracking
- **HTTP**: `POST /v2/checkout/orders/{id}/track` (Default (api-m))
- **Notes**: Adds tracking information for an Order.
- **Signature**: `CreateOrderTracking(string id, string? payPalAuthAssertion, OrderTrackerRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalAuthAssertion` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Order`
- **Error**: `SdkException<CreateOrderTrackingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrder
- **HTTP**: `GET /v2/checkout/orders/{id}` (Default (api-m))
- **Notes**: Shows details for an order, by ID. Note: For error handling and troubleshooting, see Orders v2 errors.
- **Signature**: `GetOrder(string id, string? fields, string? payPalMockResponse, string? payPalAuthAssertion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - `payPalMockResponse` — nullable, no default → **must pass explicitly**
  - `payPalAuthAssertion` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fields` ← `fields`
- **Returns**: `Order`
- **Error**: `SdkException<GetOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchOrder
- **HTTP**: `PATCH /v2/checkout/orders/{id}` (Default (api-m))
- **Notes**: Updates an order with a `CREATED` or `APPROVED` status. You cannot update an order with the `COMPLETED` status.&lt;br/&gt;&lt;br/&gt;To make an update, you must provide a `reference_id`. If you omit this value with an order that contains only one purchase unit, PayPal sets the value to `default` which enables you to use the path: &lt;code&gt;\"/purchase_units/@reference_id=='default'/{attribute-or-object}\"&lt;/code&gt;. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see &lt;a href="https://developer.paypal.com/docs/checkout/advanced/processing/"&gt;checkout&lt;/a&gt; or &lt;a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/"&gt;multiparty checkout&lt;/a&gt;.&lt;blockquote&gt;&lt;strong&gt;Note:&lt;/strong&gt; For error handling and troubleshooting, see &lt;a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/patch-order"&gt;Orders v2 errors&lt;/a&gt;.&lt;/blockquote&gt;Patchable attributes or objects:&lt;br/&gt;&lt;br/&gt;&lt;table&gt;&lt;thead&gt;&lt;th&gt;Attribute&lt;/th&gt;&lt;th&gt;Op&lt;/th&gt;&lt;th&gt;Notes&lt;/th&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;intent&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;payer&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add&lt;/td&gt;&lt;td&gt;Using replace op for &lt;code&gt;payer&lt;/code&gt; will replace the whole &lt;code&gt;payer&lt;/code&gt; object with the value sent in request.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].custom_id&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add, remove&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].description&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add, remove&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].payee.email&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].shipping.name&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].shipping.email_address&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].shipping.phone_number&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].shipping.options&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].shipping.address&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].shipping.type&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].soft_descriptor&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, remove&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].amount&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].items&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add, remove&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].invoice_id&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add, remove&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].payment_instruction&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].payment_instruction.disbursement_mode&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace&lt;/td&gt;&lt;td&gt;By default, &lt;code&gt;disbursement_mode&lt;/code&gt; is &lt;code&gt;INSTANT&lt;/code&gt;.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].payment_instruction.payee_receivable_fx_rate_id&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add, remove&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].payment_instruction.platform_fees&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add, remove&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].supplementary_data.airline&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add, remove&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;purchase_units[].supplementary_data.card&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add, remove&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;&lt;code&gt;application_context.client_configuration&lt;/code&gt;&lt;/td&gt;&lt;td&gt;replace, add&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;
- **Signature**: `PatchOrder(string id, string? payPalMockResponse, string? payPalAuthAssertion, IReadOnlyList<Patch>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalMockResponse` — nullable, no default → **must pass explicitly**
  - `payPalAuthAssertion` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrderTracking
- **HTTP**: `PATCH /v2/checkout/orders/{id}/trackers/{tracker_id}` (Default (api-m))
- **Notes**: Updates or cancels the tracking information for a PayPal order, by ID. Updatable attributes or objects: Attribute Op Notes items replace Using replace op for items will replace the entire items object with the value sent in request. notify_payer replace, add status replace Only patching status to CANCELLED is currently supported.
- **Signature**: `UpdateOrderTracking(string id, string trackerId, string? payPalAuthAssertion, IReadOnlyList<Patch>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalAuthAssertion` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrderTrackingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
