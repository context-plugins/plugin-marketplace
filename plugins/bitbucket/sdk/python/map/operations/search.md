<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `bitbucket/apis/search.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search.search_account

- **Route**: `GET /users/{selected_user}/search/code`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def search_account(selected_user: str, search_query: str, *, page: int | None = 1, pagelen: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`, `search_query`
- **Params**: `selected_user` — path · `search_query` — query · `page` — query · `pagelen` — query
- **Returns (parsed)**: `SearchResultPage`
- **Returns (raw)**: `ApiResult[SearchResultPage, SearchAccountErrorBody]`
- **Error**: `SearchAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchResultPage` | `bitbucket/models/search_result_page.py` |
| `SearchAccountErrorBody` | `bitbucket/errors/search_account_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.search.search_team

- **Route**: `GET /teams/{username}/search/code`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def search_team(username: str, search_query: str, *, page: int | None = 1, pagelen: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `username`, `search_query`
- **Params**: `username` — path · `search_query` — query · `page` — query · `pagelen` — query
- **Returns (parsed)**: `SearchResultPage`
- **Returns (raw)**: `ApiResult[SearchResultPage, SearchTeamErrorBody]`
- **Error**: `SearchTeamErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchResultPage` | `bitbucket/models/search_result_page.py` |
| `SearchTeamErrorBody` | `bitbucket/errors/search_team_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.search.search_workspace

- **Route**: `GET /workspaces/{workspace}/search/code`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def search_workspace(workspace: str, search_query: str, *, page: int | None = 1, pagelen: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `search_query`
- **Params**: `workspace` — path · `search_query` — query · `page` — query · `pagelen` — query
- **Returns (parsed)**: `SearchResultPage`
- **Returns (raw)**: `ApiResult[SearchResultPage, SearchWorkspaceErrorBody]`
- **Error**: `SearchWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchResultPage` | `bitbucket/models/search_result_page.py` |
| `SearchWorkspaceErrorBody` | `bitbucket/errors/search_workspace_error.py` |
| `Error` | `bitbucket/models/error.py` |

