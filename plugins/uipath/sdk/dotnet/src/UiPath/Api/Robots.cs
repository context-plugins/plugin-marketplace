using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.Robots;

namespace UiPath.Api;

/// <summary>
/// Manage software robots registered with Orchestrator
/// </summary>
public sealed class Robots
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Robots(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Robots
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataRobotCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRobotsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of software robots registered with Orchestrator. Each robot entry includes connection state, machine assignment, user assignment, robot type, and licensing information. Supports OData filtering and pagination.
    /// </remarks>
    public Task<ODataRobotCollection> ListRobots(ListRobotsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Robots"),
            [],
            [
                new Param("$filter", request.Filter),
                new Param("$orderby", request.Orderby),
                new Param("$top", request.Top),
                new Param("$skip", request.Skip),
            ],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataRobotCollection>(),
            ListRobotsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
