<!-- Generated file — do not edit; regenerated with the SDK. -->

# Browsers — operations

Accessor: `client.browsers` · Source: `browser_use/apis/browsers.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.browsers.create_browser_session_browsers_post

- **Route**: `POST /browsers`
- **Auth**: `api_key_header`
- **Signature**: `def create_browser_session_browsers_post(body: CreateBrowserSessionRequest | CreateBrowserSessionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BrowserSessionItemView`
- **Returns (raw)**: `ApiResult[BrowserSessionItemView, CreateBrowserSessionBrowsersPostErrorBody]`
- **Error**: `CreateBrowserSessionBrowsersPostErrorBody` — **Case A (typed)**
- **Error arms**: `ApiKeySpendLimitError` [402] · `SessionTimeoutLimitExceededError` [403] · `ProfileNotFoundError` [404] · `ValidationError` [422] · `TooManyConcurrentActiveSessionsError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateBrowserSessionRequest` | `browser_use/models/create_browser_session_request.py` |
| `CreateBrowserSessionRequestDict` | `browser_use/models/create_browser_session_request.py` |
| `BrowserSessionItemView` | `browser_use/models/browser_session_item_view.py` |
| `CreateBrowserSessionBrowsersPostErrorBody` | `browser_use/errors/create_browser_session_browsers_post_error.py` |
| `ApiKeySpendLimitError` | `browser_use/models/api_key_spend_limit_error.py` |
| `SessionTimeoutLimitExceededError` | `browser_use/models/session_timeout_limit_exceeded_error.py` |
| `ProfileNotFoundError` | `browser_use/models/profile_not_found_error.py` |
| `ValidationError` | `browser_use/models/validation_error.py` |
| `TooManyConcurrentActiveSessionsError` | `browser_use/models/too_many_concurrent_active_sessions_error.py` |

### client.browsers.get_browser_session_browsers_session_id_get

- **Route**: `GET /browsers/{session_id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_browser_session_browsers_session_id_get(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path
- **Returns (parsed)**: `BrowserSessionView`
- **Returns (raw)**: `ApiResult[BrowserSessionView, GetBrowserSessionBrowsersSessionIdGetErrorBody]`
- **Error**: `GetBrowserSessionBrowsersSessionIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `SessionNotFoundError` [404] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BrowserSessionView` | `browser_use/models/browser_session_view.py` |
| `GetBrowserSessionBrowsersSessionIdGetErrorBody` | `browser_use/errors/get_browser_session_browsers_session_id_get_error.py` |
| `SessionNotFoundError` | `browser_use/models/session_not_found_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.browsers.list_browser_session_downloads_browsers_session_id_downloads_get

- **Route**: `GET /browsers/{session_id}/downloads`
- **Auth**: `api_key_header`
- **Signature**: `def list_browser_session_downloads_browsers_session_id_downloads_get(session_id: UUID, *, limit: int | None = 50, cursor: str | None = None, include_urls: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path · `limit` — query · `cursor` — query · `include_urls` — query `includeUrls`
- **Returns (parsed)**: `BrowserDownloadListResponse`
- **Returns (raw)**: `ApiResult[BrowserDownloadListResponse, ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetErrorBody]`
- **Error**: `ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetErrorBody` — **Case A (typed)**
- **Error arms**: `SessionNotFoundError` [404] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BrowserDownloadListResponse` | `browser_use/models/browser_download_list_response.py` |
| `ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetErrorBody` | `browser_use/errors/list_browser_session_downloads_browsers_session_id_downloads_get_error.py` |
| `SessionNotFoundError` | `browser_use/models/session_not_found_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.browsers.list_browser_sessions_browsers_get

- **Route**: `GET /browsers`
- **Auth**: `api_key_header`
- **Signature**: `def list_browser_sessions_browsers_get(*, metadata: list[str] | None = None, page_size: int | None = 10, page_number: int | None = 1, filter_by: BrowserSessionStatusOrStr | None = None, agent_session_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `metadata` — query · `page_size` — query `pageSize` · `page_number` — query `pageNumber` · `filter_by` — query `filterBy` · `agent_session_id` — query `agentSessionId`
- **Returns (parsed)**: `BrowserSessionListResponse`
- **Returns (raw)**: `ApiResult[BrowserSessionListResponse, ListBrowserSessionsBrowsersGetErrorBody]`
- **Error**: `ListBrowserSessionsBrowsersGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BrowserSessionStatusOrStr` | `browser_use/models/enums/browser_session_status.py` |
| `BrowserSessionListResponse` | `browser_use/models/browser_session_list_response.py` |
| `ListBrowserSessionsBrowsersGetErrorBody` | `browser_use/errors/list_browser_sessions_browsers_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.browsers.update_browser_session_browsers_session_id_patch

- **Route**: `PATCH /browsers/{session_id}`
- **Auth**: `api_key_header`
- **Signature**: `def update_browser_session_browsers_session_id_patch(session_id: UUID, body: UpdateBrowserSessionRequest | UpdateBrowserSessionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`, `body`
- **Params**: `session_id` — path · `body` — JSON body
- **Returns (parsed)**: `BrowserSessionView`
- **Returns (raw)**: `ApiResult[BrowserSessionView, UpdateBrowserSessionBrowsersSessionIdPatchErrorBody]`
- **Error**: `UpdateBrowserSessionBrowsersSessionIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `SessionNotFoundError` [404] · `ValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateBrowserSessionRequest` | `browser_use/models/update_browser_session_request.py` |
| `UpdateBrowserSessionRequestDict` | `browser_use/models/update_browser_session_request.py` |
| `BrowserSessionView` | `browser_use/models/browser_session_view.py` |
| `UpdateBrowserSessionBrowsersSessionIdPatchErrorBody` | `browser_use/errors/update_browser_session_browsers_session_id_patch_error.py` |
| `SessionNotFoundError` | `browser_use/models/session_not_found_error.py` |
| `ValidationError` | `browser_use/models/validation_error.py` |

