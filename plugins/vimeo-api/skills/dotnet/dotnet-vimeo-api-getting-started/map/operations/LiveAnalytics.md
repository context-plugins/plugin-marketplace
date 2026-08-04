# LiveAnalytics — operations

Accessor: `client.LiveAnalytics` · Source: `Api/LiveAnalytics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ExportVpaasViewerAnalytics
- **HTTP**: `POST /live_events/{live_event_id}/export_vpaas_analytics` (Default (api))
- **Notes**: This method queues an export of VPaaS viewer analytics for the specified live event. The authenticated user must be the owner of the event or have edit permissions. The webhook is delivered to the managing vendor app's registered webhook URL.
- **Signature**: `ExportVpaasViewerAnalytics(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ExportVpaasViewerAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
