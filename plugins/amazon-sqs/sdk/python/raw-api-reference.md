# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AmazonSqsClient](amazon_sqs/client.py)

## Messages

> Source: [Messages](amazon_sqs/apis/messages.py)

<details>
<summary><code>def cancel_message_move_task(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CancelMessageMoveTaskErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet. This action is currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.cancel_message_move_task(XAmzTarget2.AMAZON_SQS_CANCEL_MESSAGE_MOVE_TASK)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelMessageMoveTaskErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.cancel_message_move_task(
    XAmzTarget2.AMAZON_SQS_CANCEL_MESSAGE_MOVE_TASK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelMessageMoveTaskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](amazon_sqs/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [CancelMessageMoveTaskErrorBody](amazon_sqs/errors/cancel_message_move_task_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CancelMessageMoveTaskErrorBody](amazon_sqs/errors/cancel_message_move_task_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def change_message_visibility(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ChangeMessageVisibilityErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see Visibility Timeout in the Amazon SQS Developer Guide. For example, if the default timeout for a queue is 60 seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call with VisibilityTimeout set to 10 seconds, the 10 seconds begin to count from the time that you make the ChangeMessageVisibility call. Thus, any attempt to change the visibility timeout or to delete that message 10 seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error. An Amazon SQS message has three basic states: Sent to a queue by a producer. Received from the queue by a consumer. Deleted from the queue. A message is considered to be stored after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be in flight after it is received from a queue by a consume

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.change_message_visibility(XAmzTarget5.AMAZON_SQS_CHANGE_MESSAGE_VISIBILITY)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChangeMessageVisibilityErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.change_message_visibility(
    XAmzTarget5.AMAZON_SQS_CHANGE_MESSAGE_VISIBILITY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChangeMessageVisibilityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](amazon_sqs/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [ChangeMessageVisibilityErrorBody](amazon_sqs/errors/change_message_visibility_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ChangeMessageVisibilityErrorBody](amazon_sqs/errors/change_message_visibility_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def change_message_visibility_batch(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ChangeMessageVisibilityBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the visibility timeout of multiple messages. This is a batch version of ChangeMessageVisibility. The result of the action on each message is reported individually in the response. You can send up to 10 ChangeMessageVisibility requests with each ChangeMessageVisibilityBatch action. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.change_message_visibility_batch(
    XAmzTarget6.AMAZON_SQS_CHANGE_MESSAGE_VISIBILITY_BATCH
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChangeMessageVisibilityBatchErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.change_message_visibility_batch(
    XAmzTarget6.AMAZON_SQS_CHANGE_MESSAGE_VISIBILITY_BATCH
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChangeMessageVisibilityBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](amazon_sqs/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [ChangeMessageVisibilityBatchErrorBody](amazon_sqs/errors/change_message_visibility_batch_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ChangeMessageVisibilityBatchErrorBody](amazon_sqs/errors/change_message_visibility_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_message(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteMessageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified message from the specified queue. To select the message to delete, use the ReceiptHandle of the message (not the MessageId which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. Each time you receive a message, meaning when a consumer retrieves a message from the queue, it comes with a unique ReceiptHandle. If you receive the same message more than once, you will get a different ReceiptHandle each time. When you want to delete a message using the DeleteMessage action, you must use the ReceiptHandle from the most recent time you received the message. If you use an old ReceiptHandle, the request will succeed, but the message might not be deleted. For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might b

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.delete_message(XAmzTarget.AMAZON_SQS_DELETE_MESSAGE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMessageErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.delete_message(XAmzTarget.AMAZON_SQS_DELETE_MESSAGE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](amazon_sqs/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [DeleteMessageErrorBody](amazon_sqs/errors/delete_message_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteMessageErrorBody](amazon_sqs/errors/delete_message_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_message_batch(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteMessageBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes up to ten messages from the specified queue. This is a batch version of DeleteMessage. The result of the action on each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.delete_message_batch(XAmzTarget8.AMAZON_SQS_DELETE_MESSAGE_BATCH)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMessageBatchErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.delete_message_batch(XAmzTarget8.AMAZON_SQS_DELETE_MESSAGE_BATCH)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMessageBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8OrStr](amazon_sqs/models/enums/x_amz_target8.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [DeleteMessageBatchErrorBody](amazon_sqs/errors/delete_message_batch_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteMessageBatchErrorBody](amazon_sqs/errors/delete_message_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_message_move_tasks(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListMessageMoveTasksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the most recent message movement tasks (up to 10) under a specific source queue. This action is currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.list_message_move_tasks(XAmzTarget3.AMAZON_SQS_LIST_MESSAGE_MOVE_TASKS)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMessageMoveTasksErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.list_message_move_tasks(
    XAmzTarget3.AMAZON_SQS_LIST_MESSAGE_MOVE_TASKS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMessageMoveTasksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](amazon_sqs/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [ListMessageMoveTasksErrorBody](amazon_sqs/errors/list_message_move_tasks_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListMessageMoveTasksErrorBody](amazon_sqs/errors/list_message_move_tasks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def receive_message(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ReceiveMessageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves one or more messages (up to 10), from the specified queue. Using the WaitTimeSeconds parameter enables long-poll support. For more information, see Amazon SQS Long Polling in the Amazon SQS Developer Guide. Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call. Therefore, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per ReceiveMessage call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular ReceiveMessage response. If this happens, repeat the request. For each message returned, the response includes the following: The message body. An MD5 digest of the message body. For information about MD5, see RFC1321. The MessageId you received when you sent the message to the queue. The receipt handle. The message attributes. An MD5 digest of the message attributes. The receipt handle is the identifier you must provide when deleting the message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. You

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.receive_message(XAmzTarget7.AMAZON_SQS_RECEIVE_MESSAGE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReceiveMessageErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.receive_message(XAmzTarget7.AMAZON_SQS_RECEIVE_MESSAGE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReceiveMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7OrStr](amazon_sqs/models/enums/x_amz_target7.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [ReceiveMessageErrorBody](amazon_sqs/errors/receive_message_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ReceiveMessageErrorBody](amazon_sqs/errors/receive_message_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_message(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SendMessageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delivers a message to the specified queue. A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this exception.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.send_message(XAmzTarget1.AMAZON_SQS_SEND_MESSAGE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendMessageErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.send_message(XAmzTarget1.AMAZON_SQS_SEND_MESSAGE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](amazon_sqs/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [SendMessageErrorBody](amazon_sqs/errors/send_message_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SendMessageErrorBody](amazon_sqs/errors/send_message_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_message_batch(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SendMessageBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can use SendMessageBatch to send up to 10 messages to the specified queue by assigning either identical or different values to each message (or by not assigning values at all). This is a batch version of SendMessage. For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent. The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200. The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 1 MiB 1,048,576 bytes. A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.send_message_batch(XAmzTarget9.AMAZON_SQS_SEND_MESSAGE_BATCH)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendMessageBatchErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.send_message_batch(XAmzTarget9.AMAZON_SQS_SEND_MESSAGE_BATCH)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SendMessageBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9OrStr](amazon_sqs/models/enums/x_amz_target9.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [SendMessageBatchErrorBody](amazon_sqs/errors/send_message_batch_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SendMessageBatchErrorBody](amazon_sqs/errors/send_message_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_message_move_task(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartMessageMoveTaskErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous task to move messages from a specified source queue to a specified destination queue. This action is currently limited to supporting message redrive from queues that are configured as dead-letter queues (DLQs) of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported. In dead-letter queues redrive context, the StartMessageMoveTask the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.start_message_move_task(XAmzTarget4.AMAZON_SQS_START_MESSAGE_MOVE_TASK)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMessageMoveTaskErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.start_message_move_task(
    XAmzTarget4.AMAZON_SQS_START_MESSAGE_MOVE_TASK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartMessageMoveTaskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](amazon_sqs/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [StartMessageMoveTaskErrorBody](amazon_sqs/errors/start_message_move_task_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartMessageMoveTaskErrorBody](amazon_sqs/errors/start_message_move_task_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Permissions

> Source: [Permissions](amazon_sqs/apis/permissions.py)

<details>
<summary><code>def add_permission(x_amz_target: XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, AddPermissionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a permission to a queue for a specific principal. This allows sharing access to the queue. When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see Allow Developers to Write Messages to a Shared Queue in the Amazon SQS Developer Guide. AddPermission generates a policy for you. You can use SetQueueAttributes to upload your policy. For more information, see Using Custom Policies with the Amazon SQS Access Policy Language in the Amazon SQS Developer Guide. An Amazon SQS policy can have a maximum of seven actions per statement. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy. Amazon SQS AddPermission does not support adding a non-account principal. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.permissions.with_raw_response.add_permission(
    XAmzTargetAmazonSimpleQueueServicePermissionsApi.AMAZON_SQS_ADD_PERMISSION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddPermissionErrorBody
```

**Async**

```python
result = await async_client.permissions.with_raw_response.add_permission(
    XAmzTargetAmazonSimpleQueueServicePermissionsApi.AMAZON_SQS_ADD_PERMISSION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddPermissionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr](amazon_sqs/models/enums/x_amz_target_amazon_simple_queue_service_permissions_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [AddPermissionErrorBody](amazon_sqs/errors/add_permission_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[AddPermissionErrorBody](amazon_sqs/errors/add_permission_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_permission(x_amz_target: XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RemovePermissionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes any permissions in the queue policy that matches the specified Label parameter. Only the owner of a queue can remove permissions from it. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.permissions.with_raw_response.remove_permission(
    XAmzTarget1AmazonSimpleQueueServicePermissionsApi.AMAZON_SQS_REMOVE_PERMISSION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemovePermissionErrorBody
```

**Async**

```python
result = await async_client.permissions.with_raw_response.remove_permission(
    XAmzTarget1AmazonSimpleQueueServicePermissionsApi.AMAZON_SQS_REMOVE_PERMISSION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemovePermissionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr](amazon_sqs/models/enums/x_amz_target1_amazon_simple_queue_service_permissions_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [RemovePermissionErrorBody](amazon_sqs/errors/remove_permission_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RemovePermissionErrorBody](amazon_sqs/errors/remove_permission_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Queues

> Source: [Queues](amazon_sqs/apis/queues.py)

<details>
<summary><code>def create_queue(x_amz_target: XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateQueueErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind: If you don't specify the FifoQueue attribute, Amazon SQS creates a standard queue. You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see Moving From a standard queue to a FIFO queue in the Amazon SQS Developer Guide. If you don't provide a value for an attribute, the queue is created with the default value for the attribute. If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name. To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues and is unique within the scope of your queues. After you create a queue, you must wait at least one second after the queue is created to be able to use the queue. To retrieve the URL of a queue, use the GetQueueUrl action. This action only requires the QueueName parameter. When creating queues, keep the following poi

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.create_queue(
    XAmzTargetAmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_CREATE_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateQueueErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.create_queue(
    XAmzTargetAmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_CREATE_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateQueueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr](amazon_sqs/models/enums/x_amz_target_amazon_simple_queue_service_queues_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [CreateQueueErrorBody](amazon_sqs/errors/create_queue_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateQueueErrorBody](amazon_sqs/errors/create_queue_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_queue(x_amz_target: XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteQueueErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the queue specified by the QueueUrl, regardless of the queue's contents. Be careful with the DeleteQueue action: When you delete a queue, any messages in the queue are no longer available. When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a SendMessage request might succeed, but after 60 seconds the queue and the message you sent no longer exist. When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. The delete operation uses the HTTP GET verb.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.delete_queue(
    XAmzTarget1AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_DELETE_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteQueueErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.delete_queue(
    XAmzTarget1AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_DELETE_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteQueueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr](amazon_sqs/models/enums/x_amz_target1_amazon_simple_queue_service_queues_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [DeleteQueueErrorBody](amazon_sqs/errors/delete_queue_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteQueueErrorBody](amazon_sqs/errors/delete_queue_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_queue_attributes(x_amz_target: XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetQueueAttributesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets attributes for the specified queue. To determine whether a queue is FIFO, you can check whether QueueName ends with the .fifo suffix.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.get_queue_attributes(
    XAmzTarget6AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_GET_QUEUE_ATTRIBUTES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQueueAttributesErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.get_queue_attributes(
    XAmzTarget6AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_GET_QUEUE_ATTRIBUTES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQueueAttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr](amazon_sqs/models/enums/x_amz_target6_amazon_simple_queue_service_queues_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [GetQueueAttributesErrorBody](amazon_sqs/errors/get_queue_attributes_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetQueueAttributesErrorBody](amazon_sqs/errors/get_queue_attributes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_queue_url(x_amz_target: XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetQueueUrlErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The GetQueueUrl API returns the URL of an existing Amazon SQS queue. This is useful when you know the queue's name but need to retrieve its URL for further operations. To access a queue owned by another Amazon Web Services account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. Note that the queue owner must grant you the necessary permissions to access the queue. For more information about accessing shared queues, see the AddPermission API or Allow developers to write messages to a shared queue in the Amazon SQS Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.get_queue_url(
    XAmzTarget8AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_GET_QUEUE_URL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQueueUrlErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.get_queue_url(
    XAmzTarget8AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_GET_QUEUE_URL
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQueueUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr](amazon_sqs/models/enums/x_amz_target8_amazon_simple_queue_service_queues_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [GetQueueUrlErrorBody](amazon_sqs/errors/get_queue_url_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetQueueUrlErrorBody](amazon_sqs/errors/get_queue_url_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_dead_letter_source_queues(x_amz_target: XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListDeadLetterSourceQueuesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead-letter queue. The ListDeadLetterSourceQueues methods supports pagination. Set parameter MaxResults in the request to specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to ListDeadLetterSourceQueues to receive the next page of results. For more information about using dead-letter queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.list_dead_letter_source_queues(
    XAmzTarget9AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_LIST_DEAD_LETTER_SOURCE_QUEUES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDeadLetterSourceQueuesErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.list_dead_letter_source_queues(
    XAmzTarget9AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_LIST_DEAD_LETTER_SOURCE_QUEUES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDeadLetterSourceQueuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr](amazon_sqs/models/enums/x_amz_target9_amazon_simple_queue_service_queues_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [ListDeadLetterSourceQueuesErrorBody](amazon_sqs/errors/list_dead_letter_source_queues_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListDeadLetterSourceQueuesErrorBody](amazon_sqs/errors/list_dead_letter_source_queues_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_queues(x_amz_target: XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListQueuesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional QueueNamePrefix parameter, only queues with a name that begins with the specified value are returned. The listQueues methods supports pagination. Set parameter MaxResults in the request to specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to listQueues to receive the next page of results. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.list_queues(
    XAmzTarget2AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_LIST_QUEUES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQueuesErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.list_queues(
    XAmzTarget2AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_LIST_QUEUES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQueuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr](amazon_sqs/models/enums/x_amz_target2_amazon_simple_queue_service_queues_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [ListQueuesErrorBody](amazon_sqs/errors/list_queues_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListQueuesErrorBody](amazon_sqs/errors/list_queues_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purge_queue(x_amz_target: XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PurgeQueueErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes available messages in a queue (including in-flight messages) specified by the QueueURL parameter. When you use the PurgeQueue action, you can't retrieve any messages deleted from a queue. The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. Messages sent to the queue before you call PurgeQueue might be received but are deleted within the next minute. Messages sent to the queue after you call PurgeQueue might be deleted while the queue is being purged.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.purge_queue(
    XAmzTarget5AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_PURGE_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PurgeQueueErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.purge_queue(
    XAmzTarget5AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_PURGE_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PurgeQueueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr](amazon_sqs/models/enums/x_amz_target5_amazon_simple_queue_service_queues_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [PurgeQueueErrorBody](amazon_sqs/errors/purge_queue_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PurgeQueueErrorBody](amazon_sqs/errors/purge_queue_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_queue_attributes(x_amz_target: XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SetQueueAttributesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the value of one or more queue attributes, like a policy. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the MessageRetentionPeriod is reduced below the age of existing messages. In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.set_queue_attributes(
    XAmzTarget7AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_SET_QUEUE_ATTRIBUTES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetQueueAttributesErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.set_queue_attributes(
    XAmzTarget7AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_SET_QUEUE_ATTRIBUTES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetQueueAttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr](amazon_sqs/models/enums/x_amz_target7_amazon_simple_queue_service_queues_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [SetQueueAttributesErrorBody](amazon_sqs/errors/set_queue_attributes_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SetQueueAttributesErrorBody](amazon_sqs/errors/set_queue_attributes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_queue(x_amz_target: XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TagQueueErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.tag_queue(XAmzTarget3AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_TAG_QUEUE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagQueueErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.tag_queue(
    XAmzTarget3AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_TAG_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagQueueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr](amazon_sqs/models/enums/x_amz_target3_amazon_simple_queue_service_queues_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [TagQueueErrorBody](amazon_sqs/errors/tag_queue_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TagQueueErrorBody](amazon_sqs/errors/tag_queue_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_queue(x_amz_target: XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UntagQueueErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.queues.with_raw_response.untag_queue(
    XAmzTarget4AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_UNTAG_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagQueueErrorBody
```

**Async**

```python
result = await async_client.queues.with_raw_response.untag_queue(
    XAmzTarget4AmazonSimpleQueueServiceQueuesApi.AMAZON_SQS_UNTAG_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagQueueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr](amazon_sqs/models/enums/x_amz_target4_amazon_simple_queue_service_queues_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [UntagQueueErrorBody](amazon_sqs/errors/untag_queue_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UntagQueueErrorBody](amazon_sqs/errors/untag_queue_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](amazon_sqs/apis/tags.py)

<details>
<summary><code>def list_queue_tags(x_amz_target: XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListQueueTagsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.list_queue_tags(
    XAmzTarget2AmazonSimpleQueueServiceTagsApi.AMAZON_SQS_LIST_QUEUE_TAGS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQueueTagsErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.list_queue_tags(
    XAmzTarget2AmazonSimpleQueueServiceTagsApi.AMAZON_SQS_LIST_QUEUE_TAGS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQueueTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr](amazon_sqs/models/enums/x_amz_target2_amazon_simple_queue_service_tags_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [ListQueueTagsErrorBody](amazon_sqs/errors/list_queue_tags_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListQueueTagsErrorBody](amazon_sqs/errors/list_queue_tags_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_queue2(x_amz_target: XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TagQueue2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.tag_queue2(XAmzTargetAmazonSimpleQueueServiceTagsApi.AMAZON_SQS_TAG_QUEUE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagQueue2ErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.tag_queue2(
    XAmzTargetAmazonSimpleQueueServiceTagsApi.AMAZON_SQS_TAG_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagQueue2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr](amazon_sqs/models/enums/x_amz_target_amazon_simple_queue_service_tags_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [TagQueue2ErrorBody](amazon_sqs/errors/tag_queue2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TagQueue2ErrorBody](amazon_sqs/errors/tag_queue2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_queue2(x_amz_target: XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UntagQueue2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.untag_queue2(XAmzTarget1AmazonSimpleQueueServiceTagsApi.AMAZON_SQS_UNTAG_QUEUE)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagQueue2ErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.untag_queue2(
    XAmzTarget1AmazonSimpleQueueServiceTagsApi.AMAZON_SQS_UNTAG_QUEUE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagQueue2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr](amazon_sqs/models/enums/x_amz_target1_amazon_simple_queue_service_tags_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_sqs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_sqs/core/results.py)&#91;None, [UntagQueue2ErrorBody](amazon_sqs/errors/untag_queue2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UntagQueue2ErrorBody](amazon_sqs/errors/untag_queue2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](amazon_sqs/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_sqs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

