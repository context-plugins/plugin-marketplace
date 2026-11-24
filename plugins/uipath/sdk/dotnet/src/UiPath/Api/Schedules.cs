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
using UiPath.Requests.Schedules;

namespace UiPath.Api;

/// <summary>
/// Manage time-based and recurring triggers for automation processes
/// </summary>
public sealed class Schedules
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Schedules(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Process Schedules
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataScheduleCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSchedulesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of time-based triggers configured for automation processes. Each schedule defines when and how often a process should run, along with the target robots and input arguments.
    /// </remarks>
    public Task<ODataScheduleCollection> ListSchedules(ListSchedulesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/ProcessSchedules"),
            [],
            [new Param("$filter", request.Filter), new Param("$top", request.Top), new Param("$skip", request.Skip)],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataScheduleCollection>(),
            ListSchedulesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
