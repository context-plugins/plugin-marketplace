using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonSqs.Core;
using AmazonSqs.Core.Exceptions;
using AmazonSqs.Core.Models;
using AmazonSqs.Core.Request;
using AmazonSqs.Core.Response;
using AmazonSqs.Errors;
using AmazonSqs.Requests.Messages;

namespace AmazonSqs.Api;

public sealed class Messages
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Messages(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel Message Move Task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelMessageMoveTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet. This action is currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.
    /// </remarks>
    public Task CancelMessageMoveTask(CancelMessageMoveTaskOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CancelMessageMoveTask"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CancelMessageMoveTaskError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change Message Visibility
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChangeMessageVisibilityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see Visibility Timeout in the Amazon SQS Developer Guide. For example, if the default timeout for a queue is 60 seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call with VisibilityTimeout set to 10 seconds, the 10 seconds begin to count from the time that you make the ChangeMessageVisibility call. Thus, any attempt to change the visibility timeout or to delete that message 10 seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error. An Amazon SQS message has three basic states: Sent to a queue by a producer. Received from the queue by a consumer. Deleted from the queue. A message is considered to be stored after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be in flight after it is received from a queue by a consume
    /// </remarks>
    public Task ChangeMessageVisibility(ChangeMessageVisibilityOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ChangeMessageVisibility"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ChangeMessageVisibilityError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change Message Visibility Batch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChangeMessageVisibilityBatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Changes the visibility timeout of multiple messages. This is a batch version of ChangeMessageVisibility. The result of the action on each message is reported individually in the response. You can send up to 10 ChangeMessageVisibility requests with each ChangeMessageVisibilityBatch action. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
    /// </remarks>
    public Task ChangeMessageVisibilityBatch(ChangeMessageVisibilityBatchOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ChangeMessageVisibilityBatch"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ChangeMessageVisibilityBatchError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified message from the specified queue. To select the message to delete, use the ReceiptHandle of the message (not the MessageId which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. Each time you receive a message, meaning when a consumer retrieves a message from the queue, it comes with a unique ReceiptHandle. If you receive the same message more than once, you will get a different ReceiptHandle each time. When you want to delete a message using the DeleteMessage action, you must use the ReceiptHandle from the most recent time you received the message. If you use an old ReceiptHandle, the request will succeed, but the message might not be deleted. For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might b
    /// </remarks>
    public Task DeleteMessage(DeleteMessageOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteMessage"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteMessageError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Message Batch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteMessageBatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes up to ten messages from the specified queue. This is a batch version of DeleteMessage. The result of the action on each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
    /// </remarks>
    public Task DeleteMessageBatch(DeleteMessageBatchOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteMessageBatch"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteMessageBatchError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Message Move Tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMessageMoveTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the most recent message movement tasks (up to 10) under a specific source queue. This action is currently limited to supporting message redrive from dead-letter queues (DLQs) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.
    /// </remarks>
    public Task ListMessageMoveTasks(ListMessageMoveTasksOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListMessageMoveTasks"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListMessageMoveTasksError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Receive Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReceiveMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves one or more messages (up to 10), from the specified queue. Using the WaitTimeSeconds parameter enables long-poll support. For more information, see Amazon SQS Long Polling in the Amazon SQS Developer Guide. Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call. Therefore, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per ReceiveMessage call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular ReceiveMessage response. If this happens, repeat the request. For each message returned, the response includes the following: The message body. An MD5 digest of the message body. For information about MD5, see RFC1321. The MessageId you received when you sent the message to the queue. The receipt handle. The message attributes. An MD5 digest of the message attributes. The receipt handle is the identifier you must provide when deleting the message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. You
    /// </remarks>
    public Task ReceiveMessage(ReceiveMessageOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ReceiveMessage"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ReceiveMessageError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delivers a message to the specified queue. A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this exception.
    /// </remarks>
    public Task SendMessage(SendMessageOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#SendMessage"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SendMessageError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send Message Batch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendMessageBatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// You can use SendMessageBatch to send up to 10 messages to the specified queue by assigning either identical or different values to each message (or by not assigning values at all). This is a batch version of SendMessage. For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent. The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200. The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 1 MiB 1,048,576 bytes. A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to
    /// </remarks>
    public Task SendMessageBatch(SendMessageBatchOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#SendMessageBatch"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SendMessageBatchError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Message Move Task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartMessageMoveTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts an asynchronous task to move messages from a specified source queue to a specified destination queue. This action is currently limited to supporting message redrive from queues that are configured as dead-letter queues (DLQs) of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported. In dead-letter queues redrive context, the StartMessageMoveTask the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. Only one active message movement task is supported per queue at any given time.
    /// </remarks>
    public Task StartMessageMoveTask(StartMessageMoveTaskOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartMessageMoveTask"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartMessageMoveTaskError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
