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
using Deliverd.Requests.Tasks;

namespace Deliverd.Api;

public sealed class Tasks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tasks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List objectives
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TasksResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Most recently active first. Side tasks are reached through the objective they belong to.
    /// </remarks>
    public Task<ApiV1TasksResponse2> GetApiV1Tasks(GetApiV1TasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("status", request.Status),
                new Param("externalId", request.ExternalId),
                new Param("q", request.Q),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TasksResponse2>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// A task, its path, side tasks, findings and links
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1TasksByIdError"/> when the server returns an error response.</exception>
    public Task<ApiV1TasksResponse> GetApiV1TasksById(GetApiV1TasksByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TasksResponse>(),
            GetApiV1TasksByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The context an agent reads instead of the history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The objective, where the task stands, confirmed and suggested decisions, open questions, constraints, side-task results, the next action, the reports published for the task (<c>reports</c>: up to ten live ones, newest first, each <c>{ id, title, url, version, publishedAt }</c>), and a paragraph to re-anchor on.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1TasksByIdContext(GetApiV1TasksByIdContextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/context"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// What a task was given
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every time knowledge or a playbook was handed to the task or the tasks under it, newest first, with who confirmed each entry.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1TasksByIdContextGiven(GetApiV1TasksByIdContextGivenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/context-given"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// A governed task's governance
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1TasksByIdGovernanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The profile, AI system, every control with its state and how it is met, the evidence, readiness and the gate answer. A side task's id answers for its objective.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1TasksByIdGovernance(GetApiV1TasksByIdGovernanceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/governance"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            GetApiV1TasksByIdGovernanceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// May this governed work proceed?
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TasksGovernanceGateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1TasksByIdGovernanceGateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// <c>allowed</c>, <c>reason</c>, <c>missingControls</c> and <c>blockers</c> — an open reassessment, an overdue review or a high or critical incident, which only a person clears. With <c>?action=</c> (Enterprise) it also asks agent authority: <c>authority.mode</c> is allowed, approval or denied. Every check is recorded.
    /// </remarks>
    public Task<ApiV1TasksGovernanceGateResponse> GetApiV1TasksByIdGovernanceGate(GetApiV1TasksByIdGovernanceGateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/governance/gate"),
            [new TemplateParam("id", request.Id)],
            [new Param("action", request.Action)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TasksGovernanceGateResponse>(),
            GetApiV1TasksByIdGovernanceGateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The AI governance evidence pack
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Profile, AI system, controls, evidence, task graph, decisions, approvals and the audit timeline, with a sha256 digest. <c>?format=html</c> to read and print. It assists audit; it does not certify compliance with any law. Every export is audited.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1TasksByIdGovernancePack(GetApiV1TasksByIdGovernancePackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/governance/pack"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Every node under the objective, and the links between them
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TasksGraphResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1TasksGraphResponse> GetApiV1TasksByIdGraph(GetApiV1TasksByIdGraphRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/graph"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TasksGraphResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a task's working state, title or status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PatchApiV1TasksByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// State patches merge: fields left out stay. Changing the objective itself is refused to an agent; only a person changes what the work is for.
    /// </remarks>
    public Task<ApiV1TasksResponse> PatchApiV1TasksById(PatchApiV1TasksByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1TasksResponse>(),
            PatchApiV1TasksByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change a governed task's profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PatchApiV1TasksByIdGovernanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Controls are recomputed. An agent may raise risk or add facts; only a person lowers risk, weakens oversight or clears a fact (403 not_permitted).
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PatchApiV1TasksByIdGovernance(PatchApiV1TasksByIdGovernanceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/governance"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PatchApiV1TasksByIdGovernanceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start an objective
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// What the work is ultimately for, kept apart from the conversation and returned at the top of every context. With externalId, an open objective the caller already started under it is returned instead (resumed: true, status 200).
    /// </remarks>
    public Task<ApiV1TasksResponse> PostApiV1Tasks(PostApiV1TasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1TasksResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Apply, keep or discard a side task's result
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdApplyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Applied carries decisions up as suggestions (confirmed only when a person applies in Deliverd), adds a summary, merges open questions and takes the next action. Answers with the parent's context and a message that returns to the objective.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1TasksByIdApply(PostApiV1TasksByIdApplyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/apply"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1TasksByIdApplyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Call a task off
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TasksCancelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancelling an objective cancels the side tasks still open under it.
    /// </remarks>
    public Task<ApiV1TasksCancelResponse> PostApiV1TasksByIdCancel(PostApiV1TasksByIdCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1TasksCancelResponse>(),
            PostApiV1TasksByIdCancelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Finish a task with a structured result
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TasksCompleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdCompleteError"/> when the server returns an error response.</exception>
    public Task<ApiV1TasksCompleteResponse> PostApiV1TasksByIdComplete(PostApiV1TasksByIdCompleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/complete"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1TasksCompleteResponse>(),
            PostApiV1TasksByIdCompleteError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Record a finding
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A decision is stored as a suggestion until a person confirms it or an approval decides it.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1TasksByIdFindings(PostApiV1TasksByIdFindingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/findings"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put a suggested decision to approval
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdFindingsByFindingIdApprovalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An ordinary approval request on the objective's flow. Approved confirms the decision; rejected rejects it.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1TasksByIdFindingsByFindingIdApproval(PostApiV1TasksByIdFindingsByFindingIdApprovalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/findings/{findingId}/approval"),
            [new TemplateParam("id", request.Id), new TemplateParam("findingId", request.FindingId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1TasksByIdFindingsByFindingIdApprovalError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Propose a finding as knowledge
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdFindingsByFindingIdKnowledgeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Keeps the finding and its task as the entry's source. Still a proposal until a person confirms it.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1TasksByIdFindingsByFindingIdKnowledge(PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/findings/{findingId}/knowledge"),
            [new TemplateParam("id", request.Id), new TemplateParam("findingId", request.FindingId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1TasksByIdFindingsByFindingIdKnowledgeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Govern an objective
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdGovernanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Put an objective under Compliance Mode with what is known of its profile. Idempotent.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1TasksByIdGovernance(PostApiV1TasksByIdGovernanceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/governance"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1TasksByIdGovernanceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put an approval control to a person
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdGovernanceControlsByKeyApprovalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An ordinary approval through the organisation's approval process. The control is satisfied when it is approved. Needs approvals:write.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1TasksByIdGovernanceControlsByKeyApproval(PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/governance/controls/{key}/approval"),
            [new TemplateParam("id", request.Id), new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1TasksByIdGovernanceControlsByKeyApprovalError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Record evidence for a governed task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdGovernanceEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mapped to the controls it speaks to; one item may satisfy several. Approval controls are not satisfied by evidence. Scored evidence carries <c>results</c> (what was measured), a tool's own <c>report</c> (promptfoo, Inspect, garak, Weave, Braintrust, JUnit and more), turned into results here, or a <c>pull</c> from the organisation's connected Langfuse, LangSmith, Braintrust or Weave: the newest experiment or evaluation with the name, read with keys the caller never holds. <c>release</c> names the release the results tested — <c>provider</c>, <c>model</c>, <c>modelVersion</c>, <c>promptHash</c>, <c>guardrailsHash</c>, digests never the text — and is kept on the run: evidence naming another release than the AI system now runs does not count, and says so (<c>otherRelease</c>); evidence naming none counts as before. A control with thresholds is met only when its newest scored evidence of this release meets them. A pull answers 404 when the tool is not connected or has no such experiment, 409 <c>connection_refused</c> when the tool refuses the stored key, and 502 <c>upstream_unavailable</c> when it cannot be read.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1TasksByIdGovernanceEvidence(PostApiV1TasksByIdGovernanceEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/governance/evidence"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1TasksByIdGovernanceEvidenceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ask for a governed task to be reassessed
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdGovernanceReassessmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enterprise. The gate stays closed until a person completes the reassessment in Deliverd.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1TasksByIdGovernanceReassessments(PostApiV1TasksByIdGovernanceReassessmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/governance/reassessments"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1TasksByIdGovernanceReassessmentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Link two tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An edge beyond parent and child: depends_on, blocks, related_to, supersedes or resulted_in.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1TasksByIdLinks(PostApiV1TasksByIdLinksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/links"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reopen a finished task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TasksReopenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdReopenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The earlier result is kept in previousResults.
    /// </remarks>
    public Task<ApiV1TasksReopenResponse> PostApiV1TasksByIdReopen(PostApiV1TasksByIdReopenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/reopen"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1TasksReopenResponse>(),
            PostApiV1TasksByIdReopenError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Branch a side task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1TasksSideTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1TasksByIdSideTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// It begins with a snapshot of the parent: objective, state, decisions and constraints.
    /// </remarks>
    public Task<ApiV1TasksSideTasksResponse> PostApiV1TasksByIdSideTasks(PostApiV1TasksByIdSideTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/tasks/{id}/side-tasks"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1TasksSideTasksResponse>(),
            PostApiV1TasksByIdSideTasksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
