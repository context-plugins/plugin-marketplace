<!-- Generated file — do not edit; regenerated with the SDK. -->

# Project — operations

Accessor: `client.project` · Source: `amazon_rekognition/apis/project.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.project.create_project

- **Route**: `POST /#CreateProject`
- **Auth**: `sigv4`
- **Signature**: `def create_project(x_amz_target: XAmzTargetAmazonRekognitionProjectApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateProjectErrorBody]`
- **Error**: `CreateProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionProjectApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_project_api.py` |
| `CreateProjectErrorBody` | `amazon_rekognition/errors/create_project_error.py` |

### client.project.delete_project

- **Route**: `POST /#DeleteProject`
- **Auth**: `sigv4`
- **Signature**: `def delete_project(x_amz_target: XAmzTarget1AmazonRekognitionProjectApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteProjectErrorBody]`
- **Error**: `DeleteProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionProjectApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_project_api.py` |
| `DeleteProjectErrorBody` | `amazon_rekognition/errors/delete_project_error.py` |

### client.project.describe_projects

- **Route**: `POST /#DescribeProjects`
- **Auth**: `sigv4`
- **Signature**: `def describe_projects(x_amz_target: XAmzTarget2AmazonRekognitionProjectApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeProjectsErrorBody]`
- **Error**: `DescribeProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionProjectApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_project_api.py` |
| `DescribeProjectsErrorBody` | `amazon_rekognition/errors/describe_projects_error.py` |

