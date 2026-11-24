<!-- Generated file — do not edit; regenerated with the SDK. -->

# Instances — operations

Accessor: `client.instances` · Source: `hud/apis/instances.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.instances.list_instances_v2_instance_get

- **Route**: `GET /v2/instance`
- **Signature**: `def list_instances_v2_instance_get(registry_id: UUID, *, include_terminated: bool | None = False, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `registry_id`
- **Params**: `registry_id` — query · `include_terminated` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `ActiveInstancesResponse`
- **Returns (raw)**: `ApiResult[ActiveInstancesResponse, ListInstancesV2InstanceGetErrorBody]`
- **Error**: `ListInstancesV2InstanceGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ActiveInstancesResponse` | `hud/models/active_instances_response.py` |
| `ListInstancesV2InstanceGetErrorBody` | `hud/errors/list_instances_v2_instance_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.instances.stop_instances_v2_instance_stop_post

- **Route**: `POST /v2/instance/stop`
- **Signature**: `def stop_instances_v2_instance_stop_post(body: StopInstancesRequest | StopInstancesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StopInstancesResponse`
- **Returns (raw)**: `ApiResult[StopInstancesResponse, StopInstancesV2InstanceStopPostErrorBody]`
- **Error**: `StopInstancesV2InstanceStopPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StopInstancesRequest` | `hud/models/stop_instances_request.py` |
| `StopInstancesRequestDict` | `hud/models/stop_instances_request.py` |
| `StopInstancesResponse` | `hud/models/stop_instances_response.py` |
| `StopInstancesV2InstanceStopPostErrorBody` | `hud/errors/stop_instances_v2_instance_stop_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

