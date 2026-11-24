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
using AmazonAppSync.Requests.Sourceapiassociations;

namespace AmazonAppSync.Api;

public sealed class Sourceapiassociations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Sourceapiassociations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Associate Source Graphql Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AssociateSourceGraphqlApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociateSourceGraphqlApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an association between a Merged API and source API using the Merged API's identifier.
    /// </remarks>
    public Task<AssociateSourceGraphqlApiResponse> AssociateSourceGraphqlApi(AssociateSourceGraphqlApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations"),
            [new TemplateParam("mergedApiIdentifier", request.MergedApiIdentifier)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AssociateSourceGraphqlApiResponse>(),
            AssociateSourceGraphqlApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disassociate Source Graphql Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisassociateSourceGraphqlApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisassociateSourceGraphqlApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an association between a Merged API and source API using the Merged API's identifier and the association ID.
    /// </remarks>
    public Task<DisassociateSourceGraphqlApiResponse> DisassociateSourceGraphqlApi(DisassociateSourceGraphqlApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}"),
            [
                new TemplateParam("mergedApiIdentifier", request.MergedApiIdentifier),
                new TemplateParam("associationId", request.AssociationId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<DisassociateSourceGraphqlApiResponse>(),
            DisassociateSourceGraphqlApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Source Api Association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetSourceApiAssociationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSourceApiAssociationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a SourceApiAssociation object.
    /// </remarks>
    public Task<GetSourceApiAssociationResponse> GetSourceApiAssociation(GetSourceApiAssociationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}"),
            [
                new TemplateParam("mergedApiIdentifier", request.MergedApiIdentifier),
                new TemplateParam("associationId", request.AssociationId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetSourceApiAssociationResponse>(),
            GetSourceApiAssociationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Source Api Associations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSourceApiAssociationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSourceApiAssociationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the SourceApiAssociationSummary data.
    /// </remarks>
    public Task<ListSourceApiAssociationsResponse> ListSourceApiAssociations(ListSourceApiAssociationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/sourceApiAssociations"),
            [new TemplateParam("apiId", request.ApiId)],
            [new Param("nextToken", request.NextToken), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListSourceApiAssociationsResponse>(),
            ListSourceApiAssociationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Source Api Association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateSourceApiAssociationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSourceApiAssociationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates some of the configuration choices of a particular source API association.
    /// </remarks>
    public Task<UpdateSourceApiAssociationResponse> UpdateSourceApiAssociation(UpdateSourceApiAssociationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}"),
            [
                new TemplateParam("associationId", request.AssociationId),
                new TemplateParam("mergedApiIdentifier", request.MergedApiIdentifier),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateSourceApiAssociationResponse>(),
            UpdateSourceApiAssociationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
