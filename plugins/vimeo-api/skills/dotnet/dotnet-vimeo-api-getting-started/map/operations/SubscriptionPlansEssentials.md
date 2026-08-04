# SubscriptionPlansEssentials — operations

Accessor: `client.SubscriptionPlansEssentials` · Source: `Api/SubscriptionPlansEssentials.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPlan
- **HTTP**: `GET /subscription_plans/{tier}` (Default (api))
- **Notes**: This method returns the specified subscription plan.
- **Signature**: `GetPlan(Tier1 tier, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
