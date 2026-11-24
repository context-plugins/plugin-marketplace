using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Errors;
using Deliverd.Models;
using Deliverd.Requests.DecisionSessions;

namespace Deliverd.Api;

public sealed class DecisionSessions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DecisionSessions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// A decision session's state
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DecisionSessionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1DecisionSessionsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// <c>open</c>, <c>verified</c> (the approver confirmed who they are), <c>complete</c> (they decided, here or anywhere else) or <c>expired</c>, with their decision and the request's own status. Never the secret. Needs approvals:read.
    /// </remarks>
    public Task<ApiV1DecisionSessionsResponse> GetApiV1DecisionSessionsById(GetApiV1DecisionSessionsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/decision-sessions/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DecisionSessionsResponse>(),
            GetApiV1DecisionSessionsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// End a decision session early
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DecisionSessionsExpireResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1DecisionSessionsByIdExpireError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A decision already made through it stays made. Needs approvals:write.
    /// </remarks>
    public Task<ApiV1DecisionSessionsExpireResponse> PostApiV1DecisionSessionsByIdExpire(PostApiV1DecisionSessionsByIdExpireRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/decision-sessions/{id}/expire"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DecisionSessionsExpireResponse>(),
            PostApiV1DecisionSessionsByIdExpireError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
