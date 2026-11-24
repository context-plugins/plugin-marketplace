<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dataset — operations

Accessor: `client.dataset` · Source: `amazon_rekognition/apis/dataset.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.dataset.create_dataset

- **Route**: `POST /#CreateDataset`
- **Auth**: `sigv4`
- **Signature**: `def create_dataset(x_amz_target: XAmzTargetAmazonRekognitionDatasetApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateDatasetErrorBody]`
- **Error**: `CreateDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionDatasetApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_dataset_api.py` |
| `CreateDatasetErrorBody` | `amazon_rekognition/errors/create_dataset_error.py` |

### client.dataset.delete_dataset

- **Route**: `POST /#DeleteDataset`
- **Auth**: `sigv4`
- **Signature**: `def delete_dataset(x_amz_target: XAmzTarget1AmazonRekognitionDatasetApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDatasetErrorBody]`
- **Error**: `DeleteDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionDatasetApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_dataset_api.py` |
| `DeleteDatasetErrorBody` | `amazon_rekognition/errors/delete_dataset_error.py` |

### client.dataset.describe_dataset

- **Route**: `POST /#DescribeDataset`
- **Auth**: `sigv4`
- **Signature**: `def describe_dataset(x_amz_target: XAmzTarget2AmazonRekognitionDatasetApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDatasetErrorBody]`
- **Error**: `DescribeDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionDatasetApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_dataset_api.py` |
| `DescribeDatasetErrorBody` | `amazon_rekognition/errors/describe_dataset_error.py` |

