using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core;
using CommonElements.Core.Exceptions;
using CommonElements.Core.Models;
using CommonElements.Core.Request;
using CommonElements.Core.Response;
using CommonElements.Errors;
using CommonElements.Models;
using CommonElements.Requests.DatasetCatalog;

namespace CommonElements.Api;

/// <summary>
/// What the platform holds, and what it holds for one association. Start here: the catalog names every resource, the plan it needs, and the caveat that stops an unmatched jurisdiction reading as a clean record.
/// </summary>
public sealed class DatasetCatalog
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DatasetCatalog(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// What the platform holds for one association across every resource, in one round…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsDatasetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatasetsAssociationIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// What the platform holds for one association across every resource, in one round trip: record counts, how many of each resource's sources could be measured, whether your key can read them, and the coverage caveat. The call to make before deciding which resource endpoints are worth a request.
    /// <list type="bullet">
    ///   <item><description>Counts are returned for resources above your plan on purpose. The size of what is behind the gate is the offer.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsDatasetsResponse> DatasetsAssociationIndex(DatasetsAssociationIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/datasets"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsDatasetsResponse>(),
            DatasetsAssociationIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The resource catalog: every published resource and every source behind it, with…
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DatasetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatasetsCatalogError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The resource catalog: every published resource and every source behind it, with display name, buyer summary, provenance, state footprint, coverage basis and caveat, the plan each needs, and whether your key can read it. Resources above your plan are listed deliberately — an absence you cannot see is indistinguishable from a clean record.
    /// </remarks>
    public Task<ApiV1DatasetsResponse> DatasetsCatalog(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/datasets"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DatasetsResponse>(),
            DatasetsCatalogError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
