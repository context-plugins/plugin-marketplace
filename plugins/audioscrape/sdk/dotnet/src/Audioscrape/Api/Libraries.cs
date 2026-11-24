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
using Audioscrape.Requests.Libraries;

namespace Audioscrape.Api;

/// <summary>
/// Published content catalogs — public workspaces and published datasets. The organizational hierarchy: Library → Dataset → Item. Use these endpoints to browse content shared with everyone; for your own tenant, use Workspaces.
/// </summary>
public sealed class Libraries
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Libraries(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get dataset detail
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatasetDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDatasetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a dataset + a reference to its parent library, in a single response. Saves a round-trip when you have a dataset ID from a search result and need its context.
    /// </remarks>
    public Task<DatasetDetail> GetDataset(GetDatasetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/datasets/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DatasetDetail>(),
            GetDatasetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get library detail
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LibraryDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLibraryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns one library + the datasets the calling user can see. Public datasets are always returned; workspace-scoped datasets are returned only to members.
    /// </remarks>
    public Task<LibraryDetail> GetLibrary(GetLibraryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/libraries/{slug}"),
            [new TemplateParam("slug", request.Slug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LibraryDetail>(),
            GetLibraryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List public libraries
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LibraryList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListLibrariesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns every public library on Audioscrape, ordered by subscriber count. The <c>is_subscribed</c> field on each entry tells you whether the calling user is already a member.
    /// </remarks>
    public Task<LibraryList> ListLibraries(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/libraries"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LibraryList>(),
            ListLibrariesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
