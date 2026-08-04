# Jobs — operations

Accessor: `client.Jobs` · Source: `Api/Jobs.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeletePaymentjobsJobsToken
- **HTTP**: `DELETE /jobs/payments/{job-token}` (Api (api))
- **Notes**: Cancel a submitted payment job that has not yet completed processing.
- **Signature**: `DeletePaymentjobsJobsToken(string jobToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `PaymentJobResult`
- **Error**: `SdkException<DeletePaymentjobsJobsTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetJobsInvitationjobToken
- **HTTP**: `GET /jobs/invitations/{job-token}` (Api (api))
- **Notes**: Fetch a single invitation job by its job token. Returns the job status, progress, and summary of processed invitations.
- **Signature**: `GetJobsInvitationjobToken(string jobToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InvitationJobResult`
- **Error**: `SdkException<GetJobsInvitationjobTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetJobsInvitationjobTokenItems
- **HTTP**: `GET /jobs/invitations/{job-token}/items` (Api (api))
- **Notes**: Fetch a paginated list of individual invitation items within an invitation job . Each item includes the invitation details, job-specific context (line number, parent job association), and any validation or processing exceptions. Supports filtering , sorting , and pagination through existing mechanisms. Use the `format` parameter to choose between JSON (default) and a tab-delimited flat file download, and the `results` parameter to filter by valid, invalid, or all items.
- **Signature**: `GetJobsInvitationjobTokenItems(string jobToken, string? format, string? results, int page = 1, int pageSize = 20, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `format` — nullable, no default → **must pass explicitly**
  - `results` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `pageSize` = 20, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`, `format` ← `format`, `results` ← `results`
- **Returns**: `InvitationJobItemListResult`
- **Error**: `SdkException<GetJobsInvitationjobTokenItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetJobsPaymentjobToken
- **HTTP**: `GET /jobs/payments/{job-token}` (Api (api))
- **Notes**: Fetch a single payment job by its job token. Returns the job status, progress, and summary of processed payments.
- **Signature**: `GetJobsPaymentjobToken(string jobToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `PaymentJobResult`
- **Error**: `SdkException<GetJobsPaymentjobTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetJobsPaymentjobTokenItems
- **HTTP**: `GET /jobs/payments/{job-token}/items` (Api (api))
- **Notes**: Fetch a paginated list of individual payment items within a payment job . Each item includes the payment details, job-specific context (line number, parent job association), and any validation or processing exceptions. Supports filtering , sorting , and pagination through existing mechanisms. Use the `format` parameter to choose between JSON (default) and a tab-delimited flat file download, and the `results` parameter to filter by valid, invalid, or all items.
- **Signature**: `GetJobsPaymentjobTokenItems(string jobToken, string? format, string? results, int page = 1, int pageSize = 20, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `format` — nullable, no default → **must pass explicitly**
  - `results` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `pageSize` = 20, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`, `format` ← `format`, `results` ← `results`
- **Returns**: `PaymentJobItemListResult`
- **Error**: `SdkException<GetJobsPaymentjobTokenItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### PostInvitationjobs
- **HTTP**: `POST /jobs/invitations` (Api (api))
- **Notes**: Create an invitation job to send invitations in bulk. This is available for Hosted Portal programs only.
- **Signature**: `PostInvitationjobs(InvitationJobRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InvitationJobResult`
- **Error**: `SdkException<PostInvitationjobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentjobs
- **HTTP**: `POST /jobs/payments` (Api (api))
- **Notes**: Create a payment job to process a batch of payments in a single operation. Upload a batch file containing multiple payment instructions and the system will process them asynchronously. For a step-by-step guide, see Run a Batch Payment Job .
- **Signature**: `PostPaymentjobs(PaymentJobRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `PaymentJobResult`
- **Error**: `SdkException<PostPaymentjobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadInvitationJobSearch
- **HTTP**: `GET /jobs/invitations/search/{searchId}` (Api (api))
- **Notes**: Retrieve a specific page of results from a previous invitation job search request.
- **Signature**: `ReadInvitationJobSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `InvitationJobSearchResult`
- **Error**: `SdkException<ReadInvitationJobSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ReadPaymentJobSearch
- **HTTP**: `GET /jobs/payments/search/{searchId}` (Api (api))
- **Notes**: Retrieve a specific page of results from a previous payment job search request.
- **Signature**: `ReadPaymentJobSearch(Guid searchId, int? pageSize, int? page = 1, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `PaymentJobSearchResult`
- **Error**: `SdkException<ReadPaymentJobSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchInvitationJobs
- **HTTP**: `POST /jobs/invitations/search` (Api (api))
- **Notes**: Search for invitation jobs using structured filter criteria. Invitation jobs are a Hosted Portal program concept only.
- **Signature**: `SearchInvitationJobs(InvitationJobSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `InvitationJobSearchResult`
- **Error**: `SdkException<SearchInvitationJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchPaymentJobs
- **HTTP**: `POST /jobs/payments/search` (Api (api))
- **Notes**: Search for payment jobs using structured filter criteria in the request body.
- **Signature**: `SearchPaymentJobs(PaymentJobSearchRequest body, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `PaymentJobSearchResult`
- **Error**: `SdkException<SearchPaymentJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
