using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.Connections;

namespace Basiq.Api;

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
    /// Delete a connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a connection.
    /// </remarks>
    public Task DeleteConnection(DeleteConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/connections/{connectionId}"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("connectionId", request.ConnectionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteConnectionError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionGetResponseResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this to retrieve details of a specific connection. Note that due to security the loginId, password, securityCode are never returned.
    /// </remarks>
    public Task<ConnectionGetResponseResource> GetConnection(GetConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/connections/{connectionId}"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("connectionId", request.ConnectionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectionGetResponseResource>(),
            GetConnectionError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionsGetResponseResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetConnectionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of connections belonging to this user. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.
    /// </remarks>
    public Task<ConnectionsGetResponseResource> GetConnections(GetConnectionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/connections"),
            [new TemplateParam("userId", request.UserId)],
            [new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectionsGetResponseResource>(),
            GetConnectionsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Purge connection data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PurgeConnectionDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this endpoint to remove all user data related to a specific institution. Purging is only applicable for active user connections.
    /// <para>
    /// When Enrich data is updated, the Enrich results under transactions won’t automatically reflect these updates. To ensure the latest Enrich results are available, partners should first purge and then refresh connections. Without this step, any new insight reports generated will not include the latest enriched data.
    /// </para>
    /// <para>
    /// &gt; 📘 <b>Note:</b> Remember to purge and refresh connections to keep Enrich insights current.
    /// </para>
    /// </remarks>
    public Task PurgeConnectionData(PurgeConnectionDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/connections/{connectionId}/purge"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("connectionId", request.ConnectionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PurgeConnectionDataError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refresh a connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionResponseResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RefreshConnectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this to refresh an existing connection. This will not return a new connection. Instead will return a job resource which is resonsible for refreshing the connection and fetching data asynchronously. Use this job resource to track the connections progress.
    /// </remarks>
    public Task<ConnectionResponseResource> RefreshConnection(RefreshConnectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/connections/{connectionId}/refresh"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("connectionId", request.ConnectionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectionResponseResource>(),
            RefreshConnectionError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refresh all connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionsRefreshResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RefreshConnectionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this to refresh all connections belonging to the specified user.
    /// </remarks>
    public Task<ConnectionsRefreshResource> RefreshConnections(RefreshConnectionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/connections/refresh"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectionsRefreshResource>(),
            RefreshConnectionsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
