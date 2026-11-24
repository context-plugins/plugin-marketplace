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
using UiPath.Requests.Roles;

namespace UiPath.Api;

/// <summary>
/// Manage roles and their associated permissions
/// </summary>
public sealed class Roles
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Roles(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Roles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataRoleCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRolesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of roles defined in Orchestrator. Roles bundle sets of permissions together and are assigned to users or groups to control their access to resources and operations.
    /// </remarks>
    public Task<ODataRoleCollection> ListRoles(ListRolesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Roles"),
            [],
            [new Param("$filter", request.Filter), new Param("$top", request.Top), new Param("$skip", request.Skip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataRoleCollection>(),
            ListRolesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
