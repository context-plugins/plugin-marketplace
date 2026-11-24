<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.Reports` · Source: `src/Bitbucket/Api/Reports.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkCreateOrUpdateAnnotations2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `BulkCreateOrUpdateAnnotations2(BulkCreateOrUpdateAnnotations2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`, `Body`
- **Returns**: `IReadOnlyList<ReportAnnotationBitbucketReportsApi>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `BulkCreateOrUpdateAnnotations2Request` | `src/Bitbucket/Requests/Reports/BulkCreateOrUpdateAnnotations2Request.cs` |
| `ReportAnnotationBitbucketReportsApi` | `src/Bitbucket/Models/AllOf/ReportAnnotationBitbucketReportsApi.cs` |

### CreateOrUpdateAnnotation2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateOrUpdateAnnotation2(CreateOrUpdateAnnotation2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`, `AnnotationId`, `Body`
- **Returns**: `ReportAnnotationBitbucketReportsApi`
- **Error**: `ApiException<CreateOrUpdateAnnotation2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrUpdateAnnotation2Request` | `src/Bitbucket/Requests/Reports/CreateOrUpdateAnnotation2Request.cs` |
| `ReportAnnotationBitbucketReportsApi` | `src/Bitbucket/Models/AllOf/ReportAnnotationBitbucketReportsApi.cs` |
| `CreateOrUpdateAnnotation2Error` | `src/Bitbucket/Errors/CreateOrUpdateAnnotation2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreateOrUpdateReport2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateOrUpdateReport2(CreateOrUpdateReport2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`, `Body`
- **Returns**: `ReportBitbucketReportsApi`
- **Error**: `ApiException<CreateOrUpdateReport2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrUpdateReport2Request` | `src/Bitbucket/Requests/Reports/CreateOrUpdateReport2Request.cs` |
| `ReportBitbucketReportsApi` | `src/Bitbucket/Models/AllOf/ReportBitbucketReportsApi.cs` |
| `CreateOrUpdateReport2Error` | `src/Bitbucket/Errors/CreateOrUpdateReport2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteAnnotation2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteAnnotation2(DeleteAnnotation2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`, `AnnotationId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteAnnotation2Request` | `src/Bitbucket/Requests/Reports/DeleteAnnotation2Request.cs` |

### DeleteReport2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteReport2(DeleteReport2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteReport2Request` | `src/Bitbucket/Requests/Reports/DeleteReport2Request.cs` |

### GetAnnotation2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetAnnotation2(GetAnnotation2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`, `AnnotationId`
- **Returns**: `ReportAnnotationBitbucketReportsApi`
- **Error**: `ApiException<GetAnnotation2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnnotation2Request` | `src/Bitbucket/Requests/Reports/GetAnnotation2Request.cs` |
| `ReportAnnotationBitbucketReportsApi` | `src/Bitbucket/Models/AllOf/ReportAnnotationBitbucketReportsApi.cs` |
| `GetAnnotation2Error` | `src/Bitbucket/Errors/GetAnnotation2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetAnnotationsForReport2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetAnnotationsForReport2(GetAnnotationsForReport2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`
- **Returns**: `PaginatedAnnotations`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetAnnotationsForReport2Request` | `src/Bitbucket/Requests/Reports/GetAnnotationsForReport2Request.cs` |
| `PaginatedAnnotations` | `src/Bitbucket/Models/PaginatedAnnotations.cs` |

### GetReport2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetReport2(GetReport2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`, `ReportId`
- **Returns**: `ReportBitbucketReportsApi`
- **Error**: `ApiException<GetReport2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReport2Request` | `src/Bitbucket/Requests/Reports/GetReport2Request.cs` |
| `ReportBitbucketReportsApi` | `src/Bitbucket/Models/AllOf/ReportBitbucketReportsApi.cs` |
| `GetReport2Error` | `src/Bitbucket/Errors/GetReport2Error.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetReportsForCommit2

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetReportsForCommit2(GetReportsForCommit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Commit`
- **Returns**: `PaginatedReports`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetReportsForCommit2Request` | `src/Bitbucket/Requests/Reports/GetReportsForCommit2Request.cs` |
| `PaginatedReports` | `src/Bitbucket/Models/PaginatedReports.cs` |

