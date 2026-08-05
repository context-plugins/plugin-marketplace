# SelfAlarms — operations

Accessor: `client.SelfAlarms` · Source: `Api/SelfAlarms.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListAlarmSubscriptions
- **HTTP**: `GET /api/v1/self/subscriptions` (ApiHost (api))
- **Notes**: Get List of all the subscriptions
- **Signature**: `ListAlarmSubscriptions(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ResponseSelfSubscription>`
- **Error**: `SdkException<ListAlarmSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
