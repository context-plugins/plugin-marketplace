# ObservabilityConfiguration — operations

Accessor: `client.ObservabilityConfiguration` · Source: `Api/ObservabilityConfiguration.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ValidateInstancePresence
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/validate-instances/{instance_id}` (Default)
- **Notes**: This API validates the presence of an instance for a given org_id and instance_id.
- **Signature**: `ValidateInstancePresence(Guid orgId, string instanceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<ValidateInstancePresenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
