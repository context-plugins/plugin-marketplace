<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.Reports` · Source: `src/Deliverd/Api/Reports.cs` · 21 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1ReportsByIdOrSlugCommentsByCommentId

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteApiV1ReportsByIdOrSlugCommentsByCommentId(DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`, `CommentId`
- **Returns**: `ApiV1ReportsCommentsResponse2`
- **Error**: `ApiException<DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest` | `src/Deliverd/Requests/Reports/DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest.cs` |
| `ApiV1ReportsCommentsResponse2` | `src/Deliverd/Models/ApiV1ReportsCommentsResponse2.cs` |
| `DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError` | `src/Deliverd/Errors/DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError.cs` |

### DeleteApiV1ReportsByIdOrSlugDataByName

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteApiV1ReportsByIdOrSlugDataByName(DeleteApiV1ReportsByIdOrSlugDataByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`, `Name`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteApiV1ReportsByIdOrSlugDataByNameRequest` | `src/Deliverd/Requests/Reports/DeleteApiV1ReportsByIdOrSlugDataByNameRequest.cs` |

### DeleteApiV1ReportsByIdOrSlugShare

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteApiV1ReportsByIdOrSlugShare(DeleteApiV1ReportsByIdOrSlugShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsShareResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteApiV1ReportsByIdOrSlugShareRequest` | `src/Deliverd/Requests/Reports/DeleteApiV1ReportsByIdOrSlugShareRequest.cs` |
| `ApiV1ReportsShareRequest1` | `src/Deliverd/Models/ApiV1ReportsShareRequest1.cs` |
| `ApiV1ReportsShareResponse1` | `src/Deliverd/Models/ApiV1ReportsShareResponse1.cs` |

### GetApiV1Reports

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Reports(GetApiV1ReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1ReportsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ReportsRequest` | `src/Deliverd/Requests/Reports/GetApiV1ReportsRequest.cs` |
| `ApiV1ReportsResponse` | `src/Deliverd/Models/ApiV1ReportsResponse.cs` |

### GetApiV1ReportsByIdOrSlug

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ReportsByIdOrSlug(GetApiV1ReportsByIdOrSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsResponse4`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ReportsByIdOrSlugRequest` | `src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugRequest.cs` |
| `ApiV1ReportsResponse4` | `src/Deliverd/Models/ApiV1ReportsResponse4.cs` |

### GetApiV1ReportsByIdOrSlugAnalytics

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ReportsByIdOrSlugAnalytics(GetApiV1ReportsByIdOrSlugAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsAnalyticsResponse`
- **Error**: `ApiException<GetApiV1ReportsByIdOrSlugAnalyticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ReportsByIdOrSlugAnalyticsRequest` | `src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugAnalyticsRequest.cs` |
| `ApiV1ReportsAnalyticsResponse` | `src/Deliverd/Models/ApiV1ReportsAnalyticsResponse.cs` |
| `GetApiV1ReportsByIdOrSlugAnalyticsError` | `src/Deliverd/Errors/GetApiV1ReportsByIdOrSlugAnalyticsError.cs` |

### GetApiV1ReportsByIdOrSlugComments

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ReportsByIdOrSlugComments(GetApiV1ReportsByIdOrSlugCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Query params (wire ← C#)**: `status` ← `Status`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1ReportsCommentsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ReportsByIdOrSlugCommentsRequest` | `src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugCommentsRequest.cs` |
| `Status12` | `src/Deliverd/Models/Enums/Status12.cs` |
| `ApiV1ReportsCommentsResponse` | `src/Deliverd/Models/ApiV1ReportsCommentsResponse.cs` |

### GetApiV1ReportsByIdOrSlugData

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ReportsByIdOrSlugData(GetApiV1ReportsByIdOrSlugDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsDataResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ReportsByIdOrSlugDataRequest` | `src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugDataRequest.cs` |
| `ApiV1ReportsDataResponse` | `src/Deliverd/Models/ApiV1ReportsDataResponse.cs` |

### GetApiV1ReportsByIdOrSlugEvidence

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ReportsByIdOrSlugEvidence(GetApiV1ReportsByIdOrSlugEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<GetApiV1ReportsByIdOrSlugEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1ReportsByIdOrSlugEvidenceRequest` | `src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugEvidenceRequest.cs` |
| `Format` | `src/Deliverd/Models/Enums/Format.cs` |
| `GetApiV1ReportsByIdOrSlugEvidenceError` | `src/Deliverd/Errors/GetApiV1ReportsByIdOrSlugEvidenceError.cs` |

### GetApiV1ReportsByIdOrSlugVersions

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1ReportsByIdOrSlugVersions(GetApiV1ReportsByIdOrSlugVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1ReportsVersionsResponse2`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1ReportsByIdOrSlugVersionsRequest` | `src/Deliverd/Requests/Reports/GetApiV1ReportsByIdOrSlugVersionsRequest.cs` |
| `ApiV1ReportsVersionsResponse2` | `src/Deliverd/Models/ApiV1ReportsVersionsResponse2.cs` |

### PatchApiV1ReportsByIdOrSlug

- **Auth**: `options.BearerAuth`
- **Signature**: `PatchApiV1ReportsByIdOrSlug(PatchApiV1ReportsByIdOrSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsResponse3`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PatchApiV1ReportsByIdOrSlugRequest` | `src/Deliverd/Requests/Reports/PatchApiV1ReportsByIdOrSlugRequest.cs` |
| `ApiV1ReportsRequest1` | `src/Deliverd/Models/ApiV1ReportsRequest1.cs` |
| `ApiV1ReportsResponse3` | `src/Deliverd/Models/ApiV1ReportsResponse3.cs` |

### PostApiV1Reports

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Reports(PostApiV1ReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ReportsResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1ReportsRequest` | `src/Deliverd/Requests/Reports/PostApiV1ReportsRequest.cs` |
| `ApiV1ReportsRequest` | `src/Deliverd/Models/ApiV1ReportsRequest.cs` |
| `ApiV1ReportsResponse1` | `src/Deliverd/Models/ApiV1ReportsResponse1.cs` |

### PostApiV1ReportsByIdOrSlugArchive

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ReportsByIdOrSlugArchive(PostApiV1ReportsByIdOrSlugArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsArchiveResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1ReportsByIdOrSlugArchiveRequest` | `src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugArchiveRequest.cs` |
| `ApiV1ReportsArchiveRequest` | `src/Deliverd/Models/ApiV1ReportsArchiveRequest.cs` |
| `ApiV1ReportsArchiveResponse` | `src/Deliverd/Models/ApiV1ReportsArchiveResponse.cs` |

### PostApiV1ReportsByIdOrSlugComments

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ReportsByIdOrSlugComments(PostApiV1ReportsByIdOrSlugCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsCommentsResponse1`
- **Error**: `ApiException<PostApiV1ReportsByIdOrSlugCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ReportsByIdOrSlugCommentsRequest` | `src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugCommentsRequest.cs` |
| `ApiV1ReportsCommentsRequest` | `src/Deliverd/Models/ApiV1ReportsCommentsRequest.cs` |
| `ApiV1ReportsCommentsResponse1` | `src/Deliverd/Models/ApiV1ReportsCommentsResponse1.cs` |
| `PostApiV1ReportsByIdOrSlugCommentsError` | `src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugCommentsError.cs` |

### PostApiV1ReportsByIdOrSlugCopy

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ReportsByIdOrSlugCopy(PostApiV1ReportsByIdOrSlugCopyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsCopyResponse`
- **Error**: `ApiException<PostApiV1ReportsByIdOrSlugCopyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ReportsByIdOrSlugCopyRequest` | `src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugCopyRequest.cs` |
| `ApiV1ReportsCopyRequest` | `src/Deliverd/Models/ApiV1ReportsCopyRequest.cs` |
| `ApiV1ReportsCopyResponse` | `src/Deliverd/Models/ApiV1ReportsCopyResponse.cs` |
| `PostApiV1ReportsByIdOrSlugCopyError` | `src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugCopyError.cs` |

### PostApiV1ReportsByIdOrSlugRevisionBriefs

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ReportsByIdOrSlugRevisionBriefs(PostApiV1ReportsByIdOrSlugRevisionBriefsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsRevisionBriefsResponse`
- **Error**: `ApiException<PostApiV1ReportsByIdOrSlugRevisionBriefsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ReportsByIdOrSlugRevisionBriefsRequest` | `src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugRevisionBriefsRequest.cs` |
| `ApiV1ReportsRevisionBriefsRequest` | `src/Deliverd/Models/ApiV1ReportsRevisionBriefsRequest.cs` |
| `ApiV1ReportsRevisionBriefsResponse` | `src/Deliverd/Models/ApiV1ReportsRevisionBriefsResponse.cs` |
| `PostApiV1ReportsByIdOrSlugRevisionBriefsError` | `src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugRevisionBriefsError.cs` |

### PostApiV1ReportsByIdOrSlugRollback

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ReportsByIdOrSlugRollback(PostApiV1ReportsByIdOrSlugRollbackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsRollbackResponse`
- **Error**: `ApiException<PostApiV1ReportsByIdOrSlugRollbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ReportsByIdOrSlugRollbackRequest` | `src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugRollbackRequest.cs` |
| `ApiV1ReportsRollbackRequest` | `src/Deliverd/Models/ApiV1ReportsRollbackRequest.cs` |
| `ApiV1ReportsRollbackResponse` | `src/Deliverd/Models/ApiV1ReportsRollbackResponse.cs` |
| `PostApiV1ReportsByIdOrSlugRollbackError` | `src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugRollbackError.cs` |

### PostApiV1ReportsByIdOrSlugSend

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ReportsByIdOrSlugSend(PostApiV1ReportsByIdOrSlugSendRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsSendResponse`
- **Error**: `ApiException<PostApiV1ReportsByIdOrSlugSendError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ReportsByIdOrSlugSendRequest` | `src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugSendRequest.cs` |
| `ApiV1ReportsSendRequest` | `src/Deliverd/Models/ApiV1ReportsSendRequest.cs` |
| `ApiV1ReportsSendResponse` | `src/Deliverd/Models/ApiV1ReportsSendResponse.cs` |
| `PostApiV1ReportsByIdOrSlugSendError` | `src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugSendError.cs` |

### PostApiV1ReportsByIdOrSlugShare

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ReportsByIdOrSlugShare(PostApiV1ReportsByIdOrSlugShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsShareResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1ReportsByIdOrSlugShareRequest` | `src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugShareRequest.cs` |
| `ApiV1ReportsShareRequest` | `src/Deliverd/Models/ApiV1ReportsShareRequest.cs` |
| `ApiV1ReportsShareResponse` | `src/Deliverd/Models/ApiV1ReportsShareResponse.cs` |

### PostApiV1ReportsByIdOrSlugVersions

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1ReportsByIdOrSlugVersions(PostApiV1ReportsByIdOrSlugVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`
- **Returns**: `ApiV1ReportsVersionsResponse`
- **Error**: `ApiException<PostApiV1ReportsByIdOrSlugVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1ReportsVersions409Error1([NotNullWhen(true)] out ApiV1ReportsVersions409Error1? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1ReportsByIdOrSlugVersionsRequest` | `src/Deliverd/Requests/Reports/PostApiV1ReportsByIdOrSlugVersionsRequest.cs` |
| `ApiV1ReportsVersionsRequest` | `src/Deliverd/Models/ApiV1ReportsVersionsRequest.cs` |
| `ApiV1ReportsVersionsResponse` | `src/Deliverd/Models/ApiV1ReportsVersionsResponse.cs` |
| `PostApiV1ReportsByIdOrSlugVersionsError` | `src/Deliverd/Errors/PostApiV1ReportsByIdOrSlugVersionsError.cs` |
| `ApiV1ReportsVersions409Error1` | `src/Deliverd/Models/ApiV1ReportsVersions409Error1.cs` |

### PutApiV1ReportsByIdOrSlugDataByName

- **Auth**: `options.BearerAuth`
- **Signature**: `PutApiV1ReportsByIdOrSlugDataByName(PutApiV1ReportsByIdOrSlugDataByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdOrSlug`, `Name`
- **Returns**: `ApiV1ReportsDataResponse1`
- **Error**: `ApiException<PutApiV1ReportsByIdOrSlugDataByNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutApiV1ReportsByIdOrSlugDataByNameRequest` | `src/Deliverd/Requests/Reports/PutApiV1ReportsByIdOrSlugDataByNameRequest.cs` |
| `ApiV1ReportsDataResponse1` | `src/Deliverd/Models/ApiV1ReportsDataResponse1.cs` |
| `PutApiV1ReportsByIdOrSlugDataByNameError` | `src/Deliverd/Errors/PutApiV1ReportsByIdOrSlugDataByNameError.cs` |

