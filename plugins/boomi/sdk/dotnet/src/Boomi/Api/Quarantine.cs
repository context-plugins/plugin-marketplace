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
using Boomi.Requests.Quarantine;

namespace Boomi.Api;

/// <summary>
/// Manage quarantined records that could not be automatically processed due to data quality issues.
/// </summary>
public sealed class Quarantine
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Quarantine(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi List quarantine entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RepositoriesUniversesQuarantineResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListQuarantineEntriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns records held in quarantine that could not be automatically processed due to data quality or matching issues.
    /// </remarks>
    public Task<RepositoriesUniversesQuarantineResponse> ListQuarantineEntries(ListQuarantineEntriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBoomiDataHubGoldenRecordsApi(
                "/repositories/{repositoryId}/universes/{universeId}/quarantine"),
            [
                new TemplateParam("repositoryId", request.RepositoryId),
                new TemplateParam("universeId", request.UniverseId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RepositoriesUniversesQuarantineResponse>(),
            ListQuarantineEntriesError.Response,
            AuthScheme.Any(_auth.BasicAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
