using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CodeQr.Core;
using CodeQr.Core.Exceptions;
using CodeQr.Core.Models;
using CodeQr.Core.Request;
using CodeQr.Core.Response;
using CodeQr.Errors;
using CodeQr.Models;
using CodeQr.Requests.Domains;

namespace CodeQr.Api;

public sealed class Domains
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Domains(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DomainSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a domain for the authenticated workspace.
    /// </remarks>
    public Task<DomainSchema> CreateDomain(CreateDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/domains"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DomainSchema>(),
            CreateDomainError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DomainsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with the domain.
    /// </remarks>
    public Task<DomainsResponse> DeleteDomain(DeleteDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/domains/{slug}"),
            [new TemplateParam("slug", request.Slug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<DomainsResponse>(),
            DeleteDomainError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a list of domains
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="DomainSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDomainsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of domains associated with the authenticated workspace.
    /// </remarks>
    public Task<IReadOnlyList<DomainSchema>> ListDomains(ListDomainsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/domains"),
            [],
            [
                new Param("archived", request.Archived),
                new Param("search", request.Search),
                new Param("page", request.Page),
                new Param("pageSize", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<DomainSchema>>(),
            ListDomainsError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DomainSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a domain for the authenticated workspace.
    /// </remarks>
    public Task<DomainSchema> UpdateDomain(UpdateDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/domains/{slug}"),
            [new TemplateParam("slug", request.Slug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DomainSchema>(),
            UpdateDomainError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);
}
