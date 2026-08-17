# Transfers — operations

Accessor: `client.Transfers` · Source: `Api/Transfers.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetTransfers
- **HTTP**: `GET /transfers` (Default14 (balanceplatform-api-test))
- **Notes**: Returns all the transfers related to a balance account, account holder, or balance platform. When making this request, you must include at least one of the following: - `balanceAccountId` - `accountHolderId` - `balancePlatform`. This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next and previous pages when applicable. You can use the links to page through the results.
- **Signature**: `GetTransfers(DateTimeOffset createdSince, DateTimeOffset createdUntil, string? balancePlatform, string? accountHolderId, string? balanceAccountId, string? paymentInstrumentId, string? reference, Category2? category, SortOrder? sortOrder, string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`balancePlatform` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `createdSince` ← `createdSince`, `createdUntil` ← `createdUntil`, `balancePlatform` ← `balancePlatform`, `accountHolderId` ← `accountHolderId`, `balanceAccountId` ← `balanceAccountId`, `paymentInstrumentId` ← `paymentInstrumentId`, `reference` ← `reference`, `category` ← `category`, `sortOrder` ← `sortOrder`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `FindTransfersResponse`
- **Error**: `SdkException<GetTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTransfersId
- **HTTP**: `GET /transfers/{id}` (Default14 (balanceplatform-api-test))
- **Notes**: Returns the details of a specified transfer.
- **Signature**: `GetTransfersId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TransferData`
- **Error**: `SdkException<GetTransfersIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTransfers
- **HTTP**: `POST /transfers` (Default14 (balanceplatform-api-test))
- **Notes**: &gt;Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version. Starts a request to transfer funds to: - Balance accounts - Transfer instruments - Third-party bank accounts - Third-party cards Adyen sends the outcome of the transfer request through webhooks. To use this endpoint: - Your API credential must have the TransferService Webservice Initiate role . - The account holder must have the required capabilities . Reach out to your Adyen contact to set up these permissions.
- **Signature**: `PostTransfers(string? idempotencyKey, string? wwwAuthenticate, TransferInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `wwwAuthenticate` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Transfer`
- **Error**: `SdkException<PostTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [401] · `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTransfersApprove
- **HTTP**: `POST /transfers/approve` (Default14 (balanceplatform-api-test))
- **Notes**: Initiates the approval of a list of transfers that triggered an additional review . Adyen sends the outcome of the approval request through webhooks. To use this endpoint: - Your API credential must have the TransferService Approve role . - The account holder must have the required capabilities . Reach out to your Adyen contact to set up these permissions.
- **Signature**: `PostTransfersApprove(string? idempotencyKey, string? wwwAuthenticate, ApproveTransfersRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `wwwAuthenticate` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `JsonElement`
- **Error**: `SdkException<PostTransfersApproveError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [401] · `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTransfersCancel
- **HTTP**: `POST /transfers/cancel` (Default14 (balanceplatform-api-test))
- **Notes**: Initiates the cancellation of a list of transfers that triggered an additional review . Adyen sends the outcome of the cancel request through webhooks. To use this endpoint: - Your API credential must have the TransferService Approve role . - The account holder must have the required capabilities . Reach out to your Adyen contact to set up these permissions.
- **Signature**: `PostTransfersCancel(string? idempotencyKey, CancelTransfersRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `JsonElement`
- **Error**: `SdkException<PostTransfersCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTransfersTransferIdReturns
- **HTTP**: `POST /transfers/{transferId}/returns` (Default14 (balanceplatform-api-test))
- **Notes**: Initiates the return of previously transferred funds without creating a new `transferId`.
- **Signature**: `PostTransfersTransferIdReturns(string transferId, string? idempotencyKey, ReturnTransferRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ReturnTransferResponse`
- **Error**: `SdkException<PostTransfersTransferIdReturnsError>` — **Case A (typed)**
- **Error accessors**: `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
