using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.Repositories;

namespace Shortcut.Api;

public sealed class Repositories
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Repositories(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Repository"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Repository returns information about the selected Repository.
    /// </remarks>
    public Task<Repository> GetRepository(GetRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/repositories/{repo-public-id}"),
            [new TemplateParam("repo-public-id", request.RepoPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Repository>(),
            GetRepositoryError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Repositories
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Repository"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRepositoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Repositories returns a list of all Repositories and their attributes.
    /// </remarks>
    public Task<IReadOnlyList<Repository>> ListRepositories(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/repositories"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Repository>>(),
            ListRepositoriesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
