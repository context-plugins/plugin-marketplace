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
using Bitbucket.Requests.Downloads;

namespace Bitbucket.Api;

/// <summary>
/// Access the list of download links associated with the repository.
/// </summary>
public sealed class Downloads
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Downloads(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a download artifact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified download artifact from the repository.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilename(DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/downloads/{filename}"),
            [
                new TemplateParam("filename", request.Filename),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List download artifacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugDownloadsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of download links associated with the repository.
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugDownloads(GetRepositoriesByWorkspaceByRepoSlugDownloadsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/downloads"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRepositoriesByWorkspaceByRepoSlugDownloadsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a download artifact link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return a redirect to the contents of a download artifact.
    /// <para>
    /// This endpoint returns the actual file contents and not the artifact's
    /// metadata.
    /// </para>
    /// <para>
    /// $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
    /// Hello World
    /// </para>
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilename(GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/downloads/{filename}"),
            [
                new TemplateParam("filename", request.Filename),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload a download artifact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugDownloadsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload new download artifacts.
    /// <para>
    /// To upload files, perform a <c>multipart/form-data</c> POST containing one
    /// or more <c>files</c> fields:
    /// </para>
    /// <para>
    /// $ echo Hello World &gt; hello.txt
    /// $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt
    /// </para>
    /// <para>
    /// When a file is uploaded with the same name as an existing artifact,
    /// then the existing file will be replaced.
    /// </para>
    /// </remarks>
    public Task PostRepositoriesByWorkspaceByRepoSlugDownloads(PostRepositoriesByWorkspaceByRepoSlugDownloadsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/downloads"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PostRepositoriesByWorkspaceByRepoSlugDownloadsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
