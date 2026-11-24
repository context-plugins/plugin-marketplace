using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PrismaReviews.Core;
using PrismaReviews.Core.Exceptions;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Request;
using PrismaReviews.Core.Response;
using PrismaReviews.Errors;
using PrismaReviews.Models;
using PrismaReviews.Requests.Replies;

namespace PrismaReviews.Api;

/// <summary>
/// Publish and delete replies through each platform's official API.
/// </summary>
public sealed class Replies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Replies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a reply
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReplyDeletion"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteReplyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Queues the removal of the review's reply from the platform. When the job is done, <c>reply</c> becomes <c>null</c>. Only on platforms whose API can delete replies (Google Business Profile, App Store, Trustpilot).
    /// </remarks>
    public Task<ReplyDeletion> DeleteReply(DeleteReplyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/reviews/{id}/reply"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ReplyDeletion>(),
            DeleteReplyError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or replace a reply
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Review"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplyToReviewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stores the reply and queues it for publishing through the platform's official API: <c>202</c> with the review and <c>reply.status: "queued"</c>. A background job publishes it (<c>reply.published</c> webhook), marks it <c>failed</c> (<c>reply.failed</c> webhook), or, when the platform never answered and the reply can't be read back, marks it <c>unknown</c> without retrying (<c>reply.unknown</c> webhook). Posting again replaces the stored reply. With a test key the reply goes through the same steps but never reaches the platform. Read-only platforms return <c>422 reply_not_supported</c> with the review's <c>url</c>, where it can be answered.
    /// </remarks>
    public Task<Review> ReplyToReview(ReplyToReviewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/reviews/{id}/reply"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Review>(),
            ReplyToReviewError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
