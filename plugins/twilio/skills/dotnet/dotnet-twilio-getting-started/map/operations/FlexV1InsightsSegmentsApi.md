# FlexV1InsightsSegmentsApi — operations

Accessor: `client.FlexV1InsightsSegmentsApi` · Source: `Api/FlexV1InsightsSegmentsApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListInsightsSegments
- **HTTP**: `GET /v1/Insights/Segments` (Default3 (flex-api))
- **Notes**: To get segments for given reservation Ids
- **Signature**: `ListInsightsSegments(string? segmentId, IReadOnlyList<string>? reservationId, long? pageSize, int? page, string? pageToken, string? authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`segmentId` … `authorization`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `SegmentId` ← `segmentId`, `ReservationId` ← `reservationId`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListInsightsSegmentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
