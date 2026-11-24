<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.environments` · Source: `boomi/apis/environments.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.environments.create_environment

- **Route**: `POST /Environment`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def create_environment(body: EnvironmentInput | EnvironmentInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EnvironmentModel`
- **Returns (raw)**: `ApiResult[EnvironmentModel, CreateEnvironmentErrorBody]`
- **Error**: `CreateEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentInput` | `boomi/models/environment_input.py` |
| `EnvironmentInputDict` | `boomi/models/environment_input.py` |
| `EnvironmentModel` | `boomi/models/environment_model.py` |
| `CreateEnvironmentErrorBody` | `boomi/errors/create_environment_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.environments.delete_environment

- **Route**: `DELETE /Environment/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def delete_environment(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEnvironmentErrorBody]`
- **Error**: `DeleteEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteEnvironmentErrorBody` | `boomi/errors/delete_environment_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.environments.get_environment

- **Route**: `GET /Environment/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def get_environment(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `EnvironmentModel`
- **Returns (raw)**: `ApiResult[EnvironmentModel, GetEnvironmentErrorBody]`
- **Error**: `GetEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentModel` | `boomi/models/environment_model.py` |
| `GetEnvironmentErrorBody` | `boomi/errors/get_environment_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.environments.query_environments

- **Route**: `POST /Environment/query`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def query_environments(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EnvironmentQueryResult`
- **Returns (raw)**: `ApiResult[EnvironmentQueryResult, QueryEnvironmentsErrorBody]`
- **Error**: `QueryEnvironmentsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QueryRequest` | `boomi/models/query_request.py` |
| `QueryRequestDict` | `boomi/models/query_request.py` |
| `EnvironmentQueryResult` | `boomi/models/environment_query_result.py` |
| `QueryEnvironmentsErrorBody` | `boomi/errors/query_environments_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

