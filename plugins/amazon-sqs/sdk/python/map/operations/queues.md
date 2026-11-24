<!-- Generated file — do not edit; regenerated with the SDK. -->

# Queues — operations

Accessor: `client.queues` · Source: `amazon_sqs/apis/queues.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.queues.create_queue

- **Route**: `POST /#CreateQueue`
- **Auth**: `sigv4`
- **Signature**: `def create_queue(x_amz_target: XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateQueueErrorBody]`
- **Error**: `CreateQueueErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr` | `amazon_sqs/models/enums/x_amz_target_amazon_simple_queue_service_queues_api.py` |
| `CreateQueueErrorBody` | `amazon_sqs/errors/create_queue_error.py` |

### client.queues.delete_queue

- **Route**: `POST /#DeleteQueue`
- **Auth**: `sigv4`
- **Signature**: `def delete_queue(x_amz_target: XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteQueueErrorBody]`
- **Error**: `DeleteQueueErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr` | `amazon_sqs/models/enums/x_amz_target1_amazon_simple_queue_service_queues_api.py` |
| `DeleteQueueErrorBody` | `amazon_sqs/errors/delete_queue_error.py` |

### client.queues.get_queue_attributes

- **Route**: `POST /#GetQueueAttributes`
- **Auth**: `sigv4`
- **Signature**: `def get_queue_attributes(x_amz_target: XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetQueueAttributesErrorBody]`
- **Error**: `GetQueueAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr` | `amazon_sqs/models/enums/x_amz_target6_amazon_simple_queue_service_queues_api.py` |
| `GetQueueAttributesErrorBody` | `amazon_sqs/errors/get_queue_attributes_error.py` |

### client.queues.get_queue_url

- **Route**: `POST /#GetQueueUrl`
- **Auth**: `sigv4`
- **Signature**: `def get_queue_url(x_amz_target: XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetQueueUrlErrorBody]`
- **Error**: `GetQueueUrlErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr` | `amazon_sqs/models/enums/x_amz_target8_amazon_simple_queue_service_queues_api.py` |
| `GetQueueUrlErrorBody` | `amazon_sqs/errors/get_queue_url_error.py` |

### client.queues.list_dead_letter_source_queues

- **Route**: `POST /#ListDeadLetterSourceQueues`
- **Auth**: `sigv4`
- **Signature**: `def list_dead_letter_source_queues(x_amz_target: XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDeadLetterSourceQueuesErrorBody]`
- **Error**: `ListDeadLetterSourceQueuesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr` | `amazon_sqs/models/enums/x_amz_target9_amazon_simple_queue_service_queues_api.py` |
| `ListDeadLetterSourceQueuesErrorBody` | `amazon_sqs/errors/list_dead_letter_source_queues_error.py` |

### client.queues.list_queues

- **Route**: `POST /#ListQueues`
- **Auth**: `sigv4`
- **Signature**: `def list_queues(x_amz_target: XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListQueuesErrorBody]`
- **Error**: `ListQueuesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr` | `amazon_sqs/models/enums/x_amz_target2_amazon_simple_queue_service_queues_api.py` |
| `ListQueuesErrorBody` | `amazon_sqs/errors/list_queues_error.py` |

### client.queues.purge_queue

- **Route**: `POST /#PurgeQueue`
- **Auth**: `sigv4`
- **Signature**: `def purge_queue(x_amz_target: XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PurgeQueueErrorBody]`
- **Error**: `PurgeQueueErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr` | `amazon_sqs/models/enums/x_amz_target5_amazon_simple_queue_service_queues_api.py` |
| `PurgeQueueErrorBody` | `amazon_sqs/errors/purge_queue_error.py` |

### client.queues.set_queue_attributes

- **Route**: `POST /#SetQueueAttributes`
- **Auth**: `sigv4`
- **Signature**: `def set_queue_attributes(x_amz_target: XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SetQueueAttributesErrorBody]`
- **Error**: `SetQueueAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr` | `amazon_sqs/models/enums/x_amz_target7_amazon_simple_queue_service_queues_api.py` |
| `SetQueueAttributesErrorBody` | `amazon_sqs/errors/set_queue_attributes_error.py` |

### client.queues.tag_queue

- **Route**: `POST /#TagQueue`
- **Auth**: `sigv4`
- **Signature**: `def tag_queue(x_amz_target: XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagQueueErrorBody]`
- **Error**: `TagQueueErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr` | `amazon_sqs/models/enums/x_amz_target3_amazon_simple_queue_service_queues_api.py` |
| `TagQueueErrorBody` | `amazon_sqs/errors/tag_queue_error.py` |

### client.queues.untag_queue

- **Route**: `POST /#UntagQueue`
- **Auth**: `sigv4`
- **Signature**: `def untag_queue(x_amz_target: XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UntagQueueErrorBody]`
- **Error**: `UntagQueueErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr` | `amazon_sqs/models/enums/x_amz_target4_amazon_simple_queue_service_queues_api.py` |
| `UntagQueueErrorBody` | `amazon_sqs/errors/untag_queue_error.py` |

