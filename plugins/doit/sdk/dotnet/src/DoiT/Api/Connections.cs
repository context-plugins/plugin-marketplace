using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Connections;

namespace DoiT.Api;

/// <summary>
/// Manage cloud provider connections used in CloudFlow workflows (AWS and GCP).
/// </summary>
public sealed class Connections
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Connections(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowConnection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCloudflowConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new cloud provider connection. Exactly one of <c>gcpConfig</c> or <c>awsConfig</c> must be supplied.
    /// Returns <c>400 invalid_connection_config</c> when both or neither are present.
    /// </remarks>
    public Task<CloudflowConnection> CreateCloudflowConnection(CreateCloudflowConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/connections"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CloudflowConnection>(),
            CreateCloudflowConnectionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCloudflowConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a connection. Returns 409 if the connection is referenced by one or more flows.
    /// </remarks>
    public Task DeleteCloudflowConnection(DeleteCloudflowConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/connections/{connectionId}"),
            [new TemplateParam("connectionId", request.ConnectionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCloudflowConnectionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowConnection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCloudflowConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single connection by ID.
    /// </remarks>
    public Task<CloudflowConnection> GetCloudflowConnection(GetCloudflowConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/connections/{connectionId}"),
            [new TemplateParam("connectionId", request.ConnectionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowConnection>(),
            GetCloudflowConnectionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowConnectionListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCloudflowConnectionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a cursor-paginated list of cloud provider connections for the authenticated tenant.
    /// </remarks>
    public Task<CloudflowConnectionListResponse> ListCloudflowConnections(ListCloudflowConnectionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/connections"),
            [],
            [new Param("maxResults", request.MaxResults), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowConnectionListResponse>(),
            ListCloudflowConnectionsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowConnection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCloudflowConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially updates a connection. All fields are optional.
    /// At most one of <c>gcpConfig</c> or <c>awsConfig</c> may be set per request.
    /// </remarks>
    public Task<CloudflowConnection> UpdateCloudflowConnection(UpdateCloudflowConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/connections/{connectionId}"),
            [new TemplateParam("connectionId", request.ConnectionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CloudflowConnection>(),
            UpdateCloudflowConnectionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
