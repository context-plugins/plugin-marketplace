using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Models;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Errors;
using Audioscrape.Models;
using Audioscrape.Requests.Workspaces;

namespace Audioscrape.Api;

/// <summary>
/// The canonical tenant surface: your workspace and its datasets, private included. Members-only — workspaces you don't belong to are 404s here; browse other people's published content via Libraries.
/// </summary>
public sealed class Workspaces
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Workspaces(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get workspace detail
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns one of your workspaces + ALL of its datasets regardless of visibility — including private datasets that never appear under <c>/api/libraries</c>. <c>{workspace}</c> accepts a slug or a numeric ID. Members only: a workspace you don't belong to returns 404.
    /// </remarks>
    public Task<WorkspaceDetail> GetWorkspace(GetWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/workspaces/{workspace}"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceDetail>(),
            GetWorkspaceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List workspace datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatasetList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWorkspaceDatasetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns every dataset in one of your workspaces — <c>public</c>, <c>workspace</c>, and <c>private</c> alike. Same <c>{workspace}</c> resolution (slug or numeric ID) and members-only access rules as <c>GET /api/workspaces/{workspace}</c>.
    /// </remarks>
    public Task<DatasetList> ListWorkspaceDatasets(ListWorkspaceDatasetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/workspaces/{workspace}/datasets"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DatasetList>(),
            ListWorkspaceDatasetsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List your workspaces
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWorkspacesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns every workspace the calling user is a member of, with the caller's role in each. <c>is_current</c> marks the workspace the authenticating API key (or session) is scoped to. Ordered current-first, then by name.
    /// </remarks>
    public Task<WorkspaceList> ListWorkspaces(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/workspaces"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceList>(),
            ListWorkspacesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
