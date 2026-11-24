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
using UiPath.Requests.Folders;

namespace UiPath.Api;

/// <summary>
/// Manage organizational folders for grouping automation resources
/// </summary>
public sealed class Folders
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Folders(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath List Folders
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataFolderCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFoldersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of organizational folders accessible to the authenticated user. Folders group automation resources such as processes, robots, assets, and queues. Each folder has a unique ID used in the X-UIPATH-OrganizationUnitId request header.
    /// </remarks>
    public Task<ODataFolderCollection> ListFolders(ListFoldersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Folders"),
            [],
            [new Param("$filter", request.Filter), new Param("$top", request.Top), new Param("$skip", request.Skip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataFolderCollection>(),
            ListFoldersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
