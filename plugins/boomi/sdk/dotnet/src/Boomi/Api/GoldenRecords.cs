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
using Boomi.Requests.GoldenRecords;

namespace Boomi.Api;

/// <summary>
/// Query and manage the authoritative master records that result from matching and merging source records.
/// </summary>
public sealed class GoldenRecords
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GoldenRecords(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi List golden records
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoriesUniversesRecordsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGoldenRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of golden records from the specified master data domain (universe).
    /// </remarks>
    public Task<RepositoriesUniversesRecordsResponse> ListGoldenRecords(ListGoldenRecordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}/universes/{universeId}/records"),
            [
                new TemplateParam("repositoryId", request.RepositoryId),
                new TemplateParam("universeId", request.UniverseId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RepositoriesUniversesRecordsResponse>(),
            ListGoldenRecordsError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
