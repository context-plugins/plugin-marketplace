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
using Boomi.Requests.Sources;

namespace Boomi.Api;

/// <summary>
/// Manage data sources that contribute records to the master data hub for matching and merging.
/// </summary>
public sealed class Sources
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Sources(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi Create a source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourceBoomiDataHubSourcesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new data source within the repository representing a system that contributes records to the master data hub.
    /// </remarks>
    public Task<SourceBoomiDataHubSourcesApi> CreateSource(CreateSourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}/sources"),
            [new TemplateParam("repositoryId", request.RepositoryId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SourceBoomiDataHubSourcesApi>(),
            CreateSourceError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi List sources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoriesSourcesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSourcesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all data sources configured within a specific repository.
    /// </remarks>
    public Task<RepositoriesSourcesResponse> ListSources(ListSourcesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}/sources"),
            [new TemplateParam("repositoryId", request.RepositoryId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RepositoriesSourcesResponse>(),
            ListSourcesError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
