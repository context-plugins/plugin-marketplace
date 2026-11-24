using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Errors;
using Deliverd.Models;
using Deliverd.Requests.Reviews;

namespace Deliverd.Api;

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
    /// List reviews
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReviewsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1ReviewsResponse1> GetApiV1Reviews(GetApiV1ReviewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reviews"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("status", request.Status),
                new Param("externalId", request.ExternalId),
                new Param("reportId", request.ReportId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ReviewsResponse1>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The review, with every verdict returned so far
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReviewsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ReviewsByIdError"/> when the server returns an error response.</exception>
    public Task<ApiV1ReviewsResponse> GetApiV1ReviewsById(GetApiV1ReviewsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reviews/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ReviewsResponse>(),
            GetApiV1ReviewsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ask people to read something and say whether it is right
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReviewsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ReviewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a review and returns its page. The verdict is a person's: read it by polling GET /api/v1/reviews/{id}, by the organisation's webhooks (review.approved, review.changes_requested), or by the MCP tool get_review. There is no endpoint that records a verdict — a key is not a person. Reviewers are named by email or id and must be active members or guests who can already open the report; anyone else is refused. The requester cannot review their own request.
    /// </remarks>
    public Task<ApiV1ReviewsResponse> PostApiV1Reviews(PostApiV1ReviewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reviews"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReviewsResponse>(),
            PostApiV1ReviewsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Withdraw a pending review
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReviewsCancelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ReviewsByIdCancelError"/> when the server returns an error response.</exception>
    public Task<ApiV1ReviewsCancelResponse> PostApiV1ReviewsByIdCancel(PostApiV1ReviewsByIdCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reviews/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ReviewsCancelResponse>(),
            PostApiV1ReviewsByIdCancelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
