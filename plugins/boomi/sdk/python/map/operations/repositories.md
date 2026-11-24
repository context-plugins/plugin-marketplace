<!-- Generated file — do not edit; regenerated with the SDK. -->

# Repositories — operations

Accessor: `client.repositories` · Source: `boomi/apis/repositories.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.repositories.create_repository

- **Route**: `POST /repositories`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def create_repository(body: RepositoryInput | RepositoryInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Repository`
- **Returns (raw)**: `ApiResult[Repository, CreateRepositoryErrorBody]`
- **Error**: `CreateRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoryInput` | `boomi/models/repository_input.py` |
| `RepositoryInputDict` | `boomi/models/repository_input.py` |
| `Repository` | `boomi/models/repository.py` |
| `CreateRepositoryErrorBody` | `boomi/errors/create_repository_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

### client.repositories.delete_repository

- **Route**: `DELETE /repositories/{repositoryId}`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def delete_repository(repository_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repository_id`
- **Params**: `repository_id` — path `repositoryId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoryErrorBody]`
- **Error**: `DeleteRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoryErrorBody` | `boomi/errors/delete_repository_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

### client.repositories.get_repository

- **Route**: `GET /repositories/{repositoryId}`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def get_repository(repository_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repository_id`
- **Params**: `repository_id` — path `repositoryId`
- **Returns (parsed)**: `Repository`
- **Returns (raw)**: `ApiResult[Repository, GetRepositoryErrorBody]`
- **Error**: `GetRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Repository` | `boomi/models/repository.py` |
| `GetRepositoryErrorBody` | `boomi/errors/get_repository_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

### client.repositories.list_repositories

- **Route**: `GET /repositories`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def list_repositories(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `RepositoriesResponse`
- **Returns (raw)**: `ApiResult[RepositoriesResponse, ListRepositoriesErrorBody]`
- **Error**: `ListRepositoriesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoriesResponse` | `boomi/models/repositories_response.py` |
| `ListRepositoriesErrorBody` | `boomi/errors/list_repositories_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

