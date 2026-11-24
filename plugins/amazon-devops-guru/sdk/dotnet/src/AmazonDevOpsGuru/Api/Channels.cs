using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonDevOpsGuru.Core;
using AmazonDevOpsGuru.Core.Exceptions;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Core.Request;
using AmazonDevOpsGuru.Core.Response;
using AmazonDevOpsGuru.Errors;
using AmazonDevOpsGuru.Models;
using AmazonDevOpsGuru.Requests.Channels;

namespace AmazonDevOpsGuru.Api;

public sealed class Channels
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Channels(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add Notification Channel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AddNotificationChannelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddNotificationChannelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see Permissions for Amazon SNS topics. If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics.
    /// </remarks>
    public Task<AddNotificationChannelResponse> AddNotificationChannel(AddNotificationChannelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/channels"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AddNotificationChannelResponse>(),
            AddNotificationChannelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Notification Channels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListNotificationChannelsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListNotificationChannelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
    /// </remarks>
    public Task<ListNotificationChannelsResponse> ListNotificationChannels(ListNotificationChannelsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/channels"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListNotificationChannelsResponse>(),
            ListNotificationChannelsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Notification Channel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveNotificationChannelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations.
    /// </remarks>
    public Task<object> RemoveNotificationChannel(RemoveNotificationChannelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/channels/{Id}"),
            [new TemplateParam("Id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RemoveNotificationChannelError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
