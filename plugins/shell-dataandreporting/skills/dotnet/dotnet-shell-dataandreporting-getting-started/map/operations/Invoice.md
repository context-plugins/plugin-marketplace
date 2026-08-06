# Invoice — operations

Accessor: `client.Invoice` · Source: `Api/Invoice.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Dates
- **HTTP**: `POST /invoice-management/v1/dates` (OauthServer (api-test))
- **Notes**: This API will return the list of Invoice Dates and Numbers for the given date range. If the dates are not provided then it will fetch the data for past 13 months.
- **Signature**: `Dates(string requestId, InvoiceDatesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InvoiceDatesResponseData`
- **Error**: `SdkException<DatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Download
- **HTTP**: `POST /invoice-management/v1/download` (OauthServer (api-test))
- **Notes**: This API downloads Invoice Documents i.e., ZIP file with Invoice PDF file and Proofing Elements in XML format from invoice repository.
- **Signature**: `Download(string requestId, InvoiceDownloadRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<DownloadError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EidDownload
- **HTTP**: `POST /invoice-management/v1/eiddownload` (OauthServer (api-test))
- **Notes**: This service allows downloading one or more EID documents and the corresponding signature material (where applicable) in one single request The number of EID that can be downloaded at once is limited to 100 documents.
- **Signature**: `EidDownload(string requestId, EiddownloadRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<EidDownloadError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EidSearch
- **HTTP**: `POST /invoice-management/v1/eidsearch` (OauthServer (api-test))
- **Notes**: This API provides the functionality needed for the screen “EID FILES” in the web interface. It allows retrieving a list of EIDs based on search criteria.
- **Signature**: `EidSearch(string requestId, EidsearchRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EiddocumentResponse`
- **Error**: `SdkException<EidSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InvoiceSearch
- **HTTP**: `POST /invoice-management/v1/search` (OauthServer (api-test))
- **Notes**: This API allows to search invoice data in the Shell Card Platform. It provides flexible search criteria in the request body and supports paging. This API will also query the relevant invoice documents list and return a reference number that can be used to download invoice documents (PDF and Proofing elements in a zip file). Supported operations * Search invoices by account * Search invoices by invoice type or invoice status * Search invoices by invoice id or number * Search invoices by invoiced country * Search invoices including einvoices * Search invoices by summary document * Search invoices by statement of account * Search invoices by fixed and custom date periods
- **Signature**: `InvoiceSearch(string requestId, InvoiceSearchRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InvoiceSearchResponse`
- **Error**: `SdkException<InvoiceSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InvoiceSummary
- **HTTP**: `POST /invoice-management/v1/summary` (OauthServer (api-test))
- **Notes**: This API returns the high level summary of invoices that match the given search criteria. The same search criteria as the endpoint `/v1/invoice/search` is supported with the exception of paging related parameters. Supported operations * Search invoices by account * Search invoices by invoice type or invoice status * Search invoices by invoice id or number * Search invoices by invoiced country * Search invoices including einvoices * Search invoices by summary document * Search invoices by statement of account * Search invoices by fixed and custom date periods
- **Signature**: `InvoiceSummary(string requestId, InvoiceSummaryRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InvoiceSummaryResponse`
- **Error**: `SdkException<InvoiceSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchDocuments
- **HTTP**: `POST /invoice-management/v1/searchdocuments` (OauthServer (api-test))
- **Notes**: This API allows querying the details of all invoices successfully uploaded to the Worldline invoice repository and file reference numbers for downloading.
- **Signature**: `SearchDocuments(string requestId, SearchDocumentsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SearchDocumentsResponse`
- **Error**: `SdkException<SearchDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchStatementOfAccount
- **HTTP**: `POST /invoice-management/v1/searchstatementofaccount` (OauthServer (api-test))
- **Notes**: This API will allow querying of SOA from different systems
- **Signature**: `SearchStatementOfAccount(string requestId, SearchStatementOfAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SearchStatementOfAccountResponse`
- **Error**: `SdkException<SearchStatementOfAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StatementOfAccount
- **HTTP**: `POST /invoice-management/v1/statementofaccount` (OauthServer (api-test))
- **Notes**: This API allows querying the details of the latest statement of account (SOA) generated for a given Payer. The endpoint supports querying SOA documents by various input parameters specified in the request body. Supported operations * Search invoice SOA by payer and account * Search invoice SOA including monthly trend (last 13 months invocie trend summary) * Search invoice SOA including past SOAs * Search invoice SOA including due/overdue documents * Search invoice SOA including invoice summary
- **Signature**: `StatementOfAccount(string requestId, StatementOfAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StatementOfAccountResponse`
- **Error**: `SdkException<StatementOfAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorObject(out ErrorObject)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
