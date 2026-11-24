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
using PrismaReviews.Requests.Reviews;

namespace PrismaReviews.Api;

/// <summary>
/// Reviews from every connected location, in one JSON shape.
/// </summary>
public sealed class Reviews
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Reviews(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a review
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Review"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReviewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One review by ID.
    /// </remarks>
    public Task<Review> GetReview(GetReviewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/reviews/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Review>(),
            GetReviewError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List reviews
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReviewList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListReviewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reviews of your workspace in the mode of your key, newest first (by <c>created_at</c>, then <c>id</c>), in the same shape on every platform. Cursor paginated: pass <c>next_cursor</c> as <c>cursor</c>, with the same filters, until it is <c>null</c>.
    /// </remarks>
    public Task<ReviewList> ListReviews(ListReviewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/reviews"),
            [],
            [
                new Param("location_id", request.LocationId),
                new Param("platform", request.Platform),
                new Param("since", request.Since),
                new Param("has_reply", request.HasReply),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReviewList>(),
            ListReviewsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
