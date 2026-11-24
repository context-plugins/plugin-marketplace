<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatasetGroups — operations

Accessor: `client.dataset_groups` · Source: `amazon_forecast/apis/dataset_groups.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.dataset_groups.create_dataset_group

- **Route**: `POST /#CreateDatasetGroup`
- **Auth**: `sigv4`
- **Signature**: `def create_dataset_group(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateDatasetGroupErrorBody]`
- **Error**: `CreateDatasetGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `amazon_forecast/models/enums/x_amz_target.py` |
| `CreateDatasetGroupErrorBody` | `amazon_forecast/errors/create_dataset_group_error.py` |

### client.dataset_groups.delete_dataset_group

- **Route**: `POST /#DeleteDatasetGroup`
- **Auth**: `sigv4`
- **Signature**: `def delete_dataset_group(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDatasetGroupErrorBody]`
- **Error**: `DeleteDatasetGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `amazon_forecast/models/enums/x_amz_target1.py` |
| `DeleteDatasetGroupErrorBody` | `amazon_forecast/errors/delete_dataset_group_error.py` |

### client.dataset_groups.describe_dataset_group

- **Route**: `POST /#DescribeDatasetGroup`
- **Auth**: `sigv4`
- **Signature**: `def describe_dataset_group(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDatasetGroupErrorBody]`
- **Error**: `DescribeDatasetGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `amazon_forecast/models/enums/x_amz_target2.py` |
| `DescribeDatasetGroupErrorBody` | `amazon_forecast/errors/describe_dataset_group_error.py` |

### client.dataset_groups.list_dataset_groups

- **Route**: `POST /#ListDatasetGroups`
- **Auth**: `sigv4`
- **Signature**: `def list_dataset_groups(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDatasetGroupsErrorBody]`
- **Error**: `ListDatasetGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `amazon_forecast/models/enums/x_amz_target3.py` |
| `ListDatasetGroupsErrorBody` | `amazon_forecast/errors/list_dataset_groups_error.py` |

### client.dataset_groups.update_dataset_group

- **Route**: `POST /#UpdateDatasetGroup`
- **Auth**: `sigv4`
- **Signature**: `def update_dataset_group(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateDatasetGroupErrorBody]`
- **Error**: `UpdateDatasetGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `amazon_forecast/models/enums/x_amz_target4.py` |
| `UpdateDatasetGroupErrorBody` | `amazon_forecast/errors/update_dataset_group_error.py` |

