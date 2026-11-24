<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `bitbucket/apis/reports.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.reports.bulk_create_or_update_annotations2

- **Route**: `POST /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def bulk_create_or_update_annotations2(workspace: str, repo_slug: str, commit: str, report_id: str, body: list[ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId` · `body` — JSON body
- **Returns (parsed)**: `list[ReportAnnotationBitbucketReportsApi]`
- **Returns (raw)**: `ApiResult[list[ReportAnnotationBitbucketReportsApi], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ReportAnnotationBitbucketReportsApi` | `bitbucket/models/report_annotation_bitbucket_reports_api.py` |
| `ReportAnnotationBitbucketReportsApiDict` | `bitbucket/models/report_annotation_bitbucket_reports_api.py` |

### client.reports.create_or_update_annotation2

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_or_update_annotation2(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, body: ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`, `annotation_id`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId` · `annotation_id` — path `annotationId` · `body` — JSON body
- **Returns (parsed)**: `ReportAnnotationBitbucketReportsApi`
- **Returns (raw)**: `ApiResult[ReportAnnotationBitbucketReportsApi, CreateOrUpdateAnnotation2ErrorBody]`
- **Error**: `CreateOrUpdateAnnotation2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportAnnotationBitbucketReportsApi` | `bitbucket/models/report_annotation_bitbucket_reports_api.py` |
| `ReportAnnotationBitbucketReportsApiDict` | `bitbucket/models/report_annotation_bitbucket_reports_api.py` |
| `CreateOrUpdateAnnotation2ErrorBody` | `bitbucket/errors/create_or_update_annotation2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.reports.create_or_update_report2

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_or_update_report2(workspace: str, repo_slug: str, commit: str, report_id: str, body: ReportBitbucketReportsApi | ReportBitbucketReportsApiDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId` · `body` — JSON body
- **Returns (parsed)**: `ReportBitbucketReportsApi`
- **Returns (raw)**: `ApiResult[ReportBitbucketReportsApi, CreateOrUpdateReport2ErrorBody]`
- **Error**: `CreateOrUpdateReport2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportBitbucketReportsApi` | `bitbucket/models/report_bitbucket_reports_api.py` |
| `ReportBitbucketReportsApiDict` | `bitbucket/models/report_bitbucket_reports_api.py` |
| `CreateOrUpdateReport2ErrorBody` | `bitbucket/errors/create_or_update_report2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.reports.delete_annotation2

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_annotation2(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`, `annotation_id`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId` · `annotation_id` — path `annotationId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.reports.delete_report2

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_report2(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.reports.get_annotation2

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_annotation2(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`, `annotation_id`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId` · `annotation_id` — path `annotationId`
- **Returns (parsed)**: `ReportAnnotationBitbucketReportsApi`
- **Returns (raw)**: `ApiResult[ReportAnnotationBitbucketReportsApi, GetAnnotation2ErrorBody]`
- **Error**: `GetAnnotation2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportAnnotationBitbucketReportsApi` | `bitbucket/models/report_annotation_bitbucket_reports_api.py` |
| `GetAnnotation2ErrorBody` | `bitbucket/errors/get_annotation2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.reports.get_annotations_for_report2

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_annotations_for_report2(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId`
- **Returns (parsed)**: `PaginatedAnnotations`
- **Returns (raw)**: `ApiResult[PaginatedAnnotations, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedAnnotations` | `bitbucket/models/paginated_annotations.py` |

### client.reports.get_report2

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_report2(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`, `report_id`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path · `report_id` — path `reportId`
- **Returns (parsed)**: `ReportBitbucketReportsApi`
- **Returns (raw)**: `ApiResult[ReportBitbucketReportsApi, GetReport2ErrorBody]`
- **Error**: `GetReport2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportBitbucketReportsApi` | `bitbucket/models/report_bitbucket_reports_api.py` |
| `GetReport2ErrorBody` | `bitbucket/errors/get_report2_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.reports.get_reports_for_commit2

- **Route**: `GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_reports_for_commit2(workspace: str, repo_slug: str, commit: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `commit`
- **Params**: `workspace` — path · `repo_slug` — path · `commit` — path
- **Returns (parsed)**: `PaginatedReports`
- **Returns (raw)**: `ApiResult[PaginatedReports, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedReports` | `bitbucket/models/paginated_reports.py` |

