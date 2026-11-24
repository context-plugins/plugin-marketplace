<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudIncidents — operations

Accessor: `client.cloud_incidents` · Source: `doi_t/apis/cloud_incidents.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cloud_incidents.get_known_issue

- **Route**: `GET /core/v1/cloudincidents/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_known_issue(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `CoreV1CloudincidentsResponse1`
- **Returns (raw)**: `ApiResult[CoreV1CloudincidentsResponse1, GetKnownIssueErrorBody]`
- **Error**: `GetKnownIssueErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CoreV1CloudincidentsResponse1` | `doi_t/models/core_v1_cloudincidents_response1.py` |
| `GetKnownIssueErrorBody` | `doi_t/errors/get_known_issue_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_incidents.list_known_issues

- **Route**: `GET /core/v1/cloudincidents`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_known_issues(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter` · `min_creation_time` — query `minCreationTime` · `max_creation_time` — query `maxCreationTime`
- **Returns (parsed)**: `CoreV1CloudincidentsResponse`
- **Returns (raw)**: `ApiResult[CoreV1CloudincidentsResponse, ListKnownIssuesErrorBody]`
- **Error**: `ListKnownIssuesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CoreV1CloudincidentsResponse` | `doi_t/models/core_v1_cloudincidents_response.py` |
| `ListKnownIssuesErrorBody` | `doi_t/errors/list_known_issues_error.py` |
| `Error` | `doi_t/models/error.py` |

