# ReasonCodes — operations

Accessor: `client.ReasonCodes` · Source: `Api/ReasonCodes.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateReasonCode
- **HTTP**: `POST /reason_codes.json` (Production)
- **Notes**: Creates a reason code for a given site. Reason Codes Intro Reason Codes are a way to gain a high-level view of why your customers are cancelling the subscription to your product or service. Add a set of churn reason codes to be displayed in-app and/or the Maxio Billing Portal. As your subscribers decide to cancel their subscription, learn why they decided to cancel. Reason Code Documentation Full documentation on how Reason Codes operate within Advanced Billing can be located under the following links. Churn Reason Codes Create Reason Code This method gives a merchant the option to create reason codes for a given site.
- **Signature**: `CreateReasonCode(CreateReasonCodeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ReasonCodeResponse`
- **Error**: `SdkException<CreateReasonCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteReasonCode
- **HTTP**: `DELETE /reason_codes/{reason_code_id}.json` (Production)
- **Notes**: Deletes a reason code from the Churn Reason Codes. This code will be immediately removed. This action is not reversible.
- **Signature**: `DeleteReasonCode(int reasonCodeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OkResponse`
- **Error**: `SdkException<DeleteReasonCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListReasonCodes
- **HTTP**: `GET /reason_codes.json` (Production)
- **Notes**: Lists all current churn codes for a given site.
- **Signature**: `ListReasonCodes(int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `IReadOnlyList<ReasonCodeResponse>`
- **Error**: `SdkException<ListReasonCodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadReasonCode
- **HTTP**: `GET /reason_codes/{reason_code_id}.json` (Production)
- **Notes**: Returns a particular churn reason code for a given site by its unique ID.
- **Signature**: `ReadReasonCode(int reasonCodeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ReasonCodeResponse`
- **Error**: `SdkException<ReadReasonCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateReasonCode
- **HTTP**: `PUT /reason_codes/{reason_code_id}.json` (Production)
- **Notes**: Updates an existing reason code for a given site.
- **Signature**: `UpdateReasonCode(int reasonCodeId, UpdateReasonCodeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ReasonCodeResponse`
- **Error**: `SdkException<UpdateReasonCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
