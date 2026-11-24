using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Compabase.Core;
using Compabase.Core.Authentication;
using Compabase.Core.Exceptions;
using Compabase.Core.Models;
using Compabase.Core.Request;
using Compabase.Core.Response;
using Compabase.Errors;
using Compabase.Requests.Tenders;

namespace Compabase.Api;

public sealed class Tenders
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tenders(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Public tenders in Poland (BZP + TED)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTendersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Polish public tenders — national notices from the Public Procurement Bulletin (BZP) and EU-threshold notices
    /// for Poland from TED — with contracting authority, value, deadlines and (for awarded notices) the winner.
    /// </remarks>
    public Task<object> GetTenders(GetTendersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tenders"),
            [],
            [
                new Param("status", request.Status),
                new Param("industry", request.Industry),
                new Param("source", request.Source),
                new Param("region", request.Region),
                new Param("city", request.City),
                new Param("postal", request.Postal),
                new Param("kind", request.Kind),
                new Param("value_min", request.ValueMin),
                new Param("value_max", request.ValueMax),
                new Param("currency", request.Currency),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetTendersError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Largest recent contract awards
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTendersAwardsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Largest recent public contract awards in Poland with the winning company (KRS when matched).
    /// </remarks>
    public Task<object> GetTendersAwards(GetTendersAwardsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tenders/awards"),
            [],
            [new Param("industry", request.Industry), new Param("min", request.Min)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetTendersAwardsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
