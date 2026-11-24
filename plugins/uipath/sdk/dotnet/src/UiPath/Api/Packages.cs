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
using UiPath.Requests.Packages;

namespace UiPath.Api;

/// <summary>
/// Manage automation package uploads and versions
/// </summary>
public sealed class Packages
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Packages(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Packages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataPackageCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPackagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of automation packages uploaded to Orchestrator. Each package represents a versioned NuGet package containing one or more automation processes. Supports filtering by package name and pagination.
    /// </remarks>
    public Task<ODataPackageCollection> ListPackages(ListPackagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Packages"),
            [],
            [new Param("$filter", request.Filter), new Param("$top", request.Top), new Param("$skip", request.Skip)],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataPackageCollection>(),
            ListPackagesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
