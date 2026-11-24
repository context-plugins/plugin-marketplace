<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `amazon_sqs/apis/tags.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tags.list_queue_tags

- **Route**: `POST /#ListQueueTags`
- **Auth**: `sigv4`
- **Signature**: `def list_queue_tags(x_amz_target: XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListQueueTagsErrorBody]`
- **Error**: `ListQueueTagsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr` | `amazon_sqs/models/enums/x_amz_target2_amazon_simple_queue_service_tags_api.py` |
| `ListQueueTagsErrorBody` | `amazon_sqs/errors/list_queue_tags_error.py` |

### client.tags.tag_queue2

- **Route**: `POST /#TagQueue`
- **Auth**: `sigv4`
- **Signature**: `def tag_queue2(x_amz_target: XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagQueue2ErrorBody]`
- **Error**: `TagQueue2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr` | `amazon_sqs/models/enums/x_amz_target_amazon_simple_queue_service_tags_api.py` |
| `TagQueue2ErrorBody` | `amazon_sqs/errors/tag_queue2_error.py` |

### client.tags.untag_queue2

- **Route**: `POST /#UntagQueue`
- **Auth**: `sigv4`
- **Signature**: `def untag_queue2(x_amz_target: XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UntagQueue2ErrorBody]`
- **Error**: `UntagQueue2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr` | `amazon_sqs/models/enums/x_amz_target1_amazon_simple_queue_service_tags_api.py` |
| `UntagQueue2ErrorBody` | `amazon_sqs/errors/untag_queue2_error.py` |

