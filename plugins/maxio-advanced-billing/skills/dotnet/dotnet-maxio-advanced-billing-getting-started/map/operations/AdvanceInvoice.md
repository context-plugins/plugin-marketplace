# AdvanceInvoice — operations

Accessor: `client.AdvanceInvoice` · Source: `Api/AdvanceInvoice.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### IssueAdvanceInvoice
- **HTTP**: `POST /subscriptions/{subscription_id}/advance_invoice/issue.json` (Production)
- **Notes**: Issues an invoice in advance for a subscription's next renewal date. See our docs for more information on advance invoices, including eligibility for generating one; for the most part, they function like any other invoice, except they are issued early and have special behavior upon being voided. A subscription may only have one advance invoice per billing period. Attempting to issue an advance invoice when one already exists will return an error. That said, regeneration of the invoice may be forced with the params `force: true`, which will void an advance invoice if one exists and generate a new one. If no advance invoice exists, a new one will be generated. We recommend using either the create or preview endpoints for proforma invoices to preview this advance invoice before using this endpoint to generate it.
- **Signature**: `IssueAdvanceInvoice(int subscriptionId, IssueAdvanceInvoiceRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Invoice`
- **Error**: `SdkException<IssueAdvanceInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadAdvanceInvoice
- **HTTP**: `GET /subscriptions/{subscription_id}/advance_invoice.json` (Production)
- **Notes**: Returns the advance invoice generated for a subscription's upcoming renewal. There can only be one advance invoice per subscription per billing cycle.
- **Signature**: `ReadAdvanceInvoice(int subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Invoice`
- **Error**: `SdkException<ReadAdvanceInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VoidAdvanceInvoice
- **HTTP**: `POST /subscriptions/{subscription_id}/advance_invoice/void.json` (Production)
- **Notes**: Voids a subscription's existing advance invoice. Once voided, it can later be regenerated if desired. A `reason` is required in order to void, and the invoice must have an open status. Voiding will cause any prepayments and credits that were applied to the invoice to be returned to the subscription. For a full overview of the impact of voiding, see our help docs .
- **Signature**: `VoidAdvanceInvoice(int subscriptionId, VoidInvoiceRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Invoice`
- **Error**: `SdkException<VoidAdvanceInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
