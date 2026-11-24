<!-- Generated file — do not edit; regenerated with the SDK. -->

# MetricAssociations — operations

Accessor: `client.metric_associations` · Source: `dev_cycle/apis/metric_associations.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.metric_associations.metric_associations_controller_create

- **Route**: `POST /v1/projects/{project}/metric-associations`
- **Server**: `default`
- **Signature**: `def metric_associations_controller_create(project: str, body: CreateMetricAssociationDto | CreateMetricAssociationDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `MetricAssociation`
- **Returns (raw)**: `ApiResult[MetricAssociation, MetricAssociationsControllerCreateErrorBody]`
- **Error**: `MetricAssociationsControllerCreateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateMetricAssociationDto` | `dev_cycle/models/create_metric_association_dto.py` |
| `CreateMetricAssociationDtoDict` | `dev_cycle/models/create_metric_association_dto.py` |
| `MetricAssociation` | `dev_cycle/models/metric_association.py` |
| `MetricAssociationsControllerCreateErrorBody` | `dev_cycle/errors/metric_associations_controller_create_error.py` |

### client.metric_associations.metric_associations_controller_find_all

- **Route**: `GET /v1/projects/{project}/metric-associations`
- **Server**: `default`
- **Signature**: `def metric_associations_controller_find_all(project: str, *, metric: str | None = None, feature: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `metric` — query · `feature` — query
- **Returns (parsed)**: `list[MetricAssociation]`
- **Returns (raw)**: `ApiResult[list[MetricAssociation], MetricAssociationsControllerFindAllErrorBody]`
- **Error**: `MetricAssociationsControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `MetricAssociation` | `dev_cycle/models/metric_association.py` |
| `MetricAssociationsControllerFindAllErrorBody` | `dev_cycle/errors/metric_associations_controller_find_all_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

### client.metric_associations.metric_associations_controller_remove

- **Route**: `DELETE /v1/projects/{project}/metric-associations`
- **Server**: `default`
- **Signature**: `def metric_associations_controller_remove(project: str, metric: str, feature: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `metric`, `feature`
- **Params**: `project` — path · `metric` — query · `feature` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, MetricAssociationsControllerRemoveErrorBody]`
- **Error**: `MetricAssociationsControllerRemoveErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `MetricAssociationsControllerRemoveErrorBody` | `dev_cycle/errors/metric_associations_controller_remove_error.py` |

