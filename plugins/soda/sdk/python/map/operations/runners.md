<!-- Generated file — do not edit; regenerated with the SDK. -->

# Runners — operations

Accessor: `client.runners` · Source: `soda/apis/runners.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.runners.delete_api_v1_runners_runner_id

- **Route**: `DELETE /api/v1/runners/{runnerId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_runners_runner_id(runner_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `runner_id`
- **Params**: `runner_id` — path `runnerId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteApiV1RunnersRunnerIdErrorBody]`
- **Error**: `DeleteApiV1RunnersRunnerIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiV1RunnersRunnerIdErrorBody` | `soda/errors/delete_api_v1_runners_runner_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.runners.get_api_v1_runners

- **Route**: `GET /api/v1/runners`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_runners(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiListRunnersResponse`
- **Returns (raw)**: `ApiResult[PublicApiListRunnersResponse, GetApiV1RunnersErrorBody]`
- **Error**: `GetApiV1RunnersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiListRunnersResponse` | `soda/models/public_api_list_runners_response.py` |
| `GetApiV1RunnersErrorBody` | `soda/errors/get_api_v1_runners_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.runners.get_api_v1_runners_runner_id

- **Route**: `GET /api/v1/runners/{runnerId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_runners_runner_id(runner_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `runner_id`
- **Params**: `runner_id` — path `runnerId`
- **Returns (parsed)**: `PublicApiGetRunnerResponse`
- **Returns (raw)**: `ApiResult[PublicApiGetRunnerResponse, GetApiV1RunnersRunnerIdErrorBody]`
- **Error**: `GetApiV1RunnersRunnerIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiGetRunnerResponse` | `soda/models/public_api_get_runner_response.py` |
| `GetApiV1RunnersRunnerIdErrorBody` | `soda/errors/get_api_v1_runners_runner_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.runners.post_api_v1_runners

- **Route**: `POST /api/v1/runners`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_runners(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PublicApiCreateRunnerResponse`
- **Returns (raw)**: `ApiResult[PublicApiCreateRunnerResponse, PostApiV1RunnersErrorBody]`
- **Error**: `PostApiV1RunnersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateRunnerResponse` | `soda/models/public_api_create_runner_response.py` |
| `PostApiV1RunnersErrorBody` | `soda/errors/post_api_v1_runners_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

