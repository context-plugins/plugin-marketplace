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
using Deliverd.Requests.Approvals;

namespace Deliverd.Api;

public sealed class Approvals
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Approvals(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List approval requests
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ApprovalsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1ApprovalsResponse1> GetApiV1Approvals(GetApiV1ApprovalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/approvals"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("status", request.Status),
                new Param("externalId", request.ExternalId),
                new Param("approver", request.Approver),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ApprovalsResponse1>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The request, its decision, and any questions the approver asked
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ApprovalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ApprovalsByIdError"/> when the server returns an error response.</exception>
    public Task<ApiV1ApprovalsResponse> GetApiV1ApprovalsById(GetApiV1ApprovalsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/approvals/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ApprovalsResponse>(),
            GetApiV1ApprovalsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ask people to approve an action before it happens
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ApprovalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ApprovalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a request and returns its page. The decision is a person's: read it by polling GET /api/v1/approvals/{id}, by the organisation's webhooks (approval.approved, approval.rejected, approval.expired), or by the MCP tool get_approval. Approvers are members named by email or id; the organisation's admins when omitted. The requester cannot be an approver of their own request.
    /// </remarks>
    public Task<ApiV1ApprovalsResponse> PostApiV1Approvals(PostApiV1ApprovalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/approvals"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ApprovalsResponse>(),
            PostApiV1ApprovalsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Answer a question the approver asked
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ApprovalsAnswersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ApprovalsByIdAnswersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Only the requester may answer. The answer is shown on the page and the asker is told.
    /// </remarks>
    public Task<ApiV1ApprovalsAnswersResponse> PostApiV1ApprovalsByIdAnswers(PostApiV1ApprovalsByIdAnswersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/approvals/{id}/answers"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ApprovalsAnswersResponse>(),
            PostApiV1ApprovalsByIdAnswersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Withdraw a pending request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ApprovalsCancelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ApprovalsByIdCancelError"/> when the server returns an error response.</exception>
    public Task<ApiV1ApprovalsCancelResponse> PostApiV1ApprovalsByIdCancel(PostApiV1ApprovalsByIdCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/approvals/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ApprovalsCancelResponse>(),
            PostApiV1ApprovalsByIdCancelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// A page on which one approver decides this request, inside your product
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ApprovalsSessionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ApprovalsByIdSessionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Decision sessions are how an approval is decided in your own app. <c>mode: "hosted"</c> returns a <c>url</c> to send the approver to, with an optional <c>returnUrl</c> for afterwards (<c>deliverd_session</c> and <c>deliverd_decision</c> are added to it). <c>mode: "embedded"</c> returns a <c>clientSecret</c> to mount with https://deliverd.dev/elements/v1.js, framed only by <c>origin</c>, which must be on the organisation's embedding allow-list (Organisation → Security → Embedding) or http://localhost while you develop. The <c>url</c> and <c>clientSecret</c> are returned once. Neither decides anything: the approver signs in, or confirms a code sent to their own address, before the decision bar appears — an API key is still never a person. Needs approvals:write.
    /// </remarks>
    public Task<ApiV1ApprovalsSessionsResponse> PostApiV1ApprovalsByIdSessions(PostApiV1ApprovalsByIdSessionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/approvals/{id}/sessions"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ApprovalsSessionsResponse>(),
            PostApiV1ApprovalsByIdSessionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
