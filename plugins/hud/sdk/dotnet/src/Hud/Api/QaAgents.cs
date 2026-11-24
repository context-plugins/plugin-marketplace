using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Requests.QaAgents;

namespace Hud.Api;

public sealed class QaAgents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal QaAgents(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get Qa Agent Sanitized Rollout
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return an output-only QA rollout without evaluator prompts or private inputs.
    /// </remarks>
    public Task<TraceEventsResponse> GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet(GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/qa-agents/results/{result_id}/rollout"),
            [new TemplateParam("result_id", request.ResultId)],
            [new Param("since_seq", request.SinceSeq), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceEventsResponse>(),
            GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Qa Agent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QaAgentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQaAgentV2QaAgentsAgentIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a QA agent by id.
    /// </remarks>
    public Task<QaAgentResponse> GetQaAgentV2QaAgentsAgentIdGet(GetQaAgentV2QaAgentsAgentIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/qa-agents/{agent_id}"),
            [new TemplateParam("agent_id", request.AgentId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QaAgentResponse>(),
            GetQaAgentV2QaAgentsAgentIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Qa Agents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedResponseQaAgentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListQaAgentsV2QaAgentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the caller team's QA agents.
    /// </remarks>
    public Task<PaginatedResponseQaAgentResponse> ListQaAgentsV2QaAgentsGet(ListQaAgentsV2QaAgentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/qa-agents"),
            [],
            [
                new Param("subject_type", request.SubjectType),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedResponseQaAgentResponse>(),
            ListQaAgentsV2QaAgentsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Resource Qa Agent Results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="QaAgentResourceResultDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List resource QA results by subject or by exact result IDs.
    /// </remarks>
    public Task<IReadOnlyList<QaAgentResourceResultDetail>> ListResourceQaAgentResultsV2QaAgentsResultsResourcesGet(ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/qa-agents/results/resources"),
            [],
            [
                new Param("subject_type", request.SubjectType),
                new Param("subject_ids", request.SubjectIds),
                new Param("result_ids", request.ResultIds),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<QaAgentResourceResultDetail>>(),
            ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run Resource Qa Agent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="QaAgentResultResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Select or launch one QA result for each canonical resource subject.
    /// </remarks>
    public Task<IReadOnlyList<QaAgentResultResponse>> RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPost(RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/qa-agents/{agent_id}/run-resources"),
            [new TemplateParam("agent_id", request.AgentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<QaAgentResultResponse>>(),
            RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
