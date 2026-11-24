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
using Deliverd.Requests.Knowledge;

namespace Deliverd.Api;

public sealed class Knowledge
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Knowledge(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search the knowledge
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Ranked by relevance to <c>q</c>, or newest first without it. Confirmed entries unless <c>status</c> says otherwise: only those are to be relied on. <c>more</c> is true when the list was cut at <c>limit</c>.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1Knowledge(GetApiV1KnowledgeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/knowledge"),
            [],
            [
                new Param("q", request.Q),
                new Param("kind", request.Kind),
                new Param("status", request.Status),
                new Param("workspaceId", request.WorkspaceId),
                new Param("flowId", request.FlowId),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// An AGENTS.md of the confirmed knowledge and the playbooks in force
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// For a tool that reads files rather than calling tools. A snapshot that says where the live version is.
    /// </remarks>
    public Task<string> GetApiV1KnowledgeAgentsMd(GetApiV1KnowledgeAgentsMdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/knowledge/agents-md"),
            [],
            [new Param("workspaceId", request.WorkspaceId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            PlainTextResponse.CreateString(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// A knowledge entry, with the versions before and after it
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1KnowledgeByIdError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1KnowledgeById(GetApiV1KnowledgeByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/knowledge/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            GetApiV1KnowledgeByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Export the knowledge
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Everything the caller may see, as Markdown that imports back (the default) or JSON. Audited.
    /// </remarks>
    public Task<string> GetApiV1KnowledgeExport(GetApiV1KnowledgeExportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/knowledge/export"),
            [],
            [
                new Param("format", request.Format),
                new Param("status", request.Status),
                new Param("workspaceId", request.WorkspaceId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            PlainTextResponse.CreateString(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change a proposal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PatchApiV1KnowledgeByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Only while it is proposed, and only by a person or the agent that proposed it. A confirmed entry's words never change: propose a revision.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PatchApiV1KnowledgeById(PatchApiV1KnowledgeByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/knowledge/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PatchApiV1KnowledgeByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Propose a knowledge entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1KnowledgeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A proposal until a person confirms it in Deliverd; no key confirms anything. A secret is refused; personal data is said back as <c>screening</c>. With <c>supersedesId</c> it is a revision that replaces the confirmed entry once confirmed. With <c>externalId</c>, an open entry under the same one is returned instead (<c>resumed: true</c>, status 200).
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1Knowledge(PostApiV1KnowledgeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/knowledge"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1KnowledgeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import Markdown as proposed entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1KnowledgeImportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A Deliverd export, or a notes file an agent tool keeps (AGENTS.md, CLAUDE.md): each heading becomes one proposed entry. Entries already there by title or id are skipped and said so.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1KnowledgeImport(PostApiV1KnowledgeImportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/knowledge/import"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1KnowledgeImportError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
