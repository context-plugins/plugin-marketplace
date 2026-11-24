<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResourceClassApi — operations

Accessor: `client.resource_class_api` · Source: `circle_ci/apis/resource_class_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.resource_class_api.create_resource_class

- **Route**: `POST /runner/resource-class`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def create_resource_class(body: RunnerResourceClassRequest | RunnerResourceClassRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ResourceClassCreation`
- **Returns (raw)**: `ApiResult[ResourceClassCreation, CreateResourceClassErrorBody]`
- **Error**: `CreateResourceClassErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunnerResourceClassRequest` | `circle_ci/models/runner_resource_class_request.py` |
| `RunnerResourceClassRequestDict` | `circle_ci/models/runner_resource_class_request.py` |
| `ResourceClassCreation` | `circle_ci/models/resource_class_creation.py` |
| `CreateResourceClassErrorBody` | `circle_ci/errors/create_resource_class_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.resource_class_api.delete_resource_class

- **Route**: `DELETE /runner/resource-class/{resource-class}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def delete_resource_class(resource_class: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_class`
- **Params**: `resource_class` — path `resource-class`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteResourceClassErrorBody]`
- **Error**: `DeleteResourceClassErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteResourceClassErrorBody` | `circle_ci/errors/delete_resource_class_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.resource_class_api.get_resource_class

- **Route**: `GET /runner/resource-class/{resource-class}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def get_resource_class(resource_class: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_class`
- **Params**: `resource_class` — path `resource-class`
- **Returns (parsed)**: `ResourceClass`
- **Returns (raw)**: `ApiResult[ResourceClass, GetResourceClassErrorBody]`
- **Error**: `GetResourceClassErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResourceClass` | `circle_ci/models/resource_class.py` |
| `GetResourceClassErrorBody` | `circle_ci/errors/get_resource_class_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.resource_class_api.list_resource_classes

- **Route**: `GET /runner/resource-class`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_resource_classes(namespace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `namespace`
- **Params**: `namespace` — query
- **Returns (parsed)**: `RunnerResourceClassResponse`
- **Returns (raw)**: `ApiResult[RunnerResourceClassResponse, ListResourceClassesErrorBody]`
- **Error**: `ListResourceClassesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunnerResourceClassResponse` | `circle_ci/models/runner_resource_class_response.py` |
| `ListResourceClassesErrorBody` | `circle_ci/errors/list_resource_classes_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

