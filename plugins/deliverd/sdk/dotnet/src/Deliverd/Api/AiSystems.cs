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
using Deliverd.Requests.AiSystems;

namespace Deliverd.Api;

public sealed class AiSystems
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AiSystems(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// The organisation's register of AI systems
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1AiSystems(GetApiV1AiSystemsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ai-systems"),
            [],
            [new Param("status", request.Status)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// One AI register record: the system, its lifecycle, its roles, and the governed…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// <c>system</c> is the record; <c>status</c> and <c>steps</c> say where it stands in its lifecycle and which steps out of it the caller may take (with every reason when not); <c>roles</c> are the members who answer for it; <c>history</c> is every move; <c>versions</c> are snapshots of what it said; <c>governedTaskIds</c> are the governed tasks naming it.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1AiSystemsById(GetApiV1AiSystemsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ai-systems/{id}"),
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
    /// Where a register record stands in its lifecycle, the steps out of it, and every…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1AiSystemsByIdTransitions(GetApiV1AiSystemsByIdTransitionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ai-systems/{id}/transitions"),
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
    /// Change an AI register record's fields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PatchApiV1AiSystemsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An agent cannot lower its risk. Its status is not a field: the lifecycle moves it (<c>POST /api/v1/ai-systems/{id}/transitions</c>). Each change is a new version; values a key or an agent writes are labelled in <c>provenance</c> as imported or suggested until a person saves them. 409 when the record changed since it was read.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PatchApiV1AiSystemsById(PatchApiV1AiSystemsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ai-systems/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PatchApiV1AiSystemsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Register an AI system
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1AiSystemsError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1AiSystems(PostApiV1AiSystemsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ai-systems"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1AiSystemsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Record a new release: provider, model, model version, prompt or guardrails
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1AiSystemsByIdModelChangeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enterprise. <c>promptHash</c> and <c>guardrailsHash</c> are digests (<c>sha256:…</c>, a commit, a version tag), never the text. Every governed task using the system gets a reassessment, which closes its gate until a person completes it, and the evaluation, resilience testing, change record and compliance approval of the old release stop counting — and, under a model-risk pack, its independent validation and model documentation. Recording a first fingerprint changes nothing; changing or removing one does. <c>changed</c> names the parts that differ from what was recorded: the same release again changes nothing and records nothing, so a build step may send it on every build.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1AiSystemsByIdModelChange(PostApiV1AiSystemsByIdModelChangeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ai-systems/{id}/model-change"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1AiSystemsByIdModelChangeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Take a step in a register record's lifecycle
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1AiSystemsByIdTransitionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A key or an agent may put a proposal forward (<c>submit</c>) or take it back (<c>withdraw</c>). Approving, rejecting, returning, suspending, reinstating and retiring are a person's, in the app. A step is refused, with every reason, when the record lacks what it needs, when the caller may not take it, or when it is a decision and the caller holds a role on the record or moved it to its current status. 409 when the record changed since it was read.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1AiSystemsByIdTransitions(PostApiV1AiSystemsByIdTransitionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ai-systems/{id}/transitions"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1AiSystemsByIdTransitionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
