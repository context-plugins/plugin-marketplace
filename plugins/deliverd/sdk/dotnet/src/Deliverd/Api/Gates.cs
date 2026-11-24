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
using Deliverd.Requests.Gates;

namespace Deliverd.Api;

public sealed class Gates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Gates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// One decision, as it stands now
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1GatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1GatesResponse> GetApiV1GatesById(GetApiV1GatesByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/gates/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1GatesResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// A gate's evidence pack
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The act, the policy, the scope, who was asked and under what authority, what each said, what the agent reported, and in words what Deliverd did not check. <c>?format=csv</c> is the timeline alone. Needs <c>approvals:read</c> as well.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1GatesByIdEvidence(GetApiV1GatesByIdEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/gates/{id}/evidence"),
            [new TemplateParam("id", request.Id)],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ask whether to proceed
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1GatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1GatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Declare the action you are about to perform and the arguments you will perform it with; your organisation's policy answers. Three outcomes, one field to branch on: <c>allowed: true</c> with status <c>allowed</c> (a rule permitted it), <c>allowed: false</c> with status <c>denied</c> (a rule refused it, and <c>reason</c> says which), or status <c>pending</c> — nobody has decided yet, an ordinary approval has been raised, and <c>GET /gates/{id}</c> or the SDK's <c>wait()</c> will tell you. A denial is 200, not 403: it is a result you act on, not an error — an agent told no behaved correctly by asking. Fails closed throughout: an unregistered action, input its schema does not describe, and a policy that cannot be read all refuse or ask a person. <c>externalId</c> is required, unlike every other POST here. A random per-attempt key protects a retried HTTP request but not a retried decision, and a crashed agent re-running its refund step would otherwise raise a second approval for the same money — only you know which two calls are the same unit of work. An agent key is welcome: registering actions and writing policy both refuse one, but an agent calling this is submitting to the rule rather than writing it. Since 0087 a gate is also a scoped permission: name the <c>destination</c>, the <c>artifact</c> and the <c>classification</c>, and the answer carries <c>decision</c> (ALLOW, APPROVAL_REQUIRED, REVIEW_REQUIRED, DENY), <c>canExecute</c>, and the window and use count of the permission. An approval covers that scope and nothing else. <c>canExecute: true</c> is the organisation's authorisation only: the platform the agent runs on may still ask for confirmation or refuse.
    /// </remarks>
    public Task<ApiV1GatesResponse> PostApiV1Gates(PostApiV1GatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/gates"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1GatesResponse>(),
            PostApiV1GatesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Withdraw your own request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1GatesCancelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1GatesByIdCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Withdraw a request still waiting on a person, or a permission you have not used. Only the agent that asked may. A used permission cannot be withdrawn.
    /// </remarks>
    public Task<ApiV1GatesCancelResponse> PostApiV1GatesByIdCancel(PostApiV1GatesByIdCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/gates/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1GatesCancelResponse>(),
            PostApiV1GatesByIdCancelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Report what you did with a permission
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1GatesExecutionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1GatesByIdExecutionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// <c>started</c> claims a use before you act; <c>completed</c> or <c>failed</c> finishes that claim. A <c>completed</c> with no <c>claimId</c> claims and reports in one. Checked against what was authorised: another artifact hash is <c>approval_invalidated</c>, another destination is <c>destination_mismatch</c>. A spent, lapsed, revoked or withdrawn permission is refused with a code saying which. What you report is recorded as your report: <c>hash_matched</c> when Deliverd checked the hash, <c>reported</c> when there was nothing to check; <c>verified</c> is reserved for acts Deliverd performed itself.
    /// </remarks>
    public Task<ApiV1GatesExecutionResponse> PostApiV1GatesByIdExecution(PostApiV1GatesByIdExecutionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/gates/{id}/execution"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1GatesExecutionResponse>(),
            PostApiV1GatesByIdExecutionError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Have Deliverd release the staged version the gate authorised
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1GatesReleaseResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1GatesByIdReleaseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The staged report version the gate names goes live, if the gate still authorises it and the report lives where the gate said. The organisation's publishing policy still applies: a hold is satisfied only by a gate a person approved. The receipt is <c>verified</c> — Deliverd did it. Needs <c>reports:write</c> as well.
    /// </remarks>
    public Task<ApiV1GatesReleaseResponse> PostApiV1GatesByIdRelease(PostApiV1GatesByIdReleaseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/gates/{id}/release"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1GatesReleaseResponse>(),
            PostApiV1GatesByIdReleaseError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check a decision token before acting on it
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1GatesVerifyTokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Whether a gate's <c>decisionToken</c> is this deployment's signature over this action and input, for your organisation, and unexpired. For a call site with no verifier of its own: the TypeScript and Python SDKs check locally with the key at <c>/.well-known/deliverd-evidence-key</c>. A refused token is a 200 with <c>valid: false</c> and the <c>reason</c>. It does not spend a use: report the execution for that.
    /// </remarks>
    public Task<ApiV1GatesVerifyTokenResponse> PostApiV1GatesVerifyToken(PostApiV1GatesVerifyTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/gates/verify-token"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1GatesVerifyTokenResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
