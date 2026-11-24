using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Boomi.Core;
using Boomi.Core.Authentication;
using Boomi.Core.Exceptions;
using Boomi.Core.Models;
using Boomi.Core.Request;
using Boomi.Core.Response;
using Boomi.Errors;
using Boomi.Models;
using Boomi.Requests.Repositories;

namespace Boomi.Api;

/// <summary>
/// Manage DataHub repositories that contain master data domains.
/// </summary>
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
    /// Boomi Create a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Repository"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRepositoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new DataHub repository for managing master data.
    /// </remarks>
    public Task<Repository> CreateRepository(CreateRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Repository>(),
            CreateRepositoryError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Delete a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a DataHub repository and all its data.
    /// </remarks>
    public Task DeleteRepository(DeleteRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}"),
            [new TemplateParam("repositoryId", request.RepositoryId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoryError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Get a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Repository"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves details of a specific DataHub repository by its ID.
    /// </remarks>
    public Task<Repository> GetRepository(GetRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}"),
            [new TemplateParam("repositoryId", request.RepositoryId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Repository>(),
            GetRepositoryError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi List repositories
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRepositoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all DataHub repositories associated with the authenticated account.
    /// </remarks>
    public Task<RepositoriesResponse> ListRepositories(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RepositoriesResponse>(),
            ListRepositoriesError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
