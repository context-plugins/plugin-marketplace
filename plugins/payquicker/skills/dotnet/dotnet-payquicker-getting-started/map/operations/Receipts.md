# Receipts — operations

Accessor: `client.Receipts` · Source: `Api/Receipts.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetReceipt
- **HTTP**: `GET /receipts/{receipt-token}` (Api (api))
- **Notes**: Fetch a single receipt by its token.
- **Signature**: `GetReceipt(string receiptToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `ReceiptResult`
- **Error**: `SdkException<GetReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadReceiptSearch
- **HTTP**: `GET /receipts/search/{searchId}` (Api (api))
- **Notes**: Retrieve a page from a previous receipt search.
- **Signature**: `ReadReceiptSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `ReceiptSearchResult`
- **Error**: `SdkException<ReadReceiptSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchReceipts
- **HTTP**: `POST /receipts/search` (Api (api))
- **Notes**: Search for receipts across scopes using a structured filter body. Include a `scope` property to identify the target (user, account, or prepaid-card token). The response carries page 1 of the results (or the page you requested via `page` / `pageSize`) and a `searchId` in the meta; use `GET /receipts/search/{searchId}` to read additional pages from the cached result set. See Searching , Filtering &amp; Sorting , and the Scope Discriminator . &gt; Hosted Portal programs can search company-account receipts only — see Program Types .
- **Signature**: `SearchReceipts(ReceiptSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `ReceiptSearchResult`
- **Error**: `SdkException<SearchReceiptsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
