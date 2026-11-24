<!-- Generated file — do not edit; regenerated with the SDK. -->

# MonitoredResources — operations

Accessor: `client.monitored_resources` · Source: `amazon_dev_ops_guru/apis/monitored_resources.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.monitored_resources.list_monitored_resources

- **Route**: `POST /monitoredResources`
- **Auth**: `sigv4`
- **Signature**: `def list_monitored_resources(*, body: MonitoredResourcesRequest | MonitoredResourcesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListMonitoredResourcesResponse`
- **Returns (raw)**: `ApiResult[ListMonitoredResourcesResponse, ListMonitoredResourcesErrorBody]`
- **Error**: `ListMonitoredResourcesErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MonitoredResourcesRequest` | `amazon_dev_ops_guru/models/monitored_resources_request.py` |
| `MonitoredResourcesRequestDict` | `amazon_dev_ops_guru/models/monitored_resources_request.py` |
| `ListMonitoredResourcesResponse` | `amazon_dev_ops_guru/models/list_monitored_resources_response.py` |
| `ListMonitoredResourcesErrorBody` | `amazon_dev_ops_guru/errors/list_monitored_resources_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

