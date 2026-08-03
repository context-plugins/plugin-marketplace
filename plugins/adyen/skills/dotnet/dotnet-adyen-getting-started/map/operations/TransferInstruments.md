# TransferInstruments — operations

Accessor: `client.TransferInstruments` · Source: `Api/TransferInstruments.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteTransferInstrumentsId
- **HTTP**: `DELETE /transferInstruments/{id}` (Default (balanceplatform-api-test))
- **Notes**: Deletes a transfer instrument. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `DeleteTransferInstrumentsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTransferInstrumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTransferInstrumentsId
- **HTTP**: `GET /transferInstruments/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of a transfer instrument. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetTransferInstrumentsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TransferInstrument`
- **Error**: `SdkException<GetTransferInstrumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchTransferInstrumentsId
- **HTTP**: `PATCH /transferInstruments/{id}` (Default (balanceplatform-api-test))
- **Notes**: Updates a transfer instrument. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PatchTransferInstrumentsId(string id, string? xRequestedVerificationCode, TransferInstrumentInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransferInstrument`
- **Error**: `SdkException<PatchTransferInstrumentsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostTransferInstruments
- **HTTP**: `POST /transferInstruments` (Default (balanceplatform-api-test))
- **Notes**: Creates a transfer instrument. A transfer instrument is a bank account that a legal entity owns. Adyen performs verification checks on the transfer instrument as required by payment industry regulations. We inform you of the verification results through webhooks or API responses. When the transfer instrument passes the verification checks, you can start sending funds from the balance platform to the transfer instrument (such as payouts). Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostTransferInstruments(string? xRequestedVerificationCode, TransferInstrumentInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestedVerificationCode` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransferInstrument`
- **Error**: `SdkException<PostTransferInstrumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
