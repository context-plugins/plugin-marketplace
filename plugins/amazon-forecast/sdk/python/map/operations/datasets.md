<!-- Generated file — do not edit; regenerated with the SDK. -->

# Datasets — operations

Accessor: `client.datasets` · Source: `amazon_forecast/apis/datasets.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.datasets.create_dataset

- **Route**: `POST /#CreateDataset`
- **Auth**: `sigv4`
- **Signature**: `def create_dataset(x_amz_target: XAmzTargetAmazonForecastServiceDatasetsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateDatasetErrorBody]`
- **Error**: `CreateDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceDatasetsApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_datasets_api.py` |
| `CreateDatasetErrorBody` | `amazon_forecast/errors/create_dataset_error.py` |

### client.datasets.delete_dataset

- **Route**: `POST /#DeleteDataset`
- **Auth**: `sigv4`
- **Signature**: `def delete_dataset(x_amz_target: XAmzTarget1AmazonForecastServiceDatasetsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDatasetErrorBody]`
- **Error**: `DeleteDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceDatasetsApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_datasets_api.py` |
| `DeleteDatasetErrorBody` | `amazon_forecast/errors/delete_dataset_error.py` |

### client.datasets.describe_dataset

- **Route**: `POST /#DescribeDataset`
- **Auth**: `sigv4`
- **Signature**: `def describe_dataset(x_amz_target: XAmzTarget2AmazonForecastServiceDatasetsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDatasetErrorBody]`
- **Error**: `DescribeDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceDatasetsApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_datasets_api.py` |
| `DescribeDatasetErrorBody` | `amazon_forecast/errors/describe_dataset_error.py` |

### client.datasets.list_datasets

- **Route**: `POST /#ListDatasets`
- **Auth**: `sigv4`
- **Signature**: `def list_datasets(x_amz_target: XAmzTarget3AmazonForecastServiceDatasetsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDatasetsErrorBody]`
- **Error**: `ListDatasetsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServiceDatasetsApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_datasets_api.py` |
| `ListDatasetsErrorBody` | `amazon_forecast/errors/list_datasets_error.py` |

