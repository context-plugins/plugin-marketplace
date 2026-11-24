using System;
using System.Collections.Generic;
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
using Deliverd.Requests.Flows;

namespace Deliverd.Api;

public sealed class Flows
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Flows(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List flows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1FlowsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1FlowsResponse1> GetApiV1Flows(GetApiV1FlowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/flows"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("status", request.Status),
                new Param("externalId", request.ExternalId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1FlowsResponse1>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The flow, its members and its timeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1FlowsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1FlowsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The timeline is every audited step across the flow and everything in it, in the order it happened. allSettled says nothing is outstanding right now; it is not a claim that the work is finished, because a flow is extended as it goes.
    /// </remarks>
    public Task<ApiV1FlowsResponse> GetApiV1FlowsById(GetApiV1FlowsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/flows/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1FlowsResponse>(),
            GetApiV1FlowsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The flow as an evidence pack
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1FlowsByIdEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The whole record of one piece of work: every approval, review and request for information with who was asked and what they said, the report's version history, and the timeline across all of it. Requires reports:read, approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1FlowsByIdEvidence(GetApiV1FlowsByIdEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/flows/{id}/evidence"),
            [new TemplateParam("id", request.Id)],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            GetApiV1FlowsByIdEvidenceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start a flow: the thread tying one piece of work together
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1FlowsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A flow groups the approvals, reviews, collections and reports that belong to one job, so the history reads as one sequence rather than four unrelated tables. Nothing is attached here — a member joins by naming flowId when it is created. It is a grouping and not a scheduler: nothing waits on a flow and nothing is blocked by one.
    /// </remarks>
    public Task<ApiV1FlowsResponse> PostApiV1Flows(PostApiV1FlowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/flows"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1FlowsResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Call the work off
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1FlowsCancelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1FlowsByIdCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The flow and its members stay as evidence of what was started and dropped. Cancelling a flow cancels nothing inside it.
    /// </remarks>
    public Task<ApiV1FlowsCancelResponse> PostApiV1FlowsByIdCancel(PostApiV1FlowsByIdCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/flows/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1FlowsCancelResponse>(),
            PostApiV1FlowsByIdCancelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Say the work is done
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1FlowsCompleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1FlowsByIdCompleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Only whoever started the flow may, and it stops taking new members. Allowed with members still outstanding; how many is recorded and sent with the flow.completed event.
    /// </remarks>
    public Task<ApiV1FlowsCompleteResponse> PostApiV1FlowsByIdComplete(PostApiV1FlowsByIdCompleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/flows/{id}/complete"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1FlowsCompleteResponse>(),
            PostApiV1FlowsByIdCompleteError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
