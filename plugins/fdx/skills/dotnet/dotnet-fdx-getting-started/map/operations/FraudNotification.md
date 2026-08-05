# FraudNotification — operations

Accessor: `client.FraudNotification` · Source: `Api/FraudNotification.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ReportSuspectedFraudIncident
- **HTTP**: `POST /fraud/suspected-incident` (Fraud (financialdataexchange-prod))
- **Notes**: Notify Data Provider of suspected fraud
- **Signature**: `ReportSuspectedFraudIncident(Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, SuspectedFraudIncidentEntity? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
