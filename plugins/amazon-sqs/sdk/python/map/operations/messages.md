<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.messages` · Source: `amazon_sqs/apis/messages.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.messages.cancel_message_move_task

- **Route**: `POST /#CancelMessageMoveTask`
- **Auth**: `sigv4`
- **Signature**: `def cancel_message_move_task(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CancelMessageMoveTaskErrorBody]`
- **Error**: `CancelMessageMoveTaskErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `amazon_sqs/models/enums/x_amz_target2.py` |
| `CancelMessageMoveTaskErrorBody` | `amazon_sqs/errors/cancel_message_move_task_error.py` |

### client.messages.change_message_visibility

- **Route**: `POST /#ChangeMessageVisibility`
- **Auth**: `sigv4`
- **Signature**: `def change_message_visibility(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ChangeMessageVisibilityErrorBody]`
- **Error**: `ChangeMessageVisibilityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `amazon_sqs/models/enums/x_amz_target5.py` |
| `ChangeMessageVisibilityErrorBody` | `amazon_sqs/errors/change_message_visibility_error.py` |

### client.messages.change_message_visibility_batch

- **Route**: `POST /#ChangeMessageVisibilityBatch`
- **Auth**: `sigv4`
- **Signature**: `def change_message_visibility_batch(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ChangeMessageVisibilityBatchErrorBody]`
- **Error**: `ChangeMessageVisibilityBatchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `amazon_sqs/models/enums/x_amz_target6.py` |
| `ChangeMessageVisibilityBatchErrorBody` | `amazon_sqs/errors/change_message_visibility_batch_error.py` |

### client.messages.delete_message

- **Route**: `POST /#DeleteMessage`
- **Auth**: `sigv4`
- **Signature**: `def delete_message(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteMessageErrorBody]`
- **Error**: `DeleteMessageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `amazon_sqs/models/enums/x_amz_target.py` |
| `DeleteMessageErrorBody` | `amazon_sqs/errors/delete_message_error.py` |

### client.messages.delete_message_batch

- **Route**: `POST /#DeleteMessageBatch`
- **Auth**: `sigv4`
- **Signature**: `def delete_message_batch(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteMessageBatchErrorBody]`
- **Error**: `DeleteMessageBatchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8OrStr` | `amazon_sqs/models/enums/x_amz_target8.py` |
| `DeleteMessageBatchErrorBody` | `amazon_sqs/errors/delete_message_batch_error.py` |

### client.messages.list_message_move_tasks

- **Route**: `POST /#ListMessageMoveTasks`
- **Auth**: `sigv4`
- **Signature**: `def list_message_move_tasks(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListMessageMoveTasksErrorBody]`
- **Error**: `ListMessageMoveTasksErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `amazon_sqs/models/enums/x_amz_target3.py` |
| `ListMessageMoveTasksErrorBody` | `amazon_sqs/errors/list_message_move_tasks_error.py` |

### client.messages.receive_message

- **Route**: `POST /#ReceiveMessage`
- **Auth**: `sigv4`
- **Signature**: `def receive_message(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ReceiveMessageErrorBody]`
- **Error**: `ReceiveMessageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7OrStr` | `amazon_sqs/models/enums/x_amz_target7.py` |
| `ReceiveMessageErrorBody` | `amazon_sqs/errors/receive_message_error.py` |

### client.messages.send_message

- **Route**: `POST /#SendMessage`
- **Auth**: `sigv4`
- **Signature**: `def send_message(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SendMessageErrorBody]`
- **Error**: `SendMessageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `amazon_sqs/models/enums/x_amz_target1.py` |
| `SendMessageErrorBody` | `amazon_sqs/errors/send_message_error.py` |

### client.messages.send_message_batch

- **Route**: `POST /#SendMessageBatch`
- **Auth**: `sigv4`
- **Signature**: `def send_message_batch(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SendMessageBatchErrorBody]`
- **Error**: `SendMessageBatchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9OrStr` | `amazon_sqs/models/enums/x_amz_target9.py` |
| `SendMessageBatchErrorBody` | `amazon_sqs/errors/send_message_batch_error.py` |

### client.messages.start_message_move_task

- **Route**: `POST /#StartMessageMoveTask`
- **Auth**: `sigv4`
- **Signature**: `def start_message_move_task(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartMessageMoveTaskErrorBody]`
- **Error**: `StartMessageMoveTaskErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `amazon_sqs/models/enums/x_amz_target4.py` |
| `StartMessageMoveTaskErrorBody` | `amazon_sqs/errors/start_message_move_task_error.py` |

