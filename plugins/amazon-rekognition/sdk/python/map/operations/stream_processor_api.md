<!-- Generated file — do not edit; regenerated with the SDK. -->

# StreamProcessorApi — operations

Accessor: `client.stream_processor_api` · Source: `amazon_rekognition/apis/stream_processor_api.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.stream_processor_api.create_stream_processor

- **Route**: `POST /#CreateStreamProcessor`
- **Auth**: `sigv4`
- **Signature**: `def create_stream_processor(x_amz_target: XAmzTargetAmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateStreamProcessorErrorBody]`
- **Error**: `CreateStreamProcessorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionStreamProcessorApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_stream_processor_api.py` |
| `CreateStreamProcessorErrorBody` | `amazon_rekognition/errors/create_stream_processor_error.py` |

### client.stream_processor_api.delete_stream_processor

- **Route**: `POST /#DeleteStreamProcessor`
- **Auth**: `sigv4`
- **Signature**: `def delete_stream_processor(x_amz_target: XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteStreamProcessorErrorBody]`
- **Error**: `DeleteStreamProcessorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_stream_processor_api.py` |
| `DeleteStreamProcessorErrorBody` | `amazon_rekognition/errors/delete_stream_processor_error.py` |

### client.stream_processor_api.describe_stream_processor

- **Route**: `POST /#DescribeStreamProcessor`
- **Auth**: `sigv4`
- **Signature**: `def describe_stream_processor(x_amz_target: XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeStreamProcessorErrorBody]`
- **Error**: `DescribeStreamProcessorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_stream_processor_api.py` |
| `DescribeStreamProcessorErrorBody` | `amazon_rekognition/errors/describe_stream_processor_error.py` |

### client.stream_processor_api.list_stream_processors

- **Route**: `POST /#ListStreamProcessors`
- **Auth**: `sigv4`
- **Signature**: `def list_stream_processors(x_amz_target: XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListStreamProcessorsErrorBody]`
- **Error**: `ListStreamProcessorsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr` | `amazon_rekognition/models/enums/x_amz_target3_amazon_rekognition_stream_processor_api.py` |
| `ListStreamProcessorsErrorBody` | `amazon_rekognition/errors/list_stream_processors_error.py` |

### client.stream_processor_api.start_stream_processor

- **Route**: `POST /#StartStreamProcessor`
- **Auth**: `sigv4`
- **Signature**: `def start_stream_processor(x_amz_target: XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartStreamProcessorErrorBody]`
- **Error**: `StartStreamProcessorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr` | `amazon_rekognition/models/enums/x_amz_target4_amazon_rekognition_stream_processor_api.py` |
| `StartStreamProcessorErrorBody` | `amazon_rekognition/errors/start_stream_processor_error.py` |

### client.stream_processor_api.stop_stream_processor

- **Route**: `POST /#StopStreamProcessor`
- **Auth**: `sigv4`
- **Signature**: `def stop_stream_processor(x_amz_target: XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopStreamProcessorErrorBody]`
- **Error**: `StopStreamProcessorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr` | `amazon_rekognition/models/enums/x_amz_target5_amazon_rekognition_stream_processor_api.py` |
| `StopStreamProcessorErrorBody` | `amazon_rekognition/errors/stop_stream_processor_error.py` |

### client.stream_processor_api.update_stream_processor

- **Route**: `POST /#UpdateStreamProcessor`
- **Auth**: `sigv4`
- **Signature**: `def update_stream_processor(x_amz_target: XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateStreamProcessorErrorBody]`
- **Error**: `UpdateStreamProcessorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr` | `amazon_rekognition/models/enums/x_amz_target6_amazon_rekognition_stream_processor_api.py` |
| `UpdateStreamProcessorErrorBody` | `amazon_rekognition/errors/update_stream_processor_error.py` |

