# Reference

> Source: [AmazonSqsClient](src/client.ts)

## Messages

> Source: [Messages](src/resources/messages.ts)

<details>
<summary><code>cancelMessageMoveTask(request: Messages.CancelMessageMoveTaskRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Messages.CancelMessageMoveTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet. This action is currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.messages.cancelMessageMoveTask({ xAmzTarget: XAmzTarget2.AmazonSqsCancelMessageMoveTask });
} catch (err) {
  // TODO: Handle 'err' of type Messages.CancelMessageMoveTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .cancelMessageMoveTask({ xAmzTarget: XAmzTarget2.AmazonSqsCancelMessageMoveTask })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget2](src/models/xamz-target2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.cancelMessageMoveTask(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Messages.CancelMessageMoveTaskError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.cancelMessageMoveTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Messages.CancelMessageMoveTaskError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changeMessageVisibility(request: Messages.ChangeMessageVisibilityRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Messages.ChangeMessageVisibilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see Visibility Timeout in the Amazon SQS Developer Guide. For example, if the default timeout for a queue is 60 seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call with VisibilityTimeout set to 10 seconds, the 10 seconds begin to count from the time that you make the ChangeMessageVisibility call. Thus, any attempt to change the visibility timeout or to delete that message 10 seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error. An Amazon SQS message has three basic states: Sent to a queue by a producer. Received from the queue by a consumer. Deleted from the queue. A message is considered to be stored after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be in flight after it is received from a queue by a consume

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.messages.changeMessageVisibility({ xAmzTarget: XAmzTarget5.AmazonSqsChangeMessageVisibility });
} catch (err) {
  // TODO: Handle 'err' of type Messages.ChangeMessageVisibilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .changeMessageVisibility({ xAmzTarget: XAmzTarget5.AmazonSqsChangeMessageVisibility })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget5](src/models/xamz-target5.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.changeMessageVisibility(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Messages.ChangeMessageVisibilityError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.changeMessageVisibility(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Messages.ChangeMessageVisibilityError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changeMessageVisibilityBatch(request: Messages.ChangeMessageVisibilityBatchRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Messages.ChangeMessageVisibilityBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the visibility timeout of multiple messages. This is a batch version of ChangeMessageVisibility. The result of the action on each message is reported individually in the response. You can send up to 10 ChangeMessageVisibility requests with each ChangeMessageVisibilityBatch action. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.messages.changeMessageVisibilityBatch({
    xAmzTarget: XAmzTarget6.AmazonSqsChangeMessageVisibilityBatch,
  });
} catch (err) {
  // TODO: Handle 'err' of type Messages.ChangeMessageVisibilityBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .changeMessageVisibilityBatch({ xAmzTarget: XAmzTarget6.AmazonSqsChangeMessageVisibilityBatch })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget6](src/models/xamz-target6.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.changeMessageVisibilityBatch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Messages.ChangeMessageVisibilityBatchError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.changeMessageVisibilityBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Messages.ChangeMessageVisibilityBatchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMessage(request: Messages.DeleteMessageRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Messages.DeleteMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified message from the specified queue. To select the message to delete, use the ReceiptHandle of the message (not the MessageId which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. Each time you receive a message, meaning when a consumer retrieves a message from the queue, it comes with a unique ReceiptHandle. If you receive the same message more than once, you will get a different ReceiptHandle each time. When you want to delete a message using the DeleteMessage action, you must use the ReceiptHandle from the most recent time you received the message. If you use an old ReceiptHandle, the request will succeed, but the message might not be deleted. For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might b

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.messages.deleteMessage({ xAmzTarget: XAmzTarget.AmazonSqsDeleteMessage });
} catch (err) {
  // TODO: Handle 'err' of type Messages.DeleteMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .deleteMessage({ xAmzTarget: XAmzTarget.AmazonSqsDeleteMessage })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.deleteMessage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Messages.DeleteMessageError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.deleteMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Messages.DeleteMessageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMessageBatch(request: Messages.DeleteMessageBatchRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Messages.DeleteMessageBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes up to ten messages from the specified queue. This is a batch version of DeleteMessage. The result of the action on each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.messages.deleteMessageBatch({ xAmzTarget: XAmzTarget8.AmazonSqsDeleteMessageBatch });
} catch (err) {
  // TODO: Handle 'err' of type Messages.DeleteMessageBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .deleteMessageBatch({ xAmzTarget: XAmzTarget8.AmazonSqsDeleteMessageBatch })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget8](src/models/xamz-target8.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.deleteMessageBatch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Messages.DeleteMessageBatchError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.deleteMessageBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Messages.DeleteMessageBatchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMessageMoveTasks(request: Messages.ListMessageMoveTasksRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Messages.ListMessageMoveTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the most recent message movement tasks (up to 10) under a specific source queue. This action is currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.messages.listMessageMoveTasks({ xAmzTarget: XAmzTarget3.AmazonSqsListMessageMoveTasks });
} catch (err) {
  // TODO: Handle 'err' of type Messages.ListMessageMoveTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .listMessageMoveTasks({ xAmzTarget: XAmzTarget3.AmazonSqsListMessageMoveTasks })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget3](src/models/xamz-target3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.listMessageMoveTasks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Messages.ListMessageMoveTasksError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.listMessageMoveTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Messages.ListMessageMoveTasksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>receiveMessage(request: Messages.ReceiveMessageRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Messages.ReceiveMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves one or more messages (up to 10), from the specified queue. Using the WaitTimeSeconds parameter enables long-poll support. For more information, see Amazon SQS Long Polling in the Amazon SQS Developer Guide. Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call. Therefore, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per ReceiveMessage call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular ReceiveMessage response. If this happens, repeat the request. For each message returned, the response includes the following: The message body. An MD5 digest of the message body. For information about MD5, see RFC1321. The MessageId you received when you sent the message to the queue. The receipt handle. The message attributes. An MD5 digest of the message attributes. The receipt handle is the identifier you must provide when deleting the message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. You 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.messages.receiveMessage({ xAmzTarget: XAmzTarget7.AmazonSqsReceiveMessage });
} catch (err) {
  // TODO: Handle 'err' of type Messages.ReceiveMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .receiveMessage({ xAmzTarget: XAmzTarget7.AmazonSqsReceiveMessage })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget7](src/models/xamz-target7.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.receiveMessage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Messages.ReceiveMessageError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.receiveMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Messages.ReceiveMessageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendMessage(request: Messages.SendMessageRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Messages.SendMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delivers a message to the specified queue. A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this exception.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.messages.sendMessage({ xAmzTarget: XAmzTarget1.AmazonSqsSendMessage });
} catch (err) {
  // TODO: Handle 'err' of type Messages.SendMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .sendMessage({ xAmzTarget: XAmzTarget1.AmazonSqsSendMessage })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget1](src/models/xamz-target1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.sendMessage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Messages.SendMessageError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.sendMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Messages.SendMessageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendMessageBatch(request: Messages.SendMessageBatchRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Messages.SendMessageBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can use SendMessageBatch to send up to 10 messages to the specified queue by assigning either identical or different values to each message (or by not assigning values at all). This is a batch version of SendMessage. For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent. The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200. The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 1 MiB 1,048,576 bytes. A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.messages.sendMessageBatch({ xAmzTarget: XAmzTarget9.AmazonSqsSendMessageBatch });
} catch (err) {
  // TODO: Handle 'err' of type Messages.SendMessageBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .sendMessageBatch({ xAmzTarget: XAmzTarget9.AmazonSqsSendMessageBatch })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget9](src/models/xamz-target9.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.sendMessageBatch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Messages.SendMessageBatchError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.sendMessageBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Messages.SendMessageBatchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startMessageMoveTask(request: Messages.StartMessageMoveTaskRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Messages.StartMessageMoveTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous task to move messages from a specified source queue to a specified destination queue. This action is currently limited to supporting message redrive from queues that are configured as dead-letter queues (DLQs) of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported. In dead-letter queues redrive context, the StartMessageMoveTask the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.messages.startMessageMoveTask({ xAmzTarget: XAmzTarget4.AmazonSqsStartMessageMoveTask });
} catch (err) {
  // TODO: Handle 'err' of type Messages.StartMessageMoveTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .startMessageMoveTask({ xAmzTarget: XAmzTarget4.AmazonSqsStartMessageMoveTask })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget4](src/models/xamz-target4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.startMessageMoveTask(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Messages.StartMessageMoveTaskError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.startMessageMoveTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Messages.StartMessageMoveTaskError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Permissions

> Source: [Permissions](src/resources/permissions.ts)

<details>
<summary><code>addPermission(request: Permissions.AddPermissionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.AddPermissionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a permission to a queue for a specific principal. This allows sharing access to the queue. When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see Allow Developers to Write Messages to a Shared Queue in the Amazon SQS Developer Guide. AddPermission generates a policy for you. You can use SetQueueAttributes to upload your policy. For more information, see Using Custom Policies with the Amazon SQS Access Policy Language in the Amazon SQS Developer Guide. An Amazon SQS policy can have a maximum of seven actions per statement. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy. Amazon SQS AddPermission does not support adding a non-account principal. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.addPermission({
    xAmzTarget: XAmzTargetAmazonSimpleQueueServicePermissionsApi.AmazonSqsAddPermission,
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.AddPermissionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions
  .addPermission({ xAmzTarget: XAmzTargetAmazonSimpleQueueServicePermissionsApi.AmazonSqsAddPermission })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonSimpleQueueServicePermissionsApi](src/models/xamz-target-amazon-simple-queue-service-permissions-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.addPermission(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.AddPermissionError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.addPermission(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.AddPermissionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removePermission(request: Permissions.RemovePermissionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Permissions.RemovePermissionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes any permissions in the queue policy that matches the specified Label parameter. Only the owner of a queue can remove permissions from it. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.permissions.removePermission({
    xAmzTarget: XAmzTarget1AmazonSimpleQueueServicePermissionsApi.AmazonSqsRemovePermission,
  });
} catch (err) {
  // TODO: Handle 'err' of type Permissions.RemovePermissionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.permissions
  .removePermission({
    xAmzTarget: XAmzTarget1AmazonSimpleQueueServicePermissionsApi.AmazonSqsRemovePermission,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonSimpleQueueServicePermissionsApi](src/models/xamz-target1-amazon-simple-queue-service-permissions-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.permissions.removePermission(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Permissions.RemovePermissionError](src/resources/permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.permissions.removePermission(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Permissions.RemovePermissionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Queues

> Source: [Queues](src/resources/queues.ts)

<details>
<summary><code>createQueue(request: Queues.CreateQueueRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Queues.CreateQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind: If you don't specify the FifoQueue attribute, Amazon SQS creates a standard queue. You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see Moving From a standard queue to a FIFO queue in the Amazon SQS Developer Guide. If you don't provide a value for an attribute, the queue is created with the default value for the attribute. If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name. To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues and is unique within the scope of your queues. After you create a queue, you must wait at least one second after the queue is created to be able to use the queue. To retrieve the URL of a queue, use the GetQueueUrl action. This action only requires the QueueName parameter. When creating queues, keep the following poi

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.queues.createQueue({
    xAmzTarget: XAmzTargetAmazonSimpleQueueServiceQueuesApi.AmazonSqsCreateQueue,
  });
} catch (err) {
  // TODO: Handle 'err' of type Queues.CreateQueueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .createQueue({ xAmzTarget: XAmzTargetAmazonSimpleQueueServiceQueuesApi.AmazonSqsCreateQueue })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonSimpleQueueServiceQueuesApi](src/models/xamz-target-amazon-simple-queue-service-queues-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.createQueue(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Queues.CreateQueueError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.createQueue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Queues.CreateQueueError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteQueue(request: Queues.DeleteQueueRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Queues.DeleteQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the queue specified by the QueueUrl, regardless of the queue's contents. Be careful with the DeleteQueue action: When you delete a queue, any messages in the queue are no longer available. When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a SendMessage request might succeed, but after 60 seconds the queue and the message you sent no longer exist. When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. The delete operation uses the HTTP GET verb.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.queues.deleteQueue({
    xAmzTarget: XAmzTarget1AmazonSimpleQueueServiceQueuesApi.AmazonSqsDeleteQueue,
  });
} catch (err) {
  // TODO: Handle 'err' of type Queues.DeleteQueueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .deleteQueue({ xAmzTarget: XAmzTarget1AmazonSimpleQueueServiceQueuesApi.AmazonSqsDeleteQueue })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonSimpleQueueServiceQueuesApi](src/models/xamz-target1-amazon-simple-queue-service-queues-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.deleteQueue(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Queues.DeleteQueueError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.deleteQueue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Queues.DeleteQueueError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQueueAttributes(request: Queues.GetQueueAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Queues.GetQueueAttributesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets attributes for the specified queue. To determine whether a queue is FIFO, you can check whether QueueName ends with the .fifo suffix.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.queues.getQueueAttributes({
    xAmzTarget: XAmzTarget6AmazonSimpleQueueServiceQueuesApi.AmazonSqsGetQueueAttributes,
  });
} catch (err) {
  // TODO: Handle 'err' of type Queues.GetQueueAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .getQueueAttributes({
    xAmzTarget: XAmzTarget6AmazonSimpleQueueServiceQueuesApi.AmazonSqsGetQueueAttributes,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget6AmazonSimpleQueueServiceQueuesApi](src/models/xamz-target6-amazon-simple-queue-service-queues-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.getQueueAttributes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Queues.GetQueueAttributesError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.getQueueAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Queues.GetQueueAttributesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQueueUrl(request: Queues.GetQueueUrlRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Queues.GetQueueUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The GetQueueUrl API returns the URL of an existing Amazon SQS queue. This is useful when you know the queue's name but need to retrieve its URL for further operations. To access a queue owned by another Amazon Web Services account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. Note that the queue owner must grant you the necessary permissions to access the queue. For more information about accessing shared queues, see the AddPermission API or Allow developers to write messages to a shared queue in the Amazon SQS Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.queues.getQueueUrl({
    xAmzTarget: XAmzTarget8AmazonSimpleQueueServiceQueuesApi.AmazonSqsGetQueueUrl,
  });
} catch (err) {
  // TODO: Handle 'err' of type Queues.GetQueueUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .getQueueUrl({ xAmzTarget: XAmzTarget8AmazonSimpleQueueServiceQueuesApi.AmazonSqsGetQueueUrl })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget8AmazonSimpleQueueServiceQueuesApi](src/models/xamz-target8-amazon-simple-queue-service-queues-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.getQueueUrl(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Queues.GetQueueUrlError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.getQueueUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Queues.GetQueueUrlError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDeadLetterSourceQueues(request: Queues.ListDeadLetterSourceQueuesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Queues.ListDeadLetterSourceQueuesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead-letter queue. The ListDeadLetterSourceQueues methods supports pagination. Set parameter MaxResults in the request to specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to ListDeadLetterSourceQueues to receive the next page of results. For more information about using dead-letter queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.queues.listDeadLetterSourceQueues({
    xAmzTarget: XAmzTarget9AmazonSimpleQueueServiceQueuesApi.AmazonSqsListDeadLetterSourceQueues,
  });
} catch (err) {
  // TODO: Handle 'err' of type Queues.ListDeadLetterSourceQueuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .listDeadLetterSourceQueues({
    xAmzTarget: XAmzTarget9AmazonSimpleQueueServiceQueuesApi.AmazonSqsListDeadLetterSourceQueues,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget9AmazonSimpleQueueServiceQueuesApi](src/models/xamz-target9-amazon-simple-queue-service-queues-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.listDeadLetterSourceQueues(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Queues.ListDeadLetterSourceQueuesError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.listDeadLetterSourceQueues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Queues.ListDeadLetterSourceQueuesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listQueues(request: Queues.ListQueuesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Queues.ListQueuesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional QueueNamePrefix parameter, only queues with a name that begins with the specified value are returned. The listQueues methods supports pagination. Set parameter MaxResults in the request to specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to listQueues to receive the next page of results. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.queues.listQueues({
    xAmzTarget: XAmzTarget2AmazonSimpleQueueServiceQueuesApi.AmazonSqsListQueues,
  });
} catch (err) {
  // TODO: Handle 'err' of type Queues.ListQueuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .listQueues({ xAmzTarget: XAmzTarget2AmazonSimpleQueueServiceQueuesApi.AmazonSqsListQueues })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonSimpleQueueServiceQueuesApi](src/models/xamz-target2-amazon-simple-queue-service-queues-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.listQueues(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Queues.ListQueuesError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.listQueues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Queues.ListQueuesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purgeQueue(request: Queues.PurgeQueueRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Queues.PurgeQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes available messages in a queue (including in-flight messages) specified by the QueueURL parameter. When you use the PurgeQueue action, you can't retrieve any messages deleted from a queue. The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. Messages sent to the queue before you call PurgeQueue might be received but are deleted within the next minute. Messages sent to the queue after you call PurgeQueue might be deleted while the queue is being purged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.queues.purgeQueue({
    xAmzTarget: XAmzTarget5AmazonSimpleQueueServiceQueuesApi.AmazonSqsPurgeQueue,
  });
} catch (err) {
  // TODO: Handle 'err' of type Queues.PurgeQueueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .purgeQueue({ xAmzTarget: XAmzTarget5AmazonSimpleQueueServiceQueuesApi.AmazonSqsPurgeQueue })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget5AmazonSimpleQueueServiceQueuesApi](src/models/xamz-target5-amazon-simple-queue-service-queues-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.purgeQueue(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Queues.PurgeQueueError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.purgeQueue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Queues.PurgeQueueError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setQueueAttributes(request: Queues.SetQueueAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Queues.SetQueueAttributesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the value of one or more queue attributes, like a policy. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the MessageRetentionPeriod is reduced below the age of existing messages. In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.queues.setQueueAttributes({
    xAmzTarget: XAmzTarget7AmazonSimpleQueueServiceQueuesApi.AmazonSqsSetQueueAttributes,
  });
} catch (err) {
  // TODO: Handle 'err' of type Queues.SetQueueAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .setQueueAttributes({
    xAmzTarget: XAmzTarget7AmazonSimpleQueueServiceQueuesApi.AmazonSqsSetQueueAttributes,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget7AmazonSimpleQueueServiceQueuesApi](src/models/xamz-target7-amazon-simple-queue-service-queues-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.setQueueAttributes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Queues.SetQueueAttributesError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.setQueueAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Queues.SetQueueAttributesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagQueue(request: Queues.TagQueueRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Queues.TagQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.queues.tagQueue({
    xAmzTarget: XAmzTarget3AmazonSimpleQueueServiceQueuesApi.AmazonSqsTagQueue,
  });
} catch (err) {
  // TODO: Handle 'err' of type Queues.TagQueueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .tagQueue({ xAmzTarget: XAmzTarget3AmazonSimpleQueueServiceQueuesApi.AmazonSqsTagQueue })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonSimpleQueueServiceQueuesApi](src/models/xamz-target3-amazon-simple-queue-service-queues-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.tagQueue(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Queues.TagQueueError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.tagQueue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Queues.TagQueueError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagQueue(request: Queues.UntagQueueRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Queues.UntagQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.queues.untagQueue({
    xAmzTarget: XAmzTarget4AmazonSimpleQueueServiceQueuesApi.AmazonSqsUntagQueue,
  });
} catch (err) {
  // TODO: Handle 'err' of type Queues.UntagQueueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queues
  .untagQueue({ xAmzTarget: XAmzTarget4AmazonSimpleQueueServiceQueuesApi.AmazonSqsUntagQueue })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonSimpleQueueServiceQueuesApi](src/models/xamz-target4-amazon-simple-queue-service-queues-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queues.untagQueue(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Queues.UntagQueueError](src/resources/queues.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queues.untagQueue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Queues.UntagQueueError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>listQueueTags(request: Tags.ListQueueTagsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Tags.ListQueueTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tags.listQueueTags({
    xAmzTarget: XAmzTarget2AmazonSimpleQueueServiceTagsApi.AmazonSqsListQueueTags,
  });
} catch (err) {
  // TODO: Handle 'err' of type Tags.ListQueueTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .listQueueTags({ xAmzTarget: XAmzTarget2AmazonSimpleQueueServiceTagsApi.AmazonSqsListQueueTags })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonSimpleQueueServiceTagsApi](src/models/xamz-target2-amazon-simple-queue-service-tags-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.listQueueTags(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tags.ListQueueTagsError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.listQueueTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tags.ListQueueTagsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagQueue2(request: Tags.TagQueue2Request, options?: RequestOptions): ApiPromise&lt;undefined, Tags.TagQueue2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tags.tagQueue2({ xAmzTarget: XAmzTargetAmazonSimpleQueueServiceTagsApi.AmazonSqsTagQueue });
} catch (err) {
  // TODO: Handle 'err' of type Tags.TagQueue2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .tagQueue2({ xAmzTarget: XAmzTargetAmazonSimpleQueueServiceTagsApi.AmazonSqsTagQueue })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonSimpleQueueServiceTagsApi](src/models/xamz-target-amazon-simple-queue-service-tags-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.tagQueue2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tags.TagQueue2Error](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.tagQueue2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tags.TagQueue2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagQueue2(request: Tags.UntagQueue2Request, options?: RequestOptions): ApiPromise&lt;undefined, Tags.UntagQueue2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tags.untagQueue2({
    xAmzTarget: XAmzTarget1AmazonSimpleQueueServiceTagsApi.AmazonSqsUntagQueue,
  });
} catch (err) {
  // TODO: Handle 'err' of type Tags.UntagQueue2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .untagQueue2({ xAmzTarget: XAmzTarget1AmazonSimpleQueueServiceTagsApi.AmazonSqsUntagQueue })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonSimpleQueueServiceTagsApi](src/models/xamz-target1-amazon-simple-queue-service-tags-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.untagQueue2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tags.UntagQueue2Error](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.untagQueue2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tags.UntagQueue2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonSqsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

