# Invoices — operations

Accessor: `client.Invoices` · Source: `Api/Invoices.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelInvoice
- **HTTP**: `POST /v2/invoices/{invoice_id}/cancel` (Default (connect))
- **Notes**: Cancels an invoice. The seller cannot collect payments for the canceled invoice. You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.
- **Signature**: `CancelInvoice(string invoiceId, CancelInvoiceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelInvoiceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateInvoice
- **HTTP**: `POST /v2/invoices` (Default (connect))
- **Notes**: Creates a draft invoice for an order created using the Orders API. A draft invoice remains in your account and no action is taken. You must publish the invoice before Square can process it (send it to the customer's email address or charge the customer’s card on file).
- **Signature**: `CreateInvoice(CreateInvoiceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateInvoiceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateInvoiceAttachment
- **HTTP**: `POST /v2/invoices/{invoice_id}/attachments` (Default (connect))
- **Notes**: Uploads a file and attaches it to an invoice. This endpoint accepts HTTP multipart/form-data file uploads with a JSON `request` part and a `file` part. The `file` part must be a `readable stream` that contains a file in a supported format: GIF, JPEG, PNG, TIFF, BMP, or PDF. Invoices can have up to 10 attachments with a total file size of 25 MB. Attachments can be added only to invoices in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state. __NOTE:__ When testing in the Sandbox environment, the total file size is limited to 1 KB.
- **Signature**: `CreateInvoiceAttachment(string invoiceId, CreateInvoiceAttachmentRequest? request, BinaryContent? imageFile, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `request` — nullable, no default → **must pass explicitly**
  - `imageFile` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateInvoiceAttachmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInvoice
- **HTTP**: `DELETE /v2/invoices/{invoice_id}` (Default (connect))
- **Notes**: Deletes the specified invoice. When an invoice is deleted, the associated order status changes to CANCELED. You can only delete a draft invoice (you cannot delete a published invoice, including one that is scheduled for processing).
- **Signature**: `DeleteInvoice(string invoiceId, int? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`
- **Returns**: `DeleteInvoiceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInvoiceAttachment
- **HTTP**: `DELETE /v2/invoices/{invoice_id}/attachments/{attachment_id}` (Default (connect))
- **Notes**: Removes an attachment from an invoice and permanently deletes the file. Attachments can be removed only from invoices in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.
- **Signature**: `DeleteInvoiceAttachment(string invoiceId, string attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteInvoiceAttachmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetInvoice
- **HTTP**: `GET /v2/invoices/{invoice_id}` (Default (connect))
- **Notes**: Retrieves an invoice by invoice ID.
- **Signature**: `GetInvoice(string invoiceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetInvoiceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInvoices
- **HTTP**: `GET /v2/invoices` (Default (connect))
- **Notes**: Returns a list of invoices for a given location. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of invoices.
- **Signature**: `ListInvoices(string locationId, string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location_id` ← `locationId`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ListInvoicesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PublishInvoice
- **HTTP**: `POST /v2/invoices/{invoice_id}/publish` (Default (connect))
- **Notes**: Publishes the specified draft invoice. After an invoice is published, Square follows up based on the invoice configuration. For example, Square sends the invoice to the customer's email address, charges the customer's card on file, or does nothing. Square also makes the invoice available on a Square-hosted invoice page. The invoice `status` also changes from `DRAFT` to a status based on the invoice configuration. For example, the status changes to `UNPAID` if Square emails the invoice or `PARTIALLY_PAID` if Square charges a card on file for a portion of the invoice amount. In addition to the required `ORDERS_WRITE` and `INVOICES_WRITE` permissions, `CUSTOMERS_READ` and `PAYMENTS_WRITE` are required when publishing invoices configured for card-on-file payments.
- **Signature**: `PublishInvoice(string invoiceId, PublishInvoiceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PublishInvoiceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchInvoices
- **HTTP**: `POST /v2/invoices/search` (Default (connect))
- **Notes**: Searches for invoices from a location specified in the filter. You can optionally specify customers in the filter for whom to retrieve invoices. In the current implementation, you can only specify one location and optionally one customer. The response is paginated. If truncated, the response includes a `cursor` that you use in a subsequent request to retrieve the next set of invoices.
- **Signature**: `SearchInvoices(SearchInvoicesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchInvoicesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInvoice
- **HTTP**: `PUT /v2/invoices/{invoice_id}` (Default (connect))
- **Notes**: Updates an invoice. This endpoint supports sparse updates, so you only need to specify the fields you want to change along with the required `version` field. Some restrictions apply to updating invoices. For example, you cannot change the `order_id` or `location_id` field.
- **Signature**: `UpdateInvoice(string invoiceId, UpdateInvoiceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateInvoiceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
