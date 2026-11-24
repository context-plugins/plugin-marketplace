using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models;
using Hightouch.Models.AnyOf;
using Hightouch.Requests.Events;

namespace Hightouch.Api;

public sealed class Events
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Events(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an Event Contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsContractsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateContractError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new event contract
    /// </remarks>
    public Task<EventsContractsResponse1> CreateContract(CreateContractRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/contracts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EventsContractsResponse1>(),
            CreateContractError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an Event Domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsDomainsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new event domain, with its events and components.
    /// </remarks>
    public Task<EventsDomainsResponse1> CreateDomain(CreateDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/domains"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EventsDomainsResponse1>(),
            CreateDomainError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsContractsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContractError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a contract based on its contract ID
    /// </remarks>
    public Task<EventsContractsResponse1> GetContract(GetContractRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/contracts/{contractId}"),
            [new TemplateParam("contractId", request.ContractId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventsContractsResponse1>(),
            GetContractError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsDomainsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a domain by its id, including its events and components.
    /// </remarks>
    public Task<EventsDomainsResponse1> GetDomain(GetDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/domains/{domainId}"),
            [new TemplateParam("domainId", request.DomainId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventsDomainsResponse1>(),
            GetDomainError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Event Contracts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsContractsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListContractsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all event contracts in the current workspace
    /// </remarks>
    public Task<EventsContractsResponse> ListContracts(ListContractsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/contracts"),
            [],
            [
                new Param("name", request.Name),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("orderBy", request.OrderBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventsContractsResponse>(),
            ListContractsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Event Domains
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsDomainsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDomainsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all event domains in the current workspace.
    /// <para>
    /// Optional query <c>source</c>: filter to domains linked to that event source
    /// (slug). When set, returned components are also filtered to those
    /// applicable to the source.
    /// </para>
    /// </remarks>
    public Task<EventsDomainsResponse> ListDomains(ListDomainsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/domains"),
            [],
            [
                new Param("name", request.Name),
                new Param("source", request.Source),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("orderBy", request.OrderBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventsDomainsResponse>(),
            ListDomainsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an Event Contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsContractsResponse11"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateContractError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing event contract
    /// <para>
    /// Patch an event contract based on its Hightouch ID
    /// </para>
    /// </remarks>
    public Task<EventsContractsResponse11> UpdateContract(UpdateContractRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/contracts/{contractId}"),
            [new TemplateParam("contractId", request.ContractId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EventsContractsResponse11>(),
            UpdateContractError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an Event Domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsDomainsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDomainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing event domain, replacing its events and components.
    /// </remarks>
    public Task<EventsDomainsResponse1> UpdateDomain(UpdateDomainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/domains/{domainId}"),
            [new TemplateParam("domainId", request.DomainId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EventsDomainsResponse1>(),
            UpdateDomainError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
