# UsersLms — operations

Accessor: `client.UsersLms` · Source: `Api/UsersLms.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DownloadLmsPackage
- **HTTP**: `GET /users/{user_id}/lms/download/{video_id}` (Default (api))
- **Notes**: This method creates and returns a zipped proxy package of the course associated with the specified video. This package is suitable for direct upload to a learning management system.
- **Signature**: `DownloadLmsPackage(double userId, double videoId, double? completionThreshold, string? courseTitle, double? passingScore, ScoringAlgorithm? scoringAlgorithm, Standard? standard, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`completionThreshold` … `standard`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `completion_threshold` ← `completionThreshold`, `course_title` ← `courseTitle`, `passing_score` ← `passingScore`, `scoring_algorithm` ← `scoringAlgorithm`, `standard` ← `standard`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DownloadLmsPackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
