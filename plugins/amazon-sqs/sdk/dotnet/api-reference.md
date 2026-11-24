# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonSqsClient](src/AmazonSqs/AmazonSqsClient.cs)

## Messages

> Source: [Messages](src/AmazonSqs/Api/Messages.cs)

<details>
<summary><code>Task CancelMessageMoveTask(CancelMessageMoveTaskOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Messages.CancelMessageMoveTask(new CancelMessageMoveTaskOperationRequest
    {
        XAmzTarget = XAmzTarget2.AmazonSqsCancelMessageMoveTask,
    });
}
catch (ApiException<CancelMessageMoveTaskError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelMessageMoveTaskOperationRequest](src/AmazonSqs/Requests/Messages/CancelMessageMoveTaskOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[CancelMessageMoveTaskError](src/AmazonSqs/Errors/CancelMessageMoveTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ChangeMessageVisibility(ChangeMessageVisibilityOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Messages.ChangeMessageVisibility(new ChangeMessageVisibilityOperationRequest
    {
        XAmzTarget = XAmzTarget5.AmazonSqsChangeMessageVisibility,
    });
}
catch (ApiException<ChangeMessageVisibilityError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ChangeMessageVisibilityOperationRequest](src/AmazonSqs/Requests/Messages/ChangeMessageVisibilityOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[ChangeMessageVisibilityError](src/AmazonSqs/Errors/ChangeMessageVisibilityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ChangeMessageVisibilityBatch(ChangeMessageVisibilityBatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Messages.ChangeMessageVisibilityBatch(new ChangeMessageVisibilityBatchOperationRequest
    {
        XAmzTarget = XAmzTarget6.AmazonSqsChangeMessageVisibilityBatch,
    });
}
catch (ApiException<ChangeMessageVisibilityBatchError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ChangeMessageVisibilityBatchOperationRequest](src/AmazonSqs/Requests/Messages/ChangeMessageVisibilityBatchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[ChangeMessageVisibilityBatchError](src/AmazonSqs/Errors/ChangeMessageVisibilityBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteMessage(DeleteMessageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Messages.DeleteMessage(new DeleteMessageOperationRequest
    {
        XAmzTarget = XAmzTarget.AmazonSqsDeleteMessage,
    });
}
catch (ApiException<DeleteMessageError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteMessageOperationRequest](src/AmazonSqs/Requests/Messages/DeleteMessageOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[DeleteMessageError](src/AmazonSqs/Errors/DeleteMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteMessageBatch(DeleteMessageBatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Messages.DeleteMessageBatch(new DeleteMessageBatchOperationRequest
    {
        XAmzTarget = XAmzTarget8.AmazonSqsDeleteMessageBatch,
    });
}
catch (ApiException<DeleteMessageBatchError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteMessageBatchOperationRequest](src/AmazonSqs/Requests/Messages/DeleteMessageBatchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[DeleteMessageBatchError](src/AmazonSqs/Errors/DeleteMessageBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListMessageMoveTasks(ListMessageMoveTasksOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Messages.ListMessageMoveTasks(new ListMessageMoveTasksOperationRequest
    {
        XAmzTarget = XAmzTarget3.AmazonSqsListMessageMoveTasks,
    });
}
catch (ApiException<ListMessageMoveTasksError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMessageMoveTasksOperationRequest](src/AmazonSqs/Requests/Messages/ListMessageMoveTasksOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[ListMessageMoveTasksError](src/AmazonSqs/Errors/ListMessageMoveTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ReceiveMessage(ReceiveMessageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Messages.ReceiveMessage(new ReceiveMessageOperationRequest
    {
        XAmzTarget = XAmzTarget7.AmazonSqsReceiveMessage,
    });
}
catch (ApiException<ReceiveMessageError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReceiveMessageOperationRequest](src/AmazonSqs/Requests/Messages/ReceiveMessageOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[ReceiveMessageError](src/AmazonSqs/Errors/ReceiveMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SendMessage(SendMessageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Messages.SendMessage(new SendMessageOperationRequest
    {
        XAmzTarget = XAmzTarget1.AmazonSqsSendMessage,
    });
}
catch (ApiException<SendMessageError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SendMessageOperationRequest](src/AmazonSqs/Requests/Messages/SendMessageOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[SendMessageError](src/AmazonSqs/Errors/SendMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SendMessageBatch(SendMessageBatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Messages.SendMessageBatch(new SendMessageBatchOperationRequest
    {
        XAmzTarget = XAmzTarget9.AmazonSqsSendMessageBatch,
    });
}
catch (ApiException<SendMessageBatchError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SendMessageBatchOperationRequest](src/AmazonSqs/Requests/Messages/SendMessageBatchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[SendMessageBatchError](src/AmazonSqs/Errors/SendMessageBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartMessageMoveTask(StartMessageMoveTaskOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Messages.StartMessageMoveTask(new StartMessageMoveTaskOperationRequest
    {
        XAmzTarget = XAmzTarget4.AmazonSqsStartMessageMoveTask,
    });
}
catch (ApiException<StartMessageMoveTaskError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartMessageMoveTaskOperationRequest](src/AmazonSqs/Requests/Messages/StartMessageMoveTaskOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[StartMessageMoveTaskError](src/AmazonSqs/Errors/StartMessageMoveTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Permissions

> Source: [Permissions](src/AmazonSqs/Api/Permissions.cs)

<details>
<summary><code>Task AddPermission(AddPermissionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Permissions.AddPermission(new AddPermissionOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonSimpleQueueServicePermissionsApi.AmazonSqsAddPermission,
    });
}
catch (ApiException<AddPermissionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddPermissionOperationRequest](src/AmazonSqs/Requests/Permissions/AddPermissionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[AddPermissionError](src/AmazonSqs/Errors/AddPermissionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemovePermission(RemovePermissionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Permissions.RemovePermission(new RemovePermissionOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonSimpleQueueServicePermissionsApi.AmazonSqsRemovePermission,
    });
}
catch (ApiException<RemovePermissionError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemovePermissionOperationRequest](src/AmazonSqs/Requests/Permissions/RemovePermissionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[RemovePermissionError](src/AmazonSqs/Errors/RemovePermissionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Queues

> Source: [Queues](src/AmazonSqs/Api/Queues.cs)

<details>
<summary><code>Task CreateQueue(CreateQueueOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Queues.CreateQueue(new CreateQueueOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonSimpleQueueServiceQueuesApi.AmazonSqsCreateQueue,
    });
}
catch (ApiException<CreateQueueError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateQueueOperationRequest](src/AmazonSqs/Requests/Queues/CreateQueueOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[CreateQueueError](src/AmazonSqs/Errors/CreateQueueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteQueue(DeleteQueueOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Queues.DeleteQueue(new DeleteQueueOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonSimpleQueueServiceQueuesApi.AmazonSqsDeleteQueue,
    });
}
catch (ApiException<DeleteQueueError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteQueueOperationRequest](src/AmazonSqs/Requests/Queues/DeleteQueueOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[DeleteQueueError](src/AmazonSqs/Errors/DeleteQueueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetQueueAttributes(GetQueueAttributesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Queues.GetQueueAttributes(new GetQueueAttributesOperationRequest
    {
        XAmzTarget = XAmzTarget6AmazonSimpleQueueServiceQueuesApi.AmazonSqsGetQueueAttributes,
    });
}
catch (ApiException<GetQueueAttributesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetQueueAttributesOperationRequest](src/AmazonSqs/Requests/Queues/GetQueueAttributesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[GetQueueAttributesError](src/AmazonSqs/Errors/GetQueueAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetQueueUrl(GetQueueUrlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Queues.GetQueueUrl(new GetQueueUrlOperationRequest
    {
        XAmzTarget = XAmzTarget8AmazonSimpleQueueServiceQueuesApi.AmazonSqsGetQueueUrl,
    });
}
catch (ApiException<GetQueueUrlError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetQueueUrlOperationRequest](src/AmazonSqs/Requests/Queues/GetQueueUrlOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[GetQueueUrlError](src/AmazonSqs/Errors/GetQueueUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDeadLetterSourceQueues(ListDeadLetterSourceQueuesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Queues.ListDeadLetterSourceQueues(new ListDeadLetterSourceQueuesOperationRequest
    {
        XAmzTarget = XAmzTarget9AmazonSimpleQueueServiceQueuesApi.AmazonSqsListDeadLetterSourceQueues,
    });
}
catch (ApiException<ListDeadLetterSourceQueuesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDeadLetterSourceQueuesOperationRequest](src/AmazonSqs/Requests/Queues/ListDeadLetterSourceQueuesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[ListDeadLetterSourceQueuesError](src/AmazonSqs/Errors/ListDeadLetterSourceQueuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListQueues(ListQueuesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Queues.ListQueues(new ListQueuesOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonSimpleQueueServiceQueuesApi.AmazonSqsListQueues,
    });
}
catch (ApiException<ListQueuesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListQueuesOperationRequest](src/AmazonSqs/Requests/Queues/ListQueuesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[ListQueuesError](src/AmazonSqs/Errors/ListQueuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PurgeQueue(PurgeQueueOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Queues.PurgeQueue(new PurgeQueueOperationRequest
    {
        XAmzTarget = XAmzTarget5AmazonSimpleQueueServiceQueuesApi.AmazonSqsPurgeQueue,
    });
}
catch (ApiException<PurgeQueueError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PurgeQueueOperationRequest](src/AmazonSqs/Requests/Queues/PurgeQueueOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[PurgeQueueError](src/AmazonSqs/Errors/PurgeQueueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SetQueueAttributes(SetQueueAttributesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Queues.SetQueueAttributes(new SetQueueAttributesOperationRequest
    {
        XAmzTarget = XAmzTarget7AmazonSimpleQueueServiceQueuesApi.AmazonSqsSetQueueAttributes,
    });
}
catch (ApiException<SetQueueAttributesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetQueueAttributesOperationRequest](src/AmazonSqs/Requests/Queues/SetQueueAttributesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[SetQueueAttributesError](src/AmazonSqs/Errors/SetQueueAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TagQueue(TagQueueOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Queues.TagQueue(new TagQueueOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonSimpleQueueServiceQueuesApi.AmazonSqsTagQueue,
    });
}
catch (ApiException<TagQueueError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TagQueueOperationRequest](src/AmazonSqs/Requests/Queues/TagQueueOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[TagQueueError](src/AmazonSqs/Errors/TagQueueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UntagQueue(UntagQueueOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Queues.UntagQueue(new UntagQueueOperationRequest
    {
        XAmzTarget = XAmzTarget4AmazonSimpleQueueServiceQueuesApi.AmazonSqsUntagQueue,
    });
}
catch (ApiException<UntagQueueError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UntagQueueOperationRequest](src/AmazonSqs/Requests/Queues/UntagQueueOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[UntagQueueError](src/AmazonSqs/Errors/UntagQueueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/AmazonSqs/Api/Tags.cs)

<details>
<summary><code>Task ListQueueTags(ListQueueTagsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Tags.ListQueueTags(new ListQueueTagsOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonSimpleQueueServiceTagsApi.AmazonSqsListQueueTags,
    });
}
catch (ApiException<ListQueueTagsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListQueueTagsOperationRequest](src/AmazonSqs/Requests/Tags/ListQueueTagsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[ListQueueTagsError](src/AmazonSqs/Errors/ListQueueTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TagQueue2(TagQueue2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Tags.TagQueue2(new TagQueue2Request
    {
        XAmzTarget = XAmzTargetAmazonSimpleQueueServiceTagsApi.AmazonSqsTagQueue,
    });
}
catch (ApiException<TagQueue2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TagQueue2Request](src/AmazonSqs/Requests/Tags/TagQueue2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[TagQueue2Error](src/AmazonSqs/Errors/TagQueue2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UntagQueue2(UntagQueue2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Tags.UntagQueue2(new UntagQueue2Request
    {
        XAmzTarget = XAmzTarget1AmazonSimpleQueueServiceTagsApi.AmazonSqsUntagQueue,
    });
}
catch (ApiException<UntagQueue2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UntagQueue2Request](src/AmazonSqs/Requests/Tags/UntagQueue2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSqs/Core/Exceptions/ApiException.cs)&lt;[UntagQueue2Error](src/AmazonSqs/Errors/UntagQueue2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

