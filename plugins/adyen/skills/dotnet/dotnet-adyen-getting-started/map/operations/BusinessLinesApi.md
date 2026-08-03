# BusinessLinesApi — operations

Accessor: `client.BusinessLinesApi` · Source: `Api/BusinessLinesApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteBusinessLinesId
- **HTTP**: `DELETE /businessLines/{id}` (Default (balanceplatform-api-test))
- **Notes**: Deletes a business line. &gt;If you delete a business line linked to a payment method , it can affect your merchant account's ability to use the payment method . The business line is removed from all linked merchant accounts. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `DeleteBusinessLinesId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteBusinessLinesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBusinessLinesId
- **HTTP**: `GET /businessLines/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns the detail of a business line. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `GetBusinessLinesId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BusinessLine`
- **Error**: `SdkException<GetBusinessLinesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBusinessLinesId
- **HTTP**: `PATCH /businessLines/{id}` (Default (balanceplatform-api-test))
- **Notes**: Updates a business line. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PatchBusinessLinesId(string id, BusinessLineInfoUpdate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BusinessLine`
- **Error**: `SdkException<PatchBusinessLinesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostBusinessLines
- **HTTP**: `POST /businessLines` (Default (balanceplatform-api-test))
- **Notes**: Creates a business line. This resource contains information about your user's line of business, including their industry and their source of funds. Adyen uses this information to verify your users as required by payment industry regulations.Adyen informs you of the verification results through webhooks or API responses. You can create a maximum of 200 business lines per legal entity for payment processing. Requests to this endpoint are subject to rate limits: Live environments: 700 requests per 5 seconds. Test environments: 200 requests per 5 seconds. Failed requests are subject to a limit of 5 failures per 10 seconds.
- **Signature**: `PostBusinessLines(BusinessLineInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BusinessLine`
- **Error**: `SdkException<PostBusinessLinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
