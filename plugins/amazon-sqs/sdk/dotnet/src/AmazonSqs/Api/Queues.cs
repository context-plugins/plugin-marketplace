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
using AmazonSqs.Requests.Queues;

namespace AmazonSqs.Api;

public sealed class Queues
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Queues(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Queue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateQueueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind: If you don't specify the FifoQueue attribute, Amazon SQS creates a standard queue. You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see Moving From a standard queue to a FIFO queue in the Amazon SQS Developer Guide. If you don't provide a value for an attribute, the queue is created with the default value for the attribute. If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name. To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues and is unique within the scope of your queues. After you create a queue, you must wait at least one second after the queue is created to be able to use the queue. To retrieve the URL of a queue, use the GetQueueUrl action. This action only requires the QueueName parameter. When creating queues, keep the following poi
    /// </remarks>
    public Task CreateQueue(CreateQueueOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateQueue"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateQueueError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Queue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteQueueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the queue specified by the QueueUrl, regardless of the queue's contents. Be careful with the DeleteQueue action: When you delete a queue, any messages in the queue are no longer available. When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a SendMessage request might succeed, but after 60 seconds the queue and the message you sent no longer exist. When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. The delete operation uses the HTTP GET verb.
    /// </remarks>
    public Task DeleteQueue(DeleteQueueOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteQueue"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteQueueError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Queue Attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQueueAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets attributes for the specified queue. To determine whether a queue is FIFO, you can check whether QueueName ends with the .fifo suffix.
    /// </remarks>
    public Task GetQueueAttributes(GetQueueAttributesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetQueueAttributes"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetQueueAttributesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Queue Url
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQueueUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The GetQueueUrl API returns the URL of an existing Amazon SQS queue. This is useful when you know the queue's name but need to retrieve its URL for further operations. To access a queue owned by another Amazon Web Services account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. Note that the queue owner must grant you the necessary permissions to access the queue. For more information about accessing shared queues, see the AddPermission API or Allow developers to write messages to a shared queue in the Amazon SQS Developer Guide.
    /// </remarks>
    public Task GetQueueUrl(GetQueueUrlOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetQueueUrl"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetQueueUrlError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Dead Letter Source Queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDeadLetterSourceQueuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead-letter queue. The ListDeadLetterSourceQueues methods supports pagination. Set parameter MaxResults in the request to specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to ListDeadLetterSourceQueues to receive the next page of results. For more information about using dead-letter queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide.
    /// </remarks>
    public Task ListDeadLetterSourceQueues(ListDeadLetterSourceQueuesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListDeadLetterSourceQueues"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListDeadLetterSourceQueuesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListQueuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional QueueNamePrefix parameter, only queues with a name that begins with the specified value are returned. The listQueues methods supports pagination. Set parameter MaxResults in the request to specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to listQueues to receive the next page of results. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.
    /// </remarks>
    public Task ListQueues(ListQueuesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListQueues"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListQueuesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Purge Queue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PurgeQueueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes available messages in a queue (including in-flight messages) specified by the QueueURL parameter. When you use the PurgeQueue action, you can't retrieve any messages deleted from a queue. The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. Messages sent to the queue before you call PurgeQueue might be received but are deleted within the next minute. Messages sent to the queue after you call PurgeQueue might be deleted while the queue is being purged.
    /// </remarks>
    public Task PurgeQueue(PurgeQueueOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#PurgeQueue"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PurgeQueueError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set Queue Attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetQueueAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the value of one or more queue attributes, like a policy. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the MessageRetentionPeriod is reduced below the age of existing messages. In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.
    /// </remarks>
    public Task SetQueueAttributes(SetQueueAttributesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#SetQueueAttributes"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SetQueueAttributesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tag Queue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TagQueueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.
    /// </remarks>
    public Task TagQueue(TagQueueOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#TagQueue"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            TagQueueError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Untag Queue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UntagQueueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.
    /// </remarks>
    public Task UntagQueue(UntagQueueOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UntagQueue"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UntagQueueError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
