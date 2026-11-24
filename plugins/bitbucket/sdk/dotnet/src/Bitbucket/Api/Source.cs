using System;
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
using Bitbucket.Requests.Source;

namespace Bitbucket.Api;

/// <summary>
/// Browse the source code in the repository and
/// create new commits by uploading.
/// </summary>
public sealed class Source
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Source(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List commits that modified a file
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedFiles"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of commits that modified the specified file.
    /// <para>
    /// Commits are returned in reverse chronological order. This is roughly
    /// equivalent to the following commands:
    /// </para>
    /// <para>
    /// $ git log --follow --date-order
    /// </para>
    /// <para>
    /// By default, Bitbucket will follow renames and the path name in the
    /// returned entries reflects that. This can be turned off using the
    /// <c>?renames=false</c> query parameter.
    /// </para>
    /// <para>
    /// Results are returned in descending chronological order by default, and
    /// like most endpoints you can
    /// filter and sort the response to
    /// only provide exactly the data you want.
    /// </para>
    /// <para>
    /// The example response returns commits made before 2011-05-18 against a file
    /// named <c>README.rst</c>. The results are filtered to only return the path and
    /// date. This request can be made using:
    /// </para>
    /// <code>
    /// $ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
    /// '?fields=values.next,values.path,values.commit.date&amp;q=commit.date&lt;=2011-05-18'
    /// </code>
    /// <para>
    /// In the response you can see that the file was renamed to <c>README.rst</c>
    /// by the commit made on 2011-05-16, and was previously named <c>README.txt</c>.
    /// </para>
    /// </remarks>
    public Task<PaginatedFiles> GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2(GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("path", request.Path),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("renames", request.Renames), new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedFiles>(),
            GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the root directory of the main branch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedTreeEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugSrc2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint redirects the client to the directory listing of the
    /// root directory on the main branch.
    /// <para>
    /// This is equivalent to directly hitting
    /// /2.0/repositories/{username}/{repo_slug}/src/{commit}/{path}
    /// without having to know the name or SHA1 of the repo's main branch.
    /// </para>
    /// <para>
    /// To create new commits, POST to this endpoint
    /// </para>
    /// </remarks>
    public Task<PaginatedTreeEntry> GetRepositoriesByWorkspaceByRepoSlugSrc2(GetRepositoriesByWorkspaceByRepoSlugSrc2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/src"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedTreeEntry>(),
            GetRepositoriesByWorkspaceByRepoSlugSrc2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get file or directory contents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedTreeEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoints is used to retrieve the contents of a single file,
    /// or the contents of a directory at a specified revision.
    /// </remarks>
    public Task<PaginatedTreeEntry> GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2(GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/src/{commit}/{path}"),
            [
                new TemplateParam("commit", request.Commit),
                new TemplateParam("path", request.Path),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [
                new Param("format", request.Format),
                new Param("q", request.Q),
                new Param("sort", request.Sort),
                new Param("max_depth", request.MaxDepth),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedTreeEntry>(),
            GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a commit by uploading a file
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugSrc2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint is used to create new commits in the repository by
    /// uploading files.
    /// </remarks>
    public Task PostRepositoriesByWorkspaceByRepoSlugSrc2(PostRepositoriesByWorkspaceByRepoSlugSrc2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/src"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [
                new Param("message", request.Message),
                new Param("author", request.Author),
                new Param("parents", request.Parents),
                new Param("files", request.Files),
                new Param("branch", request.Branch),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PostRepositoriesByWorkspaceByRepoSlugSrc2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
