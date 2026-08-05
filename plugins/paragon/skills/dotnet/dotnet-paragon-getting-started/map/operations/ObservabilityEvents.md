# ObservabilityEvents — operations

Accessor: `client.ObservabilityEvents` · Source: `Api/ObservabilityEvents.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAggregatedCountOfSyslogMessagesBySeverity
- **HTTP**: `GET /api/v1/orgs/{org_id}/syslog/messages/count` (Default)
- **Notes**: Returns the count of syslog messages grouped by severity level for the specified time range and filters. Use this for dashboard statistics and overview metrics
- **Signature**: `GetAggregatedCountOfSyslogMessagesBySeverity(Guid orgId, int? start, int? end, Severity3? severity, string? mac, string? siteId, string? message, string? duration = "1h", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`start` … `message`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1h", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `duration` ← `duration`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `severity` ← `severity`, `mac` ← `mac`, `site_id` ← `siteId`, `message` ← `message`
- **Returns**: `ApiV1OrgsSyslogMessagesCountResponse`
- **Error**: `SdkException<GetAggregatedCountOfSyslogMessagesBySeverityError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsSyslogMessagesCount400Error1(out ApiV1OrgsSyslogMessagesCount400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchAndRetrieveSyslogMessages
- **HTTP**: `GET /api/v1/orgs/{org_id}/syslog/messages/search` (Default)
- **Notes**: Search and retrieve syslog messages for an organization with flexible filtering options. Time Range Parameters: - Use 'duration' for relative time (e.g., last 2 hours) - Use 'start' and 'end' for absolute time ranges (Unix epoch in seconds) - These are mutually exclusive. If both provided, start/end takes precedence - If neither provided, defaults to last 12 hours Pagination: - Use 'limit' to control page size (max 1000) - Results are sorted by timestamp descending by default - For large result sets, use multiple requests with adjusted start/end times Timestamps: - All timestamp parameters (start, end) use Unix epoch in seconds - Response timestamps are in milliseconds - All times are in UTC
- **Signature**: `SearchAndRetrieveSyslogMessages(Guid orgId, int? start, int? end, Severity3? severity, string? mac, string? siteId, string? sort, string? message, string? duration = "1h", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`start` … `message`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1h", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `duration` ← `duration`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `severity` ← `severity`, `mac` ← `mac`, `site_id` ← `siteId`, `sort` ← `sort`, `message` ← `message`
- **Returns**: `ApiV1OrgsSyslogMessagesSearchResponse`
- **Error**: `SdkException<SearchAndRetrieveSyslogMessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1OrgsSyslogMessagesSearch400Error1(out ApiV1OrgsSyslogMessagesSearch400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
