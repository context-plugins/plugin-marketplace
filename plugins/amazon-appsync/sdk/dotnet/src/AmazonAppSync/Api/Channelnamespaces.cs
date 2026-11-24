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
using AmazonAppSync.Requests.Channelnamespaces;

namespace AmazonAppSync.Api;

public sealed class Channelnamespaces
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Channelnamespaces(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Channel Namespace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateChannelNamespaceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateChannelNamespaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a ChannelNamespace for an Api.
    /// </remarks>
    public Task<CreateChannelNamespaceResponse> CreateChannelNamespace(CreateChannelNamespaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/apis/{apiId}/channelNamespaces"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateChannelNamespaceResponse>(),
            CreateChannelNamespaceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Channel Namespace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteChannelNamespaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a ChannelNamespace.
    /// </remarks>
    public Task<object> DeleteChannelNamespace(DeleteChannelNamespaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/apis/{apiId}/channelNamespaces/{name}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteChannelNamespaceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Channel Namespace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetChannelNamespaceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetChannelNamespaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the channel namespace for a specified Api.
    /// </remarks>
    public Task<GetChannelNamespaceResponse> GetChannelNamespace(GetChannelNamespaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/apis/{apiId}/channelNamespaces/{name}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("name", request.Name)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetChannelNamespaceResponse>(),
            GetChannelNamespaceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Channel Namespaces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListChannelNamespacesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListChannelNamespacesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level details for the channel namespace. To retrieve code handlers, use GetChannelNamespace.
    /// </remarks>
    public Task<ListChannelNamespacesResponse> ListChannelNamespaces(ListChannelNamespacesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/apis/{apiId}/channelNamespaces"),
            [new TemplateParam("apiId", request.ApiId)],
            [new Param("nextToken", request.NextToken), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListChannelNamespacesResponse>(),
            ListChannelNamespacesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Channel Namespace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateChannelNamespaceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateChannelNamespaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a ChannelNamespace associated with an Api.
    /// </remarks>
    public Task<UpdateChannelNamespaceResponse> UpdateChannelNamespace(UpdateChannelNamespaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/apis/{apiId}/channelNamespaces/{name}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateChannelNamespaceResponse>(),
            UpdateChannelNamespaceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
