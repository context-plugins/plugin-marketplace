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
using Deliverd.Requests.Playbooks;

namespace Deliverd.Api;

public sealed class Playbooks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Playbooks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List playbooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One row per playbook: its newest version, and <c>inForce</c>, the version that runs. Approved prompts are playbooks of <c>kind</c> prompt; <c>?kind=</c> keeps one or the other.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1Playbooks(GetApiV1PlaybooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/playbooks"),
            [],
            [new Param("kind", request.Kind)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// A playbook version, its family and the knowledge it relies on
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1PlaybooksByIdError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1PlaybooksById(GetApiV1PlaybooksByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/playbooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            GetApiV1PlaybooksByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change a draft
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PatchApiV1PlaybooksByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Only before it has been put to anybody. After that, draft the next version.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PatchApiV1PlaybooksById(PatchApiV1PlaybooksByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/playbooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PatchApiV1PlaybooksByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Draft a playbook or an approved prompt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1PlaybooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Steps, each with the rule that applies before it acts: <c>none</c>, <c>gate</c> (with the <c>action</c> to check), <c>approval</c> or <c>review</c>. Or <c>prompt</c> instead of steps, for an approved prompt: its words with <c>{input}</c> placeholders, an owner and a review date. Nobody runs a draft: a governing person publishes it in the app, or an approval of it is approved.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1Playbooks(PostApiV1PlaybooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/playbooks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1PlaybooksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put a draft to approvers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1PlaybooksByIdApprovalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A Deliverd approval of the playbook; approved, it goes in force. Needs <c>approvals:write</c> and <c>tasks:write</c>. Its content is fixed from here.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1PlaybooksByIdApproval(PostApiV1PlaybooksByIdApprovalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/playbooks/{id}/approval"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1PlaybooksByIdApprovalError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run a playbook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1PlaybooksByIdStartError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts the version in force as an objective, with a side task per step holding its instruction and the call its rule needs. Naming an older version runs the one in force (<c>ranOlderVersion</c>). Missing required inputs are refused with <c>details.missingInputs</c>. With <c>externalId</c>, an open run is returned instead (status 200).
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1PlaybooksByIdStart(PostApiV1PlaybooksByIdStartRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/playbooks/{id}/start"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1PlaybooksByIdStartError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Use an approved prompt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1PlaybooksByIdUseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The version in force of the prompt, with the inputs put in, and its limitations. Each use is recorded against the version. Naming an older version hands out the one in force (<c>ranOlderVersion</c>). Required inputs not given are listed in <c>missingInputs</c> and their placeholders left in the words. Needs <c>tasks:read</c>.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1PlaybooksByIdUse(PostApiV1PlaybooksByIdUseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/playbooks/{id}/use"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1PlaybooksByIdUseError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Draft the next version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1PlaybooksByIdVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The version in force keeps running until this one is put in force.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1PlaybooksByIdVersions(PostApiV1PlaybooksByIdVersionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/playbooks/{id}/versions"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1PlaybooksByIdVersionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
