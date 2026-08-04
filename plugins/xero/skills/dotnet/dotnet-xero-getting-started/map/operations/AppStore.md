# AppStore — operations

Accessor: `client.AppStore` · Source: `Api/AppStore.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSubscription
- **HTTP**: `GET /subscriptions/{subscriptionId}` (Default1 (api))
- **Signature**: `GetSubscription(Guid subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Subscription`
- **Error**: `SdkException<GetSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails(out ProblemDetails)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsageRecords
- **HTTP**: `GET /subscriptions/{subscriptionId}/usage-records` (Default1 (api))
- **Signature**: `GetUsageRecords(Guid subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UsageRecordsList`
- **Error**: `SdkException<GetUsageRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails(out ProblemDetails)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostUsageRecords
- **HTTP**: `POST /subscriptions/{subscriptionId}/items/{subscriptionItemId}/usage-records` (Default1 (api))
- **Signature**: `PostUsageRecords(Guid subscriptionId, Guid subscriptionItemId, string? idempotencyKey, CreateUsageRecord body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UsageRecord`
- **Error**: `SdkException<PostUsageRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails(out ProblemDetails)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PutUsageRecords
- **HTTP**: `PUT /subscriptions/{subscriptionId}/items/{subscriptionItemId}/usage-records/{usageRecordId}` (Default1 (api))
- **Signature**: `PutUsageRecords(Guid subscriptionId, Guid subscriptionItemId, Guid usageRecordId, string? idempotencyKey, UpdateUsageRecord body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UsageRecord`
- **Error**: `SdkException<PutUsageRecordsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails(out ProblemDetails)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
