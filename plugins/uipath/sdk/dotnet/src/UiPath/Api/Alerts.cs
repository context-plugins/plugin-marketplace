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
using UiPath.Requests.Alerts;

namespace UiPath.Api;

/// <summary>
/// Retrieve and manage system and automation alerts
/// </summary>
public sealed class Alerts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Alerts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Alerts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataAlertCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAlertsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of system and automation alerts. Alerts are raised for events such as job failures, robot disconnections, and queue SLA breaches. Supports OData filtering by severity, component, and read status.
    /// </remarks>
    public Task<ODataAlertCollection> ListAlerts(ListAlertsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Alerts"),
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
            JsonResponse.Create<ODataAlertCollection>(),
            ListAlertsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
