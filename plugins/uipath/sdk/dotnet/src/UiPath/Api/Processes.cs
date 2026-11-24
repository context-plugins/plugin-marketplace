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
using UiPath.Requests.Processes;

namespace UiPath.Api;

/// <summary>
/// Manage automation processes (published packages deployed to folders)
/// </summary>
public sealed class Processes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Processes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Processes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataProcessCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListProcessesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of automation processes deployed in the current folder. Each process represents a specific version of a published package configured for execution. Supports OData filtering and pagination.
    /// </remarks>
    public Task<ODataProcessCollection> ListProcesses(ListProcessesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Processes"),
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
            JsonResponse.Create<ODataProcessCollection>(),
            ListProcessesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
