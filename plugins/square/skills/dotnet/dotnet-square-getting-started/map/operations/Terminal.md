# Terminal — operations

Accessor: `client.Terminal` · Source: `Api/Terminal.cs` · 15 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelTerminalAction
- **HTTP**: `POST /v2/terminals/actions/{action_id}/cancel` (Default (connect))
- **Notes**: Cancels a Terminal action request if the status of the request permits it.
- **Signature**: `CancelTerminalAction(string actionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelTerminalActionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CancelTerminalCheckout
- **HTTP**: `POST /v2/terminals/checkouts/{checkout_id}/cancel` (Default (connect))
- **Notes**: Cancels a Terminal checkout request if the status of the request permits it.
- **Signature**: `CancelTerminalCheckout(string checkoutId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelTerminalCheckoutResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CancelTerminalRefund
- **HTTP**: `POST /v2/terminals/refunds/{terminal_refund_id}/cancel` (Default (connect))
- **Notes**: Cancels an Interac Terminal refund request by refund request ID if the status of the request permits it.
- **Signature**: `CancelTerminalRefund(string terminalRefundId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelTerminalRefundResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateTerminalAction
- **HTTP**: `POST /v2/terminals/actions` (Default (connect))
- **Notes**: Creates a Terminal action request and sends it to the specified device.
- **Signature**: `CreateTerminalAction(CreateTerminalActionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateTerminalActionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateTerminalCheckout
- **HTTP**: `POST /v2/terminals/checkouts` (Default (connect))
- **Notes**: Creates a Terminal checkout request and sends it to the specified device to take a payment for the requested amount.
- **Signature**: `CreateTerminalCheckout(CreateTerminalCheckoutRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateTerminalCheckoutResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateTerminalRefund
- **HTTP**: `POST /v2/terminals/refunds` (Default (connect))
- **Notes**: Creates a request to refund an Interac payment completed on a Square Terminal. Refunds for Interac payments on a Square Terminal are supported only for Interac debit cards in Canada. Other refunds for Terminal payments should use the Refunds API. For more information, see Refunds API .
- **Signature**: `CreateTerminalRefund(CreateTerminalRefundRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateTerminalRefundResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DismissTerminalAction
- **HTTP**: `POST /v2/terminals/actions/{action_id}/dismiss` (Default (connect))
- **Notes**: Dismisses a Terminal action request if the status and type of the request permits it. See Link and Dismiss Actions for more details.
- **Signature**: `DismissTerminalAction(string actionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DismissTerminalActionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DismissTerminalCheckout
- **HTTP**: `POST /v2/terminals/checkouts/{checkout_id}/dismiss` (Default (connect))
- **Notes**: Dismisses a Terminal checkout request if the status and type of the request permits it.
- **Signature**: `DismissTerminalCheckout(string checkoutId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DismissTerminalCheckoutResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DismissTerminalRefund
- **HTTP**: `POST /v2/terminals/refunds/{terminal_refund_id}/dismiss` (Default (connect))
- **Notes**: Dismisses a Terminal refund request if the status and type of the request permits it.
- **Signature**: `DismissTerminalRefund(string terminalRefundId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DismissTerminalRefundResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTerminalAction
- **HTTP**: `GET /v2/terminals/actions/{action_id}` (Default (connect))
- **Notes**: Retrieves a Terminal action request by `action_id`. Terminal action requests are available for 30 days.
- **Signature**: `GetTerminalAction(string actionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetTerminalActionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTerminalCheckout
- **HTTP**: `GET /v2/terminals/checkouts/{checkout_id}` (Default (connect))
- **Notes**: Retrieves a Terminal checkout request by `checkout_id`. Terminal checkout requests are available for 30 days.
- **Signature**: `GetTerminalCheckout(string checkoutId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetTerminalCheckoutResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTerminalRefund
- **HTTP**: `GET /v2/terminals/refunds/{terminal_refund_id}` (Default (connect))
- **Notes**: Retrieves an Interac Terminal refund object by ID. Terminal refund objects are available for 30 days.
- **Signature**: `GetTerminalRefund(string terminalRefundId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetTerminalRefundResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchTerminalActions
- **HTTP**: `POST /v2/terminals/actions/search` (Default (connect))
- **Notes**: Retrieves a filtered list of Terminal action requests created by the account making the request. Terminal action requests are available for 30 days.
- **Signature**: `SearchTerminalActions(SearchTerminalActionsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchTerminalActionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchTerminalCheckouts
- **HTTP**: `POST /v2/terminals/checkouts/search` (Default (connect))
- **Notes**: Returns a filtered list of Terminal checkout requests created by the application making the request. Only Terminal checkout requests created for the merchant scoped to the OAuth token are returned. Terminal checkout requests are available for 30 days.
- **Signature**: `SearchTerminalCheckouts(SearchTerminalCheckoutsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchTerminalCheckoutsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchTerminalRefunds
- **HTTP**: `POST /v2/terminals/refunds/search` (Default (connect))
- **Notes**: Retrieves a filtered list of Interac Terminal refund requests created by the seller making the request. Terminal refund requests are available for 30 days.
- **Signature**: `SearchTerminalRefunds(SearchTerminalRefundsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchTerminalRefundsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
