<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectVersion — operations

Accessor: `client.project_version` · Source: `amazon_rekognition/apis/project_version.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.project_version.create_project_version

- **Route**: `POST /#CreateProjectVersion`
- **Auth**: `sigv4`
- **Signature**: `def create_project_version(x_amz_target: XAmzTargetAmazonRekognitionProjectVersionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateProjectVersionErrorBody]`
- **Error**: `CreateProjectVersionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionProjectVersionApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_project_version_api.py` |
| `CreateProjectVersionErrorBody` | `amazon_rekognition/errors/create_project_version_error.py` |

### client.project_version.delete_project_version

- **Route**: `POST /#DeleteProjectVersion`
- **Auth**: `sigv4`
- **Signature**: `def delete_project_version(x_amz_target: XAmzTarget1AmazonRekognitionProjectVersionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteProjectVersionErrorBody]`
- **Error**: `DeleteProjectVersionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionProjectVersionApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_project_version_api.py` |
| `DeleteProjectVersionErrorBody` | `amazon_rekognition/errors/delete_project_version_error.py` |

### client.project_version.describe_project_versions

- **Route**: `POST /#DescribeProjectVersions`
- **Auth**: `sigv4`
- **Signature**: `def describe_project_versions(x_amz_target: XAmzTarget2AmazonRekognitionProjectVersionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeProjectVersionsErrorBody]`
- **Error**: `DescribeProjectVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionProjectVersionApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_project_version_api.py` |
| `DescribeProjectVersionsErrorBody` | `amazon_rekognition/errors/describe_project_versions_error.py` |

### client.project_version.start_project_version

- **Route**: `POST /#StartProjectVersion`
- **Auth**: `sigv4`
- **Signature**: `def start_project_version(x_amz_target: XAmzTarget3AmazonRekognitionProjectVersionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartProjectVersionErrorBody]`
- **Error**: `StartProjectVersionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonRekognitionProjectVersionApiOrStr` | `amazon_rekognition/models/enums/x_amz_target3_amazon_rekognition_project_version_api.py` |
| `StartProjectVersionErrorBody` | `amazon_rekognition/errors/start_project_version_error.py` |

### client.project_version.stop_project_version

- **Route**: `POST /#StopProjectVersion`
- **Auth**: `sigv4`
- **Signature**: `def stop_project_version(x_amz_target: XAmzTarget4AmazonRekognitionProjectVersionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopProjectVersionErrorBody]`
- **Error**: `StopProjectVersionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonRekognitionProjectVersionApiOrStr` | `amazon_rekognition/models/enums/x_amz_target4_amazon_rekognition_project_version_api.py` |
| `StopProjectVersionErrorBody` | `amazon_rekognition/errors/stop_project_version_error.py` |

