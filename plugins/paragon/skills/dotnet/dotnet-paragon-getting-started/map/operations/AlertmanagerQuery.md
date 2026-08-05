# AlertmanagerQuery — operations

Accessor: `client.AlertmanagerQuery` · Source: `Api/AlertmanagerQuery.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AlertManagerGetAlertCount
- **HTTP**: `GET /alert-manager/api/v1/orgs/{org_id}/alerts/count` (Default)
- **Signature**: `AlertManagerGetAlertCount(string orgId, IReadOnlyList<string>? type, string? subjectKey, Severity2? severity, DateTimeOffset? start, DateTimeOffset? end, string? duration, string? groupBy, string? distinct, bool? groupBySeverity, long? groupLimit, IReadOnlyList<Severity2>? severities, IReadOnlyList<string>? hasSubject, bool? includeAcked, IReadOnlyList<string>? causedByStreamId, bool? rootCause, IReadOnlyList<string>? causedByRcaId, IReadOnlyList<string>? filterStreamId, IReadOnlyList<string>? filterType, IReadOnlyList<string>? filterSubjectKey, IReadOnlyList<FilterSeverity>? filterSeverity, IReadOnlyList<string>? filterHasSubject, bool? filterIncludeAcked, IReadOnlyList<string>? filterCausedByStreamId, bool? filterRootCause, IReadOnlyList<string>? filterCausedByRcaId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 25 params (`type` … `filterCausedByRcaId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `subject.{key}` ← `subjectKey`, `severity` ← `severity`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `group_by` ← `groupBy`, `distinct` ← `distinct`, `group_by_severity` ← `groupBySeverity`, `group_limit` ← `groupLimit`, `severities` ← `severities`, `has_subject` ← `hasSubject`, `include_acked` ← `includeAcked`, `caused_by_stream_id` ← `causedByStreamId`, `root_cause` ← `rootCause`, `caused_by_rca_id` ← `causedByRcaId`, `filter.stream_id` ← `filterStreamId`, `filter.type` ← `filterType`, `filter.subject.{key}` ← `filterSubjectKey`, `filter.severity` ← `filterSeverity`, `filter.has_subject` ← `filterHasSubject`, `filter.include_acked` ← `filterIncludeAcked`, `filter.caused_by_stream_id` ← `filterCausedByStreamId`, `filter.root_cause` ← `filterRootCause`, `filter.caused_by_rca_id` ← `filterCausedByRcaId`
- **Returns**: `ResponseToGetAlertCountRequest`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AlertManagerGetAlertTimeSeries
- **HTTP**: `GET /alert-manager/api/v1/orgs/{org_id}/alerts/time_series` (Default)
- **Signature**: `AlertManagerGetAlertTimeSeries(string orgId, IReadOnlyList<string>? type, string? subjectKey, Severity2? severity, DateTimeOffset? start, DateTimeOffset? end, string? duration, string? groupBy, string? distinct, long? groupLimit, IReadOnlyList<Severity2>? severities, IReadOnlyList<string>? hasSubject, bool? includeAcked, IReadOnlyList<string>? causedByStreamId, bool? rootCause, IReadOnlyList<string>? causedByRcaId, IReadOnlyList<string>? filterStreamId, IReadOnlyList<string>? filterType, IReadOnlyList<string>? filterSubjectKey, IReadOnlyList<FilterSeverity>? filterSeverity, IReadOnlyList<string>? filterHasSubject, bool? filterIncludeAcked, IReadOnlyList<string>? filterCausedByStreamId, bool? filterRootCause, IReadOnlyList<string>? filterCausedByRcaId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 24 params (`type` … `filterCausedByRcaId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `subject.{key}` ← `subjectKey`, `severity` ← `severity`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `group_by` ← `groupBy`, `distinct` ← `distinct`, `group_limit` ← `groupLimit`, `severities` ← `severities`, `has_subject` ← `hasSubject`, `include_acked` ← `includeAcked`, `caused_by_stream_id` ← `causedByStreamId`, `root_cause` ← `rootCause`, `caused_by_rca_id` ← `causedByRcaId`, `filter.stream_id` ← `filterStreamId`, `filter.type` ← `filterType`, `filter.subject.{key}` ← `filterSubjectKey`, `filter.severity` ← `filterSeverity`, `filter.has_subject` ← `filterHasSubject`, `filter.include_acked` ← `filterIncludeAcked`, `filter.caused_by_stream_id` ← `filterCausedByStreamId`, `filter.root_cause` ← `filterRootCause`, `filter.caused_by_rca_id` ← `filterCausedByRcaId`
- **Returns**: `ResponseToGetAlertTimeSeriesRequest`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AlertManagerListAlertTypes
- **HTTP**: `GET /alert-manager/api/v1/orgs/{org_id}/types` (Default)
- **Signature**: `AlertManagerListAlertTypes(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AlertTypeListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AlertManagerListAlerts
- **HTTP**: `GET /alert-manager/api/v1/orgs/{org_id}/alerts` (Default)
- **Signature**: `AlertManagerListAlerts(string orgId, IReadOnlyList<string>? type, string? subjectKey, Severity2? severity, DateTimeOffset? start, DateTimeOffset? end, string? duration, long? page, long? limit, string? sort, IReadOnlyList<Severity2>? severities, IReadOnlyList<string>? hasSubject, bool? includeAcked, IReadOnlyList<string>? causedByStreamId, bool? rootCause, IReadOnlyList<string>? causedByRcaId, IReadOnlyList<string>? filterStreamId, IReadOnlyList<string>? filterType, IReadOnlyList<string>? filterSubjectKey, IReadOnlyList<FilterSeverity>? filterSeverity, IReadOnlyList<string>? filterHasSubject, bool? filterIncludeAcked, IReadOnlyList<string>? filterCausedByStreamId, bool? filterRootCause, IReadOnlyList<string>? filterCausedByRcaId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 24 params (`type` … `filterCausedByRcaId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `subject.{key}` ← `subjectKey`, `severity` ← `severity`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `page` ← `page`, `limit` ← `limit`, `sort` ← `sort`, `severities` ← `severities`, `has_subject` ← `hasSubject`, `include_acked` ← `includeAcked`, `caused_by_stream_id` ← `causedByStreamId`, `root_cause` ← `rootCause`, `caused_by_rca_id` ← `causedByRcaId`, `filter.stream_id` ← `filterStreamId`, `filter.type` ← `filterType`, `filter.subject.{key}` ← `filterSubjectKey`, `filter.severity` ← `filterSeverity`, `filter.has_subject` ← `filterHasSubject`, `filter.include_acked` ← `filterIncludeAcked`, `filter.caused_by_stream_id` ← `filterCausedByStreamId`, `filter.root_cause` ← `filterRootCause`, `filter.caused_by_rca_id` ← `filterCausedByRcaId`
- **Returns**: `ResponseToListAlertsRequest`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
