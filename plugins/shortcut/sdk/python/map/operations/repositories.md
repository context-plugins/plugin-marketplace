<!-- Generated file — do not edit; regenerated with the SDK. -->

# Repositories — operations

Accessor: `client.repositories` · Source: `shortcut/apis/repositories.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.repositories.get_repository

- **Route**: `GET /api/v3/repositories/{repo-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_repository(repo_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_public_id`
- **Params**: `repo_public_id` — path `repo-public-id`
- **Returns (parsed)**: `Repository`
- **Returns (raw)**: `ApiResult[Repository, GetRepositoryErrorBody]`
- **Error**: `GetRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Repository` | `shortcut/models/repository.py` |
| `GetRepositoryErrorBody` | `shortcut/errors/get_repository_error.py` |

### client.repositories.list_repositories

- **Route**: `GET /api/v3/repositories`
- **Auth**: `api_token`
- **Signature**: `def list_repositories(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[Repository]`
- **Returns (raw)**: `ApiResult[list[Repository], ListRepositoriesErrorBody]`
- **Error**: `ListRepositoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Repository` | `shortcut/models/repository.py` |
| `ListRepositoriesErrorBody` | `shortcut/errors/list_repositories_error.py` |

