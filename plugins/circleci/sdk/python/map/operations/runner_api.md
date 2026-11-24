<!-- Generated file — do not edit; regenerated with the SDK. -->

# RunnerApi — operations

Accessor: `client.runner_api` · Source: `circle_ci/apis/runner_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.runner_api.list_runners

- **Route**: `GET /runner`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_runners(*, namespace: str | None = None, resource_class: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `namespace` — query · `resource_class` — query `resource-class`
- **Returns (parsed)**: `RunnerResponse`
- **Returns (raw)**: `ApiResult[RunnerResponse, ListRunnersErrorBody]`
- **Error**: `ListRunnersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunnerResponse` | `circle_ci/models/runner_response.py` |
| `ListRunnersErrorBody` | `circle_ci/errors/list_runners_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

