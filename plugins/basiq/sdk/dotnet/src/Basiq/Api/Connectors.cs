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
using Basiq.Requests.Connectors;

namespace Basiq.Api;

public sealed class Connectors
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Connectors(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a connector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectorsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetConnectorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// NOTE: This end point requires authentication.
    /// </remarks>
    public Task<ConnectorsResponse1> GetConnector(GetConnectorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/connectors/{connectorId}/{method}"),
            [new TemplateParam("connectorId", request.ConnectorId), new TemplateParam("method", request.Method)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectorsResponse1>(),
            GetConnectorError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve connectors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetConnectorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// NOTE: This end point requires authentication.
    /// </remarks>
    public Task<ConnectorsResponse> GetConnectors(GetConnectorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/connectors"),
            [],
            [new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectorsResponse>(),
            GetConnectorsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
