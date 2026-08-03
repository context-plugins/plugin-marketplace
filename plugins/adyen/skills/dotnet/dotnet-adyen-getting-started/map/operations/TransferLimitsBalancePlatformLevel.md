# TransferLimitsBalancePlatformLevel — operations

Accessor: `client.TransferLimitsBalancePlatformLevel` · Source: `Api/TransferLimitsBalancePlatformLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteBalancePlatformsIdTransferLimitsTransferLimitId
- **HTTP**: `DELETE /balancePlatforms/{id}/transferLimits/{transferLimitId}` (Default (balanceplatform-api-test))
- **Notes**: Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot delete an active limit.
- **Signature**: `DeleteBalancePlatformsIdTransferLimitsTransferLimitId(string id, string transferLimitId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsTransferLimits404Error1(out BalancePlatformsTransferLimits404Error1)` [404] · `TryGetBalancePlatformsTransferLimits422Error1(out BalancePlatformsTransferLimits422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalancePlatformsIdTransferLimits
- **HTTP**: `GET /balancePlatforms/{id}/transferLimits` (Default (balanceplatform-api-test))
- **Notes**: Filter and view the transfer limits configured for your balance platform using the balance platform's unique `id` and the available query parameters.
- **Signature**: `GetBalancePlatformsIdTransferLimits(string id, Scope? scope, TransferType? transferType, LimitStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `scope` — nullable, no default → **must pass explicitly**
  - `transferType` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `scope` ← `scope`, `transferType` ← `transferType`, `status` ← `status`
- **Returns**: `TransferLimitListResponse`
- **Error**: `SdkException<GetBalancePlatformsIdTransferLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsTransferLimits404Error1(out BalancePlatformsTransferLimits404Error1)` [404] · `TryGetBalancePlatformsTransferLimits422Error1(out BalancePlatformsTransferLimits422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalancePlatformsIdTransferLimitsTransferLimitId
- **HTTP**: `GET /balancePlatforms/{id}/transferLimits/{transferLimitId}` (Default (balanceplatform-api-test))
- **Notes**: Get the details of a transfer limit using its unique `transferLimitId`.
- **Signature**: `GetBalancePlatformsIdTransferLimitsTransferLimitId(string id, string transferLimitId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BalancePlatformsTransferLimitsResponse1`
- **Error**: `SdkException<GetBalancePlatformsIdTransferLimitsTransferLimitIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsTransferLimits404Error1(out BalancePlatformsTransferLimits404Error1)` [404] · `TryGetBalancePlatformsTransferLimits422Error1(out BalancePlatformsTransferLimits422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostBalancePlatformsIdTransferLimits
- **HTTP**: `POST /balancePlatforms/{id}/transferLimits` (Default (balanceplatform-api-test))
- **Notes**: Create a transfer limit for your balance platform using the unique `id` of your balance platform.
- **Signature**: `PostBalancePlatformsIdTransferLimits(string id, CreateTransferLimitRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BalancePlatformsTransferLimitsResponse1`
- **Error**: `SdkException<PostBalancePlatformsIdTransferLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsTransferLimits404Error1(out BalancePlatformsTransferLimits404Error1)` [404] · `TryGetBalancePlatformsTransferLimits422Error1(out BalancePlatformsTransferLimits422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
