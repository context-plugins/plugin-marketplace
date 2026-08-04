# VideosModeration — operations

Accessor: `client.VideosModeration` · Source: `Api/VideosModeration.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetVideoReportingReasons
- **HTTP**: `GET /report/video_report_reasons` (Default (api))
- **Notes**: This method returns a list of valid reasons for reporting inappropriate videos on Vimeo.
- **Signature**: `GetVideoReportingReasons(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoReportReason`
- **Error**: `SdkException<GetVideoReportingReasonsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
