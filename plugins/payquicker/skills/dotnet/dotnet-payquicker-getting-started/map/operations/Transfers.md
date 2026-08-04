# Transfers — operations

Accessor: `client.Transfers` · Source: `Api/Transfers.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteTransfer
- **HTTP**: `DELETE /transfers/{transfer-token}` (Api (api))
- **Notes**: Cancel an open transfer quote before it has been accepted. Once cancelled, the quote status transitions to `CANCELLED` and any reserved funds are released. The `transfer-id` path parameter must be a valid transfer token in the format `{prefix}-{uuid}` where prefix is one of `pmnt`, `spnd`, `retx`, `xfer`, or `rfnd`. The response shape is determined by the `transferType` discriminator in the response body.
- **Signature**: `DeleteTransfer(string transferToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `TransferQuoteResult`
- **Error**: `SdkException<DeleteTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTransfer
- **HTTP**: `GET /transfers/{transfer-token}` (Api (api))
- **Notes**: Fetch the details of a quote by its token. The response shape is determined by the `transferType` discriminator in the response body — a payment quote returns a Payment Result, a spendback returns a Spendback Result, etc. The `transfer-id` path parameter must be a valid transfer token in the format `{prefix}-{uuid}` where prefix is one of `pmnt`, `spnd`, `retx`, `xfer`, or `rfnd`.
- **Signature**: `GetTransfer(string transferToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `TransferQuoteResult`
- **Error**: `SdkException<GetTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTransferAccept
- **HTTP**: `POST /transfers/{transfer-token}/accept` (Api (api))
- **Notes**: Accept an open quote to execute the transfer. Once accepted, the quote status transitions from `PENDING_ACCEPTANCE` to `ACCEPTED` and the corresponding transfer is executed. The `transfer-id` path parameter must be a valid transfer token in the format `{prefix}-{uuid}` where prefix is one of `pmnt`, `spnd`, `retx`, `xfer`, or `rfnd`. The response shape is determined by the `transferType` discriminator in the response body.
- **Signature**: `PostTransferAccept(string transferToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `TransferQuoteResult`
- **Error**: `SdkException<PostTransferAcceptError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTransfers
- **HTTP**: `POST /transfers` (Api (api))
- **Notes**: Create a quote for any supported transfer type in a single unified endpoint. The request body must include a `transferType` property that identifies the type of quote being created: `PAYMENT`, `SPENDBACK`, `RETRACTION`, `TRANSFER`, or `REFUND`. The discriminator on `transferType` determines which request schema is applied and which response type is returned, enabling full polymorphic request and response handling. payment : Equivalent to `POST /payments` — uses the Payment Quote request shape spendback : Equivalent to `POST /spend-back` — uses the Spendback Quote request shape retraction : Equivalent to `POST /payments/{payment-token}/retractions` — uses the Payment Retraction Quote request shape transfer : Equivalent to `POST /transfers` — uses the Transfer Quote request shape refund : Equivalent to `POST /spend-back/{spendback-token}/refunds` — uses the Spendback Refund Quote request shape
- **Signature**: `PostTransfers(TransferRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `TransferQuoteResult`
- **Error**: `SdkException<PostTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadTransferSearch
- **HTTP**: `GET /transfers/search/{searchId}` (Api (api))
- **Notes**: Retrieve a specific page of results from a previously initiated quote search. Use the `searchId` returned by `POST /transfers/search` to paginate through results. The response shape is determined by the `transferType` discriminator in the response body. Each item in the `payload` array will be typed according to the quote type of the originating search request. Pagination is controlled by `page` and `pageSize` query parameters (defaults: `page=1`, `pageSize=10`). Cached search results are held for 30 minutes from creation; an expired `searchId` returns `404 Not Found`. See Pagination and Searching .
- **Signature**: `ReadTransferSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `TransferSearchResult`
- **Error**: `SdkException<ReadTransferSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchTransfers
- **HTTP**: `POST /transfers/search` (Api (api))
- **Notes**: Initiate a search for quotes of a specific type. The request body must include a `transferType` property to identify the quote type being searched. The `filters` and `sort` criteria in the body correspond to the selected quote type. Cross-type searches are not supported — each request must target a single quote type. Once the search is created, use the returned `searchId` with `GET /transfers/search/{searchId}` to retrieve paginated results. Supported types and their filter schemas: - payment — uses `PaymentSearch` - spendback — uses `SpendbackSearch` - retraction — uses `PaymentRetractionSearch` - transfer — uses `TransferSearch` - refund — uses `SpendbackRefundSearch` See Searching for the two-step search pattern, Filtering &amp; Sorting for comparison operators and sort directions, and the Scope Discriminator for the addressing scheme used in the body.
- **Signature**: `SearchTransfers(TransferSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `TransferSearchResult`
- **Error**: `SdkException<SearchTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
