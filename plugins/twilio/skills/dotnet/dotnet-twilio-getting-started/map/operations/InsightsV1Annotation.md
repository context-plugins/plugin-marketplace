# InsightsV1Annotation — operations

Accessor: `client.InsightsV1Annotation` · Source: `Api/InsightsV1Annotation.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchAnnotation
- **HTTP**: `GET /v1/Voice/{CallSid}/Annotation` (Default14 (insights))
- **Notes**: Get the Annotation for a specific Call.
- **Signature**: `FetchAnnotation(string callSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsV1CallAnnotation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAnnotation
- **HTTP**: `POST /v1/Voice/{CallSid}/Annotation` (Default14 (insights))
- **Notes**: Update an Annotation for a specific Call.
- **Signature**: `UpdateAnnotation(string callSid, AnnotationEnumAnsweredBy? answeredBy, AnnotationEnumConnectivityIssue? connectivityIssue, string? qualityIssues, bool? spam, int? callScore, string? comment, string? incident, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`answeredBy` … `incident`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AnsweredBy` ← `answeredBy`, `ConnectivityIssue` ← `connectivityIssue`, `QualityIssues` ← `qualityIssues`, `Spam` ← `spam`, `CallScore` ← `callScore`, `Comment` ← `comment`, `Incident` ← `incident`
- **Returns**: `InsightsV1CallAnnotation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
