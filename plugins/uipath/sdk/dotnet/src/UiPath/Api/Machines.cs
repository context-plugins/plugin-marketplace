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
using UiPath.Requests.Machines;

namespace UiPath.Api;

/// <summary>
/// Manage machine templates and registered physical or virtual machines
/// </summary>
public sealed class Machines
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Machines(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Machines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataMachineCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMachinesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of machine templates and registered machines. Machine templates define the number of runtimes available for cloud robots, while standard machines represent physical or virtual machines where Unattended Robot is installed.
    /// </remarks>
    public Task<ODataMachineCollection> ListMachines(ListMachinesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Machines"),
            [],
            [new Param("$filter", request.Filter), new Param("$top", request.Top), new Param("$skip", request.Skip)],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataMachineCollection>(),
            ListMachinesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
