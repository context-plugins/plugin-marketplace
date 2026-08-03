# ApiExports — operations

Accessor: `client.ApiExports` · Source: `Api/ApiExports.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ExportInvoices
- **HTTP**: `POST /api_exports/invoices.json` (Production)
- **Notes**: Creates an invoices export and returns a batch job object.
- **Signature**: `ExportInvoices(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchJobResponse`
- **Error**: `SdkException<ExportInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetSingleErrorResponse(out SingleErrorResponse)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ExportProformaInvoices
- **HTTP**: `POST /api_exports/proforma_invoices.json` (Production)
- **Notes**: Creates a proforma invoices export and returns a batch job object. It is only available for Relationship Invoicing architecture.
- **Signature**: `ExportProformaInvoices(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchJobResponse`
- **Error**: `SdkException<ExportProformaInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetSingleErrorResponse(out SingleErrorResponse)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ExportSubscriptions
- **HTTP**: `POST /api_exports/subscriptions.json` (Production)
- **Notes**: Creates a subscriptions export and returns a batch job object.
- **Signature**: `ExportSubscriptions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchJobResponse`
- **Error**: `SdkException<ExportSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetSingleErrorResponse(out SingleErrorResponse)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListExportedInvoices
- **HTTP**: `GET /api_exports/invoices/{batch_id}/rows.json` (Production)
- **Notes**: Lists exported invoices for a provided `batch_id`. Use pagination to control responses returned from the server. Example: `GET https://{subdomain}.chargify.com/api_exports/invoices/123/rows?per_page=10000&amp;page=1`.
- **Signature**: `ListExportedInvoices(string batchId, int? perPage = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `perPage` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `per_page` ← `perPage`, `page` ← `page`
- **Returns**: `IReadOnlyList<Invoice>`
- **Error**: `SdkException<ListExportedInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListExportedProformaInvoices
- **HTTP**: `GET /api_exports/proforma_invoices/{batch_id}/rows.json` (Production)
- **Notes**: Lists exported proforma invoices for a provided `batch_id`. Use pagination to control responses returned from the server. Example: `GET https://{subdomain}.chargify.com/api_exports/proforma_invoices/123/rows?per_page=10000&amp;page=1`.
- **Signature**: `ListExportedProformaInvoices(string batchId, int? perPage = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `perPage` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `per_page` ← `perPage`, `page` ← `page`
- **Returns**: `IReadOnlyList<ProformaInvoice>`
- **Error**: `SdkException<ListExportedProformaInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListExportedSubscriptions
- **HTTP**: `GET /api_exports/subscriptions/{batch_id}/rows.json` (Production)
- **Notes**: Lists exported subscriptions for a provided `batch_id`. Use pagination to control responses returned from the server. Example: `GET https://{subdomain}.chargify.com/api_exports/subscriptions/123/rows?per_page=200&amp;page=1`.
- **Signature**: `ListExportedSubscriptions(string batchId, int? perPage = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `perPage` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `per_page` ← `perPage`, `page` ← `page`
- **Returns**: `IReadOnlyList<Subscription>`
- **Error**: `SdkException<ListExportedSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadInvoicesExport
- **HTTP**: `GET /api_exports/invoices/{batch_id}.json` (Production)
- **Notes**: Returns a batch job object for an invoices export.
- **Signature**: `ReadInvoicesExport(string batchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchJobResponse`
- **Error**: `SdkException<ReadInvoicesExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadProformaInvoicesExport
- **HTTP**: `GET /api_exports/proforma_invoices/{batch_id}.json` (Production)
- **Notes**: Returns a batch job object for a proforma invoices export.
- **Signature**: `ReadProformaInvoicesExport(string batchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchJobResponse`
- **Error**: `SdkException<ReadProformaInvoicesExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadSubscriptionsExport
- **HTTP**: `GET /api_exports/subscriptions/{batch_id}.json` (Production)
- **Notes**: Returns a batch job object for a subscriptions export.
- **Signature**: `ReadSubscriptionsExport(string batchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchJobResponse`
- **Error**: `SdkException<ReadSubscriptionsExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
