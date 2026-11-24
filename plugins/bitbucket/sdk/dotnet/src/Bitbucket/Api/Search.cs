using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Errors;
using Bitbucket.Models;
using Bitbucket.Requests.Search;

namespace Bitbucket.Api;

public sealed class Search
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Search(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search for code in a user's repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResultPage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for code in the repositories of the specified user.
    /// <para>
    /// Note that searches can match in the file's text (<c>content_matches</c>),
    /// the path (<c>path_matches</c>), or both.
    /// </para>
    /// <para>
    /// You can use the same syntax for the search query as in the UI.
    /// E.g. to search for "foo" only within the repository "demo",
    /// use the query parameter <c>search_query=foo+repo:demo</c>.
    /// </para>
    /// <para>
    /// Similar to other APIs, you can request more fields using a
    /// <c>fields</c> query parameter. E.g. to get some more information about
    /// the repository of matched files, use the query parameter
    /// <c>search_query=foo&amp;fields=%2Bvalues.file.commit.repository</c>
    /// (the <c>%2B</c> is a URL-encoded <c>+</c>).
    /// </para>
    /// </remarks>
    public Task<SearchResultPage> SearchAccount(SearchAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/search/code"),
            [new TemplateParam("selected_user", request.SelectedUser)],
            [
                new Param("search_query", request.SearchQuery),
                new Param("page", request.Page),
                new Param("pagelen", request.Pagelen),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchResultPage>(),
            SearchAccountError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search for code in a team's repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResultPage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for code in the repositories of the specified team.
    /// <para>
    /// Note that searches can match in the file's text (<c>content_matches</c>),
    /// the path (<c>path_matches</c>), or both.
    /// </para>
    /// <para>
    /// You can use the same syntax for the search query as in the UI.
    /// E.g. to search for "foo" only within the repository "demo",
    /// use the query parameter <c>search_query=foo+repo:demo</c>.
    /// </para>
    /// <para>
    /// Similar to other APIs, you can request more fields using a
    /// <c>fields</c> query parameter. E.g. to get some more information about
    /// the repository of matched files, use the query parameter
    /// <c>search_query=foo&amp;fields=%2Bvalues.file.commit.repository</c>
    /// (the <c>%2B</c> is a URL-encoded <c>+</c>).
    /// </para>
    /// <para>
    /// Try <c>fields=%2Bvalues.*.*.*.*</c> to get an idea what's possible.
    /// </para>
    /// </remarks>
    public Task<SearchResultPage> SearchTeam(SearchTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{username}/search/code"),
            [new TemplateParam("username", request.Username)],
            [
                new Param("search_query", request.SearchQuery),
                new Param("page", request.Page),
                new Param("pagelen", request.Pagelen),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchResultPage>(),
            SearchTeamError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search for code in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResultPage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for code in the repositories of the specified workspace.
    /// <para>
    /// Note that searches can match in the file's text (<c>content_matches</c>),
    /// the path (<c>path_matches</c>), or both.
    /// </para>
    /// <para>
    /// You can use the same syntax for the search query as in the UI.
    /// E.g. to search for "foo" only within the repository "demo",
    /// use the query parameter <c>search_query=foo+repo:demo</c>.
    /// </para>
    /// <para>
    /// Similar to other APIs, you can request more fields using a
    /// <c>fields</c> query parameter. E.g. to get some more information about
    /// the repository of matched files, use the query parameter
    /// <c>search_query=foo&amp;fields=%2Bvalues.file.commit.repository</c>
    /// (the <c>%2B</c> is a URL-encoded <c>+</c>).
    /// </para>
    /// <para>
    /// Try <c>fields=%2Bvalues.*.*.*.*</c> to get an idea what's possible.
    /// </para>
    /// </remarks>
    public Task<SearchResultPage> SearchWorkspace(SearchWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/search/code"),
            [new TemplateParam("workspace", request.Workspace)],
            [
                new Param("search_query", request.SearchQuery),
                new Param("page", request.Page),
                new Param("pagelen", request.Pagelen),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchResultPage>(),
            SearchWorkspaceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
