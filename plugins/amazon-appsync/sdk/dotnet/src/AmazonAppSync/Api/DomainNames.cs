using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonAppSync.Core;
using AmazonAppSync.Core.Exceptions;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Core.Request;
using AmazonAppSync.Core.Response;
using AmazonAppSync.Errors;
using AmazonAppSync.Models;
using AmazonAppSync.Requests.DomainNames;

namespace AmazonAppSync.Api;

public sealed class DomainNames
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DomainNames(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Associate Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AssociateApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociateApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Maps an endpoint to your custom domain.
    /// </remarks>
    public Task<AssociateApiResponse> AssociateApi(AssociateApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domainnames/{domainName}/apiassociation"),
            [new TemplateParam("domainName", request.DomainName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AssociateApiResponse>(),
            AssociateApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Domain Name
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateDomainNameResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDomainNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a custom DomainName object.
    /// </remarks>
    public Task<CreateDomainNameResponse> CreateDomainName(CreateDomainNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domainnames"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateDomainNameResponse>(),
            CreateDomainNameError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Domain Name
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDomainNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a custom DomainName object.
    /// </remarks>
    public Task<object> DeleteDomainName(DeleteDomainNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domainnames/{domainName}"),
            [new TemplateParam("domainName", request.DomainName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteDomainNameError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disassociate Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisassociateApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes an ApiAssociation object from a custom domain.
    /// </remarks>
    public Task<object> DisassociateApi(DisassociateApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domainnames/{domainName}/apiassociation"),
            [new TemplateParam("domainName", request.DomainName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DisassociateApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Api Association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetApiAssociationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiAssociationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves an ApiAssociation object.
    /// </remarks>
    public Task<GetApiAssociationResponse> GetApiAssociation(GetApiAssociationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domainnames/{domainName}/apiassociation"),
            [new TemplateParam("domainName", request.DomainName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetApiAssociationResponse>(),
            GetApiAssociationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Domain Name
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetDomainNameResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDomainNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a custom DomainName object.
    /// </remarks>
    public Task<GetDomainNameResponse> GetDomainName(GetDomainNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domainnames/{domainName}"),
            [new TemplateParam("domainName", request.DomainName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetDomainNameResponse>(),
            GetDomainNameError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Domain Names
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListDomainNamesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDomainNamesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists multiple custom domain names.
    /// </remarks>
    public Task<ListDomainNamesResponse> ListDomainNames(ListDomainNamesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domainnames"),
            [],
            [new Param("nextToken", request.NextToken), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListDomainNamesResponse>(),
            ListDomainNamesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Domain Name
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateDomainNameResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDomainNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a custom DomainName object.
    /// </remarks>
    public Task<UpdateDomainNameResponse> UpdateDomainName(UpdateDomainNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/domainnames/{domainName}"),
            [new TemplateParam("domainName", request.DomainName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateDomainNameResponse>(),
            UpdateDomainNameError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
