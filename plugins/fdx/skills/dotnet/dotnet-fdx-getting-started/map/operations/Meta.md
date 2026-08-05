# Meta — operations

Accessor: `client.Meta` · Source: `Api/Meta.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAvailability
- **HTTP**: `GET /availability` (Meta (financialdataexchange-prod))
- **Notes**: Get information about this API's availability
- **Signature**: `GetAvailability(FdxResourceOperationId? operationId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `operationId` — nullable, no default → **must pass explicitly**
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `operationId` ← `operationId`
- **Returns**: `AvailabilityListEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCapability
- **HTTP**: `GET /capability` (Meta (financialdataexchange-prod))
- **Notes**: Get information about this API's capability
- **Signature**: `GetCapability(FdxResourceOperationId? operationId, FdxVersion? fdxVersion, ResultType? resultType, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`operationId` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `operationId` ← `operationId`, `fdxVersion` ← `fdxVersion`, `resultType` ← `resultType`
- **Returns**: `CapabilityEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetCertificationMetrics
- **HTTP**: `GET /certification-metrics` (Meta (financialdataexchange-prod))
- **Notes**: Get certification performance metrics for this implementer's APIs
- **Signature**: `GetCertificationMetrics(FdxResourceOperationId? operationId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `operationId` — nullable, no default → **must pass explicitly**
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `operationId` ← `operationId`
- **Returns**: `CertificationMetricsEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
